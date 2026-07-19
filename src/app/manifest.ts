import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Shahadath Hossen Sajib — Backend Engineer Portfolio',
    short_name: 'Sajib · Backend',
    description:
      'Backend Engineer specializing in scalable APIs, distributed systems, and AI-powered backend services using Node.js, NestJS, TypeScript, and Python.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#0a0a0a',
    orientation: 'portrait-primary',
    categories: ['technology', 'developer', 'portfolio', 'engineering'],
    lang: 'en-US',
    dir: 'ltr',
    icons: [
      {
        src: '/icon',
        sizes: '32x32',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };
}
