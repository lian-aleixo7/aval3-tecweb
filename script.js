// ===============================
// MENU MOBILE
// ===============================
// Alterna o menu principal em dispositivos móveis
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.getElementById("primary-menu");

menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", !expanded);
  menu.classList.toggle("active");
});

// ===============================
// SLIDER DE PROGRAMAÇÃO
// ===============================
// Controla os slides de programação com botões e autoplay
const slides = document.querySelectorAll(".programacao-slider .slide");
const prevBtn = document.querySelector(".slider-controls .prev");
const nextBtn = document.querySelector(".slider-controls .next");
const autoplayBtn = document.querySelector(".slider-controls .autoplay");

let currentIndex = 0;
let autoplay = true;
let autoplayInterval;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

// Eventos dos botões
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Alterna autoplay
autoplayBtn.addEventListener("click", () => {
  autoplay = !autoplay;
  autoplayBtn.setAttribute("aria-pressed", autoplay);
  if (autoplay) startAutoplay();
  else stopAutoplay();
});

function startAutoplay() {
  autoplayInterval = setInterval(nextSlide, 5000);
}
function stopAutoplay() {
  clearInterval(autoplayInterval);
}

// Inicia autoplay por padrão
if (autoplay) startAutoplay();

// ===============================
// MODAL DE VÍDEOS
// ===============================
// Abre modal ao clicar em "Ver vídeo" e fecha ao clicar no botão de fechar
const playButtons = document.querySelectorAll(".card-link.play");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");

playButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    modal.setAttribute("aria-hidden", "false");
    modal.style.display = "flex";
    // Aqui você pode carregar o vídeo real (iframe ou <video>)
    document.querySelector(".video-placeholder").textContent = "Vídeo carregado!";
  });
});

modalClose.addEventListener("click", () => {
  modal.setAttribute("aria-hidden", "true");
  modal.style.display = "none";
});

// ===============================
// NEWSLETTER (validação simples)
// ===============================
// Valida email e dá feedback ao utilizador
const newsletterForm = document.querySelector(".newsletter-form");
const feedback = document.querySelector(".form-feedback");

newsletterForm.addEventListener("submit", e => {
  e.preventDefault();
  const emailInput = document.getElementById("newsletter-email");
  if (emailInput.value.includes("@")) {
    feedback.textContent = "Subscrição realizada com sucesso!";
    feedback.style.color = "green";
    // Salva email no localStorage
    localStorage.setItem("newsletterEmail", emailInput.value);
  } else {
    feedback.textContent = "Por favor, insira um email válido.";
    feedback.style.color = "red";
  }
});

// ===============================
// DARK/WHITE MODE (com persistência)
// ===============================
// Cria botão flutuante para alternar entre modos
const darkToggle = document.createElement("button");
darkToggle.id = "toggle-dark";
darkToggle.textContent = "🌙 Alternar modo";
Object.assign(darkToggle.style, {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  padding: "0.5rem 1rem",
  background: "#e60000",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  zIndex: "3000"
});
document.body.appendChild(darkToggle);

// Função para aplicar modo salvo
function applySavedMode() {
  const savedMode = localStorage.getItem("themeMode");
  if (savedMode === "dark") {
    document.body.classList.add("dark-mode");
    darkToggle.textContent = "☀️ Alternar modo";
  } else {
    document.body.classList.remove("dark-mode");
    darkToggle.textContent = "🌙 Alternar modo";
  }
}

// Alterna modo ao clicar
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    darkToggle.textContent = "☀️ Alternar modo";
    localStorage.setItem("themeMode", "dark");
  } else {
    darkToggle.textContent = "🌙 Alternar modo";
    localStorage.setItem("themeMode", "light");
  }
});

// Aplica modo salvo ao carregar página
applySavedMode();

