import { CartItem } from '@/types';

export function buildOrderUrl(
  phone: string,
  items: CartItem[],
  clientCity: string = 'Dakar'
): string {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  
  if (items.length === 0) {
    const defaultMsg = [
      'Bonjour Temanto Paris 👋',
      '',
      'Je souhaite avoir des informations sur votre sélection de maquillage et teintes disponibles.',
      '',
      `📍 Ville / Quartier : ${clientCity}`,
      'Merci !',
    ].join('\n');
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(defaultMsg)}`;
  }

  const lines = items.map(
    (item) => `• ${item.name}${item.shadeNumber ? ` (${item.shadeNumber})` : ''} x${item.qty}`
  );

  const msg = [
    '✨ *Commande Temanto Paris*',
    '',
    'Bonjour, je souhaite commander les teintes suivantes :',
    '',
    ...lines,
    '',
    `📍 *Livraison souhaitée* : ${clientCity}`,
    '💳 *Paiement* : Wave / Orange Money / Espèces',
    '',
    'Merci de me confirmer la disponibilité et le délai de livraison 🙏',
  ].join('\n');

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(msg)}`;
}

export function buildShadeInquiryUrl(
  phone: string,
  shadeName: string,
  shadeNumber: string
): string {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const msg = [
    '✨ *Temanto Paris — Commande Directe*',
    '',
    `Bonjour, je souhaite commander la teinte : *${shadeName}* (${shadeNumber}).`,
    '',
    'Est-elle disponible pour une livraison sur Dakar ?',
    'Merci !',
  ].join('\n');

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(msg)}`;
}
