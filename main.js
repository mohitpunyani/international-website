// ============================================
// TANTIA UNIVERSITY – Global JS v3.0
// ============================================

// Navbar scroll effect
(function () {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', onScroll, { passive: true });
})();

// Loader
(function () {
  const loader = document.getElementById('loader');
  if (!loader) return;
  const hide = () => loader.classList.add('hidden');
  if (document.readyState === 'complete') { setTimeout(hide, 600); }
  else { window.addEventListener('load', () => setTimeout(hide, 600)); }
})();

// Mobile Menu
let menuOpen = false;
function toggleMenu() {
  const menu = document.getElementById('mobileNav');
  const overlay = document.getElementById('navOverlay');
  const hamburger = document.getElementById('hamburger');
  if (!menu) return;
  menuOpen = !menuOpen;
  menu.classList.toggle('open', menuOpen);
  if (overlay) overlay.classList.toggle('show', menuOpen);
  if (hamburger) hamburger.classList.toggle('open', menuOpen);
  document.body.style.overflow = menuOpen ? 'hidden' : '';
}

function closeMenu() {
  const menu = document.getElementById('mobileNav');
  const overlay = document.getElementById('navOverlay');
  const hamburger = document.getElementById('hamburger');
  menuOpen = false;
  if (menu) menu.classList.remove('open');
  if (overlay) overlay.classList.remove('show');
  if (hamburger) hamburger.classList.remove('open');
  document.body.style.overflow = '';
}

// Intersection Observer Animations
(function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.fade-up, .fade-in').forEach(el => observer.observe(el));
})();

// Counter Animation
function animateCounter(el) {
  const target = parseInt(el.dataset.target) || 0;
  const suffix = el.dataset.suffix || '';
  let start = null;
  const duration = 2000;
  const step = (ts) => {
    if (!start) start = ts;
    const progress = Math.min((ts - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(ease * target).toLocaleString() + suffix;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

(function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.counter').forEach(el => observer.observe(el));
})();

// Close menu on resize to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 1023 && menuOpen) closeMenu();
});

// Smooth scroll for anchor links
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const id = a.getAttribute('href').slice(1);
  const el = document.getElementById(id);
  if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth' }); }
});
