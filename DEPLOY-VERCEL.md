# 🚀 Guia de Deploy no Vercel

Este guia explica como fazer deploy do Bloco Carnaval App no Vercel.

## 📋 Pré-requisitos

- Conta no [Vercel](https://vercel.com)
- Repositório no GitHub (já configurado ✅)
- Backend deployado (opcional, mas recomendado)

## 🎯 Opção 1: Deploy via Interface Web (Recomendado)

### Passo 1: Conectar Repositório

1. Acesse [vercel.com](https://vercel.com) e faça login
2. Clique em **"Add New Project"**
3. Importe o repositório: `isabellatechp-tech/Bloco-da-titia`
4. Clique em **"Import"**

### Passo 2: Configurar o Projeto

**Root Directory:**
```
frontend
```

**Framework Preset:**
```
Next.js
```

**Build Command:**
```
npm run build
```

**Output Directory:**
```
.next
```

**Install Command:**
```
npm install
```

### Passo 3: Variáveis de Ambiente

Adicione a variável de ambiente:

**Nome:** `NEXT_PUBLIC_API_URL`  
**Valor:** URL do seu backend (ex: `https://seu-backend.railway.app` ou `https://seu-backend.vercel.app`)

**Se não tiver backend deployado ainda:**
- Deixe em branco ou use: `http://localhost:3001`
- A aplicação usará dados mockados automaticamente

### Passo 4: Deploy

1. Clique em **"Deploy"**
2. Aguarde o build (2-5 minutos)
3. Pronto! Sua aplicação estará online 🎉

## 🎯 Opção 2: Deploy via CLI

### Passo 1: Instalar Vercel CLI

```bash
npm install -g vercel
```

### Passo 2: Login

```bash
vercel login
```

### Passo 3: Deploy

```bash
cd frontend
vercel
```

Siga as instruções:
- **Set up and deploy?** → `Y`
- **Which scope?** → Selecione sua conta
- **Link to existing project?** → `N` (primeira vez)
- **What's your project's name?** → `bloco-carnaval-app`
- **In which directory is your code located?** → `./`
- **Override settings?** → `N`

### Passo 4: Configurar Variáveis de Ambiente

```bash
vercel env add NEXT_PUBLIC_API_URL
```

Digite a URL do seu backend quando solicitado.

### Passo 5: Deploy de Produção

```bash
vercel --prod
```

## 🔧 Configurações Importantes

### Estrutura do Projeto

O Vercel precisa saber que o projeto Next.js está na pasta `frontend`:

**No painel do Vercel:**
- **Root Directory:** `frontend`

**Ou via `vercel.json` na raiz (já configurado):**
```json
{
  "version": 2,
  "builds": [
    {
      "src": "frontend/package.json",
      "use": "@vercel/next"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "frontend/$1"
    }
  ]
}
```

**Nota:** O arquivo `vercel.json` já está configurado no repositório. Você só precisa configurar o **Root Directory** como `frontend` no painel do Vercel.

### Variáveis de Ambiente

| Variável | Descrição | Exemplo |
|----------|-----------|---------|
| `NEXT_PUBLIC_API_URL` | URL do backend API | `https://seu-backend.railway.app` |

**Importante:** Variáveis que começam com `NEXT_PUBLIC_` são expostas ao cliente.

## 🌐 URLs após Deploy

Após o deploy, você terá:

- **URL de Produção:** `https://bloco-carnaval-app.vercel.app`
- **URL de Preview:** Para cada commit/PR

## 🔄 Deploy Automático

O Vercel faz deploy automático quando você:

1. Faz push para a branch `main` → Deploy de produção
2. Cria um Pull Request → Deploy de preview
3. Faz push para outras branches → Deploy de preview

## 🐛 Troubleshooting

### Erro: "Build Failed"

**Solução:**
1. Verifique os logs no painel do Vercel
2. Certifique-se que `package.json` está na pasta `frontend`
3. Verifique se todas as dependências estão em `dependencies` (não `devDependencies`)

### Erro: "Module not found"

**Solução:**
1. Verifique se o arquivo `frontend/app/utils/api.js` existe
2. Verifique os imports nas páginas
3. Execute `npm run build` localmente para testar

### API não funciona em produção

**Solução:**
1. Verifique a variável `NEXT_PUBLIC_API_URL` no painel do Vercel
2. Certifique-se que o backend está acessível publicamente
3. Verifique CORS no backend (deve permitir o domínio do Vercel)

### Backend não acessível

**Opções:**
1. Deploy do backend também no Vercel (como Serverless Functions)
2. Deploy do backend em Railway, Render, ou Heroku
3. Usar dados mockados (já implementado como fallback)

## 📝 Checklist de Deploy

- [ ] Repositório conectado ao Vercel
- [ ] Root Directory configurado como `frontend`
- [ ] Variável `NEXT_PUBLIC_API_URL` configurada
- [ ] Build passou com sucesso
- [ ] Aplicação acessível na URL do Vercel
- [ ] Testar todas as páginas (Loja, Agenda, Fotos, etc.)

## 🎉 Pronto!

Sua aplicação está no ar! Compartilhe a URL com seus usuários.

---

**Dica:** Para atualizar a aplicação, basta fazer `git push` para a branch `main`. O Vercel fará o deploy automaticamente!

