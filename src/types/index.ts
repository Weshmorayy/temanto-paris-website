export interface ProductShade {
  id: string;
  name: string;
  number: string;
  category: 'nudes' | 'roses' | 'prunes' | 'audacieux';
  brand: string;
  finish: string;
  holdingTime: string;
  description: string;
  hexColor: string;
  image: string;
  isIconic?: boolean;
  isPopular?: boolean;
  price?: number;
}

export interface EssentialProduct {
  id: string;
  title: string;
  category: string;
  brand: string;
  badge: string;
  features: string[];
  description: string;
  image?: string;
}

export interface CartItem {
  id: string;
  name: string;
  shadeNumber?: string;
  qty: number;
  category: string;
}

export interface SiteConfig {
  name: string;
  legalName: string;
  slogan: string;
  tagline: string;
  description: string;
  city: string;
  country: string;
  address: string;
  quarter: string;
  email: string;
  phone: string;
  whatsappNumber: string;
  url: string;
  currency: string;
  deliveryZones: string[];
  paymentMethods: string[];
  hours: string;
  socials: {
    facebook: string;
    whatsapp: string;
  };
  features: Array<{
    title: string;
    description: string;
  }>;
  shades: ProductShade[];
  essentials: EssentialProduct[];
}
