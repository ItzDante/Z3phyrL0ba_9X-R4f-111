:root {
  --text: #fff3f8;
  --card: rgba(255, 255, 255, 0.14);
  --accent: #ff77a8;
  --accent-strong: #ff4d8d;
  --soft: #ffd6e5;
  --error: #ffd2de;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: "Segoe UI", system-ui, -apple-system, sans-serif;
  color: var(--text);
  background: linear-gradient(rgba(31, 16, 32, 0.7), rgba(31, 16, 32, 0.92)), url("fondo.png") center / cover no-repeat;
  display: grid;
  place-items: center;
  padding: 1rem;
}

.app {
  width: min(760px, 100%);
}

.panel {
  display: none;
  background: var(--card);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: 24px;
  padding: 2rem;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35);
}

.panel--active {
  display: block;
}

.eyebrow {
  margin-top: 0;
  color: var(--soft);
  letter-spacing: 0.04em;
}

h1 {
  margin: 0.3rem 0 0.8rem;
}

.hint {
  margin-top: 0;
  opacity: 0.9;
}

.lock-form {
  display: flex;
  gap: 0.75rem;
  margin-top: 1.2rem;
}

input,
button {
  border-radius: 12px;
  border: none;
  font: inherit;
}

input {
  flex: 1;
  padding: 0.85rem 1rem;
  background: rgba(255, 255, 255, 0.9);
}

button {
  padding: 0.85rem 1.1rem;
  color: #fff;
  background: linear-gradient(135deg, var(--accent), var(--accent-strong));
  cursor: pointer;
  font-weight: 600;
  transition: transform 0.2s ease;
}

button:hover {
  transform: translateY(-1px);
}

.error {
  min-height: 1.2em;
  color: var(--error);
}

.slide {
  display: none;
  text-align: center;
  font-size: clamp(1.05rem, 2.5vw, 1.3rem);
  line-height: 1.6;
}

.slide--active {
  display: block;
  animation: fade 0.4s ease;
}

.controls {
  margin-top: 1.4rem;
  display: grid;
  gap: 0.9rem;
}

.progress {
  display: flex;
  gap: 0.4rem;
  justify-content: center;
}

.progress-dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.35);
}

.progress-dot.active {
  background: #ff77a8;
}

.letter-slide {
  text-align: left;
}

.letter-card {
  display: grid;
  gap: 1rem;
  align-items: center;
}

.letter-image {
  width: 100%;
  max-height: 220px;
  object-fit: cover;
  border-radius: 16px;
}

.letter-text {
  background: rgba(24, 9, 22, 0.35);
  border-radius: 14px;
  padding: 1rem;
}

.signature {
  margin-bottom: 0;
  font-weight: 700;
}

.final-slide {
  text-align: center;
}

.heart-row {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.4rem;
  margin-bottom: 1rem;
}

.initial-heart {
  width: 92px;
  height: 92px;
  background: linear-gradient(145deg, #ffc0dd, #e6b8ff);
  position: relative;
  transform: rotate(-45deg);
  border-radius: 14px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.initial-heart::before,
.initial-heart::after {
  content: "";
  width: 92px;
  height: 92px;
  position: absolute;
  background: inherit;
  border-radius: 50%;
}

.initial-heart::before {
  top: -46px;
  left: 0;
}

.initial-heart::after {
  left: 46px;
  top: 0;
}

.initial-heart span {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  transform: rotate(45deg);
  z-index: 2;
  font-size: 2rem;
  font-weight: 800;
  color: #522b68;
}

.final-message {
  margin: 1.4rem auto 0;
  max-width: 40ch;
  font-size: clamp(1.05rem, 2.3vw, 1.25rem);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (min-width: 650px) {
  .letter-card {
    grid-template-columns: 1fr 1fr;
  }
}

@keyframes fade {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
