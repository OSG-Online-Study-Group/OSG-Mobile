# OSG Mobile — Levantamento de Requisitos e Regras de Negócio

> **Projeto:** OSG Mobile — Online Study Group
> **Instituição:** SENAI Suíço-Brasileira Paulo Ernesto Tolle
> **Equipe Backend:** Reinaldo · João
> **Equipe Frontend:** Lucas · Juan
> **Stack:** React Native (Expo) + Firebase + OpenRouter
> **Versão:** 1.0 — Sprint 1–6

---

## Sumário

1. [Introdução](#1-introdução)
2. [Requisitos Funcionais](#2-requisitos-funcionais)
   - [2.1 Autenticação e Perfil](#21-autenticação-e-perfil)
   - [2.2 Grupos de Estudo](#22-grupos-de-estudo)
   - [2.3 Chat do Grupo](#23-chat-do-grupo)
   - [2.4 Geração de Perguntas com IA](#24-geração-de-perguntas-com-ia)
   - [2.5 Quiz Diário](#25-quiz-diário)
   - [2.6 Modo Treino](#26-modo-treino)
   - [2.7 Duelos](#27-duelos)
   - [2.8 Ranking e Gamificação](#28-ranking-e-gamificação)
3. [Requisitos Não Funcionais](#3-requisitos-não-funcionais)
4. [Regras de Negócio](#4-regras-de-negócio)
   - [4.1 Autenticação](#41-autenticação)
   - [4.2 Grupos](#42-grupos)
   - [4.3 Chat](#43-chat)
   - [4.4 Geração de Perguntas e Quiz](#44-geração-de-perguntas-e-quiz)
   - [4.5 XP e Gamificação](#45-xp-e-gamificação)
   - [4.6 Duelos](#46-duelos)
5. [Matriz de Rastreabilidade](#5-matriz-de-rastreabilidade)
6. [Glossário](#6-glossário)

---

## 1. Introdução

### 1.1 Objetivo do Documento

Este documento apresenta o levantamento completo de requisitos funcionais, requisitos não funcionais e regras de negócio do aplicativo OSG Mobile. Seu propósito é alinhar a equipe de desenvolvimento e servir como base para a entrega do TCC, garantindo que todos os membros compartilhem o mesmo entendimento sobre o que o sistema deve fazer e como deve se comportar.

### 1.2 Visão Geral do Produto

O OSG Mobile é uma plataforma gamificada de estudo colaborativo para estudantes do ensino técnico e médio. O aplicativo permite a formação de grupos de estudo organizados por matéria, geração automática de perguntas via Inteligência Artificial, realização de quizzes, duelos entre usuários e acompanhamento de desempenho por meio de um sistema de XP e ranking.

### 1.3 Escopo

Este documento cobre o MVP (Produto Mínimo Viável) do OSG Mobile, contemplando as funcionalidades planejadas para as Sprints 1 a 6. Funcionalidades futuras — como recuperação de senha, notificações push e modo offline — estão fora deste escopo.

---

## 2. Requisitos Funcionais

> **Legenda de prioridade:**
> `🔴 Alta` — essencial para o MVP
> `🟡 Média` — importante, mas não bloqueante
> `🟢 Baixa` — desejável se houver tempo

### 2.1 Autenticação e Perfil

| ID | Descrição | Módulo | Prioridade |
|----|-----------|--------|------------|
| RF01 | O sistema deve permitir que o usuário se cadastre com nome, e-mail e senha. | Auth | 🔴 Alta |
| RF02 | O sistema deve autenticar o usuário com e-mail e senha via Firebase Authentication. | Auth | 🔴 Alta |
| RF03 | O sistema deve manter a sessão do usuário ativa entre acessos ao app. | Auth | 🔴 Alta |
| RF04 | O sistema deve permitir que o usuário faça logout. | Auth | 🔴 Alta |
| RF05 | O sistema deve exibir no perfil do usuário: nome, foto, XP, nível, grupo e matéria. | Perfil | 🔴 Alta |
| RF06 | O sistema deve permitir que o usuário edite seu nome e foto de perfil. | Perfil | 🟡 Média |

### 2.2 Grupos de Estudo

| ID | Descrição | Módulo | Prioridade |
|----|-----------|--------|------------|
| RF08 | O sistema deve permitir que um administrador crie um grupo de estudo vinculado a uma matéria. | Grupos | 🔴 Alta |
| RF09 | Ao se cadastrar, o usuário deve escolher as matérias de interesse e ser automaticamente adicionado aos grupos correspondentes. | Grupos | 🔴 Alta |
| RF10 | O sistema deve listar os grupos de matérias disponíveis na tela de cadastro para o usuário selecionar. | Grupos | 🔴 Alta |
| RF11 | O sistema deve listar os membros do grupo com nome, XP e nível. | Grupos | 🔴 Alta |
| RF12 | O sistema deve exibir a matéria associada ao grupo em sua tela de detalhes. | Grupos | 🔴 Alta |

### 2.3 Chat do Grupo

| ID | Descrição | Módulo | Prioridade |
|----|-----------|--------|------------|
| RF13 | O sistema deve exibir um chat de mensagens em tempo real dentro de cada grupo. | Chat | 🔴 Alta |
| RF14 | O sistema deve permitir que qualquer membro do grupo envie mensagens de texto. | Chat | 🔴 Alta |
| RF15 | O sistema deve exibir nome do remetente e horário em cada mensagem. | Chat | 🔴 Alta |
| RF16 | O sistema deve permitir que o administrador do grupo delete qualquer mensagem. | Chat | 🔴 Alta |
| RF17 | O sistema deve exibir '[mensagem deletada]' no lugar de mensagens removidas pelo admin. | Chat | 🟡 Média |
| RF18 | Mensagens deletadas não devem ser removidas do banco de dados (soft delete). | Chat | 🔴 Alta |

### 2.4 Geração de Perguntas com IA

As perguntas são geradas automaticamente pela IA no momento em que o usuário inicia um quiz ou sessão de treino. O usuário não cria perguntas manualmente — ele apenas clica em **"Iniciar Quiz"** e o sistema chama a API de IA passando a matéria do grupo como contexto. No modo treino, o usuário digita livremente o tema desejado.

| ID | Descrição | Módulo | Prioridade |
|----|-----------|--------|------------|
| RF19 | Ao clicar em 'Iniciar Quiz', o sistema deve chamar a IA e gerar 5 perguntas automaticamente com base na matéria do grupo do usuário. | IA / Quiz | 🔴 Alta |
| RF20 | A IA deve retornar exatamente 5 perguntas de múltipla escolha com 4 alternativas cada. | IA / Quiz | 🔴 Alta |
| RF21 | Cada pergunta gerada deve conter: enunciado, 4 opções (A, B, C, D) e a resposta correta. | IA / Quiz | 🔴 Alta |
| RF22 | O sistema deve salvar as perguntas geradas no Firestore vinculadas ao grupo e ao usuário. | IA / Quiz | 🔴 Alta |
| RF23 | O sistema deve utilizar perguntas estáticas de fallback caso a IA esteja indisponível. | IA / Quiz | 🔴 Alta |

### 2.5 Quiz Diário

| ID | Descrição | Módulo | Prioridade |
|----|-----------|--------|------------|
| RF24 | O sistema deve disponibilizar um quiz diário com perguntas geradas pela IA no momento em que o usuário o inicia. | Quiz | 🔴 Alta |
| RF25 | O usuário deve poder responder o quiz diário apenas uma vez por dia. | Quiz | 🔴 Alta |
| RF26 | O sistema deve exibir feedback imediato (acerto ou erro) após cada resposta. | Quiz | 🔴 Alta |
| RF27 | O sistema deve exibir a pontuação final ao término do quiz. | Quiz | 🔴 Alta |
| RF28 | O sistema deve calcular e atribuir XP ao usuário ao final de cada quiz. | Quiz | 🔴 Alta |

### 2.6 Modo Treino

| ID | Descrição | Módulo | Prioridade |
|----|-----------|--------|------------|
| RF29 | O sistema deve oferecer um modo treino onde o usuário digita livremente um tema de sua escolha. | Treino | 🔴 Alta |
| RF30 | O modo treino deve gerar perguntas via IA com base no tema informado pelo usuário. | Treino | 🔴 Alta |
| RF31 | O modo treino não deve ter limite de tentativas por dia. | Treino | 🔴 Alta |
| RF32 | O XP ganho no modo treino deve ser menor do que o ganho no quiz diário. | Treino | 🟡 Média |

### 2.7 Duelos

| ID | Descrição | Módulo | Prioridade |
|----|-----------|--------|------------|
| RF33 | O sistema deve permitir que qualquer usuário logado desafie outro usuário para um duelo. | Duelos | 🟡 Média |
| RF34 | O duelo deve consistir no mesmo conjunto de perguntas respondido por ambos os usuários. | Duelos | 🟡 Média |
| RF35 | O duelo deve funcionar de forma assíncrona: o desafiado tem até 24h para aceitar ou recusar. | Duelos | 🟡 Média |
| RF36 | O sistema deve exibir o resultado do duelo comparando pontuações dos dois usuários. | Duelos | 🟡 Média |
| RF37 | O vencedor do duelo deve receber XP bônus. | Duelos | 🟡 Média |

### 2.8 Ranking e Gamificação

| ID | Descrição | Módulo | Prioridade |
|----|-----------|--------|------------|
| RF38 | O sistema deve exibir um ranking dos membros do grupo ordenado por XP. | Ranking | 🔴 Alta |
| RF39 | O ranking deve ser atualizado em tempo real a cada quiz concluído. | Ranking | 🔴 Alta |
| RF40 | O sistema deve calcular o nível do usuário com base no XP acumulado. | Ranking | 🔴 Alta |
| RF41 | O sistema deve exibir o nível e o XP do usuário em seu perfil e no ranking. | Ranking | 🔴 Alta |

---

## 3. Requisitos Não Funcionais

| ID | Requisito | Justificativa |
|----|-----------|---------------|
| RNF01 | O app deve funcionar em dispositivos Android (mínimo Android 8.0) e iOS (mínimo iOS 13). | Compatibilidade com os dispositivos mais comuns do público-alvo. |
| RNF02 | O app deve ser desenvolvido com React Native e Expo, sem ejeção do Expo. | Facilita o build e os testes durante o TCC. |
| RNF03 | O backend deve utilizar exclusivamente o Firebase (plano Spark — gratuito). | Evita custos durante o desenvolvimento e apresentação. |
| RNF04 | As chaves de API (Firebase, OpenRouter) devem ser armazenadas em variáveis de ambiente e nunca expostas no repositório. | Segurança das credenciais do projeto. |
| RNF05 | As mensagens do chat devem aparecer em tempo real com latência inferior a 2 segundos. | Experiência de usuário adequada para chat ao vivo. |
| RNF06 | O app deve responder às interações do usuário em menos de 1 segundo (exceto chamadas de IA). | Fluidez e qualidade percebida do produto. |
| RNF07 | A geração de perguntas pela IA deve ter timeout de 10 segundos, exibindo fallback em caso de falha. | Evita que o app trave aguardando resposta da API. |
| RNF08 | As regras de segurança do Firestore devem garantir que usuários acessem apenas dados aos quais têm permissão. | Proteção dos dados dos usuários. |
| RNF09 | O código deve seguir a estrutura de pastas oficial abaixo. Nomes de pastas sem espaços, em camelCase. | Manutenibilidade e colaboração entre a equipe de 4 desenvolvedores. |
| RNF10 | O app deve exibir mensagens de erro compreensíveis ao usuário em caso de falha de rede ou API. | Usabilidade e experiência do usuário. |

**Estrutura de pastas oficial (RNF09):**

```
OSG-Mobile/
├── src/
│   ├── assets/          ← imagens e ícones
│   ├── screens/         ← uma pasta por tela (ex: screens/Login/index.jsx)
│   ├── components/      ← componentes reutilizáveis (botões, cards)
│   ├── services/        ← firebase.js, firestore.js, chat.js, openrouter.js
│   ├── context/         ← AuthContext.jsx
│   ├── hooks/           ← useAuth.js
│   ├── constants/       ← colors.js, config.js
│   └── navigation/      ← index.jsx (toda a navegação)
├── App.jsx
├── .env                 ← NUNCA commitar
└── package.json
```

---

## 4. Regras de Negócio

### 4.1 Autenticação

| ID | Módulo | Regra de Negócio |
|----|--------|-----------------|
| RN01 | Autenticação | Um usuário pode estar vinculado a múltiplos grupos de estudo simultaneamente, um por matéria escolhida no cadastro. |
| RN02 | Autenticação | O cadastro exige e-mail válido, senha com mínimo de 6 caracteres e nome completo. |
| RN03 | Autenticação | Um usuário não autenticado não pode acessar nenhuma funcionalidade do app além das telas de Login e Cadastro. |

### 4.2 Grupos

| ID | Módulo | Regra de Negócio |
|----|--------|-----------------|
| RN04 | Grupos | Apenas um administrador (definido no momento da criação) pode criar e gerenciar o grupo. |
| RN05 | Grupos | Os grupos de matérias são pré-definidos no sistema; usuários não criam grupos livremente. |
| RN06 | Grupos | Ao se cadastrar, o usuário seleciona as matérias de interesse e é automaticamente adicionado aos grupos correspondentes. |
| RN07 | Grupos | Cada grupo está obrigatoriamente vinculado a uma única matéria (ex: Química, Economia). |

### 4.3 Chat

| ID | Módulo | Regra de Negócio |
|----|--------|-----------------|
| RN08 | Chat | Somente membros do grupo podem ler e enviar mensagens no chat daquele grupo. |
| RN09 | Chat | O remetente de uma mensagem é sempre o usuário autenticado no momento do envio. |
| RN10 | Chat | Somente o administrador do grupo pode deletar mensagens de outros usuários. |
| RN11 | Chat | A exclusão de mensagens é lógica (soft delete): o documento permanece no Firestore com o campo `deleted = true`. |
| RN12 | Chat | Mensagens deletadas são exibidas como `[mensagem deletada]` e não podem ser recuperadas pelo usuário. |
| RN13 | Chat | Nenhum usuário pode editar uma mensagem após o envio. |

### 4.4 Geração de Perguntas e Quiz

| ID | Módulo | Regra de Negócio |
|----|--------|-----------------|
| RN14 | Quiz / IA | O quiz diário pode ser respondido apenas uma vez por dia por usuário. |
| RN15 | Quiz / IA | As perguntas são geradas pela IA no momento em que o usuário clica em 'Iniciar Quiz', usando a matéria do grupo como contexto. |
| RN16 | Quiz / IA | No modo treino, o tema é informado livremente pelo usuário e não está restrito à matéria do grupo. |
| RN17 | Quiz / IA | As perguntas geradas pela IA são salvas no Firestore e associadas ao grupo e ao usuário. |
| RN18 | Quiz / IA | A resposta correta de cada pergunta nunca é enviada ao cliente antes do término do quiz. |
| RN19 | Quiz / IA | Em caso de falha da API de IA, o sistema deve exibir um conjunto de perguntas estáticas pré-definidas. |
| RN20 | Quiz / IA | Cada quiz contém exatamente 5 perguntas de múltipla escolha com 4 alternativas cada. |

### 4.5 XP e Gamificação

| ID | Módulo | Regra de Negócio |
|----|--------|-----------------|
| RN21 | XP / Nível | O XP do usuário é incrementado a cada quiz concluído, nunca decrementado. |
| RN22 | XP / Nível | A fórmula de XP por quiz diário é: `XP = (acertos / total de perguntas) × 10 pontos`. |
| RN23 | XP / Nível | O XP ganho no modo treino é reduzido: `XP = (acertos / total) × 5 pontos`. |
| RN24 | XP / Nível | O nível do usuário é calculado como: `Nível = floor(XP / 100) + 1`. |
| RN25 | XP / Nível | O vencedor de um duelo recebe 25 XP bônus; em caso de empate, ambos recebem 10 XP. |
| RN26 | XP / Nível | O ranking exibe todos os membros do grupo ordenados por XP total decrescente. |

### 4.6 Duelos

| ID | Módulo | Regra de Negócio |
|----|--------|-----------------|
| RN27 | Duelos | Qualquer usuário logado pode desafiar qualquer outro usuário do app para um duelo. |
| RN28 | Duelos | O desafiado pode aceitar ou recusar o duelo. Caso não haja resposta em até 24 horas, o duelo é automaticamente cancelado. |
| RN29 | Duelos | Ambos os jogadores respondem o mesmo conjunto de perguntas geradas no momento do desafio. |
| RN30 | Duelos | Um usuário não pode ter mais de 3 duelos pendentes simultaneamente. |

---

## 5. Matriz de Rastreabilidade

| Funcionalidade | Requisitos Funcionais | Regras de Negócio |
|----------------|-----------------------|-------------------|
| Login / Cadastro | RF01, RF02, RF03, RF04 | RN01, RN02, RN03 |
| Perfil do Usuário | RF05, RF06 | RN01 |
| Grupos de Estudo | RF08, RF09, RF10, RF11, RF12 | RN01, RN04, RN05, RN06, RN07 |
| Chat em Tempo Real | RF13, RF14, RF15, RF16, RF17, RF18 | RN08, RN09, RN10, RN11, RN12, RN13 |
| Geração de Perguntas | RF19, RF20, RF21, RF22, RF23 | RN15, RN17, RN18, RN19, RN20 |
| Quiz Diário | RF24, RF25, RF26, RF27, RF28 | RN14, RN21, RN22 |
| Modo Treino | RF29, RF30, RF31, RF32 | RN16, RN23 |
| Duelos | RF33, RF34, RF35, RF36, RF37 | RN25, RN27, RN28, RN29, RN30 |
| Ranking / Gamificação | RF38, RF39, RF40, RF41 | RN21, RN24, RN26 |

---

## 6. Glossário

| Termo | Definição |
|-------|-----------|
| **XP (Experience Points)** | Pontos acumulados pelo usuário ao responder quizzes e duelos. Determinam o nível e o ranking. |
| **Nível** | Indicador de progresso calculado a partir do XP total do usuário: `Nível = floor(XP / 100) + 1`. |
| **Quiz Diário** | Conjunto de 5 perguntas geradas pela IA no momento em que o usuário clica em 'Iniciar Quiz', disponível uma vez por dia. |
| **Modo Treino** | Funcionalidade onde o usuário digita livremente um tema e a IA gera as perguntas, sem limite de tentativas diárias. |
| **Duelo** | Desafio assíncrono entre dois usuários. O desafiado pode aceitar ou recusar; sem resposta em 24h, o duelo é cancelado automaticamente. |
| **Soft Delete** | Técnica de exclusão lógica: o registro não é apagado do banco, apenas marcado com `deleted = true`. |
| **Fallback** | Conjunto de perguntas estáticas pré-definidas exibidas quando a API de IA está indisponível. |
| **Admin** | Usuário criador do grupo com permissões especiais, como deletar mensagens do chat. |
| **onSnapshot()** | Função do Firebase Firestore que escuta mudanças em tempo real em uma coleção ou documento. Deve ser cancelada ao sair da tela (cleanup). |
| **OpenRouter** | Serviço de API que permite acesso a modelos de IA para geração de perguntas do quiz. |
| **Estrutura de Pastas** | Organização oficial do projeto: `src/screens/`, `src/components/`, `src/services/`, `src/context/`, `src/hooks/`, `src/constants/`, `src/navigation/`. Nomes em camelCase, sem espaços. |

---

*OSG Mobile — Documento gerado para o TCC 2025 · SENAI Suíço-Brasileira Paulo Ernesto Tolle*
