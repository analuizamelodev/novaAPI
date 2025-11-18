# BLOG API EXPRESS

Este repositório possui uma API para um blog, onde os usuários realizam postagens e reagem com comenários. Para o usuário fazer uso da API, será necessário efetuar o cadastro, caso já o possuo, precisará efetuar o login, para que seja gerado o token que o autorize a utilizar ferramentas exclusivas do CRUD para usuários.

## Tecnologias

Node.js

Express.js

TypeScript

Prisma ORM

PostgreSQL

Swagger UI

Docker

## Pré-requisitos

Node.js 18+

npm ou yarn

Docker e Docker Compose

## Funcionalidades

Servidor Express com rotas organizadas

TypeScript para tipagem estática

Prisma ORM para gerenciamento do banco

Arquivo `.env.example` para configuração de ambiente

Docker para subir o PostgreSQL facilmente

Linter configurado (ESLint)

Documentação completa das rotas com Swagger UI

 ## Instruções 

1. Clone o repositório:
```
git clone https://github.com/analuizamelodev/api-express.git
cd api-express
```
2. Instale as dependências:
```
npm install
```
3. Configure o banco de dados do Docker
```
docker-compose up -d
```
4. Crie um arquivo .env baseado no .env.example:
```
DATABASE_URL="postgresql://user:password@localhost:5432/db"
PORT=3000
```
5. Gere o cliente Prisma:
```
npx prisma generate
```
6. Rode as migrações:
```
npx prisma migrate dev
```
7. Inicie a aplicação:
```
npm run dev
```
## Endpoints

O servidor rodará em:

➡️ http://localhost:3000

Swagger disponível em:

➡️ http://localhost:3000/api-docs

Os endpoints seguem o padrão REST e são versionados:

## Autenticação

`POST	/autenticacao/cadastro`	Cadastra novo usuário

`POST	/autenticacao/login`	Login e criação de token JWT

## Publicação

`POST	/publicacao`	- Criar publicação

`GET	/publicacao` -	Buscar todas publicações

`GET	/publicacao/{id}` - Buscar publicação por ID

`PUT	/publicacao/{id}`	- Atualizar publicação

`DELETE	/publicacao/{id}` - Remover publicação

## Comentários

`POST	/comentario`	- Criar comentário

`GET	/comentario`	- Buscar todos

`GET	/comentario/{id}`	- Buscar por ID

`DELETE	/comentario/{id}`	- Deletar comentário

