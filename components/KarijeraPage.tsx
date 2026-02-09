'use client';

import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle, GraduationCap } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function KarijeraPage() {
  const [formData, setFormData] = useState({
    ime: '',
    prezime: '',
    email: '',
    telefon: '',
    iskustvo: '',
    poruka: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        ime: '',
        prezime: '',
        email: '',
        telefon: '',
        iskustvo: '',
        poruka: '',
      });
    }, 3000);
  };

  const benefits = [
    {
      image: 'https://images.unsplash.com/photo-1758798349125-5c297b18b8b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXJzJTIwdGVhbSUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzcwMDEzNTMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Profesionalni razvoj',
      description: 'Kontinuirana obuka i sertifikacija kroz rad na raznovrsnim projektima',
    },
    {
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIVkFDJTIwc3lzdGVtJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NzAwMzc5Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Timski rad',
      description: 'Rad sa iskusnim profesionalcima i podržavajucim timom',
    },
    {
      image: 'https://images.unsplash.com/photo-1581166418878-11f0dde922c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIVkFDJTIwdG9vbHMlMjBlcXVpcG1lbnQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcwMDM4MzcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Savremena oprema',
      description: 'Pristup najsavremenijim alatima i tehnologijama u industriji',
    },
    {
      image: 'https://images.unsplash.com/photo-1675093022653-59233299f8ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY29tcGFueSUyMGJ1aWxkaW5nJTIwc3RhYmxlfGVufDF8fHx8MTc3MDAzODM3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Stabilnost',
      description: 'Dugorocan posao u kompaniji sa tradicijom od 2006. godine',
    },
  ];

  const requirements = [
    'Poznavanje rada sa klimatizacionim i ventilacionim sistemima',
    'Osnovno poznavanje elektrike i mehanike',
    'Sposobnost rada na visini i u razlicitim uslovima',
    'Vozacka dozvola B kategorije (poželjno)',
    'Odgovornost, preciznost i posvecenost kvalitetu',
    'Želja za ucenjem i usavršavanjem',
  ];

  const responsibilities = [
    'Ugradnja i montaža klimatizacionih i ventilacionih sistema',
    'Montaža ventilacionih kanala',
    'Instalacija unutrašnjih i spoljašnjih jedinica',
    'Puštanje sistema u rad i testiranje',
    'Održavanje i servisiranje postojecih sistema',
    'Saradnja sa timom na kompleksnim projektima',
  ];

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1758798349125-5c297b18b8b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXJzJTIwdGVhbSUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzcwMDEzNTMxfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="AD KLIMAT Tim"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/70 via-[#0a1628]/60 to-[#0a1628]" />
        
        <Link
          href="/"
          className="absolute top-8 left-8 z-20 flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-lg hover:bg-white/20 transition-all"
        >
          <ArrowLeft size={20} />
          <span>Nazad</span>
        </Link>

        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl mb-6">
              Pridružite se našem timu
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
              Postanite deo AD KLIMAT tima i razvijte karijeru profesionalnog majstora u industriji klimatizacije i ventilacije
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Benefits */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl mb-12 text-center">
            Zašto raditi sa nama?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[rgb(15,31,56)] rounded-2xl hover:shadow-[0_0_30px_rgba(255,107,53,0.3)] transition-all duration-300 overflow-hidden"
              >
                <div className="h-48 w-full overflow-hidden relative">
                  <Image
                    src={benefit.image}
                    alt={benefit.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Job Description */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.section
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl mb-6">Opis posla</h2>
            <div className="bg-[rgb(15,31,56)] p-8 rounded-2xl">
              <p className="text-gray-300 mb-6 leading-relaxed">
                Tražimo motivisane i odgovorne majstore za rad na projektima industrijske klimatizacije i ventilacije. 
                Pružamo mogucnost obuke i sertifikacije, kao i rad na raznovrsnim objektima – od restorana i hotela 
                do proizvodnih hala i poslovnih centara.
              </p>
              <h3 className="text-xl mb-4 text-[#ff6b35]">Odgovornosti:</h3>
              <ul className="space-y-3">
                {responsibilities.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-[#ff6b35] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl mb-6">Uslovi i zahtevi</h2>
            <div className="bg-[rgb(15,31,56)] p-8 rounded-2xl">
              <h3 className="text-xl mb-4 text-[#ff6b35]">Šta ocekujemo:</h3>
              <ul className="space-y-3 mb-6">
                {requirements.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-[#ff6b35] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-[#0a1628] p-6 rounded-xl border border-[#ff6b35]/20">
                <h4 className="text-lg mb-3 text-[#ff6b35]">Šta nudimo:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>- Konkurentna zarada</li>
                  <li>- Stalna obuka i edukacija</li>
                  <li>- Rad na razlicitim projektima</li>
                  <li>- Mogucnost napredovanja</li>
                  <li>- Prijatna radna atmosfera</li>
                </ul>
              </div>
            </div>
          </motion.section>
        </div>

        {/* Contact Form */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Prijavite se za poziciju
            </h2>
            <p className="text-xl text-gray-300">
              Popunite formular i kontaktiracemo vas u najkracem roku
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-[rgb(15,31,56)] p-8 rounded-2xl">
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="ime" className="block text-sm mb-2">
                  Ime *
                </label>
                <input
                  type="text"
                  id="ime"
                  required
                  value={formData.ime}
                  onChange={(e) => setFormData({ ...formData, ime: e.target.value })}
                  className="w-full px-4 py-3 bg-[#0a1628] border border-gray-700 rounded-lg focus:border-[#ff6b35] focus:outline-none transition-colors text-white"
                  placeholder="Vaše ime"
                />
              </div>
              <div>
                <label htmlFor="prezime" className="block text-sm mb-2">
                  Prezime *
                </label>
                <input
                  type="text"
                  id="prezime"
                  required
                  value={formData.prezime}
                  onChange={(e) => setFormData({ ...formData, prezime: e.target.value })}
                  className="w-full px-4 py-3 bg-[#0a1628] border border-gray-700 rounded-lg focus:border-[#ff6b35] focus:outline-none transition-colors text-white"
                  placeholder="Vaše prezime"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="email" className="block text-sm mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-[#0a1628] border border-gray-700 rounded-lg focus:border-[#ff6b35] focus:outline-none transition-colors text-white"
                  placeholder="vas.email@primer.com"
                />
              </div>
              <div>
                <label htmlFor="telefon" className="block text-sm mb-2">
                  Telefon *
                </label>
                <input
                  type="tel"
                  id="telefon"
                  required
                  value={formData.telefon}
                  onChange={(e) => setFormData({ ...formData, telefon: e.target.value })}
                  className="w-full px-4 py-3 bg-[#0a1628] border border-gray-700 rounded-lg focus:border-[#ff6b35] focus:outline-none transition-colors text-white"
                  placeholder="+381 60 123 4567"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="iskustvo" className="block text-sm mb-2">
                Radno iskustvo
              </label>
              <select
                id="iskustvo"
                value={formData.iskustvo}
                onChange={(e) => setFormData({ ...formData, iskustvo: e.target.value })}
                className="w-full px-4 py-3 bg-[#0a1628] border border-gray-700 rounded-lg focus:border-[#ff6b35] focus:outline-none transition-colors text-white"
              >
                <option value="">Izaberite...</option>
                <option value="bez-iskustva">Bez iskustva</option>
                <option value="do-1-godine">Do 1 godine</option>
                <option value="1-3-godine">1-3 godine</option>
                <option value="3-5-godina">3-5 godina</option>
                <option value="vise-od-5">Više od 5 godina</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="poruka" className="block text-sm mb-2">
                Dodatne informacije
              </label>
              <textarea
                id="poruka"
                rows={5}
                value={formData.poruka}
                onChange={(e) => setFormData({ ...formData, poruka: e.target.value })}
                className="w-full px-4 py-3 bg-[#0a1628] border border-gray-700 rounded-lg focus:border-[#ff6b35] focus:outline-none transition-colors text-white resize-none"
                placeholder="Napišite nešto o sebi, svom iskustvu i motivaciji..."
              />
            </div>

            <button
              type="submit"
              disabled={submitted}
              className="w-full px-8 py-4 bg-[#ff6b35] text-white rounded-lg hover:bg-[#ff5722] transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {submitted ? 'Prijava poslata!' : 'Pošaljite prijavu'}
            </button>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-green-500/20 border border-green-500 rounded-lg text-center"
              >
                Hvala na prijavi! Kontaktiracemo vas uskoro.
              </motion.div>
            )}
          </form>
        </motion.section>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-[#ff6b35]/20 to-transparent p-12 rounded-2xl"
        >
          <GraduationCap className="mx-auto mb-4 text-[#ff6b35]" size={48} />
          <h3 className="text-2xl mb-4">Nikada nije kasno da pocnete</h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Bez obzira na nivo iskustva, pružamo obuku i podršku. 
            Ako ste spremni da ucite i razvijate se, mi smo spremni da vas uvedemo u svet profesionalne klimatizacije.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
