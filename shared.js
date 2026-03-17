/* shared.js — injects nav and footer into every page */

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
      <li><a href="apps.html">Apps</a></li>
      <li><a href="blog.html">Latest</a></li>
      <li><a href="about.html">About Us</a></li>
      <li><a href="gallery.html">Media</a></li>
      <li><a href="newsroom.html">Newsroom</a></li>
    </ul>
    <div class="nav-cta">
      <a href="#" class="btn btn-ghost">Sign In</a>
      <a href="#" class="btn btn-primary">Get Started</a>
    </div>
    <button class="hamburger" onclick="toggleMenu()" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <a href="apps.html"     onclick="closeMenu()">Apps</a>
  <a href="blog.html"     onclick="closeMenu()">The Latest</a>
  <a href="about.html"    onclick="closeMenu()">About Us</a>
  <a href="gallery.html"  onclick="closeMenu()">Media Gallery</a>
  <a href="newsroom.html" onclick="closeMenu()">Newsroom</a>
  <div class="mobile-cta">
    <a href="#" class="btn btn-outline btn-lg" style="justify-content:center">Sign In</a>
    <a href="#" class="btn btn-primary btn-lg" style="justify-content:center">Get Started</a>
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
      <h4>Platform</h4>
      <ul>
        <li><a href="apps.html">BoomChat</a></li>
        <li><a href="apps.html">BoomSpace</a></li>
        <li><a href="apps.html">BoomInsight</a></li>
        <li><a href="apps.html">BoomShop</a></li>
        <li><a href="apps.html">BoomGuard</a></li>
        <li><a href="apps.html">BoomFlow</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Company</h4>
      <ul>
        <li><a href="about.html">About Us</a></li>
        <li><a href="newsroom.html">Newsroom</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="gallery.html">Media Gallery</a></li>
        <li><a href="#">Investor Relations</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Developers</h4>
      <ul>
        <li><a href="#">API Docs</a></li>
        <li><a href="#">Status</a></li>
        <li><a href="#">Changelog</a></li>
        <li><a href="#">Community</a></li>
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
  // Inject nav
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  // Inject footer
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

  // Active nav link
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
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
