/* ============================================================
   ACHIEVEMENTS — renderer
   Mounts into: #achievements-root
   Edit the ACHIEVEMENTS array below to manage all items.
============================================================ */

const ACHIEVEMENTS = [
  {
    image: "assets/achievements/achievement1.jpg",
    badge: "gold",
    label: "Certificate of Commendation",
    description: "Awarded by the Rector of Danang University of Science and Technology for outstanding performance in national and international competitions.",
  },
  {
    image: "assets/achievements/achievement2.jpg",
    badge: "silver",
    label: "2nd Prize — KU AIdeation 2024",
    description: "Kasetsart University (Thailand) — Awarded for excellence in AI solution design and cross-border collaboration.",
  },
  {
    image: "assets/achievements/achievement3.jpg",
    badge: "silver",
    label: "2nd Prize — FAST Research 2025",
    description: "FAST Faculty Student Scientific Research Contest — Awarded for outstanding performance and rigor in undergraduate research.",
  },
  {
    image: "assets/achievements/achievement4.jpg",
    badge: "silver",
    label: "2nd Prize — AI for Da Nang 2024",
    description: "AI competition promoting smart urban development, organized by the Ho Chi Minh Communist Youth Union, Da Nang City.",
  },
  {
    image: "assets/achievements/achievement5.jpg",
    badge: "bronze",
    label: "Prospect Award — FAST 2025",
    description: "Recognizing potential contributions to academic innovation and research development.",
  },
  {
    image: "assets/achievements/achievement6.jpg",
    badge: "bronze",
    label: "Potential Award — DUT Creative Ideas",
    description: "Presented by the Youth Union of Danang University of Science and Technology – University of Danang.",
  },
];

function renderAchievements() {
  const root = document.getElementById('achievements-root');
  if (!root) return;

  const cardsHtml = ACHIEVEMENTS.map(a => `
    <div class="achievement-card reveal">
      <div class="achievement-img-wrap">
        <img src="${a.image}" alt="" onerror="this.style.display='none'" />
      </div>
      <div class="achievement-body">
        <div class="achievement-badge ${a.badge}">${a.label}</div>
        <p>${a.description}</p>
      </div>
    </div>
  `).join('');

  root.innerHTML = `
    <section id="achievements" class="section achievements-section">
      <div class="section-inner">
        <div class="section-header reveal">
          <span class="section-number">02</span>
          <h2 class="section-title">Achievements</h2>
        </div>
        <div class="achievements-grid">
          ${cardsHtml}
        </div>
      </div>
    </section>
  `;
}