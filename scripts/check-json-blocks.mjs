#!/usr/bin/env node
/**
 * Find JSON code blocks in markdown files and report formatting issues:
 * - Single-line JSON that should be pretty-printed
 * - Invalid JSON
 * - Inconsistent indentation
 */
import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'

const dirs = ['docs/api', 'docs/zh-TW/api']
const root = join(import.meta.dirname, '..')

let issues = 0

for (const dir of dirs) {
  const fullDir = join(root, dir)
  for (const file of readdirSync(fullDir).filter(f => f.endsWith('.md'))) {
    const filePath = join(fullDir, file)
    const relPath = join(dir, file)
    const content = readFileSync(filePath, 'utf-8')
    const lines = content.split('\n')

    let inJson = false
    let jsonLines = []
    let startLine = 0

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]

      if (line.trim() === '```json') {
        inJson = true
        jsonLines = []
        startLine = i + 1
        continue
      }

      if (inJson && line.trim() === '```') {
        inJson = false
        const jsonStr = jsonLines.join('\n').trim()
        if (!jsonStr) continue

        // Check 1: Try to parse
        let parsed
        try {
          parsed = JSON.parse(jsonStr)
        } catch (e) {
          console.log(`\n❌ INVALID JSON — ${relPath}:${startLine + 1}`)
          console.log(`   Parse error: ${e.message}`)
          // Show first 200 chars
          console.log(`   Content: ${jsonStr.slice(0, 200)}${jsonStr.length > 200 ? '...' : ''}`)
          issues++
          continue
        }

        // Check 2: Single-line or poorly formatted
        const prettyStr = JSON.stringify(parsed, null, 2)
        const prettyLines = prettyStr.split('\n').length
        const actualLines = jsonLines.filter(l => l.trim()).length

        if (actualLines === 1 && prettyLines > 3) {
          console.log(`\n⚠️  SINGLE-LINE JSON (should be pretty-printed) — ${relPath}:${startLine + 1}`)
          console.log(`   ${actualLines} line(s) → would be ${prettyLines} lines if formatted`)
          console.log(`   Preview: ${jsonStr.slice(0, 150)}${jsonStr.length > 150 ? '...' : ''}`)
          issues++
          continue
        }

        // Check 3: Indentation inconsistency — compare with 2-space formatted version
        // Only check multi-line blocks
        if (actualLines > 1) {
          const currentIndents = jsonLines
            .filter(l => l.trim())
            .map(l => {
              const match = l.match(/^(\s*)/)
              return match ? match[1] : ''
            })
            .filter(indent => indent.length > 0)

          const hasTabs = currentIndents.some(i => i.includes('\t'))
          const hasMixed = currentIndents.some(i => i.includes('\t') && i.includes(' '))
          const spaces = [...new Set(currentIndents.map(i => i.length))].sort()

          if (hasTabs || hasMixed) {
            console.log(`\n⚠️  TAB/MIXED INDENTATION — ${relPath}:${startLine + 1}`)
            issues++
          }

          // Check if the formatted version differs significantly
          const normalizedActual = jsonStr.replace(/\s+/g, ' ').trim()
          const normalizedPretty = prettyStr.replace(/\s+/g, ' ').trim()
          if (normalizedActual === normalizedPretty && jsonStr !== prettyStr) {
            // Same content but different formatting — check if it's worth flagging
            const actualIndent = jsonLines.find(l => /^\s+\S/.test(l))
            if (actualIndent) {
              const indentSize = actualIndent.match(/^(\s+)/)[1].length
              if (indentSize !== 2 && indentSize !== 4) {
                console.log(`\n⚠️  NON-STANDARD INDENT (${indentSize} spaces) — ${relPath}:${startLine + 1}`)
                issues++
              }
            }
          }
        }
      }

      if (inJson) {
        jsonLines.push(line)
      }
    }
  }
}

if (issues === 0) {
  console.log('✅ All JSON blocks look good!')
} else {
  console.log(`\n────────────────────────`)
  console.log(`Found ${issues} issue(s) total.`)
}
