"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language].contact;

  return (
    <section className="py-24" id="contact">
      <div className="max-w-5xl mx-auto px-6">
        <div className="glass-card rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden border-primary/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 relative z-10 text-white">
            {t.title_prefix} <span className="text-gradient">{t.title_highlight}</span>{t.title_suffix}
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto relative z-10">
            {t.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
            <button className="px-10 py-5 bg-white text-black font-bold text-xl rounded-full hover:bg-slate-200 transition-all flex items-center justify-center gap-3">
              {t.cta_primary} <span className="material-symbols-outlined">calendar_today</span>
            </button>
            <button className="px-10 py-5 glass-card font-bold text-xl rounded-full hover:bg-white/10 transition-all text-white">
              {t.cta_secondary}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
