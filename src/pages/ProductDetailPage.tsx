import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext.tsx';
import { WhatsAppButton } from '../components/WhatsAppButton.tsx';
import { ProductCard } from '../components/ProductCard.tsx';
import { aartiPortrait } from '../data/initialData.ts';
import {
  ShieldCheck,
  Sparkles,
  Droplets,
  Heart,
  CheckCircle2,
  Calendar,
  Layers,
  HelpCircle,
  MessageSquare,
  X,
  Send,
  Plus,
  Minus,
  Award,
  ChevronDown,
  ChevronUp,
  Clock,
  Truck,
  Leaf,
} from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const {
    t,
    language,
    products,
    currentProductSlug,
    navigateTo,
    trackEvent,
    siteSettings,
    createEnquiry,
  } = useApp();

  // Find active product
  const product =
    products.find((p) => p.slug === currentProductSlug) ||
    products[0];

  const [selectedImage, setSelectedImage] = useState<string>(product?.thumbnail || '');
  const [quantity, setQuantity] = useState(1);
  const [questionModalOpen, setQuestionModalOpen] = useState(false);
  const [customQuestion, setCustomQuestion] = useState('');
  const [questionSent, setQuestionSent] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    if (product) {
      setSelectedImage(product.thumbnail);
      setQuantity(1);
      trackEvent('product_view', {
        productId: product.id,
        productName: product.name,
        pagePath: `/product/${product.slug}`,
      });
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Product Not Found</h2>
        <p className="text-sm text-slate-500 mb-6">The product you are looking for is unavailable or has moved.</p>
        <button
          onClick={() => navigateTo('catalogue')}
          className="px-6 py-2.5 rounded-xl bg-sky-600 text-white font-bold text-sm hover:bg-sky-700 transition-colors cursor-pointer"
        >
          Browse All Products
        </button>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.isPublished && p.id !== product.id && p.categoryId === product.categoryId)
    .slice(0, 3);

  const displayName = language === 'hi' && product.nameHi ? product.nameHi : product.name;
  const displayDesc = language === 'hi' && product.descriptionHi ? product.descriptionHi : product.description;

  const handleSendQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customQuestion.trim()) return;

    createEnquiry({
      productId: product.id,
      productName: product.name,
      productSku: product.sku,
      customerName: 'Customer Inquiry',
      enquiryType: 'product',
      channel: 'web_form',
      sourcePage: `/product/${product.slug}`,
      notes: `Question: ${customQuestion}`,
    });

    setQuestionSent(true);
    setTimeout(() => {
      setQuestionModalOpen(false);
      setQuestionSent(false);
      setCustomQuestion('');
    }, 2000);
  };

  const productFaqs = product.productDetails.faq.length > 0 ? product.productDetails.faq : [
    {
      q: `How do I order ${product.name} at authorized rates?`,
      a: 'Simply tap "Order on WhatsApp". Aarti Singh will verify immediate stock dispatch from Atomy India\'s central warehouse and arrange direct door delivery.',
    },
    {
      q: 'Is this 100% genuine sealed Korean import?',
      a: 'Yes, every product is guaranteed 100% authentic Korean Atomy, dispatched in original sealed packaging with official batch registration and expiration dates.',
    },
    {
      q: 'How long does delivery take across India?',
      a: 'Orders are dispatched within 24-48 hours with full courier tracking, arriving in 3-5 business days across all major Indian cities.',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 sm:pt-4 pb-12 sm:pb-16 space-y-8 sm:space-y-12">
      {/* =========================================================================
          FIX 1: BREADCRUMB REMOVED PER USER INSTRUCTION
          Product starts immediately at the very top of the page without wasted space.
          ========================================================================= */}

      {/* Main Product Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left: Gallery (Thumbnails + Main Image) */}
        <div className="lg:col-span-6 flex flex-col-reverse sm:flex-row gap-4">
          {/* Thumbnails */}
          <div className="flex sm:flex-col gap-2.5 overflow-x-auto sm:overflow-y-auto shrink-0">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(img)}
                className={`w-16 h-16 sm:w-18 sm:h-18 rounded-xl border-2 p-1.5 bg-white dark:bg-slate-800 transition-all cursor-pointer ${
                  selectedImage === img
                    ? 'border-sky-600 ring-2 ring-sky-200 dark:ring-sky-900 shadow-sm'
                    : 'border-slate-200 dark:border-slate-700 hover:border-slate-300'
                }`}
              >
                <img
                  src={img}
                  alt={`${product.name} thumbnail ${idx + 1}`}
                  className="w-full h-full object-contain"
                />
              </button>
            ))}
          </div>

          {/* Main Large Image */}
          <div className="flex-1 aspect-square rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 sm:p-8 flex items-center justify-center relative shadow-xs">
            <img
              src={selectedImage}
              alt={product.name}
              className="max-h-full max-w-full object-contain drop-shadow-md"
            />
            {product.badge && (
              <span className="absolute top-4 left-4 text-xs font-bold px-3 py-1 bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 rounded-full border border-amber-300 dark:border-amber-700 shadow-2xs">
                {product.badge}
              </span>
            )}
            <div className="absolute bottom-3 right-3 text-[10px] text-slate-400 bg-slate-50 dark:bg-slate-900 px-2 py-0.5 rounded-md border border-slate-200 dark:border-slate-700">
              Korean Bio-Tech
            </div>
          </div>
        </div>

        {/* Right: Info, Price, Quantity & Action Buttons */}
        <div className="lg:col-span-6 space-y-5">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950 px-2.5 py-1 rounded-md">
                {product.categoryName}
              </span>
              <span className="text-xs text-slate-400 font-mono">SKU: {product.sku}</span>
              <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold ml-auto flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>In Stock</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              {displayName}
            </h1>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
              {product.shortDescription}
            </p>
          </div>

          {/* 3 Core Highlights */}
          <div className="grid grid-cols-3 gap-2.5 py-3 border-y border-slate-100 dark:border-slate-800">
            <div className="text-center p-2 rounded-xl bg-sky-50/50 dark:bg-slate-800/50">
              <Sparkles className="w-4 h-4 text-sky-600 dark:text-sky-400 mx-auto mb-1" />
              <span className="block text-xs font-bold text-slate-900 dark:text-white">Korean Quality</span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400">Absolute Standard</span>
            </div>

            <div className="text-center p-2 rounded-xl bg-sky-50/50 dark:bg-slate-800/50">
              <Droplets className="w-4 h-4 text-sky-600 dark:text-sky-400 mx-auto mb-1" />
              <span className="block text-xs font-bold text-slate-900 dark:text-white">Gentle Formula</span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400">Botanical Science</span>
            </div>

            <div className="text-center p-2 rounded-xl bg-sky-50/50 dark:bg-slate-800/50">
              <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-sky-400 mx-auto mb-1" />
              <span className="block text-xs font-bold text-slate-900 dark:text-white">All Skin Types</span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400">Dermatest Rated</span>
            </div>
          </div>

          {/* Pricing Box */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700">
            <span className="text-xs text-slate-500 dark:text-slate-400 block mb-0.5">
              Authorized Atomy Distributor Rate
            </span>
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-slate-900 dark:text-white">
                ₹{product.authorizedPrice.toLocaleString('en-IN')}
              </span>
              {product.originalPrice && product.originalPrice > product.authorizedPrice && (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-400 line-through">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                    Save ₹{(product.originalPrice - product.authorizedPrice).toLocaleString('en-IN')}
                  </span>
                </div>
              )}
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2">
              Official member pricing without middlemen markups. Direct dispatch via Atomy India warehouse.
            </p>
          </div>

          {/* Quantity Selector & Total Amount */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Quantity:</span>
              <div className="flex items-center border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 overflow-hidden shadow-2xs">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-8 text-center text-xs font-bold text-slate-900 dark:text-white">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.min(20, q + 1))}
                  className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block">Total Amount</span>
              <span className="text-base font-extrabold text-slate-900 dark:text-white">
                ₹{(product.authorizedPrice * quantity).toLocaleString('en-IN')}
              </span>
            </div>
          </div>

          {/* Action Buttons: Primary is Order on WhatsApp; Secondary is Enquire & Ask Question */}
          <div className="space-y-2.5 pt-1">
            {/* PRIMARY BUTTON: Order on WhatsApp */}
            <WhatsAppButton
              product={product}
              quantity={quantity}
              label={`Order on WhatsApp • ₹${(product.authorizedPrice * quantity).toLocaleString('en-IN')}`}
              variant="whatsapp-green"
              intent="product_order"
              className="w-full py-3.5 text-base rounded-xl font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
              sourceContext="product_detail_hero_order"
            />

            {/* SECONDARY BUTTONS: Enquire via WhatsApp & Ask a Question */}
            <div className="grid grid-cols-2 gap-2">
              <WhatsAppButton
                product={product}
                quantity={quantity}
                label="Enquire on WhatsApp"
                variant="secondary"
                intent="product_enquiry"
                className="w-full py-2.5 text-xs font-semibold rounded-xl cursor-pointer"
                sourceContext="product_detail_enquiry"
              />

              <button
                type="button"
                onClick={() => setQuestionModalOpen(true)}
                className="w-full py-2.5 px-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold text-xs rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 text-sky-600" />
                <span>Ask Question</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          FIX 2: NEW CONVENIENT VERTICAL LAYOUT FOR PRODUCT DETAILS
          Replaced the inconvenient horizontal tabbed swiping card with a clean,
          flowing, structured vertical details view.
          ========================================================================= */}
      <div className="space-y-8 pt-4">
        {/* Section A: Product Overview & Botanical Science */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 sm:p-8 shadow-2xs space-y-6">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-700">
            <span className="p-2 rounded-xl bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400">
              <Sparkles className="w-5 h-5" />
            </span>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                About {displayName}
              </h2>
              <span className="text-xs text-slate-400">Formula Overview & Research</span>
            </div>
          </div>

          <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            {displayDesc}
          </p>

          {/* 4 Feature Icon Tiles */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
            <div className="p-4 rounded-xl bg-sky-50/60 dark:bg-slate-700/60 border border-sky-100 dark:border-slate-600 text-center">
              <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-sky-100 dark:bg-sky-900 flex items-center justify-center text-sky-600 dark:text-sky-400">
                <Droplets className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-xs text-slate-900 dark:text-white">Deep Hydration</h4>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Cellular moisture lock</p>
            </div>

            <div className="p-4 rounded-xl bg-sky-50/60 dark:bg-slate-700/60 border border-sky-100 dark:border-slate-600 text-center">
              <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-sky-100 dark:bg-sky-900 flex items-center justify-center text-sky-600 dark:text-sky-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-xs text-slate-900 dark:text-white">Improves Texture</h4>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Smooths micro-roughness</p>
            </div>

            <div className="p-4 rounded-xl bg-sky-50/60 dark:bg-slate-700/60 border border-sky-100 dark:border-slate-600 text-center">
              <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-sky-100 dark:bg-sky-900 flex items-center justify-center text-sky-600 dark:text-sky-400">
                <Heart className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-xs text-slate-900 dark:text-white">Revitalises Skin</h4>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Fermented botanicals</p>
            </div>

            <div className="p-4 rounded-xl bg-sky-50/60 dark:bg-slate-700/60 border border-sky-100 dark:border-slate-600 text-center">
              <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-sky-100 dark:bg-sky-900 flex items-center justify-center text-sky-600 dark:text-sky-400">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-xs text-slate-900 dark:text-white">Daily Wellness</h4>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Gentle daily ritual</p>
            </div>
          </div>
        </div>

        {/* Section B: Key Benefits & Clinical Efficacy */}
        {product.productDetails.benefits && product.productDetails.benefits.length > 0 && (
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 sm:p-8 shadow-2xs space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-700">
              <span className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  Key Benefits & Clinical Results
                </h3>
                <span className="text-xs text-slate-400">Proven dermatological advantages</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {product.productDetails.benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-750 border border-slate-200/60 dark:border-slate-700"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section C: Directions & How to Use */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 sm:p-8 shadow-2xs space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-700">
            <span className="p-2 rounded-xl bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400">
              <Clock className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                How to Use & Application Ritual
              </h3>
              <span className="text-xs text-slate-400">Step-by-step guidance for optimal results</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-750 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed border border-slate-200/60 dark:border-slate-700">
            {product.productDetails.howToUse}
          </div>

          {product.productDetails.warnings && (
            <div className="p-3.5 rounded-xl bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200">
              <span className="font-bold">Important Note: </span>
              {product.productDetails.warnings}
            </div>
          )}
        </div>

        {/* Section D: Active Botanical Ingredients */}
        {product.productDetails.keyIngredients && product.productDetails.keyIngredients.length > 0 && (
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 sm:p-8 shadow-2xs space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-700">
              <span className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                <Leaf className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  Active Botanical & Herbal Ingredients
                </h3>
                <span className="text-xs text-slate-400">Korean bio-extracts & clean formulation</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {product.productDetails.keyIngredients.map((item, i) => (
                <span
                  key={i}
                  className="px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-750 text-slate-800 dark:text-slate-200 text-xs font-semibold border border-slate-200 dark:border-slate-700 flex items-center gap-1.5"
                >
                  <span className="text-emerald-600">🌿</span>
                  <span>{item}</span>
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Section E: Product FAQs */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 sm:p-8 shadow-2xs space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-700">
            <span className="p-2 rounded-xl bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400">
              <HelpCircle className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Frequently Asked Questions
              </h3>
              <span className="text-xs text-slate-400">Authenticity, ordering and delivery details</span>
            </div>
          </div>

          <div className="space-y-2.5 pt-1">
            {productFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-750 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full p-4 text-left font-bold text-xs sm:text-sm text-slate-900 dark:text-white flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {openFaqIndex === idx ? (
                    <ChevronUp className="w-4 h-4 text-sky-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>
                {openFaqIndex === idx && (
                  <div className="p-4 pt-0 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/60 dark:border-slate-700/60">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Guidance Banner by Aarti Singh */}
      <div className="bg-gradient-to-r from-sky-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-6 sm:p-8 border border-sky-100 dark:border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
            Need Skincare Advice?
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
            Get Personal Guidance from Aarti Singh
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md">
            Unsure if this product matches your skin type or wellness goals? Connect directly with Aarti on WhatsApp for free personalized regimen support.
          </p>
          <div className="pt-2">
            <WhatsAppButton
              product={product}
              label="Chat with Aarti on WhatsApp"
              variant="whatsapp-green"
              className="py-3 px-6 text-sm"
              sourceContext="help_choosing_banner"
            />
          </div>
        </div>

        {/* Aarti Portrait */}
        <div className="relative shrink-0">
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-lg">
            <img
              src={aartiPortrait}
              alt="Aarti Singh guidance"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="space-y-6">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Related Atomy Products
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

      {/* Ask a Question Modal */}
      {questionModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-800 rounded-2xl max-w-md w-full p-6 space-y-4 border border-slate-200 dark:border-slate-700 shadow-xl">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                Ask a Question
              </h3>
              <button
                type="button"
                onClick={() => setQuestionModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400">
              Regarding <strong>{product.name}</strong>
            </p>

            {questionSent ? (
              <div className="p-4 rounded-xl bg-emerald-50 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-xs text-center font-bold">
                Thank you! Your question has been forwarded to Aarti Singh.
              </div>
            ) : (
              <form onSubmit={handleSendQuestion} className="space-y-4">
                <textarea
                  rows={4}
                  required
                  value={customQuestion}
                  onChange={(e) => setCustomQuestion(e.target.value)}
                  placeholder="Ask about ingredients, skin compatibility, usage instructions, or delivery..."
                  className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                />

                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setQuestionModalOpen(false)}
                    className="px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-xs font-semibold rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-lg flex items-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Question</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
