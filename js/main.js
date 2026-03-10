/* =============================================
   ALEX RIVERA PORTFOLIO — main.js
   ============================================= */

// ── Cursor Glow ──────────────────────────────
const cursorGlow = document.getElementById('cursorGlow');

document.addEventListener('mousemove', (e) => {
  cursorGlow.style.left = e.clientX + 'px';
  cursorGlow.style.top  = e.clientY + 'px';
});

document.addEventListener('mouseleave', () => {
  cursorGlow.style.opacity = '0';
});
document.addEventListener('mouseenter', () => {
  cursorGlow.style.opacity = '1';
});


// ── Navbar: add .scrolled class on scroll ────
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });


// ── Mobile burger menu ───────────────────────
const burger   = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  navLinks.classList.toggle('open');
  // Prevent body scroll when menu is open
  document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
});

// Close menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('open');
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  });
});


// ── Scroll Reveal via Intersection Observer ──
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Once revealed, stop observing for performance
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));


// ── Stagger delays for cards ─────────────────
document.querySelectorAll('.work__grid .card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.07}s`;
});

document.querySelectorAll('.skill-tag').forEach((tag, i) => {
  tag.style.transitionDelay = `${i * 0.05}s`;
});
