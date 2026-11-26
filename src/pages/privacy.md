---
title: 'Politique de confidentialité'
description: "Politique de confidentialité de l'application iOS Stays et du site web staysapp.fr : données conservées sur l'iPhone, services Apple, fonction Amis, site web et droits RGPD."
lastUpdated: '2026-11-26'
layout: '~/layouts/MarkdownLayout.astro'
---

La protection de vos données personnelles et le respect de votre vie privée sont au cœur de la conception de **Stays**. Cette politique de confidentialité détaille l'ensemble des flux de données, principes de sécurité et traitements appliqués dans l'application iOS Stays et sur le site officiel [staysapp.fr](https://staysapp.fr/).

## 1. Éditeur et contact

- **Éditeur de l'application :** Hasnen Nourah, personne physique domiciliée en France.
- **Assistance générale et technique :** [support@staysapp.fr](mailto:support@staysapp.fr)
- **Contact dédié aux données personnelles (DPO/Privacy) :** [privacy@staysapp.fr](mailto:privacy@staysapp.fr)

Stays est une application de suivi et de cartographie de vos séjours personnels. Son utilisation ne nécessite **aucune création de compte utilisateur** auprès de l'éditeur. L'éditeur n'exploite aucun serveur applicatif propre destiné à collecter, héberger, analyser ou monétiser vos séjours.

## 2. Principes fondamentaux de Stays

L'architecture technique de Stays repose sur quatre principes stricts :

1. **Local-First (Priorité au stockage local) :** Vos données (séjours, notes, photos) sont créées et stockées directement sur votre appareil iOS via SwiftData. Elles suivent la sauvegarde de votre appareil si vous l'avez activée (voir 3.A). Elles ne sont pas synchronisées entre vos appareils.
2. **Zéro serveur propriétaire :** Stays n'héberge aucune base de données sur ses propres serveurs. Seuls les services natifs d'Apple (iCloud / CloudKit et Apple Plans) sont sollicités lorsque des fonctionnalités connectées sont expressément requises.
3. **Zéro pistage tiers :** Aucun outil de mesure d'audience (Google Analytics, Firebase Analytics, Meta SDK, etc.), aucun traceur publicitaire et aucun identifiant inter-applications (IDFA) ne sont intégrés dans l'application.
4. **Aucun achat ni paiement :** l'application ne propose aucun achat intégré ni abonnement et ne traite aucune donnée de paiement.

## 3. Traitements de données au sein de l'application iOS

### A. Stockage local des données de séjours

Les informations saisies dans Stays sont conservées localement dans la base de données privée de l'appareil :

- **Détails des séjours :** nom de l’hôtel, dates d’arrivée et de départ, horaires, référence de réservation, type et numéro de chambre, plateforme de réservation, montant et devise, date limite et conditions d'annulation, notes personnelles, avantages et mentions de souvenirs.
- **Photos personnelles :** photos de séjours conservées localement dans le conteneur sécurisé de l'application.
- **Préférences :** devise d’affichage, réglages d'interface et d'export.

**Voyages et comptes de fidélité :** ces deux fonctions ont été retirées de l'application. Les voyages et comptes de fidélité que vous aviez saisis ont été supprimés de votre appareil lors de la mise à jour, et Stays n'en conserve plus aucun. La ligne « Programme » d'une fiche de séjour reste une simple indication reconnue à partir du nom de l'hôtel : ce n'est pas un compte de fidélité et rien n'est envoyé à un programme.

**Où vivent vos données :** sur votre appareil (base privée de Stays), puis, si vous l'avez activée, dans la sauvegarde de votre appareil. Stays ne synchronise pas aujourd'hui vos données entre vos appareils. Hors sauvegarde, export CSV et Amis (3.C), elles ne quittent pas votre appareil.

**Sauvegardes de l’appareil (sauvegarde iCloud ou ordinateur) :**  
La base locale suit le comportement standard d'iOS. Si vous avez activé la sauvegarde globale de votre appareil (sur iCloud ou sur un ordinateur Mac/PC), les données locales de Stays sont intégrées à cette sauvegarde chiffrée gérée par Apple.

### B. Services Apple de cartographie et de recherche (Plans / MapKit)

Pour faciliter la saisie de vos hôtels et afficher vos séjours sur une carte interactive, Stays utilise les API natives Apple MapKit :

- **Recherche d’hôtels :** le texte saisi dans la barre de recherche (à partir de 2 caractères) est transmis directement et de manière chiffrée aux serveurs d'Apple pour vous suggérer des adresses.
- **Géocodage inverse :** les coordonnées géographiques d'un hôtel sont transmises aux serveurs d'Apple pour déduire automatiquement la ville ou le pays associé lorsque ces informations manquent.
- **Position de l’appareil :** Stays **ne demande pas et n’utilise pas la position géographique en temps réel** de votre appareil (aucune demande d'autorisation de géolocalisation n'est sollicitée auprès d'iOS).

Les requêtes sont traitées par Apple conformément à son propre [Engagement de confidentialité](https://www.apple.com/fr/legal/privacy/).

### C. Amis : partage de vos séjours (CloudKit)

La fonctionnalité **Amis** permet d'échanger vos séjours, de manière réciproque, avec les personnes dont vous avez accepté la demande. Elle est disponible à partir d'iOS 26.

#### 1. Facultatif et désactivé par défaut

Rien n'est publié tant que vous n'avez pas saisi votre prénom à la première ouverture de l'onglet Amis : un code à 6 chiffres est alors créé et publié avec ce prénom. Le prénom est vérifié sur votre appareil à la saisie (1 à 30 caractères ; lettres, espaces, tirets, apostrophes et points seulement ; ni chiffres, ni émojis, ni adresse ou lien, ni termes injurieux d'une liste locale). Un prénom reçu qui ne respecte pas ces règles est affiché « Ami ». Le reste de l'application fonctionne sans Amis. Un séjour n'est lisible par une personne qu'après votre acceptation de sa demande.

#### 2. Informations de séjour partagées

Une fois une demande acceptée, **tous vos séjours non annulés** (passés, en cours et à venir) sont lisibles par cet ami, et les siens par vous. Il n'existe pas de partage séjour par séjour. Seuls ces champs sont transmis :

- nom de l'hôtel, ville, pays ;
- position de l'hôtel (latitude et longitude) et fuseau horaire ;
- marque, groupe hôtelier et nombre d'étoiles ;
- dates d'arrivée et de départ, et heures si vous les avez précisées ;
- deux identifiants techniques sans signification, propres à votre appareil (séjour et hôtel).

**Jamais transmis :** prix, devise et toute donnée financière, photos, notes personnelles, souvenirs, références de réservation, type et numéro de chambre, plateforme de réservation, voyageurs, avantages hôteliers, conditions d'annulation.

Vos statistiques (séjours, nuits, pays) ne sont pas transmises : l'application de votre ami les calcule à partir des champs ci-dessus.

#### 3. Profil public et code ami

Votre code ami (6 chiffres, par exemple 839201) permet à une personne de vous envoyer une demande. Il est publié dans la base publique du conteneur iCloud de Stays, avec le **prénom ou pseudo que vous avez choisi** et l'**adresse technique de votre partage**. Toute personne utilisant Stays et connaissant votre code, ou l'identifiant technique de votre profil, peut lire ces trois informations, ainsi que l'identifiant opaque du compte qui les a créées. Le code ne comptant que 6 chiffres, il peut être deviné : une demande envoyée avec votre code n'ouvre aucun séjour sans votre acceptation. Cette adresse ne donne accès à aucun séjour sans votre acceptation. Cette base est administrée avec les outils d'Apple : l'éditeur y a techniquement accès.

#### 4. Où sont les données

Vos séjours partagés sont enregistrés dans votre espace iCloud personnel (zone privée partagée avec vos amis) et comptent dans votre stockage iCloud. Stays n'exploite aucun serveur propre. Sur votre appareil, l'application conserve votre code, votre prénom, ainsi que le prénom, le code et l'adresse de partage de vos amis. Les séjours de vos amis ne sont conservés qu'en mémoire, le temps d'utilisation de l'application.

#### 5. Identifiants iCloud reçus avec une demande

Lorsqu'une personne vous envoie une demande, Apple CloudKit transmet à votre appareil des informations sur son compte iCloud : selon le cas, son nom et son adresse e-mail ou son numéro de téléphone iCloud. **Il en va de même pour vos informations lorsque vous envoyez une demande : la personne visée, même si elle refuse, peut les recevoir sur son appareil par ce mécanisme d'Apple.**

Stays n'affiche pas ces informations, ne les enregistre pas et ne les inscrit dans aucun journal. L'application les garde seulement en mémoire, le temps de traiter la demande. Pour rattacher une demande au bon profil, elle utilise l'identifiant opaque du compte iCloud, sous forme d'empreinte, conservée sur l'appareil. N'envoyez une demande qu'à une personne de confiance.

#### 6. Contrôle et suppression

- **Retrait d'un ami :** coupe l'accès dans les deux sens et efface de votre appareil la copie de ses séjours. Ce qui a déjà été vu ne peut pas être repris.
- **« Supprimer mes données Amis » (Réglages) :** supprime votre profil public, votre zone de séjours et votre partage, quitte les partages reçus, puis vérifie le résultat par relecture et efface l'état local. Vos séjours restent sur votre appareil.
- **Réinstallation :** votre profil restant sur iCloud, l'application retrouve votre code et vos amis à l'ouverture de l'onglet Amis.

#### 7. Blocage et signalement

- **Bloquer une demande :** la demande est refusée et la personne est bloquée sur votre partage par le mécanisme de CloudKit (Apple) ; ses demandes suivantes sont écartées. Rien n'est partagé.
- **Retirer et bloquer un ami :** l'accès est retiré dans les deux sens (voir 6), puis sa prochaine demande est refusée d'office et bloquée de la même façon.
- **Persistance :** le blocage enregistré sur votre partage CloudKit demeure. La liste des personnes bloquées conservée sur votre appareil est effacée à la réinstallation de l'application ; « Supprimer mes données Amis » efface cette liste et supprime votre partage, donc les blocages qui y sont enregistrés.
- **Signaler :** l'application prépare un courriel vers [support@staysapp.fr](mailto:support@staysapp.fr), que vous envoyez vous-même depuis votre app de messagerie. Il contient le code et le prénom affiché de la personne signalée, le motif choisi et vos précisions facultatives. Il ne contient aucun séjour ni aucune identité iCloud. Votre adresse e-mail, comme pour tout courriel, est visible par l'éditeur.
- **Traitement :** chaque signalement est examiné manuellement par l'éditeur, qui peut supprimer le profil public concerné (code et prénom) de la base publique du conteneur iCloud de Stays (CloudKit, environnement de production).
- **Délai de traitement :** les signalements sont traités dans un délai de 5 jours ouvrés.
- **Conservation :** les courriels de signalement sont conservés 12 mois, puis supprimés, sauf conservation nécessaire pour répondre à une demande d'une autorité ou pour un litige.

#### 8. Ancienne version du partage (Friends)

Les anciennes données de la fonction Friends, si vous l'avez utilisée, restent dans votre iCloud jusqu'à leur suppression. « Supprimer les anciennes données Friends d'iCloud » (Réglages) les recherche et les supprime.

### D. Notifications

- **Locales :** Stays peut programmer des rappels sur votre appareil (veille de la fin de l'annulation gratuite, jour d'arrivée, jour de départ), avec votre accord préalable dans iOS. Rien n'est envoyé hors de l'appareil.
- **Amis :** une fois votre code créé, et avec votre accord, CloudKit peut vous envoyer une alerte neutre (« Amis : une demande d'ami ou une réponse vous attend. ») par le service de notifications d'Apple lorsque vos données Amis changent. Quand Stays est actif, il remplace cette alerte par une notification locale plus précise, créée sur votre appareil, qui peut contenir le prénom de l'ami concerné (par exemple « Camille a accepté votre demande d'ami. »). Le jeton de notification est géré par iOS et CloudKit ; Stays ne le lit pas et ne le transmet à personne. Ces alertes n'ont ni garantie de délai ni garantie d'arrivée.
- **Désactivation :** à tout moment dans Réglages de l'iPhone > Notifications > Stays.

### E. Exports, sauvegardes et portabilité (RGPD)

- **Export à la demande :** vous pouvez générer à tout moment un export de vos séjours au format CSV depuis les Réglages.
- **Portabilité :** le fichier CSV contient vos séjours (hôtel, ville, pays, dates, réservation, prix, statut, privilèges) et peut être réimporté ; les photos et les notes n'y figurent pas.
- **Nettoyage automatique :** les fichiers temporaires générés pour le partage iOS sont purgés au lancement suivant de l'application et lors de tout effacement des données.

### F. Modalités d’effacement des données

L'application propose des options transparentes et directes pour réinitialiser ou purger vos données :

1. **« Effacer les données de cet appareil » :** supprime immédiatement les bases locales, les photos et les historiques de célébration. Les séjours partagés avec vos amis sont retirés d'iCloud dès que possible ; vos amis restent dans Amis.
2. **« Supprimer mes données Amis » :** supprime votre profil public, votre zone de séjours et vos partages (voir C.6), sans toucher à vos séjours.
3. **« Arrêter Friends et effacer » :** supprime d'abord vos données Amis, puis les anciennes zones Friends et les partages reçus, et efface enfin les bases locales de l'appareil. Si une suppression en ligne n'est pas confirmée, rien d'autre n'est effacé.

## 4. Données liées au site web (staysapp.fr)

Le site web [https://staysapp.fr/](https://staysapp.fr/) fonctionne de manière indépendante de l'application iOS :

- **Hébergement statique :** le site est hébergé via GitHub Pages (GitHub, Inc. / Microsoft Corporation). Lors de vos visites, l'infrastructure de l'hébergeur reçoit les données techniques d'acheminement des requêtes web (adresse IP, horodatage, agent utilisateur).
- **Absence de traceurs et cookies :** aucun cookie publicitaire, aucun outil d'analyse d'audience tiers et aucun script de pistage n'est utilisé.
- **Stockage local :** seul votre choix de thème d'affichage (mode clair ou sombre) est conservé localement dans votre navigateur (`localStorage.theme`).

## 5. Vos droits (Règlement Général sur la Protection des Données - RGPD)

Conformément à la réglementation européenne sur la protection des données (RGPD) et à la loi française « Informatique et Libertés », vous disposez des droits suivants :

- **Droit d'accès et de portabilité :** accès direct à vos données dans l'application et export en un clic au format CSV.
- **Droit de rectification et d'effacement :** modification ou suppression directe de vos séjours, photos et profils directement dans l'interface de l'application.
- **Droit de retrait du consentement :** retrait d'un ami ou suppression de vos données Amis à tout moment, avec suppression des données partagées sur CloudKit.

Pour toute question ou pour exercer vos droits, vous pouvez contacter directement l'éditeur par courrier électronique à :
**[privacy@staysapp.fr](mailto:privacy@staysapp.fr)** _(ou [support@staysapp.fr](mailto:support@staysapp.fr))_.

En cas de litige non résolu, vous disposez également du droit d'introduire une réclamation auprès de l'autorité de contrôle compétente en France, la **CNIL (Commission Nationale de l'Informatique et des Libertés)** : [www.cnil.fr](https://www.cnil.fr/).
