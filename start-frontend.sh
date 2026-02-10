#!/bin/bash

# Script para iniciar apenas o Frontend (Linux/Mac)
# Uso: ./start-frontend.sh

echo "========================================"
echo "  FRONTEND - BLOCO CARNAVAL"
echo "========================================"
echo ""

cd frontend

if [ ! -d "node_modules" ]; then
    echo "Instalando dependências..."
    npm install
fi

echo ""
echo "========================================"
echo "  Iniciando servidor na porta 3000..."
echo "========================================"
echo ""
echo "Frontend rodando em: http://localhost:3000"
echo ""
echo "Pressione CTRL+C para parar o servidor"
echo ""

npm run dev

