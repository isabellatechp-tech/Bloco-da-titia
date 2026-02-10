@echo off
echo Instalando dependencias...
call npm.cmd install
echo.
echo Iniciando servidor backend na porta 3001...
node server.js

