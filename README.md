# Projeto de Teste de Usuários

Este projeto implementa um sistema de login utilizando **Vue.js** no front-end e **JSON Server** no back-end. Foi criado para realizar testes com usuários do tipo **admin** e **comum**, utilizando classes para organização do código e configuração para rodar tanto o front-end quanto o back-end simultaneamente.

## Tecnologias Utilizadas

- **Vue.js**: Framework JavaScript para o front-end.
- **Pinia**: Gerenciamento de estado no Vue.js.
- **JSON Server**: Simulação de uma API RESTful para o back-end.
- **Axios**: Biblioteca para realizar requisições HTTP.
- **CSS (Vuetify)**: Biblioteca de componentes para interface visual.

## Funcionalidades

- **Login de Usuários**: Possui uma tela de login onde os usuários podem entrar com suas credenciais.
- **Testes de Usuários**: Implementação de dois tipos de usuários (`admin` e `comum`), com senhas e permissões distintas.
- **Classes e Estrutura**: Utilização de classes para organizar o código (ex: `Usuario`, `Service`).

Instruções para Execução
Para rodar o projeto, siga os passos abaixo:

1. Pré-requisitos
Certifique-se de ter instalado em sua máquina:

Node.js
npm ou yarn para gerenciar pacotes

2. Clonar o Repositório em sua pasta
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
    cd nome-do-repositorio

3. Instalar Dependências
  Instale todas as dependências necessárias para o front-end e o JSON Server:
    npm install
   
5. Configurar o JSON Server
   Coloque o arquivo db.json na raiz do projeto e coloque todos os dados que deve conter de acordo com o teste prático.

6. Executar o Projeto
   npm run dev
     O front foi configurado na porta 3001 para não dar conflito com a porta 3000 do JSON servere ao iniciar o comando os dois irão rodar.

7. Testar o Login
Use as credenciais abaixo para acessar o sistema:

Admin:
Usuário: admin
Senha: 1234
----------------
Comum:
Usuário: usuario
Senha: 1234

----------------
O admin será responsável por adicionar usuários e ver a lista deles, já o comum ficará responsável apenas para ver a lista de usuários.
