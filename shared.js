/* shared.js — Boomstrick nav + footer injection */

const NAV_HTML = `
<nav>
  <div class="nav-inner">
    <a href="index.html" class="logo">
      <div class="logo-mark">
        <svg viewBox="0 0 24 24"><path d="M12 2L3 7v10l9 5 9-5V7L12 2zm0 2.27L19 8v8l-7 3.88L5 16V8l7-3.73zM9 10v5l3 1.5 3-1.5v-5l-3-1.5L9 10z"/></svg>
      </div>
      <span class="logo-name">Boomstrick</span>
    </a>

    <ul class="nav-links">
      <!-- Apps dropdown -->
      <li class="nav-has-dropdown">
        <a href="#" class="nav-parent">
          Apps
          <svg class="nav-chevron" viewBox="0 0 12 8" fill="none">
            <path d="M1 1l5 5 5-5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
          </svg>
        </a>
        <div class="nav-dropdown">
          <a href="mbox.html" class="dd-item">
            <div class="dd-icon" style="background:linear-gradient(135deg,#4cd97a,#6ee89a)">📦</div>
            <div class="dd-text">
              <span class="dd-name">MBox</span>
              <span class="dd-desc">Unified messaging &amp; inbox</span>
            </div>
          </a>
          <a href="fract.html" class="dd-item">
            <div class="dd-icon" style="background:linear-gradient(135deg,#6ee89a,#93f0b5)">⬡</div>
            <div class="dd-text">
              <span class="dd-name">FRACT</span>
              <span class="dd-desc">Modular analytics engine</span>
            </div>
          </a>
        </div>
      </li>

      <!-- Projects dropdown -->
      <li class="nav-has-dropdown">
        <a href="#" class="nav-parent">
          Projects
          <svg class="nav-chevron" viewBox="0 0 12 8" fill="none">
            <path d="M1 1l5 5 5-5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
          </svg>
        </a>
        <div class="nav-dropdown">
          <a href="thelioraproject.html" class="dd-item">
            <div class="dd-icon" style="background:linear-gradient(135deg,#4cd97a,#7de89f)">🌿</div>
            <div class="dd-text">
              <span class="dd-name">The Liora Project</span>
              <span class="dd-desc">Sustainable design initiative</span>
            </div>
          </a>
          <a href="rhombusmobile.html" class="dd-item">
            <div class="dd-icon" style="background:linear-gradient(135deg,#6ee89a,#4cd97a)">◆</div>
            <div class="dd-text">
              <span class="dd-name">Rhombus Mobile</span>
              <span class="dd-desc">Next-gen mobile experience</span>
            </div>
          </a>
        </div>
      </li>
    </ul>

    <button class="hamburger" onclick="toggleMenu()" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<div class="mobile-menu" id="mobileMenu">
  <div class="mob-section">
    <div class="mob-section-label">Apps</div>
    <a href="mbox.html"  onclick="closeMenu()">📦 &nbsp;MBox</a>
    <a href="fract.html" onclick="closeMenu()">⬡ &nbsp;FRACT</a>
  </div>
  <div class="mob-section">
    <div class="mob-section-label">Projects</div>
    <a href="thelioraproject.html" onclick="closeMenu()">🌿 &nbsp;The Liora Project</a>
    <a href="rhombusmobile.html"  onclick="closeMenu()">◆ &nbsp;Rhombus Mobile</a>
  </div>
</div>`;

const FOOTER_HTML = `
<footer>
  <div class="footer-top">
    <div class="footer-brand">
      <a href="index.html" class="logo" style="margin-bottom:20px;display:inline-flex">
        <div class="logo-mark">
          <svg viewBox="0 0 24 24"><path d="M12 2L3 7v10l9 5 9-5V7L12 2zm0 2.27L19 8v8l-7 3.88L5 16V8l7-3.73zM9 10v5l3 1.5 3-1.5v-5l-3-1.5L9 10z"/></svg>
        </div>
        <span class="logo-name" style="color:white">Boomstrick</span>
      </a>
      <p class="footer-tagline">One platform. All your apps.<br>Built for the way modern teams work.</p>
      <div class="social-links">
        <a href="https://facebook.com/boomstrick" class="social-btn" target="_blank" aria-label="Facebook">
          <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
        </a>
        <a href="https://instagram.com/boomstrick" class="social-btn" target="_blank" aria-label="Instagram">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
        </a>
        <a href="https://bsky.app/profile/boomstrick.bsky.social" class="social-btn" target="_blank" aria-label="Bluesky">
          <svg viewBox="0 0 24 24"><path d="M12 2.5c-4.5 3.3-7.5 8.5-7.5 12 0 2.5 1.5 4 4 4 1.5 0 2.5-.8 3.5-2 1 1.2 2 2 3.5 2 2.5 0 4-1.5 4-4 0-3.5-3-8.7-7.5-12z"/></svg>
        </a>
      </div>
    </div>
    <div class="footer-col">
      <h4>Apps</h4>
      <ul>
        <li><a href="mbox.html">MBox</a></li>
        <li><a href="fract.html">FRACT</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Projects</h4>
      <ul>
        <li><a href="thelioraproject.html">The Liora Project</a></li>
        <li><a href="rhombusmobile.html">Rhombus Mobile</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Boomstrick</h4>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">API Docs</a></li>
        <li><a href="#">Support</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="footer-copy">© 2026 Boomstrick, Inc. All rights reserved.</div>
    <div class="footer-legal">
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Service</a>
      <a href="#">Cookie Preferences</a>
    </div>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

  // Active state for parent when on a child page
  const page = location.pathname.split('/').pop() || 'index.html';
  const appPages     = ['mbox.html','fract.html'];
  const projectPages = ['thelioraproject.html','rhombusmobile.html'];
  document.querySelectorAll('.nav-has-dropdown').forEach(li => {
    const links = [...li.querySelectorAll('.dd-item')].map(a => a.getAttribute('href'));
    const isActive = links.some(h => h === page);
    if (isActive) li.querySelector('.nav-parent').classList.add('active');
  });

  // Fade-in observer
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));
});

function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}
function closeMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
}
