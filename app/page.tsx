'use client';

import { Hero } from '@/components/Hero';
import { WhyAdKlimat } from '@/components/WhyAdKlimat';
import { VideoPresentation } from '@/components/VideoPresentation';
import { ProjectsCarousel } from '@/components/ProjectsCarousel';
import { PartnersCarousel } from '@/components/PartnersCarousel';
import { ProcessSteps } from '@/components/ProcessSteps';
import { AboutPage } from '@/components/AboutPage';
import { ContactPage } from '@/components/ContactPage';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-[#0a1628] text-white overflow-x-hidden">
      <Navigation />

      {/* HOME Section */}
      <section id="pocetna">
        <Hero />
      </section>

      {/* WHY AD KLIMAT Section */}
      <section id="zasto-mi">
        <WhyAdKlimat />
      </section>

      {/* PARTNERS Section */}
      <section id="partneri">
        <PartnersCarousel />
      </section>

      {/* VIDEO Section */}
      <section id="video">
        <VideoPresentation />
      </section>

      {/* PROCESS Section */}
      <section id="proces">
        <ProcessSteps />
      </section>

      {/* PROJECTS Section */}
      <section id="projekti">
        <ProjectsCarousel />
      </section>

      {/* ABOUT Section */}
      <section id="o-nama">
        <AboutPage />
      </section>

      {/* CONTACT Section */}
      <section id="kontakt">
        <ContactPage />
      </section>

      <Footer />
    </div>
  );
}
