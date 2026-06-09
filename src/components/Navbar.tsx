import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-dark/90 backdrop-blur-md py-4 shadow-lg shadow-black/20' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 z-50">
          <div className="w-8 h-8 bg-brand-primary rounded-sm flex items-center justify-center text-brand-dark font-bold font-heading">
            DI
          </div>
          <span className="font-heading font-semibold text-xl tracking-tight hidden sm:block">
            David Int.
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="text-sm font-medium text-brand-light hover:text-brand-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-transparent border border-brand-light text-brand-white text-sm font-medium hover:bg-brand-light hover:text-brand-dark transition-all"
          >
            Get a Quote
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-50 text-brand-white p-2"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Slide-in Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-0 bg-brand-base flex flex-col items-center justify-center z-40"
            >
              <nav className="flex flex-col items-center gap-8">
                {NAV_LINKS.map((link) => (
                  <a 
                    key={link.label} 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-heading font-medium text-brand-white hover:text-brand-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
