#!/usr/bin/env node

import path from 'path'
import { fileURLToPath } from 'url'

import { runVite } from './runVite.js'
import { detectProjectKind } from './detect.js'
import { getDirectories, findNewDirectory } from './findCreatedDir.js'
import { applyTemplate } from './applyTemplate.js'
import { mergePackageJson } from './mergePackageJson.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function main() {
  const cwd = process.cwd()
  const before = getDirectories(cwd)

  await runVite()

  const after = getDirectories(cwd)
  const createdDir = findNewDirectory(before, after)

  if (!createdDir) {
    console.log('No project directory detected')
    return
  }

  const projectRoot = path.join(cwd, createdDir)
  const kind = detectProjectKind(projectRoot)

  if (kind === 'react-ts') {
    applyTemplate(projectRoot)

    const templateRoot = path.resolve(
      __dirname,
      '..',
      'templates',
      'react-ts'
    )

    await mergePackageJson(projectRoot, templateRoot)

    console.log('React + TypeScript project scaffolded')
  } else {
    console.log(`Detected project type: ${kind}`)
  }
}

main()