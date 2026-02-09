'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (!isHomePage) {
      // Ako nismo na homepage-u, navigiraj na homepage pa scrolluj
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Pocetna', id: 'pocetna' },
    { label: 'Projekti', id: 'projekti' },
    { label: 'Kontakt', id: 'kontakt' },
    { label: 'Karijera', href: '/karijera' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#0a1628]/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="cursor-pointer"
              onClick={() => scrollToSection('pocetna')}
            >
              <h2 className="text-2xl">AD KLIMAT</h2>
              <p className="text-xs text-gray-400">d.o.o.</p>
            </motion.div>

            {/* Desktop Navigation - ista visina i poravnanje za sve stavke */}
            <div className="hidden lg:flex items-center space-x-6 text-sm">
              {navItems.map((item, index) =>
                'href' in item ? (
                  <motion.span
                    key={item.label}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="inline-flex items-center h-10"
                  >
                    <Link
                      href={item.href}
                      className="inline-flex items-center h-10 text-white hover:text-[#ff6b35] transition-colors duration-300 whitespace-nowrap"
                    >
                      {item.label}
                    </Link>
                  </motion.span>
                ) : (
                  <motion.button
                    key={item.id}
                    type="button"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    onClick={() => scrollToSection(item.id)}
                    className="inline-flex items-center h-10 text-white hover:text-[#ff6b35] transition-colors duration-300 whitespace-nowrap border-0 bg-transparent p-0 cursor-pointer font-inherit"
                  >
                    {item.label}
                  </motion.button>
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed inset-0 z-40 bg-[#0a1628] lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navItems.map((item) =>
                'href' in item ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl text-white hover:text-[#ff6b35] transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-2xl text-white hover:text-[#ff6b35] transition-colors duration-300"
                  >
                    {item.label}
                  </button>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
