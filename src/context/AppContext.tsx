import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Product,
  Category,
  Offer,
  Enquiry,
  Order,
  AnalyticsEvent,
  AnalyticsEventType,
  SiteSettings,
  HeroSlide,
  HeroSliderSettings,
  EnquiryStatus,
  OrderStatus,
} from '../types/index.ts';
import {
  INITIAL_PRODUCTS,
  INITIAL_CATEGORIES,
  INITIAL_OFFERS,
  INITIAL_ENQUIRIES,
  INITIAL_ORDERS,
  INITIAL_SITE_SETTINGS,
  INITIAL_HERO_SLIDES,
  INITIAL_HERO_SLIDER_SETTINGS,
} from '../data/initialData.ts';
import { translations, Language } from '../i18n/translations.ts';
import {
  verifyAdminPasswordSync,
  isLoginLocked,
  recordFailedAttempt,
  resetLoginAttempts,
  createAdminSession,
  destroyAdminSession,
  isAdminSessionValid,
  ADMIN_SECRET_PATH,
} from '../utils/security.ts';

export type RouteName = 'home' | 'catalogue' | 'product' | 'about' | 'contact' | 'opportunity' | 'admin' | 'privacy' | 'store-manager-9911';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof translations.en) => string;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  toggleDarkMode: () => void;

  // Navigation
  currentRoute: RouteName;
  currentProductSlug: string | null;
  currentCategoryFilter: string;
  navigateTo: (route: RouteName, param?: string) => void;

  // Data State
  products: Product[];
  categories: Category[];
  offers: Offer[];
  enquiries: Enquiry[];
  orders: Order[];
  siteSettings: SiteSettings;
  analyticsEvents: AnalyticsEvent[];
  heroSlides: HeroSlide[];
  heroSliderSettings: HeroSliderSettings;

  // Actions
  trackEvent: (eventType: AnalyticsEventType, meta?: { productId?: string; productName?: string; [k: string]: any }) => void;
  createEnquiry: (data: Partial<Enquiry>) => Enquiry;
  updateEnquiryStatus: (id: string, status: EnquiryStatus, notes?: string) => void;
  createOrder: (order: Partial<Order>) => Order;
  updateOrderStatus: (id: string, status: OrderStatus, notes?: string) => void;

  // Admin Controls
  toggleProductPublish: (id: string) => void;
  toggleProductFeatured: (id: string) => void;
  toggleProductBestseller: (id: string) => void;
  updateProduct: (id: string, updates: Partial<Product>) => void;
  addProduct: (product: Partial<Product>) => Product;
  deleteProduct: (id: string) => void;
  importProducts: (newProducts: Partial<Product>[]) => number;
  addOffer: (offer: Partial<Offer>) => void;
  toggleOfferPublish: (id: string) => void;
  updateSiteSettings: (settings: Partial<SiteSettings>) => void;
  updateHeroSlide: (id: string, updates: Partial<HeroSlide>) => void;
  toggleHeroSlide: (id: string) => void;
  addHeroSlide: (slide: Partial<HeroSlide>) => void;
  deleteHeroSlide: (id: string) => void;
  updateHeroSliderSettings: (settings: Partial<HeroSliderSettings>) => void;

  // Admin Auth
  isAdminLoggedIn: boolean;
  adminLogin: (password: string) => { success: boolean; error?: string };
  adminLogout: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEYS = {
  LANGUAGE: 'atomy_lang',
  DARK_MODE: 'atomy_dark_mode',
  PRODUCTS: 'atomy_products_v4_all_official_store',
  CATEGORIES: 'atomy_categories_v4',
  OFFERS: 'atomy_offers_v4',
  ENQUIRIES: 'atomy_enquiries_v3',
  ORDERS: 'atomy_orders_v3',
  SETTINGS: 'atomy_settings_v4',
  EVENTS: 'atomy_events_v3',
  ADMIN_AUTH: 'atomy_admin_auth',
  HERO_SLIDES: 'atomy_hero_slides_v4',
  SLIDER_SETTINGS: 'atomy_slider_settings_v4',
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 1. Language State
  const [language, setLanguageState] = useState<Language>(() => {
    return (localStorage.getItem(STORAGE_KEYS.LANGUAGE) as Language) || 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEYS.LANGUAGE, lang);
  };

  const t = (key: keyof typeof translations.en): string => {
    return translations[language][key] || translations.en[key] || (key as string);
  };

  // 2. Dark Mode State
  const [darkMode, setDarkModeState] = useState<boolean>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.DARK_MODE);
    if (saved !== null) return saved === 'true';
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem(STORAGE_KEYS.DARK_MODE, String(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => setDarkModeState((prev) => !prev);
  const setDarkMode = (dark: boolean) => setDarkModeState(dark);

  // 3. Routing State (Client SPA navigation with browser URL hash sync)
  const [currentRoute, setCurrentRoute] = useState<RouteName>('home');
  const [currentProductSlug, setCurrentProductSlug] = useState<string | null>(null);
  const [currentCategoryFilter, setCurrentCategoryFilter] = useState<string>('all');

  const navigateTo = (route: RouteName, param?: string) => {
    setCurrentRoute(route);
    if (route === 'product' && param) {
      setCurrentProductSlug(param);
      window.location.hash = `#/product/${param}`;
    } else if (route === 'catalogue' && param) {
      setCurrentCategoryFilter(param);
      window.location.hash = `#/catalogue/${param}`;
    } else {
      window.location.hash = `#/${route}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Track page navigation
    trackEvent('page_view', { pagePath: `/${route}${param ? '/' + param : ''}` });
  };

  // Sync hash routing on popstate / initial load
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '');
      if (hash.startsWith('product/')) {
        const slug = hash.replace('product/', '');
        setCurrentRoute('product');
        setCurrentProductSlug(slug);
      } else if (hash.startsWith('catalogue/')) {
        const cat = hash.replace('catalogue/', '');
        setCurrentRoute('catalogue');
        setCurrentCategoryFilter(cat);
      } else if (
        ['home', 'catalogue', 'about', 'contact', 'opportunity', 'privacy'].includes(hash)
      ) {
        setCurrentRoute(hash as RouteName);
      } else if (hash === 'admin' || hash === ADMIN_SECRET_PATH) {
        setCurrentRoute('store-manager-9911');
      } else {
        setCurrentRoute('home');
      }
      window.scrollTo(0, 0);
    };

    handleHashChange();
    window.addEventListener('popstate', handleHashChange);
    return () => window.removeEventListener('popstate', handleHashChange);
  }, []);

  // 4. Products & Categories State (Official 94 Atomy India Catalog from in.atomy.com)
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
    if (!saved) return INITIAL_PRODUCTS;
    try {
      const parsed = JSON.parse(saved);
      if (!Array.isArray(parsed) || parsed.length < INITIAL_PRODUCTS.length) {
        return INITIAL_PRODUCTS;
      }
      return parsed;
    } catch {
      return INITIAL_PRODUCTS;
    }
  });

  const [categories] = useState<Category[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.CATEGORIES);
    return saved ? JSON.parse(saved) : INITIAL_CATEGORIES;
  });

  const [offers, setOffers] = useState<Offer[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.OFFERS);
    return saved ? JSON.parse(saved) : INITIAL_OFFERS;
  });

  const [enquiries, setEnquiries] = useState<Enquiry[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.ENQUIRIES);
    return saved ? JSON.parse(saved) : INITIAL_ENQUIRIES;
  });

  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.ORDERS);
    return saved ? JSON.parse(saved) : INITIAL_ORDERS;
  });

  const [siteSettings, setSiteSettings] = useState<SiteSettings>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.SETTINGS);
    const base = saved ? JSON.parse(saved) : INITIAL_SITE_SETTINGS;
    // Aarti Singh's original WhatsApp number (+91-9911938324 / 919911938324)
    return {
      ...base,
      whatsappNumber: base.whatsappNumber || '919911938324',
      displayPhone: base.displayPhone || '+91-9911938324',
    };
  });

  const [analyticsEvents, setAnalyticsEvents] = useState<AnalyticsEvent[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.EVENTS);
    return saved ? JSON.parse(saved) : [];
  });

  const [heroSlides, setHeroSlides] = useState<HeroSlide[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.HERO_SLIDES);
    return saved ? JSON.parse(saved) : INITIAL_HERO_SLIDES;
  });

  const [heroSliderSettings, setHeroSliderSettings] = useState<HeroSliderSettings>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.SLIDER_SETTINGS);
    return saved ? JSON.parse(saved) : INITIAL_HERO_SLIDER_SETTINGS;
  });

  // Persist slider state
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.HERO_SLIDES, JSON.stringify(heroSlides));
  }, [heroSlides]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SLIDER_SETTINGS, JSON.stringify(heroSliderSettings));
  }, [heroSliderSettings]);

  // Admin Auth State (Secured with session validation)
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    return sessionStorage.getItem(STORAGE_KEYS.ADMIN_AUTH) === 'true' && isAdminSessionValid();
  });

  // Session ID for lightweight honest analytics
  const [sessionId] = useState<string>(() => {
    let sid = sessionStorage.getItem('atomy_session_id');
    if (!sid) {
      sid = 'ses_' + Math.random().toString(36).substring(2, 9);
      sessionStorage.setItem('atomy_session_id', sid);
    }
    return sid;
  });

  // Auto-persist changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.OFFERS, JSON.stringify(offers));
  }, [offers]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.ENQUIRIES, JSON.stringify(enquiries));
  }, [enquiries]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(siteSettings));
  }, [siteSettings]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.EVENTS, JSON.stringify(analyticsEvents.slice(-500))); // keep latest 500
  }, [analyticsEvents]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.HERO_SLIDES, JSON.stringify(heroSlides));
  }, [heroSlides]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SLIDER_SETTINGS, JSON.stringify(heroSliderSettings));
  }, [heroSliderSettings]);

  // Analytics Tracker
  const trackEvent = (
    eventType: AnalyticsEventType,
    meta?: { productId?: string; productName?: string; [k: string]: any }
  ) => {
    const newEvent: AnalyticsEvent = {
      id: 'ev_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
      eventType,
      productId: meta?.productId,
      productName: meta?.productName,
      pagePath: meta?.pagePath || window.location.pathname + window.location.hash,
      sessionId,
      metadata: meta,
      createdAt: new Date().toISOString(),
    };
    setAnalyticsEvents((prev) => [...prev, newEvent]);
  };

  // Enquiry Creator
  const createEnquiry = (data: Partial<Enquiry>): Enquiry => {
    const datePrefix = new Date().toISOString().slice(2, 7).replace('-', '');
    const randNum = Math.floor(1000 + Math.random() * 9000);
    const referenceCode = `ENQ-${datePrefix}-${randNum}`;

    const newEnquiry: Enquiry = {
      id: 'enq-' + Date.now(),
      referenceCode,
      productId: data.productId,
      productName: data.productName,
      productSku: data.productSku,
      variantName: data.variantName,
      quantity: data.quantity || 1,
      customerName: data.customerName || 'Website Visitor',
      customerContact: data.customerContact || '',
      enquiryType: data.enquiryType || 'product',
      channel: data.channel || 'whatsapp',
      sourcePage: data.sourcePage || window.location.hash || '/home',
      status: 'new',
      notes: data.notes || '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setEnquiries((prev) => [newEnquiry, ...prev]);

    // Record analytics
    trackEvent(
      data.channel === 'whatsapp' ? 'whatsapp_enquiry_click' : 'contact_form_submit',
      {
        productId: data.productId,
        productName: data.productName,
        enquiryReference: referenceCode,
      }
    );

    return newEnquiry;
  };

  const updateEnquiryStatus = (id: string, status: EnquiryStatus, notes?: string) => {
    setEnquiries((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status,
              notes: notes !== undefined ? notes : item.notes,
              updatedAt: new Date().toISOString(),
            }
          : item
      )
    );
  };

  // Order Creator
  const createOrder = (orderData: Partial<Order>): Order => {
    const datePrefix = new Date().toISOString().slice(2, 7).replace('-', '');
    const randNum = Math.floor(100 + Math.random() * 900);
    const orderReference = `ORD-${datePrefix}-${randNum}`;

    const newOrder: Order = {
      id: 'ord-' + Date.now(),
      orderReference,
      enquiryId: orderData.enquiryId,
      customerName: orderData.customerName || 'Customer',
      customerPhone: orderData.customerPhone || '',
      customerAddress: orderData.customerAddress || '',
      items: orderData.items || [],
      recordedTotal: orderData.recordedTotal || 0,
      currency: 'INR',
      status: orderData.status || 'confirmed',
      confirmationSource: orderData.confirmationSource || 'WhatsApp confirmed',
      orderDate: new Date().toISOString().slice(0, 10),
      notes: orderData.notes || '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setOrders((prev) => [newOrder, ...prev]);

    // If linked to an enquiry, update enquiry status to 'converted'
    if (orderData.enquiryId) {
      updateEnquiryStatus(orderData.enquiryId, 'converted', `Converted to Order ${orderReference}`);
    }

    return newOrder;
  };

  const updateOrderStatus = (id: string, status: OrderStatus, notes?: string) => {
    setOrders((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status,
              notes: notes !== undefined ? notes : item.notes,
              updatedAt: new Date().toISOString(),
            }
          : item
      )
    );
  };

  // Admin Product Controls
  const toggleProductPublish = (id: string) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, isPublished: !p.isPublished, updatedAt: new Date().toISOString() } : p))
    );
  };

  const toggleProductFeatured = (id: string) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, isFeatured: !p.isFeatured, updatedAt: new Date().toISOString() } : p))
    );
  };

  const toggleProductBestseller = (id: string) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, isBestseller: !p.isBestseller, updatedAt: new Date().toISOString() } : p))
    );
  };

  const updateProduct = (id: string, updates: Partial<Product>) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updates, updatedAt: new Date().toISOString() } : p))
    );
  };

  const addProduct = (prod: Partial<Product>): Product => {
    const slug = (prod.name || 'product')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    const newProduct: Product = {
      id: 'prod-' + Date.now(),
      externalProductId: prod.externalProductId || `ATOMY-${Date.now()}`,
      sku: prod.sku || `ATOMY-${Math.floor(1000 + Math.random() * 9000)}`,
      slug: slug + '-' + Math.floor(Math.random() * 1000),
      name: prod.name || 'Atomy Product',
      nameHi: prod.nameHi || '',
      categoryId: prod.categoryId || 'skincare',
      categoryName: prod.categoryName || 'Skincare',
      shortDescription: prod.shortDescription || 'Authentic Atomy Korean product.',
      shortDescriptionHi: prod.shortDescriptionHi || '',
      description: prod.description || prod.shortDescription || '',
      descriptionHi: prod.descriptionHi || '',
      productDetails: {
        koreanQuality: 'Certified Atomy Standard',
        gentleFormulation: 'Pure Korean Botanical Bio-Tech',
        skinTypes: 'All Skin Types',
        volumeOrWeight: prod.productDetails?.volumeOrWeight || 'Standard Pack',
        keyIngredients: prod.productDetails?.keyIngredients || [],
        howToUse: prod.productDetails?.howToUse || 'Use daily as recommended on official packaging.',
        warnings: prod.productDetails?.warnings || 'For external use only. Discontinue if irritation occurs.',
        benefits: prod.productDetails?.benefits && prod.productDetails.benefits.length > 0
          ? prod.productDetails.benefits
          : ['Authentic Korean Quality', 'Distributor Direct Warehouse Delivery'],
        faq: prod.productDetails?.faq && prod.productDetails.faq.length > 0
          ? prod.productDetails.faq
          : [
              {
                q: `How do I order ${prod.name || 'this item'} directly?`,
                a: 'Tap Order on WhatsApp. Aarti Singh will confirm warehouse availability and coordinate doorstep courier.',
              },
            ],
      },
      authorizedPrice: Number(prod.authorizedPrice) || 1000,
      originalPrice: prod.originalPrice ? Number(prod.originalPrice) : undefined,
      pv: prod.pv || 5000,
      currency: 'INR',
      images: prod.images && prod.images.length > 0 ? prod.images : [prod.thumbnail || INITIAL_PRODUCTS[0].thumbnail],
      thumbnail: prod.thumbnail || INITIAL_PRODUCTS[0].thumbnail,
      isImported: true,
      isPublished: true, // Immediately published so it is active
      isFeatured: false,
      isBestseller: prod.isBestseller || false,
      featuredOrder: 50,
      displayOrder: 50,
      rating: 4.9,
      reviewCount: 16,
      badge: prod.badge || 'New in Store',
      productUrl: prod.productUrl || '',
      stockStatus: prod.stockStatus || 'in_stock',
      lastSyncedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    } as Product;

    setProducts((prev) => [newProduct, ...prev]);
    return newProduct;
  };

  const deleteProduct = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const importProducts = (newProducts: Partial<Product>[]): number => {
    const formatted = newProducts.map((p, i) => {
      const slug = (p.name || 'product').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      return {
        id: 'prod-imp-' + Date.now() + '-' + i,
        externalProductId: p.externalProductId || `IMP-${Date.now()}-${i}`,
        sku: p.sku || `ATOMY-SKU-${i}`,
        slug: slug + '-' + Math.floor(Math.random() * 1000),
        name: p.name || 'Imported Product',
        nameHi: p.nameHi || p.name || '',
        categoryId: p.categoryId || 'others',
        categoryName: p.categoryId ? p.categoryId.toUpperCase() : 'Others',
        shortDescription: p.shortDescription || 'Imported Atomy product.',
        shortDescriptionHi: '',
        description: p.description || '',
        descriptionHi: '',
        productDetails: {
          koreanQuality: 'Certified Atomy Standard',
          gentleFormulation: 'Standard gentle formulation',
          skinTypes: 'All',
          volumeOrWeight: 'Standard packaging',
          keyIngredients: [],
          howToUse: 'Follow packaging instructions',
          warnings: 'For external/intended use only',
          benefits: ['Authentic Atomy Quality'],
          faq: [],
        },
        authorizedPrice: p.authorizedPrice || 1000,
        currency: 'INR',
        images: [INITIAL_PRODUCTS[0].thumbnail],
        thumbnail: INITIAL_PRODUCTS[0].thumbnail,
        isImported: true,
        isPublished: false, // Remains unpublished until administrator reviews!
        isFeatured: false,
        isBestseller: false,
        featuredOrder: 99,
        displayOrder: 99,
        rating: 4.8,
        reviewCount: 0,
        lastSyncedAt: new Date().toISOString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      } as Product;
    });

    setProducts((prev) => [...formatted, ...prev]);
    return formatted.length;
  };

  const addOffer = (offer: Partial<Offer>) => {
    const newOffer: Offer = {
      id: 'offer-' + Date.now(),
      productId: offer.productId || '',
      productName: offer.productName || 'Special Product Offer',
      title: offer.title || 'Distributor Special Offer',
      titleHi: offer.titleHi || '',
      description: offer.description || '',
      descriptionHi: offer.descriptionHi || '',
      authorizedOriginalPrice: offer.authorizedOriginalPrice || 2000,
      authorizedOfferPrice: offer.authorizedOfferPrice || 1700,
      startAt: offer.startAt || new Date().toISOString(),
      endAt: offer.endAt || new Date(Date.now() + 30 * 86400000).toISOString(),
      isPublished: true,
      bannerTag: offer.bannerTag || 'Special Offer',
    };
    setOffers((prev) => [newOffer, ...prev]);
  };

  const toggleOfferPublish = (id: string) => {
    setOffers((prev) =>
      prev.map((o) => (o.id === id ? { ...o, isPublished: !o.isPublished } : o))
    );
  };

  const updateSiteSettings = (settings: Partial<SiteSettings>) => {
    setSiteSettings((prev) => ({ ...prev, ...settings }));
  };

  // Hero Slider Controls (Editable in Admin)
  const updateHeroSlide = (id: string, updates: Partial<HeroSlide>) => {
    setHeroSlides((prev) =>
      prev.map((s) => (s.id === id ? { ...s, ...updates } : s))
    );
  };

  const toggleHeroSlide = (id: string) => {
    setHeroSlides((prev) =>
      prev.map((s) => (s.id === id ? { ...s, active: !s.active } : s))
    );
  };

  const addHeroSlide = (slide: Partial<HeroSlide>) => {
    const newSlide: HeroSlide = {
      id: 'slide-' + Date.now(),
      productId: slide.productId || '',
      productSlug: slide.productSlug || 'catalogue',
      badge: slide.badge || 'Featured Special',
      title: slide.title || 'Atomy Premium Product',
      subtitle: slide.subtitle || 'Discover authentic Korean wellness and skincare.',
      image: slide.image || INITIAL_HERO_SLIDES[0].image,
      highlightPoints: slide.highlightPoints || ['100% Genuine Atomy', 'Korean Quality', 'Distributor Rate'],
      authorizedPrice: slide.authorizedPrice || 1000,
      originalPrice: slide.originalPrice,
      isOffer: slide.isOffer || false,
      offerTag: slide.offerTag,
      active: true,
      order: heroSlides.length + 1,
    };
    setHeroSlides((prev) => [...prev, newSlide]);
  };

  const deleteHeroSlide = (id: string) => {
    setHeroSlides((prev) => prev.filter((s) => s.id !== id));
  };

  const updateHeroSliderSettings = (settings: Partial<HeroSliderSettings>) => {
    setHeroSliderSettings((prev) => ({ ...prev, ...settings }));
  };

  const adminLogin = (password: string): { success: boolean; error?: string } => {
    // 1. Check if account is currently locked due to too many failed attempts
    const lockStatus = isLoginLocked();
    if (lockStatus.locked) {
      return {
        success: false,
        error: `Access locked due to repeated failed attempts. Please try again in ${lockStatus.remainingSeconds} seconds.`,
      };
    }

    // 2. Strict password verification against code-locked "mannu9911"
    const isValid = verifyAdminPasswordSync(password);
    if (isValid) {
      resetLoginAttempts();
      createAdminSession();
      setIsAdminLoggedIn(true);
      sessionStorage.setItem(STORAGE_KEYS.ADMIN_AUTH, 'true');
      return { success: true };
    }

    // 3. Failed attempt: Record failure and apply rate-limiting lockout
    const attemptResult = recordFailedAttempt();
    if (attemptResult.locked) {
      return {
        success: false,
        error: `Too many failed attempts. Store manager access is locked for ${attemptResult.lockoutSeconds} seconds.`,
      };
    }

    return {
      success: false,
      error: `Incorrect password. ${attemptResult.attemptsRemaining} attempt${attemptResult.attemptsRemaining === 1 ? '' : 's'} remaining before security lockout.`,
    };
  };

  const adminLogout = () => {
    setIsAdminLoggedIn(false);
    destroyAdminSession();
    sessionStorage.removeItem(STORAGE_KEYS.ADMIN_AUTH);
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        t,
        darkMode,
        setDarkMode,
        toggleDarkMode,
        currentRoute,
        currentProductSlug,
        currentCategoryFilter,
        navigateTo,
        products,
        categories,
        offers,
        enquiries,
        orders,
        siteSettings,
        analyticsEvents,
        heroSlides,
        heroSliderSettings,
        trackEvent,
        createEnquiry,
        updateEnquiryStatus,
        createOrder,
        updateOrderStatus,
        toggleProductPublish,
        toggleProductFeatured,
        toggleProductBestseller,
        updateProduct,
        addProduct,
        deleteProduct,
        importProducts,
        addOffer,
        toggleOfferPublish,
        updateSiteSettings,
        updateHeroSlide,
        toggleHeroSlide,
        addHeroSlide,
        deleteHeroSlide,
        updateHeroSliderSettings,
        isAdminLoggedIn,
        adminLogin,
        adminLogout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
