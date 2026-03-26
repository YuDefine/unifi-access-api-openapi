#!/usr/bin/env node
/**
 * Split the single unifi-access-api.md into per-chapter files
 * and fix heading levels for VitePress.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'

const src = readFileSync(join(import.meta.dirname, '../docs/unifi-access-api.md'), 'utf-8')
const lines = src.split('\n')

// Chapter definitions: [startLine (1-indexed), slug, title]
const chapters = [
  [188, 'introduction', 'Introduction'],
  [230, 'overview', 'Overview'],
  [290, 'user', 'User'],
  [1741, 'visitor', 'Visitor'],
  [2487, 'access-policy', 'Access Policy'],
  [3404, 'credential', 'Credential'],
  [4253, 'space', 'Space'],
  [5024, 'device', 'Device'],
  [5255, 'system-log', 'System Log'],
  [5482, 'unifi-identity', 'UniFi Identity'],
  [5809, 'notification', 'Notification'],
  [6173, 'api-server', 'API Server'],
  [6243, 'changelog', 'Change Logs'],
]

const outDir = join(import.meta.dirname, '../docs/api')
mkdirSync(outDir, { recursive: true })

for (let i = 0; i < chapters.length; i++) {
  const [startLine, slug, title] = chapters[i]
  const endLine = i + 1 < chapters.length ? chapters[i + 1][0] : lines.length + 1

  // Extract lines (1-indexed to 0-indexed)
  const chunk = lines.slice(startLine - 1, endLine - 1)

  // Determine the chapter number prefix (e.g., "3." from "# 3. User")
  const chapterMatch = chunk[0].match(/^# (\d+)\.\s/)
  const chapterNum = chapterMatch ? chapterMatch[1] : null

  // Fix heading levels
  const fixed = chunk.map((line) => {
    if (!line.startsWith('# ')) return line

    // Chapter title line → keep as H1
    if (chapterNum && line.match(new RegExp(`^# ${chapterNum}\\.\\s`))) {
      return `# ${title}`
    }

    // Numbered sub-section like "# 3.1 Schemas" or "# 9.1.1 Event Structure"
    if (chapterNum && line.match(new RegExp(`^# ${chapterNum}\\.\\d+\\.\\d+`))) {
      // Sub-sub-section → H3
      return line.replace(/^# \d+\.\d+\.\d+\s*/, '### ')
    }
    if (chapterNum && line.match(new RegExp(`^# ${chapterNum}\\.\\d+`))) {
      // Sub-section → H2
      return line.replace(/^# \d+\.\d+\s*/, '## ')
    }

    // Unnumbered headings like "# Request Header", "# Response Body" → H3
    return '### ' + line.slice(2)
  })

  // Remove trailing blank lines
  while (fixed.length && fixed[fixed.length - 1].trim() === '') fixed.pop()

  writeFileSync(join(outDir, `${slug}.md`), fixed.join('\n') + '\n')
  console.log(`  ✓ ${slug}.md (${fixed.length} lines)`)
}

console.log(`\nDone! ${chapters.length} files written to docs/api/`)
