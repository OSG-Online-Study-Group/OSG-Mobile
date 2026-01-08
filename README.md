📱 OSG Mobile — Online Study Group

Aplicativo mobile desenvolvido com Expo (React Native) para organização de estudos em grupo, permitindo cadastro e login de usuários com autenticação via Firebase, além de navegação entre telas temáticas de estudo.

🚀 Tecnologias Utilizadas
📦 Front-end (Mobile)

React Native

Expo

Expo CLI

React Navigation

Styled-components

JavaScript (ES6+)

🔐 Autenticação e Backend as a Service (BaaS)

Firebase Authentication

Firebase SDK Web

🧭 Navegação

@react-navigation/native

@react-navigation/native-stack

🛠️ Ferramentas de Desenvolvimento

Git

GitHub

Visual Studio Code

Node.js

NPM

📂 Estrutura do Projeto (Simplificada)
OSG-Mobile/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── screens/
│   │       ├── Login/
│   │       ├── Cadastro/
│   │       ├── Menu/
│   │       └── Grupos/
│   ├── services/
│   │   └── firebase.js
│   └── routes/
│       └── index.js
├── App.js
├── app.json
├── package.json
└── README.md

🔑 Funcionalidades

Cadastro de usuário com email e senha

Login de usuário autenticado

Integração com Firebase Authentication

Navegação entre telas

Interface estilizada com Styled-components

Organização modular de telas e serviços

⚙️ Configuração do Ambiente
Pré-requisitos

Node.js instalado

Expo CLI instalado globalmente:

npm install -g expo-cli

Instalação do Projeto
git clone https://github.com/juanoliveira0020/OSG-Mobile.git
cd OSG-Mobile
npm install

Executar o Projeto
npx expo start


Ou:

expo start


Escaneie o QR Code com o Expo Go no celular ou use um emulador.

🔥 Firebase

O projeto utiliza Firebase Authentication para:

Criar usuários

Realizar login seguro

O arquivo de configuração fica em:

src/services/firebase.js





👤 Autores
Juan Oliveira
Lucas Gonçalves
João Vitor Aguiar Souza 
Projeto desenvolvido para fins educacionais e prática em desenvolvimento mobile com React Native.



