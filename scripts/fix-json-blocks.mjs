#!/usr/bin/env node
/**
 * Auto-fix JSON code blocks in markdown files:
 * 1. Pretty-print valid single-line JSON
 * 2. Fix trailing commas
 * 3. Convert tabs to 2 spaces
 * 4. Change curl commands in ```json to ```bash
 * 5. Try to fix and re-format valid-after-fix JSON
 */
import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { join } from 'path'

const root = join(import.meta.dirname, '..')
const dirs = ['docs/api']

let totalFixed = 0
let totalRemaining = 0

for (const dir of dirs) {
  const fullDir = join(root, dir)
  for (const file of readdirSync(fullDir).filter(f => f.endsWith('.md'))) {
    const filePath = join(fullDir, file)
    const relPath = join(dir, file)
    const content = readFileSync(filePath, 'utf-8')
    const lines = content.split('\n')
    const output = []
    let i = 0
    let fileFixed = 0

    while (i < lines.length) {
      if (lines[i].trim() === '```json') {
        const startIdx = i
        const jsonLines = []
        i++
        while (i < lines.length && lines[i].trim() !== '```') {
          jsonLines.push(lines[i])
          i++
        }
        const closingLine = i < lines.length ? lines[i] : '```'
        i++

        const jsonStr = jsonLines.join('\n').trim()

        // Check if it's actually a curl/shell command mistyped as json
        if (jsonStr.startsWith('-H ') || jsonStr.startsWith('curl ')) {
          output.push('```bash')
          jsonLines.forEach(l => output.push(l))
          output.push(closingLine)
          fileFixed++
          totalFixed++
          continue
        }

        // Try to parse as-is
        let parsed = tryParse(jsonStr)

        // If invalid, try fixes
        if (!parsed) {
          let fixed = jsonStr
          // Replace tabs with 2 spaces
          fixed = fixed.replace(/\t/g, '  ')
          // Remove trailing commas before } or ]
          fixed = fixed.replace(/,(\s*[}\]])/g, '$1')
          parsed = tryParse(fixed)
        }

        if (parsed) {
          // Pretty-print with 2-space indent
          const pretty = JSON.stringify(parsed, null, 2)
          const original = jsonLines.join('\n').trim()
          if (pretty !== original) {
            output.push('```json')
            output.push(pretty)
            output.push(closingLine)
            fileFixed++
            totalFixed++
          } else {
            output.push(lines[startIdx])
            jsonLines.forEach(l => output.push(l))
            output.push(closingLine)
          }
        } else {
          // Can't auto-fix, keep as-is
          output.push(lines[startIdx])
          jsonLines.forEach(l => output.push(l))
          output.push(closingLine)
          totalRemaining++
        }
        continue
      }

      output.push(lines[i])
      i++
    }

    if (fileFixed > 0) {
      writeFileSync(filePath, output.join('\n'))
      console.log(`✓ ${relPath}: ${fileFixed} block(s) fixed`)
    }
  }
}

console.log(`\nAuto-fixed: ${totalFixed} | Remaining (need manual fix): ${totalRemaining}`)

function tryParse(str) {
  try {
    return JSON.parse(str)
  } catch {
    return null
  }
}
