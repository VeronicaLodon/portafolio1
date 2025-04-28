
const buttons = document.querySelectorAll(".card-buttons button");
const sections = document.querySelectorAll(".card-section");
const card = document.querySelector(".card");

const handleButtonClick = e => {
  const targetSection = e.target.getAttribute("data-section");
  const section = document.querySelector(targetSection);
  targetSection !== "#about" ?
  card.classList.add("is-active") :
  card.classList.remove("is-active");
  card.setAttribute("data-state", targetSection);
  sections.forEach(s => s.classList.remove("is-active"));
  buttons.forEach(b => b.classList.remove("is-active"));
  e.target.classList.add("is-active");
  section.classList.add("is-active");
};

buttons.forEach(btn => {
  btn.addEventListener("click", handleButtonClick);
});
const popupLinks = {
  "Producción Audiovisual": "https://veronicalodon.github.io/AA2/",
  "Diseño y medios digitales": "https://veronicalodon.github.io/aa1/",
  "Gestión cultural y eventos": "https://veronicalodon.github.io/AA4/",
  "Diseño gráfico": "https://veronicalodon.github.io/AAA3/"
};

// Funcionalidad del popup
function setupPopup() {
  const popup = document.getElementById('myPopup');
  const iframe = document.getElementById('popupIframe');
  const closeBtn = document.querySelector('.close');

  // 1. Hacer clic en palabras clave
  document.querySelectorAll('.card-item-title').forEach(title => {
    const text = title.textContent.trim();
    
    if (popupLinks[text]) {
      title.style.cursor = 'pointer';
      title.style.color = '#516acc';
      
      title.addEventListener('click', () => {
        iframe.src = popupLinks[text];
        popup.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Bloquear scroll
      });
    }
  });

  // 2. Cerrar con el botón X (FORZAR CIERRE)
  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
    iframe.src = '';
    document.body.style.overflow = 'auto';
  });

  // 3. Cerrar haciendo clic fuera (FORZAR CIERRE)
  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.style.display = 'none';
      iframe.src = '';
      document.body.style.overflow = 'auto';
    }
  });
}

// Iniciar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', setupPopup);
// Mostrar la tarjeta después de 5 segundos
window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelector('.card').classList.add('visible');
  }, 5000); // 5000 ms = 5 segundos
});
// Configuración inicial para los círculos
gsap.set(".circle", { xPercent: -50, yPercent: -50 });
gsap.set(".circle-follow", { xPercent: -50, yPercent: -50 });

let xTo = gsap.quickTo(".circle", "x", { duration: 0.6, ease: "power3" }),
  yTo = gsap.quickTo(".circle", "y", { duration: 0.6, ease: "power3" });

let xFollow = gsap.quickTo(".circle-follow", "x", {
    duration: 0.6,
    ease: "power3"
  }),
  yFollow = gsap.quickTo(".circle-follow", "y", {
    duration: 0.6,
    ease: "power3"
  });

// Manejar el movimiento del mouse
window.addEventListener("mousemove", (event) => {
  xTo(event.clientX);
  yTo(event.clientY);

  xFollow(event.clientX);
  yFollow(event.clientY);
});
window.addEventListener("mousemove", (event) => {
  console.log("Mouse moved:", event.clientX, event.clientY); // Verifica si se registra el movimiento del mouse

  xTo(event.clientX);
  yTo(event.clientY);

  xFollow(event.clientX);
  yFollow(event.clientY);
});
// ===== CURSOR PERSONALIZADO =====
document.addEventListener("DOMContentLoaded", () => {
  // Configuración inicial con GSAP
  gsap.set(".circle, .circle-follow", { xPercent: -50, yPercent: -50 });

  // Animación suave del cursor
  const xTo = gsap.quickTo(".circle", "x", { duration: 0.6, ease: "power3" });
  const yTo = gsap.quickTo(".circle", "y", { duration: 0.6, ease: "power3" });
  const xFollow = gsap.quickTo(".circle-follow", "x", { duration: 0.8, ease: "power3" });
  const yFollow = gsap.quickTo(".circle-follow", "y", { duration: 0.8, ease: "power3" });

  // Seguir el movimiento del mouse
  window.addEventListener("mousemove", (e) => {
    xTo(e.clientX);
    yTo(e.clientY);
    xFollow(e.clientX);
    yFollow(e.clientY);
    document.querySelector(".mouse-effect").style.opacity = "1"; // Mostrar cursor
  });

  // Opcional: Efecto al hacer hover en botones/interactivos
  document.querySelectorAll("button, a").forEach(el => {
    el.addEventListener("mouseenter", () => {
      gsap.to(".circle-follow", { scale: 1.3, duration: 0.3 });
    });
    el.addEventListener("mouseleave", () => {
      gsap.to(".circle-follow", { scale: 1, duration: 0.3 });
    });
  });
});



