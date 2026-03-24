import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isGithubActions = process.env.GITHUB_ACTIONS === 'true'
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''
const base = isGithubActions && repoName ? `/${repoName}/` : '/'

export default defineConfig({
  base,
  plugins: [react()],
  server: {
    headers: {
      'Cache-Control': 'no-store',
    },
  },
})
