import React from 'react';
import Image from 'next/image';
import { Sparkles, Droplets, Clock, HeartHandshake } from 'lucide-react';

export default function EditorialManifestoSection() {
  const commitments = [
    {
      icon: Clock,
      num: '01',
      title: 'Tenue jusqu’à 12 Heures',
      desc: 'Formule sans transfert conçue pour résister à la journée dakaroise sans filer ni s’effacer.',
    },
    {
      icon: Droplets,
      num: '02',
      title: 'Confort Mat Soyeux',
      desc: 'Texture veloutée qui n’assèche pas les lèvres et reste souple dès la première application.',
    },
    {
      icon: Sparkles,
      num: '03',
      title: 'Pigmentation Pure',
      desc: 'Une intensité chromatique opaque dès le premier passage, adaptée à toutes les nuances de peau.',
    },
    {
      icon: HeartHandshake,
      num: '04',
      title: 'Liberté d’Assortiment',
      desc: 'Composez votre trousse à la carte : une nuance unique ou un mélange de teintes selon vos envies.',
    },
  ];

  return (
    <section id="manifeste" className="py-24 bg-brand-cream text-zinc-900 border-y border-zinc-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visuel Éditorial Grand Format */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-amber-200/80 shadow-2xl bg-white group">
              <Image
                src="/images/editorial/teal-editorial.jpg"
                alt="Teinte Iconique 142 Sephora Cream Lip Stain chez Temanto Paris — Ose la couleur qui te révèle"
                fill
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-brand-gold font-sans font-semibold">
                    Audace & Affirmation
                  </span>
                  <p className="font-serif text-2xl text-white italic mt-1">
                    « Ose la couleur qui te révèle ! »
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Texte & Engagements Formule */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-brand-emerald font-semibold">
                <span className="w-6 h-px bg-brand-emerald" />
                <span>Le Manifeste Beauté</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-zinc-950 leading-tight">
                Plus qu’un rouge à lèvres,{' '}
                <span className="italic text-brand-emerald font-normal block">
                  une affirmation de votre style.
                </span>
              </h2>

              <p className="text-zinc-600 text-base leading-relaxed font-sans max-w-xl">
                À Dakar, la beauté ne se conforme à aucun moule. Temanto Paris sélectionne des produits pensés pour sublimer chaque teint, des nudes les plus doux aux bleus les plus vibrants.
              </p>
            </div>

            {/* Grille des Engagements (Asymétrique avec numérotation noble) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-zinc-200">
              {commitments.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.num} className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <span className="font-serif text-xl font-medium text-brand-gold">
                        {item.num}
                      </span>
                      <Icon className="w-4 h-4 text-brand-emerald" />
                      <h4 className="font-sans text-sm font-semibold text-zinc-900 tracking-wide">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-zinc-500 leading-relaxed pl-8">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
