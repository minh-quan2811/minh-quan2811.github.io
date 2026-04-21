/* ============================================================
   CONTACT — renderer
   Mounts into: #contact-root
   Depends on:  handleSubmit  (main.js)
============================================================ */

function renderContact() {
  const root = document.getElementById('contact-root');
  if (!root) return;

  root.innerHTML = `
    <section id="contact" class="section contact-section">
      <div class="section-inner contact-inner">
        <div class="section-header reveal">
          <span class="section-number">04</span>
          <h2 class="section-title">Get In Touch</h2>
        </div>
        <div class="contact-grid">

          <div class="contact-info reveal">
            <p class="contact-lead">
              Have a project in mind, a question, or just want to connect?
              I'd love to hear from you.
            </p>
            <div class="contact-links">

              <button class="contact-link" onclick="copyEmail(this)" style="background:var(--surface);border:1px solid var(--border);cursor:pointer;width:100%;text-align:left;">
                <div class="contact-link-icon">✉</div>
                <div>
                  <div class="contact-link-label">Email</div>
                  <div class="contact-link-value">danggminhquan2811@gmail.com</div>
                </div>
              </button>

              <a href="https://github.com/minh-quan2811" target="_blank" class="contact-link">
                <div class="contact-link-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57
                      0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695
                      -.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99
                      .105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225
                      -.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405
                      c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225
                      0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3
                      0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <div class="contact-link-label">GitHub</div>
                  <div class="contact-link-value">github.com/minh-quan2811</div>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/%C4%91%E1%BA%B7ng-minh-qu%C3%A2n-141105308/" target="_blank" class="contact-link">
                <div class="contact-link-icon">in</div>
                <div>
                  <div class="contact-link-label">LinkedIn</div>
                  <div class="contact-link-value">Đặng Minh Quân</div>
                </div>
              </a>

            </div>
          </div>

          <form class="contact-form reveal" id="contactForm" onsubmit="handleSubmit(event)">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" name="name" required placeholder="Your name" />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" required placeholder="your@email.com" />
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" name="message" required placeholder="Tell me about your project or idea..." rows="5"></textarea>
            </div>
            <button type="submit" class="submit-btn">
              <span>Send Message</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
            <div class="form-success" id="formSuccess">Message sent! I'll get back to you soon ✓</div>
          </form>

        </div>
      </div>
    </section>
  `;
}