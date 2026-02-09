'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import Image from 'next/image';

// Slike koraka: /public/images/strategi.jpg, /public/images/process/step-3.png, step-4.png
// Step 2 koristi Unsplash sliku (eksterni URL)

export function ProcessSteps() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: '01',
      title: 'Proracun i planiranje',
      description: 'Nakon obilaska terena i dobijanja plana objekta, pravimo detaljnu skicu putanje ventilacionih kanala, koja omogucava najoptimalnije strujanje vazduha i funkcionalnost sistema. Na osnovu ove skice, svaki segment sistema se proracunava i segmentira u faze proizvodnje i montaze, tako da se delovi proizvode i postavljaju u tacno odredjenim etapama. Ovaj pristup omogucava da objekat nikada nije pretrpan, a radovi minimalno ometaju svakodnevno koriscenje prostora.',
      image: '/images/strategi.jpg',
      isExternal: false,
    },
    {
      number: '02',
      title: 'Izrada po meri i montaža',
      description: 'Na osnovu skice i tehnickog plana, naš tim kreira ventilacione kanale po meri, koristeci savremene CNC mašine i tehnologije. Precizna obrada omogucava fleksibilnost u dimenzijama i savršeno strujanje vazduha, cak i kod složenih objekata sa preprekama. Montaža se odvija po etapama, uz kontinuiranu kontrolu kvaliteta i poštovanje rokova.',
      image: 'https://images.unsplash.com/photo-1575305842946-0e807ce6f3fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbmMlMjBtYWNoaW5lJTIwbWV0YWx3b3JrJTIwZmFicmljYXRpb258ZW58MXx8fHwxNzY5NTM1MDAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      isExternal: true,
    },
    {
      number: '03',
      title: 'Završetak i kontrola kvaliteta',
      description: 'Kada je sistem postavljen, pristupamo detaljnoj kontroli kvaliteta i funkcionalnosti. Proveravamo komore, otvore i difuzore, balansiramo protok vazduha, testiramo rad ventilatora, prigušivaca i regulacionih elemenata. Svaki kanal je testiran na pritisak i brtvljenje, kako bismo eliminisali gubitke vazduha i energije.',
      image: '/images/process/step-3.png',
      isExternal: false,
    },
    {
      number: '04',
      title: 'Servis i održavanje',
      description: 'Sistem se pušta u rad, a uz plan redovnih kontrola i servisa, ventilacioni sistem ostaje dugotrajan, efikasan i pouzdan, pružajuci vam mir, udobnost i sigurnost. Naš tim je uvek dostupan za sve vrste održavanja i tehnicke podrške.',
      image: '/images/process/step-4.png',
      isExternal: false,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-[#ff6b35] text-sm uppercase tracking-wider mb-4">PROCES RADA U 4 KORAKA</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6">Ventilacioni sistemi po meri, bez kompromisa</h2>
        </motion.div>

        {/* Steps */}
        <div className="space-y-32">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className="relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                {/* Large Number - positioned behind image on mobile */}
                <div className="lg:col-span-2 flex justify-center lg:justify-start relative lg:static">
                  <span className="text-[192px] lg:text-[120px] font-bold text-gray-800/30 leading-none absolute lg:static -right-8 top-1/2 lg:top-auto -translate-y-1/2 lg:translate-y-0 z-0">
                    {step.number}
                  </span>
                </div>

                {/* Image */}
                <div className="lg:col-span-4 relative z-10">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 to-transparent" />
                  </div>
                </div>

                {/* Text Content */}
                <div className="lg:col-span-6 relative z-10">
                  <h3 className="text-xl sm:text-2xl md:text-3xl mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
