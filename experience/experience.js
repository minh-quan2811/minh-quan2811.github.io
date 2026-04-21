/* ============================================================
   EXPERIENCE — renderer
   Mounts into: #experience-root
   Depends on:  COMPANIES  (experience.data.js)
                calcDuration / companyDuration  (main.js)
============================================================ */

function renderExperience() {
  const root = document.getElementById('experience-root');
  if (!root || typeof COMPANIES === 'undefined') return;

  root.innerHTML = `
    <section id="experience" class="section">
      <div class="section-inner">
        <div class="section-header reveal">
          <span class="section-number">01</span>
          <h2 class="section-title">Experience</h2>
        </div>
        <div class="companies-list" id="companiesList"></div>
      </div>
    </section>
  `;

  const list = document.getElementById('companiesList');

  COMPANIES.forEach((company, ci) => {
    const logoInner = company.logo
      ? `<img
           src="${company.logo}"
           alt="${company.name} logo"
           onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
         />
         <span class="company-logo-fallback" style="display:none">${company.logoFallback}</span>`
      : `<span class="company-logo-fallback">${company.logoFallback}</span>`;

    const rolesHtml = company.roles.map(role => {
      const duration  = calcDuration(role.start, role.end);
      const pointsHtml = role.points.map(p => `<li>${p}</li>`).join('');
      const tagsHtml   = role.tags.map(t => `<span>${t}</span>`).join('');

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
              <span class="role-duration">${duration}</span>
            </div>
            <ul class="role-points">${pointsHtml}</ul>
            <div class="role-tags">${tagsHtml}</div>
          </div>
        </div>
      `;
    }).join('');

    const nameHtml = company.url
      ? `<a href="${company.url}" target="_blank" rel="noopener">${company.name}</a>`
      : company.name;

    const totalDur = companyDuration(company);

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
}