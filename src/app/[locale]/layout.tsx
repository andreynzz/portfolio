import type { Metadata } from "next";
import { JetBrains_Mono, Playfair_Display } from "next/font/google";
import '../globals.css';
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import SplashScreen from "../../components/splash-screen";

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

export const metadata: Metadata = {
  title: "Portfolio - Andrey Pirola",
  description: "Portfolio showcasing projects and skills of Andrey Pirola.",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
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
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
