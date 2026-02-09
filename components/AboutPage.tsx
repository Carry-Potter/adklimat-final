'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import Image from 'next/image';

export function AboutPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const solutions = [
    {
      image: 'https://images.unsplash.com/photo-1766021736631-d2f15082aa59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZyUyMGhhbGwlMjBwcm9kdWN0aW9ufGVufDF8fHx8MTc3MDAzOTI3MHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Industrijske hale i proizvodnja',
      description: 'Kontrola temperature, vlage i odvodjenje zagadjenog vazduha u kontinuiranom radu.',
    },
    {
      image: 'https://images.unsplash.com/photo-1758432137020-3b1ca24b1681?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJraW5nJTIwZ2FyYWdlJTIwdW5kZXJncm91bmQlMjB2ZW50aWxhdGlvbnxlbnwxfHx8fDE3NzAwMzkyNzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Garaže i parking prostori',
      description: 'Ventilacija i sistemi za odimljavanje u skladu sa propisima.',
    },
    {
      image: 'https://images.unsplash.com/photo-1744782996368-dc5b7e697f4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcwMDI2MzkyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Hoteli i ugostiteljstvo',
      description: 'Tiho, efikasno i energetski optimizovano rešenje za goste i osoblje.',
    },
    {
      image: 'https://images.unsplash.com/photo-1769147555720-71fc71bfc216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGludGVyaW9yJTIwbW9kZXJuJTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3NzAwMDc5NDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Zdravstvene ustanove',
      description: 'Precizna kontrola protoka vazduha i higijenskih uslova.',
    },
    {
      image: 'https://images.unsplash.com/photo-1762631203805-88841687ab4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2ltbWluZyUyMHBvb2wlMjB3ZWxsbmVzcyUyMHNwYSUyMGluZG9vcnxlbnwxfHx8fDE3NzAwMzkyNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Bazeni i wellness',
      description: 'Regulacija vlage i zaštita konstrukcije objekta.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[rgb(34,52,80)]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[#ff6b35] text-sm uppercase tracking-wider mb-4">NAŠA REŠENJA</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6">
            Industrijska HVAC rešenja u realnim uslovima rada
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Naši sistemi nisu projektovani &bdquo;po katalogu&ldquo;, vec prema realnim uslovima rada, nameni objekta i opterecenju prostora.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#ff6b35]/50 transition-all duration-300 group"
            >
              <div className="h-64 w-full overflow-hidden relative">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-3">{solution.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{solution.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
