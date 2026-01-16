
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Showcase from './components/Showcase';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 grid-bg pointer-events-none z-0"></div>
      
      <Navbar scrolled={scrolled} />
      
      <main className="relative z-10">
        <Hero />
        <Solutions />
        <Showcase />
        <CTA />
      </main>
      
      <Footer />
      
      {/* Interactive AI Assistant - Showcase of Gemini Integration */}
      <ChatWidget />
    </div>
  );
};

export default App;
