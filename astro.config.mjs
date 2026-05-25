import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://vampcrawlers.cc',
  adapter: cloudflare(),
  integrations: [
    starlight({
      title: 'Vampire Crawlers Wiki',
      description: 'Complete Vampire Crawlers guide: cards, characters, relics, dungeons, and beginner tips.',
      customCss: ['./src/styles/custom.css'],
      head: [
        { tag: 'meta', attrs: { name: 'google-site-verification', content: 'sw34vYyOTUEY2kP15vaIi540JMs1M7XHALaWKmASaMo' } },
      ],
      sidebar: [
        { label: 'Guides', items: [
          { label: "Beginner's Guide", link: '/guides/beginners-guide/' },
          { label: 'Cards List', link: '/guides/cards-list/' },
          { label: 'Characters', link: '/guides/characters-guide/' },
          { label: 'Relics Guide', link: '/guides/relics-guide/' },
          { label: 'Dungeons', link: '/guides/dungeons-guide/' },
          { label: 'Unlock Guide', link: '/guides/unlock-guide/' },
          { label: 'FAQ', link: '/guides/faq/' },
        ]},
      ],
    }),
    sitemap(),
  ],
});
