"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language].navbar;

  return (
    <nav className="fixed top-0 w-full z-50 bg-black border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-4 group">
          <div className="relative w-10 h-10">
            <Image 
              src="/logo-shinka.png" 
              alt="Shinka Logo" 
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xl md:text-2xl font-bold tracking-tight leading-none text-white">SHINKA</span>
            <span className="hidden sm:block text-[9px] font-bold tracking-[0.4em] text-primary uppercase leading-none mt-1">Digital Evolution</span>
          </div>
        </Link>
        <div className="flex items-center gap-10">
          <div className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-slate-400">
            <Link href="#solutions" className="hover:text-white transition-colors nav-link-hover">{t.solutions}</Link>
            <Link href="#portfolio" className="hover:text-white transition-colors nav-link-hover">{t.showcase}</Link>
            <Link href="#about" className="hover:text-white transition-colors nav-link-hover">{t.agency}</Link>
          </div>
          <div className="hidden lg:block h-6 w-[1px] bg-white/10"></div>
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <div className="flex bg-white/5 rounded-full p-1 border border-white/10 shrink-0">
              <button 
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-[10px] font-bold rounded-full transition-all duration-300 ${language === 'en' ? 'bg-primary text-white shadow-lg shadow-primary/25' : 'text-slate-400 hover:text-white'}`}
              >
                EN
              </button>
              <button 
                onClick={() => setLanguage('es')}
                className={`cursor-pointer px-3 py-1 text-[10px] font-bold rounded-full transition-all duration-300 ${language === 'es' ? 'bg-primary text-white shadow-lg shadow-primary/25' : 'text-slate-400 hover:text-white'}`}
              >
                ES
              </button>
            </div>
            <Link href="#contact" className="cursor-pointer px-4 py-2 md:px-6 md:py-2.5 bg-gradient-to-r from-primary to-secondary text-white rounded-full hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all font-bold text-[10px] md:text-xs tracking-widest uppercase shrink-0">
              {t.cta}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
