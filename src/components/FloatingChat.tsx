import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send } from 'lucide-react';

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="bg-brand-dark border border-brand-base shadow-2xl shadow-black rounded-2xl w-80 mb-4 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-brand-base p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center font-bold text-brand-dark">
                    DI
                  </div>
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-brand-base"></div>
                </div>
                <div>
                  <p className="text-white text-sm font-medium leading-none mb-1">Support Agent</p>
                  <p className="text-brand-light text-xs opacity-80">Typically replies in mins</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-brand-light hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat Area - Decorative */}
            <div className="p-4 h-64 bg-brand-dark/50 flex flex-col gap-4 overflow-y-auto">
              <div className="self-start max-w-[85%] bg-brand-base p-3 rounded-2xl rounded-tl-sm mt-auto text-sm text-brand-light">
                Hello! Welcome to David International. How can we help you with your project today?
              </div>
            </div>

            {/* Input Placeholder */}
            <div className="p-3 border-t border-brand-base flex items-center gap-2">
              <input 
                type="text" 
                placeholder="Type a message..." 
                className="flex-1 bg-transparent border-none outline-none text-sm text-white placeholder-brand-gray px-2"
                disabled
              />
              <button className="w-8 h-8 flex items-center justify-center text-brand-primary rounded-full hover:bg-brand-base transition-colors" disabled>
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-brand-primary text-brand-dark rounded-full shadow-lg flex items-center justify-center hover:bg-brand-primary-hover transition-colors"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </div>
  );
}
