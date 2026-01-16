"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import Image from "next/image";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 hero-glow z-0"></div>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            {t.tag}
          </div>
          <h1 className="font-display text-6xl md:text-8xl font-bold leading-tight mb-6 text-white">
            {t.title_prefix} <span className="text-gradient">{t.title_highlight}</span>
          </h1>
          <p className="text-xl text-slate-400 mb-10 max-w-lg leading-relaxed">
            {t.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#contact" className="px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
              {t.cta_primary} <span className="material-symbols-outlined">rocket_launch</span>
            </Link>
            <Link href="#portfolio" className="px-8 py-4 glass-card rounded-full font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-white">
              {t.cta_secondary}
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 blur-3xl rounded-full"></div>
              <Image 
                src="/logo-shinka.jpg"
                alt="Shinka Interactive Brain" 
                fill
                className="object-cover rounded-full border-4 border-white/10 z-10" 
                priority
              />
          </div>
        </div>
      </div>
    </section>
  );
}
