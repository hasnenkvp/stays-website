import { getPermalink } from './utils/permalinks';
import { stays } from './config/stays';

// En-tête : les deux pages utiles hors de l'accueil.
export const headerData = {
  links: [
    { text: 'Assistance', href: getPermalink('/support') },
    { text: 'Confidentialité', href: getPermalink('/privacy') },
  ],
};

// Pied de page : une ligne, sans nom de personne.
export const footerData = {
  links: [
    { text: 'Assistance', href: getPermalink('/support') },
    { text: 'Confidentialité', href: getPermalink('/privacy') },
    { text: stays.supportEmail, href: `mailto:${stays.supportEmail}` },
  ],
  footNote: `© ${new Date().getFullYear()} Stays`,
};
