# Guia de Fluxo Git para o Time (3 pessoas)

Este guia define como o time deve trabalhar para evitar conflitos, commits misturados e branches desatualizadas.

## Objetivo

- Manter a branch develop sempre integravel.
- Reduzir conflitos por trabalho em paralelo.
- Evitar subir historico baguncado para o remoto.

## Estrategia de branches

- main: somente codigo estavel de release.
- develop: integracao de features finalizadas.
- feature/nome-curto: uma tarefa por branch.
- hotfix/nome-curto: correcao urgente.

## Regra de ouro (sempre)

Antes de iniciar qualquer tarefa:

1. Trocar para develop.
2. Atualizar develop pelo remoto.
3. Criar branch feature nova a partir da develop atualizada.

Exemplo:

git checkout develop

git pull --ff-only origin develop

git checkout -b feature/tela-ranking

## Fluxo diario recomendado

### 1) Comeco do dia

git checkout develop

git pull --ff-only origin develop

### 2) Criar ou continuar feature

Se for nova:

git checkout -b feature/minha-tarefa

Se ja existe branch local:

git checkout feature/minha-tarefa

### 3) Durante o trabalho

- Fazer commits pequenos e frequentes.
- Evitar ficar muitas horas sem commit.
- Antes de alterar arquivos centrais (navegacao, contexto, servicos), avisar no time.

Exemplo de ciclo curto:

git add .

git commit -m "feat(ranking): adiciona card de materia"

### 4) Atualizar sua feature com a develop

Frequencia minima: 2x por dia (inicio e antes de abrir PR).

Opcao A (merge, mais seguro em branch compartilhada):

git fetch origin

git merge origin/develop

Opcao B (rebase, historico mais limpo em branch individual):

git fetch origin

git rebase origin/develop

### 5) Subir para remoto

Quando dar push:

- Depois de um bloco de trabalho funcional.
- Antes de pausar no fim do dia.
- Imediatamente antes de abrir PR.

Comando:

git push -u origin feature/minha-tarefa

## Pull x Fetch (diferenca pratica)

- fetch: baixa atualizacoes do remoto, sem mexer na sua branch atual.
- pull: faz fetch e em seguida integra na sua branch atual (merge ou rebase, conforme configuracao).

Uso recomendado para evitar surpresa:

- Use fetch para inspecionar primeiro.
- Use pull --ff-only em develop para atualizar sem criar merge commit local.

Exemplo seguro em develop:

git checkout develop

git pull --ff-only origin develop

## Quando usar merge e quando usar rebase

### Use merge quando

- A branch e compartilhada por mais de uma pessoa.
- Voce quer preservar contexto de integracao.
- O time quer evitar reescrever historico.

Exemplo:

git checkout feature/chat

git fetch origin

git merge origin/develop

### Use rebase quando

- A branch e somente sua (individual).
- Voce quer historico linear e limpo.
- Ainda nao houve colaboracao de outras pessoas na mesma feature.

Exemplo:

git checkout feature/chat

git fetch origin

git rebase origin/develop

git push --force-with-lease

Observacao critica:

Nunca usar force push em develop ou main.

## Regras de PR para develop

- Nao fazer push direto em develop.
- PR obrigatorio para toda feature.
- Pelo menos 1 aprovacao de review.
- Branch precisa estar atualizada com develop antes do merge.
- Resolver conflitos na branch feature, nao na develop.

## Padrao de merge do PR

Recomendacao do time: Squash and merge.

Motivo:

- Evita poluicao de historico com muitos commits intermediarios.
- Mantem develop legivel.

## Como evitar conflitos entre voces tres

### Cenario 1: Pessoa A alterou navegacao, Pessoa B tambem alterou

Como evitar:

- Pessoa B da fetch/pull na develop antes de comecar.
- Pessoa B integra develop na feature antes de abrir PR.
- Resolver conflito localmente e testar navegacao antes de subir.

### Cenario 2: Pessoa C passou o dia sem commit e sem atualizar

Como corrigir:

- Fazer commit local do estado atual.
- Fazer fetch origin.
- Integrar develop com merge ou rebase.
- Resolver conflitos em blocos pequenos e testar a cada bloco.

### Cenario 3: Dois devs editam o mesmo arquivo grande

Pratica recomendada:

- Dividir por secoes e combinar ordem de merge.
- Quem abriu PR primeiro, mergeia primeiro.
- O segundo atualiza a feature com develop apos o merge do primeiro.

## Checklist antes de abrir PR

1. Branch atualizada com develop hoje.
2. Sem conflitos pendentes.
3. Build local ok.
4. Fluxo principal testado (login, menu, navegacao da feature).
5. Commits com mensagem clara.

## Comandos de referencia rapida

Atualizar develop com seguranca:

git checkout develop

git pull --ff-only origin develop

Criar feature nova:

git checkout -b feature/nome-tarefa

Ver estado resumido:

git status -sb

git branch -avv

Trazer develop para sua feature com merge:

git fetch origin

git merge origin/develop

Trazer develop para sua feature com rebase:

git fetch origin

git rebase origin/develop

Subir branch:

git push -u origin feature/nome-tarefa

## Regras proibidas

- Nao usar git reset --hard em branch compartilhada.
- Nao usar filter-branch em branch compartilhada.
- Nao usar force push em develop/main.
- Nao abrir PR de branch desatualizada.

## Definicao de pronto da branch feature

Uma feature so pode ser mergeada quando:

- Esta atualizada com develop.
- Passou nos checks combinados do time.
- Foi revisada por pelo menos uma pessoa.
- Nao quebra fluxos existentes.

## Rotina semanal de higiene (1 pessoa responsavel)

- Rodar fetch --prune.
- Deletar branches remotas ja mergeadas.
- Deletar branches locais antigas.
- Conferir se todos estao partindo da develop atualizada.
