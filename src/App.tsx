import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingChat } from './components/FloatingChat';

export default function App() {
  return (
    <div className="relative min-h-screen bg-brand-dark font-sans selection:bg-brand-primary/30 selection:text-brand-primary text-brand-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingChat />
    </div>
  );
}
