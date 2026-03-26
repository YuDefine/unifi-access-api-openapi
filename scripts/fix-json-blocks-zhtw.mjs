#!/usr/bin/env node
/**
 * Auto-fix JSON code blocks in zh-TW markdown files.
 * Same logic as fix-json-blocks.mjs but targeting zh-TW.
 */
import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { join } from 'path'

const root = join(import.meta.dirname, '..')
const dirs = ['docs/zh-TW/api']

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

        if (jsonStr.startsWith('-H ') || jsonStr.startsWith('curl ')) {
          output.push('```bash')
          jsonLines.forEach(l => output.push(l))
          output.push(closingLine)
          fileFixed++
          totalFixed++
          continue
        }

        let parsed = tryParse(jsonStr)

        if (!parsed) {
          let fixed = jsonStr
          fixed = fixed.replace(/\t/g, '  ')
          fixed = fixed.replace(/,(\s*[}\]])/g, '$1')
          parsed = tryParse(fixed)
        }

        if (parsed) {
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

console.log(`\nAuto-fixed: ${totalFixed} | Remaining: ${totalRemaining}`)

function tryParse(str) {
  try { return JSON.parse(str) } catch { return null }
}
