// ===============================
// MENU MOBILE
// ===============================
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

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

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

if (autoplay) startAutoplay();

// ===============================
// MODAL DE VÍDEOS
// ===============================
const playButtons = document.querySelectorAll(".card-link.play");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");

playButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    modal.setAttribute("aria-hidden", "false");
    modal.style.display = "block";
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
const newsletterForm = document.querySelector(".newsletter-form");
const feedback = document.querySelector(".form-feedback");

newsletterForm.addEventListener("submit", e => {
  e.preventDefault();
  const emailInput = document.getElementById("newsletter-email");
  if (emailInput.value.includes("@")) {
    feedback.textContent = "Subscrição realizada com sucesso!";
    feedback.style.color = "green";
    // opcional: salvar no localStorage
    localStorage.setItem("newsletterEmail", emailInput.value);
  } else {
    feedback.textContent = "Por favor, insira um email válido.";
    feedback.style.color = "red";
  }
});

// ===============================
// DARK MODE
// ===============================
const darkToggle = document.createElement("button");
darkToggle.id = "toggle-dark";
darkToggle.textContent = "🌙 Alternar modo";
darkToggle.style.position = "fixed";
darkToggle.style.bottom = "20px";
darkToggle.style.right = "20px";
darkToggle.style.padding = "0.5rem 1rem";
darkToggle.style.background = "#e60000";
darkToggle.style.color = "#fff";
darkToggle.style.border = "none";
darkToggle.style.borderRadius = "4px";
darkToggle.style.cursor = "pointer";
document.body.appendChild(darkToggle);

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    darkToggle.textContent = "☀️ Alternar modo";
  } else {
    darkToggle.textContent = "🌙 Alternar modo";
  }
});

