import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AD KLIMAT d.o.o. - Industrijska klimatizacija i ventilacija',
  description:
    'Projektovanje, proizvodnja i instalacija ventilacionih i klimatizacionih sistema za industrijske objekte širom Srbije od 2006. godine.',
  openGraph: {
    title: 'AD KLIMAT d.o.o. - Industrijska klimatizacija i ventilacija',
    description:
      'Premium rešenja za industrijsku klimatizaciju i ventilaciju od 2006. godine. Sopstvena proizvodnja, individualni pristup, transparentan proces.',
    locale: 'sr_RS',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr">
      <head>
        <link rel="preload" href="/images/hero-bg.png" as="image" />
      </head>
      <body>{children}</body>
    </html>
  );
}
