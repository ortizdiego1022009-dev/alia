// Partículas fondo
const canvas = document.getElementById('particles-bg');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let w = window.innerWidth, h = window.innerHeight;
  canvas.width = w; canvas.height = h;
  let particles = [];
  for (let i = 0; i < 80; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 3 + 1.5,
      dx: (Math.random() - 0.5) * 0.7,
      dy: (Math.random() - 0.5) * 0.7,
      c: Math.random() > 0.5 ? '#b388ff' : '#7c4dff'
    });
  }
  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (let p of particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
      ctx.fillStyle = p.c + '77';
      ctx.shadowColor = p.c;
      ctx.shadowBlur = 14;
      ctx.fill();
    }
  }
  function update() {
    for (let p of particles) {
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0 || p.x > w) p.dx *= -1;
      if (p.y < 0 || p.y > h) p.dy *= -1;
    }
  }
  function loop() {
    draw();
    update();
    requestAnimationFrame(loop);
  }
  loop();
  window.addEventListener('resize', () => {
    w = window.innerWidth; h = window.innerHeight;
    canvas.width = w; canvas.height = h;
  });
}

// Animaciones al hacer scroll
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-up');
const appearOptions = { threshold: 0.1, rootMargin: "0px 0px -40px 0px" };
const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));
sliders.forEach(slider => appearOnScroll.observe(slider));

// Asegurarse de que VanillaTilt se inicialice después de que el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
  if (typeof VanillaTilt !== 'undefined') {
    VanillaTilt.init(document.querySelectorAll('.tilt'), {
      max: 14,
      speed: 500,
      glare: true,
      'max-glare': 0.20
    });
  } else {
    console.warn("VanillaTilt library not loaded.");
  }
});

// Carrusel mockup en explora
const carruselImgs = document.querySelectorAll('.carrusel-img');
let carruselIdx = 0;
document.querySelector('.carrusel-prev').addEventListener('click', () => {
  carruselImgs[carruselIdx].classList.remove("active");
  carruselIdx = (carruselIdx - 1 + carruselImgs.length) % carruselImgs.length;
  carruselImgs[carruselIdx].classList.add("active");
});
document.querySelector('.carrusel-next').addEventListener('click', () => {
  carruselImgs[carruselIdx].classList.remove("active");
  carruselIdx = (carruselIdx + 1) % carruselImgs.length;
  carruselImgs[carruselIdx].classList.add("active");
});

// Menú hamburguesa responsive
const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');
if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    menuToggle.classList.toggle('open');
  });
  document.querySelectorAll('#main-nav a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      menuToggle.classList.remove('open');
    });
  });
}

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const faqItem = question.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Cerrar todos los items
    document.querySelectorAll('.faq-item').forEach(item => {
      item.classList.remove('active');
    });
    
    // Abrir el item clickeado si no estaba activo
    if (!isActive) {
      faqItem.classList.add('active');
    }
  });
});

// Smooth scrolling para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Manejo del formulario de registro
const registroForm = document.getElementById('registroForm');
if (registroForm) {
  registroForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const email = formData.get('email');
    const nombre = formData.get('nombre');
    
    // Validación básica
    if (!email || !email.includes('@')) {
      showMessage('Por favor, ingresa un email válido.', 'error');
      return;
    }
    
    // Simular envío (reemplazar con tu endpoint real)
    const submitBtn = this.querySelector('.btn-registrar');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
      showMessage('¡Gracias por registrarte! Te avisaremos cuando Alia IA esté disponible.', 'success');
      this.reset();
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      
      // Confeti para celebrar
      if (typeof confetti !== 'undefined') {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    }, 2000);
  });
}

// Manejo del formulario de contacto
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const nombre = formData.get('nombre');
    const email = formData.get('email');
    const mensaje = formData.get('mensaje');
    
    // Validación básica
    if (!nombre || !email || !mensaje) {
      showMessage('Por favor, completa todos los campos.', 'error');
      return;
    }
    
    if (!email.includes('@')) {
      showMessage('Por favor, ingresa un email válido.', 'error');
      return;
    }
    
    // Simular envío (reemplazar con tu endpoint real)
    const submitBtn = this.querySelector('#btnContacto');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
      showMessage('¡Mensaje enviado! Te responderemos pronto.', 'success');
      this.reset();
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }, 2000);
  });
}

// Función para mostrar mensajes
function showMessage(message, type) {
  const mensajeElement = document.getElementById('mensajeRegistro') || document.getElementById('mensajeContacto');
  if (mensajeElement) {
    mensajeElement.textContent = message;
    mensajeElement.className = `mensaje-registro mensaje-${type}`;
    mensajeElement.style.display = 'block';
    
    setTimeout(() => {
      mensajeElement.style.display = 'none';
    }, 5000);
  }
}

// Auto-play del carrusel
let carruselInterval;
function startCarrusel() {
  carruselInterval = setInterval(() => {
    const nextBtn = document.querySelector('.carrusel-next');
    if (nextBtn) {
      nextBtn.click();
    }
  }, 4000);
}

function stopCarrusel() {
  if (carruselInterval) {
    clearInterval(carruselInterval);
  }
}

// Iniciar carrusel automático
startCarrusel();

// Pausar carrusel al hacer hover
const carruselContainer = document.querySelector('.explora-mockup-carrusel');
if (carruselContainer) {
  carruselContainer.addEventListener('mouseenter', stopCarrusel);
  carruselContainer.addEventListener('mouseleave', startCarrusel);
}

// Animación del logo al cargar
window.addEventListener('load', () => {
  const logo = document.querySelector('.animated-logo');
  if (logo) {
    setTimeout(() => {
      logo.classList.add('logo-in');
    }, 500);
  }
});