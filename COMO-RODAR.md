# 🚀 Como Rodar a Aplicação Localmente

## 📋 Pré-requisitos

- **Node.js** (versão 16 ou superior)
- **npm** (vem com Node.js)
- **Git** (opcional, para clonar o repositório)

## 🪟 Windows

### Opção 1: Script Automático (Recomendado)

**Iniciar tudo de uma vez:**
```bash
# Clique duas vezes no arquivo ou execute:
INICIAR-TUDO.bat
```

**Iniciar apenas Backend:**
```bash
INICIAR-BACKEND.bat
```

**Iniciar apenas Frontend:**
```bash
INICIAR-FRONTEND.bat
```

### Opção 2: Manualmente

**1. Terminal 1 - Backend:**
```bash
cd backend
npm install
node server.js
```

**2. Terminal 2 - Frontend:**
```bash
cd frontend
npm install
npm run dev
```

**3. Acessar:**
- Frontend: http://localhost:3000
- Backend API: http://localhost:3001
- Swagger Docs: http://localhost:3001/docs

## 🐧 Linux / Mac

### Opção 1: Script Automático

**Dar permissão de execução (primeira vez):**
```bash
chmod +x start.sh start-backend.sh start-frontend.sh
```

**Iniciar tudo de uma vez:**
```bash
./start.sh
```

**Iniciar apenas Backend:**
```bash
./start-backend.sh
```

**Iniciar apenas Frontend:**
```bash
./start-frontend.sh
```

### Opção 2: Manualmente

**1. Terminal 1 - Backend:**
```bash
cd backend
npm install
node server.js
```

**2. Terminal 2 - Frontend:**
```bash
cd frontend
npm install
npm run dev
```

**3. Acessar:**
- Frontend: http://localhost:3000
- Backend API: http://localhost:3001
- Swagger Docs: http://localhost:3001/docs

## 📝 Passo a Passo Detalhado

### 1️⃣ Instalar Dependências (Primeira vez)

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd frontend
npm install
```

### 2️⃣ Iniciar Backend

```bash
cd backend
node server.js
```

Você deve ver:
```
Backend rodando porta 3001
```

### 3️⃣ Iniciar Frontend (em outro terminal)

```bash
cd frontend
npm run dev
```

Você deve ver:
```
- ready started server on 0.0.0.0:3000
- Local: http://localhost:3000
```

### 4️⃣ Acessar a Aplicação

Abra seu navegador em: **http://localhost:3000**

## ⚠️ Problemas Comuns

### Erro: "Cannot find module"
**Solução:** Execute `npm install` na pasta do backend e frontend

### Erro: "Port 3001 already in use"
**Solução:** 
- Feche outros processos usando a porta 3001
- Ou altere a porta no arquivo `backend/server.js`

### Erro: "Port 3000 already in use"
**Solução:**
- Feche outros processos usando a porta 3000
- Ou altere a porta no arquivo `frontend/package.json`

### Frontend não conecta ao Backend
**Solução:**
1. Verifique se o backend está rodando na porta 3001
2. Acesse http://localhost:3001/api/loja no navegador
3. Se não funcionar, o backend não está rodando

### Erro de CORS
**Solução:** O backend já tem CORS configurado. Se ainda houver erro, verifique se o backend está rodando.

## 🔍 Verificar se está funcionando

### Backend:
```bash
# No navegador ou terminal:
curl http://localhost:3001/api/loja
```

Deve retornar JSON com produtos.

### Frontend:
Abra http://localhost:3000 no navegador. Você deve ver a página inicial do Bloco Carnaval.

## 🛑 Parar os Servidores

- **Windows:** Pressione `CTRL+C` no terminal
- **Linux/Mac:** Pressione `CTRL+C` no terminal

## 📦 Estrutura de Portas

- **3000** - Frontend (Next.js)
- **3001** - Backend (Express.js)

## 💡 Dicas

1. **Sempre inicie o backend primeiro** antes do frontend
2. **Mantenha os dois terminais abertos** enquanto usa a aplicação
3. **Use o script INICIAR-TUDO.bat** (Windows) para facilitar
4. Se algo não funcionar, verifique os logs nos terminais

## 🎯 Comandos Rápidos

```bash
# Windows - Iniciar tudo
INICIAR-TUDO.bat

# Linux/Mac - Iniciar tudo
./start.sh

# Verificar se Node.js está instalado
node --version

# Verificar se npm está instalado
npm --version
```

---

**Pronto! Agora você pode rodar a aplicação localmente! 🎉**

