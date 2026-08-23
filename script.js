/* ============================================================================
   GYM WEBSITE TEMPLATE — script.js
   ============================================================================
   This file has two jobs:
     1. RENDER  — read window.GYM_CONFIG (config.js) and build every
                  gym-specific piece of content into the page.
     2. BEHAVE  — the shared interactive logic (nav, menu, reveals, slider,
                  counters, form) that is identical for every client site.

   You should not need to edit this file to rebrand a client's site —
   change config.js instead. Only edit this file if you are changing how
   the template itself behaves.
   ============================================================================ */

/* Inline icon library used by the Services section. Reference an icon by
   key from config.js (services[].icon). Add more keys here if a client
   needs a service type not already covered. */
const ICON_LIBRARY = {
  strength: '<svg viewBox="0 0 48 48" fill="none"><path d="M6 24h4M38 24h4M14 24h20M10 16v16M38 16v16M16 12v24M32 12v24" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>',
  cardio: '<svg viewBox="0 0 48 48" fill="none"><path d="M6 26h6l4-14 6 24 4-16 3 6h13" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  personal: '<svg viewBox="0 0 48 48" fill="none"><circle cx="16" cy="12" r="4" stroke="currentColor" stroke-width="2.5"/><path d="M16 16v10l-6 14M16 26l7 4 5 12M16 22l10-2 6-8" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  functional: '<svg viewBox="0 0 48 48" fill="none"><path d="M24 6l4 8 9 1-6.5 6.5L32 30l-8-4.5L16 30l1.5-8.5L11 15l9-1z" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/><path d="M12 38h24" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>',
  boxing: '<svg viewBox="0 0 48 48" fill="none"><path d="M14 22V14a6 6 0 0 1 12 0v2a5 5 0 0 1 10 0v10c0 6-4 12-11 12s-11-5-11-11" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 22a5 5 0 0 1 0-10" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>',
  yoga: '<svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="10" r="4" stroke="currentColor" stroke-width="2.5"/><path d="M24 14v10M24 24l-12 14M24 24l12 14M14 30h20" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
};

const SOCIAL_ICON_LIBRARY = {
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M15 8h-2a2 2 0 0 0-2 2v10M9 13h6"/><path d="M15 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h9"/></svg>',
  twitter: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 4l16 16M20 4L4 20"/></svg>',
  youtube: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="6" width="20" height="12" rx="4"/><path d="M11 10l4 2-4 2z" fill="currentColor"/></svg>'
};

function digitsOnly(str) {
  return (str || '').replace(/[^0-9]/g, '');
}

function isRealUrl(str) {
  return typeof str === 'string' && /^https?:\/\//i.test(str.trim());
}

/* ============================================================
   RENDER FUNCTIONS — one per section, each reads `cfg` and
   writes into its own mount point(s). Order doesn't matter
   between render functions; each grabs its own DOM elements.
============================================================ */

function hexToRgbString(hex) {
  const clean = (hex || '').replace('#', '');
  const full = clean.length === 3 ? clean.split('').map(ch => ch + ch).join('') : clean;
  const r = parseInt(full.substring(0, 2), 16);
  const g = parseInt(full.substring(2, 4), 16);
  const b = parseInt(full.substring(4, 6), 16);
  if ([r, g, b].some(n => Number.isNaN(n))) return '255, 255, 255';
  return `${r}, ${g}, ${b}`;
}

function applyColors(cfg) {
  const root = document.documentElement.style;
  const c = cfg.colors;
  root.setProperty('--accent-1', c.accentPrimary);
  root.setProperty('--accent-2', c.accentSecondary);
  root.setProperty('--accent-1-rgb', hexToRgbString(c.accentPrimary));
  root.setProperty('--accent-2-rgb', hexToRgbString(c.accentSecondary));
  root.setProperty('--accent-grad', `linear-gradient(100deg, ${c.accentPrimary}, ${c.accentSecondary})`);
  root.setProperty('--bg', c.bgPrimary);
  root.setProperty('--surface', c.bgSurface);
  root.setProperty('--surface-2', c.bgSurface2);
  root.setProperty('--surface-3', c.bgSurface3);
  root.setProperty('--line', c.borderLine);
  root.setProperty('--text', c.textPrimary);
  root.setProperty('--text-dim', c.textDim);
  root.setProperty('--text-faint', c.textFaint);
}

function renderMeta(cfg) {
  document.title = `${cfg.brand.name} — Premium Gym`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', cfg.brand.tagline);
}

function renderNav(cfg) {
  const logoMount = document.getElementById('navLogoMount');
  logoMount.innerHTML = `
    <span class="nav-logo-mark">${cfg.brand.logoInitial}</span>
    <span class="nav-logo-text">${cfg.brand.name}<span class="nav-logo-sub">${cfg.brand.tagline}</span></span>
  `;

  const navLinks = document.getElementById('navLinks');
  const linksHtml = cfg.nav.map((item, i) =>
    `<a href="${item.href}" class="nav-link${i === 0 ? ' active' : ''}">${item.label}</a>`
  ).join('');
  navLinks.innerHTML = linksHtml +
    `<a href="${cfg.hero.ctaPrimary.href}" class="btn btn-accent nav-cta">${cfg.navCtaLabel}</a>`;
}

function renderHero(cfg) {
  const h = cfg.hero;

  document.getElementById('heroImg').style.backgroundImage = `url('${h.backgroundImage}')`;

  document.getElementById('heroContentMount').innerHTML = `
    <p class="eyebrow"><span class="eyebrow-line"></span>${h.eyebrow}</p>
    <h1 class="hero-title">${h.titleLine1}<br><span class="text-accent">${h.titleAccent}</span></h1>
    <p class="hero-desc">${h.description}</p>
    <div class="hero-actions">
      <a href="${h.ctaPrimary.href}" class="btn btn-accent btn-lg">${h.ctaPrimary.label}</a>
      <a href="${h.ctaSecondary.href}" class="btn btn-outline btn-lg">${h.ctaSecondary.label}</a>
    </div>
  `;

  document.getElementById('heroStatsMount').innerHTML = h.stats.map(s => `
    <div class="hero-stat">
      <span class="stat-num" data-count="${s.value}" data-suffix="${s.suffix || ''}">0</span>
      <span class="stat-label">${s.label}</span>
    </div>
  `).join('');
}

function renderAbout(cfg) {
  const a = cfg.about;

  document.getElementById('aboutMediaMount').innerHTML = `
    <div class="about-img-main" style="background-image:url('${a.imageMain}')"></div>
    <div class="about-img-accent" style="background-image:url('${a.imageAccent}')"></div>
    <div class="plate-badge">
      <span class="plate-num">EST.</span>
      <span class="plate-year">${cfg.brand.establishedYear}</span>
    </div>
  `;

  const paragraphsHtml = a.paragraphs.map(p => `<p class="section-text">${p}</p>`).join('');
  const pointsHtml = a.points.map(pt => `<li><span class="point-icon">✓</span> ${pt}</li>`).join('');

  document.getElementById('aboutCopyMount').innerHTML = `
    <p class="section-tag">${a.tag}</p>
    <h2 class="section-title">${a.title}</h2>
    ${paragraphsHtml}
    <ul class="about-points">${pointsHtml}</ul>
    <a href="${a.ctaHref}" class="btn btn-accent">${a.ctaLabel}</a>
  `;
}

function renderServices(cfg) {
  document.getElementById('servicesTag').textContent = cfg.servicesTag;
  document.getElementById('servicesTitle').textContent = cfg.servicesTitle;
  document.getElementById('servicesSubtitle').textContent = cfg.servicesSubtitle;

  document.getElementById('servicesGrid').innerHTML = cfg.services.map((s, i) => `
    <article class="service-card reveal">
      <div class="service-icon">${ICON_LIBRARY[s.icon] || ICON_LIBRARY.strength}</div>
      <span class="service-index">${String(i + 1).padStart(2, '0')}</span>
      <h3>${s.title}</h3>
      <p>${s.description}</p>
      <a href="#membership" class="service-link">Explore program →</a>
    </article>
  `).join('');
}

function renderMembership(cfg) {
  document.getElementById('membershipTag').textContent = cfg.membershipTag;
  document.getElementById('membershipTitle').textContent = cfg.membershipTitle;
  document.getElementById('membershipSubtitle').textContent = cfg.membershipSubtitle;

  document.getElementById('pricingGrid').innerHTML = cfg.membership.map(plan => {
    const featuresHtml = plan.features.map(f =>
      `<li class="${f.included ? '' : 'feature-off'}">${f.text}</li>`
    ).join('');
    const badgeHtml = plan.featured && plan.badge ? `<span class="price-badge">${plan.badge}</span>` : '';
    const btnClass = plan.featured ? 'btn-accent' : 'btn-outline';
    return `
      <div class="price-card${plan.featured ? ' price-featured' : ''} reveal">
        ${badgeHtml}
        <h3 class="price-name">${plan.name}</h3>
        <p class="price-desc">${plan.description}</p>
        <div class="price-amount"><span class="price-currency">${cfg.currencySymbol}</span>${plan.price}<span class="price-period">${plan.period}</span></div>
        <ul class="price-features">${featuresHtml}</ul>
        <a href="${plan.ctaHref}" class="btn ${btnClass} btn-block">${plan.ctaLabel}</a>
      </div>
    `;
  }).join('');
}

function renderTrainers(cfg) {
  document.getElementById('trainersTag').textContent = cfg.trainersTag;
  document.getElementById('trainersTitle').textContent = cfg.trainersTitle;
  document.getElementById('trainersSubtitle').textContent = cfg.trainersSubtitle;

  document.getElementById('trainersGrid').innerHTML = cfg.trainers.map(t => {
    const igLink = t.instagram ? `<a href="${t.instagram}" target="_blank" rel="noopener" aria-label="Instagram">IG</a>` : '';
    const twLink = t.twitter ? `<a href="${t.twitter}" target="_blank" rel="noopener" aria-label="X">X</a>` : '';
    return `
      <article class="trainer-card reveal">
        <div class="trainer-img" style="background-image:url('${t.image}')"></div>
        <div class="trainer-info">
          <h3>${t.name}</h3>
          <span class="trainer-role">${t.role}</span>
          <p>${t.bio}</p>
          <div class="trainer-social">${igLink}${twLink}</div>
        </div>
      </article>
    `;
  }).join('');
}

function renderGallery(cfg) {
  document.getElementById('galleryTag').textContent = cfg.galleryTag;
  document.getElementById('galleryTitle').textContent = cfg.galleryTitle;

  document.getElementById('galleryGrid').innerHTML = cfg.gallery.map(g => `
    <div class="gallery-item reveal" style="background-image:url('${g.image}')"><span>${g.caption}</span></div>
  `).join('');
}

function renderTestimonials(cfg) {
  document.getElementById('testimonialsTag').textContent = cfg.testimonialsTag;
  document.getElementById('testimonialsTitle').textContent = cfg.testimonialsTitle;

  document.getElementById('testiTrack').innerHTML = cfg.testimonials.map(t => `
    <div class="testi-card">
      <div class="testi-stars">${'★'.repeat(t.rating)}${'☆'.repeat(5 - t.rating)}</div>
      <p class="testi-quote">${t.quote}</p>
      <div class="testi-author">
        <span class="testi-name">${t.name}</span>
        <span class="testi-since">${t.meta}</span>
      </div>
    </div>
  `).join('');
}

function renderContact(cfg) {
  const c = cfg.contact;

  const hoursHtml = c.hours.map(h => `${h.days}: ${h.time}`).join('<br>');

  document.getElementById('contactInfoMount').innerHTML = `
    <p class="section-tag">${c.tag}</p>
    <h2 class="section-title">${c.title}</h2>
    <p class="section-text">${c.description}</p>
    <div class="contact-items">
      <div class="contact-item">
        <span class="contact-icon">☎</span>
        <div><span class="contact-label">Phone</span><span class="contact-value"><a href="${c.phoneHref}">${c.phoneDisplay}</a></span></div>
      </div>
      <div class="contact-item">
        <span class="contact-icon">✉</span>
        <div><span class="contact-label">Email</span><span class="contact-value"><a href="mailto:${c.email}">${c.email}</a></span></div>
      </div>
      <div class="contact-item">
        <span class="contact-icon">⚑</span>
        <div><span class="contact-label">Location</span><span class="contact-value">${c.address}</span></div>
      </div>
      <div class="contact-item">
        <span class="contact-icon">⏱</span>
        <div><span class="contact-label">Hours</span><span class="contact-value">${hoursHtml}</span></div>
      </div>
    </div>
  `;

  const mapMount = document.getElementById('mapEmbedMount');
  if (isRealUrl(c.mapEmbedUrl)) {
    mapMount.innerHTML = `<iframe src="${c.mapEmbedUrl}" title="Gym location map" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
  } else {
    mapMount.innerHTML = `<div class="map-embed-fallback">Add your Google Maps "Embed a map" link to<br>contact.mapEmbedUrl in config.js</div>`;
  }
}

function renderFooter(cfg) {
  document.getElementById('footerGymName').textContent = cfg.brand.name;

  const socialLinksHtml = Object.keys(SOCIAL_ICON_LIBRARY).map(key => {
    const url = cfg.social[key];
    if (!url) return '';
    return `<a href="${url}" target="_blank" rel="noopener" aria-label="${key}">${SOCIAL_ICON_LIBRARY[key]}</a>`;
  }).join('');

  document.getElementById('footerBrandMount').innerHTML = `
    <a href="#home" class="nav-logo">
      <span class="nav-logo-mark">${cfg.brand.logoInitial}</span>
      <span class="nav-logo-text">${cfg.brand.name}<span class="nav-logo-sub">${cfg.brand.tagline}</span></span>
    </a>
    <p>${cfg.brand.tagline}</p>
    <div class="footer-social">${socialLinksHtml}</div>
  `;

  const navLinksHtml = cfg.nav.filter(n => n.href !== '#home').map(n =>
    `<a href="${n.href}">${n.label}</a>`
  ).join('');
  document.getElementById('footerNavMount').innerHTML = `<h4>Navigate</h4>${navLinksHtml}`;

  const serviceLinksHtml = cfg.services.map(s =>
    `<a href="#services">${s.title}</a>`
  ).join('');
  document.getElementById('footerServicesMount').innerHTML = `<h4>Programs</h4>${serviceLinksHtml}`;

  const hoursHtml = cfg.contact.hours.map(h =>
    `<span class="footer-static">${h.days}: ${h.time}</span>`
  ).join('');
  document.getElementById('footerHoursMount').innerHTML = `<h4>Hours</h4>${hoursHtml}`;
}

function renderWhatsapp(cfg) {
  const btn = document.getElementById('whatsappFloat');
  const digits = digitsOnly(cfg.contact.whatsappNumber);
  if (!digits) {
    btn.classList.add('hidden');
    return;
  }
  const message = encodeURIComponent(cfg.contact.whatsappPrefilledMessage || '');
  btn.href = `https://wa.me/${digits}?text=${message}`;
}

/* ============================================================
   BEHAVIOR — shared interactive logic, identical across all
   client sites. Each function grabs its own DOM references so
   none of this depends on render order or variable hoisting.
============================================================ */

function initScrollSpyAndNav() {
  const navbar = document.getElementById('navbar');
  const scrollProgress = document.getElementById('scrollProgress');
  const backToTop = document.getElementById('backToTop');
  const sections = Array.from(document.querySelectorAll('section[id]'));
  const navAnchors = Array.from(document.querySelectorAll('.nav-link'));

  function updateActiveNavLink() {
    const scrollPos = window.scrollY + 140;
    let currentId = sections[0] ? sections[0].id : '';
    sections.forEach(section => {
      if (scrollPos >= section.offsetTop) currentId = section.id;
    });
    navAnchors.forEach(a => {
      const href = a.getAttribute('href').replace('#', '');
      a.classList.toggle('active', href === currentId);
    });
  }

  function onScroll() {
    const y = window.scrollY;
    navbar.classList.toggle('scrolled', y > 40);
    backToTop.classList.toggle('show', y > 600);

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (y / docHeight) * 100 : 0;
    scrollProgress.style.width = pct + '%';

    updateActiveNavLink();
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  function closeMenu() {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

function initReveal() {
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  revealEls.forEach(el => revealObserver.observe(el));
}

function initCounters() {
  const heroStats = document.querySelector('.hero-stats');
  if (!heroStats) return;
  let started = false;

  function animateCounters() {
    document.querySelectorAll('.stat-num').forEach(el => {
      const target = parseInt(el.getAttribute('data-count'), 10) || 0;
      const suffix = el.getAttribute('data-suffix') || '';
      const duration = 1600;
      const start = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target).toLocaleString() + suffix;
        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          el.textContent = target.toLocaleString() + suffix;
        }
      }
      requestAnimationFrame(tick);
    });
  }

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        started = true;
        animateCounters();
        statsObserver.disconnect();
      }
    });
  }, { threshold: 0.4 });
  statsObserver.observe(heroStats);
}

function initSparkField() {
  const field = document.getElementById('sparkField');
  if (!field) return;
  const count = window.innerWidth < 640 ? 14 : 28;
  for (let i = 0; i < count; i++) {
    const span = document.createElement('span');
    span.style.left = (Math.random() * 100) + '%';
    span.style.animationDuration = (8 + Math.random() * 10) + 's';
    span.style.animationDelay = (Math.random() * 14) + 's';
    const size = 2 + Math.random() * 3;
    span.style.width = size + 'px';
    span.style.height = size + 'px';
    field.appendChild(span);
  }
}

function initTestimonialSlider() {
  const testiTrack = document.getElementById('testiTrack');
  const testiDotsWrap = document.getElementById('testiDots');
  const testiPrev = document.getElementById('testiPrev');
  const testiNext = document.getElementById('testiNext');
  if (!testiTrack) return;

  const slides = Array.from(testiTrack.children);
  if (slides.length === 0) return;
  let current = 0;

  testiDotsWrap.innerHTML = '';
  slides.forEach((_, i) => {
    const dot = document.createElement('span');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goTo(i));
    testiDotsWrap.appendChild(dot);
  });
  const dots = Array.from(testiDotsWrap.children);

  function goTo(index) {
    current = (index + slides.length) % slides.length;
    testiTrack.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  testiPrev.addEventListener('click', () => goTo(current - 1));
  testiNext.addEventListener('click', () => goTo(current + 1));

  let autoplay = setInterval(() => goTo(current + 1), 6000);
  const slider = document.querySelector('.testi-slider');
  slider.addEventListener('mouseenter', () => clearInterval(autoplay));
  slider.addEventListener('mouseleave', () => {
    autoplay = setInterval(() => goTo(current + 1), 6000);
  });
}

function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  const formNote = document.getElementById('formNote');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('fname').value.trim();
    formNote.textContent = `Thanks${name ? ', ' + name : ''} — we'll be in touch within 24 hours.`;
    contactForm.reset();
    setTimeout(() => { formNote.textContent = ''; }, 6000);
  });
}

function initFooterYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

/* ============================================================
   BOOT — render everything from config, then wire up behavior.
   Render must run first: the behavior functions above query
   elements (like .reveal cards and testimonial slides) that
   only exist once the render functions have injected them.
============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  const cfg = window.GYM_CONFIG;

  applyColors(cfg);
  renderMeta(cfg);
  renderNav(cfg);
  renderHero(cfg);
  renderAbout(cfg);
  renderServices(cfg);
  renderMembership(cfg);
  renderTrainers(cfg);
  renderGallery(cfg);
  renderTestimonials(cfg);
  renderContact(cfg);
  renderFooter(cfg);
  renderWhatsapp(cfg);
  initFooterYear();

  initScrollSpyAndNav();
  initHamburger();
  initReveal();
  initCounters();
  initSparkField();
  initTestimonialSlider();
  initContactForm();
});
