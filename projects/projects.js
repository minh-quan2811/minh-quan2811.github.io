/* ============================================================
   PROJECTS — renderer
   Mounts into: #projects-root
   Depends on:  PROJECTS  (projects.data.js)
                openModal  (main.js)
============================================================ */

function renderProjects() {
  const root = document.getElementById('projects-root');
  if (!root || typeof PROJECTS === 'undefined') return;

  root.innerHTML = `
    <section id="projects" class="section">
      <div class="section-inner">
        <div class="section-header reveal">
          <span class="section-number">03</span>
          <h2 class="section-title">Projects</h2>
        </div>
        <div class="projects-grid" id="projectsGrid"></div>
      </div>
    </section>
  `;

  const grid = document.getElementById('projectsGrid');

  PROJECTS.forEach((project, i) => {
    const card = document.createElement('div');
    card.className = 'project-card reveal';
    card.style.transitionDelay = `${i * 0.08}s`;

    const thumbContent = project.image
      ? `<img src="${project.image}" alt="${project.title}" onerror="this.style.display='none'">`
      : `<div class="project-thumb-placeholder">${project.emoji}</div>`;

    const storyPreview = (() => {
      const tmp = document.createElement('div');
      tmp.innerHTML = project.story;
      const first = tmp.querySelector('p');
      return first ? first.textContent : tmp.textContent.trim();
    })();

    const techHtml = (project.tech || [])
      .map(t => `<div class="card-tech-item"><span class="card-tech-dot"></span>${t}</div>`)
      .join('');

    const githubLinkHtml = project.link
      ? `<a href="${project.link}" target="_blank" class="card-github-link" onclick="event.stopPropagation()">
           <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
             <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57
               0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695
               -.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99
               .105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225
               -.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405
               c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225
               0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3
               0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
           </svg>
           <span>GitHub</span>
         </a>`
      : '';

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
        ${githubLinkHtml}
      </div>
    `;

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
}