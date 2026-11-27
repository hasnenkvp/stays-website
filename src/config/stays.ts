// Réglages propres à Stays, lus par les pages et composants du site.

// URL de la fiche App Store de Stays : À REMPLACER au lancement par la vraie adresse
// (App Store Connect > Informations sur l'app > Identifiant Apple, au format id1234567890).
// Tant que l'identifiant fictif id0000000000 est présent, le build affiche un avertissement
// et les données structurées n'annoncent pas de lien de téléchargement.
export const APP_STORE_URL = 'https://apps.apple.com/fr/app/stays/id0000000000';
export const isAppStoreUrlPlaceholder = APP_STORE_URL.includes('id0000000000');
if (isAppStoreUrlPlaceholder && import.meta.env.PROD) {
  console.warn('[stays] APP_STORE_URL contient encore l’identifiant fictif id0000000000 (src/config/stays.ts).');
}

export const stays = {
  siteUrl: 'https://staysapp.fr',
  appStoreUrl: APP_STORE_URL,
  appStoreId: '', // identifiant numérique de l'app (sans « id ») : active la bannière Safari apple-itunes-app
  appStoreBadge: '/app-store-badge-fr.svg', // badge officiel Apple, en français
  ctaNote: 'Gratuit, pour iPhone', // sous le badge App Store
  supportEmail: 'support@staysapp.fr',
  privacyEmail: 'privacy@staysapp.fr', // contact « données personnelles » de la politique de confidentialité
  supportResponseTime: '5 jours ouvrés', // délai de réponse annoncé sur /support/ et dans la politique
  // Questions fréquentes, affichées sur l'accueil et sur /support/.
  // Chaque réponse doit rester conforme à src/pages/privacy.md.
  faq: [
    {
      q: 'Stays lit-elle mes mails ou mes comptes de réservation ?',
      a: 'Non. Vous ajoutez chaque séjour vous-même : cherchez l’hôtel, choisissez les dates, complétez ce qui vous est utile. Stays n’accède ni à vos mails, ni à vos comptes Booking, Airbnb ou autres.',
    },
    {
      q: 'Stays est-elle une application de réservation ?',
      a: 'Non. Stays ne propose aucune réservation d’hôtel. C’est un carnet personnel pour retrouver vos séjours, où que vous les ayez réservés.',
    },
    {
      q: 'Où sont stockées mes données et mes photos ?',
      a: 'Sur votre iPhone, et dans sa sauvegarde si vous l’avez activée. Stays n’exploite aucun serveur et n’a pas accès à vos séjours. Seule la fonction Amis, si vous l’utilisez, passe par votre iCloud.',
    },
    {
      q: 'Que voit un ami avec qui je partage mes séjours ?',
      a: 'Une fois sa demande acceptée, il voit vos séjours non annulés : hôtel, ville, pays, emplacement sur la carte, dates et heures d’arrivée et de départ. Jamais vos prix, photos, notes ni références de réservation. Amis demande iOS 26 et iCloud.',
    },
    {
      q: 'Combien coûte Stays ?',
      a: 'Rien. Stays ne propose ni achat intégré ni abonnement, et n’affiche aucune publicité.',
    },
    {
      q: 'Puis-je exporter mes séjours ?',
      a: 'Oui, à tout moment, au format CSV depuis les Réglages de l’app. Le fichier contient vos séjours et peut être réimporté ; les photos et les notes n’y figurent pas.',
    },
  ],
};

// FAQ courte de l'accueil. Chaque réponse doit rester conforme à src/pages/privacy.md.
export const homeFaq = [
  {
    q: 'Sur quels appareils fonctionne Stays ?',
    a: 'Stays est une app pour iPhone. Elle demande iOS 18.6 ou une version plus récente ; la fonction Amis demande iOS 26 et iCloud.',
  },
  {
    q: 'Combien coûte Stays ?',
    a: 'Rien. Stays se télécharge gratuitement sur l’App Store, sans achat intégré, sans abonnement et sans publicité.',
  },
  {
    q: 'Où sont stockées mes données ?',
    a: 'Sur votre iPhone, et dans sa sauvegarde si vous l’avez activée. Stays n’exploite aucun serveur et ne revend aucune donnée. Seule la fonction Amis, si vous l’utilisez, passe par votre iCloud.',
  },
  {
    q: 'Stays fonctionne-t-elle avec tous les hôtels ?',
    a: 'Oui. Cherchez l’hôtel dans Plans : Stays complète la ville, le pays et la chaîne, et affiche le logo des grands groupes comme Marriott, Hyatt, Hilton, Accor ou IHG. Un hôtel indépendant s’ajoute aussi, au besoin à la main.',
  },
  {
    q: 'Stays lit-elle mes mails ou mes comptes de réservation ?',
    a: 'Non. Vous ajoutez chaque séjour vous-même, ou importez un historique depuis un fichier CSV. Stays n’accède ni à vos mails, ni à vos comptes Booking, Airbnb ou autres.',
  },
];
