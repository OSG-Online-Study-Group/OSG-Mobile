

---

# 📱 OSG Mobile — Online Study Group

Aplicativo mobile desenvolvido com **Expo (React Native)** com foco em organização, interação e apoio a estudos em grupo.
O projeto conta com **cadastro e login de usuários**, **chat em tempo real** e **duelos entre usuários**, utilizando Firebase e WebSocket.



---

## 🚀 Tecnologias Utilizadas

### 📦 Mobile / Front-end

* React Native
* Expo
* JavaScript (ES6+)
* Styled-components

### 🔐 Backend as a Service

* Firebase
* Firebase Authentication
* Firestore

### 🔌 Tempo Real

* WebSocket

### 🧠 Gerenciamento de Estado

* Context API

### 🧭 Navegação

* React Navigation

  * `@react-navigation/native`
  * `@react-navigation/native-stack`

### 🛠️ Ferramentas

* Node.js
* NPM
* Git
* GitHub
* Visual Studio Code

---

## 📂 Estrutura do Projeto

```
OSG-Mobile/
├── src/
│   ├── assets/
│   ├── components/
│   ├── screens/
│   │   ├── Login/
│   │   ├── Cadastro/
│   │   ├── Menu/
│   │   ├── Grupos/
│   │   ├── Chat/
│   │   ├── Duelo/
│   │   └── Perfil/
│   ├── context/
│   ├── navigation/
│   ├── services/
│   ├── hooks/
│   └── routes/
├── App.js
├── app.json
├── package.json
└── README.md
```

---

## 🔑 Funcionalidades

* Cadastro de usuário com email e senha
* Login de usuário autenticado
* Autenticação via Firebase
* Navegação entre telas
* Chat em tempo real com exibição do nome do usuário
* Sistema de duelo aleatório em tempo real
* Interface estilizada com Styled-components
* Gerenciamento global de estado com Context API

---

## 🧭 Navegação da Aplicação

A navegação do aplicativo é feita utilizando **React Navigation (Native Stack)**.

Fluxo principal de telas:

```
Login
├── Cadastro
└── Menu
    ├── Grupos
    │   └── Chat
    ├── Duelo Aleatório
    └── Perfil
```

* **Login**: autenticação do usuário
* **Cadastro**: criação de nova conta
* **Menu**: tela principal após login
* **Grupos**: acesso aos grupos de estudo
* **Chat**: comunicação em tempo real
* **Duelo**: partidas entre usuários
* **Perfil**: informações do usuário
* Botão **Voltar** configurado via `navigation.goBack()`

---

## ⚙️ Configuração do Ambiente

### Pré-requisitos

* Node.js
* Expo CLI

```bash
npm install -g expo-cli
```

---

### Instalação

```bash
git clone https://github.com/juanoliveira0020/OSG-Mobile.git
cd OSG-Mobile
npm install
```

---

### Executar o Projeto

```bash
npx expo start
```

ou

```bash
expo start
```

Abra o **Expo Go** no celular e escaneie o QR Code, ou execute em um emulador.

---

## 🔥 Firebase

O projeto utiliza:

* **Firebase Authentication** para autenticação
* **Firestore** para armazenamento de dados (mensagens, usuários, grupos)

> Em produção, recomenda-se o uso de variáveis de ambiente para proteger as credenciais.

---

## 🧠 Observações

* O `.gitignore` do Expo ignora automaticamente arquivos desnecessários
* Projeto em evolução contínua
* Estrutura modular para facilitar manutenção e escalabilidade

---

## 👤 Autores

- Juan Oliveira  
- João Vitor Aguiar Souza  
- Lucas Gonçalves  
- Reinaldo Silva Santos  


---

Projeto desenvolvido para fins educacionais e aprendizado em desenvolvimento mobile com React Native.
