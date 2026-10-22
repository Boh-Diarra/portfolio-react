import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import "../styles/components.css";
import Header from "@/components/Header";
import { ThemeProvider } from '@/components/ThemeProvider';
import FeedbackWidget from "@/components/FeedbackWidget";
import { socialLinks } from "@/config/socialLinks";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://bohdiarra.vercel.app";

// Données structurées (JSON-LD) : profil de la personne
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Boh DIARRA",
  jobTitle: "Développeur Fullstack & WordPress",
  url: siteUrl,
  image: `${siteUrl}/img/Profil2.webp`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bamako",
    addressCountry: "ML",
  },
  sameAs: socialLinks
    .filter((link) => link.name === "linkedin" || link.name === "github")
    .map((link) => link.href),
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Boh DIARRA · Développeur Fullstack & WordPress à Bamako",
    template: "%s | Boh DIARRA",
  },
  description: "Portfolio de Boh DIARRA, développeur fullstack & WordPress et responsable marketing digital à Bamako. Sites web, applications mobiles et marketing digital pour faire grandir votre activité.",
  keywords: ["Boh DIARRA", "Développeur Fullstack", "Développeur Web", "Développeur Mobile", "WordPress", "Marketing Digital", "React", "Next.js", "Portfolio", "Bamako", "Mali"],
  authors: [{ name: "Boh DIARRA" }],
  creator: "Boh DIARRA",
  publisher: "Boh DIARRA",
  robots: "index, follow",
  openGraph: {
    title: "Boh DIARRA - Développeur fullstack & responsable marketing digital",
    description: "Développeur fullstack & WordPress et responsable marketing digital, sites web, applications web & mobiles et marketing digital.",
    url: "https://bohdiarra.vercel.app",
    siteName: "Portfolio Boh DIARRA",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boh DIARRA - Développeur fullstack",
    description: "Développeur fullstack & WordPress et responsable marketing digital à Bamako.",
  },
  alternates: {
    canonical: "https://bohdiarra.vercel.app",
  },
  verification: {
    google: "475H7Y9ZXFW_VcEJv6RvGbCPD75w9Altx7bNCIz2xVs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem={true}
          disableTransitionOnChange={false}
          storageKey="portfolio-theme"
        >
        <Header />
        <main>{children}</main>
        <FeedbackWidget />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
