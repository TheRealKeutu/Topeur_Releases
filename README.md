# Topeur

https://discord.gg/CeeZTNthB

## English

**Topeur** is a cue player for theatre, live shows and events.

It helps you prepare a show as a clear cue list, then run it live with a simple **GO** button. Audio, video, waits, fades, MIDI, OSC, text notes, groups and Lua scripts can all be organized in the same project.

Topeur is currently in active development. The current app version is **0.14.0**.

### What You Can Do

- Build a numbered cue list for a show.
- Play audio and video cues.
- Fade cues in and out, or automatically fade other active cues.
- Chain cues automatically with Auto-follow.
- Create timed waits.
- Group cues to play them together, one after another, or in random order.
- Add text cues and operator notes.
- Route audio cues to named outputs.
- Send and receive MIDI actions.
- Send and receive OSC actions.
- Use video outputs on dedicated screens.
- Preload upcoming video cues for smoother playback.
- Keep track of active cues during the show.
- Save shows as portable `.topeur` project folders.
- Use the interface in English or French.

### Cue Types

- **Audio**: play audio files, trim In/Out points, loop, set volume and output.
- **Video**: play video files on a selected screen, trim In/Out points, loop, freeze on the last frame, adjust opacity and embedded audio.
- **Fade**: fade an audio or video target over a chosen duration.
- **Wait**: pause for a set time before continuing.
- **MIDI**: send MIDI messages such as Note, Control Change, Program Change or SysEx.
- **OSC**: send OSC messages over the network.
- **Group**: run several cues together, sequentially or randomly.
- **Text**: add visible notes or separators in the cue list.
- **Script**: run a Lua script for advanced show control.

### Projects

A Topeur project is saved as a `.topeur` folder. It contains the show file and its media:

```text
MyShow.topeur/
├── project.topeur
└── Media/
    ├── music.wav
    ├── ambience.flac
    └── intro.mp4
```

This makes projects easy to move between computers: copy the whole `.topeur` folder and open it on another machine.

### Basic Shortcuts

| Shortcut | Action |
|---|---|
| `Space` | GO |
| `Esc` | Panic: fade all active cues, then stop |
| `↑` / `↓` | Move through the cue list |
| `Cmd/Ctrl+N` | New project |
| `Cmd/Ctrl+O` | Open project |
| `Cmd/Ctrl+S` | Save |
| `Cmd/Ctrl+Shift+S` | Save as |
| `Cmd/Ctrl+Z` | Undo |
| `Cmd/Ctrl+C` / `Cmd/Ctrl+V` | Copy / Paste cue |
| `Cmd/Ctrl+A` | Select all cues |
| `Cmd/Ctrl+Backspace` or `Cmd/Ctrl+Delete` | Delete selected cue |
| `Cmd/Ctrl+I` | Show / hide Inspector |
| `Cmd/Ctrl+K` | Show / hide Active Cues |
| `Cmd/Ctrl+,` | Preferences |
| `?` or `Cmd/Ctrl+/` | Help |

### Supported Media

**Audio**: WAV, MP3, FLAC, OGG, AIFF, M4A, Opus, AAC.

**Video**: common platform-supported video formats such as MP4, MOV and WebM.

### License

Topeur is proprietary software developed by **Thomas Gouazé**.

A free 60-day trial is available. See [LICENSE](./LICENSE) for full terms.

---

## Français

**Topeur** est un lecteur de conduite pour le théâtre, le spectacle vivant et l'événementiel.

Il permet de préparer un spectacle sous forme de liste de cues claire, puis de le jouer en direct avec un simple bouton **GO**. Audio, vidéo, attentes, fades, MIDI, OSC, notes, groupes et scripts Lua peuvent être organisés dans le même projet.

Topeur est en développement actif. La version actuelle de l'application est **0.14.0**.

### Ce Que Vous Pouvez Faire

- Construire une conduite numérotée pour un spectacle.
- Lire des cues audio et vidéo.
- Faire des fondus, ou faire disparaître automatiquement les autres cues actifs.
- Enchaîner les cues automatiquement avec Auto-follow.
- Créer des attentes minutées.
- Grouper des cues pour les jouer ensemble, l'une après l'autre, ou dans un ordre aléatoire.
- Ajouter des cues texte et des notes opérateur.
- Router les cues audio vers des sorties nommées.
- Envoyer et recevoir des actions MIDI.
- Envoyer et recevoir des actions OSC.
- Utiliser des sorties vidéo sur des écrans dédiés.
- Précharger les prochaines cues vidéo pour une lecture plus fluide.
- Suivre les cues actives pendant le spectacle.
- Sauvegarder les spectacles dans des dossiers de projet `.topeur` portables.
- Utiliser l'interface en français ou en anglais.

### Types De Cues

- **Audio** : lire des fichiers audio, régler les points In/Out, boucler, choisir le volume et la sortie.
- **Vidéo** : lire une vidéo sur un écran choisi, régler les points In/Out, boucler, figer la dernière image, ajuster l'opacité et l'audio intégré.
- **Fade** : faire un fondu vers une cue audio ou vidéo.
- **Wait** : attendre une durée définie avant de continuer.
- **MIDI** : envoyer des messages MIDI comme Note, Control Change, Program Change ou SysEx.
- **OSC** : envoyer des messages OSC sur le réseau.
- **Groupe** : lancer plusieurs cues ensemble, en séquence ou en aléatoire.
- **Texte** : ajouter des notes visibles ou des séparateurs dans la conduite.
- **Script** : lancer un script Lua pour les besoins avancés.

### Projets

Un projet Topeur est sauvegardé sous forme de dossier `.topeur`. Il contient le fichier du spectacle et ses médias :

```text
MonSpectacle.topeur/
├── project.topeur
└── Media/
    ├── musique.wav
    ├── ambiance.flac
    └── intro.mp4
```

Pour déplacer un spectacle, copiez simplement tout le dossier `.topeur` sur une autre machine.

### Raccourcis De Base

| Raccourci | Action |
|---|---|
| `Espace` | GO |
| `Échap` | Panic : fade de toutes les cues actives, puis arrêt |
| `↑` / `↓` | Naviguer dans la conduite |
| `Cmd/Ctrl+N` | Nouveau projet |
| `Cmd/Ctrl+O` | Ouvrir un projet |
| `Cmd/Ctrl+S` | Enregistrer |
| `Cmd/Ctrl+Shift+S` | Enregistrer sous |
| `Cmd/Ctrl+Z` | Annuler |
| `Cmd/Ctrl+C` / `Cmd/Ctrl+V` | Copier / Coller une cue |
| `Cmd/Ctrl+A` | Tout sélectionner |
| `Cmd/Ctrl+Backspace` ou `Cmd/Ctrl+Delete` | Supprimer la cue sélectionnée |
| `Cmd/Ctrl+I` | Afficher / masquer l'Inspector |
| `Cmd/Ctrl+K` | Afficher / masquer Active Cues |
| `Cmd/Ctrl+,` | Préférences |
| `?` ou `Cmd/Ctrl+/` | Aide |

### Médias Supportés

**Audio** : WAV, MP3, FLAC, OGG, AIFF, M4A, Opus, AAC.

**Vidéo** : formats vidéo courants supportés par la plateforme, comme MP4, MOV et WebM.

### Licence

Topeur est un logiciel propriétaire développé par **Thomas Gouazé**.

Une période d'évaluation gratuite de 60 jours est disponible. Voir [LICENSE](./LICENSE) pour les conditions complètes.
