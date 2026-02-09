'use client';

import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#050d1a] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl mb-4">AD KLIMAT</h3>
            <p className="text-gray-400 mb-4">
              Industrijska klimatizacija i ventilacija – premium rešenja od 2006. godine
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4">Brzi linkovi</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('pocetna')}
                  className="text-gray-400 hover:text-[#ff6b35] transition-colors"
                >
                  Pocetna
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('proces')}
                  className="text-gray-400 hover:text-[#ff6b35] transition-colors"
                >
                  Proces rada
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projekti')}
                  className="text-gray-400 hover:text-[#ff6b35] transition-colors"
                >
                  Projekti
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('o-nama')}
                  className="text-gray-400 hover:text-[#ff6b35] transition-colors"
                >
                  O nama
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('kontakt')}
                  className="text-gray-400 hover:text-[#ff6b35] transition-colors"
                >
                  Kontakt
                </button>
              </li>
              <li>
                <Link
                  href="/karijera"
                  className="text-gray-400 hover:text-[#ff6b35] transition-colors"
                >
                  Karijera
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <Phone size={16} className="text-[#ff6b35]" />
                <span>+381 XX XXX XXXX</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail size={16} className="text-[#ff6b35]" />
                <span>info@adklimat.rs</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin size={16} className="text-[#ff6b35]" />
                <span>Srbija</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} AD KLIMAT d.o.o. Sva prava zadržana.</p>
        </div>
      </div>
    </footer>
  );
}
