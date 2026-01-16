
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
          ¿Listo para la <br /> <span className="text-gradient">Evolución?</span>
        </h2>
        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Estamos buscando socios visionarios que quieran liderar sus industrias mediante la innovación digital y la IA.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="w-full sm:w-auto px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:bg-slate-200 transition-colors">
            Agendar Consulta Gratis
          </button>
          <button className="w-full sm:w-auto px-10 py-5 glass-card rounded-full font-bold text-lg text-white border-white/10 hover:bg-white/5 transition-colors">
            Ver Precios
          </button>
        </div>
        
        <div className="mt-16 flex justify-center gap-12 text-slate-500 font-bold uppercase tracking-[0.2em] text-[10px]">
          <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500"></span> Proyectos Activos</span>
          <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary"></span> Soporte 24/7</span>
        </div>
      </div>
    </section>
  );
};

export default CTA;
