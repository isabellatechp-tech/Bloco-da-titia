@echo off
title Backend - Bloco Carnaval
color 0A
echo ========================================
echo   BACKEND - BLOCO CARNAVAL
echo ========================================
echo.
cd /d "%~dp0backend"
echo Instalando dependencias...
call npm.cmd install
if %errorlevel% neq 0 (
    echo ERRO ao instalar dependencias!
    pause
    exit /b 1
)
echo.
echo ========================================
echo   Iniciando servidor na porta 3001...
echo ========================================
echo.
echo Backend rodando em: http://localhost:3001
echo Swagger docs: http://localhost:3001/docs
echo.
echo Pressione CTRL+C para parar o servidor
echo.
node server.js
pause

