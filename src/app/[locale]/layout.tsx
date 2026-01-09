import type { Metadata } from "next";
import { JetBrains_Mono, Playfair_Display } from "next/font/google";
import '../globals.css';
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import SplashScreen from "../../components/splash-screen";
import AnimatedBackground from "@/src/components/ui/animated-background";

const playfair = Playfair_Display({ 
  variable: "--font-playfair-display",
  subsets: ['latin'], 
  style: ['normal', 'italic'], 
  weight: ['400', '600'] }
);
const mono = JetBrains_Mono({ 
  variable: "--font-jetbrains-mono",
  subsets: ['latin'], 
  style: ['normal', 'italic'], 
  weight: ['400'] }
);

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Andrey Pirola | Full Stack Developer",
    template: "%s | Andrey Pirola",
  },
  description: "Desenvolvedor Full Stack especializado em Next.js, React, TypeScript e interfaces modernas. Transformando ideias complexas em experiências digitais.",
  keywords: [
    "Full Stack Developer", 
    "React", 
    "Next.js", 
    "TypeScript", 
    "UI/UX Design", 
    "Desenvolvedor Web", 
    "Andrey Pirola"
  ],
  authors: [{ name: "Andrey Pirola", url: "https://github.com/drey-dev" }],
  creator: "Andrey Pirola",
  
  // Configuração para compartilhamento (LinkedIn, WhatsApp, Twitter)
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: BASE_URL,
    title: "Andrey Pirola - Portfólio & Projetos",
    description: "Confira meus projetos recentes em Engenharia de Software e Desenvolvimento Web.",
    siteName: "Andrey Pirola Portfolio",
  },
  
  // Robôs de busca
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
  alternates: {
  canonical: './',
  languages: {
    'pt': '/pt',
    'en': '/en',
  },
},
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body
        className={`${mono.variable} ${playfair.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <SplashScreen />
            <AnimatedBackground />
            {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
