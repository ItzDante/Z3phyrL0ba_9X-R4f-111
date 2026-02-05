const validPasswords = new Set(["24", "2411"]);

const introScreen = document.getElementById("intro-screen");
const askScreen = document.getElementById("ask-screen");
const lockScreen = document.getElementById("lock-screen");
const storyScreen = document.getElementById("story-screen");

const heartTrigger = document.getElementById("heart-trigger");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const askActions = document.getElementById("ask-actions");

const lockForm = document.getElementById("lock-form");
const passwordInput = document.getElementById("password");
const lockError = document.getElementById("lock-error");

const slides = [...document.querySelectorAll(".slide")];
const nextBtn = document.getElementById("next-btn");
const progress = document.getElementById("progress");

let current = 0;

function showPanel(panel) {
  [introScreen, askScreen, lockScreen, storyScreen].forEach((screen) => {
    screen.classList.toggle("panel--active", screen === panel);
  });
}

function buildProgress() {
  progress.innerHTML = "";
  slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.className = "progress-dot";
    if (index === current) dot.classList.add("active");
    progress.append(dot);
  });
}

function updateSlide() {
  slides.forEach((slide, index) => {
    slide.classList.toggle("slide--active", index === current);
  });

  [...progress.children].forEach((dot, index) => {
    dot.classList.toggle("active", index === current);
  });

  nextBtn.textContent = current === slides.length - 1 ? "Volver a leer" : "Seguir";
}

function unlockExperience() {
  showPanel(storyScreen);
  current = 0;
  buildProgress();
  updateSlide();
}

heartTrigger.addEventListener("click", () => {
  showPanel(askScreen);
});

function moveNoButton() {
  const bounds = askActions.getBoundingClientRect();
  const maxX = Math.max(0, bounds.width - noBtn.offsetWidth);
  const maxY = Math.max(0, bounds.height - noBtn.offsetHeight);
  const x = Math.floor(Math.random() * maxX);
  const y = Math.floor(Math.random() * maxY);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
  noBtn.style.transform = "none";
}

["mouseenter", "pointerdown", "focus"].forEach((eventName) => {
  noBtn.addEventListener(eventName, moveNoButton);
});

yesBtn.addEventListener("click", () => {
  showPanel(lockScreen);
  passwordInput.focus();
});

lockForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const cleanValue = passwordInput.value.trim();

  if (!validPasswords.has(cleanValue)) {
    lockError.textContent = "Esa clave no… intenta con el día especial 💭";
    return;
  }

  lockError.textContent = "";
  unlockExperience();
});

passwordInput.addEventListener("input", () => {
  lockError.textContent = "";
});

nextBtn.addEventListener("click", () => {
  current = (current + 1) % slides.length;
  updateSlide();
});
