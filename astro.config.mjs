import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://borck.education',
  integrations: [
    starlight({
      title: 'borck.education',
      description: 'AI-powered tools for educators',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/michael-borck' },
        { icon: 'external', label: 'borck.dev', href: 'https://borck.dev' },
        { icon: 'external', label: 'LocoLab', href: 'https://locolabo.org' },
      ],
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        { label: 'Home', link: '/' },
      ],
    }),
  ],
});
