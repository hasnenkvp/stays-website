---
name: Stays
description: Le site de Stays, carnet de séjours pour iPhone. Une page blanche et calme où l'app se montre elle-même.
colors:
  canvas: '#ffffff'
  canvas-alt: '#f9f9fb'
  ink: '#2b2b30'
  ink-soft: '#6a6a73'
  accent: '#0066cc'
  accent-strong: '#0052a3'
  accent-tint: '#e6f0fa'
  rule: '#e3e3e8'
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', 'Segoe UI', Roboto, Arial, sans-serif"
    fontSize: 'clamp(2.25rem, 1.6rem + 2.6vw, 3.5rem)'
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: '-0.022em'
  title:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', 'Segoe UI', Roboto, Arial, sans-serif"
    fontSize: 'clamp(1.875rem, 1.6rem + 1.1vw, 2.25rem)'
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: '-0.018em'
  heading:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', 'Segoe UI', Roboto, Arial, sans-serif"
    fontSize: '1.375rem'
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: '-0.01em'
  lead:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', 'Segoe UI', Roboto, Arial, sans-serif"
    fontSize: 'clamp(1.125rem, 1.05rem + 0.35vw, 1.25rem)'
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', 'Segoe UI', Roboto, Arial, sans-serif"
    fontSize: '1.0625rem'
    fontWeight: 400
    lineHeight: 1.6
  small:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', 'Segoe UI', Roboto, Arial, sans-serif"
    fontSize: '0.875rem'
    fontWeight: 400
    lineHeight: 1.5
rounded:
  focus: '4px'
  panel: '16px'
  shot: '12.5% / 5.75%'
  pill: '9999px'
spacing:
  gutter: '20px'
  gutter-wide: '32px'
  stack: '20px'
  grid-gap: '48px'
  grid-gap-wide: '80px'
  section: '80px'
  section-wide: '128px'
components:
  button-primary:
    backgroundColor: '{colors.accent}'
    textColor: '{colors.canvas}'
    typography: '{typography.body}'
    rounded: '{rounded.pill}'
    padding: '0 20px'
    height: '44px'
  button-primary-hover:
    backgroundColor: '{colors.accent-strong}'
  button-secondary:
    backgroundColor: '{colors.canvas}'
    textColor: '{colors.accent}'
    typography: '{typography.body}'
    rounded: '{rounded.pill}'
    padding: '0 20px'
    height: '44px'
  button-secondary-hover:
    textColor: '{colors.accent-strong}'
  nav-link:
    textColor: '{colors.ink-soft}'
    typography: '{typography.small}'
    padding: '0 8px'
    height: '44px'
  nav-link-current:
    textColor: '{colors.ink}'
  text-link:
    textColor: '{colors.accent}'
  app-shot:
    backgroundColor: '{colors.canvas}'
    rounded: '{rounded.shot}'
    width: '320px'
  toc-panel:
    backgroundColor: '{colors.canvas-alt}'
    rounded: '{rounded.panel}'
    padding: '24px'
---

# Design System: Stays

## Overview

**Creative North Star: "La page blanche de l'app"**

Le site s'efface devant l'app. Une page blanche, une colonne de 1 080 px, la police système d'Apple et un seul bleu : tout le reste est fourni par les captures réelles de Stays, posées droites, nettes, aux coins d'un écran d'iPhone. La référence est Things 3 de Cultured Code : de l'air, des titres courts, un texte posé, aucune décoration qui ne serve pas la lecture.

La densité est faible et le rythme régulier. Chaque section de fonction est un couple texte et capture sur deux colonnes, séparé du suivant par un filet de 1 px, avec un grand vide vertical (80 px, 128 px sur grand écran). La seule variation de fond est un gris cassé à peine perceptible, réservé au bloc vie privée et au sommaire de la politique. Le site suit le mode clair ou sombre du système, en CSS seul (`prefers-color-scheme`), avec une capture claire et une capture sombre de chaque écran ; il n'y a ni bouton de thème, ni JavaScript de thème, ni rien d'enregistré dans le navigateur.

Le mouvement se limite à des transitions de couleur et d'opacité de 150 ms au survol, plus la rotation du chevron de la FAQ à l'ouverture (150 ms), le tout coupé sous `prefers-reduced-motion`. Sous `prefers-contrast: more`, les gris, le bleu et les filets se renforcent.

**Key Characteristics:**

- Page blanche, un seul accent bleu, aucune couleur de marque décorative.
- Police système Apple, trois graisses (400, 500, 600), titres serrés.
- Les captures de l'app sont la seule image : droites, sans cadre de téléphone dessiné.
- Sections séparées par des filets fins et du vide, jamais par des cartes.
- Clair ou sombre selon le système, en CSS seul ; accessibilité gérée par les préférences système (contraste, mouvement).

## Colors

Une palette neutre et froide, presque monochrome, où un seul bleu système signale tout ce qui se clique.

### Primary

- **Bleu lien** (#0066cc) : liens soulignés, bouton principal, anneau de focus, `accent-color` des contrôles natifs, surbrillance tactile (à 12 %). Contraste de 5,6:1 sur blanc.
- **Bleu appuyé** (#0052a3) : uniquement l'état de survol du bleu lien (fond du bouton principal, texte du bouton secondaire et des liens du sommaire).
- **Voile bleu** (#e6f0fa) : fond de la sélection de texte, rien d'autre.

### Neutral

- **Blanc page** (#ffffff) : fond de toutes les pages et des captures.
- **Gris cassé** (#f9f9fb) : fond du bloc vie privée de l'accueil, du sommaire de la politique et du code en ligne. Seule surface teintée.
- **Anthracite** (#2b2b30) : titres et texte courant (14,1:1).
- **Gris secondaire** (#6a6a73) : chapeaux, petits textes, navigation au repos, pied de page, puces de liste (5,4:1).
- **Filet** (#e3e3e8) : séparateurs de sections, bordure du bouton secondaire, lignes de la FAQ et des listes de définitions.

### Mode sombre

Sous `prefers-color-scheme: dark`, les jetons changent de valeur et chaque capture passe à sa version sombre (`<source media="(prefers-color-scheme: dark)">`).

- **Fond** (#161618) et **fond alterné** (#1e1e21).
- **Texte** (#ececef, 15,3:1) et **texte secondaire** (#a0a0a8, 7,0:1).
- **Accent** (#4c9eff, 6,6:1), survol #7ab6ff ; le texte du bouton principal passe en #161618 (6,6:1), le blanc n'atteignant pas 3:1 sur ce bleu.
- **Filet** (#2e2e33) ; le filet des captures devient blanc à 10 % et leur ombre plus sombre.

### Named Rules

**The One Blue Rule.** Le bleu ne sert qu'à ce qui agit : lien, bouton, focus, sélection. Il n'apparaît jamais en aplat décoratif, en dégradé ou en titre.

**The Two Whites Rule.** Le fond n'a que deux valeurs, blanc et gris cassé. Aucune autre teinte de surface, aucun dégradé.

**The Contrast Override Rule.** Sous `prefers-contrast: more`, ink passe à #1a1a1e, ink-soft à #46464e, accent à #004c99, accent-strong à #003d7a, rule à #8e8e96, et l'ombre des captures se réduit à un filet net (`0 0 0 1px rgb(24 24 32 / 0.45)`).

## Typography

**Display Font:** pile système Apple (-apple-system, BlinkMacSystemFont, SF Pro Display), repli sur Helvetica Neue, Segoe UI, Roboto, Arial
**Body Font:** la même pile
**Label/Mono Font:** aucune police distincte

**Character:** San Francisco partout, comme dans l'app : la page parle la même langue que les captures. La hiérarchie vient de la taille, du serrage et du gris, pas d'un changement de famille.

### Hierarchy

- **Display** (600, 36 px à 56 px fluide, 1,08, -0,022em) : le titre unique de chaque page (accueil, assistance, politique, 404). Équilibré, 12em au plus sur l'accueil.
- **Title** (600, 30 px à 36 px fluide, 1,15, -0,018em) : titres de section de l'accueil, h2 de l'assistance et de la politique.
- **Heading** (600, 22 px, 1,3, -0,01em) : h3 de la politique.
- **Lead** (400, 18 px à 20 px fluide, 1,5) : chapeau sous le titre, en gris secondaire ; aussi le nom « Stays » du logo en 600.
- **Body** (400, 17 px, 1,6) : texte courant, en anthracite, dans une mesure de 28rem (60 caractères au plus). En 500 pour la mention de disponibilité et les boutons, en 600 pour les questions de la FAQ et les termes définis.
- **Small** (400, 14 px, 1,5) : légendes, notes de bas de section, navigation (en 500), pied de page, date de mise à jour.

### Named Rules

**The Three Weights Rule.** Seules 400, 500 et 600 existent. Pas de gras 700, pas de capitales espacées, pas de surtitre au-dessus des titres.

**The Sixty Characters Rule.** Un paragraphe ne dépasse jamais la mesure de 28rem ; les titres s'équilibrent (`text-wrap: balance`), les paragraphes se répartissent (`text-wrap: pretty`).

## Layout

Une colonne centrée de 1 080 px au plus, avec 20 px de marge latérale (32 px dès 640 px). L'accueil s'ouvre sur un hero centré : titre, chapeau, disponibilité, puis la capture Séjours (260, 300 puis 360 px de large) qui entre dans le premier écran.

Les sections de fonction ont 80 px de vide en haut et en bas (128 px dès 1 024 px), un filet de 1 px en haut, et une grille d'une colonne qui passe à deux colonnes sur grand écran (écart 48 px, 80 px sur grand écran), centrée verticalement. Le texte est aligné à gauche dans sa colonne ; la capture (260, 300 puis 320 px) alterne de côté d'une section à l'autre. Le bloc vie privée reprend les deux colonnes, titre à gauche et texte à droite, sur gris cassé. La dernière section revient au centre : icône de l'app, titre, disponibilité.

Les pages de lecture (assistance, politique) tiennent dans une seule colonne à la mesure de 28rem, centrée, avec 80 px entre les blocs. Les espacements internes suivent une petite échelle : 20 px sous un titre, 16 px entre paragraphes, 24 px avant une note ou un groupe de boutons.

## Elevation & Depth

Le système est plat. La profondeur n'existe que sur les captures de l'app (et l'icône de l'app ou le lien d'évitement focalisé), pour les détacher du blanc comme un écran posé sur la page.

### Shadow Vocabulary

- **Ombre de capture** (`box-shadow: 0 0 0 1px rgb(24 24 32 / 0.07), 0 2px 4px rgb(24 24 32 / 0.04), 0 28px 56px -32px rgb(24 24 32 / 0.24)`) : un filet presque invisible, un contact court et une ombre portée longue et très douce. Captures, icône de l'app en fin d'accueil, lien d'évitement au focus.

### Named Rules

**The Only Screens Float Rule.** Seuls les écrans de l'app portent une ombre. Boutons, panneaux et textes restent à plat.

## Shapes

Les formes viennent de l'iPhone. Les captures prennent le coin d'un écran d'iPhone en proportion (`12.5% / 5.75%`), quelle que soit leur taille, sans cadre de téléphone dessiné. Les boutons sont des pilules. Le seul panneau, le sommaire de la politique, a des coins de 16 px, comme l'icône de l'app en fin de page. Le focus clavier est un contour bleu de 2 px décalé de 3 px, aux coins de 4 px. Les séparations sont des filets de 1 px, jamais des cadres.

## Components

### Buttons

Calmes et natifs, à la manière des boutons système d'iOS.

- **Shape:** pilule (9999px), hauteur minimale de 44 px, 20 px de marge intérieure horizontale, corps de texte en 500.
- **Primary:** fond bleu lien, texte blanc. Une action principale par groupe (« Retour à l'accueil », « Écrire un e-mail »).
- **Hover / Focus:** le fond passe au bleu appuyé en 150 ms ; focus par l'anneau bleu global.
- **Secondary:** fond transparent, bordure filet de 1 px, texte bleu ; au survol la bordure devient bleue et le texte bleu appuyé. Le bouton « Copier l'adresse » en reprend le style, avec une icône SVG en trait.

### Liens dans le texte

- Bleu lien, soulignés d'un trait de 1 px à 40 % d'opacité, décalé de 0,2em ; le soulignement devient plein au survol. Le soulignement reste toujours, pour ne pas dépendre de la couleur seule.

### Cards / Containers

- **Corner Style:** 16 px, sur le seul sommaire de la politique.
- **Background:** gris cassé, sans bordure ni ombre.
- **Internal Padding:** 20 px, 24 px dès 640 px.

### Navigation

- **En-tête:** logo (icône de 28 px aux coins de 7 px et nom « Stays » en lead 600) à gauche, liens à droite en petit texte 500, gris secondaire au repos, anthracite au survol et sur la page courante (`aria-current`). Cible de 44 px. Sur mobile, seul le premier lien reste visible.
- **Pied de page:** filet en haut, petit texte gris secondaire, liens qui passent à l'anthracite au survol.

### FAQ

- Éléments `<details>` natifs entre deux filets : question en corps 600 sur 56 px de haut au moins, chevron en trait de 16 px en gris secondaire qui pivote à l'ouverture ; la question passe au bleu au survol. Réponse dans la mesure de 28rem.

### Capture de l'app (signature)

- Image réelle de l'app, droite, coins d'écran d'iPhone, ombre de capture, fond blanc. Jamais inclinée, jamais dans un cadre de téléphone, jamais recadrée en vignette. Une légende en petit texte gris signale les données d'exemple.

### Disponibilité

- Mention « Bientôt sur l'App Store » en corps 500 anthracite, remplacée automatiquement par le badge officiel App Store (44 px de haut) quand l'app est publiée ; dessous, « Pour iPhone » en petit texte gris précédé d'une icône d'iPhone en trait de 14 px.

## Do's and Don'ts

### Do:

- **Do** montrer l'app par ses vraies captures, droites, aux coins `12.5% / 5.75%` avec l'ombre de capture.
- **Do** réserver le bleu (#0066cc) aux liens, boutons, focus et à la sélection.
- **Do** séparer les sections par un filet de 1 px (#e3e3e8) et 80 px de vide (128 px sur grand écran).
- **Do** garder chaque paragraphe dans la mesure de 28rem et chaque titre court et équilibré.
- **Do** donner 44 px de cible à tout ce qui se touche, et un focus visible bleu de 2 px.
- **Do** limiter le mouvement aux transitions de couleur et d'opacité de 150 ms (seule exception : la rotation du chevron de la FAQ), coupées sous `prefers-reduced-motion`.

### Don't:

- **Don't** ajouter de bouton de thème, de JavaScript de thème ou de `localStorage.theme` : le mode sombre suit le système, en CSS seul.
- **Don't** dessiner de cadre d'iPhone ni incliner une capture.
- **Don't** poser de dégradé, de hero promotionnel ou d'aplat coloré derrière le contenu.
- **Don't** enfermer le texte dans des cartes ombrées ; le seul panneau est un fond gris cassé sans ombre.
- **Don't** placer de surtitre (eyebrow) au-dessus des titres, ni de capitales espacées.
- **Don't** utiliser de graisse au-delà de 600 ni de police autre que la pile système.
