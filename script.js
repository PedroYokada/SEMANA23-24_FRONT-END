const $ = (selector, context = document) => context.querySelector(selector);
const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];

/* TEMA CLARO / ESCURO */
const themeToggle = $("#themeToggle");
const themeMedia = window.matchMedia?.("(prefers-color-scheme: dark)");

function readSavedTheme() {
  try {
    const value = localStorage.getItem("theme");
    return value === "light" || value === "dark" ? value : null;
  } catch (_) {
    return null;
  }
}

function saveTheme(theme) {
  try {
    localStorage.setItem("theme", theme);
  } catch (_) {
    // O tema continua funcionando mesmo quando o navegador bloqueia localStorage,
    // como pode ocorrer em alguns acessos locais/file:// ou modos de privacidade.
  }
}

function applyTheme(theme, { persist = false } = {}) {
  const normalized = theme === "dark" ? "dark" : "light";
  const dark = normalized === "dark";

  document.documentElement.dataset.theme = normalized;
  document.documentElement.style.colorScheme = normalized;

  if (persist) saveTheme(normalized);

  if (themeToggle) {
    themeToggle.setAttribute("aria-pressed", String(dark));
    themeToggle.setAttribute("aria-label", dark ? "Ativar modo claro" : "Ativar modo escuro");
    themeToggle.title = dark ? "Ativar modo claro" : "Ativar modo escuro";

    const icon = $(".theme-toggle__icon", themeToggle);
    const label = $(".theme-toggle__text", themeToggle);
    if (icon) icon.textContent = dark ? "☀️" : "🌙";
    if (label) label.textContent = dark ? "Claro" : "Escuro";
  }
}

const initialTheme = document.documentElement.dataset.theme
  || readSavedTheme()
  || (themeMedia?.matches ? "dark" : "light");
applyTheme(initialTheme);

themeToggle?.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  // Aplica primeiro: o botão funciona mesmo se o armazenamento estiver bloqueado.
  applyTheme(next, { persist: true });
});

// Se o usuário ainda não escolheu um tema manualmente, acompanha a preferência do sistema.
themeMedia?.addEventListener?.("change", event => {
  if (!readSavedTheme()) {
    applyTheme(event.matches ? "dark" : "light");
  }
});

/* MENU MOBILE */
const menuToggle = $("#menuToggle");
const mainNav = $("#mainNav");

menuToggle?.addEventListener("click", () => {
  const open = mainNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
});

$$(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav?.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Abrir menu");
  });
});

/* PROGRESSO DE LEITURA */
const progressBar = $("#readingProgress");

function updateProgress() {
  const scrollTop = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const progress = max > 0 ? (scrollTop / max) * 100 : 0;
  progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
}

window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

/* PIPELINE INTERATIVO */
const pipelineInfo = $("#pipelineInfo");

$$(".pipeline-step").forEach(step => {
  step.addEventListener("click", () => {
    $$(".pipeline-step").forEach(item => item.classList.remove("is-active"));
    step.classList.add("is-active");

    pipelineInfo.innerHTML = `
      <strong>${step.dataset.title}</strong>
      <p>${step.dataset.text}</p>
    `;
  });
});

/* JEST x CYPRESS */
$$(".compare-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    $$(".compare-tab").forEach(item => item.classList.remove("is-active"));
    $$(".compare-content").forEach(item => item.classList.remove("is-active"));
    tab.classList.add("is-active");
    document.getElementById(tab.dataset.target)?.classList.add("is-active");
  });
});

/* CHECKLIST DO MAPA MENTAL */
const mindChecklist = $("#mindChecklist");
const mindCount = $("#mindCount");

function updateMindCount() {
  if (!mindChecklist || !mindCount) return;
  mindCount.textContent = mindChecklist.querySelectorAll("input:checked").length;
}

mindChecklist?.addEventListener("change", updateMindCount);
updateMindCount();

/* SIMULADOR RESPONSIVO */
const responsivePreview = $("#responsivePreview");

$$("[data-device]").forEach(button => {
  button.addEventListener("click", () => {
    $$("[data-device]").forEach(item => item.classList.remove("is-active"));
    button.classList.add("is-active");

    responsivePreview.classList.remove(
      "mock-browser--mobile",
      "mock-browser--tablet",
      "mock-browser--desktop"
    );

    responsivePreview.classList.add(`mock-browser--${button.dataset.device}`);
  });
});

/* LABORATÓRIO DE ANIMAÇÕES */
const demoBox = $("#demoBox");
const animationExplanation = $("#animationExplanation");

const animationMessages = {
  transition: "transition suaviza a mudança entre dois estados. Aqui, transform, formato e cor mudam gradualmente.",
  keyframes: "@keyframes define etapas de uma animação. O elemento entra, ultrapassa levemente a posição e se estabiliza.",
  javascript: "O JavaScript reage ao clique e altera uma classe CSS. A aparência muda porque a classe adicionada possui outros estilos.",
  reset: "Demonstração reiniciada."
};

$$("[data-animation]").forEach(button => {
  button.addEventListener("click", () => {
    const type = button.dataset.animation;

    demoBox.classList.remove("demo-transition", "demo-keyframes", "demo-js");
    void demoBox.offsetWidth;

    if (type === "transition") demoBox.classList.add("demo-transition");
    if (type === "keyframes") demoBox.classList.add("demo-keyframes");
    if (type === "javascript") demoBox.classList.add("demo-js");

    animationExplanation.textContent = animationMessages[type];
  });
});

/* COPIAR CÓDIGO */
const toast = $("#toast");
let toastTimer;

function showToast(message = "Código copiado!") {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 1600);
}

$$("[data-copy]").forEach(button => {
  button.addEventListener("click", async () => {
    const target = document.getElementById(button.dataset.copy);
    if (!target) return;

    try {
      await navigator.clipboard.writeText(target.innerText);
      showToast();
    } catch {
      showToast("Não foi possível copiar automaticamente.");
    }
  });
});

/* IMPRESSÃO DO REGISTRO 1 */
$("#printRegistro1")?.addEventListener("click", () => window.print());

/* QUIZ */
const quizData = [
  {
    question: "1. Qual é a ideia principal de um pipeline CI/CD?",
    options: [
      "Apenas desenhar a interface do sistema.",
      "Automatizar uma sequência de etapas como build, testes e entrega.",
      "Substituir completamente o Git.",
      "Executar somente testes manuais."
    ],
    answer: 1,
    explanation: "Pipeline é uma sequência automatizada de etapas. Nos materiais, build, testes e deploy aparecem como partes centrais dessa esteira."
  },
  {
    question: "2. No contexto trabalhado, qual é o foco principal do Jest?",
    options: [
      "Testar a lógica do código com testes unitários.",
      "Gerenciar containers.",
      "Criar Media Queries.",
      "Publicar o site no servidor."
    ],
    answer: 0,
    explanation: "Jest é apresentado como ferramenta para testes unitários e validação da lógica."
  },
  {
    question: "3. E o Cypress?",
    options: [
      "Compilar SASS.",
      "Gerenciar branches.",
      "Testar interações e comportamento da interface.",
      "Criar imagens Docker."
    ],
    answer: 2,
    explanation: "Cypress é trabalhado como ferramenta para validar a interface e simular interações do usuário."
  },
  {
    question: "4. Qual analogia representa melhor Docker e Kubernetes?",
    options: [
      "Docker é o gerente; Kubernetes é o editor.",
      "Docker é a caixa padronizada; Kubernetes organiza várias caixas.",
      "Docker e Kubernetes são exatamente a mesma ferramenta.",
      "Docker é um framework CSS; Kubernetes é JavaScript."
    ],
    answer: 1,
    explanation: "Docker empacota a aplicação em containers; Kubernetes orquestra containers e ajuda a manter a operação escalável."
  },
  {
    question: "5. Para que servem Media Queries?",
    options: [
      "Para adaptar estilos conforme características/tamanho da tela.",
      "Para executar testes unitários.",
      "Para criar commits no Git.",
      "Para instalar Node.js."
    ],
    answer: 0,
    explanation: "Media Queries permitem alterar regras CSS em diferentes condições de tela, sendo parte central do design responsivo."
  },
  {
    question: "6. O que o CSS Grid ajuda a fazer?",
    options: [
      "Executar JavaScript.",
      "Organizar layouts em linhas e colunas de forma flexível.",
      "Criar workflows do GitHub Actions.",
      "Instalar o Cypress."
    ],
    answer: 1,
    explanation: "Grid é usado para estruturar layouts flexíveis e adaptáveis."
  },
  {
    question: "7. Qual é a diferença mais importante entre transition e @keyframes nesta aula?",
    options: [
      "Não existe diferença.",
      "transition suaviza mudança de estados; @keyframes permite definir etapas da animação.",
      "@keyframes só funciona com JavaScript.",
      "transition serve apenas para cores."
    ],
    answer: 1,
    explanation: "Transition suaviza a passagem entre estados; keyframes permite descrever fases da animação."
  },
  {
    question: "8. O que addEventListener() permite fazer?",
    options: [
      "Ouvir eventos como cliques e executar uma função.",
      "Criar um container Docker.",
      "Compilar SASS automaticamente no servidor.",
      "Criar uma branch no Git."
    ],
    answer: 0,
    explanation: "addEventListener registra uma função para reagir a eventos, como click."
  },
  {
    question: "9. No fluxo da aula, GitHub Actions aparece principalmente para...",
    options: [
      "Automatizar o workflow/pipeline.",
      "Substituir o HTML.",
      "Desenhar mapas mentais.",
      "Criar animações CSS."
    ],
    answer: 0,
    explanation: "GitHub Actions é usado como mecanismo de automação de workflow no repositório."
  },
  {
    question: "10. Qual sequência melhor resume a trilha estudada?",
    options: [
      "Deploy → HTML → Jest → cor.",
      "Interface → responsividade → interatividade → testes → CI/CD → deploy.",
      "Kubernetes → SASS → Word → deploy.",
      "CSS → Docker → papel → Cypress."
    ],
    answer: 1,
    explanation: "Essa sequência conecta os conceitos das duas semanas em uma visão de processo."
  }
];

const quizList = $("#quizList");
const scoreValue = $("#scoreValue");
const scoreTotal = $("#scoreTotal");
let quizScore = 0;

function renderQuiz() {
  quizScore = 0;
  scoreValue.textContent = "0";
  scoreTotal.textContent = quizData.length;

  quizList.innerHTML = quizData.map((item, index) => `
    <article class="quiz-question" data-question="${index}">
      <h3>${item.question}</h3>
      <div class="quiz-options">
        ${item.options.map((option, optionIndex) => `
          <button class="quiz-option" type="button" data-option="${optionIndex}">
            ${option}
          </button>
        `).join("")}
      </div>
      <p class="quiz-feedback" aria-live="polite"></p>
    </article>
  `).join("");

  $$(".quiz-question").forEach(card => {
    const questionIndex = Number(card.dataset.question);
    $$(".quiz-option", card).forEach(option => {
      option.addEventListener("click", () => answerQuiz(card, questionIndex, option));
    });
  });
}

function answerQuiz(card, questionIndex, selectedButton) {
  if (card.dataset.answered === "true") return;

  const item = quizData[questionIndex];
  const selected = Number(selectedButton.dataset.option);
  const buttons = $$(".quiz-option", card);
  const feedback = $(".quiz-feedback", card);
  const correct = selected === item.answer;

  card.dataset.answered = "true";

  buttons.forEach((button, index) => {
    button.disabled = true;
    if (index === item.answer) button.classList.add("correct");
  });

  if (!correct) {
    selectedButton.classList.add("wrong");
  } else {
    quizScore += 1;
    scoreValue.textContent = quizScore;
  }

  feedback.textContent = `${correct ? "✓ Correto. " : "✗ Revise. "}${item.explanation}`;
  feedback.classList.add("is-visible");
}

$("#resetQuiz")?.addEventListener("click", renderQuiz);
renderQuiz();
