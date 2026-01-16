"use client";

import Link from 'next/link';
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function Footer() {
    const { language } = useLanguage();
    const t = translations[language].footer;

    return (
        <footer className="py-8 bg-black border-t border-white/10 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-3">
                    <div className="w-5 h-5 relative">
                        <Image 
                            src="/logo-shinka.png" 
                            alt="Shinka Logo" 
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="font-display text-lg font-bold tracking-tight text-white uppercase">SHINKA</span>
                </div>
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 md:gap-8 text-slate-600 dark:text-slate-500 text-xs font-medium uppercase tracking-wider">
                    <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
                    <Link href="#" className="hover:text-white transition-colors">GitHub</Link>
                    <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
                </div>
                <p className="text-slate-600 dark:text-slate-500 text-xs font-medium text-center">
                    {t.rights}
                </p>
            </div>
        </footer>
    );
};
