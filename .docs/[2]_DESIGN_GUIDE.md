# [2] Design Guide — Temanto Paris

> Basé sur le plan de design approuvé le 24-09-2026.

---

## Direction Visuelle

**Prestige Émeraude & Or Studio** : Alliance noble entre un écrin joaillier sombre (vert émeraude `#0B2E23` et or chaud `#D4AF37`) et la clarté lumineuse d'un studio éditorial (`#FFFFFF`) pour mettre en valeur les teintes réelles de maquillage sans distorsion chromatique.

## Palette

| Variable | Hex | Usage |
|---|---|---|
| `--color-bg-primary` | `#FFFFFF` | Fond principal (nuancier, commande) |
| `--color-bg-secondary` | `#0B2E23` | Fond alternatif sombre (hero) |
| `--color-bg-tertiary` | `#F8F5F0` | Fond crème poudré (manifeste beauté) |
| `--color-bg-dark` | `#071A14` | Noir émeraude (footer) |
| `--color-text-primary` | `#121815` | Titres et contrastes sur fond blanc |
| `--color-text-body` | `#4A5568` | Corps de texte et descriptions |
| `--color-accent-gold` | `#D4AF37` | Or chaud du logo Temanto |
| `--color-accent-gold-hover` | `#B89628` | Hover des CTA dorés |
| `--color-accent-plum` | `#7B1842` | Prune cosmétique |

## Typographie

- **Titres (H1, H2, H3)** : `Cormorant Garamond` (Google Fonts) — Sérif haute joaillerie / élégance parisienne
- **Corps de texte & UI** : `Plus Jakarta Sans` (Google Fonts) — Sans-sérif moderne, aérée et très lisible sur mobile
- **Labels / Nuances** : Petites capitales, tracking élargi (0.15em)

## Structure des Pages

Page `/` :
1. Hero Plein Écran (`#0B2E23`) : Slogan officiel, split asymétrique, packshot R24 Bewitch Me
2. Nuancier Lèvres (`#FFFFFF`) : Filtres par tempérament, swatches réels, ajout panier WhatsApp
3. Manifeste Beauté (`#F8F5F0`) : Visuel Teal 142 éditorial, 4 engagements concrets
4. Essentiels Regard & Teint (`#0F382B`) : Mascaras waterproof, sourcils, fond de teint 24H
5. Protocole de Commande (`#FFFFFF`) : Parcours en 3 étapes, Wave/OM/Espèces, livraison Dakar & Thiès
6. Footer (`#071A14`) : Coordonnées Keur Massar/Almadies 2, email, lien WhatsApp direct

## Décisions Spécifiques

- Les badges "Iconique" et "Coup de Cœur" sont positionnés en dehors du `overflow-hidden`
- Tiroir de commande monté à la racine du DOM (`fixed inset-0 !z-[999999]`) avec verrouillage du scroll
- Zéro photo IA, uniquement les packshots réels studio fournis par le client
