import { execa } from 'execa'

export async function runVite() {
  await execa(
    'npm',
    ['create', 'vite@latest', '--', '--no-immediate'],
    { stdio: 'inherit' }
  )
}