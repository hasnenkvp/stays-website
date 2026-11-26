# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Voyageurs qui séjournent souvent à l'hôtel, en France et à l'étranger, et réservent sur plusieurs plateformes (Booking, Airbnb, sites des chaînes, réservation directe). Ils visitent staysapp.fr depuis leur iPhone ou leur Mac pour comprendre ce que fait l'app avant de l'installer. App Review et la CNIL lisent aussi /privacy/ et /support/.

## Product Purpose

Stays est une app iPhone : un passeport hôtelier numérique et un carnet de séjours. Elle réunit au même endroit les informations de chaque séjour, quel que soit le site de réservation, pour les retrouver sans chercher dans ses mails. Le site présente l'app, publie la politique de confidentialité et la page d'assistance exigées par l'App Store.

## Positioning

Un carnet personnel, pas une app de réservation : on ajoute ses séjours soi-même, Stays ne lit ni les mails ni les comptes de réservation, et rien ne passe par un serveur de l'éditeur. L'utile (tout retrouver le jour J, partager ses séjours avec ses amis) va avec l'agréable (le Passeport et ses statistiques de voyage).

## Operating Context

- Le jour J : arrivée à l'hôtel, besoin de l'adresse, de l'heure d'arrivée, de la référence, du numéro de l'établissement.
- Entre amis : voyage à plusieurs (exemple de référence : la Grèce), où un seul a réservé ; avec Amis, chacun voit les séjours de l'autre dans l'app.
- Après coup : le Passeport compte nuits, pays, villes, hôtels et années, avec un globe des séjours.

## Capabilities and Constraints

- iPhone uniquement, iOS 18.6 minimum, en français.
- Amis : facultatif, demande iOS 26 et iCloud ; partage hôtel, ville, pays, emplacement, dates et heures, jamais prix, photos, notes ni références.
- Gratuite : aucun achat intégré actif, aucun abonnement, aucune publicité.
- Export CSV depuis les Réglages.
- Partage : le Passeport crée une image à partager (rapport de nuits, passeport), enregistrable dans Photos.
- Pas encore publiée sur l'App Store et pas de lien TestFlight public (au 26/11/2026) : le site affiche « Bientôt sur l'App Store » jusqu'à ce que `appStoreUrl` soit renseigné dans `src/config/stays.ts`.
- Site : Astro statique sur GitHub Pages, 4 pages au plus (accueil, /privacy/, /support/, 404), aucune bibliothèque d'animation.

## Brand Commitments

- Nom : Stays. Éditeur : Hasnen Nourah.
- Ton : français naturel, posé, humain et factuel, sans superlatif ni jargon marketing.
- Le site suit le mode clair ou sombre du système, en CSS seul : ni bouton de thème, ni JavaScript de thème. Le site n'enregistre rien dans le navigateur (ni cookie, ni `localStorage`).
- Les textes de /privacy/ et /support/ ne changent pas sur le fond ; les liens vers Apple et la CNIL restent valides.

## Evidence on Hand

- Captures d'écran définitives de l'app, en clair et en sombre (données d'exemple) : `src/assets/images/app/` (Séjours, Fiche, Passeport, Amis), copiées depuis `website-screenshots/` dans le dépôt de l'app.
- Icône : `public/stays-logo.png`, `public/apple-touch-icon.png`.
- Aucun avis, aucune note, aucun chiffre d'utilisateurs, aucune presse : n'en inventer aucun.

## Product Principles

1. Montrer l'app telle qu'elle est : les captures prouvent, le texte explique.
2. Ne rien promettre que l'app ne fait pas, et rester aligné mot pour mot avec la politique de confidentialité.
3. La vie privée est un fait, pas un argument : on dit ce qui reste sur l'iPhone et ce qui passe par iCloud.

## Accessibility & Inclusion

WCAG 2.2 AA : contrastes, focus clavier visible, cibles tactiles de 44 px, respect de prefers-reduced-motion, prefers-reduced-transparency et prefers-contrast.
