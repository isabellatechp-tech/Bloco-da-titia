# 🎭 Bloco Carnaval App

Aplicação web completa para um Bloco de Carnaval, desenvolvida com Next.js e Express.js. Interface moderna, responsiva e com tema carnavalesco vibrante!

## ✨ Funcionalidades

### 🏠 Página Inicial
- Dashboard com acesso rápido a todos os módulos
- Design moderno e animado
- Cards interativos para cada seção

### 🛒 Loja do Bloco
- Catálogo de produtos (Garrafinha, Abadá, Chaveiro)
- Carrinho de compras funcional com persistência no localStorage
- Contador de itens no menu
- Sidebar de carrinho com gerenciamento de quantidades
- Checkout simulado
- Preços gerados aleatoriamente

### 📅 Agenda
- Calendário mensal interativo
- Visualização de eventos por mês
- Lista de próximos eventos com detalhes
- Destaque para eventos do dia atual
- Navegação entre meses

### 📸 Galeria de Fotos
- Álbum de fotos dos eventos
- Filtro por nome do evento
- Botões de filtro rápido
- Grid responsivo com hover effects
- Imagens associadas a eventos específicos

### 📝 Orçamento
- Formulário completo para solicitação de orçamento
- Validação de campos em tempo real
- Campos: Nome, Email, Telefone, Tipo de Evento
- Simulação de envio para WhatsApp via webhook
- Mensagem de sucesso após envio

### 🤝 Patrocinadores
- Seção dedicada para patrocinadores
- Formulário de inscrição
- Campos: Nome da Empresa, Responsável, Email, Telefone
- Lista de benefícios para patrocinadores
- Validação completa de formulário

## 🎨 Design e UX

- **Tema Carnaval**: Cores vibrantes (Rosa, Roxo, Azul, Amarelo)
- **Gradientes animados**: Efeitos visuais modernos
- **Responsivo**: Funciona perfeitamente em mobile e desktop
- **Sidebar fixa**: Menu lateral com navegação entre módulos
- **Logo animada**: Header com efeitos de brilho e gradiente
- **Animações suaves**: Transições e hover effects
- **Dark theme**: Fundo escuro com contraste otimizado

## 📁 Estrutura do Projeto

```
bloco-carnaval-app/
├── backend/                    # API Express.js
│   ├── routes/                 # Rotas da API
│   │   ├── loja.js            # Produtos da loja
│   │   ├── agenda.js          # Eventos da agenda
│   │   ├── fotos.js           # Fotos dos eventos
│   │   ├── orcamento.js       # Envio de orçamentos
│   │   └── patrocinadores.js # Cadastro de patrocinadores
│   └── server.js              # Servidor principal
│
└── frontend/                   # App Next.js
    └── app/
        ├── components/         # Componentes reutilizáveis
        │   ├── Sidebar.js     # Menu lateral
        │   ├── Logo.js        # Logo do bloco
        │   └── ClientLayout.js # Layout wrapper
        ├── contexts/          # Context API
        │   └── CartContext.js # Context do carrinho
        ├── loja/              # Página da loja
        ├── agenda/            # Página da agenda
        ├── fotos/             # Página de fotos
        ├── orcamento/         # Página de orçamento
        ├── patrocinadores/    # Página de patrocinadores
        ├── layout.js          # Layout principal
        ├── page.js            # Página inicial
        └── globals.css        # Estilos globais
```

## 🚀 Como Executar

### ⚠️ IMPORTANTE: Execute o backend primeiro!

### 1. Backend (Terminal 1)

**Opção 1: Script automático (Windows)**
```bash
cd backend
start.bat
```

**Opção 2: Manualmente**
```bash
cd backend
npm install
node server.js
```

✅ Backend rodando em: **http://localhost:3001**

### 2. Frontend (Terminal 2)

**Opção 1: Script automático (Windows)**
```bash
cd frontend
start.bat
```

**Opção 2: Manualmente**
```bash
cd frontend
npm install
npm run dev
```

✅ Frontend rodando em: **http://localhost:3000**

### 3. Acessar a Aplicação

Abra seu navegador em: **http://localhost:3000**

## 📡 Endpoints da API

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/api/loja` | Lista produtos da loja |
| GET | `/api/agenda` | Lista eventos da agenda |
| GET | `/api/fotos` | Lista fotos dos eventos |
| POST | `/api/orcamento` | Envia solicitação de orçamento |
| POST | `/api/patrocinadores` | Cadastra novo patrocinador |

**Documentação Swagger**: http://localhost:3001/docs

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Next.js 14** - Framework React
- **React 18** - Biblioteca UI
- **CSS Modules** - Estilização
- **Context API** - Gerenciamento de estado (carrinho)
- **localStorage** - Persistência do carrinho

### Backend
- **Express.js** - Framework Node.js
- **CORS** - Cross-Origin Resource Sharing
- **Axios** - Cliente HTTP (para webhooks)
- **Swagger UI** - Documentação da API

## 🎯 Funcionalidades Técnicas

### Carrinho de Compras
- ✅ Adicionar/remover produtos
- ✅ Atualizar quantidades
- ✅ Persistência no localStorage
- ✅ Cálculo automático do total
- ✅ Contador no menu lateral

### Validação de Formulários
- ✅ Validação em tempo real
- ✅ Mensagens de erro específicas
- ✅ Validação de email e telefone
- ✅ Campos obrigatórios

### Responsividade
- ✅ Menu lateral colapsável em mobile
- ✅ Grid adaptativo
- ✅ Touch-friendly em dispositivos móveis
- ✅ Sidebar de carrinho fullscreen em mobile

## 🎨 Paleta de Cores

- **Primária**: `#FF006E` (Rosa vibrante)
- **Secundária**: `#8338EC` (Roxo)
- **Terciária**: `#3A86FF` (Azul)
- **Destaque**: `#FFBE0B` (Amarelo)
- **Fundo**: `#0A0A0A` (Preto)
- **Fundo Claro**: `#1A1A1A` (Cinza escuro)

## 📝 Notas Importantes

1. **Backend obrigatório**: O frontend precisa do backend rodando para funcionar completamente
2. **Fallback de dados**: Se o backend não estiver disponível, a aplicação usa dados mockados
3. **Webhooks simulados**: Os envios de orçamento e patrocinadores são simulados
4. **Imagens aleatórias**: As imagens são geradas via Picsum Photos (serviço externo)

## 🔧 Desenvolvimento Futuro

- [ ] Integração com pagamento real
- [ ] Sistema de autenticação
- [ ] Painel administrativo
- [ ] Upload de fotos reais
- [ ] Notificações push
- [ ] PWA (Progressive Web App)

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais e de demonstração.

---

**Desenvolvido com ❤️ para o Bloco Carnaval** 🎭🎉
