import React, { useRef, useState, useEffect } from 'react';
import { useApp } from '../context/AppContext.tsx';
import { ProductCard } from '../components/ProductCard.tsx';
import { HeroProductCarousel } from '../components/HeroProductCarousel.tsx';
import { WhatsAppButton } from '../components/WhatsAppButton.tsx';
import { isOfferActive } from '../utils/businessLogic.ts';
import {
  skincareHero,
  aartiPortrait,
  hemohimImg,
  eveningCareImg,
  toothpasteImg,
  vitaminCImg,
  shampooImg,
} from '../data/initialData.ts';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Award,
  Sparkles,
  CheckCircle2,
  Clock,
  Phone,
  Mail,
  MapPin,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Tag,
  Star,
  Flame,
  Truck,
  HeartHandshake,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const {
    t,
    products,
    categories,
    offers,
    heroSlides,
    heroSliderSettings,
    navigateTo,
    siteSettings,
    createEnquiry,
  } = useApp();

  // Carousel ref for Bestsellers
  const bestsellersRef = useRef<HTMLDivElement>(null);
  const scrollBestsellers = (direction: 'left' | 'right') => {
    if (bestsellersRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      bestsellersRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Filtered lists
  const bestsellers = products.filter((p) => p.isPublished && p.isBestseller);
  const activeOffers = offers.filter((o) => isOfferActive(o));

  // FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Quick message form state
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    enquiryType: 'Product Enquiry',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name.trim() || !contactForm.phone.trim()) return;

    createEnquiry({
      customerName: contactForm.name,
      customerContact: contactForm.phone,
      enquiryType: 'product',
      channel: 'web_form',
      sourcePage: '/home#customer-support',
      notes: `Type: ${contactForm.enquiryType} | Msg: ${contactForm.message}`,
    });

    setFormSubmitted(true);
    setTimeout(() => {
      const encodedMsg = encodeURIComponent(
        `Hello Aarti, my name is ${contactForm.name}. I submitted an enquiry via your website regarding ${contactForm.enquiryType}:\n"${contactForm.message}"\nMy WhatsApp: ${contactForm.phone}`
      );
      window.open(`https://wa.me/${siteSettings.whatsappNumber}?text=${encodedMsg}`, '_blank');
    }, 1200);
  };

  const faqs = [
    {
      q: 'How do I enquire about and order Atomy products?',
      a: 'As Atomy operates on a direct distributor model, simply click the "Order on WhatsApp" or "Enquire" button on any product. A pre-formatted message will be addressed to Aarti Singh with the specific product ID and reference. Aarti will verify official warehouse stock, guide you through member privileges, and arrange secure direct dispatch.',
    },
    {
      q: 'Are all products 100% authentic Korean Atomy products?',
      a: 'Yes. Aarti Singh is an officially registered Independent Atomy India Distributor. All products are sourced directly from Atomy India’s authorized warehouses in original tamper-evident sealed packaging with authentic batch numbers and expiry dates.',
    },
    {
      q: 'Is there any joining fee or commitment to register with Atomy?',
      a: 'No. Atomy offers 100% free membership with zero registration fees, zero compulsory monthly auto-ships, and zero annual renewal fees. You purchase only what you want, when you want at member prices.',
    },
    {
      q: 'How long does delivery take across India?',
      a: 'Orders coordinated through Atomy India warehouses are typically dispatched within 24-48 hours and delivered within 3-5 business days across major Indian cities and metro areas, with complete courier tracking.',
    },
  ];

  return (
    <div className="space-y-10 sm:space-y-16 pb-16">
      {/* =========================================================================
          PREMIUM AUTO-SCROLLING PRODUCT CAROUSEL (HERO SECTION)
          Inspired by high-end Korean skincare aesthetics. Features 5 iconic Atomy
          flagship products with background-removed transparent PNGs, ambient blue
          lighting, independent ground contact shadows, smooth 3D coverflow effect,
          touch swipe, click-to-focus, and direct ORDER / ENQUIRE WhatsApp actions.
          ========================================================================= */}
      <HeroProductCarousel />

      {/* =========================================================================
          FIX 4: SMALLER & MORE ATTRACTIVE SPECIAL OFFER STRIP
          Compact, attractive privilege offer bar that takes minimal vertical height.
          ========================================================================= */}
      {activeOffers.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-sky-500/10 to-emerald-500/10 border border-amber-300/80 dark:border-amber-700/60 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-2xs">
                <Flame className="w-5 h-5 fill-white" />
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <span className="text-[10px] uppercase font-black tracking-wider bg-amber-200 dark:bg-amber-900/60 text-amber-900 dark:text-amber-200 px-2 py-0.5 rounded-full">
                    {activeOffers[0].bannerTag || 'Limited Offer'}
                  </span>
                  <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                    {activeOffers[0].title} — {activeOffers[0].productName}
                  </span>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-2 mt-0.5 text-xs">
                  <span className="text-slate-400 line-through">
                    ₹{activeOffers[0].authorizedOriginalPrice.toLocaleString('en-IN')}
                  </span>
                  <span className="font-black text-emerald-600 dark:text-emerald-400">
                    Now ₹{activeOffers[0].authorizedOfferPrice.toLocaleString('en-IN')}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 hidden md:inline">
                    • {activeOffers[0].description}
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => navigateTo('product', 'atomy-absolute-skincare-set')}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 dark:bg-sky-600 dark:hover:bg-sky-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors shrink-0 cursor-pointer"
            >
              Claim Offer →
            </button>
          </div>
        </section>
      )}

      {/* =========================================================================
          BESTSELLERS & CUSTOMER FAVORITES (EVERYDAY ESSENTIALS)
          ========================================================================= */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-widest mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Customer Favorites</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              Best Selling Atomy Products
            </h2>
          </div>

          {/* Desktop Arrow Controls */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => scrollBestsellers('left')}
              className="p-2 rounded-full border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
              aria-label="Previous bestsellers"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollBestsellers('right')}
              className="p-2 rounded-full border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
              aria-label="Next bestsellers"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigateTo('catalogue')}
              className="px-3.5 py-1.5 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold rounded-lg transition-colors ml-1 cursor-pointer"
            >
              View Full Catalogue
            </button>
          </div>
        </div>

        {/* Horizontally scrollable product row */}
        <div
          ref={bestsellersRef}
          className="flex space-x-5 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory"
        >
          {bestsellers.map((product) => (
            <div key={product.id} className="w-68 sm:w-74 shrink-0 snap-start">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          CURATED ESSENTIAL STARTER BUNDLES (SOLUTION-ORIENTED SETS)
          Instead of scrolling through 94 individual products, visitors can pick
          pre-matched starter regimens tailored to specific Indian household needs.
          ========================================================================= */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950/70 border border-sky-200 dark:border-sky-800 text-sky-700 dark:text-sky-300 text-xs font-bold tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Distributor Packages</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Hand-Picked Starter Bundles
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Scientifically balanced Korean skincare, wellness, and home bundles curated by Aarti Singh. Zero guesswork, maximum direct distributor value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bundle 1: Korean Glass Glow Starter */}
          <div className="relative rounded-3xl bg-white dark:bg-slate-800 border-2 border-sky-200 dark:border-sky-800 shadow-md hover:shadow-xl transition-all flex flex-col justify-between overflow-hidden group">
            <div className="absolute top-0 right-0 bg-sky-600 text-white font-black text-[10px] tracking-wider uppercase px-3 py-1 rounded-bl-xl shadow-xs">
              Most Popular
            </div>

            <div className="p-6 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-sky-50 dark:bg-slate-750 flex items-center justify-center text-2xl shadow-inner">
                ✨
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                  Daily Skin Glow Routine
                </span>
                <h3 className="text-lg font-black text-slate-900 dark:text-white mt-0.5">
                  Korean Glass Glow Trio
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  The complete 3-step essential routine for radiant, protected glass skin in Indian climate.
                </p>
              </div>

              {/* Items in bundle */}
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-700">
                <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 block">
                  Includes 3 Full-Size Items:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Atomy Evening Care Foam Cleanser (150ml)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Atomy Sunscreen SPF50+ PA+++ (Zero White Cast)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Atomy BB Cream (Whitening & Sheer Finish)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-6 bg-slate-50/70 dark:bg-slate-850 border-t border-slate-100 dark:border-slate-700 space-y-3">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-slate-400 line-through mr-2">₹2,850</span>
                  <span className="text-2xl font-black text-slate-900 dark:text-white">₹2,450</span>
                </div>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                  Save ₹400
                </span>
              </div>

              <a
                href={`https://wa.me/${siteSettings.whatsappNumber}?text=${encodeURIComponent(
                  'Hello Aarti, I want to order the "Korean Glass Glow Trio Bundle" (Foam Cleanser + Sunscreen + BB Cream) at ₹2,450. Please confirm warehouse stock and delivery.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
              >
                <span>Order Bundle on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Bundle 2: Family Wellness & Immunity Kit */}
          <div className="relative rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between overflow-hidden group">
            <div className="p-6 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-slate-750 flex items-center justify-center text-2xl shadow-inner">
                🌿
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Total Vitality & Digestion
                </span>
                <h3 className="text-lg font-black text-slate-900 dark:text-white mt-0.5">
                  Family Health & Gut Vitality
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  Clinically proven immune and digestive balance for parents, seniors, and children.
                </p>
              </div>

              {/* Items in bundle */}
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-700">
                <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 block">
                  Includes 2 Powerhouse Essentials:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Atomy Probiotics 10+ (3 Billion CFU, 12 Strains)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Atomy Korean Color Food Vitamin C (500mg, 90pk)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Free Diet & Probiotic Usage Chart by Aarti</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-6 bg-slate-50/70 dark:bg-slate-850 border-t border-slate-100 dark:border-slate-700 space-y-3">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-slate-400 line-through mr-2">₹4,400</span>
                  <span className="text-2xl font-black text-slate-900 dark:text-white">₹3,850</span>
                </div>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                  Save ₹550
                </span>
              </div>

              <a
                href={`https://wa.me/${siteSettings.whatsappNumber}?text=${encodeURIComponent(
                  'Hello Aarti, I am interested in the "Family Health & Gut Vitality Bundle" (Probiotics 10+ and Vitamin C) at ₹3,850. Please guide me on dosage and order process.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
              >
                <span>Order Bundle on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Bundle 3: Herbal Hair & Scalp Defense */}
          <div className="relative rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between overflow-hidden group">
            <div className="p-6 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 dark:bg-slate-750 flex items-center justify-center text-2xl shadow-inner">
                💆‍♀️
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  Anti-Hairfall Botanical Therapy
                </span>
                <h3 className="text-lg font-black text-slate-900 dark:text-white mt-0.5">
                  Herbal Hair & Scalp Therapy
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  Fermented Korean Saengmodan herbs to strengthen roots, clear dandruff, and prevent hair fall.
                </p>
              </div>

              {/* Items in bundle */}
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-700">
                <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 block">
                  Includes 2 Full Regimen Products:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Atomy Herbal Hair Shampoo (500ml Jumbo Pump)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Atomy Saengmodan Herbal Scalp Tonic (200ml)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Direct WhatsApp Hair Care Consultation with Aarti</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-6 bg-slate-50/70 dark:bg-slate-850 border-t border-slate-100 dark:border-slate-700 space-y-3">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-slate-400 line-through mr-2">₹2,650</span>
                  <span className="text-2xl font-black text-slate-900 dark:text-white">₹2,250</span>
                </div>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                  Save ₹400
                </span>
              </div>

              <a
                href={`https://wa.me/${siteSettings.whatsappNumber}?text=${encodeURIComponent(
                  'Hello Aarti, I want to enquire about the "Herbal Hair & Scalp Therapy Bundle" (Herbal Shampoo + Scalp Tonic) at ₹2,250. How should I use it for hair fall?'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
              >
                <span>Order Bundle on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Custom Bundle Guidance Banner */}
        <div className="mt-6 p-4 rounded-2xl bg-sky-50 dark:bg-slate-800/80 border border-sky-100 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <img
              src={aartiPortrait}
              alt="Aarti Singh"
              className="w-10 h-10 rounded-full object-cover object-top border-2 border-sky-400 shadow-sm shrink-0"
            />
            <div>
              <span className="text-xs font-bold text-slate-900 dark:text-white block">
                Want a custom product combination for your exact skin or health goal?
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">
                Tell Aarti your concerns and get a personalized routine built without any obligation.
              </span>
            </div>
          </div>
          <a
            href={`https://wa.me/${siteSettings.whatsappNumber}?text=${encodeURIComponent(
              'Hello Aarti, I want your recommendation to build a custom Atomy routine for my skin and health goals.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 dark:bg-sky-600 dark:hover:bg-sky-700 text-white font-bold text-xs rounded-xl shadow-2xs transition-colors shrink-0"
          >
            Ask for Custom Routine →
          </a>
        </div>
      </section>

      {/* =========================================================================
          EXPLORE BY CATEGORY
          ========================================================================= */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400">
              Categories
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-0.5">
              Explore Collections
            </h2>
          </div>
          <button
            onClick={() => navigateTo('catalogue')}
            className="text-xs font-bold text-sky-600 hover:underline flex items-center gap-1"
          >
            <span>All Categories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {categories.slice(0, 3).map((category) => (
            <div
              key={category.id}
              onClick={() => navigateTo('catalogue', category.id)}
              className="group rounded-2xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="aspect-16/10 w-full overflow-hidden bg-slate-50 dark:bg-slate-900 p-6 flex items-center justify-center">
                <img
                  src={category.image}
                  alt={category.name}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-4 bg-white dark:bg-slate-800 border-t border-slate-100 dark:border-slate-700">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-sky-600 transition-colors">
                    {category.name}
                  </h3>
                  <span className="text-[11px] text-slate-400 font-medium">
                    {category.productCount}+ Products
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          MEET AARTI SINGH (INDEPENDENT DISTRIBUTOR)
          ========================================================================= */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Portrait */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative">
                <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-sky-400/30 shadow-2xl">
                  <img
                    src={aartiPortrait}
                    alt="Aarti Singh - Independent Atomy Distributor"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[10px] font-bold px-3 py-0.5 rounded-full shadow-md whitespace-nowrap">
                  Registered Distributor
                </div>
              </div>
            </div>

            {/* Bio & Invitation */}
            <div className="lg:col-span-8 space-y-3 text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
                Your Personal Guidance Partner
              </span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                Aarti Singh
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                As an authorized Independent Atomy India Distributor based in Gurgaon, my commitment is to assist you with genuine Korean skincare, herbal immune health, and personal care products tailored to your needs.
              </p>
              <p className="text-slate-400 text-xs leading-relaxed">
                Connect for free member registration guidance, direct warehouse dispatch, or starting an independent business in India.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <WhatsAppButton
                  label="Chat with Aarti on WhatsApp"
                  variant="glowing"
                  className="w-full sm:w-auto text-xs sm:text-sm py-3 px-5"
                  sourceContext="meet_aarti_section"
                />

                <button
                  onClick={() => navigateTo('about')}
                  className="w-full sm:w-auto px-5 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl border border-slate-700 transition-colors cursor-pointer"
                >
                  About Aarti Singh
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FAQ & DIRECT MESSAGE SECTION
          ========================================================================= */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* FAQ Accordion */}
          <div className="lg:col-span-7 space-y-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400">
                FAQs
              </span>
              <h2 className="text-xl font-black text-slate-900 dark:text-white mt-0.5">
                Common Questions
              </h2>
            </div>

            <div className="space-y-2.5 pt-1">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-3.5 text-left font-bold text-xs sm:text-sm text-slate-900 dark:text-white flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/50"
                  >
                    <span>{faq.q}</span>
                    {openFaq === idx ? (
                      <ChevronUp className="w-4 h-4 text-sky-600 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {openFaq === idx && (
                    <div className="p-3.5 pt-0 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-700/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Direct Message Card */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="p-1.5 rounded-lg bg-sky-50 dark:bg-slate-700 text-sky-600 dark:text-sky-400">
                  <Phone className="w-4 h-4" />
                </span>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                  Send a Quick Enquiry
                </h3>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-3">
                Leave your details for fast reply directly on WhatsApp.
              </p>

              {formSubmitted ? (
                <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs text-center space-y-1">
                  <p className="font-bold">Thank you!</p>
                  <p>Opening WhatsApp to connect with Aarti Singh...</p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-2.5">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder="e.g. Priya Sharma"
                      className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-xs text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      WhatsApp Mobile Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-xs text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Enquiry Purpose
                    </label>
                    <select
                      value={contactForm.enquiryType}
                      onChange={(e) => setContactForm({ ...contactForm, enquiryType: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-xs text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                    >
                      <option value="Product Enquiry">Product Enquiry & Ordering</option>
                      <option value="Skincare Consultation">Personal Skincare Consultation</option>
                      <option value="Atomy Membership">Free Member Registration Guidance</option>
                      <option value="Business Opportunity">Independent Distributor Opportunity</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Message (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      placeholder="Which product or regimen are you interested in?"
                      className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-xs text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-lg shadow-xs transition-colors cursor-pointer"
                  >
                    Submit & Open WhatsApp
                  </button>
                </form>
              )}
            </div>

            <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-700 text-[10px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
              <span>Direct Support: {siteSettings.displayPhone}</span>
              <span className="text-emerald-600 font-semibold">Active Now</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
