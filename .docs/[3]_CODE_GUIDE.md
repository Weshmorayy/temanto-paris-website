# [3] Code Guide — Temanto Paris

## Stack

- Framework : Next.js 15 (App Router) + React 19 + TypeScript
- Styling : Tailwind CSS v3 avec variables personnalisées
- Icônes : lucide-react
- Moteur SWC : `@next/swc-wasm-nodejs` pour compatibilité totale Termux / Android

## Structure src/

```
src/
├── app/
│   ├── layout.tsx          ← Métadonnées racine + JSON-LD LocalBusiness + Fonts
│   ├── page.tsx            ← Assemblage des 5 sections + header + footer + drawer
│   ├── globals.css         ← Thème Tailwind & variables CSS
│   ├── sitemap.ts          ← Sitemap dynamique
│   └── robots.ts           ← Robots.txt dynamique
├── components/
│   ├── layout/
│   │   ├── Header.tsx      ← Nav transparente sur hero, opaque au scroll
│   │   └── Footer.tsx      ← Infos pratiques réelles Dakar
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── ShadesCatalogSection.tsx
│   │   ├── EditorialManifestoSection.tsx
│   │   ├── EssentialsSection.tsx
│   │   └── OrderProcessSection.tsx
│   └── ui/
│       └── WhatsAppDrawer.tsx  ← Drawer commande monté racine DOM (z-[999999])
├── config/
│   └── site.ts             ← Source UNIQUE de vérité des données métier
├── context/
│   └── CartContext.tsx     ← State réactif pour le panier et le drawer
├── lib/
│   ├── seo.ts              ← constructMetadata() & schéma JSON-LD
│   └── whatsapp.ts         ← buildOrderUrl() & buildShadeInquiryUrl()
└── types/
    └── index.ts            ← Interfaces TypeScript
```

## Conventions

- Aucune donnée métier hardcodée dans les composants — tout provient de `src/config/site.ts`
- Server Components par défaut, `'use client'` restreint aux composants interactifs (filtres nuancier, header scroll, drawer)
- Drawers montés à la racine du DOM avec `overflow: hidden` sur le body

## Commandes

```bash
npm run dev                          # Développement
NEXT_OUTPUT=export npx next build    # Build statique
npx next build                       # Build standalone (Docker/Coolify)
npx tsc --noEmit                     # Vérif TypeScript
```
