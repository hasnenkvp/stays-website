// Réglages propres à Stays, lus par les pages et composants du site.
export const stays = {
  siteUrl: 'https://staysapp.fr',
  appStoreUrl: '', // vide = aucun bouton ni lien App Store affiché
  appStoreId: '', // vide = pas de balise apple-itunes-app
  appStoreBadge: '/app-store-badge-fr.svg', // badge officiel Apple, en français
  supportEmail: 'support@staysapp.fr',
  privacyEmail: 'privacy@staysapp.fr', // contact « données personnelles » de la politique de confidentialité
  supportResponseTime: '5 jours ouvrés', // délai de réponse annoncé sur /support/ et dans la politique
  publisher: { name: 'Hasnen Nourah' }, // affiché dans le pied de page
  // Questions fréquentes, affichées sur l'accueil et sur /support/.
  // Chaque réponse doit rester conforme à src/pages/privacy.md.
  faq: [
    {
      q: 'Stays est-elle une application de réservation ?',
      a: 'Non. Stays ne propose aucune réservation d’hôtel. C’est un carnet personnel pour garder la mémoire de vos séjours et de vos adresses favorites.',
    },
    {
      q: 'Où sont stockées mes données et mes photos ?',
      a: 'Sur votre iPhone, et dans sa sauvegarde si vous l’avez activée. Stays n’exploite aucun serveur et n’a pas accès à vos séjours. Seule la fonction Amis, si vous l’utilisez, passe par votre iCloud.',
    },
    {
      q: 'Comment fonctionne le partage avec mes proches ?',
      a: 'Avec Amis (iOS 26 et iCloud), vous échangez vos séjours avec les personnes dont vous acceptez la demande, grâce à un code à 6 chiffres. Une fois la demande acceptée, chacun voit les séjours non annulés de l’autre : hôtel, ville, dates. Jamais vos prix, photos, notes ni références de réservation.',
    },
    {
      q: 'Puis-je exporter mes séjours ?',
      a: 'Oui, à tout moment, au format CSV depuis les Réglages de l’app. Le fichier contient vos séjours et peut être réimporté ; les photos et les notes n’y figurent pas.',
    },
  ],
};
