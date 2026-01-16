
import React from 'react';

const Showcase: React.FC = () => {
  const projects = [
    {
      title: "Nexus Fashion Hub",
      tag: "E-commerce & AI",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
      desc: "Plataforma de moda con probador virtual basado en visión artificial."
    },
    {
      title: "Agent Sigma-9",
      tag: "Deep Learning",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
      desc: "Sistema de atención automatizada para infraestructuras bancarias."
    },
    {
      title: "Quantum Analytics",
      tag: "Big Data",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      desc: "Dashboard predictivo para logística internacional de carga."
    }
  ];

  return (
    <section id="showcase" className="py-24 bg-black/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 italic">Showcase</h2>
            <p className="text-slate-400 max-w-md">Explora cómo estamos redefiniendo los límites de lo posible con tecnología de vanguardia.</p>
          </div>
          <button className="px-8 py-3 border border-white/20 rounded-full text-white font-bold hover:bg-white/5 transition-colors uppercase tracking-widest text-xs">
            Ver todos los proyectos
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative aspect-[4/5] overflow-hidden rounded-[2.5rem] cursor-pointer">
              <img 
                src={project.image} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest mb-4">
                  {project.tag}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
