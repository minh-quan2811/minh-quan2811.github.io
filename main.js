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

function observeRevealElements() {
  document.querySelectorAll(
    '.reveal, .reveal-delay-1, .reveal-delay-2, .reveal-delay-3, .reveal-delay-4, .reveal-delay-5'
  ).forEach(el => revealObserver.observe(el));
}

// ── DURATION HELPERS ──────────────────────────────────────
const MONTH_MAP = {
  Jan:0, Feb:1, Mar:2, Apr:3, May:4, Jun:5,
  Jul:6, Aug:7, Sep:8, Oct:9, Nov:10, Dec:11
};

/** Parse "Mon YYYY" or "Present" → Date */
function parseDate(str) {
  if (!str || str.trim().toLowerCase() === 'present') return new Date();
  const [mon, yr] = str.trim().split(' ');
  return new Date(parseInt(yr), MONTH_MAP[mon] ?? 0, 1);
}

/** Return { years, months } between two date strings (inclusive of start month) */
function calcDuration(start, end) {
  const s = parseDate(start);
  const e = parseDate(end);
  let months = (e.getFullYear() - s.getFullYear()) * 12 + (e.getMonth() - s.getMonth()) + 1;
  if (months < 1) months = 1;
  const years  = Math.floor(months / 12);
  const rem    = months % 12;
  const parts  = [];
  if (years)  parts.push(`${years} yr${years > 1 ? 's' : ''}`);
  if (rem)    parts.push(`${rem} mo${rem > 1 ? 's' : ''}`);
  return parts.join(' ');
}

/** Total duration across all roles in a company (earliest start → latest end) */
function companyDuration(company) {
  const starts = company.roles.map(r => parseDate(r.start));
  const ends   = company.roles.map(r => parseDate(r.end));
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

// ── EXPERIENCE RENDER ─────────────────────────────────────
function renderExperience() {
  const list = document.getElementById('companiesList');
  if (!list || typeof COMPANIES === 'undefined') return;

  COMPANIES.forEach((company, ci) => {
    // Build logo HTML: image with fallback text
    const logoInner = company.logo
      ? `<img
           src="${company.logo}"
           alt="${company.name} logo"
           onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
         />
         <span class="company-logo-fallback" style="display:none">${company.logoFallback}</span>`
      : `<span class="company-logo-fallback">${company.logoFallback}</span>`;

    // Build each role row
    const rolesHtml = company.roles.map(role => {
      const roleDuration = calcDuration(role.start, role.end);
      const pointsHtml = role.points
        .map(p => `<li>${p}</li>`)
        .join('');
      const tagsHtml = role.tags
        .map(t => `<span>${t}</span>`)
        .join('');

      return `
        <div class="role-item">
          <div class="role-dot-col">
            <div class="role-dot"></div>
            <div class="role-connector"></div>
          </div>
          <div class="role-content">
            <div class="role-title">${role.title}</div>
            <div class="role-meta">
              <span class="role-badge">${role.type}</span>
              <span class="role-duration">${role.start} – ${role.end}</span>
              <span class="role-duration role-duration-sep">·</span>
              <span class="role-duration">${roleDuration}</span>
            </div>
            <ul class="role-points">${pointsHtml}</ul>
            <div class="role-tags">${tagsHtml}</div>
          </div>
        </div>
      `;
    }).join('');

    // Company name: wrap in <a> if URL is provided
    const nameHtml = company.url
      ? `<a href="${company.url}" target="_blank" rel="noopener">${company.name}</a>`
      : company.name;

    const totalDur = companyDuration(company);

    // Build full company block
    const block = document.createElement('div');
    block.className = 'company-block reveal';
    block.style.transitionDelay = `${ci * 0.1}s`;
    block.innerHTML = `
      <div class="company-left">
        <div class="company-logo">${logoInner}</div>
        <div class="company-line"></div>
      </div>
      <div class="company-right">
        <div class="company-header">
          <div class="company-name">${nameHtml}</div>
          <span class="company-location">${company.location}</span>
          <span class="company-total-duration">${totalDur}</span>
        </div>
        <div class="roles-list">${rolesHtml}</div>
      </div>
    `;

    list.appendChild(block);
  });

  // Re-observe newly added reveal elements
  observeRevealElements();
}

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

    // First <p> of story as card preview
    const storyPreview = (() => {
      const tmp = document.createElement('div');
      tmp.innerHTML = project.story;
      const first = tmp.querySelector('p');
      return first ? first.textContent : tmp.textContent.trim();
    })();

    const techHtml = (project.tech || [])
      .map(t => `<div class="card-tech-item"><span class="card-tech-dot"></span>${t}</div>`)
      .join('');

    card.innerHTML = `
      <div class="project-thumb">${thumbContent}</div>
      <div class="project-info">
        <div class="project-meta-row">
          <div class="project-year">${project.year}</div>
          <div class="card-tabs">
            <button class="card-tab active" data-tab="story">Story</button>
            <button class="card-tab" data-tab="tech">Tech Stack</button>
          </div>
        </div>
        <div class="project-title">${project.title}</div>
        <div class="card-panel card-panel-story active">
          <p class="card-story-text">${storyPreview}</p>
        </div>
        <div class="card-panel card-panel-tech">
          <div class="card-tech-list">${techHtml}</div>
        </div>
      </div>
    `;

    // Tab switching — stop propagation so card click doesn't open modal
    card.querySelectorAll('.card-tab').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const tab = btn.dataset.tab;
        card.querySelectorAll('.card-tab').forEach(b => b.classList.remove('active'));
        card.querySelectorAll('.card-panel').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        card.querySelector(`.card-panel-${tab}`).classList.add('active');
      });
    });

    card.addEventListener('click', () => openModal(project));
    grid.appendChild(card);
  });

  observeRevealElements();
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

  // Tab switching
  modalContent.querySelectorAll('.modal-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      modalContent.querySelectorAll('.modal-tab').forEach(b => b.classList.remove('active'));
      modalContent.querySelectorAll('.modal-tab-panel').forEach(p => p.classList.add('hidden'));
      btn.classList.add('active');
      modalContent.querySelector(`[data-panel="${btn.dataset.tab}"]`).classList.remove('hidden');
    });
  });

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

// ── DECORATIVE BACKGROUND ────────────────────────────────
function initBackground() {
  const ns = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(ns, 'svg');
  svg.id = 'bg-canvas';
  svg.setAttribute('xmlns', ns);
  svg.setAttribute('aria-hidden', 'true');

  const defs = document.createElementNS(ns, 'defs');

  // Radial gradient for orbs
  function makeGrad(id, color) {
    const g = document.createElementNS(ns, 'radialGradient');
    g.setAttribute('id', id);
    g.setAttribute('cx', '50%'); g.setAttribute('cy', '50%');
    g.setAttribute('r', '50%');
    const s1 = document.createElementNS(ns, 'stop');
    s1.setAttribute('offset', '0%');
    s1.setAttribute('stop-color', color);
    s1.setAttribute('stop-opacity', '0.18');
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

  // Orb config: [gradId, cx%, cy%, rx, ry, animDur, dxRange, dyRange]
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
    // Animate position with CSS keyframes via style
    el.style.cssText = `
      transform-origin: ${o.cx}vw ${o.cy}vh;
      animation: orbDrift${i} ${o.dur}s ease-in-out infinite alternate;
    `;
    // Set position via cx/cy attrs (updated on resize)
    el.dataset.cx = o.cx;
    el.dataset.cy = o.cy;
    svg.appendChild(el);
  });

  // Position orbs based on viewport
  function positionOrbs() {
    const W = window.innerWidth;
    const H = window.innerHeight;
    svg.querySelectorAll('ellipse').forEach(el => {
      el.setAttribute('cx', (parseFloat(el.dataset.cx) / 100) * W);
      el.setAttribute('cy', (parseFloat(el.dataset.cy) / 100) * H);
    });
  }

  // Inject keyframes for gentle drift
  const style = document.createElement('style');
  const drifts = [
    [22, -18], [-16, 24], [18, 20], [-20, -22], [14, -16]
  ];
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

  // ── Floating geometric accents (fixed, subtle) ──────────
  const accentSvg = document.createElementNS(ns, 'svg');
  accentSvg.setAttribute('xmlns', ns);
  accentSvg.setAttribute('aria-hidden', 'true');
  accentSvg.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:0;overflow:visible;';

  const accents = [
    // Large thin ring top-right
    { type: 'circle', cx: '92%', cy: '8%',  r: 120, stroke: 'rgba(200,101,26,0.10)', sw: 1,   fill: 'none' },
    // Medium ring bottom-left
    { type: 'circle', cx: '6%',  cy: '88%', r: 80,  stroke: 'rgba(184,134,11,0.09)', sw: 0.8, fill: 'none' },
    // Small filled dot cluster — top left
    { type: 'circle', cx: '3%',  cy: '30%', r: 4,   stroke: 'none', sw: 0, fill: 'rgba(200,101,26,0.14)' },
    { type: 'circle', cx: '5%',  cy: '33%', r: 2.5, stroke: 'none', sw: 0, fill: 'rgba(200,101,26,0.10)' },
    { type: 'circle', cx: '4%',  cy: '36%', r: 1.5, stroke: 'none', sw: 0, fill: 'rgba(200,101,26,0.08)' },
    // Small ring mid-right
    { type: 'circle', cx: '96%', cy: '50%', r: 40,  stroke: 'rgba(200,101,26,0.08)', sw: 0.8, fill: 'none' },
    // Cross/plus top-center
    { type: 'line', x1: '49%', y1: '5%', x2: '51%', y2: '5%', stroke: 'rgba(200,101,26,0.15)', sw: 1 },
    { type: 'line', x1: '50%', y1: '4%', x2: '50%', y2: '6%', stroke: 'rgba(200,101,26,0.15)', sw: 1 },
    // Thin horizontal rule far left
    { type: 'line', x1: '0%',   y1: '60%', x2: '3%', y2: '60%', stroke: 'rgba(200,101,26,0.12)', sw: 0.8 },
    // Corner bracket bottom-right
    { type: 'path', d: 'M calc(100% - 40px) calc(100% - 20px) L calc(100% - 20px) calc(100% - 20px) L calc(100% - 20px) calc(100% - 40px)', stroke: 'rgba(200,101,26,0.13)', sw: 1, fill: 'none' },
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
  initBackground();
  observeRevealElements();
  renderExperience();
  renderProjects();
});