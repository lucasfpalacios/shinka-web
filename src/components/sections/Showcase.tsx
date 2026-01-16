"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function Showcase() {
  const { language } = useLanguage();
  const t = translations[language].showcase;
  
  // Array of images matching the order in translations
  const projectImages = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCgSYtASUu4D-MrrB7c1sKXSk28wzLA_dO_n2EsQ_XNZ4ME1twBUIBZ7JFnY7DOmtB12jhJg767ObX0eAQfFZve6XF3d_ZiGynMsw_ToF925eb_9nsOV7rMfEUzk1URXjBxZlQMRjsv9WYxMZ2aACLVUqQRV3rzXZuJj2p3Iw3O4rCIBvflbVPwSZ7ZCvjtR0cBvz5Y2K4bhLqx64t6brgcuE9fljhMUp6B2R7vTIASaWDSd2u6sGL6VgMPUDINoXSeFgEg2vgbKdHT",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuALwcUkMWsGf4swRan700mryYBrB1TmD5qbTKwROKWcChaNIfC-SpNrawD44bNpnujKLgb8BzE2wWfcSGm6qLShDoNVHjjryhbNSnqX522MZ9xqk-UZlsgPg_541dfT5Sqh-VeYCrBlT87W1VwRlcbfna_KHWxdMxWKxoeP6Xxggm1G27JYk4emqu9QJbxdl8PQU0tv2heQdmKUQWYVlaJPAYl4TiWh-JTNDbn8XMgEODZ-y_YvoTmMOzkfnzkj_MRM4YxwyWZZ-y82",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAIoYp5aPoHrIAL_0XXduUF_cfnwbtoJGgq4WcW3_xAcbrMAu3pKQPcoYi8gkxmIRa00B3OkmOsv1RJa0AaKqIyvRvpBGtpejo7X4mojNf77Bm1YIqCf_-QOsj8AJwVlez78VqbIAOFH50IAGiVWzYvnSX6107_O5hyMrhOwaPezqm1qmKxWtG9npg5lWRGaGhsXezHaWgGd-7pS5iQhBghXK4uiN8snyalP1Pd2WnbhvltlcccgbneTssEP4ck1yFbKZuqCgM66NXu"
  ];

  return (
    <section className="py-24 bg-slate-900/50" id="portfolio">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-white">{t.heading}</h2>
            <p className="text-slate-400 max-w-md">{t.subtitle}</p>
          </div>
          <div className="flex gap-4">
            <button className="p-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-white">
              <span className="material-symbols-outlined text-2xl">west</span>
            </button>
            <button className="p-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-white">
              <span className="material-symbols-outlined text-2xl">east</span>
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {t.projects.map((project, index) => (
             <div key={index} className="group relative overflow-hidden rounded-3xl aspect-[4/5] bg-slate-800">
                <img 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700" 
                  src={projectImages[index]}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-8 flex flex-col justify-end">
                  <span className={`text-xs font-bold uppercase tracking-widest mb-2 ${index === 1 ? 'text-secondary' : 'text-primary'}`}>
                      {project.tag}
                  </span>
                  <h4 className="text-2xl font-bold mb-2 text-white">{project.title}</h4>
                  <p className="text-slate-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.description}
                  </p>
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}
