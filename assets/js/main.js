/* ============================================================
   QCue — Scripts principaux
   ============================================================ */

/* ── Nav : effet de scroll ──────────────────────────────────── */
(function () {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  function updateNav() {
    if (window.scrollY > 20) {
      nav.style.borderBottomColor = 'var(--border)';
    } else {
      nav.style.borderBottomColor = 'transparent';
    }
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();
})();

/* ── Lien actif dans la nav ─────────────────────────────────── */
(function () {
  const links = document.querySelectorAll('.nav__links a');
  const current = window.location.pathname.split('/').pop() || 'index.html';

  links.forEach(link => {
    const href = link.getAttribute('href').split('#')[0] || 'index.html';
    if (href === current) {
      link.style.color = 'var(--text-primary)';
    }
  });
})();

/* ── Highlight de section active au scroll (nav links) ─────── */
(function () {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__links a[href^="#"]');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        const isActive = link.getAttribute('href') === `#${id}`;
        link.style.color = isActive ? 'var(--text-primary)' : '';
        link.style.background = isActive ? 'var(--bg-elevated)' : '';
      });
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => observer.observe(s));
})();

/* ── Animation d'entrée des cards au scroll ─────────────────── */
(function () {
  const cards = document.querySelectorAll(
    '.philosophy__card, .cue-card, .feature-item, .compat__card, .dl-card, .prereq__card'
  );
  if (!cards.length) return;

  // Style initial
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(16px)';
    card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1 });

  // Délai en cascade par groupe
  const groups = {};
  cards.forEach(card => {
    const parent = card.parentElement;
    if (!groups[parent]) groups[parent] = [];
    groups[parent].push(card);
  });

  Object.values(groups).forEach(group => {
    group.forEach((card, i) => {
      card.style.transitionDelay = `${i * 60}ms`;
      observer.observe(card);
    });
  });
})();

/* ── Copie des commandes au clic (page téléchargements) ─────── */
(function () {
  const pres = document.querySelectorAll('pre');
  pres.forEach(pre => {
    pre.style.cursor = 'pointer';
    pre.title = 'Cliquer pour copier';

    pre.addEventListener('click', () => {
      const text = pre.textContent.trim();
      navigator.clipboard.writeText(text).then(() => {
        const orig = pre.style.borderColor;
        pre.style.borderColor = 'var(--go)';
        setTimeout(() => { pre.style.borderColor = orig; }, 800);
      }).catch(() => {});
    });
  });
})();
