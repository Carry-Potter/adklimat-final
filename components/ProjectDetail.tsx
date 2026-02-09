'use client';

import { motion } from 'motion/react';
import { MapPin, Square, Calendar, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectDetailProps {
  slug: string;
}

// Podaci o projektima
const projectsData: Record<string, any> = {
  'aqua-spa': {
    name: 'Wellness "Aqua Spa"',
    location: 'Novi Sad',
    area: '1 200 m²',
    year: '2023',
    description: 'Kompletan sistem ventilacije i odvlaživanja za bazen i spa centar sa naprednom kontrolom vlažnosti i temperature. Projekat je uključivao projektovanje, izradu ventilacionih kanala u sopstvenoj proizvodnji, ugradnju i puštanje u rad sistema.',
    challenge: 'Glavni izazov bio je održavanje optimalne vlažnosti u prostorima sa bazenima i spa zonama, uz istovremenu energetsku efikasnost sistema.',
    solution: 'Implementirali smo napredni sistem odvlaživanja sa rekuperacijom toplote, koji omogućava kontrolu vlažnosti na nivou 55-65% uz 40% uštedu energije.',
    mainImage: 'https://images.unsplash.com/photo-1592010411469-30da799fafa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2ltbWluZyUyMHBvb2wlMjBzcGElMjBodmFjJTIwZmFjaWxpdHl8ZW58MXx8fHwxNzY5Nzk3NDEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    gallery: [
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800',
      'https://images.unsplash.com/photo-1566665284699-0c56c9900619?w=800',
    ],
    features: [
      'Sistem odvlaživanja sa rekuperacijom',
      'Automatska kontrola vlažnosti',
      'Energetski efikasno rešenje',
      'Tiha ventilacija',
      'Održavanje kvaliteta vazduha',
    ],
  },
  'stara-kuca': {
    name: 'Restoran "Stara Kuca"',
    location: 'Beograd',
    area: '350 m²',
    year: '2022',
    description: 'Kompletna ventilacija kuhinje i trpezarije sa standardima za ugostiteljske objekte. Sistem omogucava efikasno uklanjanje mirisa i pare iz kuhinje uz održavanje komforne temperature u prostoru za goste.',
    challenge: 'Potreba za brzim uklanjanjem pare i mirisa iz kuhinje bez stvaranja promaje u restoranu.',
    solution: 'Instaliran je sistem sa kompenzacionim vazduhom i napom sa UV filterima, uz balansiranu ventilaciju prostora za goste.',
    mainImage: 'https://images.unsplash.com/photo-1769456455600-9aa2441a0fcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwa2l0Y2hlbiUyMHZlbnRpbGF0aW9uJTIwc3lzdGVtfGVufDF8fHx8MTc2OTc5NzQxM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    gallery: [
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
      'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800',
    ],
    features: [
      'Napa sa UV filterima',
      'Kompenzacioni vazduh',
      'Balansirana ventilacija',
      'Efikasno uklanjanje mirisa',
    ],
  },
  'square': {
    name: 'Poslovni centar "Square"',
    location: 'Beograd',
    area: '5 000 m²',
    year: '2024',
    description: 'Klimatizacija i ventilacija kancelarijskih prostora sa energetski efikasnim rešenjima. Sistem obezbedjuje optimalnu radnu temperaturu i kvalitet vazduha za preko 300 zaposlenih.',
    challenge: 'Velika površina i razlicite zone zahtevale su fleksibilno i energetski efikasno rešenje.',
    solution: 'VRV sistem sa individualnom kontrolom temperatura po zonama i rekuperacijom toplote.',
    mainImage: 'https://images.unsplash.com/photo-1765336038488-fef640860341?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBidWlsZGluZyUyMG1vZGVybiUyMHZlbnRpbGF0aW9ufGVufDF8fHx8MTc2OTc5NzQxM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
    ],
    features: [
      'VRV sistem',
      'Zonalna kontrola',
      'Rekuperacija toplote',
      'Pametna regulacija',
    ],
  },
  'techpro': {
    name: 'Proizvodni pogon "TechPro"',
    location: 'Kragujevac',
    area: '3 500 m²',
    year: '2023',
    description: 'Industrijska ventilacija proizvodne hale sa kontrolom temperature i cirkulacije vazduha.',
    challenge: 'Uklanjanje zagadjenja iz proizvodnog procesa uz održavanje stabilne temperature.',
    solution: 'Centralizovani sistem ventilacije sa filtriranjem i kontrolom protoka vazduha.',
    mainImage: 'https://images.unsplash.com/photo-1761396716215-9ccb2a7eda9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMHdhcmVob3VzZSUyMGh2YWN8ZW58MXx8fHwxNzY5Nzk3NDE0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    gallery: [
      'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800',
      'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800',
    ],
    features: [
      'Industrijska ventilacija',
      'Filtriranje vazduha',
      'Kontrola temperature',
      'Visoka izdržljivost',
    ],
  },
  'panorama': {
    name: 'Hotel "Panorama"',
    location: 'Zlatibor',
    area: '8 000 m²',
    year: '2024',
    description: 'Kompletan HVAC sistem za hotel sa 120 soba, restoran, spa i konferencijske sale.',
    challenge: 'Razlicite potrebe prostora zahtevale su fleksibilan sistem.',
    solution: 'Zonalni VRV sistem sa centralnim upravljanjem i individual kontrolom po sobama.',
    mainImage: 'https://images.unsplash.com/photo-1694595437436-2ccf5a95591f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGJ1aWxkaW5nJTIwbW9kZXJuJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2OTc5NzQxNHww&ixlib=rb-4.1.0&q=80&w=1080',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    gallery: [
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800',
    ],
    features: [
      'VRV sistem',
      'Centralno upravljanje',
      'Individualna kontrola',
      'Visoka efikasnost',
    ],
  },
};

export function ProjectDetail({ slug }: ProjectDetailProps) {
  const project = projectsData[slug];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const router = useRouter();

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0a1628] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Projekat nije pronadjen</h1>
          <Link
            href="/"
            className="px-6 py-3 bg-[#ff6b35] rounded-lg hover:bg-[#ff5722] transition-colors inline-block"
          >
            Nazad na pocetnu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a1628] text-white overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <Image
          src={project.mainImage}
          alt={project.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/70 via-[#0a1628]/50 to-[#0a1628]" />
        
        <Link
          href="/#projekti"
          className="absolute top-8 left-8 z-20 flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-lg hover:bg-white/20 transition-all"
        >
          <ArrowLeft size={20} />
          <span>Nazad</span>
        </Link>

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl mb-6">{project.name}</h1>
            <div className="flex flex-wrap gap-6 text-lg">
              <div className="flex items-center gap-2">
                <MapPin className="text-[#ff6b35]" size={24} />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Square className="text-[#ff6b35]" size={24} />
                <span>{project.area}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="text-[#ff6b35]" size={24} />
                <span>{project.year}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Description */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl mb-6">O projektu</h2>
          <p className="text-xl text-gray-300 leading-relaxed">{project.description}</p>
        </motion.section>

        {/* Video */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl mb-6">Video prezentacija</h2>
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900">
            <iframe
              src={project.videoUrl}
              title={`${project.name} - Video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </motion.section>

        {/* Challenge & Solution */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[rgb(15,31,56)] p-8 rounded-2xl"
          >
            <h3 className="text-2xl mb-4 text-[#ff6b35]">Izazov</h3>
            <p className="text-gray-300 leading-relaxed">{project.challenge}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[rgb(15,31,56)] p-8 rounded-2xl"
          >
            <h3 className="text-2xl mb-4 text-[#ff6b35]">Rešenje</h3>
            <p className="text-gray-300 leading-relaxed">{project.solution}</p>
          </motion.div>
        </div>

        {/* Features */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl mb-6">Karakteristike sistema</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.features.map((feature: string, index: number) => (
              <div
                key={index}
                className="bg-[rgb(15,31,56)] p-6 rounded-xl border border-[#ff6b35]/20 hover:border-[#ff6b35] transition-colors"
              >
                <p className="text-lg">{feature}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Gallery */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl mb-6">Galerija</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.gallery.map((image: string, index: number) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="aspect-video rounded-xl overflow-hidden cursor-pointer relative"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image}
                  alt={`${project.name} - Slika ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-[#ff6b35]/20 to-transparent p-12 rounded-2xl"
        >
          <h3 className="text-3xl mb-4">Zainteresovani za slican projekat?</h3>
          <p className="text-xl text-gray-300 mb-8">
            Kontaktirajte nas za besplatnu procenu i konsultacije na terenu
          </p>
          <Link
            href="/#kontakt"
            className="inline-block px-8 py-4 bg-[#ff6b35] text-white rounded-lg hover:bg-[#ff5722] transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Zatražite procenu
          </Link>
        </motion.div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-full max-h-full w-[90vw] h-[80vh]">
            <Image
              src={selectedImage}
              alt="Uvecana slika"
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
        </div>
      )}
    </div>
  );
}
