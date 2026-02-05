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

const puzzleBoard = document.getElementById("puzzle-board");
const puzzleStatus = document.getElementById("puzzle-status");

let current = 0;
const PUZZLE_SIZE = 3;
let selectedTile = null;

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

function moveNoButton() {
  const bounds = askActions.getBoundingClientRect();
  const maxX = Math.max(0, bounds.width - noBtn.offsetWidth - 8);
  const maxY = Math.max(0, bounds.height - noBtn.offsetHeight - 8);
  const x = Math.floor(Math.random() * maxX);
  const y = Math.floor(Math.random() * maxY);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
  noBtn.style.transform = "none";
}

function buildPuzzle() {
  const order = [...Array(PUZZLE_SIZE * PUZZLE_SIZE).keys()];
  order.sort(() => Math.random() - 0.5);

  puzzleBoard.innerHTML = "";

  order.forEach((piece) => {
    const tile = document.createElement("button");
    tile.className = "puzzle-tile";
    tile.type = "button";
    tile.dataset.piece = String(piece);

    const x = piece % PUZZLE_SIZE;
    const y = Math.floor(piece / PUZZLE_SIZE);
    tile.style.backgroundImage = "url('flores-rosa.svg')";
    tile.style.backgroundSize = `${PUZZLE_SIZE * 100}% ${PUZZLE_SIZE * 100}%`;
    tile.style.backgroundPosition = `${(x / (PUZZLE_SIZE - 1)) * 100}% ${(y / (PUZZLE_SIZE - 1)) * 100}%`;

    puzzleBoard.append(tile);
  });

  puzzleStatus.textContent = "Estado: en progreso";
}

function isPuzzleSolved() {
  return [...puzzleBoard.children].every((tile, index) => Number(tile.dataset.piece) === index);
}

function markPuzzleSolved() {
  puzzleStatus.textContent = "¡Lo lograste! Puzzle resuelto 💖";
}

puzzleBoard.addEventListener("click", (event) => {
  const tile = event.target.closest(".puzzle-tile");
  if (!tile) return;

  if (!selectedTile) {
    selectedTile = tile;
    tile.classList.add("selected");
    return;
  }

  if (selectedTile === tile) {
    tile.classList.remove("selected");
    selectedTile = null;
    return;
  }

  const tempPiece = selectedTile.dataset.piece;
  selectedTile.dataset.piece = tile.dataset.piece;
  tile.dataset.piece = tempPiece;

  const selectedBg = selectedTile.style.backgroundPosition;
  selectedTile.style.backgroundPosition = tile.style.backgroundPosition;
  tile.style.backgroundPosition = selectedBg;

  selectedTile.classList.remove("selected");
  selectedTile = null;

  if (isPuzzleSolved()) {
    markPuzzleSolved();
  }
});

heartTrigger.addEventListener("click", () => {
  showPanel(askScreen);
});

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
  buildPuzzle();
});

passwordInput.addEventListener("input", () => {
  lockError.textContent = "";
});

nextBtn.addEventListener("click", () => {
  current = (current + 1) % slides.length;
  updateSlide();
});
