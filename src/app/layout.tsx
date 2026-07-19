import type { Metadata, Viewport } from 'next';
import { JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import Dock from '@/components/Dock';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
});

const siteUrl = 'https://shahadathhs.pages.dev';
const name = 'Shahadath Hossen Sajib';
const shortDescription =
  'Backend Engineer specializing in scalable APIs, distributed systems, and AI-powered backend services using Node.js, NestJS, TypeScript, and Python.';
const longDescription =
  'Backend Engineer building scalable APIs, distributed systems, and AI-powered backend services with Node.js, NestJS, TypeScript, and Python. Experienced in designing high-performance RESTful APIs, real-time applications, and event-driven architectures — with hands-on expertise in PostgreSQL, MongoDB, Redis, Docker, AWS, and CI/CD for production-grade deployments.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${name} — Backend Engineer (Node.js, NestJS, Python)`,
    template: `%s | ${name}`,
  },
  description: longDescription,
  applicationName: `${name} — Portfolio`,
  authors: [{ name, url: siteUrl }],
  creator: name,
  publisher: name,
  keywords: [
    'Shahadath Hossen Sajib',
    'Shahadath H. Sajib',
    'Sajib',
    'Backend Engineer',
    'Backend Developer',
    'Node.js',
    'NestJS',
    'FastAPI',
    'Express.js',
    'TypeScript',
    'JavaScript',
    'Python',
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'Prisma',
    'Drizzle',
    'Mongoose',
    'Docker',
    'AWS',
    'EC2',
    'S3',
    'Nginx',
    'Caddy',
    'GitHub Actions',
    'CI/CD',
    'Socket.IO',
    'WebRTC',
    'BullMQ',
    'Microservices',
    'REST API',
    'Event-Driven Architecture',
    'OpenAI',
    'Ollama',
    'RAG',
    'Vector Search',
    'AI',
    'LLM',
    'DevOps',
    'Dhaka',
    'Bangladesh',
    'Backend Portfolio',
  ],
  category: 'technology',
  classification: 'Backend Engineering Portfolio',
  referrer: 'origin-when-cross-origin',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
    },
  },
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: siteUrl,
    siteName: `${name} — Backend Engineer`,
    title: `${name} — Backend Engineer`,
    description: shortDescription,
    firstName: 'Shahadath',
    lastName: 'Hossen Sajib',
    username: 'shahadathhs',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: `${name} — Backend Engineer Portfolio`,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@shahadathhs',
    creator: '@shahadathhs',
    title: `${name} — Backend Engineer`,
    description: shortDescription,
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [{ url: '/icon', type: 'image/png' }],
    shortcut: ['/icon'],
    apple: [{ url: '/icon', type: 'image/png' }],
  },
  manifest: '/manifest.webmanifest',
  other: {
    'person-schema': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name,
      givenName: 'Shahadath',
      familyName: 'Hossen Sajib',
      jobTitle: 'Backend Engineer',
      description: shortDescription,
      url: siteUrl,
      email: 'mailto:shahadathhossensajib732@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dhaka',
        addressCountry: 'Bangladesh',
      },
      sameAs: [
        'https://github.com/shahadathhs',
        'https://www.linkedin.com/in/shahadathhs/',
        'https://medium.com/@shahadathhs',
        'https://leetcode.com/u/shahadathhs/',
        'https://x.com/shahadathhs',
        'https://shahadathhs.vercel.app',
      ],
      knowsAbout: [
        'Node.js',
        'NestJS',
        'FastAPI',
        'Express.js',
        'TypeScript',
        'JavaScript',
        'Python',
        'PostgreSQL',
        'MongoDB',
        'Redis',
        'Prisma',
        'Mongoose',
        'Drizzle',
        'Docker',
        'AWS',
        'Nginx',
        'Caddy',
        'GitHub Actions',
        'Socket.IO',
        'WebRTC',
        'BullMQ',
        'Microservices',
        'REST API',
        'Event-Driven Architecture',
        'OpenAI',
        'Ollama',
        'RAG',
        'Vector Search',
      ],
      worksFor: {
        '@type': 'Organization',
        name: 'Digital Pylot',
      },
      nationality: {
        '@type': 'Country',
        name: 'Bangladesh',
      },
    }),
    'profilepage-schema': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      mainEntity: {
        '@type': 'Person',
        name,
        url: siteUrl,
      },
    }),
    'website-schema': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: `${name} — Backend Engineer Portfolio`,
      url: siteUrl,
      author: { '@type': 'Person', name },
      inLanguage: 'en-US',
    }),
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

const jsonLdScripts = [
  metadata.other?.['person-schema'],
  metadata.other?.['profilepage-schema'],
  metadata.other?.['website-schema'],
].filter(Boolean);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {jsonLdScripts.map((json, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: json as string }}
          />
        ))}
      </head>
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased font-sans`}
      >
        <Dock />
        <main className="mx-auto max-w-2xl min-h-screen px-6 py-24">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
