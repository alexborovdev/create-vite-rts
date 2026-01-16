import { execa } from 'execa'

export async function resolveLatestVersion(
  pkgName: string
): Promise<string> {
  const { stdout } = await execa(
    'npm',
    ['view', pkgName, 'version'],
    { stdio: 'pipe' }
  )

  return `^${stdout.trim()}`
}