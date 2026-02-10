/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configurações para produção
  output: 'standalone',
  // Variáveis de ambiente públicas
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001',
  },
}

module.exports = nextConfig

