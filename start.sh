#!/bin/bash

# Script para iniciar Backend e Frontend (Linux/Mac)
# Uso: ./start.sh

echo "========================================"
echo "  INICIANDO BLOCO CARNAVAL APP"
echo "========================================"
echo ""
echo "Este script vai iniciar:"
echo "1. Backend (porta 3001)"
echo "2. Frontend (porta 3000)"
echo ""
echo "Aguarde alguns segundos..."
echo ""

# Iniciar Backend em nova janela/terminal
cd backend
if [ ! -d "node_modules" ]; then
    echo "Instalando dependências do backend..."
    npm install
fi

# Iniciar Backend em background
npm start > ../backend.log 2>&1 &
BACKEND_PID=$!
echo "Backend iniciado (PID: $BACKEND_PID)"
echo ""

# Aguardar backend iniciar
sleep 3

# Iniciar Frontend
cd ../frontend
if [ ! -d "node_modules" ]; then
    echo "Instalando dependências do frontend..."
    npm install
fi

echo ""
echo "========================================"
echo "  Servidores iniciados!"
echo "========================================"
echo ""
echo "Backend: http://localhost:3001"
echo "Frontend: http://localhost:3000"
echo ""
echo "Logs do backend: backend.log"
echo ""
echo "Para parar os servidores, pressione CTRL+C"
echo ""

# Executar frontend (bloqueia)
npm run dev

# Ao sair, matar o backend
kill $BACKEND_PID 2>/dev/null
echo "Backend encerrado."

