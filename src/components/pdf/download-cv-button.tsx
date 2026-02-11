"use client";

import React, { useEffect, useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { CurriculumPDF } from './curriculum-pdf';
import { Download } from 'iconoir-react';
import { useMessages } from 'next-intl';

export const DownloadCVButton = ({ locale }: { locale: string }) => {
  const [isClient, setIsClient] = useState(false);
  const messages = useMessages(); // Pega todas as traduções atuais

  // Necessário para evitar Hydration Mismatch, pois o PDF é gerado apenas no browser
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Renderiza um placeholder enquanto carrega no cliente
    return (
      <button className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all cursor-pointer w-full sm:w-auto text-sm sm:text-base opacity-50">
        <Download className="w-4 h-4" />
        Loading...
      </button>
    );
  }

  return (
    <PDFDownloadLink
      document={<CurriculumPDF dict={messages} locale={locale} />}
      fileName={`CV_Andrey_Pirola_${locale.toUpperCase()}.pdf`}
      className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all cursor-pointer w-full sm:w-auto text-sm sm:text-base"
    >
      {({ loading }: { loading: boolean }) => (
        <>
          <Download className="w-4 h-4" />
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {loading ? 'Gerando PDF...' : (messages as any).HomePage.HeroPage.downloadCV}
        </>
      )}
    </PDFDownloadLink>
  );
};

export default DownloadCVButton;