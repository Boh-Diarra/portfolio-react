import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/components.css";
import Header from "@/components/Header";
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Boh DIARRA - Développeur Web & Mobile | Portfolio",
  description: "Portfolio professionnel de Boh DIARRA, développeur web et mobile spécialisé en React, Next.js, et applications mobiles. Découvrez mes projets et compétences.",
  keywords: ["Boh DIARRA", "Développeur Web", "Développeur Mobile", "React", "Next.js", "Portfolio", "Bamako", "Mali"],
  authors: [{ name: "Boh DIARRA" }],
  creator: "Boh DIARRA",
  publisher: "Boh DIARRA",
  robots: "index, follow",
  openGraph: {
    title: "Boh DIARRA - Développeur Web & Mobile",
    description: "Portfolio professionnel de Boh DIARRA, développeur web et mobile",
    url: "https://boh-diarra.vercel.app",
    siteName: "Portfolio Boh DIARRA",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boh DIARRA - Développeur Web & Mobile",
    description: "Portfolio professionnel de Boh DIARRA",
  },
  alternates: {
    canonical: "https://boh-diarra.vercel.app",
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
        </ThemeProvider>
      </body>
    </html>
  );
}
