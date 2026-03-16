# OSG Mobile — Backlog Backend Atualizado

> **Responsáveis:** Reinaldo · João
> **Stack:** Firebase Auth · Cloud Firestore · OpenRouter (direto do app)
> **Referência:** Requisitos v1.0 — Sprint 1–6
> **Atualizado após:** implementação Auth, AuthContext, firestore.js, IAservice.js, RootNavigator com stacks separadas

---

## Legenda

| Símbolo | Significado |
|---------|-------------|
| ✅ | Concluído |
| 🔄 | Em andamento |
| 📋 | A fazer |
| 🔴 | Prioridade crítica |
| 🟠 | Prioridade alta |
| 🟡 | Prioridade média |

---

## ✅ Sprint 1 — Setup e Infraestrutura (CONCLUÍDA)

| # | Tarefa | Requisito | Prioridade | Status |
|---|--------|-----------|------------|--------|
| 1.1 | Criar projeto Firebase e habilitar Auth + Firestore | RNF03 | 🔴 | ✅ |
| 1.2 | Criar `src/config/firebase.js` com inicialização e exports de `auth` e `db` | RNF03 | 🔴 | ✅ |
| 1.3 | Configurar `.env` com todas as variáveis `EXPO_PUBLIC_FIREBASE_*` | RNF04 | 🔴 | ✅ |
| 1.4 | Confirmar `.env` e `.env.local` no `.gitignore` | RNF04 | 🔴 | ✅ |
| 1.5 | Criar `.env.example` com chaves sem valores reais | RNF04 | 🔴 | ✅ |
| 1.6 | Criar estrutura de pastas oficial (`services/`, `context/`, `hooks/`, `constants/`) | RNF09 | 🟠 | ✅ |
| 1.7 | Corrigir `IAservice.js` para chamar OpenRouter direto (sem backend Vercel) | RF19, RF30 | 🔴 | ✅ |
| 1.8 | Adicionar `EXPO_PUBLIC_OPENROUTER_API_KEY` no `.env` | RNF04 | 🔴 | ✅ |
| 1.9 | Deletar `src/services/api.js` (axios para Vercel obsoleto) | — | 🟠 | ✅ |

---

## ✅ Sprint 2 — Autenticação e Base do Usuário (CONCLUÍDA)

| # | Tarefa | Requisito | Prioridade | Status |
|---|--------|-----------|------------|--------|
| 2.1 | Implementar `createUserWithEmailAndPassword` na tela Cadastro | RF01 | 🔴 | ✅ |
| 2.2 | Implementar `signInWithEmailAndPassword` na tela Login | RF02 | 🔴 | ✅ |
| 2.3 | Criar `src/services/firestore.js` com `salvarUsuario()` | RF01, RN01 | 🔴 | ✅ |
| 2.4 | Chamar `salvarUsuario()` após cadastro — salva `name, email, xp:0, level:1, groupIds:[]` no Firestore | RF01, RN01 | 🔴 | ✅ |
| 2.5 | Criar `src/context/AuthContext.jsx` com `onAuthStateChanged`, `logout()` e `refreshUsuario()` | RF03, RF04 | 🔴 | ✅ |
| 2.6 | Criar `src/hooks/useAuth.js` exportando o contexto | RF03 | 🔴 | ✅ |
| 2.7 | Envolver app com `AuthProvider` no `App.jsx` | RF03 | 🔴 | ✅ |
| 2.8 | Refatorar `RootNavigator` com `PublicStack` e `PrivateStack` baseadas em `firebaseUser` | RF03, RF04, RN03 | 🔴 | ✅ |
| 2.9 | Implementar `logout()` real via `signOut(auth)` na tela Perfil usando `useAuth()` | RF04 | 🔴 | ✅ |
| 2.10 | Adicionar tela de loading (ActivityIndicator) enquanto `carregando = true` no navigator | RF03 | 🟠 | ✅ |
| 2.11 | Criar `buscarUsuario(uid)` no `firestore.js` | RF05 | 🔴 | ✅ |
| 2.12 | Criar `atualizarXP(uid, xpGanho)` com `increment()` e recálculo de nível no `firestore.js` | RF28, RN21, RN22, RN24 | 🔴 | ✅ |

---

## 📋 Sprint 3 — Grupos de Estudo (PRÓXIMA)

> **Contexto:** grupos são pré-definidos no sistema (RN05). O usuário escolhe matérias no cadastro e entra automaticamente (RN06). Não há código de convite.

| # | Tarefa | Requisito | Prioridade | Status |
|---|--------|-----------|------------|--------|
| 3.1 | Criar coleção `/groups` no Firestore com documentos fixos para cada matéria disponível (`name, subject, adminId, members:[]`) | RF08, RN05, RN07 | 🔴 | 📋 |
| 3.2 | Criar `src/constants/grupos.js` com a lista de `groupId` por matéria (espelha os docs do Firestore) | RN05 | 🔴 | 📋 |
| 3.3 | Criar tela de seleção de matérias no fluxo de Cadastro (após criar conta, antes de ir ao Menu) | RF09, RF10 | 🔴 | 📋 |
| 3.4 | Criar `entrarNosGrupos(uid, materiasSelecionadas[])` no `firestore.js` — adiciona `uid` ao array `members[]` de cada grupo escolhido e salva `groupIds[]` no doc do usuário | RF09, RN01, RN06 | 🔴 | 📋 |
| 3.5 | Chamar `entrarNosGrupos()` ao final do cadastro, após `salvarUsuario()` | RF09 | 🔴 | 📋 |
| 3.6 | Criar `buscarGruposDoUsuario(uid)` — lê `groupIds[]` do usuário e retorna os docs dos grupos | RF11, RF12 | 🔴 | 📋 |
| 3.7 | Criar `buscarMembrosDoGrupo(groupId)` — retorna lista de usuários do grupo ordenada por XP desc | RF11, RN26 | 🟠 | 📋 |
| 3.8 | Conectar tela Menu para exibir apenas os grupos do usuário logado (via `buscarGruposDoUsuario`) | RF11, RF12 | 🟠 | 📋 |
| 3.9 | Atualizar regras de segurança do Firestore: membros leem grupos, só admin escreve no doc do grupo | RN04, RN08, RNF08 | 🔴 | 📋 |

---

## 📋 Sprint 4 — Chat em Tempo Real

> **Contexto:** um chat por grupo, em tempo real via `onSnapshot()`, com soft delete pelo admin (RN10, RN11).

| # | Tarefa | Requisito | Prioridade | Status |
|---|--------|-----------|------------|--------|
| 4.1 | Criar `src/services/chat.js` com função `enviarMensagem(groupId, text, usuario)` — usa `addDoc()` com `text, senderId, senderName, createdAt: serverTimestamp(), deleted: false` | RF14, RN09 | 🔴 | 📋 |
| 4.2 | Criar `ouvirMensagens(groupId, callback)` — usa `onSnapshot()` com `orderBy('createdAt', 'asc')` | RF13, RNF05 | 🔴 | 📋 |
| 4.3 | Criar `deletarMensagem(groupId, messageId)` — usa `updateDoc()` setando `deleted: true` (soft delete) | RF16, RF18, RN10, RN11 | 🔴 | 📋 |
| 4.4 | Criar `isAdmin(groupId, uid)` — busca `adminId` no doc do grupo e compara com uid | RN10 | 🟠 | 📋 |
| 4.5 | Refatorar `GrupoQuimicaOrganica/index.jsx` para usar `ouvirMensagens()` e `enviarMensagem()` substituindo o estado local | RF13, RF14, RF15 | 🔴 | 📋 |
| 4.6 | Refatorar `GrupoEconomia/index.jsx` da mesma forma | RF13, RF14, RF15 | 🔴 | 📋 |
| 4.7 | Exibir `[mensagem deletada]` condicionalmente quando `deleted === true` | RF17, RN12 | 🟡 | 📋 |
| 4.8 | Mostrar botão de deletar apenas para o admin do grupo | RF16, RN10 | 🟠 | 📋 |
| 4.9 | Implementar cleanup do `onSnapshot()` no `useEffect` ao sair da tela (evita memory leak) | RNF05 | 🔴 | 📋 |
| 4.10 | Extrair lógica do chat para `useChat.js` (hook customizado) separando UI de lógica | RNF09 | 🟠 | 📋 |
| 4.11 | Atualizar regras Firestore: só membros leem/criam mensagens; só admin faz update (soft delete); delete real bloqueado | RN08, RN09, RN10, RNF08 | 🔴 | 📋 |

---

## 📋 Sprint 5 — Ranking Real e XP Completo

> **Contexto:** ranking lê do Firestore em tempo real. XP do Quiz Diário já funciona — agora falta conectar ao Perfil e ao Ranking.

| # | Tarefa | Requisito | Prioridade | Status |
|---|--------|-----------|------------|--------|
| 5.1 | Conectar tela Perfil ao `AuthContext` — exibir `name, xp, level` reais do Firestore | RF05, RN24 | 🔴 | 📋 |
| 5.2 | Criar `useRanking(groupId)` hook — usa `onSnapshot()` na coleção `/users` filtrando por `groupId` e ordenando por `xp` desc | RF38, RF39, RN26 | 🔴 | 📋 |
| 5.3 | Conectar tela `RankingAmigos` (ranking do grupo) ao `useRanking()` substituindo dados estáticos | RF38, RF39 | 🔴 | 📋 |
| 5.4 | Conectar tela `RankingRegional` ao `useRanking()` (pode usar o mesmo hook com groupId diferente) | RF38 | 🟠 | 📋 |
| 5.5 | Conectar tela `RankingGlobal` — query em todos os usuários ordenada por XP (sem filtro de grupo) | RF38 | 🟠 | 📋 |
| 5.6 | Chamar `atualizarXP()` no hook `useQuizDiario` após resposta correta, substituindo o `setDoc` manual atual | RF28, RN21, RN22 | 🔴 | 📋 |
| 5.7 | Implementar XP no Modo Treino: ao final de cada sessão calcular `XP = (acertos/total) × 5` e chamar `atualizarXP()` | RF32, RN23 | 🟡 | 📋 |
| 5.8 | Chamar `refreshUsuario()` do AuthContext após atualizar XP para refletir no Perfil sem precisar recarregar | RF05, RF41 | 🟠 | 📋 |

---

## 📋 Sprint 6 — Duelos e Testes

> **Contexto:** duelos são assíncronos (RN28). O desafiado aceita ou recusa; sem resposta em 24h o duelo é cancelado automaticamente.

| # | Tarefa | Requisito | Prioridade | Status |
|---|--------|-----------|------------|--------|
| 6.1 | Definir estrutura do doc `/duelos/{dueloId}` no Firestore: `desafianteId, desafiadoId, perguntas[], status ('pendente'/'ativo'/'finalizado'/'recusado'/'cancelado'), criadoEm, expiraEm` | RF33–RF37, RN27–RN30 | 🔴 | 📋 |
| 6.2 | Criar `criarDuelo(desafianteId, desafiadoId)` no `firestore.js` — gera perguntas via IA, salva doc com `status: 'pendente'` e `expiraEm: agora + 24h` | RF33, RF34, RN27, RN29 | 🔴 | 📋 |
| 6.3 | Criar `responderDesafio(dueloId, aceitar: bool)` — muda status para `ativo` ou `recusado` | RF35, RN28 | 🔴 | 📋 |
| 6.4 | Criar `verificarDuelosExpirados()` — função chamada ao abrir o app que cancela duelos com `expiraEm < agora` | RN28 | 🟠 | 📋 |
| 6.5 | Criar `salvarRespostaDuelo(dueloId, userId, respostas[])` e calcular vencedor | RF36, RF37, RN25 | 🔴 | 📋 |
| 6.6 | Atribuir XP bônus ao vencedor (25 XP) ou a ambos em caso de empate (10 XP cada) usando `atualizarXP()` | RF37, RN25 | 🟠 | 📋 |
| 6.7 | Validar limite de 3 duelos pendentes por usuário antes de criar novo (RN30) | RN30 | 🟠 | 📋 |
| 6.8 | Conectar tela `ConviteDuelo` para listar usuários reais do Firestore (substituir dados estáticos) | RF33 | 🟠 | 📋 |
| 6.9 | Conectar tela `DueloAmigo` ao Firestore para exibir perguntas e registrar respostas | RF34, RF36 | 🟠 | 📋 |

---

## 📋 Sprint 6 — Testes, Segurança e Entrega

| # | Tarefa | Requisito | Prioridade | Status |
|---|--------|-----------|------------|--------|
| T1 | Testar fluxo completo: Cadastro → seleção de matérias → Menu com grupos reais | RF01, RF09, RF10 | 🔴 | 📋 |
| T2 | Testar fluxo: Login → Quiz Diário → XP atualizado no Perfil e Ranking | RF24–RF28, RF38 | 🔴 | 📋 |
| T3 | Testar chat em tempo real com 2 dispositivos no mesmo grupo | RF13, RNF05 | 🔴 | 📋 |
| T4 | Testar soft delete: admin deleta mensagem → exibe `[mensagem deletada]` para todos | RF16, RF17, RF18 | 🟠 | 📋 |
| T5 | Testar logout: usuário é redirecionado para PublicStack e não acessa telas protegidas | RF04, RN03 | 🔴 | 📋 |
| T6 | Testar fallback da IA: simular falha da OpenRouter e verificar se perguntas estáticas aparecem | RF23, RN19 | 🔴 | 📋 |
| T7 | Revisar e finalizar regras de segurança do Firestore (`firestore.rules`) | RNF08 | 🔴 | 📋 |
| T8 | Confirmar que nenhuma chave de API está commitada no repositório | RNF04 | 🔴 | 📋 |
| T9 | Documentar estrutura do Firestore no README (`/users`, `/groups`, `/messages`, `/duelos`) | RNF09 | 🟠 | 📋 |
| T10 | Gravar vídeo de demonstração do app como plano B para a apresentação | — | 🔴 | 📋 |

---

## Resumo por Sprint

| Sprint | Total | ✅ Feito | 📋 A fazer |
|--------|-------|----------|------------|
| Sprint 1 — Setup | 9 | 9 | 0 |
| Sprint 2 — Auth | 12 | 12 | 0 |
| Sprint 3 — Grupos | 9 | 0 | 9 |
| Sprint 4 — Chat | 11 | 0 | 11 |
| Sprint 5 — Ranking / XP | 8 | 0 | 8 |
| Sprint 6 — Duelos + Testes | 19 | 0 | 19 |
| **Total** | **68** | **21** | **47** |

---

## Arquivos de backend criados até agora

```
src/
├── config/
│   └── firebase.js          ✅ initializeApp, auth, db
├── context/
│   └── AuthContext.jsx       ✅ onAuthStateChanged, logout, refreshUsuario
├── hooks/
│   ├── useAuth.js            ✅ exporta useAuth()
│   ├── useQuizDiario.js      ✅ toda lógica do quiz diário
│   └── useTreino.js          ✅ lógica compartilhada dos 3 modos treino
├── services/
│   ├── firestore.js          ✅ salvarUsuario, buscarUsuario, atualizarXP
│   ├── IAservice.js          ✅ enviarMensagemParaIA via OpenRouter direto
│   └── chat.js               📋 a criar na Sprint 4
└── constants/
    └── grupos.js             📋 a criar na Sprint 3
```

---

*OSG Mobile — Backlog Backend · SENAI Suíço-Brasileira Paulo Ernesto Tolle · Atualizado Sprint 2*
