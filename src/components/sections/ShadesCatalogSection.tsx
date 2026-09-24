'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { ProductShade } from '@/types';
import { useCart } from '@/context/CartContext';
import { buildShadeInquiryUrl } from '@/lib/whatsapp';
import { Sparkles, Check, ShoppingBag, MessageCircle } from 'lucide-react';

export default function ShadesCatalogSection() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'nudes' | 'roses' | 'prunes' | 'audacieux'>('all');
  const { addItem } = useCart();
  const [addedShadeId, setAddedShadeId] = useState<string | null>(null);

  const filteredShades = siteConfig.shades.filter((shade) => {
    if (activeFilter === 'all') return true;
    return shade.category === activeFilter;
  });

  const handleAddToCart = (shade: ProductShade) => {
    addItem({
      id: shade.id,
      name: `${shade.brand} — ${shade.name}`,
      shadeNumber: shade.number,
      category: shade.category,
    });
    setAddedShadeId(shade.id);
    setTimeout(() => setAddedShadeId(null), 1800);
  };

  return (
    <section id="nuancier" className="py-24 bg-white text-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-zinc-200 pb-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-sans font-semibold">
              Le Nuancier Signature
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-zinc-950">
              Des teintes douces aux couleurs les plus intenses.
            </h2>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Une couleur pour chaque humeur, un look pour chaque occasion. Explorez nos rouges à lèvres mats, encres sans transfert et finis satinés.
            </p>
          </div>

          {/* Filtres par tempérament */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'Toutes les teintes' },
              { id: 'nudes', label: 'Nudes & Chics' },
              { id: 'roses', label: 'Roses & Coraux' },
              { id: 'prunes', label: 'Prunes & Bordeaux' },
              { id: 'audacieux', label: 'Les Audacieux' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as typeof activeFilter)}
                className={`text-xs px-4 py-2 rounded-full transition-all duration-200 font-medium ${
                  activeFilter === tab.id
                    ? 'bg-brand-emerald text-white shadow-md'
                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grille Asymétrique des Teintes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredShades.map((shade) => {
            const isAdded = addedShadeId === shade.id;
            const directWhatsApp = buildShadeInquiryUrl(
              siteConfig.whatsappNumber,
              shade.name,
              shade.number
            );

            return (
              <div
                key={shade.id}
                className="group relative flex flex-col justify-between rounded-xl bg-white border border-zinc-200/80 hover:border-brand-gold/60 hover:shadow-xl transition-all duration-300 p-4"
              >
                {/* Badges statutaires positionnés HORS overflow-hidden */}
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center space-x-2">
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-black/20 shrink-0 shadow-sm"
                      style={{ backgroundColor: shade.hexColor }}
                      title={`Nuance : ${shade.name}`}
                    />
                    <span className="text-xs font-bold tracking-widest text-zinc-900 font-sans uppercase">
                      {shade.number}
                    </span>
                  </div>

                  {shade.isIconic && (
                    <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-brand-gold/15 text-amber-900 border border-brand-gold/30">
                      <Sparkles className="w-3 h-3 text-amber-700" />
                      <span>Iconique</span>
                    </span>
                  )}
                  {shade.isPopular && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-zinc-100 text-zinc-700">
                      Coup de Cœur
                    </span>
                  )}
                </div>

                {/* Cadre Visuel Produit */}
                <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-white mb-4 border border-zinc-100">
                  <Image
                    src={shade.image}
                    alt={`Nuance ${shade.name} (${shade.number}) — ${shade.brand} chez Temanto Paris`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Descriptif Produit */}
                <div className="space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-brand-gold font-sans font-semibold">
                      {shade.brand}
                    </p>
                    <h3 className="font-serif text-xl text-zinc-950 font-normal leading-snug">
                      {shade.name}
                    </h3>
                    <p className="text-xs text-zinc-500 mt-1 line-clamp-2 leading-relaxed">
                      {shade.description}
                    </p>
                  </div>

                  {/* Caractéristiques Clés */}
                  <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-[11px] text-zinc-600">
                    <span className="font-medium text-brand-emerald">{shade.finish}</span>
                    <span className="px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 font-sans">
                      {shade.holdingTime}
                    </span>
                  </div>

                  {/* Actions de Commande */}
                  <div className="pt-3 grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleAddToCart(shade)}
                      className={`flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded text-xs font-medium uppercase tracking-wider transition ${
                        isAdded
                          ? 'bg-emerald-600 text-white'
                          : 'bg-brand-emerald hover:bg-brand-emerald-light text-white'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Ajouté</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Sélectionner</span>
                        </>
                      )}
                    </button>

                    <a
                      href={directWhatsApp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded border border-zinc-300 hover:border-brand-gold text-zinc-800 hover:text-brand-gold text-xs font-medium uppercase tracking-wider transition"
                      title="Commander immédiatement cette référence sur WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
