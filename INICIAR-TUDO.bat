@echo off
title Bloco Carnaval - Iniciar Tudo
color 0E
echo ========================================
echo   INICIANDO BLOCO CARNAVAL APP
echo ========================================
echo.
echo Este script vai abrir 2 janelas:
echo 1. Backend (porta 3001)
echo 2. Frontend (porta 3000)
echo.
echo Aguarde alguns segundos...
echo.
start "Backend - Bloco Carnaval" cmd /k "cd /d %~dp0backend && npm.cmd install && node server.js"
timeout /t 3 /nobreak >nul
start "Frontend - Bloco Carnaval" cmd /k "cd /d %~dp0frontend && npm.cmd install && npm.cmd run dev"
echo.
echo ========================================
echo   Servidores iniciados!
echo ========================================
echo.
echo Acesse: http://localhost:3000
echo.
echo Feche esta janela quando terminar.
pause

