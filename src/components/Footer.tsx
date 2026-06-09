import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const FOOTER_LINKS = {
  company: ['About Us', 'Careers', 'News & Updates', 'Contact'],
  services: ['Safety Management', 'Residential Construction', 'Commercial Build', 'Safety Audits'],
  legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy']
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050f0c] pt-20 pb-10 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-primary rounded-sm flex items-center justify-center text-brand-dark font-bold font-heading">
                DI
              </div>
              <span className="font-heading font-semibold text-xl tracking-tight text-white">
                David Int.
              </span>
            </div>
            <p className="text-brand-gray text-sm leading-relaxed max-w-sm mb-6">
              Elevating Philippine construction standards through rigorous safety management and engineering excellence. Building the future, safely.
            </p>
            <div className="flex items-center gap-4 text-brand-light">
              <a href="#" className="hover:text-brand-primary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-brand-primary transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-brand-primary transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-brand-primary transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          <div>
            <h5 className="text-white font-medium mb-6">Company</h5>
            <ul className="space-y-4">
              {FOOTER_LINKS.company.map(link => (
                <li key={link}><a href="#" className="text-brand-gray text-sm hover:text-brand-primary transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h5 className="text-white font-medium mb-6">Services</h5>
            <ul className="space-y-4">
              {FOOTER_LINKS.services.map(link => (
                <li key={link}><a href="#" className="text-brand-gray text-sm hover:text-brand-primary transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-white font-medium mb-6">Legal</h5>
            <ul className="space-y-4">
              {FOOTER_LINKS.legal.map(link => (
                <li key={link}><a href="#" className="text-brand-gray text-sm hover:text-brand-primary transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-brand-gray text-sm">
            &copy; {new Date().getFullYear()} David International Safety Management Services. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-brand-base text-brand-primary hover:bg-brand-primary hover:text-brand-dark transition-colors flex items-center justify-center shrink-0"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
