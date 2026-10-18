import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext.tsx';
import {
  calculateConversionMetrics,
  parseAndValidateProductsImport,
  isOfferActive,
} from '../utils/businessLogic.ts';
import { Product, Offer, Enquiry, Order, EnquiryStatus, OrderStatus, HeroSlide, HeroSliderSettings, CategoryId } from '../types/index.ts';
import { aartiPortrait } from '../data/initialData.ts';
import {
  Shield,
  LayoutDashboard,
  Package,
  UploadCloud,
  Tag,
  MessageSquare,
  ShoppingBag,
  Settings,
  LogOut,
  Eye,
  MousePointer,
  CheckCircle2,
  TrendingUp,
  Search,
  Filter,
  Plus,
  Edit2,
  ExternalLink,
  AlertCircle,
  FileText,
  Clock,
  Calendar,
  Lock,
  Sliders,
  Trash2,
  ArrowUp,
  ArrowDown,
  Image as ImageIcon,
  Sparkles,
  Play,
  Pause,
  X,
  Check,
  Wand2,
  Loader2,
  Menu,
  ChevronRight,
  Globe,
  RefreshCw,
  HelpCircle,
  Link as LinkIcon,
  Star,
  CheckCircle,
} from 'lucide-react';

type AdminTab = 'overview' | 'products' | 'slider' | 'offers' | 'enquiries' | 'orders' | 'settings' | 'import';

export const AdminDashboard: React.FC = () => {
  const {
    products,
    offers,
    enquiries,
    orders,
    siteSettings,
    analyticsEvents,
    isAdminLoggedIn,
    adminLogin,
    adminLogout,
    toggleProductPublish,
    toggleProductFeatured,
    toggleProductBestseller,
    updateProduct,
    addProduct,
    deleteProduct,
    importProducts,
    addOffer,
    toggleOfferPublish,
    updateEnquiryStatus,
    createOrder,
    updateOrderStatus,
    updateSiteSettings,
    heroSlides,
    heroSliderSettings,
    updateHeroSlide,
    toggleHeroSlide,
    addHeroSlide,
    deleteHeroSlide,
    updateHeroSliderSettings,
    navigateTo,
  } = useApp();

  const [activeTab, setActiveTab] = useState<AdminTab>('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // 1. Overview Metrics (Friendly Simple Language)
  const metrics = useMemo(() => {
    return calculateConversionMetrics(analyticsEvents, enquiries, orders);
  }, [analyticsEvents, enquiries, orders]);

  // 2. Product Search & Filter State (Requirement 3: Search Product Capability)
  const [productSearch, setProductSearch] = useState('');
  const [productCatFilter, setProductCatFilter] = useState('all');
  const [productStatusFilter, setProductStatusFilter] = useState<'all' | 'bestsellers' | 'featured' | 'in_stock'>('all');

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const q = productSearch.toLowerCase().trim();
      const matchSearch =
        !q ||
        (p.name || '').toLowerCase().includes(q) ||
        (p.nameHi && p.nameHi.toLowerCase().includes(q)) ||
        (p.sku || '').toLowerCase().includes(q) ||
        (p.categoryName || '').toLowerCase().includes(q) ||
        (p.authorizedPrice ? p.authorizedPrice.toString().includes(q) : false) ||
        (p.badge && p.badge.toLowerCase().includes(q));

      const matchCat = productCatFilter === 'all' || p.categoryId === productCatFilter;
      const matchStatus =
        productStatusFilter === 'all'
          ? true
          : productStatusFilter === 'bestsellers'
          ? p.isBestseller
          : productStatusFilter === 'featured'
          ? p.isFeatured
          : p.stockStatus === 'in_stock' || !p.stockStatus;

      return matchSearch && matchCat && matchStatus;
    });
  }, [products, productSearch, productCatFilter, productStatusFilter]);

  // Modals for Products Section
  const [isManualAddOpen, setIsManualAddOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const [manualForm, setManualForm] = useState<{
    name: string;
    nameHi: string;
    categoryId: CategoryId;
    sku: string;
    authorizedPrice: string;
    originalPrice: string;
    pv: string;
    thumbnail: string;
    shortDescription: string;
  }>({
    name: '',
    nameHi: '',
    categoryId: 'skincare',
    sku: '',
    authorizedPrice: '',
    originalPrice: '',
    pv: '',
    thumbnail: '',
    shortDescription: '',
  });

  const handleManualAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!manualForm.name.trim() || !manualForm.authorizedPrice) return;
    const catMap: Record<string, string> = {
      'skincare': 'Skincare',
      'health': 'Health',
      'personal-care': 'Personal Care',
      'makeup': 'Makeup',
      'home-care': 'Home Care',
      'others': 'Others',
    };
    addProduct({
      name: manualForm.name.trim(),
      nameHi: manualForm.nameHi.trim() || undefined,
      categoryId: manualForm.categoryId,
      categoryName: catMap[manualForm.categoryId] || 'Skincare',
      sku: manualForm.sku.trim() || `ATOMY-IN-${Date.now().toString().slice(-4)}`,
      authorizedPrice: Number(manualForm.authorizedPrice),
      originalPrice: manualForm.originalPrice ? Number(manualForm.originalPrice) : Math.round(Number(manualForm.authorizedPrice) * 1.15),
      pv: manualForm.pv ? Number(manualForm.pv) : undefined,
      thumbnail: manualForm.thumbnail.trim() || 'https://image.atomy.com/IN/goods/D00207/D00207_01.jpg',
      shortDescription: manualForm.shortDescription.trim() || 'Authentic Atomy product.',
      description: manualForm.shortDescription.trim() || 'Authentic Atomy product.',
      productDetails: {
        koreanQuality: 'Certified Atomy Standard',
        gentleFormulation: 'Pure Korean Botanical Bio-Tech',
        skinTypes: 'All Skin Types',
        volumeOrWeight: 'Standard Pack',
        keyIngredients: [],
        howToUse: 'Use daily as recommended on official packaging.',
        warnings: 'For external use only. Discontinue if irritation occurs.',
        benefits: ['100% Genuine Atomy', 'Korean Quality', 'Distributor Direct'],
        faq: [],
      },
      isPublished: true,
      stockStatus: 'in_stock',
    });
    setIsManualAddOpen(false);
    setManualForm({
      name: '',
      nameHi: '',
      categoryId: 'skincare',
      sku: '',
      authorizedPrice: '',
      originalPrice: '',
      pv: '',
      thumbnail: '',
      shortDescription: '',
    });
  };

  // 4. Hero Slider Management State
  const [editingSlide, setEditingSlide] = useState<HeroSlide | null>(null);
  const [newSlideOpen, setNewSlideOpen] = useState(false);
  const [newSlideForm, setNewSlideForm] = useState({
    productId: products[0]?.id || '',
    productSlug: products[0]?.slug || 'catalogue',
    badge: 'Bestseller Special',
    title: products[0]?.name || 'Atomy Product',
    subtitle: products[0]?.shortDescription || 'Authentic Korean skincare and wellness.',
    image: products[0]?.thumbnail || '',
    authorizedPrice: products[0]?.authorizedPrice || 1000,
    originalPrice: products[0]?.originalPrice || 1200,
    isOffer: false,
    offerTag: '',
    highlight1: '100% Genuine Atomy',
    highlight2: 'Korean Research & Biotech',
    highlight3: 'Distributor Direct Delivery',
  });

  // 5. Add Offer Modal State
  const [newOfferOpen, setNewOfferOpen] = useState(false);
  const [newOfferForm, setNewOfferForm] = useState({
    productId: products[0]?.id || '',
    title: '',
    description: '',
    authorizedOriginalPrice: 15000,
    authorizedOfferPrice: 13500,
    startAt: new Date().toISOString().slice(0, 10),
    endAt: new Date(Date.now() + 30 * 86400000).toISOString().slice(0, 10),
    bannerTag: 'Special Offer',
  });

  // Convert Enquiry to Order Modal
  const [convertingEnquiry, setConvertingEnquiry] = useState<Enquiry | null>(null);
  const [orderTotalInput, setOrderTotalInput] = useState<number>(0);
  const [orderNotesInput, setOrderNotesInput] = useState('');

  // Site Settings Form
  const [settingsForm, setSettingsForm] = useState(siteSettings);
  const [settingsSaved, setSettingsSaved] = useState(false);

  // CSV/JSON Batch Import State
  const [importFormat, setImportFormat] = useState<'csv' | 'json'>('csv');
  const [importText, setImportText] = useState('');
  const [importReport, setImportReport] = useState<{
    validProducts: Partial<Product>[];
    errors: { row: number; field: string; message: string }[];
    duplicateCount: number;
    successCount?: number;
  } | null>(null);

  // Navigation Items Definition (Clear, simple labels for Aarti)
  const navTabs: { id: AdminTab; label: string; icon: any; badge?: number | string; badgeColor?: string; simpleDesc: string }[] = [
    {
      id: 'overview',
      label: 'Store Summary',
      icon: LayoutDashboard,
      simpleDesc: 'Visitor interest, chats & sales at a glance',
    },
    {
      id: 'products',
      label: 'My Products & Prices',
      icon: Package,
      badge: products.length,
      simpleDesc: 'Search, change prices & add products',
    },
    {
      id: 'slider',
      label: 'Homepage Slider',
      icon: Sliders,
      badge: heroSlides.length,
      simpleDesc: 'Choose products to slide on front page',
    },
    {
      id: 'offers',
      label: 'Special Offers',
      icon: Tag,
      badge: offers.length,
      simpleDesc: 'Discounts, gifts & festival deals',
    },
    {
      id: 'enquiries',
      label: 'Customer Inquiries',
      icon: MessageSquare,
      badge: enquiries.filter((e) => e.status === 'new').length > 0 ? `${enquiries.filter((e) => e.status === 'new').length} new` : enquiries.length,
      badgeColor: enquiries.filter((e) => e.status === 'new').length > 0 ? 'bg-amber-500 text-white' : undefined,
      simpleDesc: 'Messages & questions from customers',
    },
    {
      id: 'orders',
      label: 'Orders & Sales',
      icon: ShoppingBag,
      badge: orders.length,
      simpleDesc: 'Completed & confirmed purchases',
    },
    {
      id: 'settings',
      label: 'Shop Details & Phone',
      icon: Settings,
      simpleDesc: 'Change WhatsApp number, address & bio',
    },
    {
      id: 'import',
      label: 'Spreadsheet Upload',
      icon: UploadCloud,
      simpleDesc: 'Bulk upload products from CSV / Excel',
    },
  ];

  // Auth check
  if (!isAdminLoggedIn) {
    const handleLoginSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setLoginError('');
      if (!loginPassword.trim()) {
        setLoginError('Please enter your administrator password.');
        return;
      }
      const result = adminLogin(loginPassword);
      if (!result.success) {
        setLoginError(result.error || 'Incorrect password. Access denied.');
        setLoginPassword('');
      }
    };

    return (
      <div className="min-h-[75vh] flex items-center justify-center px-4 py-16 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-md w-full bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-xl space-y-6">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-sky-400 mx-auto shadow-md">
              <img src={aartiPortrait} alt="Aarti Singh" className="w-full h-full object-cover object-top" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-slate-900 dark:text-white">
                Aarti's Store Manager
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Distributor Administration Portal • Security Protected
              </p>
            </div>
          </div>

          <form onSubmit={handleLoginSubmit} className="space-y-4">
            {loginError && (
              <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 text-xs text-rose-700 dark:text-rose-300 leading-relaxed font-medium">
                {loginError}
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="Enter administrator password"
                  className="w-full pl-9 pr-3 py-3 text-sm rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                  autoFocus
                />
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400 mt-2">
                <Shield className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Security Protected • Credential changes locked to source code</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm rounded-xl transition-colors shadow-md cursor-pointer"
            >
              Sign In to Store Manager
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Handle Import Validation for CSV
  const handleValidateImport = () => {
    if (!importText.trim()) return;
    const existingSkus = new Set(products.map((p) => p.sku));
    const result = parseAndValidateProductsImport(importText, importFormat, existingSkus);
    setImportReport(result);
  };

  const handleExecuteImport = () => {
    if (!importReport || importReport.validProducts.length === 0) return;
    const count = importProducts(importReport.validProducts);
    setImportReport({
      ...importReport,
      successCount: count,
      validProducts: [],
    });
    setImportText('');
  };

  const handleAddOfferSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const prod = products.find((p) => p.id === newOfferForm.productId);
    addOffer({
      productId: newOfferForm.productId,
      productName: prod ? prod.name : 'Promotional Product',
      title: newOfferForm.title,
      description: newOfferForm.description,
      authorizedOriginalPrice: Number(newOfferForm.authorizedOriginalPrice),
      authorizedOfferPrice: Number(newOfferForm.authorizedOfferPrice),
      startAt: new Date(newOfferForm.startAt).toISOString(),
      endAt: new Date(newOfferForm.endAt + 'T23:59:59Z').toISOString(),
      bannerTag: newOfferForm.bannerTag,
      isPublished: true,
    });
    setNewOfferOpen(false);
  };

  const handleConvertOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!convertingEnquiry) return;

    createOrder({
      enquiryId: convertingEnquiry.id,
      customerName: convertingEnquiry.customerName,
      customerPhone: convertingEnquiry.customerContact,
      recordedTotal: orderTotalInput,
      notes: orderNotesInput,
      items: convertingEnquiry.productId
        ? [
            {
              id: 'it_' + Date.now(),
              orderId: '',
              productId: convertingEnquiry.productId,
              productNameSnapshot: convertingEnquiry.productName || 'Atomy Product',
              skuSnapshot: convertingEnquiry.productSku || 'ATOMY-SKU',
              quantity: convertingEnquiry.quantity || 1,
              recordedUnitPrice: orderTotalInput,
              recordedSubtotal: orderTotalInput,
            },
          ]
        : [],
    });

    setConvertingEnquiry(null);
    setOrderTotalInput(0);
    setOrderNotesInput('');
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    updateSiteSettings(settingsForm);
    setSettingsSaved(true);
    setTimeout(() => setSettingsSaved(false), 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6">
      {/* =====================================================================
          TOP HEADER: Clean, Friendly Header with Quick Actions
          ===================================================================== */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-700 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border-2 border-sky-400 shadow-sm shrink-0">
            <img src={aartiPortrait} alt="Aarti Singh" className="w-full h-full object-cover object-top" />
            <div className="absolute bottom-0 inset-x-0 bg-emerald-600 text-white text-[9px] font-bold text-center py-0.5">
              Online
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                Aarti's Store Manager
              </h1>
              <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300">
                Independent Atomy India Distributor
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              WhatsApp Orders: <span className="font-semibold text-slate-700 dark:text-slate-300">{siteSettings.displayPhone}</span> • Location: Gurgaon, India
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 self-start md:self-center flex-wrap">

          <button
            onClick={() => navigateTo('home')}
            className="px-3.5 py-2 text-xs font-bold rounded-xl border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>View Live Shop</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={adminLogout}
            className="px-3.5 py-2 text-xs font-bold rounded-xl bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 hover:bg-rose-100 transition-colors flex items-center gap-1.5 cursor-pointer"
            title="Sign out of store manager"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Sign Out</span>
          </button>
        </div>
      </div>

      {/* =====================================================================
          MOBILE SECTION SWITCHER (Fix 4: No awkward horizontal scrolling slidebar!)
          ===================================================================== */}
      <div className="lg:hidden bg-white dark:bg-slate-800 rounded-2xl p-3 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {(() => {
            const current = navTabs.find((t) => t.id === activeTab) || navTabs[0];
            const Icon = current.icon;
            return (
              <>
                <div className="p-2 rounded-xl bg-sky-50 dark:bg-sky-950 text-sky-600">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block font-semibold uppercase">Current Section</span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white">{current.label}</span>
                </div>
              </>
            );
          })()}
        </div>

        <button
          onClick={() => setMobileMenuOpen(true)}
          className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 text-slate-800 dark:text-slate-200 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer"
        >
          <Menu className="w-4 h-4" />
          <span>Switch Section ▾</span>
        </button>
      </div>

      {/* Mobile Menu Modal Sheet */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="bg-white dark:bg-slate-800 rounded-t-3xl sm:rounded-3xl max-w-lg w-full p-6 border border-slate-200 dark:border-slate-700 shadow-2xl max-h-[85vh] overflow-y-auto space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-700">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Choose Store Section
              </h3>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-2">
              {navTabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full p-3.5 rounded-2xl text-left flex items-center justify-between transition-all ${
                      isActive
                        ? 'bg-sky-600 text-white font-bold shadow-sm'
                        : 'bg-slate-50 dark:bg-slate-750 text-slate-800 dark:text-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl ${isActive ? 'bg-white/20 text-white' : 'bg-white dark:bg-slate-800 text-sky-600'}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-sm font-bold block">{tab.label}</span>
                        <span className={`text-[11px] ${isActive ? 'text-sky-100' : 'text-slate-400'}`}>
                          {tab.simpleDesc}
                        </span>
                      </div>
                    </div>
                    {tab.badge && (
                      <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${tab.badgeColor || (isActive ? 'bg-white text-sky-700' : 'bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-200')}`}>
                        {tab.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          MAIN 2-COLUMN DASHBOARD LAYOUT (Desktop Sidebar + Content Area)
          ===================================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* DESKTOP SIDEBAR NAVIGATION (Fix 4: Convenient vertical left navigation!) */}
        <aside className="hidden lg:block lg:col-span-3 space-y-2 bg-white dark:bg-slate-800 rounded-3xl p-3 border border-slate-200 dark:border-slate-700 shadow-xs sticky top-4">
          <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Store Navigation
          </div>

          <nav className="space-y-1">
            {navTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full p-2.5 rounded-2xl text-left flex items-center justify-between transition-all cursor-pointer ${
                    isActive
                      ? 'bg-sky-600 text-white font-bold shadow-xs'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-750'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-slate-500 dark:text-slate-400'}`} />
                    <span className="text-xs font-bold">{tab.label}</span>
                  </div>

                  {tab.badge && (
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        tab.badgeColor || (isActive ? 'bg-white text-sky-700' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300')
                      }`}
                    >
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-700 px-3">
            <div className="p-3 rounded-2xl bg-sky-50/70 dark:bg-slate-750 text-[11px] text-slate-600 dark:text-slate-300 space-y-1">
              <span className="font-bold block text-slate-900 dark:text-white flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                <span>Distributor Support</span>
              </span>
              <span>Need help? AI will auto-fill products, descriptions and prices for you in 1 tap!</span>
            </div>
          </div>
        </aside>

        {/* RIGHT MAIN CONTENT AREA */}
        <main className="lg:col-span-9 min-w-0 space-y-6">


          {/* ===================================================================
              TAB: STORE SUMMARY & OVERVIEW (Simple, Non-Technical Language)
              =================================================================== */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Friendly Welcome Card */}
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-2">
                <h2 className="text-lg font-black text-slate-900 dark:text-white">
                  Welcome to Your Store Summary, Aarti! 🌸
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  Here is an easy overview of how your Atomy distributor website is performing, customer inquiries received, and active products.
                </p>
              </div>

              {/* 4 Clean Metric Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500 uppercase">Product Views</span>
                    <Eye className="w-4 h-4 text-sky-600" />
                  </div>
                  <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white block mt-2">
                    {metrics.productViews}
                  </span>
                  <span className="text-[11px] text-slate-400 mt-0.5 block">
                    People looking at products
                  </span>
                </div>

                <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500 uppercase">WhatsApp Chats</span>
                    <MousePointer className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-2xl sm:text-3xl font-black text-emerald-600 block mt-2">
                    {metrics.whatsappClicks}
                  </span>
                  <span className="text-[11px] text-slate-400 mt-0.5 block">
                    Direct conversations
                  </span>
                </div>

                <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500 uppercase">Customer Leads</span>
                    <MessageSquare className="w-4 h-4 text-amber-500" />
                  </div>
                  <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white block mt-2">
                    {metrics.recordedEnquiriesCount}
                  </span>
                  <span className="text-[11px] text-slate-400 mt-0.5 block">
                    Waiting for follow up
                  </span>
                </div>

                <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500 uppercase">Orders Recorded</span>
                    <TrendingUp className="w-4 h-4 text-sky-600" />
                  </div>
                  <span className="text-2xl sm:text-3xl font-black text-sky-600 block mt-2">
                    {metrics.confirmedOrdersCount}
                  </span>
                  <span className="text-[11px] text-emerald-600 font-semibold mt-0.5 block">
                    ₹{metrics.totalConfirmedRevenue.toLocaleString('en-IN')} total sales
                  </span>
                </div>
              </div>

              {/* Quick Actions & Recent Enquiries */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Recent Inquiries */}
                <div className="lg:col-span-7 bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-base text-slate-900 dark:text-white">
                      Recent Customer Inquiries
                    </h3>
                    <button
                      onClick={() => setActiveTab('enquiries')}
                      className="text-xs font-bold text-sky-600 hover:underline"
                    >
                      View All ({enquiries.length}) →
                    </button>
                  </div>

                  <div className="space-y-3">
                    {enquiries.slice(0, 3).map((enq) => (
                      <div
                        key={enq.id}
                        className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-750 flex items-center justify-between gap-3"
                      >
                        <div>
                          <span className="font-bold text-xs text-slate-900 dark:text-white block">
                            {enq.customerName}
                          </span>
                          <span className="text-[11px] text-slate-500">
                            {enq.productName || 'General Inquiry'} • {enq.customerContact}
                          </span>
                        </div>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                          enq.status === 'converted' ? 'bg-emerald-100 text-emerald-800' : 'bg-sky-100 text-sky-800'
                        }`}>
                          {enq.status === 'converted' ? 'Order Placed' : 'Contacted'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Shortcuts */}
                <div className="lg:col-span-5 bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-3">
                  <h3 className="font-bold text-base text-slate-900 dark:text-white">
                    Quick Store Tasks
                  </h3>

                  <button
                    onClick={() => setActiveTab('products')}
                    className="w-full p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 hover:bg-emerald-100 text-emerald-800 dark:text-emerald-300 text-xs font-bold flex items-center gap-2.5 transition-colors text-left cursor-pointer"
                  >
                    <Package className="w-5 h-5 text-emerald-600 shrink-0" />
                    <div>
                      <span className="block">All Official Atomy Products ({products.length})</span>
                      <span className="text-[10px] font-normal text-emerald-700 dark:text-emerald-400">
                        View full catalog imported from in.atomy.com
                      </span>
                    </div>
                  </button>

                  <button
                    onClick={() => setActiveTab('products')}
                    className="w-full p-3 rounded-2xl bg-sky-50 dark:bg-sky-950/50 hover:bg-sky-100 text-sky-800 dark:text-sky-300 text-xs font-bold flex items-center gap-2.5 transition-colors text-left cursor-pointer"
                  >
                    <Search className="w-5 h-5 text-sky-600 shrink-0" />
                    <div>
                      <span className="block">Search & Edit Products</span>
                      <span className="text-[10px] font-normal text-sky-700 dark:text-sky-400">
                        Filter catalog, edit prices, set bestsellers
                      </span>
                    </div>
                  </button>

                  <button
                    onClick={() => setActiveTab('slider')}
                    className="w-full p-3 rounded-2xl bg-purple-50 dark:bg-purple-950/50 hover:bg-purple-100 text-purple-800 dark:text-purple-300 text-xs font-bold flex items-center gap-2.5 transition-colors text-left cursor-pointer"
                  >
                    <Sliders className="w-5 h-5 text-purple-600 shrink-0" />
                    <div>
                      <span className="block">Manage Homepage Slider</span>
                      <span className="text-[10px] font-normal text-purple-700 dark:text-purple-400">
                        Select which products slide on front page
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ===================================================================
              TAB: MANAGE PRODUCTS (Requirement 3: Add Search Product Capability)
              =================================================================== */}
          {activeTab === 'products' && (
            <div className="space-y-6">
              {/* Product Search & Filters Header */}
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                      <span>My Store Products</span>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300">
                        {products.length}
                      </span>
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Search any product, adjust authorized pricing, toggle bestsellers, or add new Atomy items.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 flex-wrap">
                    <button
                      onClick={() => setIsManualAddOpen(true)}
                      className="px-4 py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                      <span>+ Add Product Manually</span>
                    </button>
                  </div>
                </div>

                {/* Instant Search Bar */}
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={productSearch}
                    onChange={(e) => setProductSearch(e.target.value)}
                    placeholder="Search by product name, SKU, price, or category (e.g. 'Propolis', 'Sunscreen', '850')..."
                    className="w-full pl-10 pr-10 py-3 text-xs sm:text-sm rounded-2xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                  />
                  {productSearch && (
                    <button
                      onClick={() => setProductSearch('')}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Filter Pills */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-slate-100 dark:border-slate-700/60">
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      { id: 'all', label: `All (${products.length})` },
                      { id: 'skincare', label: 'Skincare' },
                      { id: 'health', label: 'Health' },
                      { id: 'personal-care', label: 'Personal Care' },
                      { id: 'makeup', label: 'Makeup' },
                      { id: 'home-care', label: 'Home Care' },
                    ].map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setProductCatFilter(cat.id)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                          productCatFilter === cat.id
                            ? 'bg-sky-600 text-white shadow-2xs font-bold'
                            : 'bg-slate-100 dark:bg-slate-750 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>

                  {/* Status Quick Filters */}
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setProductStatusFilter(productStatusFilter === 'bestsellers' ? 'all' : 'bestsellers')}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-colors cursor-pointer flex items-center gap-1 ${
                        productStatusFilter === 'bestsellers'
                          ? 'bg-amber-50 border-amber-300 text-amber-800 font-bold dark:bg-amber-950 dark:text-amber-300'
                          : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
                      }`}
                    >
                      <Star className="w-3.5 h-3.5 text-amber-500" />
                      <span>Bestsellers ⭐</span>
                    </button>
                  </div>
                </div>

                <div className="text-[11px] text-slate-400 font-medium">
                  Showing {filteredProducts.length} of {products.length} products
                </div>
              </div>

              {/* Product Cards List */}
              <div className="space-y-3">
                {filteredProducts.map((p) => (
                  <div
                    key={p.id}
                    className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs hover:shadow-xs transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-1.5 shrink-0 flex items-center justify-center">
                        <img src={p.thumbnail} alt={p.name} className="max-h-full max-w-full object-contain" />
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-md bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300">
                            {p.categoryName}
                          </span>
                          <span className="text-xs text-slate-400 font-mono">
                            {p.sku}
                          </span>
                          {p.badge && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-100 text-amber-800">
                              {p.badge}
                            </span>
                          )}
                        </div>

                        <h3 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">
                          {p.name}
                        </h3>

                        <div className="flex items-baseline gap-2 text-xs">
                          <span className="font-bold text-slate-900 dark:text-white">
                            Selling Rate: ₹{p.authorizedPrice.toLocaleString('en-IN')}
                          </span>
                          {p.originalPrice && p.originalPrice > p.authorizedPrice && (
                            <span className="text-slate-400 line-through">
                              ₹{p.originalPrice.toLocaleString('en-IN')}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Quick Switches & Action Buttons */}
                    <div className="flex items-center gap-2 flex-wrap self-end sm:self-center shrink-0">
                      {/* Bestseller Toggle */}
                      <button
                        onClick={() => toggleProductBestseller(p.id)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer ${
                          p.isBestseller
                            ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                            : 'bg-slate-100 text-slate-600 dark:bg-slate-750 dark:text-slate-300'
                        }`}
                        title="Toggle customer favourite bestseller"
                      >
                        <Star className={`w-3.5 h-3.5 ${p.isBestseller ? 'fill-amber-500 text-amber-500' : 'text-slate-400'}`} />
                        <span>{p.isBestseller ? 'Bestseller' : 'Standard'}</span>
                      </button>

                      {/* Publish / Hide Toggle */}
                      <button
                        onClick={() => toggleProductPublish(p.id)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                          p.isPublished
                            ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                            : 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
                        }`}
                      >
                        {p.isPublished ? 'Visible' : 'Hidden'}
                      </button>

                      {/* Edit Button */}
                      <button
                        onClick={() => setEditingProduct(p)}
                        className="p-2 rounded-xl border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer"
                        title="Edit price & details"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>

                      {/* Delete Button */}
                      {products.length > 1 && (
                        <button
                          onClick={() => {
                            if (confirm(`Are you sure you want to remove "${p.name}" from your shop?`)) {
                              deleteProduct(p.id);
                            }
                          }}
                          className="p-2 rounded-xl border border-rose-200 dark:border-rose-900 text-rose-600 dark:text-rose-400 hover:bg-rose-50 cursor-pointer"
                          title="Delete product"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}

                {filteredProducts.length === 0 && (
                  <div className="p-8 text-center bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 space-y-3">
                    <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                      No products found matching "{productSearch}"
                    </p>
                    <button
                      onClick={() => setProductSearch('')}
                      className="px-4 py-2 bg-sky-600 text-white rounded-xl text-xs font-bold"
                    >
                      Clear Search Filter
                    </button>
                  </div>
                )}
              </div>

              {/* Edit Product Modal */}
              {editingProduct && (
                <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
                  <div className="bg-white dark:bg-slate-800 rounded-3xl max-w-lg w-full p-6 border border-slate-200 dark:border-slate-700 shadow-2xl max-h-[90vh] overflow-y-auto space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-700">
                      <h3 className="font-bold text-base text-slate-900 dark:text-white">
                        Edit Product: {editingProduct.name}
                      </h3>
                      <button
                        onClick={() => setEditingProduct(null)}
                        className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="space-y-3 text-xs">
                      <div>
                        <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Product Name</label>
                        <input
                          type="text"
                          value={editingProduct.name}
                          onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                          className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Distributor Price (₹)</label>
                          <input
                            type="number"
                            value={editingProduct.authorizedPrice}
                            onChange={(e) => setEditingProduct({ ...editingProduct, authorizedPrice: Number(e.target.value) })}
                            className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900"
                          />
                        </div>
                        <div>
                          <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">MRP Original Price (₹)</label>
                          <input
                            type="number"
                            value={editingProduct.originalPrice || ''}
                            onChange={(e) => setEditingProduct({ ...editingProduct, originalPrice: Number(e.target.value) })}
                            className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Short Description</label>
                        <textarea
                          rows={3}
                          value={editingProduct.shortDescription}
                          onChange={(e) => setEditingProduct({ ...editingProduct, shortDescription: e.target.value })}
                          className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end gap-2 pt-3 border-t border-slate-100 dark:border-slate-700">
                      <button
                        onClick={() => setEditingProduct(null)}
                        className="px-4 py-2 border border-slate-300 rounded-xl text-xs font-semibold"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => {
                          updateProduct(editingProduct.id, editingProduct);
                          setEditingProduct(null);
                        }}
                        className="px-5 py-2 bg-sky-600 text-white rounded-xl text-xs font-bold hover:bg-sky-700"
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              )}


              {/* ===============================================================
                  MODAL POP-UP: MANUAL ADD PRODUCT
                  =============================================================== */}
              {isManualAddOpen && (
                <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
                  <div className="bg-white dark:bg-slate-800 rounded-3xl max-w-lg w-full p-6 border border-slate-200 dark:border-slate-700 shadow-2xl my-8 space-y-4 max-h-[90vh] overflow-y-auto">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-700">
                      <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                        <Plus className="w-4 h-4 text-sky-600" />
                        <span>Add Product Manually</span>
                      </h3>
                      <button
                        onClick={() => setIsManualAddOpen(false)}
                        className="p-1 rounded-lg text-slate-400 hover:text-slate-600 cursor-pointer"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <form onSubmit={handleManualAddSubmit} className="space-y-3 text-xs">
                      <div>
                        <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Product Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={manualForm.name}
                          onChange={(e) => setManualForm({ ...manualForm, name: e.target.value })}
                          placeholder="e.g. Atomy Absolute Lotion"
                          className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                            Category *
                          </label>
                          <select
                            value={manualForm.categoryId}
                            onChange={(e) => setManualForm({ ...manualForm, categoryId: e.target.value as CategoryId })}
                            className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                          >
                            <option value="skincare">Skincare</option>
                            <option value="health">Health</option>
                            <option value="personal-care">Personal Care</option>
                            <option value="makeup">Makeup</option>
                            <option value="home-care">Home Care</option>
                            <option value="others">Others</option>
                          </select>
                        </div>
                        <div>
                          <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                            SKU Code
                          </label>
                          <input
                            type="text"
                            value={manualForm.sku}
                            onChange={(e) => setManualForm({ ...manualForm, sku: e.target.value })}
                            placeholder="e.g. ATOMY-SK-022"
                            className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        <div>
                          <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                            Selling Rate (₹) *
                          </label>
                          <input
                            type="number"
                            required
                            value={manualForm.authorizedPrice}
                            onChange={(e) => setManualForm({ ...manualForm, authorizedPrice: e.target.value })}
                            placeholder="e.g. 1500"
                            className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                          />
                        </div>
                        <div>
                          <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                            MRP (₹)
                          </label>
                          <input
                            type="number"
                            value={manualForm.originalPrice}
                            onChange={(e) => setManualForm({ ...manualForm, originalPrice: e.target.value })}
                            placeholder="e.g. 1800"
                            className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                          />
                        </div>
                        <div>
                          <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                            PV Points
                          </label>
                          <input
                            type="number"
                            value={manualForm.pv}
                            onChange={(e) => setManualForm({ ...manualForm, pv: e.target.value })}
                            placeholder="e.g. 8000"
                            className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Product Image URL
                        </label>
                        <input
                          type="url"
                          value={manualForm.thumbnail}
                          onChange={(e) => setManualForm({ ...manualForm, thumbnail: e.target.value })}
                          placeholder="https://image.atomy.com/IN/goods/..."
                          className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Short Description
                        </label>
                        <textarea
                          rows={2}
                          value={manualForm.shortDescription}
                          onChange={(e) => setManualForm({ ...manualForm, shortDescription: e.target.value })}
                          placeholder="Brief 1-2 sentence description..."
                          className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                        />
                      </div>

                      <div className="flex justify-end gap-2 pt-3 border-t border-slate-100 dark:border-slate-700">
                        <button
                          type="button"
                          onClick={() => setIsManualAddOpen(false)}
                          className="px-4 py-2 border border-slate-300 rounded-xl text-xs font-semibold cursor-pointer"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-5 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs font-bold cursor-pointer"
                        >
                          Save Product
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ===================================================================
              TAB: HOMEPAGE HERO SLIDER
              =================================================================== */}
          {activeTab === 'slider' && (
            <div className="space-y-6">
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-black text-slate-900 dark:text-white">
                    Homepage Autosliding Showcase & Best Products
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Manage the top products that slide on the homepage when customers visit.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 dark:bg-slate-750 border border-slate-200 dark:border-slate-700 rounded-xl">
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Autoslide:</span>
                    <button
                      type="button"
                      onClick={() =>
                        updateHeroSliderSettings({
                          autoSlideEnabled: !heroSliderSettings.autoSlideEnabled,
                        })
                      }
                      className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                        heroSliderSettings.autoSlideEnabled ? 'bg-emerald-600' : 'bg-slate-300 dark:bg-slate-600'
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                          heroSliderSettings.autoSlideEnabled ? 'translate-x-4' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>

                  <button
                    onClick={() => setNewSlideOpen(true)}
                    className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Slide</span>
                  </button>
                </div>
              </div>

              {/* Slides List */}
              <div className="space-y-4">
                {heroSlides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-1.5 shrink-0 flex items-center justify-center">
                        <img src={slide.image} alt={slide.title} className="max-h-full max-w-full object-contain" />
                        <span className="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-black flex items-center justify-center">
                          {index + 1}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-sky-100 text-sky-800 px-2 py-0.5 rounded-md">
                            {slide.badge}
                          </span>
                          {slide.active ? (
                            <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-1">
                              <Check className="w-3 h-3" />
                              <span>Active</span>
                            </span>
                          ) : (
                            <span className="text-[10px] text-slate-400">Hidden</span>
                          )}
                        </div>

                        <h3 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">
                          {slide.title}
                        </h3>

                        <span className="text-xs font-bold text-slate-900 dark:text-white block">
                          ₹{slide.authorizedPrice.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-center">
                      <button
                        onClick={() => toggleHeroSlide(slide.id)}
                        className={`px-3 py-1.5 text-xs font-bold rounded-xl cursor-pointer ${
                          slide.active ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {slide.active ? 'Active' : 'Turn On'}
                      </button>

                      <button
                        onClick={() => setEditingSlide(slide)}
                        className="p-2 rounded-xl border border-slate-300 dark:border-slate-600 text-slate-700 hover:bg-slate-50 cursor-pointer"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>

                      {heroSlides.length > 1 && (
                        <button
                          onClick={() => deleteHeroSlide(slide.id)}
                          className="p-2 rounded-xl border border-rose-200 text-rose-600 hover:bg-rose-50 cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Modal: Add Slide */}
              {newSlideOpen && (
                <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
                  <div className="bg-white dark:bg-slate-800 rounded-3xl max-w-lg w-full p-6 border border-slate-200 dark:border-slate-700 shadow-2xl my-8 space-y-4 max-h-[90vh] overflow-y-auto">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-700">
                      <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                        <Plus className="w-4 h-4 text-sky-600" />
                        <span>Add Slide to Hero Showcase</span>
                      </h3>
                      <button
                        onClick={() => setNewSlideOpen(false)}
                        className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 cursor-pointer"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (!newSlideForm.title.trim()) return;
                        addHeroSlide({
                          productId: newSlideForm.productId,
                          productSlug: newSlideForm.productSlug,
                          badge: newSlideForm.badge.trim() || 'Featured Special',
                          title: newSlideForm.title.trim(),
                          subtitle: newSlideForm.subtitle.trim(),
                          image: newSlideForm.image.trim() || products[0]?.thumbnail || '',
                          authorizedPrice: Number(newSlideForm.authorizedPrice) || 1000,
                          originalPrice: newSlideForm.originalPrice ? Number(newSlideForm.originalPrice) : undefined,
                          isOffer: newSlideForm.isOffer,
                          offerTag: newSlideForm.offerTag.trim() || undefined,
                          highlightPoints: [
                            newSlideForm.highlight1.trim() || '100% Genuine Atomy',
                            newSlideForm.highlight2.trim() || 'Korean Biotech Quality',
                            newSlideForm.highlight3.trim() || 'Distributor Direct',
                          ],
                        });
                        setNewSlideOpen(false);
                      }}
                      className="space-y-3 text-xs"
                    >
                      <div>
                        <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Pick from Catalog (Optional Auto-Fill)
                        </label>
                        <select
                          value={newSlideForm.productId}
                          onChange={(e) => {
                            const p = products.find((prod) => prod.id === e.target.value);
                            if (p) {
                              setNewSlideForm({
                                ...newSlideForm,
                                productId: p.id,
                                productSlug: p.slug || 'catalogue',
                                title: p.name,
                                subtitle: p.shortDescription || 'Authentic Korean skincare and wellness.',
                                image: p.thumbnail,
                                authorizedPrice: p.authorizedPrice,
                                originalPrice: p.originalPrice || Math.round(p.authorizedPrice * 1.15),
                                badge: p.badge || 'Bestseller Special',
                              });
                            }
                          }}
                          className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                        >
                          <option value="">-- Choose a Product --</option>
                          {products.map((p) => (
                            <option key={p.id} value={p.id}>
                              {p.name} (₹{p.authorizedPrice})
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Slide Title *
                        </label>
                        <input
                          type="text"
                          required
                          value={newSlideForm.title}
                          onChange={(e) => setNewSlideForm({ ...newSlideForm, title: e.target.value })}
                          placeholder="e.g. Atomy Absolute Skincare Set"
                          className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                            Badge Tag
                          </label>
                          <input
                            type="text"
                            value={newSlideForm.badge}
                            onChange={(e) => setNewSlideForm({ ...newSlideForm, badge: e.target.value })}
                            placeholder="e.g. FLAGSHIP PRESTIGE"
                            className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                          />
                        </div>
                        <div>
                          <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                            Price (₹) *
                          </label>
                          <input
                            type="number"
                            required
                            value={newSlideForm.authorizedPrice}
                            onChange={(e) => setNewSlideForm({ ...newSlideForm, authorizedPrice: Number(e.target.value) })}
                            className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Subtitle / Brief Pitch
                        </label>
                        <textarea
                          rows={2}
                          value={newSlideForm.subtitle}
                          onChange={(e) => setNewSlideForm({ ...newSlideForm, subtitle: e.target.value })}
                          placeholder="Brief description..."
                          className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Product Image URL
                        </label>
                        <input
                          type="text"
                          value={newSlideForm.image}
                          onChange={(e) => setNewSlideForm({ ...newSlideForm, image: e.target.value })}
                          placeholder="https://... or /products/..."
                          className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                        />
                      </div>

                      <div className="flex justify-end gap-2 pt-3 border-t border-slate-100 dark:border-slate-700">
                        <button
                          type="button"
                          onClick={() => setNewSlideOpen(false)}
                          className="px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-xl text-xs font-semibold cursor-pointer"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-5 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs font-bold cursor-pointer"
                        >
                          Save Slide
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}

              {/* Modal: Edit Slide */}
              {editingSlide && (
                <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
                  <div className="bg-white dark:bg-slate-800 rounded-3xl max-w-lg w-full p-6 border border-slate-200 dark:border-slate-700 shadow-2xl my-8 space-y-4 max-h-[90vh] overflow-y-auto">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-700">
                      <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                        <Edit2 className="w-4 h-4 text-sky-600" />
                        <span>Edit Slide</span>
                      </h3>
                      <button
                        onClick={() => setEditingSlide(null)}
                        className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 cursor-pointer"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        updateHeroSlide(editingSlide.id, editingSlide);
                        setEditingSlide(null);
                      }}
                      className="space-y-3 text-xs"
                    >
                      <div>
                        <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Slide Title *
                        </label>
                        <input
                          type="text"
                          required
                          value={editingSlide.title}
                          onChange={(e) => setEditingSlide({ ...editingSlide, title: e.target.value })}
                          className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                            Badge Tag
                          </label>
                          <input
                            type="text"
                            value={editingSlide.badge}
                            onChange={(e) => setEditingSlide({ ...editingSlide, badge: e.target.value })}
                            className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                          />
                        </div>
                        <div>
                          <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                            Price (₹)
                          </label>
                          <input
                            type="number"
                            value={editingSlide.authorizedPrice}
                            onChange={(e) => setEditingSlide({ ...editingSlide, authorizedPrice: Number(e.target.value) })}
                            className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Subtitle
                        </label>
                        <textarea
                          rows={2}
                          value={editingSlide.subtitle}
                          onChange={(e) => setEditingSlide({ ...editingSlide, subtitle: e.target.value })}
                          className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Image URL
                        </label>
                        <input
                          type="text"
                          value={editingSlide.image}
                          onChange={(e) => setEditingSlide({ ...editingSlide, image: e.target.value })}
                          className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                        />
                      </div>

                      <div className="flex justify-end gap-2 pt-3 border-t border-slate-100 dark:border-slate-700">
                        <button
                          type="button"
                          onClick={() => setEditingSlide(null)}
                          className="px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-xl text-xs font-semibold cursor-pointer"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-5 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs font-bold cursor-pointer"
                        >
                          Save Changes
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ===================================================================
              TAB: SPECIAL OFFERS
              =================================================================== */}
          {activeTab === 'offers' && (
            <div className="space-y-6">
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-black text-slate-900 dark:text-white">
                    Special Offers & Bundles ({offers.length})
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Create limited time promotional rates and highlight festive savings.
                  </p>
                </div>

                <button
                  onClick={() => setNewOfferOpen(true)}
                  className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Create Offer</span>
                </button>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {offers.map((off) => (
                  <div
                    key={off.id}
                    className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-md bg-amber-100 text-amber-800">
                        {off.bannerTag}
                      </span>
                      <h3 className="font-extrabold text-base text-slate-900 dark:text-white mt-1">
                        {off.title} — {off.productName}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">{off.description}</p>
                      <div className="flex items-baseline gap-2 mt-2">
                        <span className="text-slate-400 line-through text-xs">
                          ₹{off.authorizedOriginalPrice.toLocaleString('en-IN')}
                        </span>
                        <span className="text-base font-extrabold text-emerald-600">
                          Now ₹{off.authorizedOfferPrice.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => toggleOfferPublish(off.id)}
                      className={`px-3.5 py-1.5 text-xs font-bold rounded-xl cursor-pointer ${
                        off.isPublished ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {off.isPublished ? 'Offer Active' : 'Draft / Off'}
                    </button>
                  </div>
                ))}
              </div>

              {/* Modal: Create Offer */}
              {newOfferOpen && (
                <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
                  <div className="bg-white dark:bg-slate-800 rounded-3xl max-w-lg w-full p-6 border border-slate-200 dark:border-slate-700 shadow-2xl my-8 space-y-4 max-h-[90vh] overflow-y-auto">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-700">
                      <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                        <Plus className="w-4 h-4 text-sky-600" />
                        <span>Create Special Offer / Bundle</span>
                      </h3>
                      <button
                        onClick={() => setNewOfferOpen(false)}
                        className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 cursor-pointer"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <form onSubmit={handleAddOfferSubmit} className="space-y-3 text-xs">
                      <div>
                        <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Select Product *
                        </label>
                        <select
                          value={newOfferForm.productId}
                          onChange={(e) => {
                            const p = products.find((prod) => prod.id === e.target.value);
                            setNewOfferForm({
                              ...newOfferForm,
                              productId: e.target.value,
                              title: p ? `${p.name} Special Promotion` : '',
                              authorizedOriginalPrice: p ? (p.originalPrice || Math.round(p.authorizedPrice * 1.15)) : 15000,
                              authorizedOfferPrice: p ? p.authorizedPrice : 13500,
                            });
                          }}
                          className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                          required
                        >
                          <option value="">-- Choose a Product --</option>
                          {products.map((p) => (
                            <option key={p.id} value={p.id}>
                              {p.name} (₹{p.authorizedPrice})
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Offer Headline *
                        </label>
                        <input
                          type="text"
                          required
                          value={newOfferForm.title}
                          onChange={(e) => setNewOfferForm({ ...newOfferForm, title: e.target.value })}
                          placeholder="e.g. Festive Korean Glow Bundle"
                          className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                            Original MRP (₹)
                          </label>
                          <input
                            type="number"
                            value={newOfferForm.authorizedOriginalPrice}
                            onChange={(e) => setNewOfferForm({ ...newOfferForm, authorizedOriginalPrice: Number(e.target.value) })}
                            className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                          />
                        </div>
                        <div>
                          <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                            Offer / Discounted Rate (₹) *
                          </label>
                          <input
                            type="number"
                            required
                            value={newOfferForm.authorizedOfferPrice}
                            onChange={(e) => setNewOfferForm({ ...newOfferForm, authorizedOfferPrice: Number(e.target.value) })}
                            className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                            Banner Tag
                          </label>
                          <input
                            type="text"
                            value={newOfferForm.bannerTag}
                            onChange={(e) => setNewOfferForm({ ...newOfferForm, bannerTag: e.target.value })}
                            placeholder="e.g. SEASONAL EXCLUSIVE"
                            className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                          />
                        </div>
                        <div>
                          <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                            Valid Until
                          </label>
                          <input
                            type="date"
                            value={newOfferForm.endAt}
                            onChange={(e) => setNewOfferForm({ ...newOfferForm, endAt: e.target.value })}
                            className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Offer Description / Highlights
                        </label>
                        <textarea
                          rows={2}
                          value={newOfferForm.description}
                          onChange={(e) => setNewOfferForm({ ...newOfferForm, description: e.target.value })}
                          placeholder="e.g. Free distributor consultation and travel kit included..."
                          className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                        />
                      </div>

                      <div className="flex justify-end gap-2 pt-3 border-t border-slate-100 dark:border-slate-700">
                        <button
                          type="button"
                          onClick={() => setNewOfferOpen(false)}
                          className="px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-xl text-xs font-semibold cursor-pointer"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-5 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs font-bold cursor-pointer"
                        >
                          Publish Offer
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ===================================================================
              TAB: CUSTOMER INQUIRIES
              =================================================================== */}
          {activeTab === 'enquiries' && (
            <div className="space-y-6">
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs">
                <h2 className="text-lg font-black text-slate-900 dark:text-white">
                  Customer Messages & Inquiries ({enquiries.length})
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Messages submitted by visitors through your website forms and WhatsApp buttons.
                </p>
              </div>

              <div className="space-y-3">
                {enquiries.map((enq) => (
                  <div
                    key={enq.id}
                    className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <span className="font-extrabold text-base text-slate-900 dark:text-white">
                          {enq.customerName}
                        </span>
                        <span className="text-xs text-slate-400 ml-2 font-mono">
                          {enq.customerContact}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <select
                          value={enq.status}
                          onChange={(e) => updateEnquiryStatus(enq.id, e.target.value as EnquiryStatus)}
                          className="px-3 py-1 text-xs font-bold rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900"
                        >
                          <option value="new">New Message</option>
                          <option value="contacted">In Touch on WhatsApp</option>
                          <option value="converted">Order Completed</option>
                          <option value="closed">Closed</option>
                        </select>

                        <button
                          onClick={() => {
                            setConvertingEnquiry(enq);
                            setOrderTotalInput(1000);
                          }}
                          className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold"
                        >
                          Convert to Order
                        </button>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-750 text-xs text-slate-700 dark:text-slate-300">
                      <span className="font-bold">Product: </span> {enq.productName || 'General Inquiry'}
                      {enq.notes && (
                        <p className="mt-1 text-slate-500">{enq.notes}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ===================================================================
              TAB: ORDERS
              =================================================================== */}
          {activeTab === 'orders' && (
            <div className="space-y-6">
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs">
                <h2 className="text-lg font-black text-slate-900 dark:text-white">
                  Completed Customer Orders ({orders.length})
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Track orders verified via WhatsApp and coordinated through Atomy India warehouse delivery.
                </p>
              </div>

              <div className="space-y-3">
                {orders.map((ord) => (
                  <div
                    key={ord.id}
                    className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-slate-900 dark:text-white">
                          Order Ref: {ord.orderReference}
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                          {ord.status.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">
                        Customer: {ord.customerName} ({ord.customerPhone})
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="text-lg font-black text-slate-900 dark:text-white">
                        ₹{ord.recordedTotal.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ===================================================================
              TAB: SHOP DETAILS & PHONE
              =================================================================== */}
          {activeTab === 'settings' && (
            <div className="space-y-6">
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs">
                <h2 className="text-lg font-black text-slate-900 dark:text-white">
                  Shop Details & WhatsApp Settings
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Keep your phone numbers, distributor address, and bio up to date.
                </p>
              </div>

              {settingsSaved && (
                <div className="p-4 rounded-2xl bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                  ✅ Your shop details have been saved successfully!
                </div>
              )}

              <form onSubmit={handleSaveSettings} className="p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                      WhatsApp Clean Digits (For ordering backend routing)
                    </label>
                    <input
                      type="text"
                      value={settingsForm.whatsappNumber}
                      onChange={(e) => setSettingsForm({ ...settingsForm, whatsappNumber: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 font-mono"
                    />
                    <span className="text-[11px] text-slate-400 mt-1 block">
                      Original number: 919911938324 (Aarti Singh)
                    </span>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Phone Number Displayed to Customers
                    </label>
                    <input
                      type="text"
                      value={settingsForm.displayPhone}
                      onChange={(e) => setSettingsForm({ ...settingsForm, displayPhone: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Distributor Name
                    </label>
                    <input
                      type="text"
                      value={settingsForm.distributorName}
                      onChange={(e) => setSettingsForm({ ...settingsForm, distributorName: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Distributor Location
                    </label>
                    <input
                      type="text"
                      value={settingsForm.address}
                      onChange={(e) => setSettingsForm({ ...settingsForm, address: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900"
                    />
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-xl shadow-xs cursor-pointer"
                  >
                    Save Shop Details
                  </button>
                </div>
              </form>

              {/* Dedicated Security & Private Link Information */}
              <div className="mt-8 p-6 rounded-2xl bg-slate-900 text-white border border-slate-700 shadow-md space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-white">Security & Private Access Settings</h3>
                    <p className="text-xs text-slate-400">All security patches active • Anti-brute force enabled</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60 space-y-1.5">
                    <span className="font-bold text-slate-300 block">Private Admin Access Link:</span>
                    <code className="text-emerald-400 bg-slate-950 px-2 py-1 rounded-md block break-all font-mono text-[11px]">
                      {typeof window !== 'undefined' ? `${window.location.origin}/#/store-manager-9911` : '#/store-manager-9911'}
                    </code>
                    <p className="text-[11px] text-slate-400">
                      All admin buttons have been removed from the public website navbar and footer. Use this private link to access your manager.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60 space-y-1.5">
                    <span className="font-bold text-slate-300 block">Password Status:</span>
                    <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                      <Lock className="w-3.5 h-3.5" />
                      <span>Code-Locked Protection</span>
                    </div>
                    <p className="text-[11px] text-slate-400">
                      Per your request, password change has been locked from all UI controls. The password can strictly only be modified directly through source code.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ===================================================================
              TAB: BATCH IMPORT CSV / JSON (Advanced)
              =================================================================== */}
          {activeTab === 'import' && (
            <div className="space-y-6">
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-4">
                <div>
                  <h2 className="text-lg font-black text-slate-900 dark:text-white">
                    Advanced Batch Spreadsheet Import
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Upload or paste Atomy product rows in CSV or JSON format. All 94 official Atomy India products from in.atomy.com are pre-loaded in your store.
                  </p>
                </div>

                <div className="space-y-3">
                  <textarea
                    rows={6}
                    value={importText}
                    onChange={(e) => setImportText(e.target.value)}
                    placeholder="sku,name,category,authorizedPrice,shortDescription..."
                    className="w-full p-3 text-xs font-mono rounded-2xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900"
                  />

                  <div className="flex gap-2">
                    <button
                      onClick={handleValidateImport}
                      className="px-4 py-2 bg-slate-800 text-white font-bold text-xs rounded-xl"
                    >
                      Validate Feed
                    </button>
                    {importReport && importReport.validProducts.length > 0 && (
                      <button
                        onClick={handleExecuteImport}
                        className="px-4 py-2 bg-emerald-600 text-white font-bold text-xs rounded-xl"
                      >
                        Import {importReport.validProducts.length} Products
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Convert Order Modal */}
      {convertingEnquiry && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-800 rounded-3xl max-w-md w-full p-6 border border-slate-200 dark:border-slate-700 shadow-2xl space-y-4">
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              Record Confirmed Order for {convertingEnquiry.customerName}
            </h3>

            <form onSubmit={handleConvertOrderSubmit} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Order Total Amount (₹)
                </label>
                <input
                  type="number"
                  value={orderTotalInput}
                  onChange={(e) => setOrderTotalInput(Number(e.target.value))}
                  className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Notes / Courier Tracking Ref
                </label>
                <textarea
                  rows={2}
                  value={orderNotesInput}
                  onChange={(e) => setOrderNotesInput(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900"
                  placeholder="e.g. Paid via UPI, dispatched via Delhivery"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setConvertingEnquiry(null)}
                  className="px-4 py-2 border border-slate-300 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-emerald-600 text-white font-bold rounded-xl"
                >
                  Confirm Order
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
