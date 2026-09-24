import React from 'react';
import { CartProvider } from '@/context/CartContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ShadesCatalogSection from '@/components/sections/ShadesCatalogSection';
import EditorialManifestoSection from '@/components/sections/EditorialManifestoSection';
import EssentialsSection from '@/components/sections/EssentialsSection';
import OrderProcessSection from '@/components/sections/OrderProcessSection';
import WhatsAppDrawer from '@/components/ui/WhatsAppDrawer';

export default function HomePage() {
  return (
    <CartProvider>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ShadesCatalogSection />
        <EditorialManifestoSection />
        <EssentialsSection />
        <OrderProcessSection />
      </main>
      <Footer />
      <WhatsAppDrawer />
    </CartProvider>
  );
}
