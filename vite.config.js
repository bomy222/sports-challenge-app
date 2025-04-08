import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: './localhost-key.pem',
      cert: './localhost.pem'
    },
    host: 'localhost', // 외부 노출 방지
    port: 5173
  }
})