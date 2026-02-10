#!/bin/bash

# Script para iniciar apenas o Backend (Linux/Mac)
# Uso: ./start-backend.sh

echo "========================================"
echo "  BACKEND - BLOCO CARNAVAL"
echo "========================================"
echo ""

cd backend

if [ ! -d "node_modules" ]; then
    echo "Instalando dependências..."
    npm install
fi

echo ""
echo "========================================"
echo "  Iniciando servidor na porta 3001..."
echo "========================================"
echo ""
echo "Backend rodando em: http://localhost:3001"
echo "Swagger docs: http://localhost:3001/docs"
echo ""
echo "Pressione CTRL+C para parar o servidor"
echo ""

node server.js

