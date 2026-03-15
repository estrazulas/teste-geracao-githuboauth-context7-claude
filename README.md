# Better Auth + Next.js + GitHub OAuth Demo

Demo simples de autenticação GitHub usando Better Auth, SQLite e Next.js App Router.

## Setup Rápido

### 1. Gerar credenciais GitHub

1. Acesse [GitHub OAuth Apps](https://github.com/settings/developers)
2. Crie uma nova OAuth App (New OAuth App)
3. Configure:
   - **Application name**: Better Auth Demo
   - **Homepage URL**: `http://localhost:3000`
   - **Authorization callback URL**: `http://localhost:3000/api/auth/callback/github`
4. Copie `Client ID` e `Client Secret`

### 2. Configurar variáveis de ambiente

Crie/atualize `.env.local`:

```bash
GITHUB_CLIENT_ID=seu_client_id_aqui
GITHUB_CLIENT_SECRET=seu_client_secret_aqui
BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_SECRET=sua_chave_secreta_minimo_32_caracteres
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000
```

### 3. Instalar dependências

```bash
npm install
```

### 4. Executar migração do banco

```bash
npx better-auth migrate
```

Isso cria `better-auth.sqlite` com as tabelas necessárias.

### 5. Rodar o projeto

```bash
npm run dev
```

Acesse `http://localhost:3000`

## Arquitetura

- **lib/auth.ts**: Configuração do Better Auth com GitHub OAuth + SQLite
- **lib/auth-client.ts**: Cliente do Better Auth para o frontend
- **app/api/auth/[...all]/route.ts**: Handler de API (Next.js App Router)
- **app/page.tsx**: Página Home com botão de login/logout
- **better-auth.sqlite**: Banco de dados local (criado automaticamente)

## Features

✅ Login via GitHub
✅ Persistência em SQLite
✅ Session management automático
✅ UI simples com Tailwind CSS
✅ Logout

## Estrutura de pastas

```
exemplo-08-context7/
├── app/
│   ├── api/auth/[...all]/
│   │   └── route.ts
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
├── lib/
│   ├── auth.ts
│   └── auth-client.ts
├── .env.local
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

## Troubleshooting

**Erro: "GITHUB_CLIENT_ID is required"**
→ Verifique `.env.local` e reinicie o servidor

**Erro: "Database locked"**
→ Kill processos Node antigos: `pkill -f node`

**Callback URL error no GitHub**
→ Verifique que a URL no OAuth App bate com `BETTER_AUTH_URL`
