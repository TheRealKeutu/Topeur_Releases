/* ============================================================
   Topeur — Scripts principaux
   ============================================================ */

/* ── Bascule français / anglais ───────────────────────────── */
(function () {
  const translations = {
    fr: {
      'meta.title': 'Topeur — Lecteur de conduite pour le spectacle vivant',
      'meta.description': "Topeur est un lecteur de conduite pour le théâtre, le spectacle vivant et l'événementiel. Audio, vidéo, MIDI, OSC, fades, attentes, groupes et scripts Lua.",
      'language.aria': 'Choix de la langue',
      'nav.features': 'Possibilités',
      'nav.cues': 'Types de cues',
      'nav.contact': 'Contact',
      'nav.download': 'Télécharger',
      'hero.eyebrow': 'Développement actif — version Beta',
      'hero.title': 'Le lecteur de conduite<br /><span>pour la scène.</span>',
      'hero.subtitle': 'Topeur permet de préparer un spectacle sous forme de liste de cues claire, puis de le jouer en direct avec un simple bouton <span class="mono">GO</span>. Audio, vidéo, attentes, fades, MIDI, OSC, notes, groupes et scripts Lua peuvent être organisés dans le même projet.',
      'hero.download': 'Télécharger Topeur',
      'hero.secondary': 'Voir ce que vous pouvez faire',
      'hero.screenshotAlt': 'Interface de Topeur — liste de cues, transport GO/PANIC, inspector',
      'features.label': 'Ce que vous pouvez faire',
      'features.title': 'Construire, organiser,<br />jouer en direct.',
      'features.desc': 'Préparez une conduite numérotée, déclenchez-la au plateau, routez vos médias et pilotez le reste de votre régie depuis un même projet.',
      'features.clearTitle': 'Conduite claire',
      'features.clearText': 'Construisez une liste de cues numérotée pour suivre le spectacle et lancer chaque action avec <span class="mono">GO</span>.',
      'features.mediaTitle': 'Audio et vidéo',
      'features.mediaText': 'Lisez des cues audio et vidéo, réglez les points In/Out, bouclez, figez la dernière image et choisissez les sorties.',
      'features.fadeTitle': 'Fondus et Auto-follow',
      'features.fadeText': 'Faites des fondus, masquez automatiquement les autres cues actifs et enchaînez les cues sans intervention.',
      'features.groupTitle': 'Groupes et attentes',
      'features.groupText': "Créez des attentes minutées et lancez plusieurs cues ensemble, l'une après l'autre ou dans un ordre aléatoire.",
      'features.controlTitle': 'MIDI, OSC et Lua',
      'features.controlText': 'Envoyez et recevez des actions MIDI ou OSC, et ajoutez des scripts Lua pour les besoins avancés.',
      'features.operatorTitle': 'Suivi opérateur',
      'features.operatorText': 'Ajoutez des cues texte, des notes opérateur et gardez les cues actives visibles pendant la représentation.',
      'cues.label': 'Types de cues',
      'cues.title': 'Cues combinables<br />et chaînables librement.',
      'cues.desc': 'Chaque élément sonore, chaque message de contrôle, chaque temporisation devient une cue numérotée. Enchaînez-les, groupez-les, automatisez-les.',
      'cue.audioTitle': 'Audio',
      'cue.audioText': 'Lisez des fichiers audio, réglez les points In/Out, bouclez, choisissez le volume et la sortie audio nommée.',
      'cue.videoBadge': 'VIDÉO',
      'cue.videoTitle': 'Vidéo',
      'cue.videoText': "Lisez une vidéo sur un écran choisi, bouclez, figez la dernière image, ajustez l'opacité et l'audio intégré.",
      'cue.fadeTitle': 'Fade',
      'cue.fadeText': 'Faites un fondu vers une cue audio ou vidéo, avec durée, cible et comportement de fin configurables.',
      'cue.waitTitle': 'Wait',
      'cue.waitText': 'Attendez une durée définie avant de continuer, avec un décompte clair pendant le spectacle.',
      'cue.textTitle': 'Texte',
      'cue.textText': 'Ajoutez des notes visibles, des repères opérateur ou des séparateurs dans la conduite.',
      'cue.midiTitle': 'MIDI',
      'cue.midiText': 'Envoyez des messages MIDI comme Note, Control Change, Program Change ou SysEx.',
      'cue.oscTitle': 'OSC',
      'cue.oscText': 'Envoyez des messages OSC sur le réseau, et recevez des actions OSC pour piloter la conduite.',
      'cue.groupBadge': 'GROUPE',
      'cue.groupTitle': 'Groupe',
      'cue.groupText': 'Lancez plusieurs cues ensemble, en séquence ou en aléatoire, selon le besoin de la scène.',
      'cue.scriptTitle': 'Script',
      'cue.scriptText': 'Lancez un script Lua pour automatiser des besoins avancés ou adapter Topeur à une régie particulière.',
      'show.label': 'En représentation',
      'show.title': 'Conçu pour garder<br />la conduite lisible.',
      'show.desc': 'Topeur rassemble les outils nécessaires au jeu en direct, du préchargement vidéo au suivi des cues actives.',
      'show.goTitle': 'GO central',
      'show.goText': 'Le spectacle se joue avec un bouton <span class="mono">GO</span>, sans chercher le bon média ou la bonne commande pendant la représentation.',
      'show.outputsTitle': 'Sorties dédiées',
      'show.outputsText': 'Routez les cues audio vers des sorties nommées et utilisez des sorties vidéo sur des écrans dédiés.',
      'show.preloadTitle': 'Préchargement vidéo',
      'show.preloadText': 'Préchargez les prochaines cues vidéo pour une lecture plus fluide au moment du déclenchement.',
      'show.activeTitle': 'Active Cues',
      'show.activeText': 'Suivez les cues actives pendant le spectacle et gardez une vision claire de ce qui joue encore.',
      'show.bilingualTitle': 'Interface bilingue',
      'show.bilingualText': "Utilisez l'interface en français ou en anglais selon l'équipe et le contexte de production.",
      'show.panicTitle': "PANIC d'urgence",
      'show.panicText': 'Appuyez sur <span class="mono">Échap</span> : fade out général en 3 secondes sur toutes les cues actives, puis arrêt complet.',
      'projects.label': 'Projets',
      'projects.title': 'Des dossiers portables<br />pour vos spectacles.',
      'projects.desc': 'Un projet Topeur est sauvegardé sous forme de dossier <span class="mono">.topeur</span>.<br />Il contient le fichier du spectacle et ses médias. Pour déplacer un spectacle, copiez simplement tout le dossier sur une autre machine.',
      'projects.tree': 'MonSpectacle.topeur/\n├── project.topeur\n└── Media/\n    ├── musique.wav\n    ├── ambiance.flac\n    └── intro.mp4',
      'compat.label': 'Compatibilité',
      'compat.title': 'Natif sur les trois<br />plateformes principales.',
      'compat.desc': 'Topeur sauvegarde des projets portables et prend en charge les formats média courants disponibles sur votre plateforme.',
      'compat.macosText': 'Intel &amp; Apple Silicon<br />audio, vidéo, MIDI, OSC',
      'compat.windowsText': 'x86_64<br />audio, vidéo, MIDI, OSC',
      'compat.windowsFormat': 'Installeur NSIS',
      'compat.linuxText': 'x86_64<br />audio, vidéo, MIDI, OSC',
      'compat.audioTitle': 'Médias audio supportés',
      'compat.audioText': 'WAV, MP3, FLAC, OGG, AIFF, M4A, Opus, AAC.',
      'compat.videoTitle': 'Médias vidéo supportés',
      'compat.videoText': 'Formats vidéo courants supportés par la plateforme, comme MP4, MOV et WebM.',
      'contact.label': 'Contact',
      'contact.title': 'Une question, une remarque,<br />un retour de terrain ?',
      'contact.desc': "Écrivez directement à l'adresse ci-dessous pour parler de Topeur, signaler un problème ou partager un besoin de production.",
      'contact.discord': 'Rejoindre le serveur Discord',
      'cta.title': 'Prêt à essayer Topeur ?',
      'cta.download': 'Télécharger la dernière version de Topeur',
      'footer.credit': 'Développé par Thomas Gouazé',
      'footer.contact': 'Contact',
      'footer.legal': 'Mentions légales',
      'footer.downloads': 'Téléchargements',
      'legal.label': 'Informations légales',
      'legal.title': 'Mentions légales',
      'legal.publisherTitle': 'Éditeur du site',
      'legal.publisherText': 'Ce site est édité par Thomas Gouazé.<br />Contact : topeurcues@gmail.com',
      'legal.hostTitle': 'Hébergement',
      'legal.hostText': 'GitHub, Inc.<br />88 Colin P. Kelly Jr St<br />San Francisco, CA 94107<br />USA<br />https://github.com',
      'legal.ipTitle': 'Propriété intellectuelle',
      'legal.ipText': "Les contenus présents sur ce site, notamment les textes, visuels, captures d'écran, noms et éléments graphiques liés à Topeur, sont protégés par le droit de la propriété intellectuelle. Toute reproduction ou réutilisation non autorisée est interdite.",
      'legal.privacyTitle': 'Données personnelles',
      'legal.privacyText': 'Ce site ne collecte pas de données personnelles directement via un formulaire. Les liens externes, notamment vers GitHub, peuvent appliquer leurs propres règles de confidentialité.',
      'ui.copyPreTitle': 'Cliquer pour copier'
    },
    en: {
      'meta.title': 'Topeur — Cue player for live performance',
      'meta.description': 'Topeur is a cue player for theatre, live performance, and events. Audio, video, MIDI, OSC, fades, waits, groups, and Lua scripts.',
      'language.aria': 'Language selection',
      'nav.features': 'Features',
      'nav.cues': 'Cue types',
      'nav.contact': 'Contact',
      'nav.download': 'Download',
      'hero.eyebrow': 'Active development — Beta version',
      'hero.title': 'The cue player<br /><span>for the stage.</span>',
      'hero.subtitle': 'Topeur lets you prepare a show as a clear cue list, then run it live with a single <span class="mono">GO</span> button. Audio, video, waits, fades, MIDI, OSC, notes, groups, and Lua scripts can all live in the same project.',
      'hero.download': 'Download Topeur',
      'hero.secondary': 'See what you can do',
      'hero.screenshotAlt': 'Topeur interface — cue list, GO/PANIC transport, inspector',
      'features.label': 'What you can do',
      'features.title': 'Build, organize,<br />run live.',
      'features.desc': 'Prepare a numbered cue list, trigger it on stage, route your media, and control the rest of your setup from one project.',
      'features.clearTitle': 'Clear cue list',
      'features.clearText': 'Build a numbered cue list to follow the show and launch each action with <span class="mono">GO</span>.',
      'features.mediaTitle': 'Audio and video',
      'features.mediaText': 'Play audio and video cues, set In/Out points, loop, freeze the last frame, and choose outputs.',
      'features.fadeTitle': 'Fades and Auto-follow',
      'features.fadeText': 'Create fades, automatically hide other active cues, and chain cues without intervention.',
      'features.groupTitle': 'Groups and waits',
      'features.groupText': 'Create timed waits and launch several cues together, one after another, or in a random order.',
      'features.controlTitle': 'MIDI, OSC and Lua',
      'features.controlText': 'Send and receive MIDI or OSC actions, and add Lua scripts for advanced needs.',
      'features.operatorTitle': 'Operator tracking',
      'features.operatorText': 'Add text cues and operator notes, and keep active cues visible during the performance.',
      'cues.label': 'Cue types',
      'cues.title': 'Cues you can combine<br />and chain freely.',
      'cues.desc': 'Every sound element, control message, and timing delay becomes a numbered cue. Chain them, group them, automate them.',
      'cue.audioTitle': 'Audio',
      'cue.audioText': 'Play audio files, set In/Out points, loop, choose volume, and route to a named audio output.',
      'cue.videoBadge': 'VIDEO',
      'cue.videoTitle': 'Video',
      'cue.videoText': 'Play video on a chosen screen, loop, freeze the last frame, adjust opacity, and use embedded audio.',
      'cue.fadeTitle': 'Fade',
      'cue.fadeText': 'Fade an audio or video cue with configurable duration, target, and end behavior.',
      'cue.waitTitle': 'Wait',
      'cue.waitText': 'Wait for a defined duration before continuing, with a clear countdown during the show.',
      'cue.textTitle': 'Text',
      'cue.textText': 'Add visible notes, operator marks, or separators inside the cue list.',
      'cue.midiTitle': 'MIDI',
      'cue.midiText': 'Send MIDI messages such as Note, Control Change, Program Change, or SysEx.',
      'cue.oscTitle': 'OSC',
      'cue.oscText': 'Send OSC messages over the network, and receive OSC actions to control the cue list.',
      'cue.groupBadge': 'GROUP',
      'cue.groupTitle': 'Group',
      'cue.groupText': 'Launch several cues together, sequentially, or randomly, depending on what the stage needs.',
      'cue.scriptTitle': 'Script',
      'cue.scriptText': 'Run a Lua script to automate advanced needs or adapt Topeur to a specific control room.',
      'show.label': 'During the show',
      'show.title': 'Designed to keep<br />the cue list readable.',
      'show.desc': 'Topeur brings together the tools needed for live playback, from video preloading to active cue tracking.',
      'show.goTitle': 'Central GO',
      'show.goText': 'The show runs from a <span class="mono">GO</span> button, without hunting for the right media or command during the performance.',
      'show.outputsTitle': 'Dedicated outputs',
      'show.outputsText': 'Route audio cues to named outputs and use video outputs on dedicated screens.',
      'show.preloadTitle': 'Video preloading',
      'show.preloadText': 'Preload upcoming video cues for smoother playback at trigger time.',
      'show.activeTitle': 'Active Cues',
      'show.activeText': 'Track active cues during the show and keep a clear view of what is still playing.',
      'show.bilingualTitle': 'Bilingual interface',
      'show.bilingualText': 'Use the interface in French or English depending on the team and production context.',
      'show.panicTitle': 'Emergency PANIC',
      'show.panicText': 'Press <span class="mono">Esc</span>: a global 3-second fade out on all active cues, then a full stop.',
      'projects.label': 'Projects',
      'projects.title': 'Portable folders<br />for your shows.',
      'projects.desc': 'A Topeur project is saved as a <span class="mono">.topeur</span> folder.<br />It contains the show file and its media. To move a show, simply copy the whole folder to another machine.',
      'projects.tree': 'MyShow.topeur/\n├── project.topeur\n└── Media/\n    ├── music.wav\n    ├── ambience.flac\n    └── intro.mp4',
      'compat.label': 'Compatibility',
      'compat.title': 'Native on the three<br />main platforms.',
      'compat.desc': 'Topeur saves portable projects and supports common media formats available on your platform.',
      'compat.macosText': 'Intel &amp; Apple Silicon<br />audio, video, MIDI, OSC',
      'compat.windowsText': 'x86_64<br />audio, video, MIDI, OSC',
      'compat.windowsFormat': 'NSIS installer',
      'compat.linuxText': 'x86_64<br />audio, video, MIDI, OSC',
      'compat.audioTitle': 'Supported audio media',
      'compat.audioText': 'WAV, MP3, FLAC, OGG, AIFF, M4A, Opus, AAC.',
      'compat.videoTitle': 'Supported video media',
      'compat.videoText': 'Common video formats supported by the platform, such as MP4, MOV, and WebM.',
      'contact.label': 'Contact',
      'contact.title': 'A question, a note,<br />feedback from the field?',
      'contact.desc': 'Write directly to the address below to talk about Topeur, report an issue, or share a production need.',
      'contact.discord': 'Join the Discord server',
      'cta.title': 'Ready to try Topeur?',
      'cta.download': 'Download the latest version of Topeur',
      'footer.credit': 'Developed by Thomas Gouazé',
      'footer.contact': 'Contact',
      'footer.legal': 'Legal notice',
      'footer.downloads': 'Downloads',
      'legal.label': 'Legal information',
      'legal.title': 'Legal notice',
      'legal.publisherTitle': 'Site publisher',
      'legal.publisherText': 'This site is published by Thomas Gouazé.<br />Contact: topeurcues@gmail.com',
      'legal.hostTitle': 'Hosting',
      'legal.hostText': 'GitHub, Inc.<br />88 Colin P. Kelly Jr St<br />San Francisco, CA 94107<br />USA<br />https://github.com',
      'legal.ipTitle': 'Intellectual property',
      'legal.ipText': 'The content on this site, including text, visuals, screenshots, names, and graphic elements related to Topeur, is protected by intellectual property law. Any unauthorized reproduction or reuse is prohibited.',
      'legal.privacyTitle': 'Personal data',
      'legal.privacyText': 'This site does not collect personal data directly through a form. External links, especially to GitHub, may apply their own privacy rules.',
      'ui.copyPreTitle': 'Click to copy'
    }
  };

  const supportedLangs = Object.keys(translations);
  const getStoredLang = () => {
    try {
      return localStorage.getItem('topeur-lang');
    } catch (_error) {
      return null;
    }
  };
  const setStoredLang = lang => {
    try {
      localStorage.setItem('topeur-lang', lang);
    } catch (_error) {}
  };
  const storedLang = getStoredLang();
  let currentLang = supportedLangs.includes(storedLang) ? storedLang : 'fr';

  function getText(key) {
    return translations[currentLang][key] || translations.fr[key] || '';
  }

  function applyLanguage(lang) {
    currentLang = supportedLangs.includes(lang) ? lang : 'fr';
    setStoredLang(currentLang);
    document.documentElement.lang = currentLang;
    document.title = getText('meta.title');

    document.querySelectorAll('[data-i18n]').forEach(element => {
      const text = getText(element.dataset.i18n);
      if (text) element.innerHTML = text;
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(element => {
      element.dataset.i18nAttr.split(',').forEach(binding => {
        const [attr, key] = binding.split(':').map(part => part.trim());
        const text = getText(key);
        if (attr && text) element.setAttribute(attr, text);
      });
    });

    document.querySelectorAll('[data-lang-switch]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.langSwitch === currentLang));
    });

    document.dispatchEvent(new CustomEvent('topeur:languagechange', { detail: { lang: currentLang } }));
  }

  document.querySelectorAll('[data-lang-switch]').forEach(button => {
    button.addEventListener('click', () => applyLanguage(button.dataset.langSwitch));
  });

  window.topeurI18n = { applyLanguage, getText };
  applyLanguage(currentLang);
})();

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
    '.philosophy__card, .cue-card, .feature-item, .compat__card, .project-box, .media-support > div, .dl-card, .prereq__card'
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
  const copyTitle = () => window.topeurI18n ? window.topeurI18n.getText('ui.copyPreTitle') : 'Cliquer pour copier';

  document.addEventListener('topeur:languagechange', () => {
    pres.forEach(pre => {
      pre.title = copyTitle();
    });
  });

  pres.forEach(pre => {
    pre.style.cursor = 'pointer';
    pre.title = copyTitle();

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
