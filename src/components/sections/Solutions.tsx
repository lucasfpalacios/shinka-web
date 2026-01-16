"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function Solutions() {
  const { language } = useLanguage();
  const t = translations[language].solutions;

  return (
    <section className="py-24 relative" id="solutions">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-white">{t.heading}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card p-10 group hover:border-primary/50 transition-all duration-500 rounded-3xl">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-4xl">psychology</span>
            </div>
            <h3 className="font-display text-3xl font-bold mb-4 text-white">{t.card1.title}</h3>
            <p className="text-slate-400 text-lg mb-8">
              {t.card1.description}
            </p>
            <ul className="space-y-4 mb-10 text-slate-300">
              {t.card1.items.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="#" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
              {t.learn_more} <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          <div className="glass-card p-10 group hover:border-secondary/50 transition-all duration-500 rounded-3xl">
            <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-8 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-4xl">terminal</span>
            </div>
            <h3 className="font-display text-3xl font-bold mb-4 text-white">{t.card2.title}</h3>
            <p className="text-slate-400 text-lg mb-8">
              {t.card2.description}
            </p>
            <ul className="space-y-4 mb-10 text-slate-300">
              {t.card2.items.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="#" className="inline-flex items-center gap-2 text-secondary font-bold hover:underline">
              {t.learn_more} <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
