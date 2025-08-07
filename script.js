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
  menuToggle.addEventListener('keydown', e => {
    if (e.key === "Enter" || e.key === " ") {
      mainNav.classList.toggle('open');
      menuToggle.classList.toggle('open');
    }
  });
}

// Formspree: mostrar mensaje de éxito personalizado
const registroForm = document.getElementById('registroForm');
registroForm?.addEventListener('submit', function(e) {
  e.preventDefault();
  var form = this;
  fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if (response.ok) {
      document.getElementById('mensajeRegistro').style.display = 'block';
      document.getElementById('mensajeRegistro').textContent = '¡Registro enviado! Te avisaremos cuando la app esté disponible.';
      form.reset();
    } else {
      document.getElementById('mensajeRegistro').style.display = 'block';
      document.getElementById('mensajeRegistro').textContent = 'Error al enviar. Intenta nuevamente.';
    }
  });
});

// Hover animado en logo
document.querySelector('.logo-hover')?.addEventListener('mouseenter', function() {
  this.style.transform = 'scale(1.12) rotate(8deg)';
});
document.querySelector('.logo-hover')?.addEventListener('mouseleave', function() {
  this.style.transform = '';
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Contact Form Submission (assuming a similar Formspree setup or just client-side alert)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // You would typically send this data to a backend or Formspree
    alert('¡Mensaje enviado! Nos pondremos en contacto contigo pronto.');
    contactForm.reset();
  });
}

// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.closest('.faq-item');
        const faqAnswer = faqItem.querySelector('.faq-answer');
        const icon = question.querySelector('i');

        faqItem.classList.toggle('active');

        if (faqItem.classList.contains('active')) {
            faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px";
            icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
        } else {
            faqAnswer.style.maxHeight = "0";
            icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
        }
    });
});