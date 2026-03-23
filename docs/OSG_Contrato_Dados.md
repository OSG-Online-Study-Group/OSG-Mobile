# OSG Mobile — Contrato de Dados e Fluxos

> **Documento de referência compartilhado entre Frontend e Backend**
> Toda tela nova ou serviço novo deve seguir este contrato.
> Atualizado: Sprint 3

---

## Sumário

1. [Estrutura do Firestore](#1-estrutura-do-firestore)
2. [Telas: manter, adaptar ou descartar](#2-telas-manter-adaptar-ou-descartar)
3. [Fluxo 1 — Cadastro e Entrada nos Grupos](#3-fluxo-1--cadastro-e-entrada-nos-grupos)
4. [Fluxo 2 — Login e Sessão](#4-fluxo-2--login-e-sessão)
5. [Fluxo 3 — Quiz Diário](#5-fluxo-3--quiz-diário)
6. [Fluxo 4 — Modo Treino](#6-fluxo-4--modo-treino)
7. [Fluxo 5 — Chat do Grupo](#7-fluxo-5--chat-do-grupo)
8. [Fluxo 6 — Ranking](#8-fluxo-6--ranking)
9. [Fluxo 7 — Duelo](#9-fluxo-7--duelo)
10. [Contrato de Funções Backend](#10-contrato-de-funções-backend)

---

## 1. Estrutura do Firestore

### `/users/{userId}`

Criado no cadastro. Atualizado a cada quiz e duelo.

```js
{
  name: string,           // "João Silva"
  email: string,          // "joao@email.com"
  xp: number,             // 150 — nunca decrementado
  level: number,          // Math.floor(xp / 100) + 1
  groupIds: string[],     // ["groupId_quimica", "groupId_economia"]
  lastDailyQuizDate: string | null,  // "2025-06-10" — controle de 1x/dia
  createdAt: string       // ISO timestamp
}
```

---

### `/groups/{groupId}`

**Criado manualmente pelo admin antes do lançamento** (RN05 — grupos pré-definidos).
Usuários não criam grupos, apenas entram neles.

```js
{
  name: string,       // "Grupo de Química Orgânica"
  subject: string,    // "quimica_organica" — chave usada no app
  adminId: string,    // uid do professor/responsável
  members: string[]   // ["uid1", "uid2", ...] — cresce a cada cadastro
}
```

**Grupos existentes (a serem criados no Firestore):**

| groupId (sugestão) | name | subject |
|---|---|---|
| `group_quimica_organica` | Grupo de Química Orgânica | quimica_organica |
| `group_economia` | Grupo de Economia | economia |
| `group_algebra` | Grupo de Álgebra | algebra |
| `group_quimica_forense` | Grupo de Química Forense | quimica_forense |

> ⚠️ Os `groupId` acima devem ser os IDs reais dos documentos no Firestore.
> Frontend e backend devem usar a mesma chave — definida em `src/constants/grupos.js`.

---

### `/groups/{groupId}/messages/{messageId}`

Subcoleção. Criada ao enviar mensagem.

```js
{
  text: string,          // "Alguém tem o gabarito da lista 3?"
  senderId: string,      // uid do usuário
  senderName: string,    // "Lucas" — salvo para não precisar buscar o user
  createdAt: Timestamp,  // serverTimestamp()
  deleted: boolean       // false por padrão; true = soft delete pelo admin
}
```

> ⚠️ **Nunca deletar o documento.** Só setar `deleted: true`.
> Frontend exibe `[mensagem deletada]` quando `deleted === true`.

---

### `/quizzes/{quizId}`

Criado ao iniciar o Quiz Diário. Referência futura para duelos.

```js
{
  topic: string,         // "Química Orgânica"
  groupId: string,       // grupo do usuário que gerou
  createdBy: string,     // uid
  createdAt: Timestamp,
  questions: [
    {
      pergunta: string,
      opcoes: string[],  // sempre 4 itens ["A", "B", "C", "D"]
      resposta: number   // índice da correta: 0, 1, 2 ou 3
    }
  ]
}
```

> ⚠️ O campo `resposta` **nunca é enviado ao frontend antes do quiz terminar** (RN18).
> O frontend recebe apenas `pergunta` e `opcoes` durante a sessão.

---

### `/duelos/{dueloId}`

Criado ao enviar convite de duelo.

```js
{
  desafianteId: string,      // uid de quem desafiou
  desafiadoId: string,       // uid de quem foi desafiado
  status: string,            // "pendente" | "ativo" | "finalizado" | "recusado" | "cancelado"
  perguntas: Question[],     // mesmo formato de /quizzes — geradas no momento do desafio
  respostaDesafiante: number[] | null,  // índices das respostas
  respostaDesafiado: number[] | null,
  vencedorId: string | null, // uid do vencedor ou "empate"
  criadoEm: Timestamp,
  expiraEm: Timestamp        // criadoEm + 24h
}
```

---

## 2. Telas: manter, adaptar ou descartar

### ✅ Manter como está (frontend completo, sem backend necessário)

| Tela | Motivo |
|------|--------|
| `Home` | Tela pública de entrada — ok |
| `Login` | Auth funcionando — ok |
| `FiltroEstudo` | Navegação estática — ok |
| `FiltroExatas` | Navegação estática — ok |
| `FiltroHumanas` | Navegação estática — ok |
| `FiltroExtras` | Navegação estática — ok |
| `FiltroMatematica` | Navegação estática — ok |
| `FiltroHistoria` | Navegação estática — ok |
| `FiltroQuimica` | Navegação estática — ok |
| `FiltroFilosofia` | Navegação estática — ok |
| `FiltroAstronomia` | Navegação estática — ok |
| `FiltroSociologia` | Navegação estática — ok |
| `FiltroInformatica` | Navegação estática — ok |
| `FiltroAntropologia` | Navegação estática — ok |
| `TreinoExatas` | IA funcionando via `useTreino("exatas")` |
| `TreinoHumanas` | IA funcionando via `useTreino("humanas")` |
| `TreinoExtras` | IA funcionando via `useTreino("extras")` |
| `TemaQuiz` | Navegação estática — ok |

---

### 🔧 Adaptar (UI pronta, precisa conectar ao backend)

| Tela | O que precisa |
|------|---------------|
| `Cadastro` | Adicionar tela de seleção de matérias após criar conta |
| `Menu` | Carregar grupos reais do Firestore via `buscarGruposDoUsuario()` |
| `Perfil` | Exibir `name, xp, level` reais do `AuthContext` |
| `GrupoQuimicaOrganica` | Substituir estado local pelo chat real via `chat.js` |
| `GrupoEconomia` | Idem |
| `QuizDiario` | Hook já feito — integrar `atualizarXP()` via `firestore.js` |
| `RankingAmigos` | Substituir dados estáticos por `useRanking(groupId)` |
| `RankingRegional` | Idem com groupId regional |
| `RankingGlobal` | Query global no Firestore |
| `ConviteDuelo` | Listar usuários reais do Firestore |
| `DueloAmigo` | Conectar perguntas e respostas ao Firestore |

---

### 🗑️ Descartar ou simplificar (sem sentido no MVP)

| Tela | Motivo |
|------|--------|
| `ListaMensagens` (`ChatList`) | Lista chats privados 1:1 — fora do escopo. O app tem **chat de grupo**, não DM. Descartar ou transformar em lista de grupos. |
| `SolicitacaoMensagens` | Depende de DMs — fora do escopo. Descartar. |
| `Comunidade` | Duplica o conceito de grupos. Sem backend definido. Descartar ou deixar estático. |
| `Game` (tela de escolha de modo) | Manter, mas remover "Duelo Aleatório" — não foi definido nos requisitos (só duelo entre usuários conhecidos). |

---

## 3. Fluxo 1 — Cadastro e Entrada nos Grupos

**Telas envolvidas:** `Cadastro` (nova etapa) → `Menu`
**RF:** RF01, RF09, RF10 | **RN:** RN01, RN02, RN06

```
[Tela Cadastro]
  Usuário preenche: nome, email, senha, confirmar senha
        │
        ▼
  createUserWithEmailAndPassword(auth, email, senha)
        │
        ▼
  salvarUsuario(uid, nome, email)
  → /users/{uid} = { name, email, xp:0, level:1, groupIds:[], ... }
        │
        ▼
[NOVA ETAPA — Tela SelecionarMaterias]
  Frontend exibe lista de matérias disponíveis
  (vinda de src/constants/grupos.js)
  Usuário seleciona 1 ou mais matérias
        │
        ▼
  entrarNosGrupos(uid, materiasSelecionadas[])
  → Para cada matéria:
      arrayUnion(uid) no campo members[] do grupo
  → Atualiza /users/{uid}.groupIds com os groupIds selecionados
        │
        ▼
  navigation.navigate("Menu")
```

**O que o frontend precisa:**
- Tela `SelecionarMaterias` com lista de grupos (vindos de `src/constants/grupos.js`)
- Botão "Confirmar" que chama `entrarNosGrupos()`
- Exibir loading enquanto salva

**O que o backend precisa:**
- `entrarNosGrupos(uid, groupIds[])` no `firestore.js`
- Documentos dos grupos criados no Firestore

---

## 4. Fluxo 2 — Login e Sessão

**Telas envolvidas:** `Login` → `Menu`
**RF:** RF02, RF03 | **RN:** RN03

```
[Tela Login]
  Usuário preenche email e senha
        │
        ▼
  signInWithEmailAndPassword(auth, email, senha)
        │
        ▼
  AuthContext.onAuthStateChanged detecta firebaseUser != null
        │
        ▼
  buscarUsuario(uid) → carrega name, xp, level, groupIds no contexto
        │
        ▼
  RootNavigator troca PublicStack → PrivateStack
        │
        ▼
  [Tela Menu] — usuário vê seus grupos reais
```

**Logout:**
```
[Tela Perfil] → usuário clica "Fazer Logout"
        │
        ▼
  useAuth().logout() → signOut(auth)
        │
        ▼
  AuthContext seta firebaseUser = null
        │
        ▼
  RootNavigator troca PrivateStack → PublicStack automaticamente
  Usuário vê tela Home — pilha limpa, sem acesso a telas protegidas
```

---

## 5. Fluxo 3 — Quiz Diário

**Telas envolvidas:** `Game` → `QuizDiario`
**RF:** RF19–RF28 | **RN:** RN14, RN15, RN18–RN22

```
[Tela Game] → usuário clica "Quiz Diário"
        │
        ▼
[Tela QuizDiario — useQuizDiario()]
        │
        ▼
  getDoc(/users/{uid}) → verifica lastDailyQuizDate
        │
        ├── lastDailyQuizDate == hoje?
        │     └── exibe "Volte amanhã" — bloqueia interação
        │
        └── lastDailyQuizDate != hoje (ou null)?
              │
              ▼
        enviarMensagemParaIA(prompt com matéria do grupo)
              │
              ├── IA retorna JSON válido?
              │     └── exibe 5 perguntas
              │
              └── IA falhou ou JSON inválido?
                    └── exibe FALLBACK_QUIZ (perguntas estáticas)
              │
              ▼
        Usuário responde pergunta
              │
              ▼
        Frontend calcula: acertou = resposta == correta
        XP = acertou ? 10 : 0
              │
              ▼
        atualizarXP(uid, XP)
        → increment(xp) no /users/{uid}
        → recalcula level = floor(novoXP / 100) + 1
              │
              ▼
        setDoc(/users/{uid}, { lastDailyQuizDate: hoje }, merge:true)
        → bloqueia segunda tentativa no mesmo dia
              │
              ▼
        refreshUsuario() → atualiza XP/level no AuthContext (Perfil reflete na hora)
```

**O que o frontend recebe da IA (durante o quiz):**
```js
// Apenas pergunta e opções — SEM o índice da resposta correta
{ pergunta: string, opcoes: string[] }
```

**O que o frontend usa internamente (não exibido):**
```js
// Índice da resposta correta — só comparado após o usuário responder
{ correta: number }
```

---

## 6. Fluxo 4 — Modo Treino

**Telas envolvidas:** `TemaQuiz` → `TreinoExatas` / `TreinoHumanas` / `TreinoExtras`
**RF:** RF29–RF32 | **RN:** RN16, RN23

```
[Tela TemaQuiz] → usuário escolhe tema (Exatas / Humanas / Extras)
        │
        ▼
[Tela Treino — useTreino("exatas" | "humanas" | "extras")]
        │
        ▼
  enviarMensagemParaIA(prompt do tema escolhido)
  → Retorna pergunta aberta (não múltipla escolha)
        │
        ▼
  Exibe pergunta no chat como mensagem do "bot"
        │
        ▼
  Usuário digita resposta e envia
        │  
        ▼
  enviarMensagemParaIA(prompt de correção com pergunta + resposta)
  → Retorna "CORRETA" ou "INCORRETA" + explicação
        │
        ▼
  [TODO — Sprint 5]
  Se CORRETA: atualizarXP(uid, 5)  ← XP = acertos × 5 (RN23)
        │
        ▼
  Após 3s: gera nova pergunta automaticamente
  (sem limite de tentativas por dia — RN16 / RF31)
```

> ⚠️ O modo treino **não salva no Firestore** além do XP.
> Não há histórico de perguntas de treino — apenas o XP acumulado.

---

## 7. Fluxo 5 — Chat do Grupo

**Telas envolvidas:** `Menu` → `GrupoQuimicaOrganica` / `GrupoEconomia`
**RF:** RF13–RF18 | **RN:** RN08–RN13

```
[Tela Menu] → usuário clica no grupo
        │
        ▼
[Tela do Grupo — useChat(groupId)]
        │
        ▼
  ouvirMensagens(groupId, callback)
  → onSnapshot(/groups/{groupId}/messages orderBy createdAt asc)
  → callback atualiza estado de mensagens em tempo real
        │
        ▼
  Para cada mensagem, frontend exibe:
  ┌─────────────────────────────────┐
  │ deleted == false → exibe texto  │
  │ deleted == true  → "[mensagem   │
  │                    deletada]"   │
  └─────────────────────────────────┘
        │
        ▼
  Usuário digita mensagem e envia
        │
        ▼
  enviarMensagem(groupId, text, { senderId: uid, senderName: name })
  → addDoc(/groups/{groupId}/messages, {
      text, senderId, senderName,
      createdAt: serverTimestamp(),
      deleted: false
    })
        │
  [Admin do grupo]
        ▼
  isAdmin(groupId, uid) == true → exibe botão "Deletar" em cada mensagem
        │
        ▼
  deletarMensagem(groupId, messageId)
  → updateDoc: { deleted: true }
  → onSnapshot propaga mudança para todos em tempo real

[Ao sair da tela]
  useEffect cleanup → chama unsubscribe() do onSnapshot
  → evita memory leak
```

**Contrato de mensagem enviada ao Firestore:**
```js
// O que o frontend envia
{
  text: "Alguém tem o gabarito?",
  senderId: "uid_do_usuario",
  senderName: "Lucas",
  createdAt: serverTimestamp(),
  deleted: false
}

// O que o frontend exibe na tela
{
  senderName: "Lucas",       // nome em cima da bolha
  text: "Alguém tem...",     // conteúdo
  createdAt: Timestamp,      // hora formatada
  isOwn: senderId == uid     // define lado direito ou esquerdo
}
```

---

## 8. Fluxo 6 — Ranking

**Telas envolvidas:** `Perfil` → `FiltroRanking` → `RankingAmigos` / `RankingRegional` / `RankingGlobal`
**RF:** RF38–RF41 | **RN:** RN24, RN26

```
[Tela RankingAmigos — useRanking(groupId)]
        │
        ▼
  onSnapshot(
    query(
      collection(db, "users"),
      where("groupIds", "array-contains", groupId),
      orderBy("xp", "desc")
    )
  )
        │
        ▼
  Frontend exibe lista em tempo real:
  ┌──────────────────────────────────┐
  │  1º  Lucas        1.250 XP  Nv5 │
  │  2º  João          980 XP  Nv4  │
  │  3º  Reinaldo       720 XP  Nv3 │
  └──────────────────────────────────┘

[Tela RankingGlobal — useRankingGlobal()]
        │
        ▼
  onSnapshot(
    query(
      collection(db, "users"),
      orderBy("xp", "desc"),
      limit(50)         ← limitar para não sobrecarregar
    )
  )
```

**Contrato de dados exibidos no ranking:**
```js
// O que o frontend precisa de cada item
{
  uid: string,
  name: string,
  xp: number,
  level: number
}
// Posição = índice do array (0 = 1º lugar)
```

---

## 9. Fluxo 7 — Duelo

**Telas envolvidas:** `Game` → `ConviteDuelo` → `DueloAmigo`
**RF:** RF33–RF37 | **RN:** RN25, RN27–RN30

```
[Tela ConviteDuelo]
  Lista usuários do app (ou do grupo) para desafiar
        │
        ▼
  Usuário seleciona adversário → clica "Desafiar"
        │
        ▼
  [Validação antes de criar]
  Conta duelos com status "pendente" do desafiante
  Se >= 3: Alert "Você já tem 3 duelos pendentes" → bloqueia (RN30)
        │
        ▼
  criarDuelo(desafianteId, desafiadoId)
  → Gera 5 perguntas via enviarMensagemParaIA()
  → Salva /duelos/{dueloId} = {
      desafianteId, desafiadoId,
      status: "pendente",
      perguntas: [...],        ← com respostas corretas
      respostaDesafiante: null,
      respostaDesafiado: null,
      vencedorId: null,
      criadoEm: serverTimestamp(),
      expiraEm: agora + 24h
    }

[Tela do desafiado — notificação / lista de duelos pendentes]
        │
        ▼
  Desafiado vê convite → "Aceitar" ou "Recusar"
        │
        ├── Recusar
        │     └── updateDoc: { status: "recusado" }
        │
        └── Aceitar
              └── updateDoc: { status: "ativo" }
              │
              ▼
        [Tela DueloAmigo]
        Ambos respondem as mesmas 5 perguntas (RN29)
        Frontend exibe perguntas SEM mostrar a correta
              │
              ▼
        salvarRespostaDuelo(dueloId, uid, respostas[])
        → updateDoc: { respostaDesafiante: [...] } ou { respostaDesafiado: [...] }
              │
              ▼
        Quando ambos responderam:
        Calcula pontuação de cada um
        Determina vencedor
        updateDoc: { status: "finalizado", vencedorId: uid | "empate" }
              │
              ▼
        atualizarXP(vencedorId, 25) ou atualizarXP(ambos, 10) em empate (RN25)

[Cancelamento automático]
  Ao abrir o app → verificarDuelosExpirados()
  Query: duelos com status "pendente" e expiraEm < agora
  → updateDoc: { status: "cancelado" } para cada um
```

---

## 10. Contrato de Funções Backend

Todas as funções ficam em `src/services/firestore.js` ou `src/services/chat.js`.
O frontend **só chama essas funções** — nunca acessa `db` diretamente nas telas.

### `firestore.js`

| Função | Parâmetros | Retorna | Usado em |
|--------|-----------|---------|----------|
| `salvarUsuario(uid, nome, email)` | string, string, string | Promise\<void\> | Cadastro |
| `buscarUsuario(uid)` | string | Promise\<UserDoc\> | AuthContext |
| `atualizarXP(uid, xpGanho)` | string, number | Promise\<void\> | QuizDiario, Treino, Duelo |
| `entrarNosGrupos(uid, groupIds[])` | string, string[] | Promise\<void\> | Cadastro (seleção de matérias) |
| `buscarGruposDoUsuario(uid)` | string | Promise\<GroupDoc[]\> | Menu |
| `buscarMembrosDoGrupo(groupId)` | string | Promise\<UserDoc[]\> | Ranking, tela do Grupo |
| `criarDuelo(desafianteId, desafiadoId)` | string, string | Promise\<string\> (dueloId) | ConviteDuelo |
| `responderDesafio(dueloId, aceitar)` | string, boolean | Promise\<void\> | DueloAmigo |
| `salvarRespostaDuelo(dueloId, uid, respostas[])` | string, string, number[] | Promise\<void\> | DueloAmigo |
| `verificarDuelosExpirados()` | — | Promise\<void\> | App.jsx (ao abrir) |

### `chat.js`

| Função | Parâmetros | Retorna | Usado em |
|--------|-----------|---------|----------|
| `enviarMensagem(groupId, text, usuario)` | string, string, {uid, name} | Promise\<void\> | useChat |
| `ouvirMensagens(groupId, callback)` | string, function | unsubscribe() | useChat |
| `deletarMensagem(groupId, messageId)` | string, string | Promise\<void\> | useChat |
| `isAdmin(groupId, uid)` | string, string | Promise\<boolean\> | useChat |

### `IAservice.js`

| Função | Parâmetros | Retorna | Usado em |
|--------|-----------|---------|----------|
| `enviarMensagemParaIA(prompt)` | string | Promise\<string\> | useQuizDiario, useTreino, criarDuelo |

---

## Regras Gerais do Contrato

1. **Frontend nunca importa `db` diretamente nas telas** — só usa funções dos services
2. **Frontend nunca importa `auth` diretamente nas telas** — só usa `useAuth()`
3. **Toda chamada assíncrona tem `try/catch`** com mensagem de erro amigável (RNF10)
4. **`onSnapshot()` sempre tem cleanup** no `return` do `useEffect`
5. **Campos `createdAt` e `expiraEm` usam `serverTimestamp()`** — nunca `new Date()` do cliente
6. **O campo `resposta` das perguntas nunca é exibido** antes do usuário responder (RN18)
7. **`deleted: true` nunca vira `delete` no documento** — soft delete sempre (RN11)

---

*OSG Mobile — Contrato de Dados · SENAI Suíço-Brasileira Paulo Ernesto Tolle · Sprint 3*
