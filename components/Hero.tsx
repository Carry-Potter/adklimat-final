'use client';

import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Factory, Star, Handshake } from 'lucide-react';
import Image from 'next/image';

// LCP: statična slika (brza), zatim video za animaciju (WebM – manji od GIF-a)
const heroStaticSrc = '/images/hero-bg.png';
const heroVideoSrc = '/images/herovideo.webm';

export function Hero() {
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrollToNext = () => {
    document.getElementById('zasto-mi')?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      icon: Factory,
      label: 'Naša proizvodnja',
      description: 'Sopstvena proizvodnja ventilacionih kanala',
    },
    {
      icon: Star,
      label: 'Zadovoljni klijenti',
      description: 'Skoro 20 godina pouzdanosti',
    },
    {
      icon: Handshake,
      label: 'Dugoročni odnosi',
      description: 'Servis i održavanje sistema',
    },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden" style={{ minHeight: '100dvh' }}>
      {/* BACKGROUND - statična slika za brzi LCP, zatim video (WebM) preko */}
      <div className="absolute inset-0 min-h-[100dvh]">
        <Image
          src={heroStaticSrc}
          alt="Industrijska ventilacija i klimatizacija"
          fill
          className="object-cover"
          priority
          fetchPriority="high"
          sizes="100vw"
        />
        <video
          ref={videoRef}
          src={heroVideoSrc}
          poster={heroStaticSrc}
          autoPlay
          muted
          loop
          playsInline
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${videoReady ? 'opacity-100' : 'opacity-0'}`}
          onCanPlay={() => setVideoReady(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/80 via-[#0a1628]/60 to-[#0a1628]/95" />
      </div>

      {/* CONTENT */}
      <div
        className="
          relative z-10
          flex min-h-screen flex-col justify-center
          px-4 sm:px-6 lg:px-8
          text-center
          pt-[88px] sm:pt-[96px]
          pb-24
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-5xl"
        >
          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="
              mb-6
              text-3xl font-semibold leading-tight
              sm:text-4xl
              md:text-6xl
            "
          >
            Industrijska klimatizacija i ventilacija za sve objekte
          </motion.h1>

          {/* SUBTITLE */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="
              mx-auto mb-10 max-w-3xl
              text-base text-gray-300
              sm:text-lg
              md:text-xl
            "
          >
            Od projektovanja i sopstvene proizvodnje do ugradnje i održavanja – pouzdana rešenja od 2006. godine.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mb-12 flex flex-col justify-center gap-4 sm:flex-row"
          >
            <button
              onClick={() =>
                document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="
                w-full rounded-lg bg-[#ff6b35] px-8 py-4
                text-white transition-all
                hover:bg-[#ff5722]
                sm:w-auto
              "
            >
              Zatražite procenu na terenu
            </button>

            <button
              onClick={() =>
                document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="
                w-full rounded-lg border border-white px-8 py-4
                text-white transition-all
                hover:bg-white hover:text-[#0a1628]
                sm:w-auto
              "
            >
              Kontaktirajte nas
            </button>
          </motion.div>

          {/* FEATURES */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3"
          >
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <feature.icon
                  size={36}
                  strokeWidth={1.5}
                  className="mb-3 text-[#ff6b35]"
                />
                <h3 className="font-medium text-white">{feature.label}</h3>
                <p className="text-sm text-gray-300">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* SCROLL ARROW – desktop only */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          onClick={scrollToNext}
          className="
            absolute bottom-6 left-1/2
            -translate-x-1/2
            animate-bounce
            hidden sm:block
          "
        >
          <ChevronDown size={36} className="text-white/70" />
        </motion.button>
      </div>
    </section>
  );
}
