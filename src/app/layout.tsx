import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Archivo_Black, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Vignette } from "@/components/ui/Vignette";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { Analytics } from "@/components/providers/Analytics";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const display = Archivo_Black({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

const serif = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kisans | Lær AI med guider og verktøy",
  description: "Din komplette ressurs for å lære AI-verktøy. Guider, blogger og tips for koding, jobb og skole.",
  keywords: ['ai verktøy', 'kunstig intelligens', 'ai guide norsk', 'lære ai', 'claude code', 'chatgpt', 'gemini', 'perplexity', 'github copilot', 'cursor ai', 'notebooklm', 'midjourney', 'ai for jobb', 'ai for skole', 'ai koding', 'prompt engineering', 'ai sikkerhet', 'ai agenter', 'lokal ai'],
  metadataBase: new URL('https://kisans.no'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'nb_NO',
    siteName: 'Kisans',
    title: 'Kisans | Lær AI med guider og verktøy',
    description: 'Din komplette ressurs for å lære AI-verktøy. Guider, blogger og tips for koding, jobb og skole.',
    url: 'https://kisans.no',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kisans | Lær AI med guider og verktøy',
    description: 'Din komplette ressurs for å lære AI-verktøy. Guider, blogger og tips for koding, jobb og skole.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try{if(localStorage.getItem('kisans-theme')==='light')document.documentElement.classList.add('light')}catch(e){}` }} />
      </head>
      <body
        className={`${inter.variable} ${mono.variable} ${display.variable} ${serif.variable} antialiased bg-background text-foreground overflow-x-hidden`}
      >
        <ThemeProvider>
          <SmoothScroll>
            <Vignette />
            <main className="relative min-h-screen">
              {children}
            </main>
            <CookieConsent />
          </SmoothScroll>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
