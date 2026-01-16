
import React from 'react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 30C10 30 15 32 20 32C25 32 30 28 30 22C30 16 25 12 20 12C15 12 10 16 10 22C10 26 13 28 16 28" stroke="url(#logo-grad)" strokeLinecap="round" strokeWidth="3" />
              <path d="M22 8L30 12L22 16" stroke="#ef4444" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
              <defs>
                <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#ef4444" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-2xl font-bold tracking-tighter leading-none text-white">SHINKA</span>
            <span className="text-[10px] font-bold tracking-[0.3em] text-primary uppercase leading-none mt-1">Digital Evolution</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-8 text-sm font-semibold uppercase tracking-widest text-slate-400">
            <a href="#solutions" className="hover:text-white transition-colors">Servicios</a>
            <a href="#showcase" className="hover:text-white transition-colors">Showcase</a>
            <a href="#agency" className="hover:text-white transition-colors">Agencia</a>
          </div>
          <div className="h-6 w-[1px] bg-white/10"></div>
          <div className="flex items-center gap-4">
            <a href="#contact" className="px-6 py-2.5 bg-gradient-to-r from-primary to-secondary text-white rounded-full hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all font-bold text-xs tracking-widest uppercase">
              Contacto
            </a>
            <button className="flex items-center gap-2 px-3 py-2 text-xs font-bold tracking-widest uppercase text-slate-400 hover:text-white transition-colors border border-white/10 rounded-lg bg-white/5">
              <span className="material-symbols-outlined text-sm">language</span>
              ES
              <span className="material-symbols-outlined text-xs">expand_more</span>
            </button>
          </div>
        </div>

        <button className="md:hidden text-3xl material-symbols-outlined text-white">menu</button>
      </div>
    </nav>
  );
};

export default Navbar;
