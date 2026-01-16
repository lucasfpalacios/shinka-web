
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 border-t border-white/5 bg-black/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-display text-2xl font-bold tracking-tighter text-white">SHINKA</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Empoderando el futuro digital mediante IA aplicada y desarrollo de software de alta fidelidad.
            </p>
            <div className="flex gap-4">
              {['facebook', 'instagram', 'linkedin', 'twitter'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-all">
                  <span className="material-symbols-outlined text-lg">share</span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Servicios</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Agentes de IA</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Desarrollo Next.js</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Integración Ecommerce</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Consultoría IT</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Agencia</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Portafolio</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog Tech</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Carreras</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Sede Central</h4>
            <p className="text-slate-500 text-sm leading-relaxed">
              Distrito Tecnológico<br />
              Buenos Aires, Argentina<br />
              hola@shinka.digital
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-6 text-[10px] text-slate-600 font-bold uppercase tracking-widest">
          <p>© 2025 Shinka Digital Evolution. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacidad</a>
            <a href="#" className="hover:text-white">Términos</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
