@echo off
title Frontend - Bloco Carnaval
color 0B
echo ========================================
echo   FRONTEND - BLOCO CARNAVAL
echo ========================================
echo.
cd /d "%~dp0frontend"
echo Instalando dependencias...
call npm.cmd install
if %errorlevel% neq 0 (
    echo ERRO ao instalar dependencias!
    pause
    exit /b 1
)
echo.
echo ========================================
echo   Iniciando servidor na porta 3000...
echo ========================================
echo.
echo Frontend rodando em: http://localhost:3000
echo.
echo Pressione CTRL+C para parar o servidor
echo.
call npm.cmd run dev
pause

