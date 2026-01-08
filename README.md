# 📱 OSG Mobile — Online Study Group

Aplicativo mobile desenvolvido com **Expo (React Native)** com foco em organização e apoio a estudos em grupo.  
O projeto conta com **cadastro e login de usuários via Firebase Authentication**, além de navegação estruturada entre telas de estudo.

---

## 🚀 Tecnologias Utilizadas

### 📦 Mobile / Front-end
- React Native
- Expo
- JavaScript (ES6+)
- Styled-components

### 🔐 Backend as a Service
- Firebase
- Firebase Authentication

### 🧭 Navegação
- React Navigation  
  - `@react-navigation/native`  
  - `@react-navigation/native-stack`

### 🛠️ Ferramentas
- Node.js
- NPM
- Git
- GitHub
- Visual Studio Code

---

## 📂 Estrutura do Projeto

```

OSG-Mobile/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── screens/
│   │       ├── Login/
│   │       ├── Cadastro/
│   │       ├── Menu/
│   │       ├── Grupo Economia/
│   │       ├── Grupo Quimica Organica/
│   │       └── Filtro de materia quimica/
│   ├── services/
│   │   └── firebase.js
│   └── routes/
│       └── index.js
├── App.js
├── app.json
├── package.json
└── README.md

```

---

## 🔑 Funcionalidades

- Cadastro de usuário com email e senha
- Login de usuário autenticado
- Autenticação via Firebase
- Navegação entre telas
- Interface estilizada com Styled-components
- Organização modular por telas

---

## 🧭 Navegação da Aplicação

A navegação do aplicativo é feita utilizando **React Navigation (Native Stack)**.

Fluxo principal de telas:

```

Login
└── Cadastro
└── Menu
├── Grupos
│    ├── Grupo Economia
│    └── Grupo Química Orgânica
└── Filtro de Matéria Química

````

- **Login**: autenticação do usuário
- **Cadastro**: criação de nova conta
- **Menu**: tela principal após login
- **Grupos**: acesso aos grupos de estudo
- **Filtro de Matéria**: navegação por áreas da química
- Botão **Voltar** configurado via `navigation.goBack()`

---

## ⚙️ Configuração do Ambiente

### Pré-requisitos
- Node.js
- Expo CLI

```bash
npm install -g expo-cli
````

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

O projeto utiliza **Firebase Authentication** para cadastro e login de usuários.

Arquivo de configuração:

```
src/services/firebase.js
```

> Em produção, recomenda-se o uso de variáveis de ambiente para proteger as credenciais.

---

## 🧠 Observações

* O `.gitignore` do Expo ignora automaticamente arquivos desnecessários
* Avisos de `LF` / `CRLF` no Git não afetam o funcionamento
* Projeto desenvolvido com foco educacional

---

## 📌 Melhorias Futuras

* Recuperação de senha
* Validação de formulários
* Integração com Firestore
* Perfil de usuário
* Grupos dinâmicos

---

## 👤 Autores

Juan Oliveira,
João Vitor Aguiar Souza,
Lucas Gonçalves
Projeto desenvolvido para fins educacionais e aprendizado em desenvolvimento mobile com React Native.

```
- Revisar nomes de telas e pastas para padrão profissional
```
