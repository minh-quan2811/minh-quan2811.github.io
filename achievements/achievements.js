/* ============================================================
   ACHIEVEMENTS — renderer
   Mounts into: #achievements-root
   Edit the ACHIEVEMENTS array below to manage all items.
============================================================ */

const ACHIEVEMENTS = [
  {
    image: "assets/achievements/achievement7.jpg",
    badge: "gold",
    label: "Individual Certificate of Commendation 2025",
    description: "Awarded by the Rector of Danang University of Science and Technology for outstanding performance in national and international competitions.",
  },
  {
    image: "assets/achievements/achievement10.jpg",
    badge: "gold",
    label: "First Prize – KU Future Frontier Challenge 2025",
    description: "Awarded by Kasetsart University (competing against teams from ASEAN, China, Japan, and Korea).",
  },
  {
    image: "assets/achievements/achievement9.jpg",
    badge: "gold",
    label: "Certificate of Academic Merit 2025",
    description: "Awarded by University of Science and Technology for achieving “Good Student” status in the 2024–2025 academic year.",
  },
  {
    image: "assets/achievements/achievement1.jpg",
    badge: "gold",
    label: "Certificate of Commendation 2024",
    description: "Awarded by the Rector of Danang University of Science and Technology for outstanding performance in national and international competitions.",
  },
  {
    image: "assets/achievements/achievement3.jpg",
    badge: "silver",
    label: "Second Place — FAST Research 2025",
    description: "FAST Faculty Student Scientific Research Contest — Awarded for outstanding performance and rigor in undergraduate research.",
  },
  {
    image: "assets/achievements/achievement2.jpg",
    badge: "silver",
    label: "Runner-Up — KU AIdeation 2024",
    description: "Kasetsart University (Thailand) — Awarded for excellence in AI solution design and cross-border collaboration.",
  },
  {
    image: "assets/achievements/achievement4.jpg",
    badge: "silver",
    label: "2nd Prize — AI for Da Nang 2024",
    description: "AI competition promoting smart urban development, organized by the Ho Chi Minh Communist Youth Union, Da Nang City.",
  },
  {
    image: "assets/achievements/achievement8.jpg",
    badge: "bronze",
    label: "Certificate of participation 2025",
    description: "Final Round of the Smart Campus Competition SCC 2025",
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
    label: "Potential Award — DUT Creative Ideas 2023",
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