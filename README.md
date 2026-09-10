# Topeur

Topeur est un lecteur de conduite pour le theatre, le spectacle vivant et
l'evenementiel. Il permet de preparer un spectacle sous forme de liste de tops,
puis de l'executer en direct avec un bouton **GO**.

Version actuelle : **0.24.0**

Discord : https://discord.gg/CeeZTNthB

## Fonctionnalites

- Conduite numerotee avec selection, multi-selection, couleurs, notes,
  activation/desactivation, renumerotation, copie, collage, duplication et
  annulation.
- Import de medias audio, video et image par dialogue fichier ou
  glisser-deposer.
- Cartoucheur audio/video integre, redimensionnable et detachable, avec import
  direct, glisser-deposer, reorganisation et declenchement instantane.
- Tops audio avec points In/Out, boucle, volume, trim, waveform et routage vers
  des sorties nommees.
- Tops video avec sorties dediees, preload, freeze at end, opacite, audio
  embarque, routage audio et offsets de synchronisation.
- Tops image avec duree optionnelle, opacite, mode d'ajustement et sortie video.
- Geometrie, rotation, ancrage, recadrage, masques et prereglages PiP communs
  aux tops video et image.
- Tops Titre avec texte secondaire, modeles, style complet et modification en direct.
- Tops Wait, Timer, Action, MIDI, OSC, Timecode, Group, Text et Script Lua.
- Reception, generation et regeneration de timecode MTC/LTC, horloge interne et
  declenchement de tops au franchissement d'une position SMPTE.
- Groupes en lecture simultanee, sequentielle ou aleatoire.
- Auto-follow pour enchainer automatiquement les tops, y compris les timers et
  les tops placees dans des groupes.
- Fade others, fade selectionne, Stop All et Panic : fade global puis arret des
  tops actifs. Fade others agit aussi sur les surfaces visuelles, avec une
  portee configurable et une protection top par top.
- Declenchement direct d'un top par raccourci clavier ou mapping MIDI/OSC,
  configurable dans l'Inspector.
- Delais de securite independants pour la conduite et le cartoucheur afin
  d'eviter les doubles declenchements accidentels.
- Preferences audio, video, MIDI, OSC et timecode par projet, raccourcis de
  transport configurables et reglages avances de preload/synchronisation video.
- Panneaux Active Tops et Cartoucheur detachables, Inspector, logs moteur,
  diagnostics video et aide.
- Suivi des tops actifs restaure a l'ouverture d'un panneau detache ; une video
  en freeze at end reste active jusqu'a son arret explicite.
- Sauvegarde automatique, copies de secours, reouverture du dernier projet et
  restauration de la disposition des fenetres. Si le descripteur principal d'un
  bundle est vide ou illisible, l'ouverture tente automatiquement la copie de
  secours valide la plus recente.
- Sauvegarde de projets portables au format `.topeur`, avec validation avant
  ecriture, progression de copie des medias et acces direct au dossier du projet.
- Export de la conduite au format XLSX, avec choix des tops a exporter.
- Interface localisee en francais et en anglais.

## Interface régie

La nouvelle disposition place la conduite au centre, les lectures actives à
droite et le prochain GO dans un transport permanent. Le cartoucheur et
l’inspecteur sont des fenêtres natives indépendantes.
Un double-clic ouvre les réglages dans un inspecteur flottant et épinglable,
avec une waveform horizontale. Voir [le guide de l’interface](docs/ui-regie.md).

## Types de tops

| Type | Role |
|---|---|
| Audio | Lit un fichier audio, avec trim, points In/Out, boucle, volume et sortie audio. |
| Video | Lit une video sur une sortie dediee, avec preload, freeze, opacite et audio embarque optionnel. |
| Image | Affiche une image sur une sortie video, avec duree optionnelle, opacite et mode d'ajustement. |
| Titre | Affiche un titre ou bandeau superposable, stylable et modifiable en direct. |
| Action | Pilote un top, un groupe ou tous les tops actifs : fondu de volume/opacite, pause, reprise, arret, demarrage ou redemarrage. |
| Wait | Attend une duree avant de continuer la conduite. |
| Timer | Affiche un compte a rebours ou un minuteur sur une sortie video. |
| MIDI | Envoie des messages Note, Control Change, Program Change ou SysEx. |
| OSC | Envoie des messages OSC avec arguments types. |
| Timecode | Genere une plage MTC ou LTC, avec cadence, debut, fin et sortie dediee. |
| Group | Declenche plusieurs tops ensemble, en sequence ou dans un ordre aleatoire. |
| Text | Ajoute une note ou un separateur visible dans la conduite. |
| Script | Execute un script Lua pour les besoins avances. |

## Cartoucheur et declenchements directs

Les tops audio, video et image peuvent etre places dans le **Cartoucheur**. Ils
restent dans le projet mais sont exclus de l'ordre de lecture de la conduite.
Le panneau s’ouvre dans une fenetre independante et redimensionnable. Il accepte
l’import et le glisser-deposer, et permet de copier, coller, dupliquer,
reorganiser ou supprimer ses cartouches.

L'onglet **Declenchement** de l'Inspector permet d'attribuer a chaque top une
touche du clavier ainsi qu'un ou plusieurs messages MIDI ou OSC. Les entrees et
leurs mappings se configurent dans les Preferences. Deux delais minimums
distincts protegent la conduite et le cartoucheur contre les declenchements
repetes ; une valeur de `0` desactive la protection correspondante.

## Exemples visuels

Le dossier [`examples`](./examples/) contient un projet PiP couvrant les quatre
coins et masques, ainsi qu'un projet de titres et bandeaux utilisable sans media.
Le projet PiP conserve ses geometries lorsque ses medias fictifs sont reconnectes.

## Comportements en lecture

- **Panic** applique le fade global configure dans les Preferences, puis arrete
  tous les tops actifs. **Stop All** les arrete immediatement, sans fade.
- Un timer sans Auto-follow reste actif apres zero pour afficher le temps
  depasse. Avec Auto-follow ou dans un groupe, il se termine a zero et declenche
  la suite.
- **Freeze at End** conserve la derniere image et maintient le top video actif
  jusqu'a un Stop ou au remplacement de son image.
- **Fade Others** agit sur les tops audio et les surfaces visuelles actives,
  notamment les videos, images et timers. Sa portee peut viser les tops soeurs,
  la liste ou le cartoucheur courant, ou tous les tops. Un top protege
  ignore Fade Others, mais reste sensible a Panic, Fade All, Stop All et aux
  fades cibles.
- Les sorties video et leur ecran se configurent dans les Preferences. Les
  reglages avances couvrent le nombre de preloads, les offsets A/V et
  d'affichage, la compensation de demarrage et le delai de preload.

## Timecode

Le panneau **Timecode** affiche le signal recu, la position apres offset et le
signal emis. Les Preferences proposent quatre modes : arret, reception,
generation interne et reception avec regeneration. L'entree peut etre un port
MTC dedie ou un canal audio LTC ; la sortie peut etre MTC ou LTC. Les cadences
24, 25, 29,97 DF/NDF et 30 fps sont prises en charge.

Un top peut etre arme sur une position timecode absolue. Le declenchement est
effectue par le moteur lors du franchissement de cette position, avec politiques
configurables pour les sauts avant et le reverrouillage. Un top **Timecode**
distincte sert a emettre une plage MTC ou LTC pendant la conduite. Un canal LTC
doit toujours etre reserve au timecode et ne jamais etre envoye vers des
enceintes.

## Sauvegarde et copies de secours

Les Preferences permettent d'activer la sauvegarde automatique, d'en choisir
l'intervalle, de conserver un nombre defini de copies de secours, de rouvrir le
dernier projet et de restaurer la disposition des panneaux et fenetres. Ces
options sont propres a l'application ; les reglages audio, video, MIDI, OSC et
timecode sont sauvegardes avec le projet.

## Format de projet

Un spectacle est sauvegarde dans un dossier `.topeur`. Le fichier
`project.topeur` contient les donnees JSON du projet ; les medias sont regroupes
dans `Media/` quand ils sont importes dans le bundle.

```text
MonSpectacle.topeur/
|-- project.topeur
|-- Backups/          # copies de secours rotatives, si activees
`-- Media/
    |-- musique.wav
    |-- ambiance.flac
    |-- intro.mp4
    `-- decor.png
```

Les chemins des medias sont rendus relatifs au moment de la sauvegarde quand
c'est possible. Cela permet de deplacer un spectacle en copiant tout le dossier
`.topeur`. A l'ouverture, si `project.topeur` est vide, tronque ou invalide,
Topeur recherche dans `Backups/` la copie valide la plus recente. Si aucune
copie n'est exploitable, le projet n'est pas charge et une erreur explicite est
affichee.

## Export XLSX

La conduite peut etre exportee en fichier Excel `.xlsx` depuis le menu
**File > Export top list as XLSX...**. L'export peut inclure toute la conduite
ou une selection de tops par type et par top.

Le fichier genere une feuille `Top List` avec le titre du projet, une ligne
d'en-tetes figee, un filtre automatique et les couleurs de tops reportees sur
les lignes.

Les colonnes exportees sont :

- Heure
- Numero
- Type
- Nom
- Notes
- Duree
- Media
- Sortie audio
- Sortie video
- Active

## Raccourcis

| Raccourci | Action |
|---|---|
| `Espace` | GO |
| `Echap` | Panic : fade de tous les tops actifs, puis arret |
| `X` | Arreter immediatement tous les tops |
| `Haut` / `Bas` | Naviguer dans la conduite |
| `Cmd/Ctrl+N` | Nouveau projet |
| `Cmd/Ctrl+O` | Ouvrir un projet |
| `Cmd/Ctrl+S` | Enregistrer |
| `Cmd/Ctrl+Shift+S` | Enregistrer sous |
| `Cmd/Ctrl+Z` | Annuler |
| `Cmd/Ctrl+C` / `Cmd/Ctrl+V` | Copier / coller des tops |
| `Cmd/Ctrl+D` | Dupliquer la selection |
| `Cmd/Ctrl+A` | Tout selectionner |
| `Cmd/Ctrl+R` | Renumeroter les tops |
| `Cmd/Ctrl+Backspace` ou `Cmd/Ctrl+Delete` | Supprimer la selection |
| `Cmd/Ctrl+I` | Afficher / masquer l'Inspector |
| `Cmd/Ctrl+K` | Afficher / masquer Active Tops |
| `Cmd/Ctrl+L` | Afficher / masquer le Cartoucheur |
| `Cmd/Ctrl+Shift+L` | Afficher / masquer les logs |
| `Cmd/Ctrl+,` | Preferences |
| `?` ou `Cmd/Ctrl+/` | Aide |
| `Cmd/Ctrl+Q` | Quitter Topeur |

## Medias

Audio supporte par le moteur Rust via Symphonia :

- WAV
- MP3
- FLAC
- OGG
- AIFF
- M4A
- Opus
- AAC

Video supportee par la WebView systeme :

- MP4, MOV, WebM et autres formats disponibles sur la plateforme.
- Voir [docs/video-codecs.md](./docs/video-codecs.md) pour les codecs conseilles
  en exploitation spectacle.

Les images courantes prises en charge par la WebView (PNG, JPEG, WebP, GIF, BMP
et SVG) peuvent etre utilisees comme tops image. Leur compatibilite exacte
depend de la plateforme.

## Licence

Topeur est un logiciel proprietaire developpe par **Thomas Gouaze**, utilisable
gratuitement et sans limite de duree. Son developpement peut etre soutenu au
montant de votre choix sur [Ko-fi](https://ko-fi.com/topeur). Une contribution
est facultative et n'accorde pas de droits supplementaires. Voir
[LICENCE](./LICENCE) pour les conditions completes.

---

# Topeur

Topeur is a top player for theatre, live performance and events. It lets you
prepare a show as a top list, then run it live with a **GO** button.

Current version: **0.24.0**

Discord: https://discord.gg/CeeZTNthB

## Features

- Numbered top list with selection, multi-selection, colors, notes,
  enable/disable, renumbering, copy, paste, duplicate and undo.
- Audio, video and image import through file dialogs or drag and drop.
- Integrated resizable and detachable Audio/Video Cart with direct import,
  drag-and-drop, reordering and instant triggering.
- Audio tops with In/Out points, loop, volume, trim, waveform and routing to
  named outputs.
- Video tops with dedicated outputs, preload, freeze at end, opacity, embedded
  audio, audio routing and sync offsets.
- Image tops with an optional duration, opacity, fit mode and video output.
- Shared geometry, rotation, anchor, crop, masks and PiP presets for video and
  image tops.
- Title tops with secondary text, templates, full styling and live updates.
- Wait, Timer, Action, MIDI, OSC, Timecode, Group, Text and Lua Script tops.
- MTC/LTC timecode reception, generation and regeneration, an internal clock,
  and top triggers when an SMPTE position is crossed.
- Groups in simultaneous, sequential or random playback modes.
- Auto-follow to chain tops automatically, including timers and tops inside
  groups.
- Fade others, selected fade, Stop All and Panic: global fade, then stop actif
  tops. Fade others also applies to visual surfaces, with a configurable scope
  and per-top protection.
- Direct top triggering through keyboard shortcuts or MIDI/OSC mappings,
  configured in the Inspector.
- Independent safety delays for the top list and Audio Cart to prevent
  accidental double triggers.
- Per-project audio, video, MIDI, OSC and timecode preferences, configurable
  transport shortcuts and advanced video preload/synchronization settings.
- Detachable Active Tops and Audio Cart panels, Inspector, engine logs, video
  diagnostics and help panels.
- Active top state is restored when a detached panel opens; a freeze-at-end
  video remains active until it is explicitly stopped.
- Automatic saving, backup copies, reopening of the last project and window
  layout restoration. If a bundle's main descriptor is empty or unreadable,
  opening automatically tries the newest valid backup.
- Portable project saving in `.topeur` format, with validation before writing,
  media-copy progress and direct access to the project folder.
- Top list export to XLSX, with selectable tops.
- Interface localized in French and English.

## Top Types

| Type | Role |
|---|---|
| Audio | Plays an audio file, with trim, In/Out points, loop, volume and audio output. |
| Video | Plays a video on a dedicated output, with preload, freeze, opacity and optional embedded audio. |
| Image | Displays a still on a video output, with optional duration, opacity and fit mode. |
| Title | Displays a styled, live-editable title or lower third over a video output. |
| Action | Controls a top, group, or all active tops: volume/opacity fade, pause, resume, stop, start, or restart. |
| Wait | Waits for a duration before continuing the top list. |
| Timer | Displays a countdown or count-up timer on a video output. |
| MIDI | Sends Note, Control Change, Program Change or SysEx messages. |
| OSC | Sends OSC messages with typed arguments. |
| Timecode | Generates an MTC or LTC range, with a frame rate, start, end and dedicated output. |
| Group | Triggers several tops together, in sequence or in random order. |
| Text | Adds a note or separator visible in the top list. |
| Script | Runs a Lua script for advanced needs. |

## Audio Cart and Direct Triggers

Audio, video and image tops can be placed in the **Audio Cart**. They remain part of
the project but are excluded from the sequential top-list playback order. The
panel opens in an independent, resizable window, supports importing and drag-and-drop,
and lets you copy, paste, duplicate, reorder or delete carts.

The Inspector's **Trigger** tab lets you assign a keyboard key and one or more
MIDI or OSC messages to each top. Inputs and mappings are configured in
Preferences. Separate minimum delays protect the top list and Audio Cart from
repeated triggers; setting a delay to `0` disables that protection.

## Visual Examples

The [`examples`](./examples/) directory contains a four-corner, multi-mask PiP
project and a media-independent titles/lower-thirds project. Reconnecting the
placeholder media in the PiP project preserves all its geometry settings.

## Playback Behavior

- **Panic** applies the global fade configured in Preferences and then stops all
  active tops. **Stop All** stops them immediately without a fade.
- A timer without Auto-follow remains active after zero to display overtime.
  With Auto-follow or inside a group, it completes at zero and triggers the next
  top.
- **Freeze at End** holds the last frame and keeps the video top actif until it
  is stopped or its image is replaced.
- **Fade Others** applies to active audio tops and visual surfaces, including
  videos, images and timers. Its scope can target sibling tops, the current top
  list or Audio Cart, or all tops. A protected top ignores Fade Others but still
  responds to Panic, Fade All, Stop All and targeted fades.
- Video outputs and their monitor are configured in Preferences. Advanced
  settings cover the preload limit, A/V and reveal offsets, startup compensation
  and preload timeout.

## Timecode

The **Timecode** panel displays the received signal, its offset position and the
emitted signal. Preferences provide four modes: off, receive, internal generate,
and receive with regeneration. Input can use a dedicated MTC port or an LTC
audio channel; output can be MTC or LTC. Frame rates of 24, 25, 29.97 DF/NDF and
30 fps are supported.

A top can be armed at an absolute timecode position. The engine fires it when
that position is crossed, using configurable forward-jump and relock policies.
A separate **Timecode** top emits an MTC or LTC range during top-list playback.
Always reserve an LTC channel for timecode and never route it to loudspeakers.

## Auto-save and Backups

Preferences let you enable automatic saving, choose its interval, retain a
defined number of backup copies, reopen the last project and restore the panel
and window layout. These are application preferences; audio, video, MIDI, OSC
and timecode settings are stored with the project.

## Project Format

A show is saved in a `.topeur` folder. The `project.topeur` file contains the
project JSON data; media files are grouped in `Media/` when they are imported
into the bundle.

```text
MyShow.topeur/
|-- project.topeur
|-- Backups/          # rotating backups, when enabled
`-- Media/
    |-- music.wav
    |-- ambience.flac
    |-- intro.mp4
    `-- backdrop.png
```

Media paths are made relative when saving whenever possible. This makes it
possible to move a show by copying the whole `.topeur` folder. On open, if
`project.topeur` is empty, truncated or invalid, Topeur searches `Backups/` for
the newest valid copy. If no usable copy exists, the project is left unopened
and a clear error is displayed.

## XLSX Export

The top list can be exported as an Excel `.xlsx` file from
**File > Export top list as XLSX...**. The export can include the whole top list
or a top selection by type and by top.

The generated file contains a `Top List` sheet with the project title, a frozen
header row, an automatic filter and top colors applied to rows.

Exported columns are:

- Time
- Number
- Type
- Name
- Notes
- Duration
- Media
- Audio output
- Video output
- Enabled

## Shortcuts

| Shortcut | Action |
|---|---|
| `Space` | GO |
| `Esc` | Panic: fade all active tops, then stop |
| `X` | Stop all tops immediately |
| `Up` / `Down` | Navigate through the top list |
| `Cmd/Ctrl+N` | New project |
| `Cmd/Ctrl+O` | Open project |
| `Cmd/Ctrl+S` | Save |
| `Cmd/Ctrl+Shift+S` | Save as |
| `Cmd/Ctrl+Z` | Undo |
| `Cmd/Ctrl+C` / `Cmd/Ctrl+V` | Copy / paste tops |
| `Cmd/Ctrl+D` | Duplicate selection |
| `Cmd/Ctrl+A` | Select all |
| `Cmd/Ctrl+R` | Renumber tops |
| `Cmd/Ctrl+Backspace` or `Cmd/Ctrl+Delete` | Delete selection |
| `Cmd/Ctrl+I` | Show / hide Inspector |
| `Cmd/Ctrl+K` | Show / hide Active Tops |
| `Cmd/Ctrl+L` | Show / hide Audio Cart |
| `Cmd/Ctrl+Shift+L` | Show / hide logs |
| `Cmd/Ctrl+,` | Preferences |
| `?` or `Cmd/Ctrl+/` | Help |
| `Cmd/Ctrl+Q` | Quit Topeur |

## Media

Audio supported by the Rust engine via Symphonia:

- WAV
- MP3
- FLAC
- OGG
- AIFF
- M4A
- Opus
- AAC

Video supported by the system WebView:

- MP4, MOV, WebM and other formats available on the platform.
- See [docs/video-codecs.md](./docs/video-codecs.md) for recommended codecs for
  live show operation.

Common image formats supported by the WebView (PNG, JPEG, WebP, GIF, BMP and
SVG) can be used for image tops. Exact compatibility depends on the
platform.

## License

Topeur is proprietary software developed by **Thomas Gouaze** and may be used
free of charge without a time limit. You can support its development with an
amount of your choice on [Ko-fi](https://ko-fi.com/topeur). Contributions are
optional and do not grant additional rights. See [LICENCE](./LICENCE) for the
full terms.
