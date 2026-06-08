import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import "../styles/components.css";
import Header from "@/components/Header";
import { ThemeProvider } from '@/components/ThemeProvider';
import FeedbackWidget from "@/components/FeedbackWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Développeur Fullstack & WordPress · Marketing Digital | Portfolio",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
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
