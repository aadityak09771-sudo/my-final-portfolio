import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const siteUrl = "https://aadityakumar.vercel.app"; // Replace with your actual domain

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Aaditya Kumar | Full Stack MERN Developer',
    template: '%s | Aaditya Kumar',
  },
  description: 'Portfolio of Aaditya Kumar, a skilled Full Stack MERN Developer specializing in React, Node.js, MongoDB, and JavaScript. Explore my projects and skills.',
  keywords: ['Full Stack Developer', 'React Developer', 'MERN Stack', 'JavaScript Developer', 'Portfolio', 'Node.js', 'MongoDB', 'Frontend Developer', 'Backend Developer', 'Aaditya Kumar'],
  authors: [{ name: 'Aaditya Kumar', url: siteUrl }],
  creator: 'Aaditya Kumar',
  
  // Open Graph
  openGraph: {
    title: 'Aaditya Kumar | Full Stack MERN Developer',
    description: 'Explore the portfolio of Aaditya Kumar, a Full Stack MERN Developer showcasing projects in React, Node.js, and more.',
    url: siteUrl,
    siteName: 'Aaditya Kumar Portfolio',
    images: [
      {
        url: '/og-image.png', // Place in /public/og-image.png
        width: 1200,
        height: 630,
        alt: 'Aaditya Kumar Portfolio Open Graph Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Aaditya Kumar | Full Stack MERN Developer',
    description: 'Explore the portfolio of Aaditya Kumar, a Full Stack MERN Developer showcasing projects in React, Node.js, and more.',
    images: ['/og-image.png'], // Must be an absolute URL in production
  },

  // Favicons
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },

  // Robots and Sitemap
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Aaditya Kumar",
            "url": siteUrl,
            "sameAs": [
              "https://github.com/aadityak09771-sudo",
              "https://www.linkedin.com/in/aaditya-kumar-6271672b2"
            ],
            "jobTitle": "Full Stack MERN Developer",
            "worksFor": {
              "@type": "Organization",
              "name": "Brandmate Digital"
            } 
          }) }}
        />
      </body>
    </html>
  );
}
