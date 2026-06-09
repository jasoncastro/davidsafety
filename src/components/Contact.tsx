import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-brand-dark relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-brand-primary font-medium tracking-widest uppercase text-sm mb-4">Get in Touch</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight mb-8">
              Let’s build something safe and spectacular.
            </h3>
            <p className="text-brand-gray mb-12">
              Whether you need elite safety management for a massive commercial project, or a trusted contractor for your family home, our team is ready.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-base rounded-full flex items-center justify-center text-brand-primary shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Corporate HQ</h4>
                  <p className="text-brand-light/70 text-sm">Bonifacio Global City,<br/>Taguig 1634, Philippines</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-base rounded-full flex items-center justify-center text-brand-primary shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Direct Line</h4>
                  <p className="text-brand-light/70 text-sm">+63 (02) 8123 4567<br/>Mon-Fri, 8am - 6pm</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-base rounded-full flex items-center justify-center text-brand-primary shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email Inquiry</h4>
                  <p className="text-brand-light/70 text-sm">projects@davidint.com<br/>safety@davidint.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-brand-base/30 rounded-3xl p-8 border border-brand-base relative">
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-brand-dark/95 rounded-3xl border border-brand-base backdrop-blur"
              >
                <CheckCircle2 size={64} className="text-brand-primary mb-6" />
                <h4 className="text-2xl font-heading font-medium text-white mb-2">Message Received</h4>
                <p className="text-brand-gray">Thank you for reaching out. A project manager will contact you within 24 business hours.</p>
              </motion.div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-brand-light">Full Name</label>
                  <input 
                    required
                    type="text" 
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-brand-dark border border-brand-light/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors"
                    placeholder="Juan Dela Cruz"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-brand-light">Email Address</label>
                  <input 
                    required
                    type="email" 
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-brand-dark border border-brand-light/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors"
                    placeholder="juan@company.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm text-brand-light">Subject</label>
                <input 
                  required
                  type="text" 
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full bg-brand-dark border border-brand-light/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors"
                  placeholder="Project Inquiry / Safety Consultation"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-brand-light">Message</label>
                <textarea 
                  required
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-brand-dark border border-brand-light/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors resize-none"
                  placeholder="Tell us about your project requirements..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-brand-primary text-brand-dark font-medium rounded-xl hover:bg-brand-primary-hover transition-colors flex justify-center items-center gap-2 font-heading text-lg"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
