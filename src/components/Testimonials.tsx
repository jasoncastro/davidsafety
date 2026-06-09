import { motion } from 'motion/react';
import { testimonialsData } from '../data';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-brand-base relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-dark/20 clip-diagonal pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-brand-primary font-medium tracking-widest uppercase text-sm mb-4">Client Feedback</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-white">
            Trusted by the Best.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-brand-dark p-8 rounded-2xl border border-brand-light/10 relative"
            >
              <Quote className="absolute top-8 right-8 text-brand-base opacity-50" size={48} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < testimonial.rating ? "text-brand-primary fill-brand-primary" : "text-brand-base"} 
                  />
                ))}
              </div>

              <p className="text-brand-light/90 italic leading-relaxed mb-8 relative z-10">
                "{testimonial.content}"
              </p>

              <div>
                <h4 className="text-white font-heading font-semibold">{testimonial.name}</h4>
                <p className="text-brand-gray text-xs mt-1">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
