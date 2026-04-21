/* ============================================================
   MAIN.JS — core utilities, nav, modal, background, init
============================================================ */

// ── NAVBAR scroll effect ──────────────────────────────────
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
  highlightNavLink();
});

// ── ACTIVE nav link on scroll ─────────────────────────────
function highlightNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  let current = '';

  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 100) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle('active', link.dataset.section === current);
  });
}

// ── SMOOTH SCROLL ─────────────────────────────────────────
function smoothScrollTo(targetY, duration) {
  const startY = window.scrollY;
  const diff = targetY - startY;
  if (Math.abs(diff) < 2) return;
  let start = null;
  const ease = t => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  const step = ts => {
    if (!start) start = ts;
    const p = Math.min((ts - start) / duration, 1);
    window.scrollTo(0, startY + diff * ease(p));
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    closeMobileMenu();
    const top = target.getBoundingClientRect().top + window.scrollY - (navbar.offsetHeight + 16);
    const duration = Math.min(Math.max(Math.abs(top - window.scrollY) * 0.35, 280), 550);
    smoothScrollTo(top, duration);
  });
});

// ── MOBILE MENU ───────────────────────────────────────────
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));

function closeMobileMenu() {
  mobileMenu.classList.remove('open');
}

document.addEventListener('click', e => {
  if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
    mobileMenu.classList.remove('open');
  }
});

// ── SCROLL REVEAL ─────────────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

function observeRevealElements() {
  document.querySelectorAll(
    '.reveal, .reveal-delay-1, .reveal-delay-2, .reveal-delay-3, .reveal-delay-4, .reveal-delay-5'
  ).forEach(el => revealObserver.observe(el));

  document.querySelectorAll('.achievements-grid, .projects-grid').forEach(grid => {
    const cards = Array.from(grid.children);
    const COLS = getComputedStyle(grid).gridTemplateColumns.split(' ').length;

    cards.forEach((card, i) => {
      const col = i % COLS;
      card.style.transitionDelay = `${col * 0.12}s`;
      card.addEventListener('transitionend', () => {
        card.style.transitionDelay = '0s';
      }, { once: true });
      revealObserver.observe(card);
    });
  });
}

// ── DURATION HELPERS ──────────────────────────────────────
const MONTH_MAP = {
  Jan:0, Feb:1, Mar:2, Apr:3, May:4, Jun:5,
  Jul:6, Aug:7, Sep:8, Oct:9, Nov:10, Dec:11
};

function parseDate(str) {
  if (!str || str.trim().toLowerCase() === 'present') return new Date();
  const [mon, yr] = str.trim().split(' ');
  return new Date(parseInt(yr), MONTH_MAP[mon] ?? 0, 1);
}

function calcDuration(start, end) {
  const s = parseDate(start);
  const e = parseDate(end);
  let months = (e.getFullYear() - s.getFullYear()) * 12 + (e.getMonth() - s.getMonth()) + 1;
  if (months < 1) months = 1;
  const years = Math.floor(months / 12);
  const rem   = months % 12;
  const parts = [];
  if (years) parts.push(`${years} yr${years > 1 ? 's' : ''}`);
  if (rem)   parts.push(`${rem} mo${rem > 1 ? 's' : ''}`);
  return parts.join(' ');
}

function companyDuration(company) {
  const starts   = company.roles.map(r => parseDate(r.start));
  const ends     = company.roles.map(r => parseDate(r.end));
  const minStart = new Date(Math.min(...starts));
  const maxEnd   = new Date(Math.max(...ends));
  let months = (maxEnd.getFullYear() - minStart.getFullYear()) * 12
             + (maxEnd.getMonth() - minStart.getMonth()) + 1;
  if (months < 1) months = 1;
  const years = Math.floor(months / 12);
  const rem   = months % 12;
  const parts = [];
  if (years) parts.push(`${years} yr${years > 1 ? 's' : ''}`);
  if (rem)   parts.push(`${rem} mo${rem > 1 ? 's' : ''}`);
  return parts.join(' ');
}

// ── COPY EMAIL ────────────────────────────────────────────
function copyEmail(el) {
  const email = 'danggminhquan2811@gmail.com';
  navigator.clipboard.writeText(email).then(() => {
    const original = el.innerHTML;
    el.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
      Copied!
    `;
    el.style.color = 'var(--accent)';
    el.style.borderColor = 'var(--accent)';
    setTimeout(() => {
      el.innerHTML = original;
      el.style.color = '';
      el.style.borderColor = '';
    }, 2000);
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
    ? `<a href="${project.link}" target="_blank" class="modal-link">View Repository</a>`
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
    <div class="modal-tabs">
      <button class="modal-tab active" data-tab="story">Story</button>
      <button class="modal-tab" data-tab="tech">Tech Stack</button>
    </div>
    <div class="modal-tab-panel" data-panel="story">
      <div class="modal-story">${project.story}</div>
      ${linkHtml}
    </div>
    <div class="modal-tab-panel hidden" data-panel="tech">
      <div class="modal-tech-list">${techHtml}</div>
    </div>
    ${imagesHtml}
  `;

  modalContent.querySelectorAll('.modal-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      modalContent.querySelectorAll('.modal-tab').forEach(b => b.classList.remove('active'));
      modalContent.querySelectorAll('.modal-tab-panel').forEach(p => p.classList.add('hidden'));
      btn.classList.add('active');
      modalContent.querySelector(`[data-panel="${btn.dataset.tab}"]`).classList.remove('hidden');
    });
  });

  const scrollY = window.scrollY;
  modalOverlay.classList.add('open');
  projectModal.classList.add('open');
  projectModal.scrollTop = 0;
  document.body.style.overflow   = 'hidden';
  document.body.style.position   = 'fixed';
  document.body.style.top        = `-${scrollY}px`;
  document.body.style.width      = '100%';
}

function closeModal() {
  const scrollY = Math.abs(parseInt(document.body.style.top || '0'));
  modalOverlay.classList.remove('open');
  projectModal.classList.remove('open');
  document.body.style.overflow = '';
  document.body.style.position = '';
  document.body.style.top      = '';
  document.body.style.width    = '';
  window.scrollTo({ top: scrollY, behavior: 'instant' });
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ── DECORATIVE BACKGROUND ─────────────────────────────────
function initBackground() {
  const ns  = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(ns, 'svg');
  svg.id = 'bg-canvas';
  svg.setAttribute('xmlns', ns);
  svg.setAttribute('aria-hidden', 'true');

  const defs = document.createElementNS(ns, 'defs');

  function makeGrad(id, color) {
    const g = document.createElementNS(ns, 'radialGradient');
    g.setAttribute('id', id);
    g.setAttribute('cx', '50%'); g.setAttribute('cy', '50%'); g.setAttribute('r', '50%');
    const s1 = document.createElementNS(ns, 'stop');
    s1.setAttribute('offset', '0%');
    s1.setAttribute('stop-color', color);
    s1.setAttribute('stop-opacity', '0.35');
    const s2 = document.createElementNS(ns, 'stop');
    s2.setAttribute('offset', '100%');
    s2.setAttribute('stop-color', color);
    s2.setAttribute('stop-opacity', '0');
    g.appendChild(s1); g.appendChild(s2);
    return g;
  }

  defs.appendChild(makeGrad('orb-amber', '#C8651A'));
  defs.appendChild(makeGrad('orb-gold',  '#B8860B'));
  defs.appendChild(makeGrad('orb-warm',  '#D4845A'));
  svg.appendChild(defs);

  const orbs = [
    { g: 'orb-amber', cx: 8,  cy: 15, rx: 420, ry: 340, dur: 28 },
    { g: 'orb-gold',  cx: 92, cy: 80, rx: 380, ry: 420, dur: 34 },
    { g: 'orb-warm',  cx: 55, cy: 45, rx: 300, ry: 260, dur: 22 },
    { g: 'orb-amber', cx: 80, cy: 10, rx: 260, ry: 220, dur: 40 },
    { g: 'orb-gold',  cx: 20, cy: 85, rx: 320, ry: 280, dur: 30 },
  ];

  orbs.forEach((o, i) => {
    const el = document.createElementNS(ns, 'ellipse');
    el.setAttribute('fill', `url(#${o.g})`);
    el.setAttribute('rx', o.rx);
    el.setAttribute('ry', o.ry);
    el.style.cssText = `
      transform-origin: ${o.cx}vw ${o.cy}vh;
      animation: orbDrift${i} ${o.dur}s ease-in-out infinite alternate;
    `;
    el.dataset.cx = o.cx;
    el.dataset.cy = o.cy;
    svg.appendChild(el);
  });

  function positionOrbs() {
    const W = window.innerWidth;
    const H = window.innerHeight;
    svg.querySelectorAll('ellipse').forEach(el => {
      el.setAttribute('cx', (parseFloat(el.dataset.cx) / 100) * W);
      el.setAttribute('cy', (parseFloat(el.dataset.cy) / 100) * H);
    });
  }

  const style = document.createElement('style');
  const drifts = [[22,-18],[-16,24],[18,20],[-20,-22],[14,-16]];
  style.textContent = drifts.map(([dx, dy], i) => `
    @keyframes orbDrift${i} {
      from { transform: translate(0px, 0px); }
      to   { transform: translate(${dx}px, ${dy}px); }
    }
  `).join('');
  document.head.appendChild(style);

  document.body.prepend(svg);
  positionOrbs();
  window.addEventListener('resize', positionOrbs);

  const accentSvg = document.createElementNS(ns, 'svg');
  accentSvg.setAttribute('xmlns', ns);
  accentSvg.setAttribute('aria-hidden', 'true');
  accentSvg.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:0;overflow:visible;';

  const accents = [
    { type:'circle', cx:'92%', cy:'8%',  r:120, stroke:'rgba(200,101,26,0.25)', sw:2,   fill:'none' },
    { type:'circle', cx:'6%',  cy:'88%', r:80,  stroke:'rgba(184,134,11,0.22)', sw:1.5, fill:'none' },
    { type:'circle', cx:'3%',  cy:'30%', r:6,   stroke:'none', sw:0, fill:'rgba(200,101,26,0.28)' },
    { type:'circle', cx:'5%',  cy:'33%', r:4,   stroke:'none', sw:0, fill:'rgba(200,101,26,0.22)' },
    { type:'circle', cx:'4%',  cy:'36%', r:2.5, stroke:'none', sw:0, fill:'rgba(200,101,26,0.18)' },
    { type:'circle', cx:'96%', cy:'50%', r:50,  stroke:'rgba(200,101,26,0.20)', sw:1.5, fill:'none' },
    { type:'line', x1:'48%', y1:'5%', x2:'52%', y2:'5%', stroke:'rgba(200,101,26,0.30)', sw:2 },
    { type:'line', x1:'50%', y1:'3%', x2:'50%', y2:'7%', stroke:'rgba(200,101,26,0.30)', sw:2 },
    { type:'line', x1:'0%',  y1:'60%', x2:'4%', y2:'60%', stroke:'rgba(200,101,26,0.25)', sw:1.5 },
    { type:'path', d:'M calc(100% - 50px) calc(100% - 20px) L calc(100% - 20px) calc(100% - 20px) L calc(100% - 20px) calc(100% - 50px)', stroke:'rgba(200,101,26,0.28)', sw:2, fill:'none' },
    { type:'circle', cx:'15%', cy:'65%', r:3,  stroke:'none', sw:0, fill:'rgba(184,134,11,0.25)' },
    { type:'circle', cx:'85%', cy:'25%', r:4,  stroke:'none', sw:0, fill:'rgba(200,101,26,0.20)' },
    { type:'circle', cx:'25%', cy:'15%', r:30, stroke:'rgba(184,134,11,0.18)', sw:1.2, fill:'none' },
    { type:'circle', cx:'75%', cy:'65%', r:35, stroke:'rgba(200,101,26,0.16)', sw:1.2, fill:'none' },
  ];

  accents.forEach(a => {
    let el;
    if (a.type === 'circle') {
      el = document.createElementNS(ns, 'circle');
      el.setAttribute('cx', a.cx); el.setAttribute('cy', a.cy);
      el.setAttribute('r', a.r);
      el.setAttribute('fill', a.fill);
      el.setAttribute('stroke', a.stroke);
      el.setAttribute('stroke-width', a.sw);
    } else if (a.type === 'line') {
      el = document.createElementNS(ns, 'line');
      el.setAttribute('x1', a.x1); el.setAttribute('y1', a.y1);
      el.setAttribute('x2', a.x2); el.setAttribute('y2', a.y2);
      el.setAttribute('stroke', a.stroke);
      el.setAttribute('stroke-width', a.sw);
    } else if (a.type === 'path') {
      el = document.createElementNS(ns, 'path');
      el.setAttribute('d', a.d);
      el.setAttribute('fill', a.fill);
      el.setAttribute('stroke', a.stroke);
      el.setAttribute('stroke-width', a.sw);
      el.setAttribute('stroke-linecap', 'round');
    }
    if (el) accentSvg.appendChild(el);
  });

  document.body.appendChild(accentSvg);
}

// ── CONTACT FORM ──────────────────────────────────────────
function handleSubmit(e) {
  e.preventDefault();
  const success = document.getElementById('formSuccess');
  success.style.display = 'block';
  e.target.reset();
  setTimeout(() => { success.style.display = 'none'; }, 5000);
}

// ── INIT ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderAbout();
  renderExperience();
  renderAchievements();
  renderProjects();
  renderContact();

  initBackground();
  observeRevealElements();
});