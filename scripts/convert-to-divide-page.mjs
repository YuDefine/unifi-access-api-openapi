/**
 * Batch convert API doc markdown files to use vitepress-theme-api's DividePage component.
 *
 * Layout per ## endpoint section (3-zone):
 *   1. <DividePage> left:  description + metadata
 *   2. <DividePage> right: code samples (request/response)
 *   3. Full-width below:   parameter tables
 *
 * Also converts inline HTML tables to markdown tables.
 * Idempotent: strips existing DividePage wrappers before re-converting.
 */

import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { join } from 'path'

const SKIP_FILES = ['introduction.md', 'overview.md', 'changelog.md']

// ── Strip existing DividePage wrappers ───────────────────────────────────────

function stripDividePage(content) {
  // Remove <script setup> import block
  content = content.replace(
    /^<script setup>\s*\nimport\s*\{[^}]*\}\s*from\s*['"]vitepress-theme-api['"]\s*\n<\/script>\s*\n*/m,
    ''
  )
  // Remove DividePage wrappers and template tags, keep inner content
  content = content.replace(/<DividePage>\n/g, '')
  content = content.replace(/<\/DividePage>\n?/g, '')
  content = content.replace(/<template #left>\n?/g, '')
  content = content.replace(/<template #right>\n?/g, '')
  content = content.replace(/<\/template>\n?/g, '')
  return content
}

// ── HTML table → Markdown table ──────────────────────────────────────────────

function htmlTableToMarkdown(html) {
  const rows = []
  const rowRegex = /<tr>(.*?)<\/tr>/gs
  let match
  while ((match = rowRegex.exec(html)) !== null) {
    const cells = []
    const cellRegex = /<td>(.*?)<\/td>/gs
    let cellMatch
    while ((cellMatch = cellRegex.exec(match[1])) !== null) {
      cells.push(cellMatch[1].trim().replace(/\|/g, '\\|'))
    }
    if (cells.length > 0) rows.push(cells)
  }
  if (rows.length < 2) return html

  const maxCols = Math.max(...rows.map(r => r.length))
  const header = [...rows[0]]
  while (header.length < maxCols) header.push('')

  let md = '| ' + header.join(' | ') + ' |\n'
  md += '| ' + header.map(() => '---').join(' | ') + ' |\n'
  for (let i = 1; i < rows.length; i++) {
    const row = [...rows[i]]
    while (row.length < maxCols) row.push('')
    md += '| ' + row.join(' | ') + ' |\n'
  }
  return md.trimEnd()
}

// ── Classification helpers ───────────────────────────────────────────────────

/** Code samples → right side of DividePage */
function isCodeSample(title) {
  return /sample|範例|payload|酬載/i.test(title)
}

/** Response Body with code block (not table) → right side */
function isCodeResponseBody(title, content) {
  if (!/response body|回應主體|回應內容/i.test(title)) return false
  return content.includes('```') && !content.includes('| ')
}

/** Parameter/table subsections → full-width below DividePage */
function isTableSubsection(title, content) {
  const lowerTitle = title.toLowerCase()
  const tableKeywords = /request header|request body|request path|query param|response body|請求標頭|請求主體|請求路徑|查詢參數|回應主體/i
  if (tableKeywords.test(lowerTitle) && content.includes('| ')) return true
  return false
}

function isApiEndpointSection(content) {
  const hasMeta = /Request URL:|請求 URL/i.test(content)
  const hasCode = content.includes('```')
  return hasMeta && hasCode
}

// ── Pre-processing ───────────────────────────────────────────────────────────

function normalizeBareSampleHeaders(text) {
  return text
    .replace(
      /^((?:Request|Response)\s+Sample[^\n]*?)\s*$/gm,
      (match) => {
        if (match.trimStart().startsWith('###')) return match
        return `### ${match.trim()}`
      }
    )
    .replace(
      /^((?:請求|回應)範例[^\n]*?)\s*$/gm,
      (match) => {
        if (match.trimStart().startsWith('###')) return match
        return `### ${match.trim()}`
      }
    )
}

// ── Section splitting ────────────────────────────────────────────────────────

function splitByH2(lines) {
  const sections = []
  let current = { heading: '', headingLine: '', lines: [] }
  for (const line of lines) {
    if (/^## /.test(line)) {
      sections.push(current)
      current = { heading: line.slice(3), headingLine: line, lines: [] }
    } else {
      current.lines.push(line)
    }
  }
  sections.push(current)
  return sections
}

function splitByH3(lines) {
  const sections = []
  let current = { title: '', lines: [] }
  for (const line of lines) {
    if (/^### /.test(line)) {
      if (current.title || current.lines.some(l => l.trim())) {
        sections.push(current)
      }
      current = { title: line.slice(4), lines: [] }
    } else {
      current.lines.push(line)
    }
  }
  if (current.title || current.lines.some(l => l.trim())) {
    sections.push(current)
  }
  return sections
}

// ── Core conversion ──────────────────────────────────────────────────────────

function processEndpointSection(sectionLines) {
  const preambleLines = []
  const restLines = []
  let foundH3 = false

  for (const line of sectionLines) {
    if (/^### /.test(line) && !foundH3) foundH3 = true
    if (foundH3) {
      restLines.push(line)
    } else {
      preambleLines.push(line)
    }
  }

  const subsections = splitByH3(restLines)

  // 3 zones: left (description), right (code samples), below (tables)
  const rightParts = []
  const belowParts = []

  for (const sub of subsections) {
    const content = sub.lines.join('\n')
    const block = sub.title
      ? `### ${sub.title}\n${content}`
      : content

    if (isCodeSample(sub.title) || isCodeResponseBody(sub.title, content)) {
      rightParts.push(block.trim())
    } else {
      // Tables and other non-sample subsections go below
      belowParts.push(block.trim())
    }
  }

  if (rightParts.length === 0) return null

  const left = preambleLines.join('\n').trim()
  const right = rightParts.join('\n\n')
  const below = belowParts.join('\n\n')

  let result = ''

  // DividePage: description left, code samples right
  result += '\n<DividePage>\n<template #left>\n\n'
  result += left
  result += '\n\n</template>\n<template #right>\n\n'
  result += right
  result += '\n\n</template>\n</DividePage>\n'

  // Full-width parameter tables below
  if (below) {
    result += '\n' + below + '\n'
  }

  return result
}

function convertFile(filePath) {
  let content = readFileSync(filePath, 'utf-8')

  // Strip existing conversion for idempotent re-run
  if (content.includes('DividePage')) {
    content = stripDividePage(content)
  }

  // Convert HTML tables to markdown
  content = content.replace(/<table>[\s\S]*?<\/table>/g, htmlTableToMarkdown)

  // Normalize bare sample headers
  content = normalizeBareSampleHeaders(content)

  const lines = content.split('\n')
  const h2Sections = splitByH2(lines)

  let hasConversions = false
  let output = '<script setup>\nimport { DividePage } from \'vitepress-theme-api\'\n</script>\n\n'

  for (const section of h2Sections) {
    if (!section.headingLine) {
      output += section.lines.join('\n') + '\n'
      continue
    }

    output += '\n' + section.headingLine + '\n'

    const sectionContent = section.lines.join('\n')

    if (isApiEndpointSection(sectionContent)) {
      const result = processEndpointSection(section.lines)
      if (result) {
        output += result
        hasConversions = true
        continue
      }
    }

    // Non-endpoint section: keep as-is
    output += sectionContent
    if (!output.endsWith('\n')) output += '\n'
  }

  if (!hasConversions) {
    console.log(`skip (no endpoints): ${filePath}`)
    return false
  }

  // Clean up excessive blank lines
  output = output.replace(/\n{4,}/g, '\n\n\n')

  writeFileSync(filePath, output)
  console.log(`converted: ${filePath}`)
  return true
}

// ── Main ─────────────────────────────────────────────────────────────────────

const root = process.cwd()
const dirs = [
  join(root, 'docs/api'),
  join(root, 'docs/zh-TW/api'),
]

let converted = 0
let skipped = 0

for (const dir of dirs) {
  const files = readdirSync(dir)
    .filter(f => f.endsWith('.md') && !SKIP_FILES.includes(f))

  for (const file of files) {
    if (convertFile(join(dir, file))) {
      converted++
    } else {
      skipped++
    }
  }
}

console.log(`\nDone: ${converted} converted, ${skipped} skipped`)
