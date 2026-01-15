import fs from 'fs'
import path from 'path'

export type ProjectKind = 'react-ts' | 'other'

export function detectProjectKind(rootDir: string): ProjectKind {
  const hasMainTsx = fs.existsSync(
    path.join(rootDir, 'src', 'main.tsx')
  )

  const hasTsConfig = fs.existsSync(
    path.join(rootDir, 'tsconfig.json')
  )

  if (!hasMainTsx || !hasTsConfig) {
    return 'other'
  }

  const pkgPath = path.join(rootDir, 'package.json')
  if (!fs.existsSync(pkgPath)) {
    return 'other'
  }

  const pkg = JSON.parse(
    fs.readFileSync(pkgPath, 'utf-8')
  )

  const deps = {
    ...pkg.dependencies,
    ...pkg.devDependencies
  }

  if (deps?.react) {
    return 'react-ts'
  }

  return 'other'
}