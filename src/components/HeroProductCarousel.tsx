import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useApp } from '../context/AppContext.tsx';
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ShoppingBag,
  HelpCircle,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';

import aartiPortrait from '../assets/images/aarti_portrait.jpg';

// Transparent product PNG imports (pre-processed with background removed and centered)
import skincareTransparent from '../assets/images/atomy_skincare_transparent.png';
import hemohimTransparent from '../assets/images/atomy_hemohim_transparent.png';
import eveningCareTransparent from '../assets/images/atomy_evening_care_transparent.png';
import toothpasteTransparent from '../assets/images/atomy_toothpaste_transparent.png';
import shampooTransparent from '../assets/images/atomy_shampoo_transparent.png';

export interface FeaturedProductItem {
  id: string;
  sku: string;
  slug: string;
  name: string;
  subtitle: string;
  category: string;
  badge: string;
  authorizedPrice: number;
  originalPrice: number;
  pv: number;
  image: string;
  keyHighlights: string[];
}

export const FEATURED_CAROUSEL_PRODUCTS: FeaturedProductItem[] = [
  {
    id: 'atomy-d00207',
    sku: 'D00207',
    slug: 'absolute-skincare-set-d00207',
    name: 'Atomy Absolute Skincare Set',
    subtitle: 'Prestige 6-piece anti-aging collection with CellActive™ smart bio-delivery to restore natural skin vitality and density.',
    category: 'Skincare',
    badge: 'Flagship Collection',
    authorizedPrice: 20000,
    originalPrice: 23000,
    pv: 130000,
    image: skincareTransparent,
    keyHighlights: ['CellActive™ Smart Delivery', '6-Step Complete Ritual', 'Dermatest Excellent Grade'],
  },
  {
    id: 'atomy-d00101',
    sku: 'D00101',
    slug: 'hemohim-1set-d00101',
    name: 'Atomy HemoHIM (60 Pack)',
    subtitle: 'Patented Korean functional health supplement developed by KAERI to support healthy immune defense and vitality.',
    category: 'Health',
    badge: 'Immune Vitality',
    authorizedPrice: 13000,
    originalPrice: 14500,
    pv: 60000,
    image: hemohimTransparent,
    keyHighlights: ['Angelica Gigas Bio-Extract', '60 Ready-to-Drink Packets', 'KAERI Patented Formula'],
  },
  {
    id: 'atomy-d00351',
    sku: 'D00351',
    slug: 'evening-care-set-4-pcs-per-set-d00351',
    name: 'Evening Care 4-Step Set',
    subtitle: 'The celebrated Korean home spa regimen: Deep Cleanser, Foam Cleanser, Peeling Gel, and Peel-Off Mask.',
    category: 'Skincare',
    badge: 'Home Spa Facial',
    authorizedPrice: 3300,
    originalPrice: 3800,
    pv: 13000,
    image: eveningCareTransparent,
    keyHighlights: ['Pore Purification & Calming', 'Botanical Ferment Extracts', 'Smooth Radiance Finish'],
  },
  {
    id: 'atomy-d00521',
    sku: 'D00521',
    slug: 'toothpaste-50g-x-4-n-d00521',
    name: 'Atomy Propolis Toothpaste (4-Pack)',
    subtitle: 'Natural water-soluble bee propolis and green tea catechins to eliminate plaque, protect gums, and refresh breath.',
    category: 'Personal Care',
    badge: 'Natural Oral Care',
    authorizedPrice: 520,
    originalPrice: 600,
    pv: 3200,
    image: toothpasteTransparent,
    keyHighlights: ['Water-Soluble Propolis', 'Green Tea Polyphenols', 'Gentle on Sensitive Enamel'],
  },
  {
    id: 'atomy-d00601',
    sku: 'D00601',
    slug: 'herbal-hair-shampoo-d00601',
    name: 'Atomy Herbal Hair Shampoo (500ml)',
    subtitle: 'Traditional Korean fermented herbs (Saengmodan) to deep-cleanse hair follicles, relieve scalp itch, and add silky shine.',
    category: 'Personal Care',
    badge: 'Herbal Scalp Care',
    authorizedPrice: 1050,
    originalPrice: 1200,
    pv: 5200,
    image: shampooTransparent,
    keyHighlights: ['10 Fermented Korean Herbs', 'Scalp Sebum Balancing', 'Jumbo 500ml Pump Bottle'],
  },
];

export const HeroProductCarousel: React.FC = () => {
  const { navigateTo, siteSettings, createEnquiry } = useApp();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = FEATURED_CAROUSEL_PRODUCTS.length;

  // Touch swipe tracking
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);
  const carouselContainerRef = useRef<HTMLDivElement>(null);

  // Check for reduced motion preference
  const isReducedMotion = typeof window !== 'undefined'
    && window.matchMedia
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Autoplay timer
  useEffect(() => {
    if (isPaused || isReducedMotion) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, isReducedMotion, handleNext]);

  // Touch gesture handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    const deltaY = e.changedTouches[0].clientY - (touchStartYRef.current || 0);

    // Only respond to horizontal swipes
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 40) {
      if (deltaX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartXRef.current = null;
    touchStartYRef.current = null;
    setIsPaused(false);
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      handleNext();
    } else if (e.key === 'ArrowLeft') {
      handlePrev();
    }
  };

  const activeProduct = FEATURED_CAROUSEL_PRODUCTS[activeIndex];

  // Helper to calculate circular relative offset (-2, -1, 0, 1, 2)
  const getRelativePosition = (index: number) => {
    let diff = index - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  // Order action handler (WhatsApp)
  const handleOrderClick = () => {
    createEnquiry({
      productId: activeProduct.id,
      productName: activeProduct.name,
      productSku: activeProduct.sku,
      enquiryType: 'product',
      channel: 'whatsapp',
      notes: `Direct Order intent from Hero Carousel: ${activeProduct.name} (₹${activeProduct.authorizedPrice})`,
    });

    const msg = encodeURIComponent(
      `Hello Aarti, I would like to ORDER the *${activeProduct.name}* (SKU: ${activeProduct.sku}, ₹${activeProduct.authorizedPrice.toLocaleString('en-IN')}) from the official Atomy warehouse. Please guide me through delivery & member rate confirmation.`
    );
    window.open(`https://wa.me/${siteSettings.whatsappNumber}?text=${msg}`, '_blank', 'noopener,noreferrer');
  };

  // Enquire action handler (WhatsApp)
  const handleEnquireClick = () => {
    createEnquiry({
      productId: activeProduct.id,
      productName: activeProduct.name,
      productSku: activeProduct.sku,
      enquiryType: 'product',
      channel: 'whatsapp',
      notes: `Product Enquiry from Hero Carousel: ${activeProduct.name}`,
    });

    const msg = encodeURIComponent(
      `Hello Aarti, I have an ENQUIRY regarding *${activeProduct.name}* (SKU: ${activeProduct.sku}). Could you please share more details about its ingredients, suitability, and usage?`
    );
    window.open(`https://wa.me/${siteSettings.whatsappNumber}?text=${msg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      aria-label="Featured Atomy Products Carousel"
      className="relative overflow-hidden bg-gradient-to-b from-sky-50/50 via-white to-slate-50/60 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-950 border-b border-slate-200/80 dark:border-slate-800 transition-colors pt-4 sm:pt-8 pb-8 sm:pb-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top Trust Header */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-2 pl-1 pr-3 py-1 rounded-full bg-white/90 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs backdrop-blur-xs">
            <img
              src={aartiPortrait}
              alt="Aarti Singh"
              className="w-5 h-5 rounded-full object-cover object-top border border-emerald-500/70 shrink-0"
            />
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[11px] sm:text-xs font-bold text-slate-800 dark:text-slate-200">
              Aarti Singh • Authorized Atomy Distributor
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-slate-500 dark:text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span>100% Genuine Atomy Direct Dispatch</span>
          </div>
        </div>

        {/* Main 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* ===================================================================
              PRODUCT CAROUSEL VISUAL STAGE (Left on Desktop, Top on Mobile)
              Continuous 3D stage with Ambient Light & Contact Shadow
              =================================================================== */}
          <div
            ref={carouselContainerRef}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="lg:col-span-6 relative flex items-center justify-center min-h-[240px] sm:min-h-[288px] md:min-h-[320px] select-none outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-3xl"
            aria-roledescription="carousel"
          >
            {/* Ambient Blue Backlight behind center active product */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full pointer-events-none transition-all duration-700"
              style={{
                background:
                  'radial-gradient(circle, rgba(56, 189, 248, 0.32) 0%, rgba(14, 165, 233, 0.14) 45%, rgba(2, 132, 199, 0) 75%)',
                filter: 'blur(36px)',
              }}
            />

            {/* Independent Soft Ground Contact Shadow */}
            <div
              className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 w-44 sm:w-56 md:w-64 h-4 sm:h-5 rounded-[100%] pointer-events-none transition-all duration-500"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(15, 23, 42, 0.22) 0%, rgba(15, 23, 42, 0.08) 50%, transparent 80%)',
                filter: 'blur(6px)',
              }}
            />

            {/* Carousel Products Stage */}
            <div className="relative w-full h-[224px] sm:h-[272px] md:h-[304px] flex items-center justify-center">
              {FEATURED_CAROUSEL_PRODUCTS.map((prod, idx) => {
                const diff = getRelativePosition(idx);
                const isActive = diff === 0;
                const isLeftNeighbor = diff === -1;
                const isRightNeighbor = diff === 1;
                const isFarLeft = diff === -2;
                const isFarRight = diff === 2;

                // Responsive positioning calculations
                let translateX = '0%';
                let scale = 1;
                let opacity = 1;
                let zIndex = 30;
                let blur = 'blur(0px)';
                let pointerEvents: 'auto' | 'none' = 'auto';

                if (isActive) {
                  translateX = '0%';
                  scale = 0.91;
                  opacity = 1;
                  zIndex = 30;
                  blur = 'blur(0px)';
                } else if (isLeftNeighbor) {
                  translateX = '-54%';
                  scale = 0.75;
                  opacity = 0.45;
                  zIndex = 20;
                  blur = 'blur(1.5px)';
                } else if (isRightNeighbor) {
                  translateX = '54%';
                  scale = 0.75;
                  opacity = 0.45;
                  zIndex = 20;
                  blur = 'blur(1.5px)';
                } else if (isFarLeft) {
                  translateX = '-92%';
                  scale = 0.52;
                  opacity = 0.12;
                  zIndex = 10;
                  blur = 'blur(3px)';
                } else if (isFarRight) {
                  translateX = '92%';
                  scale = 0.52;
                  opacity = 0.12;
                  zIndex = 10;
                  blur = 'blur(3px)';
                } else {
                  translateX = diff > 0 ? '120%' : '-120%';
                  scale = 0.4;
                  opacity = 0;
                  zIndex = 0;
                  pointerEvents = 'none';
                }

                return (
                  <div
                    key={prod.id}
                    onClick={() => {
                      if (isActive) {
                        navigateTo('product', prod.slug);
                      } else {
                        setActiveIndex(idx);
                      }
                    }}
                    role="button"
                    tabIndex={isActive ? 0 : -1}
                    aria-label={`${prod.name} ${isActive ? '(in focus - tap for details)' : '(tap to center)'}`}
                    className={`absolute inset-0 m-auto flex flex-col items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                      isActive ? 'cursor-pointer group' : 'cursor-pointer hover:opacity-75'
                    }`}
                    style={{
                      width: '67%',
                      maxWidth: '304px',
                      height: '100%',
                      transform: `translateX(${translateX}) scale(${scale})`,
                      opacity,
                      zIndex,
                      filter: blur,
                      pointerEvents,
                    }}
                  >
                    <div className="relative w-full h-full flex items-center justify-center p-0">
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className={`max-h-full max-w-full object-contain transition-transform duration-300 ${
                          isActive ? 'group-hover:scale-105 drop-shadow-lg' : ''
                        }`}
                        loading="eager"
                        decoding="async"
                      />
                    </div>

                    {/* Active product label hint on hover */}
                    {isActive && (
                      <span className="sr-only">
                        Active: {prod.name}. Tap to view product details.
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Left/Right Subtle Navigation Arrows */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-40 p-2 sm:p-2.5 rounded-full bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700 shadow-md backdrop-blur-xs transition-transform hover:scale-110 active:scale-95 cursor-pointer"
              aria-label="Previous product"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-40 p-2 sm:p-2.5 rounded-full bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700 shadow-md backdrop-blur-xs transition-transform hover:scale-110 active:scale-95 cursor-pointer"
              aria-label="Next product"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* ===================================================================
              PRODUCT DETAILS & DUAL CTA ACTIONS (ORDER & ENQUIRE)
              =================================================================== */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5 text-center lg:text-left">
            {/* Action Buttons: Explore Products & Enquire Now (Placed exactly below carousel as marked) */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 max-w-md mx-auto lg:mx-0">
              <button
                type="button"
                onClick={() => navigateTo('catalogue')}
                className="w-full inline-flex items-center justify-center gap-1.5 py-3 px-3.5 sm:px-4 bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white font-black text-xs sm:text-sm rounded-xl shadow-sm hover:shadow-sky-500/25 transition-all cursor-pointer transform hover:-translate-y-0.5 active:scale-98"
                aria-label="Explore All Products"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={handleEnquireClick}
                className="w-full inline-flex items-center justify-center gap-1.5 py-3 px-3.5 sm:px-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-black text-xs sm:text-sm rounded-xl shadow-sm hover:shadow-emerald-500/25 transition-all cursor-pointer transform hover:-translate-y-0.5 active:scale-98"
                aria-label="Enquire Now on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Enquire Now</span>
              </button>
            </div>

            {/* Category / Badge */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                <Sparkles className="w-3 h-3" />
                <span>{activeProduct.badge}</span>
              </span>
              <span className="text-[11px] font-semibold text-slate-400">
                Category: {activeProduct.category}
              </span>
            </div>

            {/* Title & Click-to-Detail Link */}
            <div>
              <h1
                onClick={() => navigateTo('product', activeProduct.slug)}
                className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight hover:text-sky-600 dark:hover:text-sky-400 transition-colors cursor-pointer inline-flex items-center gap-2 group"
                title="Tap to see full product specifications"
              >
                <span>{activeProduct.name}</span>
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 text-sky-600 dark:text-sky-400 transition-opacity" />
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed max-w-xl mx-auto lg:mx-0">
                {activeProduct.subtitle}
              </p>
            </div>

            {/* Key Highlights Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              {activeProduct.keyHighlights.map((highlight, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[11px] font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                >
                  <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                  <span>{highlight}</span>
                </span>
              ))}
            </div>

            {/* Authorized Pricing */}
            <div className="pt-2 flex items-baseline justify-center lg:justify-start gap-3">
              <span className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
                ₹{activeProduct.authorizedPrice.toLocaleString('en-IN')}
              </span>
              {activeProduct.originalPrice > activeProduct.authorizedPrice && (
                <>
                  <span className="text-sm text-slate-400 line-through">
                    ₹{activeProduct.originalPrice.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                    Save ₹{(activeProduct.originalPrice - activeProduct.authorizedPrice).toLocaleString('en-IN')}
                  </span>
                </>
              )}
            </div>

            {/* Primary Order Direct on WhatsApp */}
            <div className="pt-2 max-w-md mx-auto lg:mx-0">
              <button
                type="button"
                onClick={handleOrderClick}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 bg-slate-900 hover:bg-slate-800 dark:bg-sky-600 dark:hover:bg-sky-700 text-white font-extrabold text-sm rounded-xl shadow-md transition-all cursor-pointer transform hover:-translate-y-0.5 active:scale-98"
                aria-label={`Order ${activeProduct.name} on WhatsApp`}
              >
                <ShoppingBag className="w-4 h-4" />
                <span>ORDER ON WHATSAPP</span>
              </button>
            </div>

            {/* Indicators & Interactive Product Switcher */}
            <div className="pt-3 flex items-center justify-center lg:justify-start gap-2">
              <span className="text-[11px] font-mono text-slate-400 mr-2">
                0{activeIndex + 1} / 0{total}
              </span>
              {FEATURED_CAROUSEL_PRODUCTS.map((p, idx) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === idx
                      ? 'w-7 bg-sky-600 dark:bg-sky-400'
                      : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                  }`}
                  aria-label={`Switch to ${p.name}`}
                  title={p.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
