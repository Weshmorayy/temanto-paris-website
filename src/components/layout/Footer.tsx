import React from 'react';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { Mail, MapPin, Clock, MessageCircle, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-emerald-dark text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          {/* Marque & Slogan */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/brand/logo.png"
                  alt="Logo Temanto Paris"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-serif text-2xl tracking-[0.2em] font-medium text-white block">
                  TEMANTO
                </span>
                <span className="text-[10px] tracking-[0.25em] text-brand-gold uppercase font-sans">
                  Paris · Dakar
                </span>
              </div>
            </div>

            <p className="font-serif italic text-brand-gold-light text-lg">
              « {siteConfig.slogan} »
            </p>

            <p className="text-zinc-400 text-sm max-w-sm leading-relaxed font-sans">
              Boutique de cosmétiques et maquillage sélectif à Dakar. Formules haute tenue, pigments profonds et teintes vibrantes pour célébrer chaque beauté.
            </p>

            <div className="pt-2 flex items-center space-x-2 text-xs text-brand-gold">
              <ShieldCheck className="w-4 h-4 text-brand-gold" />
              <span>Produits de grandes marques authentiques & vérifiés</span>
            </div>
          </div>

          {/* Navigation Rapide */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-brand-gold font-semibold">
              Collections & Teintes
            </h4>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li>
                <a href="#nuancier" className="hover:text-brand-gold transition">
                  Nuancier Rouges à Lèvres
                </a>
              </li>
              <li>
                <a href="#manifeste" className="hover:text-brand-gold transition">
                  Focus Teintes Audacieuses
                </a>
              </li>
              <li>
                <a href="#essentiels" className="hover:text-brand-gold transition">
                  Mascaras & Regard
                </a>
              </li>
              <li>
                <a href="#essentiels" className="hover:text-brand-gold transition">
                  Sourcils & Teint 24H
                </a>
              </li>
              <li>
                <a href="#commande" className="hover:text-brand-gold transition">
                  Livraison Dakar & Thiès
                </a>
              </li>
            </ul>
          </div>

          {/* Coordonnées Réelles Dakar */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-brand-gold font-semibold">
              Point de Contact & Commande
            </h4>

            <div className="space-y-3 text-sm text-zinc-300">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>
                  {siteConfig.address}, Dakar, Sénégal
                  <span className="block text-xs text-zinc-400 mt-0.5">
                    Livraison active : Almadies 2, Keur Massar, Gueule Tapée, Kolobane, Thiès
                  </span>
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-brand-gold transition text-zinc-300"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-brand-gold shrink-0" />
                <span>{siteConfig.hours}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2.5 bg-white/10 hover:bg-brand-gold hover:text-brand-emerald text-white rounded text-xs uppercase tracking-wider font-medium transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Échanger avec Temanto sur WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Moyens de paiement & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} Temanto Paris. Tous droits réservés.</p>
          <div className="flex items-center space-x-4">
            <span>Règlements acceptés :</span>
            <span className="text-zinc-300 font-medium">Wave · Orange Money · Espèces</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
