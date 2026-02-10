@echo off
echo Instalando dependencias...
call npm.cmd install
echo.
echo Iniciando servidor frontend na porta 3000...
call npm.cmd run dev

