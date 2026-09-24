import React from 'react';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { Sparkles, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-brand-emerald text-white flex items-center pt-24 pb-16 overflow-hidden">
      {/* Halo lumineux doré subtil en arrière-plan */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-8rem)]">
          {/* Texte & Accroches */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-brand-gold/40 bg-white/5 text-brand-gold text-xs tracking-[0.2em] uppercase font-sans">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Maison de Beauté · Paris & Dakar</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight leading-[1.08] text-white">
              L’élégance au cœur de Paris,{' '}
              <span className="italic gold-gradient-text block font-normal">
                l’âme du Sénégal.
              </span>
            </h1>

            <p className="text-zinc-300 text-base sm:text-lg max-w-xl leading-relaxed font-sans font-light">
              Des rouges à lèvres mats veloutés, des encres sans transfert longue tenue et des teintes audacieuses rigoureusement sélectionnées pour illuminer chaque carnation.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <a
                href="#nuancier"
                className="inline-flex items-center justify-center space-x-3 px-8 py-4 bg-brand-gold hover:bg-brand-gold-dark text-brand-emerald font-medium text-xs uppercase tracking-widest rounded transition duration-200 shadow-xl shadow-amber-900/20 group"
              >
                <span>Découvrir le nuancier</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-7 py-4 border border-white/20 hover:border-brand-gold text-white hover:text-brand-gold text-xs uppercase tracking-widest rounded transition duration-200"
              >
                <span>Commander sur WhatsApp</span>
              </a>
            </div>

            {/* Badges de Réassurance Locale */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-zinc-300">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
                <span>Tenue jusqu’à 12H sans transfert</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0" />
                <span>Livraison Dakar & Thiès</span>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                <span>Wave & Orange Money acceptés</span>
              </div>
            </div>
          </div>

          {/* Composition Visuelle Hero */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden border border-brand-gold/30 shadow-2xl group">
              <Image
                src="/images/editorial/hero-bewitch-me.jpg"
                alt="Packshot éditorial rouge à lèvres Sephora R24 Bewitch Me par Temanto Paris"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Médaillon de marque or flottant en dehors de la photo */}
              <div className="absolute top-4 left-4 bg-brand-emerald-dark/90 backdrop-blur-md border border-brand-gold/40 px-3.5 py-1.5 rounded-full flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
                <span className="text-[11px] uppercase tracking-widest text-brand-gold font-medium">
                  Édition Signature
                </span>
              </div>

              {/* Cartouche d'information en bas */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 text-white">
                <p className="text-xs uppercase tracking-widest text-brand-gold font-sans font-semibold">
                  Teinte Envoûtante · R24 Bewitch Me
                </p>
                <p className="font-serif text-lg text-white/90 italic">
                  « La nuance plum intense qui sublime toutes les carnations. »
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
