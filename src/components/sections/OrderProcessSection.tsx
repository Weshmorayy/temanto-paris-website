'use client';

import React from 'react';
import { siteConfig } from '@/config/site';
import { useCart } from '@/context/CartContext';
import { ShoppingBag, MessageCircle, Truck, Wallet, CheckCircle } from 'lucide-react';

export default function OrderProcessSection() {
  const { openDrawer, totalItems } = useCart();

  const steps = [
    {
      num: '01',
      title: 'Composez votre sélection',
      icon: ShoppingBag,
      desc: 'Parcourez le nuancier et ajoutez vos nuances préférées au panier. Vous pouvez choisir une teinte unique ou panacher librement selon vos envies.',
    },
    {
      num: '02',
      title: 'Validation rapide sur WhatsApp',
      icon: MessageCircle,
      desc: 'Un message récapitulant vos références est préparé instantanément. Notre équipe vous répond immédiatement pour confirmer les stocks.',
    },
    {
      num: '03',
      title: 'Livraison & Règlement en main propre',
      icon: Truck,
      desc: 'Expédition directe à votre domicile ou bureau à Dakar et Thiès. Vous réglez à la livraison en toute tranquillité via Wave, Orange Money ou espèces.',
    },
  ];

  return (
    <section id="commande" className="py-24 bg-white text-zinc-900 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-sans font-semibold">
            Simple & Sans Intermédiaire
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-zinc-950">
            Comment passer commande chez Temanto Paris ?
          </h2>
          <p className="text-zinc-600 text-sm leading-relaxed">
            Pas de démarches compliquées. Un échange direct et bienveillant pour recevoir vos cosmétiques favoris où que vous soyez à Dakar.
          </p>
        </div>

        {/* Étapes Visuelles Numérotées */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative p-8 rounded-2xl bg-zinc-50 border border-zinc-200/80 flex flex-col justify-between hover:border-brand-gold/60 transition duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl font-light text-brand-gold">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-brand-emerald/5 flex items-center justify-center text-brand-emerald">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-serif text-xl text-zinc-900 font-medium mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-200/60 flex items-center space-x-2 text-[11px] text-brand-emerald font-medium">
                  <CheckCircle className="w-3.5 h-3.5 text-brand-gold" />
                  <span>Service client réactif</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bannière de Réassurance & CTA WhatsApp */}
        <div className="rounded-2xl bg-brand-cream border border-amber-200/60 p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-brand-emerald">
              <Wallet className="w-4 h-4 text-brand-gold" />
              <span>Paiements acceptés au Sénégal</span>
            </div>
            <h4 className="font-serif text-2xl sm:text-3xl text-zinc-950 font-normal">
              Wave · Orange Money · Espèces à la livraison
            </h4>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Zones desservies au quotidien : Keur Massar, Almadies 2, Gueule Tapée, Kolobane, Plateau, banlieue dakaroise et Thiès.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
            <button
              onClick={openDrawer}
              className="px-7 py-3.5 bg-brand-emerald hover:bg-brand-emerald-light text-white text-xs uppercase tracking-widest font-medium rounded transition flex items-center justify-center space-x-2 shadow-lg shadow-emerald-950/10"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Voir ma sélection ({totalItems})</span>
            </button>

            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs uppercase tracking-widest font-medium rounded transition flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Contacter sur WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
