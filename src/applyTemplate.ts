import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function copyDir(from: string, to: string) {
  fs.mkdirSync(to, { recursive: true })

  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const srcPath = path.join(from, entry.name)
    const destPath = path.join(to, entry.name)

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath)
    } else {
      fs.copyFileSync(srcPath, destPath)
    }
  }
}

export function applyTemplate(projectRoot: string) {
  const templateRoot = path.resolve(
    __dirname,
    '..',
    'templates',
    'react-ts'
  )

  const srcDir = path.join(projectRoot, 'src')
  fs.rmSync(srcDir, { recursive: true, force: true })
  copyDir(path.join(templateRoot, 'src'), srcDir)

  const publicDir = path.join(projectRoot, 'public')
  fs.rmSync(publicDir, { recursive: true, force: true })
  fs.mkdirSync(publicDir)

  const rootFiles = [
    'vite.config.ts',
    'tsconfig.app.json',
    'global.d.ts',
  ]

  for (const file of rootFiles) {
    const from = path.join(templateRoot, file)
    const to = path.join(projectRoot, file)

    if (fs.existsSync(from)) {
      fs.copyFileSync(from, to)
    }
  }
}