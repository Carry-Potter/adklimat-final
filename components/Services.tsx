'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Wind, Thermometer, Factory, Wrench, Package } from 'lucide-react';

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Thermometer,
      title: 'Industrijska klimatizacija',
      description: 'Klimatizacioni sistemi za hale, fabrike i velike objekte sa posebnim zahtevima.',
    },
    {
      icon: Wind,
      title: 'Ventilacioni sistemi',
      description: 'Projektovanje i izvođenje ventilacije za restorane, bazene, podrume i industrijske prostore.',
    },
    {
      icon: Factory,
      title: 'Proizvodnja ventilacionih kanala',
      description: 'Sopstvena proizvodnja pravougaonih ventilacionih kanala i fazonskih komada.',
    },
    {
      icon: Wrench,
      title: 'Servis i održavanje',
      description: 'Preventivno i interventno održavanje ventilacione i klimatizacione opreme.',
    },
    {
      icon: Package,
      title: 'Distribucija i ugradnja opreme',
      description: 'Prodaja i ugradnja klima uređaja i HVAC opreme renomiranih proizvođača.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4">Delatnosti</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 bg-[#0f1f38] rounded-lg border border-transparent hover:border-[#ff6b35] transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
            >
              <div className="mb-6 text-[#ff6b35] group-hover:scale-110 transition-transform duration-300">
                <service.icon size={48} />
              </div>
              <h3 className="text-xl md:text-2xl mb-4 group-hover:text-[#ff6b35] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}