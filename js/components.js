const NAVBAR_HTML = `
<nav class="navbar" role="navigation" aria-label="Main navigation">
  <div class="container nav-inner">
    <a href="index.html" class="nav-logo">Riya Arora <span>Designs</span></a>
    <ul class="nav-links" role="list">
      <li><a href="index.html">Home</a></li>
      <li><a href="designs.html">Designs</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="contact.html" class="btn btn-primary">Contact Us</a></li>
    </ul>
    <button class="nav-hamburger" aria-label="Toggle menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
`;

const FOOTER_HTML = `
<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="nav-logo">Riya Arora <span>Designs</span></a>
        <p>Bespoke sarees and lehengas crafted with passion, heritage, and your story at heart.</p>
      </div>
      <div>
        <h4>Pages</h4>
        <ul class="footer-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="designs.html">Designs</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4>Collections</h4>
        <ul class="footer-links">
          <li><a href="designs.html">Sarees</a></li>
          <li><a href="designs.html">Lehengas</a></li>
          <li><a href="designs.html">Bridal</a></li>
          <li><a href="designs.html">Festive</a></li>
        </ul>
      </div>
      <div>
        <h4>Contact</h4>
        <div class="footer-contact-item"><span>📍</span><span>12, Silk Lane, Bandra West, Mumbai 400050</span></div>
        <div class="footer-contact-item"><span>📞</span><span>+91 98480 22338</span></div>
        <div class="footer-contact-item"><span>✉️</span><span>hello@riyaaroradesigns.com</span></div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2024 Riya Arora Designs. All rights reserved.</span>
      <div class="footer-social">
        <a href="#" aria-label="Instagram">📷</a>
        <a href="#" aria-label="Pinterest">📌</a>
        <a href="#" aria-label="WhatsApp">💬</a>
      </div>
    </div>
  </div>
</footer>
`;

// Inject nav and footer
document.getElementById('site-nav').innerHTML = NAVBAR_HTML;
document.getElementById('site-footer').innerHTML = FOOTER_HTML;

// Inner pages (not home) start with the navbar already white
const isHome = location.pathname.endsWith('index.html') || location.pathname === '/' || location.pathname.endsWith('/riya-arora-designs/');
if (!isHome) {
  document.querySelector('.navbar').classList.add('scrolled');
}
