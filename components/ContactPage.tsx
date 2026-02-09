'use client';

import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function ContactPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Frontend only - just show success message
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f1f38] min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6">Zakaži konsultaciju</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            Naš tim je tu da ti da potrebne informacije o dostupnim rokovima rada, objasni proces rada i ponudi ti najbolje rešenje za tvoj objekat.
          </p>
          <p className="text-lg text-gray-400">
            Nakon što popuniš formu, naš tim će te ubrzo kontaktirati. Stojimo ti na raspolaganju za sva pitanja.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2 text-gray-300">
                  Ime i prezime / Firma *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0a1628] border border-gray-700 rounded-lg focus:border-[#ff6b35] focus:outline-none transition-colors text-white"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm mb-2 text-gray-300">
                  Telefon *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0a1628] border border-gray-700 rounded-lg focus:border-[#ff6b35] focus:outline-none transition-colors text-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-gray-300">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0a1628] border border-gray-700 rounded-lg focus:border-[#ff6b35] focus:outline-none transition-colors text-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2 text-gray-300">
                  Kratak opis projekta *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#0a1628] border border-gray-700 rounded-lg focus:border-[#ff6b35] focus:outline-none transition-colors text-white resize-none"
                />
              </div>

              <div className="bg-[#0a1628] border border-gray-700 rounded-lg p-4">
                <p className="text-sm text-gray-400">
                  <strong>Napomena:</strong> Cena se formira isključivo nakon obilaska objekta i definisanja tehničkog rešenja.
                </p>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#ff6b35] text-white rounded-lg hover:bg-[#ff5722] transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>{isSubmitted ? 'Poruka poslata!' : 'Pošaljite upit'}</span>
                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-[#0a1628] p-8 rounded-lg">
              <h3 className="text-2xl mb-6 text-[#ff6b35]">Kontakt informacije</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-[#ff6b35] mt-1">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Telefon</p>
                    <p className="text-lg">+381 XX XXX XXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-[#ff6b35] mt-1">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Email</p>
                    <p className="text-lg">info@adklimat.rs</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-[#ff6b35] mt-1">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Lokacija</p>
                    <p className="text-lg">Srbija</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0a1628] p-8 rounded-lg border-l-4 border-[#ff6b35]">
              <h4 className="text-xl mb-4">Zašto kontaktirati AD KLIMAT?</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-1">•</span>
                  <span>Besplatna procena na terenu</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-1">•</span>
                  <span>Projektovanje po meri vaših potreba</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-1">•</span>
                  <span>Transparentna ponuda sa detaljnom specifikacijom</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-1">•</span>
                  <span>Profesionalna ugradnja i servis</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}