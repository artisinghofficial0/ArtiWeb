import React from 'react';
import { useApp } from '../context/AppContext.tsx';
import { generateWhatsAppUrl } from '../utils/businessLogic.ts';
import { Product } from '../types/index.ts';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  product?: Product;
  variantName?: string;
  quantity?: number;
  label?: string;
  variant?: 'secondary' | 'outline' | 'whatsapp-green' | 'floating' | 'primary-blue' | 'glowing';
  intent?: 'product_order' | 'product_enquiry' | 'general_contact' | 'business_opportunity';
  className?: string;
  sourceContext?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  product,
  variantName,
  quantity = 1,
  label,
  variant = 'secondary',
  intent,
  className = '',
  sourceContext = 'product_card',
}) => {
  const { siteSettings, createEnquiry } = useApp();

  const handleClick = (e: React.MouseEvent) => {
    // 1. Create an official enquiry/order record in the distributor database
    const newEnquiry = createEnquiry({
      productId: product?.id,
      productName: product?.name || 'General Enquiry',
      productSku: product?.sku,
      variantName: variantName,
      quantity,
      customerName: 'Website Visitor',
      enquiryType: intent === 'product_order' ? 'product' : product ? 'product' : 'support',
      channel: 'whatsapp',
      sourcePage: window.location.hash || '/home',
      notes: `Initiated from ${sourceContext} (${intent || 'enquiry'})`,
    });

    // 2. Generate WhatsApp URL with unique enquiry reference code
    // Routes to Aarti Singh's WhatsApp: siteSettings.whatsappNumber
    const pageUrl = window.location.origin + window.location.pathname + (product ? `#/product/${product.slug}` : window.location.hash);
    const resolvedIntent = intent || (product ? 'product_enquiry' : 'general_contact');

    const { url } = generateWhatsAppUrl({
      whatsappNumber: siteSettings.whatsappNumber,
      productName: product?.name,
      productId: product?.sku || product?.externalProductId,
      variantName: variantName,
      quantity,
      referenceId: newEnquiry.referenceCode,
      productPageUrl: pageUrl,
      intent: resolvedIntent,
    });

    // 3. Open WhatsApp link safely in a new tab
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const defaultLabel = label || 'Enquire on WhatsApp';

  // Floating button with slow, subtle glowing animation
  if (variant === 'floating') {
    return (
      <button
        onClick={handleClick}
        className={`fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4.5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg border border-emerald-400/50 glow-aarti-btn transition-all transform hover:scale-105 active:scale-95 focus:outline-hidden focus:ring-4 focus:ring-emerald-300 dark:focus:ring-emerald-800 ${className}`}
        aria-label="Chat with Aarti Singh on WhatsApp"
        title="Chat directly with Aarti Singh on WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-100"></span>
        </span>
        <MessageCircle className="w-5 h-5" />
        <span className="font-bold text-sm tracking-wide">Chat with Aarti</span>
      </button>
    );
  }

  // Shiny glowing animation variant for Chat with Aarti
  if (variant === 'glowing') {
    return (
      <button
        onClick={handleClick}
        className={`glow-aarti-btn glow-aarti-btn--inline inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-sm sm:text-base rounded-xl shadow-lg border border-emerald-400/60 transition-all transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer ${className}`}
        aria-label="Chat directly with Aarti Singh on WhatsApp"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-100"></span>
        </span>
        <MessageCircle className="w-5 h-5 shrink-0" />
        <span>{defaultLabel}</span>
      </button>
    );
  }

  // Secondary Button (Per user request: "enquire is secondary button")
  if (variant === 'secondary') {
    return (
      <button
        onClick={handleClick}
        className={`inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-xs transition-colors shadow-2xs hover:border-slate-400 ${className}`}
      >
        <MessageCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
        <span>{defaultLabel}</span>
      </button>
    );
  }

  if (variant === 'outline') {
    return (
      <button
        onClick={handleClick}
        className={`inline-flex items-center justify-center gap-2 px-4 py-2 border-2 border-emerald-600 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 font-bold text-xs rounded-lg transition-colors focus:outline-hidden focus:ring-2 focus:ring-emerald-500 ${className}`}
      >
        <MessageCircle className="w-4 h-4 shrink-0" />
        <span>{defaultLabel}</span>
      </button>
    );
  }

  if (variant === 'whatsapp-green') {
    return (
      <button
        onClick={handleClick}
        className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold text-sm rounded-lg shadow-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${className}`}
      >
        <MessageCircle className="w-4 h-4 shrink-0" />
        <span>{defaultLabel}</span>
      </button>
    );
  }

  // Primary Blue variant if explicitly requested
  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white font-semibold text-sm rounded-lg shadow-xs transition-all hover:shadow-md focus:outline-hidden focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 ${className}`}
    >
      <MessageCircle className="w-4 h-4 shrink-0" />
      <span>{defaultLabel}</span>
    </button>
  );
};
