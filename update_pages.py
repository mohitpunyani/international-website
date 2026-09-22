import re

# Shared nav HTML
NAV_HTML = '''
<!-- Nav Overlay -->
<div class="nav-overlay" id="navOverlay" onclick="closeMenu()"></div>

<!-- Navbar -->
<nav class="navbar" id="navbar">
  <div class="container">
    <div class="navbar-inner">
      <a href="index.html" class="nav-brand">
        <img src="assets/logo.png" alt="Tantia University Logo" />
        <div class="nav-brand-text">
          <div class="university-name">Tantia University</div>
          <div class="university-tagline">Sri Ganganagar, Rajasthan</div>
        </div>
      </a>
      <div class="nav-links">
        <a href="index.html" id="nl-home">Home</a>
        <a href="about.html" id="nl-about">About</a>
        <a href="academics.html" id="nl-academics">Academics</a>
        <a href="admissions.html" id="nl-admissions">Admissions</a>
        <a href="campus.html" id="nl-campus">Campus</a>
        <a href="student-life.html" id="nl-student">Student Life</a>
        <a href="contact.html" id="nl-contact">Contact</a>
      </div>
      <div class="nav-cta">
        <button class="btn-nav-outline" onclick="location.href=\'contact.html\'">Enquire</button>
        <button class="btn-nav-primary" onclick="location.href=\'admissions.html\'">Apply Now</button>
      </div>
      <div class="hamburger" id="hamburger" onclick="toggleMenu()" aria-label="Menu">
        <span></span><span></span><span></span>
      </div>
    </div>
  </div>
</nav>

<!-- Mobile Nav -->
<nav class="mobile-nav" id="mobileNav" aria-label="Mobile navigation">
  <button class="mobile-nav-close" onclick="closeMenu()" aria-label="Close">✕</button>
  <a href="index.html" onclick="closeMenu()">Home</a>
  <a href="about.html" onclick="closeMenu()">About</a>
  <a href="academics.html" onclick="closeMenu()">Academics</a>
  <a href="admissions.html" onclick="closeMenu()">Admissions</a>
  <a href="campus.html" onclick="closeMenu()">Campus</a>
  <a href="student-life.html" onclick="closeMenu()">Student Life</a>
  <a href="contact.html" onclick="closeMenu()">Contact</a>
  <a href="admissions.html" class="mobile-nav-apply" onclick="closeMenu()">Apply Now 2025–26 →</a>
</nav>
'''

FOOTER_HTML = '''
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <img src="assets/logo.png" alt="Tantia University Logo" />
        <div class="footer-brand-name">Tantia University</div>
        <div class="footer-brand-tagline">Excellence · Innovation · Achievement</div>
        <p class="footer-desc">A premier multidisciplinary institution shaping global leaders through world-class education & research since 1999.</p>
        <div class="footer-socials">
          <div class="social-icon">f</div>
          <div class="social-icon">𝕏</div>
          <div class="social-icon">📸</div>
          <div class="social-icon">in</div>
          <div class="social-icon">▶</div>
        </div>
      </div>
      <div class="footer-col"><h4>Quick Links</h4><ul>
        <li><a href="about.html">About Us</a></li>
        <li><a href="academics.html">Academics</a></li>
        <li><a href="admissions.html">Admissions</a></li>
        <li><a href="campus.html">Campus</a></li>
        <li><a href="student-life.html">Student Life</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul></div>
      <div class="footer-col"><h4>Programs</h4><ul>
        <li><a href="academics.html#medical">Medical Sciences</a></li>
        <li><a href="academics.html#engineering">Engineering</a></li>
        <li><a href="academics.html#management">Management</a></li>
        <li><a href="academics.html#law">Law</a></li>
        <li><a href="academics.html#agriculture">Agriculture</a></li>
        <li><a href="academics.html#pharma">Pharmacy</a></li>
      </ul></div>
      <div class="footer-col"><h4>Contact</h4><ul>
        <li><a href="#">📍 Sri Ganganagar, Rajasthan 335002</a></li>
        <li><a href="tel:+911544297019">📞 +91-1544-297019</a></li>
        <li><a href="mailto:international@tantiauniversity.com">✉️ international@tantiauniversity.com</a></li>
        <li><a href="https://www.tantiauniversity.com" target="_blank">🌐 tantiauniversity.com</a></li>
      </ul></div>
    </div>
  </div>
  <div class="container">
    <div class="footer-bottom">
      <span>© 2025 Tantia University. All rights reserved.</span>
      <div class="footer-bottom-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
      </div>
    </div>
  </div>
</footer>
'''

LOADER_HTML = '''<div class="loader-screen" id="loader">
  <img src="assets/logo.png" alt="Tantia University" class="loader-logo" />
  <div class="loader-ring"></div>
  <div class="loader-text">Loading</div>
</div>'''

pages = ['about.html','academics.html','admissions.html','campus.html','student-life.html','contact.html']
image_updates = [
    ('assets/tantia_logo.jpg', 'assets/logo.png'),
    ('assets/students_global.jpg', 'assets/campus_students.jpg'),
]

import os
base = '/Users/mohitpunyani/International-website'

for page in pages:
    path = os.path.join(base, page)
    with open(path, 'r') as f:
        content = f.read()
    
    # Update images
    for old, new in image_updates:
        content = content.replace(old, new)
    
    # Update loader
    old_loader = re.search(r'<div class="loader-screen".*?</div>', content, re.DOTALL)
    if old_loader:
        content = content[:old_loader.start()] + LOADER_HTML + content[old_loader.end():]
    
    # Update old nav (remove old mobile-nav and navbar, insert new)
    # Replace old navbar section with new one
    content = re.sub(r'<!-- Nav Overlay -->.*?<!-- Mobile Nav -->.*?</nav>', '', content, flags=re.DOTALL)
    content = re.sub(r'<nav class="navbar".*?</nav>\s*<div class="mobile-nav".*?</div>', NAV_HTML, content, flags=re.DOTALL)
    
    # Update footer
    content = re.sub(r'<footer class="site-footer">.*?</footer>', FOOTER_HTML, content, flags=re.DOTALL)
    
    # Update script src
    content = content.replace('<script>\n  // Loader', '<script src="main.js"></script>\n<script>\n  // Loader')
    
    # Add nav overlay CSS var fix
    content = content.replace('font-size: 13px;\n      color: rgba(255,255,255,0.6);', 'font-size: 13px;\n      color: rgba(255,255,255,0.6);')
    
    with open(path, 'w') as f:
        f.write(content)
    print(f'Updated {page}')

print('All pages updated!')
