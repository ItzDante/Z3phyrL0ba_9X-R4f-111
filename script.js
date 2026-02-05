const validPasswords = new Set(["24", "2411"]);

const lockScreen = document.getElementById("lock-screen");
const storyScreen = document.getElementById("story-screen");
const lockForm = document.getElementById("lock-form");
const passwordInput = document.getElementById("password");
const lockError = document.getElementById("lock-error");

const slides = [...document.querySelectorAll(".slide")];
const nextBtn = document.getElementById("next-btn");
const progress = document.getElementById("progress");

let current = 0;

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
  lockScreen.classList.remove("panel--active");
  storyScreen.classList.add("panel--active");
  current = 0;
  buildProgress();
  updateSlide();
}

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

nextBtn.addEventListener("click", () => {
  current = (current + 1) % slides.length;
  updateSlide();
});

passwordInput.addEventListener("input", () => {
  lockError.textContent = "";
});
