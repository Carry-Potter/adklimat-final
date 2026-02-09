'use client';

import { motion, useInView, AnimatePresence } from 'motion/react';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Square } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export function ProjectsCarousel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const router = useRouter();

  const projects = [
    {
      name: 'Restoran "Stara Kuca"',
      slug: 'stara-kuca',
      location: 'Beograd',
      area: '350 m²',
      description: 'Kompletna ventilacija kuhinje i trpezarije sa standardima za ugostiteljske objekte',
      image: 'https://images.unsplash.com/photo-1769456455600-9aa2441a0fcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwa2l0Y2hlbiUyMHZlbnRpbGF0aW9uJTIwc3lzdGVtfGVufDF8fHx8MTc2OTc5NzQxM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Wellness "Aqua Spa"',
      slug: 'aqua-spa',
      location: 'Novi Sad',
      area: '1 200 m²',
      description: 'Sistem ventilacije i odvlaživanja za bazen i spa centar sa kontrolom vlažnosti',
      image: 'https://images.unsplash.com/photo-1592010411469-30da799fafa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2ltbWluZyUyMHBvb2wlMjBzcGElMjBodmFjJTIwZmFjaWxpdHl8ZW58MXx8fHwxNzY5Nzk3NDEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Poslovni centar "Square"',
      slug: 'square',
      location: 'Beograd',
      area: '5 000 m²',
      description: 'Klimatizacija i ventilacija kancelarijskih prostora sa energetski efikasnim rešenjima',
      image: 'https://images.unsplash.com/photo-1765336038488-fef640860341?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBidWlsZGluZyUyMG1vZGVybiUyMHZlbnRpbGF0aW9ufGVufDF8fHx8MTc2OTc5NzQxM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Proizvodni pogon "TechPro"',
      slug: 'techpro',
      location: 'Kragujevac',
      area: '3 500 m²',
      description: 'Industrijska ventilacija proizvodne hale sa kontrolom temperature i cirkulacije vazduha',
      image: 'https://images.unsplash.com/photo-1761396716215-9ccb2a7eda9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMHdhcmVob3VzZSUyMGh2YWN8ZW58MXx8fHwxNzY5Nzk3NDE0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Hotel "Panorama"',
      slug: 'panorama',
      location: 'Zlatibor',
      area: '8 000 m²',
      description: 'Kompletan HVAC sistem za hotel sa 120 soba, restoran, spa i konferencijske sale',
      image: 'https://images.unsplash.com/photo-1694595437436-2ccf5a95591f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGJ1aWxkaW5nJTIwbW9kZXJuJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2OTc5NzQxNHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const getCardStyle = (offset: number) => {
    const absOffset = Math.abs(offset);
    
    if (absOffset > 2) return { display: 'none' };
    
    const baseTranslateX = offset * 350;
    const scale = offset === 0 ? 1 : 0.8 - absOffset * 0.1;
    const opacity = offset === 0 ? 1 : 0.4 - absOffset * 0.15;
    const rotateY = offset * -15;
    const translateZ = offset === 0 ? 0 : -100 * absOffset;
    const zIndex = offset === 0 ? 50 : 30 - absOffset * 10;
    
    return {
      x: baseTranslateX,
      scale,
      opacity,
      rotateY,
      z: translateZ,
      zIndex,
    };
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + projects.length) % projects.length;
      cards.push({ ...projects[index], offset: i, id: index });
    }
    return cards;
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[rgb(15,31,56)] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4">REALIZOVANI PROJEKTI</h2>
          <p className="text-xl text-gray-300">
            Pogledajte kako naša rešenja funkcionišu u realnim objektima
          </p>
        </motion.div>

        {/* Carousel Container with Perspective */}
        <div className="relative" style={{ perspective: '2000px' }}>
          <div className="flex items-center justify-center h-[550px] relative">
            <AnimatePresence initial={false}>
              {getVisibleCards().map((project) => {
                const isCurrent = project.offset === 0;
                const style = getCardStyle(project.offset);
                
                return (
                  <motion.div
                    key={project.id}
                    initial={false}
                    animate={style}
                    transition={{
                      duration: 0.7,
                      ease: [0.32, 0.72, 0, 1],
                    }}
                    className="absolute w-[320px] cursor-pointer"
                    style={{
                      transformStyle: 'preserve-3d',
                    }}
                    onClick={() => {
                      if (project.offset > 0) nextSlide();
                      else if (project.offset < 0) prevSlide();
                      else if (isCurrent) router.push(`/projekti/${project.slug}`);
                    }}
                  >
                    <motion.div
                      className={`relative rounded-2xl overflow-hidden shadow-2xl transition-shadow duration-500 ${
                        isCurrent ? 'shadow-[0_0_40px_rgba(255,107,53,0.4)]' : ''
                      }`}
                      whileHover={isCurrent ? { y: -10 } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      {isCurrent && (
                        <motion.div
                          className="absolute inset-0 border-4 border-[#ff6b35] rounded-2xl z-10 pointer-events-none"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                      
                      <div className="aspect-[3/4] relative">
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="object-cover"
                          sizes="320px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/40 to-transparent" />
                      </div>
                      
                      <motion.div 
                        className="absolute bottom-0 left-0 right-0 p-6"
                        animate={{
                          y: isCurrent ? 0 : 20,
                          opacity: isCurrent ? 1 : 0.7,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <h3 className="text-xl font-semibold mb-3">{project.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-300 mb-2">
                          <MapPin size={16} className="text-[#ff6b35]" />
                          <span>{project.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <Square size={16} className="text-[#ff6b35]" />
                          <span>{project.area}</span>
                        </div>
                        {isCurrent && (
                          <div className="mt-3 text-sm text-[#ff6b35] hover:text-[#ff5722] transition-colors">
                            Kliknite za detalje →
                          </div>
                        )}
                      </motion.div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-[60] w-14 h-14 bg-[#ff6b35] rounded-full flex items-center justify-center hover:bg-[#ff5722] transition-all duration-300 shadow-xl hover:scale-110"
            aria-label="Previous project"
          >
            <ChevronLeft size={28} strokeWidth={2.5} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-[60] w-14 h-14 bg-[#ff6b35] rounded-full flex items-center justify-center hover:bg-[#ff5722] transition-all duration-300 shadow-xl hover:scale-110"
            aria-label="Next project"
          >
            <ChevronRight size={28} strokeWidth={2.5} />
          </button>
        </div>

        {/* Current Project Description */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="mt-12 text-center max-w-2xl mx-auto"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              {projects[currentIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-10">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`transition-all duration-500 rounded-full ${
                index === currentIndex 
                  ? 'bg-[#ff6b35] w-12 h-3' 
                  : 'bg-gray-600 w-3 h-3 hover:bg-gray-500'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
