---
title: 'Politique de confidentialité'
description: "Politique de confidentialité de l'application iOS Stays et du site web staysapp.fr"
lastUpdated: '2026-10-28'
layout: '~/layouts/MarkdownLayout.astro'
---

# Politique de Confidentialité — Stays

_Dernière mise à jour : 28 octobre 2026_

La protection de vos données personnelles et le respect de votre vie privée sont au cœur de la conception de **Stays**. Cette politique de confidentialité détaille l'ensemble des flux de données, principes de sécurité et traitements appliqués dans l'application iOS Stays et sur le site officiel [staysapp.fr](https://staysapp.fr/).

---

## 1. Éditeur et contact

- **Éditeur de l'application :** Hasnen Nourah, personne physique domiciliée en France.
- **Assistance générale et technique :** [support@staysapp.fr](mailto:support@staysapp.fr)
- **Contact dédié aux données personnelles (DPO/Privacy) :** [privacy@staysapp.fr](mailto:privacy@staysapp.fr)

Stays est une application de suivi et de cartographie de vos séjours personnels. Son utilisation ne nécessite **aucune création de compte utilisateur** auprès de l'éditeur. L'éditeur n'exploite aucun serveur applicatif propre destiné à collecter, héberger, analyser ou monétiser vos séjours.

---

## 2. Principes fondamentaux de Stays

L'architecture technique de Stays repose sur trois principes stricts :

1. **Local-First (Priorité au stockage local) :** Vos données (séjours, notes, photos, programmes de fidélité) sont créées et stockées directement sur votre appareil iOS via SwiftData.
2. **Zéro serveur propriétaire :** Stays n'héberge aucune base de données centrale. Seuls les services natifs d'Apple (iCloud / CloudKit et Apple Plans) sont sollicités lorsque des fonctionnalités connectées sont expressément requises.
3. **Zéro pistage tiers :** Aucun outil de mesure d'audience (Google Analytics, Firebase Analytics, Meta SDK, etc.), aucun traceur publicitaire et aucun identifiant inter-applications (IDFA) ne sont intégrés dans l'application.

---

## 3. Traitements de données au sein de l'application iOS

### A. Stockage local des données de séjours

Les informations saisies dans Stays sont conservées localement dans la base de données privée de l'appareil :

- **Détails des séjours :** nom de l’hôtel, dates d’arrivée et de départ, horaires, référence de réservation, type et numéro de chambre, plateforme de réservation, montant et devise, date limite et conditions d'annulation, notes personnelles, avantages et mentions de souvenirs.
- **Voyages et regroupements :** intitulés de voyages, dates et notes associées.
- **Fidélité hôtelière :** programmes, statuts, numéros de membre, soldes de points, échéances et objectifs.
- **Photos personnelles :** photos de séjours conservées localement dans le conteneur sécurisé de l'application.
- **Préférences :** devise d’affichage, réglages d'interface et d'export.

**Sauvegardes de l’appareil :**  
La base locale suit le comportement standard d'iOS. Si vous avez activé la sauvegarde globale de votre appareil (sur iCloud ou sur un ordinateur Mac/PC), les données locales de Stays sont intégrées à cette sauvegarde chiffrée gérée par Apple.

---

### B. Services Apple de cartographie et de recherche (Plans / MapKit)

Pour faciliter la saisie de vos hôtels et afficher vos séjours sur une carte interactive, Stays utilise les API natives Apple MapKit :

- **Recherche d’hôtels :** le texte saisi dans la barre de recherche (à partir de 2 caractères) est transmis directement et de manière chiffrée aux serveurs d'Apple pour vous suggérer des adresses.
- **Géocodage inverse :** les coordonnées géographiques d'un hôtel sont transmises aux serveurs d'Apple pour déduire automatiquement la ville ou le pays associé lorsque ces informations manquent.
- **Position de l’appareil :** Stays **ne demande pas et n’utilise pas la position géographique en temps réel** de votre appareil (aucune demande d'autorisation de géolocalisation n'est sollicitée auprès d'iOS).

Les requêtes sont traitées par Apple conformément à son propre [Engagement de confidentialité](https://www.apple.com/fr/legal/privacy/).

---

### C. Données Friends (CloudKit)

La fonctionnalité **Friends** permet d'échanger des séjours de manière réciproque et privée avec des proches que vous invitez individuellement.

#### 1. Partage désactivé par défaut (Opt-in strict)

Le partage Friends est totalement désactivé par défaut. Aucun séjour, aucune photo et aucune information de profil n'est synchronisé ou publié tant que vous n'avez pas expressément choisi d'activer Friends et d'inviter un ami via un lien privé temporaire et réciproque. Le reste de l'application fonctionne parfaitement sans Friends.

#### 2. Stockage dans votre iCloud personnel via CloudKit

Toutes les données de la fonctionnalité Friends sont stockées et échangées directement au sein de votre espace iCloud personnel via le framework Apple CloudKit (zones privée et partagée `iCloud.com.stays.app`). Stays n'héberge aucune de ces données sur ses propres serveurs et n'agit à aucun moment comme intermédiaire technique.

#### 3. Informations de séjour partagées (`FriendStay`)

Pour chaque séjour que vous choisissez de partager, seules les informations suivantes sont lisibles par vos amis réciproques :

- Nom de l'établissement hôtelier, ville, pays, fuseau horaire, dates d'arrivée et de départ ;
- Type de chambre, plateforme de réservation, nom du voyageur, avantages hôteliers (_perks_) et date d'annulation gratuite ;
- Coordonnées de l'hôtel pour l'affichage cartographique.

**Données strictement exclues du partage :** vos notes personnelles, mentions de souvenirs intimes, références confidentielles de réservation, numéros de chambre et comptes de fidélité ne sont **jamais** partagés.

#### 4. Photos de séjour (`FriendPhoto`)

Les photos attachées à vos séjours restent strictement privées par défaut. Une photo n'est transmise que si vous choisissez individuellement de la rendre visible à vos amis, photo par photo. Avant tout transfert vers CloudKit, chaque photo est ré-encodée localement et purgée de l'ensemble de ses métadonnées sensibles (coordonnées GPS d'origine et horodatage de la prise de vue supprimés).

#### 5. Avatar et profil public (`FriendProfile.avatar`)

Votre profil d'amitié (prénom ou pseudonyme, biographie, résidence, marque préférée et photo d'avatar) est stocké de manière sécurisée sous forme d'asset CloudKit et n'est partagé qu'avec vos amis mutuels confirmés.

#### 6. Contrôle et suppression par l'utilisateur

Vous conservez la maîtrise permanente et absolue de vos données :

- **Masquage ciblé :** vous pouvez masquer à tout moment un séjour précis (et ses photos associées) : il disparaît instantanément de la vue de vos amis ;
- **Retrait d'un ami :** le retrait d'un ami révoque immédiatement et de manière bilatérale l'accès mutuel aux séjours et photos ;
- **Arrêt de Friends :** vous pouvez désactiver Friends depuis les Réglages pour supprimer l'intégralité de vos enregistrements et zones partagées de votre iCloud.

#### 7. Absence totale d'hébergement sur des serveurs Stays

Stays n'exploite aucun serveur centralisé de stockage ou de base de données. L'intégralité des flux repose exclusivement sur l'infrastructure CloudKit fournie et sécurisée par Apple.

---

### D. Notifications locales

- Stays peut programmer des rappels locaux sur votre appareil (échéances d'annulation gratuite, rappels de départ).
- Ces notifications sont gérées **exclusivement en local par votre appareil** et nécessitent votre accord préalable au niveau d'iOS.
- Aucun serveur distant de notifications push n'est utilisé (aucun jeton de push n'est collecté).

---

### E. Exports, sauvegardes et portabilité (RGPD)

- **Export à la demande :** vous pouvez générer à tout moment un export complet de vos séjours au format CSV ou une sauvegarde intégrale au format standard JSON depuis les Réglages.
- **Portabilité :** le fichier JSON contient l'intégralité de vos séjours, hôtels, voyages, devises et notes, et peut être restauré sur un autre appareil.
- **Nettoyage automatique :** les fichiers temporaires générés pour le partage iOS sont purgés au lancement suivant de l'application et lors de tout effacement des données.

---

### F. Modalités d’effacement des données

L'application propose des options transparentes et directes pour réinitialiser ou purger vos données :

1. **« Effacer les données de cet appareil » :** supprime immédiatement les bases locales, les photos, les historiques de célébration et suspend les publications Friends en tentant de retirer les séjours partagés sur iCloud.
2. **« Arrêter Friends et effacer » :** ordonne la suppression des zones partagées CloudKit, résilie les partages réciproques, puis efface intégralement les bases locales de l'appareil.

---

## 4. Données liées au site web (staysapp.fr)

Le site web [https://staysapp.fr/](https://staysapp.fr/) fonctionne de manière indépendante de l'application iOS :

- **Hébergement statique :** le site est hébergé via GitHub Pages (GitHub, Inc. / Microsoft Corporation). Lors de vos visites, l'infrastructure de l'hébergeur reçoit les données techniques d'acheminement des requêtes web (adresse IP, horodatage, agent utilisateur).
- **Absence de traceurs et cookies :** aucun cookie publicitaire, aucun outil d'analyse d'audience tiers et aucun script de pistage n'est utilisé.
- **Stockage local :** seul votre choix de thème d'affichage (mode clair ou sombre) est conservé localement dans votre navigateur (`localStorage.theme`).

---

## 5. Vos droits (Règlement Général sur la Protection des Données - RGPD)

Conformément à la réglementation européenne sur la protection des données (RGPD) et à la loi française « Informatique et Libertés », vous disposez des droits suivants :

- **Droit d'accès et de portabilité :** accès direct à vos données dans l'application et export complet en un clic au format JSON/CSV.
- **Droit de rectification et d'effacement :** modification ou suppression directe de vos séjours, photos et profils directement dans l'interface de l'application.
- **Droit de retrait du consentement :** désactivation de Friends à tout moment avec suppression des données partagées sur CloudKit.

Pour toute question ou pour exercer vos droits, vous pouvez contacter directement l'éditeur par courrier électronique à :
**[privacy@staysapp.fr](mailto:privacy@staysapp.fr)** _(ou [support@staysapp.fr](mailto:support@staysapp.fr))_.

En cas de litige non résolu, vous disposez également du droit d'introduire une réclamation auprès de l'autorité de contrôle compétente en France, la **CNIL (Commission Nationale de l'Informatique et des Libertés)** : [www.cnil.fr](https://www.cnil.fr/).
