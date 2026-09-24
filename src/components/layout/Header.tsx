'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { useCart } from '@/context/CartContext';
import { ShoppingBag, Menu, X, MessageCircle } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, openDrawer } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-emerald-dark/95 backdrop-blur-md py-3 shadow-lg border-b border-white/10'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/brand/logo.png"
                alt="Logo Temanto Paris"
                fill
                sizes="(max-width: 640px) 40px, 48px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-medium tracking-[0.2em] text-white">
                TEMANTO
              </span>
              <span className="text-[10px] tracking-[0.25em] text-brand-gold uppercase font-sans -mt-1">
                Paris · Dakar
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#nuancier"
              className="text-xs uppercase tracking-widest text-white/80 hover:text-brand-gold transition duration-200"
            >
              Nuancier Lèvres
            </a>
            <a
              href="#manifeste"
              className="text-xs uppercase tracking-widest text-white/80 hover:text-brand-gold transition duration-200"
            >
              Osez la Couleur
            </a>
            <a
              href="#essentiels"
              className="text-xs uppercase tracking-widest text-white/80 hover:text-brand-gold transition duration-200"
            >
              Compléments Beauté
            </a>
            <a
              href="#commande"
              className="text-xs uppercase tracking-widest text-white/80 hover:text-brand-gold transition duration-200"
            >
              Commander
            </a>
          </nav>

          {/* Actions : Panier + Contact */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <button
              onClick={openDrawer}
              className="relative p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition flex items-center justify-center group"
              aria-label="Voir le panier de commande"
            >
              <ShoppingBag className="w-5 h-5 text-brand-gold group-hover:scale-110 transition-transform" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-gold text-brand-emerald text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-brand-emerald">
                  {totalItems}
                </span>
              )}
            </button>

            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center space-x-2 py-2 px-4 rounded border border-brand-gold/40 text-brand-gold hover:bg-brand-gold hover:text-brand-emerald text-xs uppercase tracking-wider font-medium transition duration-200"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Direct</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white/90 hover:text-white md:hidden"
              aria-label="Menu de navigation"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-brand-emerald-dark/98 backdrop-blur-lg flex flex-col justify-center items-center p-8 space-y-6 md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-2 text-white/70 hover:text-white"
            aria-label="Fermer le menu"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative w-16 h-16 mb-4">
            <Image
              src="/images/brand/logo.png"
              alt="Logo Temanto Paris"
              fill
              className="object-contain"
            />
          </div>
          <a
            href="#nuancier"
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-serif text-2xl text-white hover:text-brand-gold transition"
          >
            Nuancier Lèvres
          </a>
          <a
            href="#manifeste"
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-serif text-2xl text-white hover:text-brand-gold transition"
          >
            Osez la Couleur
          </a>
          <a
            href="#essentiels"
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-serif text-2xl text-white hover:text-brand-gold transition"
          >
            Compléments Beauté
          </a>
          <a
            href="#commande"
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-serif text-2xl text-white hover:text-brand-gold transition"
          >
            Commander & Livraison
          </a>
          <div className="pt-6 border-t border-white/10 w-full max-w-xs flex flex-col space-y-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                openDrawer();
              }}
              className="w-full py-3 bg-brand-gold text-brand-emerald font-medium text-xs uppercase tracking-widest rounded flex items-center justify-center space-x-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Voir ma sélection ({totalItems})</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
