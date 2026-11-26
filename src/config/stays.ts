export const stays = {
  siteUrl: 'https://staysapp.fr',
  appStoreUrl: '', // vide = aucun bouton ni lien App Store affiché
  appStoreId: '', // vide = pas de meta apple-itunes-app
  appStoreBadge: '/app-store-badge-fr.svg', // chemin du badge officiel Apple FR
  supportEmail: 'support@staysapp.fr',
  privacyEmail: { address: 'privacy@staysapp.fr', active: false }, // false = jamais affichée
  publisher: { name: 'Hasnen Nourah' }, // affiché dans le footer
  legal: { published: false }, // false = aucun lien vers /legal/ (ne crée pas cette page)
  friends: { status: 'available' as 'hidden' | 'available' },
  screenshots: {} as Record<string, { src: string; alt: string; width: number; height: number }>,
  faq: [
    {
      q: 'Stays est-elle une application de réservation ?',
      a: 'Non. Stays ne propose aucune réservation d’hôtel. C’est un carnet personnel pour conserver la mémoire de vos séjours et de vos adresses favorites.',
    },
    {
      q: 'Où sont stockées mes données et mes photos ?',
      a: 'Directement sur votre iPhone. Stays n’exploite aucun serveur applicatif propriétaire et n’a pas accès à vos séjours.',
    },
    {
      q: 'Comment fonctionne le partage avec mes proches ?',
      a: 'Le partage est strictement volontaire. Vous choisissez vous-même les séjours à envoyer à vos invités, sans fil d’actualité ni profil public.',
    },
    {
      q: 'Puis-je exporter mes séjours ?',
      a: 'Oui, à tout moment. Vous pouvez exporter l’ensemble de vos données aux formats standard JSON ou CSV directement depuis les réglages.',
    },
  ],
  ogImage: '/stays-logo.png',
};
