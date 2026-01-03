import type { Metadata } from "next";
import { JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${mono.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
