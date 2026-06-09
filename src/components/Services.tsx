import { motion } from 'motion/react';
import { servicesData } from '../data';
import * as Icons from 'lucide-react';

export function Services() {
  return (
    <section id="services" className="py-24 bg-brand-dark relative z-10 border-t border-brand-base">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-brand-primary font-medium tracking-widest uppercase text-sm mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
              Comprehensive Safety & Construction Solutions.
            </h3>
          </div>
          <p className="text-brand-gray md:w-1/3">
            Integrating cutting-edge safety management with resilient structural development for the Philippine landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ElementType;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-brand-base/30 border border-brand-base hover:bg-brand-base transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-2xl group-hover:bg-brand-primary/10 transition-colors"></div>
                
                <div className="w-14 h-14 rounded-xl mb-6 bg-brand-dark border border-brand-light/10 flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform">
                  {IconComponent && <IconComponent size={28} strokeWidth={1.5} />}
                </div>
                
                <h4 className="text-xl font-heading font-semibold text-white mb-3">
                  {service.title}
                </h4>
                <p className="text-brand-light/80 leading-relaxed text-sm">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
