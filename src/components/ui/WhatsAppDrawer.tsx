'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { siteConfig } from '@/config/site';
import { buildOrderUrl } from '@/lib/whatsapp';
import { X, Trash2, Plus, Minus, MessageCircle, MapPin, ShieldCheck } from 'lucide-react';

export default function WhatsAppDrawer() {
  const { isDrawerOpen, closeDrawer, items, updateQty, removeItem, clearCart, totalItems } = useCart();
  const [selectedZone, setSelectedZone] = useState<string>(siteConfig.deliveryZones[0] || 'Dakar');

  if (!isDrawerOpen) return null;

  const whatsappUrl = buildOrderUrl(siteConfig.whatsappNumber, items, selectedZone);

  return (
    <div
      className="fixed inset-0 z-[999999] flex justify-end"
      aria-labelledby="drawer-title"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop sombre */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={closeDrawer}
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-5 border-b border-zinc-100 flex items-center justify-between bg-brand-emerald text-white">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold">
              <MessageCircle className="w-4 h-4" />
            </div>
            <div>
              <h3 id="drawer-title" className="font-serif text-lg font-semibold tracking-wide text-white">
                Votre Sélection Maquillage
              </h3>
              <p className="text-xs text-brand-gold/90 font-sans">
                {totalItems} référence{totalItems > 1 ? 's' : ''} choisie{totalItems > 1 ? 's' : ''}
              </p>
            </div>
          </div>
          <button
            onClick={closeDrawer}
            className="p-2 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition"
            aria-label="Fermer le tiroir"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-brand-cream flex items-center justify-center text-zinc-400">
                <MessageCircle className="w-8 h-8 text-brand-emerald/40" />
              </div>
              <p className="font-serif text-xl text-zinc-800">Votre panier est encore vide</p>
              <p className="text-sm text-zinc-500 max-w-xs">
                Parcourez le nuancier et ajoutez vos teintes préférées de rouge à lèvres, mascara ou teint.
              </p>
              <button
                onClick={closeDrawer}
                className="mt-2 px-6 py-2.5 bg-brand-emerald text-white text-xs uppercase tracking-widest font-medium rounded hover:bg-brand-emerald-light transition"
              >
                Explorer les teintes
              </button>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center text-xs text-zinc-500 pb-2 border-b border-zinc-100">
                <span>Détail de votre panier</span>
                <button
                  onClick={clearCart}
                  className="text-red-500 hover:text-red-700 flex items-center space-x-1"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Tout effacer</span>
                </button>
              </div>

              <div className="space-y-3">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-lg border border-zinc-100 bg-zinc-50 flex items-center justify-between"
                  >
                    <div className="pr-3 flex-1 min-w-0">
                      <p className="text-xs uppercase tracking-wider text-brand-gold font-semibold">
                        {item.shadeNumber || item.category}
                      </p>
                      <h4 className="text-sm font-medium text-zinc-900 truncate">
                        {item.name}
                      </h4>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="flex items-center border border-zinc-200 rounded bg-white">
                        <button
                          onClick={() => updateQty(item.id, item.qty - 1)}
                          className="p-1 text-zinc-600 hover:bg-zinc-100 transition"
                          aria-label="Diminuer la quantité"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-semibold text-zinc-800">
                          {item.qty}
                        </span>
                        <button
                          onClick={() => updateQty(item.id, item.qty + 1)}
                          className="p-1 text-zinc-600 hover:bg-zinc-100 transition"
                          aria-label="Augmenter la quantité"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-1.5 text-zinc-400 hover:text-red-500 transition"
                        aria-label="Supprimer cet article"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Zone de livraison */}
              <div className="pt-4 border-t border-zinc-100">
                <label className="block text-xs font-semibold text-zinc-700 mb-1.5 flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 text-brand-emerald" />
                  <span>Lieu de livraison souhaité</span>
                </label>
                <select
                  value={selectedZone}
                  onChange={(e) => setSelectedZone(e.target.value)}
                  className="w-full text-xs p-2.5 rounded border border-zinc-200 bg-white text-zinc-800 focus:outline-none focus:border-brand-gold"
                >
                  {siteConfig.deliveryZones.map((zone) => (
                    <option key={zone} value={zone}>
                      {zone}
                    </option>
                  ))}
                </select>
              </div>

              {/* Réassurance paiement */}
              <div className="bg-brand-cream/80 p-3 rounded text-xs space-y-1.5 border border-amber-100">
                <div className="flex items-center space-x-1 text-brand-emerald font-medium">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Règlement à la livraison</span>
                </div>
                <p className="text-zinc-600 text-[11px] leading-relaxed">
                  Paiement sécurisé par Wave, Orange Money ou espèces dès réception de votre colis.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Footer actions */}
        {items.length > 0 && (
          <div className="p-5 border-t border-zinc-100 bg-white space-y-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 py-3.5 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded font-medium text-sm transition shadow-lg shadow-emerald-500/10"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Transmettre ma commande WhatsApp</span>
            </a>
            <p className="text-center text-[11px] text-zinc-400">
              Un message pré-rempli s’ouvre directement dans votre application WhatsApp.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
