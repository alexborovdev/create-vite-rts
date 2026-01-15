#!/usr/bin/env node

import path from 'path'
import { runVite } from './runVite'
import { detectProjectKind } from './detect'
import { getDirectories, findNewDirectory } from './findCreatedDir'
import { applyTemplate } from './applyTemplate'

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
    console.log('React + TypeScript template applied')
  } else {
    console.log(`Detected project type: ${kind}`)
  }
}

main()