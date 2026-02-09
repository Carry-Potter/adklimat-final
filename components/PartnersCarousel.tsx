'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

// Partner logotipi u /public/images/partners/ (logo-1.png do logo-11.png)
const partnerLogos: { src: string; alt: string }[] = [
  { src: '/images/partners/logo-1.png', alt: 'RTV' },
  { src: '/images/partners/logo-2.png', alt: 'Fish & Chips' },
  { src: '/images/partners/logo-3.png', alt: 'Petrus Caffe Gallery & Bar' },
  { src: '/images/partners/logo-4.png', alt: 'Mercator' },
  { src: '/images/partners/logo-5.png', alt: 'Univerexport' },
  { src: '/images/partners/logo-6.png', alt: 'Gondola' },
  { src: '/images/partners/logo-7.png', alt: 'Bosch' },
  { src: '/images/partners/logo-8.png', alt: 'Das Hotel' },
  { src: '/images/partners/logo-9.png', alt: 'Hotel Putnik Belgrade' },
  { src: '/images/partners/logo-10.png', alt: 'Ball Corporation' },
  { src: '/images/partners/logo-11.png', alt: 'Hotel Aleksandar' },
];

export function PartnersCarousel() {
  return (
    <section className="bg-[#0f1f38] py-10 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4">
        {/* Edge gradients */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#0f1f38] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#0f1f38] to-transparent z-10" />

        {/* Carousel */}
        <div className="overflow-hidden">
          <motion.div
            className="
              flex items-center
              gap-8 sm:gap-12 md:gap-16
              py-6
            "
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {[...partnerLogos, ...partnerLogos].map((partner, index) => (
              <div
                key={index}
                className="
                  flex-shrink-0
                  w-28 h-14
                  sm:w-36 sm:h-18
                  md:w-40 md:h-20
                  relative
                  flex items-center justify-center
                "
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  fill
                  className="
                    object-contain
                    opacity-60
                    transition-opacity
                    hover:opacity-100
                  "
                  sizes="(max-width: 640px) 112px, (max-width: 768px) 144px, 160px"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
