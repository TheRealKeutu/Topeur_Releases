# Topeur_Releases
Releases for Topeur

# Topeur

**Topeur** est un lecteur de conduite professionnel pour le théâtre et l'événementiel. Il permet de créer, organiser et déclencher des séquences de cues — audio, vidéo, MIDI, OSC, effets de fade, temporisations, scripts — depuis une interface graphique intuitive et réactive.

> **Projet en développement actif.** Les fonctionnalités principales sont stables et utilisables en production ; de nouvelles capacités sont ajoutées régulièrement sur la branche `dev`.

---

## Concept et philosophie

Topeur repose sur une idée simple : la conduite d'un spectacle doit être **fiable, lisible et rapide à exécuter**. L'opérateur ne doit pas penser à l'outil — il doit penser au spectacle, peu importe quel ordinateur il a à sa disposition. Mac, PC, Linux : Topeur fonctionne partout.

Chaque élément — son, image, message de contrôle, temporisation — devient une **cue** numérotée dans une liste. L'appui sur `Espace` (GO) déclenche la suivante. C'est tout. Le reste — enchaînements automatiques, fondus croisés audio et vidéo, synchronisation MIDI et OSC — se configure à l'avance dans l'Inspector et se joue ensuite sans intervention.

La philosophie du projet tient en quelques principes :

- **Prévisibilité** : ce qui est configuré est ce qui se joue. Aucun comportement caché.
- **Robustesse** : l'audio, la vidéo et le MIDI tournent dans des threads dédiés, indépendants de l'interface. Un ralentissement graphique n'affecte pas la lecture.
- **Portabilité** : un projet est un bundle autonome. Copiez le dossier sur une autre machine, ouvrez-le, jouez.
- **Interopérabilité** : Topeur parle MIDI et OSC nativement — les deux protocoles standard de l'industrie du spectacle.

---

## Fonctionnalités

### Types de cues

| Type | Description |
|---|---|
| **Audio** | Lecture de fichiers audio (WAV, MP3, FLAC, OGG, AIFF, M4A, Opus, AAC) avec contrôle de volume, points In/Out sample-accurate, boucle sans coupure, routage sur sortie nommée |
| **Vidéo** | Lecture de fichiers vidéo sur une fenêtre de sortie dédiée (plein écran, multi-moniteur), avec points In/Out, boucle, opacité, Freeze at End, audio embarqué routé via CPAL et fondu croisé |
| **Fade** | Transition de volume vers une cue audio ou groupe cible, avec durée et volume cible configurables — option d'arrêt automatique en fin de fade |
| **Wait** | Pause minutée avec décompte visuel ; s'enchaîne automatiquement sur la cue suivante |
| **MIDI** | Envoi d'un message MIDI (Note On/Off, Control Change, Program Change, SysEx) sur le port de sortie configuré |
| **OSC** | Envoi d'un message Open Sound Control via UDP vers n'importe quelle adresse réseau, avec arguments typés (Int, Float, String, Bool) |
| **Groupe** | Regroupe plusieurs cues en un bloc pouvant s'exécuter en simultané, en séquentiel ou en ordre aléatoire — avec option de bouclage interne et volume maître de groupe |
| **Texte** | Marqueur visuel silencieux dans la liste — note de scène, séparateur, annotation |
| **Script** | Script Lua exécuté à la volée, avec accès à l'API Topeur (`topeur.go`, `topeur.wait`, `topeur.wait_finished`, envoi OSC) |

### Lecture et enchaînement

- **GO** `Espace` — déclenche la prochaine cue
- **PANIC** `Échap` — fade out d'urgence de toutes les cues actives en 3 secondes, puis arrêt (audio + vidéo)
- **STOP** — arrêt immédiat de toutes les cues
- **Pause / Reprise** — met en pause et reprend une cue audio, vidéo ou groupe (propage aux enfants)
- **Fade out sélection** — fade out de la cue sélectionnée (audio, vidéo, ou enfants d'un groupe)
- **AutoFollow** — à la fin d'une cue, enchaîne automatiquement sur la suivante (ou sur une cue cible précise)
- **Fade Others** — fondu automatique des autres cues en cours lors du déclenchement d'une nouvelle cue, durée configurable ; fondu croisé vidéo natif

### Routage audio multi-sortie

Topeur gère des **sorties nommées** (Main LR, Monitors, FOH, etc.) associées à des canaux physiques de votre interface audio. Chaque cue peut être routée indépendamment vers n'importe quelle sortie nommée — sans patch, sans console logicielle intermédiaire.

### Routage vidéo multi-écran

Les **sorties vidéo** sont configurées dans Préférences → Vidéo. Chaque sortie est associée à un moniteur physique et ouvre une fenêtre plein écran dédiée. Plusieurs cues vidéo peuvent tourner simultanément sur des sorties différentes. L'opacité et le fondu croisé sont gérés par l'engine.

### Format de projet

Un projet Topeur est un **bundle** — un dossier contenant le fichier de données et les médias associés :

```
MonSpectacle.topeur/
├── project.topeur        ← données du projet (JSON)
└── Media/
    ├── ambiance.wav
    ├── musique.flac
    ├── intro.mp4
    └── …
```

Les chemins sont **relatifs** à l'intérieur du bundle : un projet copié sur clé USB ou transféré sur une autre machine s'ouvre directement, sans reconfigurer les liens. Les fichiers de cache de forme d'onde (`.qcpk`) sont générés automatiquement en arrière-plan et embarqués dans le bundle.

---

## Architecture technique

### Moteur de cues (CueRunner)

Le CueRunner tourne dans un thread Rust dédié et centralise toutes les mutations d'état des cues. Le frontend ne calcule ni ne déduit aucun état de lecture — il reçoit des événements typés (`CueEvent`) et les affiche.

```
Frontend (Svelte) ──[invoke]──▶ CueRunner (Rust thread)
                  ◀──[event]──  CueRunner → AudioEngine / VideoEngine / ...
```

### Moteur audio (CPAL)

L'audio passe par **CPAL** avec une sortie configurable (interface audio, canal). Chaque cue audio obtient une voix indépendante. Fade, boucle gapless et seek sont temps-réel dans le thread audio — sans latence de bloc.

### Moteur vidéo (HTML backend)

La vidéo est rendue dans une **fenêtre Tauri dédiée** (HTML5 `<video>`) par écran de sortie. L'audio embarqué des vidéos est extrait et routé séparément via CPAL pour bénéficier du même routage multi-sortie que les cues audio.

### Scripts Lua

Les cues Script utilisent un moteur **Lua** embarqué avec accès à une API Topeur (`topeur.go(id)`, `topeur.wait(secs)`, `topeur.wait_finished(id)`, envoi de messages OSC). Chaque script tourne dans un thread isolé.

---

## Compatibilité OS

| Plateforme | Format distribué | Spécificités |
|---|---|---|
| **macOS** (Intel + Apple Silicon) | `.app` bundle | Bundle `.topeur` double-cliquable, comme sous QLab |
| **Windows** (x86_64) | Installeur NSIS | Association de fichiers `.topeur` à l'installation |
| **Linux** (x86_64) | AppImage / .deb | Requiert ALSA et WebKit2GTK |

**MIDI** : drivers natifs CoreMIDI (macOS), ALSA (Linux), MME (Windows) via `midir`.

**OSC** : UDP pur — fonctionne sur tout réseau local entre n'importe quels OS et équipements (QLab, consoles lumière, serveurs vidéo, etc.).

**Projets** : le format bundle étant un simple dossier avec un JSON, un projet créé sur macOS s'ouvre sans modification sur Windows ou Linux.

---

## Raccourcis clavier

| Raccourci | Action |
|---|---|
| `Espace` | GO — déclencher la cue suivante |
| `Échap` | PANIC — fade out général d'urgence |
| `↑` / `↓` | Naviguer dans la liste |
| `Cmd+N` | Nouveau projet |
| `Cmd+O` | Ouvrir un projet |
| `Cmd+S` | Enregistrer |
| `Cmd+Shift+S` | Enregistrer sous… |
| `Cmd+Z` | Annuler |
| `Cmd+C` / `Cmd+V` | Copier / Coller le cue |
| `Cmd+Backspace` | Supprimer le cue sélectionné |
| `Cmd+I` | Afficher / masquer l'Inspector |
| `Cmd+K` | Afficher / masquer Active Cues |
| `Cmd+,` | Préférences |
| `Cmd+/` ou `?` | Aide |

> Sur Windows et Linux, remplacer `Cmd` par `Ctrl`.

---

## Formats supportés

**Audio** : WAV · MP3 · FLAC · OGG Vorbis · AIFF · AAC/M4A · Opus

**Vidéo** : tout format supporté par le moteur HTML5 de la plateforme (MP4/H.264, WebM/VP9, MOV…)

---

## Licence et téléchargement

Topeur est disponible en **évaluation gratuite de 60 jours**, toutes fonctionnalités incluses.

| Licence | Public visé |
|---|---|
| **Individuelle / Non-commerciale** | Particuliers, étudiants, compagnies amateurs, associations (revenus < 50 000 €/an) |
| **Professionnelle** | Salles, compagnies professionnelles, prestataires événementiels |

- Achat **unique** — pas d'abonnement
- Mises à jour incluses pour toute la version majeure (ex. toutes les 1.x)
- Installations sur **2 postes** par licence

> Tarifs et achat : [site à venir]

---

## Améliorations à venir

- **DMX / ArtNet** — cues lumière directes vers consoles et nœuds DMX
- **Groupes imbriqués** — possibilité d'imbriquer des groupes dans des groupes
- **Export PDF** — impression de la conduite sous forme de document imprimable
- **Synchronisation réseau** — timecode ou synchronisation entre plusieurs instances
- **Cues vidéo avancées** — chroma key, superposition de calques, transitions personnalisées

---

## Licence

Topeur est un logiciel propriétaire — voir [LICENSE](./LICENSE) pour les termes complets.
Une période d'évaluation gratuite de 60 jours est disponible pour tous les utilisateurs.

---

*Topeur est développé par Thomas Gouazé.*
