# Aula Interativa — Programação Front-End | Semanas 23 e 24

Site didático estático para uso em **3 aulas de 50 minutos**, pronto para hospedagem no GitHub Pages.

## Objetivo pedagógico

Condensar os conteúdos das Semanas 23 e 24 sem tentar reproduzir integralmente seis aulas em apenas 150 minutos.

A sequência prioriza:

**Problema → Analogia → Conceito → Exemplo → Visualização → Prática → Registro**

Ao final, os estudantes devem conseguir enxergar a relação:

**Interface → Responsividade → Interatividade → Testes → CI/CD → Deploy**

## Conteúdos

### Semana 23
- CI e CD
- pipeline
- build, testes e deploy
- GitHub Actions
- Jest
- Cypress
- Docker
- Kubernetes

### Semana 24
- SASS e LESS (visão conceitual)
- responsividade
- Mobile First
- Media Queries
- CSS Grid
- transition
- transform
- @keyframes
- eventos JavaScript
- addEventListener
- classList.toggle

## Registros

### Registro 1 — Semana 23

A atividade original de pipeline foi mantida disponível em `materiais/semana23/roteiro-original-ci-cd.docx`, mas a atividade aplicada na sequência condensada é um **Mapa Mental — Esteiras de Entrega Contínua**.

O mapa deve relacionar:
- CI
- CD
- pipeline
- build
- testes
- deploy
- GitHub Actions
- Jest
- Cypress
- Docker
- Kubernetes

Pode ser feito no **papel, Canva, PowerPoint, Google Apresentações ou outra ferramenta de mapa mental**. O uso do Canva é sugerido, mas não obrigatório.

O roteiro adaptado completo está em:

`materiais/semana23/roteiro-adaptado-semana23.html`

Entrega:
- foto ou print do mapa mental;
- respostas das 5 perguntas de registro.

### Registro 2 — Semana 24

A atividade de animações foi mantida como prática, mas os alunos recebem um projeto-base para que o tempo seja concentrado nas habilidades técnicas.

Eles precisam implementar:
1. uma `transition`;
2. uma animação com `@keyframes`;
3. uma interação com `addEventListener()` + `classList.toggle()`.

O projeto-base está na pasta `atividade-registro2/`.

## Plano das 3 aulas

### Aula 1 — Semana 23 (50 min)
- 10 min — conceitos de CI/CD
- 10 min — GitHub Actions, Jest, Cypress, Docker e Kubernetes
- 5 min — pipeline visual
- 20 min — mapa mental
- 5 min — correção coletiva

### Aula 2 — Semana 24 (50 min)
- 10 min — SASS/LESS
- 15 min — responsividade e Mobile First
- 15 min — Media Queries + Grid
- 5 min — simulador responsivo
- 5 min — revisão

### Aula 3 — Semana 24 (50 min)
- 15 min — transition, transform, @keyframes e eventos
- 5 min — demonstração
- 25 min — Registro 2
- 5 min — fechamento

## Recursos do site

- modo claro e escuro com preferência salva em `localStorage`;
- respeito a `prefers-color-scheme` quando não há preferência salva;
- menu responsivo;
- pipeline CI/CD interativo;
- comparação Jest × Cypress;
- comparação Docker × Kubernetes;
- simulador de telas Mobile / Tablet / Desktop;
- laboratório de `transition`, `@keyframes` e JavaScript;
- checklist do Registro 1;
- botão para copiar códigos;
- quiz com correção imediata;
- seção de materiais com apresentações e roteiros para download;
- suporte a `prefers-reduced-motion`.

## Estrutura

```text
aula_frontend_semanas23_24_v2/
├── index.html
├── styles.css
├── script.js
├── README.md
│
├── materiais/
│   ├── semana23/
│   │   ├── aula1-configuracao-pipelines-ci-cd.pptx
│   │   ├── aula2-testes-jest-cypress.pptx
│   │   ├── aula3-docker-kubernetes.pptx
│   │   ├── roteiro-original-ci-cd.docx
│   │   └── roteiro-adaptado-semana23.html
│   │
│   └── semana24/
│       ├── aula1-pre-processadores-css.pptx
│       ├── aula2-design-responsivo.pptx
│       ├── aula3-animacoes-transicoes-js.pptx
│       └── roteiro-original-animacoes.docx
│
└── atividade-registro2/
    ├── index.html
    ├── styles.css
    ├── script.js
    └── INSTRUCOES.md
```

## Executar localmente

Abra `index.html` no navegador. Também é possível utilizar Live Server no VS Code.

## Publicar no GitHub Pages

1. Crie ou use um repositório no GitHub.
2. Envie **toda a estrutura de pastas**, inclusive `materiais/`.
3. Abra **Settings > Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Escolha a branch `main` e a pasta `/ (root)`.
6. Salve e aguarde a publicação.

Os links dos materiais usam caminhos relativos e continuam funcionando no GitHub Pages desde que as pastas sejam preservadas.

## Materiais de referência incluídos

### Semana 23
- Configuração de pipelines CI/CD
- Testes automatizados com Jest e Cypress
- Deploy contínuo com Docker e Kubernetes
- roteiro original de pipeline CI/CD

### Semana 24
- Utilização de pré-processadores CSS
- Design responsivo
- Animações e transições com CSS e JavaScript
- roteiro original de animações e transições


## Modo escuro
O site possui tema claro/escuro com preferência persistida quando o navegador permite `localStorage`. Caso o armazenamento esteja bloqueado, a troca de tema continua funcionando durante a sessão. Sem preferência salva, o site acompanha `prefers-color-scheme` do sistema.
