/* ============================================================
   MAIN.JS — Portfolio interactions
============================================================ */

// ── NAVBAR scroll effect ──────────────────────────────────
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  highlightNavLink();
});

// ── ACTIVE nav link on scroll ─────────────────────────────
function highlightNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  let current = '';

  sections.forEach(section => {
    const top = section.offsetTop - 100;
    if (window.scrollY >= top) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.dataset.section === current) {
      link.classList.add('active');
    }
  });
}

// ── SMOOTH SCROLL ─────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offset = navbar.offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ── MOBILE MENU ───────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

function closeMobileMenu() {
  mobileMenu.classList.remove('open');
}

document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
    mobileMenu.classList.remove('open');
  }
});

// ── SCROLL REVEAL ─────────────────────────────────────────
const revealElements = document.querySelectorAll(
  '.reveal, .reveal-delay-1, .reveal-delay-2, .reveal-delay-3, .reveal-delay-4, .reveal-delay-5'
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

// ── PROJECTS RENDER ───────────────────────────────────────
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid || typeof PROJECTS === 'undefined') return;

  PROJECTS.forEach((project, i) => {
    const card = document.createElement('div');
    card.className = 'project-card reveal';
    card.style.transitionDelay = `${i * 0.08}s`;

    const thumbContent = project.image
      ? `<img src="${project.image}" alt="${project.title}" onerror="this.parentElement.innerHTML='<div class=\\"project-thumb-placeholder\\">${project.emoji}</div>'" />`
      : `<div class="project-thumb-placeholder">${project.emoji}</div>`;

    const tagsHtml = project.tags.map(t => `<span>${t}</span>`).join('');

    card.innerHTML = `
      <div class="project-thumb">
        ${thumbContent}
        <div class="project-overlay"><span>View Project</span></div>
      </div>
      <div class="project-info">
        <div class="project-year">${project.year}</div>
        <div class="project-title">${project.title}</div>
        <div class="project-desc">${project.shortDesc}</div>
        <div class="project-tags">${tagsHtml}</div>
      </div>
    `;

    card.addEventListener('click', () => openModal(project));
    grid.appendChild(card);
  });

  // Re-observe new cards
  document.querySelectorAll('.project-card.reveal').forEach(el => {
    revealObserver.observe(el);
  });
}

// ── PROJECT MODAL ─────────────────────────────────────────
const modalOverlay = document.getElementById('modalOverlay');
const projectModal = document.getElementById('projectModal');
const modalContent = document.getElementById('modalContent');

function openModal(project) {
  const techHtml = (project.tech || []).map(t =>
    `<div class="modal-tech-item">${t}</div>`
  ).join('');

  const imagesHtml = (project.images || []).filter(Boolean).length > 0
    ? `<div class="modal-images">${project.images.map(src => `<img src="${src}" alt="" />`).join('')}</div>`
    : '';

  const linkHtml = project.link
    ? `<a href="${project.link}" target="_blank" class="modal-link">View Repository ↗</a>`
    : '';

  const heroHtml = project.image
    ? `<div class="modal-hero"><img src="${project.image}" alt="${project.title}" onerror="this.parentElement.style.display='none'" /></div>`
    : `<div class="modal-hero" style="height:100px;display:flex;align-items:center;justify-content:center;font-size:3rem;">${project.emoji}</div>`;

  modalContent.innerHTML = `
    ${heroHtml}
    <div class="modal-header">
      <div class="modal-title">${project.title}</div>
      <div class="modal-year">${project.year}</div>
    </div>
    <div class="modal-body">
      <div>
        <div class="modal-section-label">The Story</div>
        <div class="modal-story">${project.story}</div>
        ${linkHtml}
      </div>
      <div>
        <div class="modal-section-label">Tech Stack</div>
        <div class="modal-tech-list">${techHtml}</div>
      </div>
    </div>
    ${imagesHtml}
  `;

  modalOverlay.classList.add('open');
  projectModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('open');
  projectModal.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ── CONTACT FORM ──────────────────────────────────────────
function handleSubmit(e) {
  e.preventDefault();
  const success = document.getElementById('formSuccess');
  // In production, connect to a form backend (Formspree, EmailJS, etc.)
  success.style.display = 'block';
  e.target.reset();
  setTimeout(() => { success.style.display = 'none'; }, 5000);
}

// ── INIT ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
});