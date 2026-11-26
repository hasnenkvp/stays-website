# staysapp.fr

Site officiel de **Stays**, carnet de séjours à l'hôtel pour iPhone. Site statique en français, construit avec
[Astro](https://astro.build/) et [Tailwind CSS](https://tailwindcss.com/), publié sur GitHub Pages au domaine
`staysapp.fr`.

## Pages

| URL         | Fichier                   | Rôle                                                                    |
| ----------- | ------------------------- | ----------------------------------------------------------------------- |
| `/`         | `src/pages/index.astro`   | Présentation de l'app                                                   |
| `/support/` | `src/pages/support.astro` | Assistance (URL d'assistance App Store Connect)                         |
| `/privacy/` | `src/pages/privacy.md`    | Politique de confidentialité (URL de confidentialité App Store Connect) |
| `/404.html` | `src/pages/404.astro`     | Page introuvable                                                        |

La politique publiée reprend `docs/legal/privacy-policy-fr.md` du dépôt de l'app. Toute modification de fond se fait
d'abord là-bas, puis est reportée ici, date de mise à jour comprise (`lastUpdated` dans l'en-tête du fichier).

## Réglages du site

- `src/config/stays.ts` : adresses e-mail, lien et identifiant App Store (vides tant que l'app n'est pas publiée : le
  badge et la balise `apple-itunes-app` n'apparaissent pas), éditeur, questions fréquentes.
- `src/config.yaml` : nom, domaine, métadonnées par défaut, langue, thème.
- `src/navigation.ts` : liens de l'en-tête et du pied de page.
- `src/components/CustomStyles.astro` : palette claire et sombre, polices.

## Développement

Node 22 ou plus récent.

```bash
npm ci            # installation
npm run dev       # serveur local sur http://localhost:4321
npm run build     # génère dist/
npm run preview   # sert dist/
npm run check     # astro check, ESLint, Prettier
```

## Publication

Le workflow `.github/workflows/deploy.yml` construit et publie le site sur GitHub Pages à chaque push sur `main`.
`.github/workflows/actions.yaml` lance les vérifications et le build sur les pull requests vers `main`.

## Origine

Le socle technique vient du gabarit [AstroWind](https://github.com/arthelokyo/astrowind) (licence MIT, voir
`LICENSE.md`). Les pages, composants et contenus de démonstration ont été retirés ; il reste l'intégration de
configuration (`vendor/integration`) et quelques utilitaires.
