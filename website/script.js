/* ─────────── Particle Canvas ─────────── */
const canvas = document.getElementById('particleCanvas');
const ctx    = canvas.getContext('2d');

let particles = [];
const COLORS  = ['#6c63ff', '#43d98a', '#9b8fff', '#6effa8'];

function resizeCanvas() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function createParticle() {
  return {
    x:     Math.random() * canvas.width,
    y:     Math.random() * canvas.height,
    r:     Math.random() * 1.8 + 0.4,
    dx:    (Math.random() - 0.5) * 0.35,
    dy:    (Math.random() - 0.5) * 0.35,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    alpha: Math.random() * 0.5 + 0.1
  };
}

for (let i = 0; i < 110; i++) particles.push(createParticle());

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.globalAlpha = p.alpha;
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0 || p.x > canvas.width)  p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });

  ctx.globalAlpha = 1;
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx   = particles[i].x - particles[j].x;
      const dy   = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(108,99,255,${0.08 * (1 - dist / 100)})`;
        ctx.lineWidth = 0.6;
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(drawParticles);
}
drawParticles();

/* ─────────── Cursor Glow ─────────── */
const glow = document.getElementById('cursorGlow');
document.addEventListener('mousemove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top  = e.clientY + 'px';
});

/* ─────────── Typewriter ─────────── */
const phrases  = ['Projects That Matter.', 'Software That Lasts.', 'Tools You Love.', 'The Open Future.'];
let pIdx = 0, cIdx = 0, deleting = false;
const tw = document.getElementById('typewriter');

function typewrite() {
  const phrase = phrases[pIdx];
  tw.textContent = deleting ? phrase.slice(0, cIdx--) : phrase.slice(0, cIdx++);
  let delay = deleting ? 45 : 90;
  if (!deleting && cIdx > phrase.length) { delay = 1800; deleting = true; }
  else if (deleting && cIdx < 0) { deleting = false; pIdx = (pIdx + 1) % phrases.length; cIdx = 0; delay = 300; }
  setTimeout(typewrite, delay);
}
typewrite();

/* ─────────── Mobile nav toggle ─────────── */
const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(l => l.addEventListener('click', () => navLinks.classList.remove('open')));

/* ─────────── Animated counters ─────────── */
function animateCounter(el) {
  const target   = +el.dataset.target;
  const duration = 1600;
  const step     = target / (duration / 16);
  let current    = 0;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = target >= 1000 ? Math.floor(current).toLocaleString() : Math.floor(current);
  }, 16);
}

/* ─────────── Scroll reveal ─────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ─────────── Counter trigger ─────────── */
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => { if (entry.isIntersecting) { animateCounter(entry.target); counterObserver.unobserve(entry.target); } });
}, { threshold: 0.5 });

document.querySelectorAll('.counter').forEach(c => counterObserver.observe(c));

/* ─────────── Stagger process steps ─────────── */
document.querySelectorAll('.process-step').forEach((el, i) => { el.style.transitionDelay = `${i * 0.1}s`; });

/* ─────────── Contact form ─────────── */
function handleSubmit(e) {
  e.preventDefault();
  e.target.reset();
  const success = document.getElementById('form-success');
  success.classList.remove('hidden');
  setTimeout(() => success.classList.add('hidden'), 5000);
}

/* ─────────── Navbar scroll shadow ─────────── */
window.addEventListener('scroll', () => {
  document.querySelector('.navbar').style.boxShadow =
    window.scrollY > 20 ? '0 4px 24px rgba(0,0,0,0.4)' : 'none';
});
