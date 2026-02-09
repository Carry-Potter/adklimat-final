/**
 * ============================================================
 * AD KLIMAT d.o.o. - Next.js Ready Codebase
 * ============================================================
 *
 * STRUKTURA FAJLOVA ZA NEXT.JS PROJEKAT:
 *
 * /public/images/
 *   hero-bg.png                     <- Figma export: hero pozadina
 *   rooftop-installation.png        <- Figma export: slika montaže na krovu
 *   video-poster.png                <- Figma export: video poster/thumbnail
 *   /partners/
 *     logo-1.png ... logo-9.png     <- Figma export: logotipi partnera
 *   /process/
 *     step-1.png                    <- Figma export: korak 1 slika
 *     step-3.png                    <- Figma export: korak 3 slika
 *     step-4.png                    <- Figma export: korak 4 slika
 *
 * /app/
 *   layout.tsx                      <- Root layout sa metadata
 *   page.tsx                        <- Pocetna stranica (sve sekcije)
 *   globals.css                     <- Globalni stilovi
 *   /projekti/[slug]/page.tsx       <- Dinamicka stranica projekta
 *   /karijera/page.tsx              <- Stranica za karijeru
 *
 * /components/
 *   Navigation.tsx    <- next/link, usePathname, useRouter
 *   Hero.tsx          <- next/image (fill, priority)
 *   WhyAdKlimat.tsx   <- next/image (fill)
 *   PartnersCarousel.tsx <- next/image (fill)
 *   VideoPresentation.tsx <- next/image (fill)
 *   ProcessSteps.tsx  <- next/image (fill)
 *   ProjectsCarousel.tsx <- next/image (fill), useRouter
 *   ProjectDetail.tsx <- next/image (fill, priority), next/link
 *   AboutPage.tsx     <- next/image (fill)
 *   KarijeraPage.tsx  <- next/image (fill, priority), next/link
 *   ContactPage.tsx   <- bez slika (samo forme)
 *   Footer.tsx        <- next/link
 *   Services.tsx      <- bez slika (samo ikone)
 *
 * /next.config.js     <- remotePatterns za images.unsplash.com
 *
 * NAPOMENA: Ovaj App.tsx fajl služi samo kao informativni
 * entry point za Figma Make okruženje. Za produkciju koristite
 * Next.js App Router strukturu iz /app/ direktorijuma.
 * ============================================================
 */

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white flex items-center justify-center p-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl mb-6">AD KLIMAT d.o.o.</h1>
        <p className="text-xl text-[#ff6b35] mb-8">Next.js Ready Codebase</p>

        <div className="bg-[#0f1f38] rounded-2xl p-8 text-left mb-8">
          <h2 className="text-2xl mb-4">Struktura projekta</h2>
          <div className="space-y-3 text-gray-300">
            <p><span className="text-[#ff6b35]">/app/page.tsx</span> — Pocetna stranica</p>
            <p><span className="text-[#ff6b35]">/app/projekti/[slug]/page.tsx</span> — Detalj projekta</p>
            <p><span className="text-[#ff6b35]">/app/karijera/page.tsx</span> — Stranica karijere</p>
            <p><span className="text-[#ff6b35]">/app/layout.tsx</span> — Root layout + SEO metadata</p>
            <p><span className="text-[#ff6b35]">/components/*.tsx</span> — Sve komponente (12 fajlova)</p>
            <p><span className="text-[#ff6b35]">/next.config.js</span> — Konfiguracija sa remotePatterns</p>
          </div>
        </div>

        <div className="bg-[#0f1f38] rounded-2xl p-8 text-left mb-8">
          <h2 className="text-2xl mb-4">Slike za /public/images/</h2>
          <div className="space-y-2 text-gray-300 text-sm">
            <p className="text-white mb-2">Exportujte iz Figme i sacuvajte:</p>
            <p><code className="text-[#ff6b35]">hero-bg.png</code> — Hero pozadina</p>
            <p><code className="text-[#ff6b35]">rooftop-installation.png</code> — Slika montaže</p>
            <p><code className="text-[#ff6b35]">video-poster.png</code> — Video thumbnail</p>
            <p><code className="text-[#ff6b35]">partners/logo-1.png ... logo-9.png</code> — Partner logotipi</p>
            <p><code className="text-[#ff6b35]">process/step-1.png, step-3.png, step-4.png</code> — Slike koraka</p>
          </div>
        </div>

        <div className="bg-[#0f1f38] rounded-2xl p-8 text-left">
          <h2 className="text-2xl mb-4">Pokretanje</h2>
          <div className="bg-[#0a1628] rounded-lg p-4 font-mono text-sm text-gray-300">
            <p>npx create-next-app@latest ad-klimat</p>
            <p className="text-gray-500"># Kopirajte /app, /components, /public direktorijume</p>
            <p>npm install motion lucide-react</p>
            <p>npm run dev</p>
          </div>
        </div>
      </div>
    </div>
  );
}
