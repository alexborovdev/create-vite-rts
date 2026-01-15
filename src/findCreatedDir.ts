import fs from 'fs'

export function getDirectories(root: string): Set<string> {
  return new Set(
    fs
      .readdirSync(root, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name)
  )
}

export function findNewDirectory(
  before: Set<string>,
  after: Set<string>
): string | null {
  for (const dir of after) {
    if (!before.has(dir)) {
      return dir
    }
  }

  return null
}