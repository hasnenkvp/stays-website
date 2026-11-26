import { getPermalink } from './utils/permalinks';
import { stays } from './config/stays';

export const headerData = {
  links: [] as Array<{ text?: string; href?: string; links?: Array<{ text?: string; href?: string }> }>,
  actions: [] as Array<{ text?: string; href?: string; variant?: string }>,
};

export const footerData = {
  links: [
    {
      title: 'Stays',
      links: [
        { text: 'Le séjour', href: '/#sejour' },
        { text: 'Le passeport', href: '/#passeport' },
        { text: 'Friends', href: '/#friends' },
        { text: 'Confidentialité', href: '/#confidentialite' },
      ],
    },
    {
      title: 'Assistance',
      links: [
        { text: 'Support', href: getPermalink('/support') },
        { text: stays.supportEmail, href: `mailto:${stays.supportEmail}` },
      ],
    },
    {
      title: 'Confidentialité',
      links: [{ text: 'Politique de confidentialité', href: getPermalink('/privacy') }],
    },
  ],
  secondaryLinks: [
    { text: 'Support', href: getPermalink('/support') },
    { text: 'Politique de confidentialité', href: getPermalink('/privacy') },
  ],
  socialLinks: [],
  footNote: `
    © ${new Date().getFullYear()} ${stays.publisher.name || 'staysapp.fr'}. Tous droits réservés.
  `,
};
