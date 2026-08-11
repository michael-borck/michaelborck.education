import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tools.borck.education',
  redirects: {
    // Former on-site tool pages now live on each tool's own domain. These
    // preserve old links and pass SEO signal to the canonical home (Astro
    // emits a noindex meta-refresh page with rel=canonical to the target).
    '/talk-buddy/': 'https://talkbuddy.borck.education',
    '/study-buddy/': 'https://studybuddy.borck.education',
    '/career-compass/': 'https://careercompass.borck.education',
    '/debrief/': 'https://debrief.borck.education',
    '/insight-lens/': 'https://insightlens.borck.education',
    '/document-lens/': 'https://documentlens.borck.education',
    // deep-talk was renamed to debrief (July 2026); send straight to its home.
    '/deep-talk/': 'https://debrief.borck.education',
  },
});
