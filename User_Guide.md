# Guide opérateur — Topeur 0.22.0

Ce guide couvre la préparation et la conduite d'un spectacle. Il complète les
[limites connues](limites-connues.md); il ne remplace pas la fiche de conduite,
les procédures de sécurité du lieu ni une répétition générale.

## 1. Préparer le poste

1. Utiliser le même ordinateur, les mêmes adaptateurs, interfaces, écrans et
   câbles que pendant la représentation.
2. Désactiver veille, économiseur d'écran, mises à jour automatiques et
   notifications. Brancher l'alimentation secteur.
3. Réserver le réseau spectacle à OSC/Art-Net/sACN et désactiver les interfaces
   inutiles. Ne pas modifier le routage réseau après la recette.
4. Copier le bundle `.topeur` sur le disque local. Conserver une seconde copie
   complète et datée sur un autre support.
5. Ouvrir Topeur, relever la version `0.22.0` dans **À propos**, puis ouvrir la
   copie locale du projet.

## 2. Vérifier le projet

Dans **Préférences**, contrôler :

- chaque sortie audio, son nombre de canaux, son offset et le Master;
- chaque sortie vidéo, l'écran associé, sa résolution et sa mise à l'échelle;
- les ports MIDI d'entrée et de sortie, puis les mappings;
- l'écoute OSC, les destinations et les univers DMX;
- le mode timecode, la cadence, l'offset, l'entrée MTC/LTC et la sortie;
- le temps de Panic et les délais de sécurité de la conduite et du Cartoucheur.

Lancer le préflight et traiter chaque blocage concernant une cue active. Une cue
désactivée n'est pas bloquante : la réactiver avant de tester sa configuration.
Reconnecter les médias manquants depuis leur dossier, puis enregistrer le projet.

## 3. Faire la balance et la répétition

1. Tester une cue courte sur chaque sortie audio et vidéo.
2. Vérifier le canal gauche/droite ou multicanal, le trim, le Master et l'absence
   d'écrêtage. Garder une marge de niveau adaptée au système de diffusion.
3. Tester images, titres, masques et PiP sur la résolution de sortie réelle.
4. Tester les commandes MIDI, OSC et DMX sur un système isolé ou avec les
   équipements dans un état sûr.
5. Tester la réception ou génération du timecode sur plusieurs minutes, puis un
   saut avant et un reverrouillage. Le signal LTC reste sur une ligne dédiée.
6. Parcourir toute la conduite avec GO, Pause/Reprendre, Action, Auto-follow,
   groupes et cues en boucle. Contrôler spécialement les transitions critiques.
7. Tester **Panic** et **Stop All** séparément, puis expliquer leur différence à
   toute personne susceptible de reprendre la régie.
8. Ouvrir les diagnostics vidéo et les logs. Résoudre toute erreur récurrente,
   tout underrun audio, stall ou compteur de frames perdues anormal.
9. Enregistrer, fermer, rouvrir et rejouer un passage représentatif. Vérifier
   qu'une copie de secours est créée si cette fonction est activée.

Après validation, ne plus mettre à jour l'application, l'OS, les pilotes, les
médias ou le projet sans refaire les contrôles concernés.

## 4. Avant l'entrée public

- Redémarrer le poste si la procédure du lieu le prévoit, puis ouvrir uniquement
  les applications nécessaires.
- Brancher et allumer les périphériques avant Topeur; attendre leur stabilité.
- Ouvrir le bon bundle local et vérifier son nom, sa date et la première cue.
- Relancer le préflight et un test discret de chaque sortie.
- Vérifier la présence de la copie de secours, du plan de reprise et des moyens
  de communication avec le plateau.
- Placer la sélection sur la cue de départ et confirmer que les cues devant être
  désactivées le sont réellement.

## 5. Pendant la conduite

- **Espace** lance GO; **Échap** déclenche Panic avec fondu; **X** déclenche Stop
  All immédiatement. Garder ces raccourcis libres de tout autre logiciel.
- Surveiller Active Cues, les niveaux et le timecode sans déplacer les fenêtres
  de sortie. Éviter de brancher du matériel ou d'ouvrir les Préférences pendant
  une cue critique.
- Un changement de volume à chaud est conservé pendant un fondu Action. Rester
  néanmoins attentif au gain résultant affiché dans Active Cues.
- Une vidéo en Freeze at End et un timer sans Auto-follow restent actifs jusqu'à
  un arrêt explicite. Vérifier Active Cues avant le tableau suivant.
- Si un comportement est incertain, privilégier la procédure de repli répétée;
  ne pas expérimenter une nouvelle configuration pendant le spectacle.

## 6. Gérer un incident

### Son absent ou dégradé

1. Vérifier le Master, la cue active et le routage physique sans changer de
   périphérique pendant une lecture.
2. Si le périphérique a disparu, appliquer la procédure de repli du lieu, puis
   arrêter les cues avant de le reconnecter ou de le réaffecter.
3. Consigner l'heure et conserver les logs; relever underruns et charge audio.

### Image absente ou figée

1. Vérifier la sortie et son écran, puis Active Cues et les diagnostics vidéo.
2. Utiliser Stop sur la cue concernée ou Stop All selon la conduite prévue.
3. Ne pas déplacer une fenêtre de sortie sur un autre écran sans recette; passer
   au média ou dispositif de secours.

### Timecode perdu

1. Informer le plateau et appliquer le mode de poursuite prévu : attente,
   conduite manuelle ou source de secours.
2. Vérifier source, cadence et offset. Ne pas changer la cadence pour rattraper
   un signal en direct.
3. Reprendre seulement sur un point convenu après verrouillage stable.

### Application non réactive

1. Ne pas multiplier les clics ou les commandes GO.
2. Utiliser le dispositif matériel de sécurité si la situation l'exige.
3. Appliquer le plan de reprise : poste de secours ou relance avec la copie
   locale validée. Après relance, vérifier les sorties avant de reprendre.

## 7. Après le spectacle

Enregistrer, fermer proprement, puis archiver le bundle complet avec la date et
la version de Topeur. En cas d'incident, copier immédiatement le dossier de logs
via **Aide > Ouvrir le dossier des logs** et noter l'heure, la cue, le résultat
attendu, le résultat observé, l'OS et les périphériques concernés.
