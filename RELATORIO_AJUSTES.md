# Relatório de ajustes — Site das Semanas 23 e 24

## 1. Problemas identificados na versão anterior

- Os materiais originais das aulas e os roteiros não estavam disponíveis dentro do projeto publicado.
- Não havia modo claro/escuro com preferência persistente.
- O pipeline horizontal exigia rolagem em telas pequenas.
- Alguns grids e cards podiam ficar visualmente desequilibrados conforme a largura da tela.
- O Registro 1 informava que o mapa poderia ser feito em diferentes ferramentas, mas ainda faltava um passo a passo detalhado e uma orientação clara sobre o Canva.
- O menu não possuía acesso direto à área de materiais.

## 2. Ajustes de responsividade

- Pipeline CI/CD passa a ser vertical em telas pequenas.
- Cards e painéis receberam regras de largura mínima, quebra de texto e altura equilibrada.
- Materiais possuem grid responsivo.
- Controles de tema e menu foram ajustados para telas estreitas.
- Blocos de código mantêm rolagem interna e não expandem a largura da página.
- Conteúdo do roteiro adaptado possui versão responsiva própria.

## 3. Materiais incluídos

### Semana 23
- Aula 1 — Configuração de pipelines CI/CD
- Aula 2 — Testes automatizados com Jest e Cypress
- Aula 3 — Deploy contínuo com Docker e Kubernetes
- Roteiro original — Pipelines CI/CD para automação de deploys
- Roteiro adaptado — Mapa Mental: Esteiras de Entrega Contínua

### Semana 24
- Aula 1 — Utilização de pré-processadores CSS
- Aula 2 — Design responsivo
- Aula 3 — Animações, transições e JavaScript
- Roteiro original — Implementação de animações e transições

## 4. Registro 1 — Semana 23

A versão adaptada agora contém:

- objetivo;
- organização em dupla;
- tempo estimado;
- tema central;
- 11 conceitos obrigatórios;
- instrução explícita para criar relações, e não apenas listar termos;
- opções de ferramenta;
- sugestão de Canva, sem tornar seu uso obrigatório;
- passo a passo em seis etapas;
- fluxo visual sugerido;
- cinco perguntas de registro;
- critérios de avaliação;
- link para o roteiro original e para o roteiro adaptado.

## 5. Modo escuro

- Botão de tema no cabeçalho.
- Preferência salva em `localStorage`.
- Quando não existe preferência salva, o site considera `prefers-color-scheme`.
- Cards, textos, bordas, simulador, quiz e painéis possuem ajustes específicos para o modo escuro.

## 6. Validações realizadas

- Sintaxe do JavaScript principal verificada com Node.js.
- Balanceamento de chaves do CSS conferido.
- Referências locais em `href`, `src` e folhas de estilo verificadas.
- Nenhum caminho local utilizado pelo HTML principal ou pelo roteiro adaptado ficou apontando para arquivo inexistente.


## Correção V3 — modo escuro
- Protegido o uso de `localStorage` com `try/catch`, inclusive para abertura local por `file://`.
- O tema passa a ser aplicado mesmo quando o armazenamento do navegador estiver bloqueado.
- Sincronização de `aria-label`, `aria-pressed`, ícone e texto do botão de tema.
- Adicionado `color-scheme` para controles nativos.
- Corrigido o callout que permanecia branco com texto claro no modo escuro.
- Ajustados estados correto/incorreto do quiz para contraste no modo escuro.
- Diferenciação visual das seções claras quando o tema escuro está ativo.
- Corrigido o modo escuro da página independente do roteiro adaptado (chips e blocos).
- Refinado alinhamento do cabeçalho e comportamento mobile.
