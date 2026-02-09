'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import Image from 'next/image';

// NAPOMENA: Sačuvajte originalnu sliku iz Figma exporta u /public/images/rooftop-installation.png
const rooftopImageSrc = '/images/rooftop-installation.png';

export function WhyAdKlimat() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Images */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src={rooftopImageSrc}
                alt="Montaža na krovu - AD KLIMAT projekat"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-[#ff6b35] text-sm uppercase tracking-wider">
              ZAŠTO AD KLIMAT
            </p>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl">
              Individualni pristup <span className="text-[#ff6b35]">od 2006.</span>
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Od planiranja i sopstvene proizvodnje ventilacionih kanala do montaže, ceo proces je jasno definisan i pod tvojom kontrolom. U svakom trenutku znaš u kojoj si fazi projekat, koji su rokovi i šta dobijaš na kraju. Naš stručni tim vodi računa o svim specifičnostima prostora – bilo da je u pitanju bazen, restoran, garaza, zgrada ili posebni tehnički zahtevi – kako bi sistem bio pouzdan, dugotrajаn i usklađen sa realnim potrebama tvog objekta.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
