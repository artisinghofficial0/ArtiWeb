import React from 'react';
import { Product } from '../types/index.ts';
import { useApp } from '../context/AppContext.tsx';
import { WhatsAppButton } from './WhatsAppButton.tsx';
import { ArrowRight, Sparkles } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  featuredMode?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { t, language, navigateTo } = useApp();

  const displayName = language === 'hi' && product.nameHi ? product.nameHi : product.name;
  const displayShort =
    language === 'hi' && product.shortDescriptionHi
      ? product.shortDescriptionHi
      : product.shortDescription;

  const handleCardClick = () => {
    navigateTo('product', product.slug);
  };

  return (
    <div className="group bg-white dark:bg-slate-800 rounded-xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col overflow-hidden">
      {/* Product Image Area */}
      <div
        onClick={handleCardClick}
        className="relative aspect-square w-full bg-slate-50 dark:bg-slate-800/60 p-4 sm:p-6 flex items-center justify-center cursor-pointer overflow-hidden"
      >
        <img
          src={product.thumbnail}
          alt={product.name}
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
          loading="lazy"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.badge && (
            <span
              className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-xs ${
                product.badge === 'Bestseller'
                  ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-300 border border-amber-300 dark:border-amber-700'
                  : product.badge === 'Featured'
                  ? 'bg-sky-100 text-sky-800 dark:bg-sky-900/60 dark:text-sky-300 border border-sky-300 dark:border-sky-700'
                  : product.badge === 'New'
                  ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700'
                  : 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-300'
              }`}
            >
              {product.badge}
            </span>
          )}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Category Tag */}
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="text-xs font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
              {product.categoryName}
            </span>
            <span className="text-[11px] text-slate-400 font-mono">
              {product.sku}
            </span>
          </div>

          {/* Title */}
          <h3
            onClick={handleCardClick}
            className="font-bold text-base text-slate-900 dark:text-white line-clamp-1 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors cursor-pointer"
            title={displayName}
          >
            {displayName}
          </h3>

          {/* Description */}
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
            {displayShort}
          </p>
        </div>

        {/* Pricing & Actions */}
        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700/60">
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-lg font-extrabold text-slate-900 dark:text-white">
              ₹{product.authorizedPrice.toLocaleString('en-IN')}
            </span>
            {product.originalPrice && product.originalPrice > product.authorizedPrice && (
              <span className="text-xs text-slate-400 line-through">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
            <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium ml-auto">
              Authorized Atomy Rate
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCardClick}
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 active:bg-sky-800 rounded-lg shadow-2xs transition-colors"
            >
              <span>{t('viewDetails')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <WhatsAppButton
              product={product}
              label="Enquire"
              variant="secondary"
              className="py-2 px-3 text-xs shrink-0"
              sourceContext="product_card"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
