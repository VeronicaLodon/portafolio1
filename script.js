const buttons = document.querySelectorAll(".card-buttons button");
const sections = document.querySelectorAll(".card-section");
const card = document.querySelector(".card");

// Función original de transformación (adaptada para móviles)
const handleButtonClick = e => {
  const targetSection = e.target.getAttribute("data-section");
  const section = document.querySelector(targetSection);
  
  // Transformaciones dinámicas (se mantienen igual)
  targetSection !== "#about" 
    ? card.classList.add("is-active") 
    : card.classList.remove("is-active");
  
  card.setAttribute("data-state", targetSection);
  
  // Animaciones
  sections.forEach(s => s.classList.remove("is-active"));
  buttons.forEach(b => b.classList.remove("is-active"));
  e.target.classList.add("is-active");
  section.classList.add("is-active");
};

buttons.forEach(btn => {
  btn.addEventListener("click", handleButtonClick);
});

// Popup (versión mejorada para móviles)
const popupLinks = {
  "Producción Audiovisual": "https://veronicalodon.github.io/AA2/",
  "Diseño y medios digitales": "https://veronicalodon.github.io/aa1/",
  "Gestión cultural y eventos": "https://veronicalodon.github.io/AA4/",
  "Diseño gráfico": "https://veronicalodon.github.io/AAA3/"
};

function setupPopup() {
  const popup = document.getElementById('myPopup');
  const iframe = document.getElementById('popupIframe');
  const closeBtn = document.querySelector('.close');

  // 1. Hacer clic en items de experiencia (optimizado para touch)
  document.querySelectorAll('.card-item-title').forEach(title => {
    const text = title.textContent.trim();
    
    if (popupLinks[text]) {
      title.style.cursor = 'pointer';
      title.classList.add('clickable-item'); // Clase para estilos móviles
      
      title.addEventListener('click', () => {
        iframe.src = popupLinks[text];
        popup.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Ajuste específico para móviles
        if (window.innerWidth <= 768) {
          document.querySelector('.popup-content').classList.add('mobile-open');
        }
      });
    }
  });

  // 2. Cerrar popup (compatible con touch)
  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
    iframe.src = '';
    document.body.style.overflow = 'auto';
  });

  // 3. Cerrar al tocar fuera (solo móviles)
  popup.addEventListener('click', (e) => {
    if (e.target === popup && window.innerWidth <= 768) {
      popup.style.display = 'none';
      iframe.src = '';
      document.body.style.overflow = 'auto';
    }
  });
}

// Iniciar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  setupPopup();
  
  // Mostrar tarjeta con retraso (ajustado para móviles)
  setTimeout(() => {
    const cardElement = document.querySelector('.card');
    cardElement.classList.add('visible');
    
    // Ajuste de performance para móviles
    if (window.innerWidth <= 768) {
      cardElement.style.willChange = 'transform, opacity';
    }
  }, 500);
});
window.addEventListener('load', () => {
  // 1. Ocultar la tarjeta inicialmente
  const card = document.querySelector('.card');
  card.style.opacity = '0'; // Invisible al cargar
  
  // 2. Retraso de 5 segundos antes de aparecer
  setTimeout(() => {
    card.style.transition = 'opacity 1s ease-in-out'; // Transición suave
    card.style.opacity = '1'; // Hacerla visible
    
    // Opcional: Añadir clase para animación (si usas CSS)
    card.classList.add('card-visible'); 
  }, 4000); // 5000 milisegundos = 5 segundos
});




