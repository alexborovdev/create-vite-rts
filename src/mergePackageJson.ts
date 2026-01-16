import fs from 'fs'
import path from 'path'
import { resolveLatestVersion } from './resolveLatestVersion.js'

type Package = {
  dependencies?: Record<string, string>
  devDependencies?: Record<string, string>
}

export async function mergePackageJson(
  projectRoot: string,
  templateRoot: string
) {
  const projectPkgPath = path.join(projectRoot, 'package.json')
  const templatePkgPath = path.join(
    templateRoot,
    'package.partial.json'
  )

  if (!fs.existsSync(templatePkgPath)) return

  const projectPkg = JSON.parse(
    fs.readFileSync(projectPkgPath, 'utf-8')
  ) as Package & Record<string, unknown>

  const templatePkg = JSON.parse(
    fs.readFileSync(templatePkgPath, 'utf-8')
  ) as Package

  projectPkg.dependencies ||= {}
  projectPkg.devDependencies ||= {}

  for (const name of Object.keys(templatePkg.dependencies || {})) {
    if (!projectPkg.dependencies[name]) {
      projectPkg.dependencies[name] =
        await resolveLatestVersion(name)
    }
  }

  for (const name of Object.keys(templatePkg.devDependencies || {})) {
    if (!projectPkg.devDependencies[name]) {
      projectPkg.devDependencies[name] =
        await resolveLatestVersion(name)
    }
  }

  fs.writeFileSync(
    projectPkgPath,
    JSON.stringify(projectPkg, null, 2)
  )
}