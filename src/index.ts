#!/usr/bin/env node

import path from 'path'
import { runVite } from './runVite'
import { detectProjectKind } from './detect'
import { getDirectories, findNewDirectory } from './findCreatedDir'

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

  console.log(`Detected project type: ${kind}`)
}

main()