'use client';

import React from 'react';
import { siteConfig } from '@/config/site';
import { useCart } from '@/context/CartContext';
import { Eye, Sparkles, Check, ShoppingBag, MessageCircle } from 'lucide-react';

export default function EssentialsSection() {
  const { addItem } = useCart();
  const [addedId, setAddedId] = React.useState<string | null>(null);

  const handleAdd = (item: (typeof siteConfig.essentials)[0]) => {
    addItem({
      id: item.id,
      name: `${item.brand} — ${item.title}`,
      category: item.category,
    });
    setAddedId(item.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  return (
    <section id="essentiels" className="py-24 bg-brand-emerald-light text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-brand-gold font-sans font-semibold">
            <Eye className="w-3.5 h-3.5" />
            <span>Regard & Teint</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white">
            Les indispensables de votre trousse beauté.
          </h2>
          <p className="text-zinc-300 text-sm leading-relaxed font-sans">
            Des formules conçues pour tenir sous la chaleur de Dakar. Mascaras volumateurs waterproof, définition des sourcils et poudres au fini soyeux.
          </p>
        </div>

        {/* Grille Asymétrique des Essentiels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.essentials.map((product) => {
            const isAdded = addedId === product.id;

            return (
              <div
                key={product.id}
                className="rounded-xl bg-white/5 border border-white/10 hover:border-brand-gold/60 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08]"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[11px] uppercase tracking-wider text-brand-gold font-semibold font-sans">
                      {product.brand}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-white/10 text-white/90">
                      {product.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl text-white font-normal leading-snug">
                      {product.title}
                    </h3>
                    <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Points forts */}
                  <ul className="space-y-1.5 pt-3 border-t border-white/10">
                    {product.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-xs text-zinc-300">
                        <Sparkles className="w-3 h-3 text-brand-gold shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-4 border-t border-white/10 space-y-2">
                  <button
                    onClick={() => handleAdd(product)}
                    className={`w-full py-2.5 px-3 rounded text-xs font-medium uppercase tracking-wider flex items-center justify-center space-x-2 transition ${
                      isAdded
                        ? 'bg-emerald-500 text-white'
                        : 'bg-brand-gold hover:bg-brand-gold-dark text-brand-emerald'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Sélectionné</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Ajouter au panier</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                      `Bonjour Temanto Paris, je souhaite commander : ${product.brand} - ${product.title}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 rounded border border-white/20 hover:border-brand-gold text-white/80 hover:text-brand-gold text-[11px] uppercase tracking-wider flex items-center justify-center space-x-1.5 transition"
                  >
                    <MessageCircle className="w-3 h-3 text-[#25D366]" />
                    <span>Commander seul</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
