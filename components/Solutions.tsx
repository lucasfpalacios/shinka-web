
import React from 'react';

const Solutions: React.FC = () => {
  const services = [
    {
      title: "IA & Automatización",
      icon: "psychology",
      color: "primary",
      desc: "Implementamos LLMs avanzados, Agentes de IA y Chatbots personalizados que revolucionan tu atención al cliente y procesos operativos.",
      features: [
        "Asistentes virtuales 24/7 (GPT-4 / Claude)",
        "Análisis predictivo de datos",
        "Automatización de Workflows (No-code & Custom)"
      ]
    },
    {
      title: "Desarrollo Fullstack",
      icon: "terminal",
      color: "secondary",
      desc: "Software escalable diseñado para crecer. Desde e-commerce complejos hasta infraestructuras cloud robustas y seguras.",
      features: [
        "Aplicaciones Web (Next.js / React)",
        "Integraciones Premium (Tiendanube, APIs)",
        "E-commerce de alto tráfico"
      ]
    }
  ];

  return (
    <section id="solutions" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-white">Soluciones de Vanguardia</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className={`glass-card p-8 md:p-10 group hover:border-${service.color}/50 transition-all duration-500 rounded-[2rem]`}>
              <div className={`w-14 h-14 bg-${service.color}/10 rounded-2xl flex items-center justify-center text-${service.color} mb-8 group-hover:scale-110 transition-transform`}>
                <span className="material-symbols-outlined text-4xl">{service.icon}</span>
              </div>
              <h3 className="font-display text-3xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-slate-400 text-lg mb-8">{service.desc}</p>
              
              <ul className="space-y-4 mb-10 text-slate-300">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3">
                    <span className={`material-symbols-outlined text-${service.color} text-sm`}>check_circle</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a href="#" className={`inline-flex items-center gap-2 text-${service.color} font-bold hover:underline`}>
                Saber más <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
