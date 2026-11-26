import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig, fontProviders } from 'astro/config';

import { unified } from '@astrojs/markdown-remark';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import compress from 'astro-compress';

import astrowind from './vendor/integration';

import { readingTimeRemarkPlugin, responsiveTablesRehypePlugin } from './src/utils/frontmatter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  server: {
    host: true,
    port: 4321,
  },

  // Prefetch links as they enter the viewport for snappier navigations
  // (works together with <ClientRouter />, which enables prefetch by default).
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },

  // API Fonts native : héberge, sous-ensemble et précharge Newsreader (titres)
  // et Instrument Sans (texte), avec des polices de repli ajustées.
  // Injectées par <Font /> dans Layout.astro, lues dans CustomStyles.astro.
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Newsreader',
      cssVariable: '--font-newsreader',
      weights: [300, 400],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
      fallbacks: ['Iowan Old Style', 'Georgia', 'serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Instrument Sans',
      cssVariable: '--font-instrument-sans',
      weights: [400, 500, 600],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['-apple-system', 'Helvetica Neue', 'Arial', 'sans-serif'],
    },
  ],

  integrations: [
    sitemap(),
    mdx(),
    icon({
      // Local SVG icons (used as <Icon name="file-name" />) live next to the other assets.
      iconDir: 'src/assets/icons',
      include: {
        tabler: ['sun', 'moon'],
      },
    }),

    compress({
      // csso off on purpose: its parser doesn't understand the media range
      // syntax Tailwind v4 emits for breakpoints (`@media (width>=48rem)`) and
      // silently drops every one of those blocks — the site then renders as if
      // all `md:`/`lg:` classes were missing. lightningcss parses it correctly.
      CSS: { csso: false, lightningcss: { minify: true } },
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false,
        },
      },
      Image: false,
      JavaScript: true,
      SVG: false,
      Logger: 1,
    }),

    astrowind({
      config: './src/config.yaml',
    }),
  ],

  image: {
    // Images locales uniquement (src/assets/images), optimisées par Sharp au build.
    responsiveStyles: true,
  },

  markdown: {
    processor: unified({
      remarkPlugins: [readingTimeRemarkPlugin],
      rehypePlugins: [responsiveTablesRehypePlugin],
    }),
    shikiConfig: {
      // Code blocks follow the site theme; see the `.astro-code` rules in tailwind.css.
      themes: { light: 'github-light', dark: 'github-dark' },
    },
  },

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
