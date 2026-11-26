import { getPermalink } from './utils/permalinks';
import { stays } from './config/stays';

// En-tête : deux liens seulement, les pages utiles hors de l'accueil.
export const headerData = {
  links: [
    { text: 'Assistance', href: getPermalink('/support') },
    { text: 'Confidentialité', href: getPermalink('/privacy') },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Stays',
      links: [
        { text: 'Le séjour', href: '/#sejour' },
        { text: 'Le passeport', href: '/#passeport' },
        { text: 'Amis', href: '/#amis' },
        { text: 'Confidentialité', href: '/#confidentialite' },
      ],
    },
    {
      title: 'Assistance',
      links: [
        { text: 'Page d’assistance', href: getPermalink('/support') },
        { text: stays.supportEmail, href: `mailto:${stays.supportEmail}` },
      ],
    },
    {
      title: 'Confidentialité',
      links: [
        { text: 'Politique de confidentialité', href: getPermalink('/privacy') },
        { text: stays.privacyEmail, href: `mailto:${stays.privacyEmail}` },
      ],
    },
  ],
  footNote: `© ${new Date().getFullYear()} ${stays.publisher.name}. Tous droits réservés.`,
};
