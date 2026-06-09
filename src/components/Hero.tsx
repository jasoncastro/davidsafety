import { motion } from 'motion/react';
import { ArrowRight, HardHat, ShieldCheck } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(var(--color-brand-base) 1px, transparent 1px), linear-gradient(90deg, var(--color-brand-base) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>
      
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-base border border-brand-light/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
            <span className="text-sm font-medium text-brand-light text-opacity-90">ISO Certified Safety Standards</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-6"
          >
            Elevate safety.<br />Build with <i className="text-brand-primary font-serif font-light">confidence.</i>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-brand-gray mb-10 max-w-2xl"
          >
            David International provides world-class safety management services and rigorous construction oversight for residential, commercial, and high-rise developments across the Philippines.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a 
              href="#contact" 
              className="px-8 py-4 rounded-full bg-brand-primary text-brand-dark font-medium hover:bg-brand-primary-hover flex items-center justify-center gap-2 transition-transform hover:scale-105"
            >
              Start Your Project <ArrowRight size={18} />
            </a>
            <a 
              href="#services" 
              className="px-8 py-4 rounded-full bg-transparent border border-brand-light text-brand-white font-medium hover:bg-brand-base flex items-center justify-center gap-2 transition-colors"
            >
              Explore Services
            </a>
          </motion.div>
        </div>

        {/* Dashboard/Showcase floating element below text */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 relative rounded-2xl md:rounded-[2rem] overflow-hidden border border-brand-light/10 shadow-2xl"
        >
          {/* Faux header for the "dashboard/image" container */}
          <div className="h-8 bg-brand-base/80 backdrop-blur flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <div className="relative h-[300px] md:h-[500px]">
            <img 
              src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=80&w=2000" 
              alt="Construction site overview" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent"></div>
            
            {/* Floating UI Elements over image */}
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 flex flex-col md:flex-row gap-4">
              <div className="bg-brand-dark/80 backdrop-blur-md rounded-xl p-4 border border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-primary/20 rounded-full flex items-center justify-center text-brand-primary">
                  <HardHat size={24} />
                </div>
                <div>
                  <p className="text-brand-gray text-sm">Active Personnel</p>
                  <p className="text-white font-heading font-bold text-xl">1,248</p>
                </div>
              </div>
              <div className="bg-brand-dark/80 backdrop-blur-md rounded-xl p-4 border border-white/10 flex items-center gap-4 hidden sm:flex">
                <div className="w-12 h-12 bg-brand-primary/20 rounded-full flex items-center justify-center text-brand-primary">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-brand-gray text-sm">Incident Free Days</p>
                  <p className="text-brand-primary font-heading font-bold text-xl">412 Days</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
