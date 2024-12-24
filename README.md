Projeto de Teste de Usuários
Este projeto implementa um sistema de login utilizando Vue.js no front-end e JSON Server no back-end. Foi criado para realizar testes com usuários dos tipos Admin e Comum, com o uso de classes para organização do código e configuração para rodar tanto o front-end quanto o back-end simultaneamente.

🚀 Tecnologias Utilizadas
Vue.js: Framework JavaScript para o desenvolvimento do front-end.
Pinia: Gerenciamento de estado no Vue.js.
JSON Server: Simulação de uma API RESTful para o back-end.
Axios: Biblioteca para realizar requisições HTTP.
CSS (Vuetify): Biblioteca de componentes para a interface visual.
🛠️ Funcionalidades
Login de Usuários: Tela de login onde os usuários podem acessar com suas credenciais.
Testes de Usuários: Suporte para dois tipos de usuários: Admin e Comum, com permissões distintas.
Classes e Estrutura: Utilização de classes para organização do código, como Usuario e Service.
📖 Instruções para Execução
1️⃣ Pré-requisitos
Certifique-se de ter os seguintes itens instalados em sua máquina:

Node.js
npm ou yarn para gerenciar pacotes
2️⃣ Clonar o Repositório
Abra o terminal e execute os comandos abaixo:

bash
Copiar código
git clone https://github.com/VitoriaDourado/project-user-vuetify.git
cd project-user-vuetify
3️⃣ Instalar Dependências
Instale todas as dependências necessárias para o front-end e o JSON Server:

bash
Copiar código
npm install
4️⃣ Configurar o JSON Server
Adicione o arquivo db.json na raiz do projeto e insira os dados necessários de acordo com o teste prático.

5️⃣ Executar o Projeto
Para rodar tanto o front-end quanto o JSON Server simultaneamente, execute:

bash
Copiar código
npm run dev
📌 O front-end foi configurado para rodar na porta 3001, evitando conflitos com a porta 3000 do JSON Server.

6️⃣ Testar o Login
Utilize as credenciais abaixo para acessar o sistema:

Admin
Usuário: admin
Senha: 1234
Comum
Usuário: usuario
Senha: 1234
📋 Permissões
Admin: Pode adicionar usuários e visualizar a lista completa.
Comum: Apenas visualiza a lista de usuários.
🎯 Objetivo do Projeto
Este projeto foi desenvolvido para testar diferentes permissões de acesso, organização do código com classes e integração entre front-end e back-end simulados.

📞 Contato
Caso tenha dúvidas ou sugestões, sinta-se à vontade para entrar em contato!

✉️ Email: vitoriadouradod.@gmail.com
📂 GitHub: github.com/VitoriaDourado
💻 Linkedin: www.linkedin.com/in/vitoriadourado/
