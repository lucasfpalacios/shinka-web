
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 hero-glow z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Inteligencia Artificial & Desarrollo Web
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
            Evolución Digital con <span className="text-gradient">Shinka</span>
          </h1>
          <p className="text-xl text-slate-400 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Transformamos negocios a través de algoritmos inteligentes y arquitecturas Fullstack de alto rendimiento. Creamos el futuro hoy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#contact" className="px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
              Impulsa tu proyecto <span className="material-symbols-outlined">rocket_launch</span>
            </a>
            <a href="#showcase" className="px-8 py-4 glass-card rounded-full font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              Ver Portfolio
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] animate-float">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full"></div>
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFvgXqcTufcpkD75VAZHOeYcuBSf0SiybXR1yYSFGfBYWCuOM5zuDJu4n4Fyd-5VdhHowPKpOxxOf65dRATKQn9C9wbAjhMQ17TkuI5IDJuuj5iznnHmhvZG9_z-ehdEC-Gd0X68IvenLLarJuKUSkuL512fLfFAHPoX255Wh46DNfmTpY0_4Es0PcGS5gcuw4OjJ1OZ6dJ7IZlOjILxFi1zxEFTJ7RNrvPX0uIS5A26hniQvkTQP8JNN0gQj-2n5nLH3EToMxe7VH" 
              alt="Shinka Interactive Brain" 
              className="w-full h-full object-cover rounded-full border-4 border-white/10 relative z-10 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
