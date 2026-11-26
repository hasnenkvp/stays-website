// Réglages propres à Stays, lus par les pages et composants du site.
export const stays = {
  siteUrl: 'https://staysapp.fr',
  appStoreUrl: '', // vide = pas de badge App Store : la mention availabilityLabel s'affiche à la place
  appStoreId: '', // vide = pas de balise apple-itunes-app
  appStoreBadge: '/app-store-badge-fr.svg', // badge officiel Apple, en français
  availabilityLabel: 'Bientôt sur l’App Store', // affiché tant que appStoreUrl est vide
  platformLabel: 'Pour iPhone', // sous l'appel à l'action : l'app n'existe que sur iPhone
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
