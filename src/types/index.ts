export type CategoryId = 'skincare' | 'health' | 'personal-care' | 'makeup' | 'home-care' | 'others';

export interface Category {
  id: CategoryId;
  name: string;
  nameHi: string;
  slug: string;
  description: string;
  descriptionHi: string;
  image: string;
  productCount: number;
  displayOrder: number;
  isPublished: boolean;
}

export interface ProductVariant {
  id: string;
  productId: string;
  sku: string;
  name: string;
  nameHi?: string;
  attributes: Record<string, string>;
  authorizedPrice: number;
}

export interface Product {
  id: string;
  externalProductId: string;
  sku: string;
  slug: string;
  name: string;
  nameHi: string;
  categoryId: CategoryId;
  categoryName: string;
  shortDescription: string;
  shortDescriptionHi: string;
  description: string;
  descriptionHi: string;
  productDetails: {
    koreanQuality: string;
    gentleFormulation: string;
    skinTypes: string;
    volumeOrWeight: string;
    keyIngredients: string[];
    howToUse: string;
    warnings: string;
    benefits: string[];
    faq: { q: string; a: string }[];
  };
  authorizedPrice: number;
  originalPrice?: number;
  currency: string;
  images: string[];
  thumbnail: string;
  badge?: 'Bestseller' | 'Featured' | 'Offer' | 'New' | 'Popular';
  isImported: boolean;
  isPublished: boolean;
  isFeatured: boolean;
  isBestseller: boolean;
  featuredOrder: number;
  displayOrder: number;
  rating?: number;
  reviewCount?: number;
  pv?: number;
  productUrl?: string;
  stockStatus?: 'in_stock' | 'low_stock' | 'out_of_stock';
  createdAt?: string;
  updatedAt?: string;
}

export interface Offer {
  id: string;
  productId: string;
  productName: string;
  title: string;
  titleHi: string;
  description: string;
  descriptionHi: string;
  authorizedOriginalPrice: number;
  authorizedOfferPrice: number;
  startAt: string; // ISO string
  endAt: string; // ISO string
  isPublished: boolean;
  bannerTag: string;
}

export type EnquiryStatus = 'new' | 'contacted' | 'follow_up' | 'converted' | 'closed' | 'not_interested';

export interface Enquiry {
  id: string;
  referenceCode: string;
  productId?: string;
  productName?: string;
  productSku?: string;
  variantName?: string;
  quantity?: number;
  customerName: string;
  customerContact: string;
  enquiryType: 'product' | 'opportunity' | 'order_tracking' | 'support' | 'other';
  channel: 'whatsapp' | 'web_form' | 'direct_call' | 'email';
  sourcePage: string;
  status: EnquiryStatus;
  notes: string;
  createdAt: string;
  updatedAt: string;
}

export type OrderStatus = 'pending_verification' | 'confirmed' | 'processing' | 'completed' | 'fulfilled' | 'cancelled';

export interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  productNameSnapshot: string;
  skuSnapshot: string;
  quantity: number;
  recordedUnitPrice: number;
  recordedSubtotal: number;
}

export interface Order {
  id: string;
  orderReference?: string;
  enquiryId?: string;
  customerName: string;
  customerPhone: string;
  customerAddress?: string;
  items: OrderItem[];
  recordedTotal: number;
  currency?: string;
  status: OrderStatus;
  confirmationSource?: 'WhatsApp confirmed' | 'Direct phone call' | 'Manual admin creation';
  orderDate?: string;
  notes: string;
  paymentConfirmed?: boolean;
  dispatchNotes?: string;
  createdAt: string;
  updatedAt?: string;
}

export type AnalyticsEventType =
  | 'page_view'
  | 'product_view'
  | 'catalogue_search'
  | 'category_click'
  | 'whatsapp_enquiry_click'
  | 'contact_form_submit'
  | 'opportunity_inquiry'
  | 'filter_used';

export interface AnalyticsEvent {
  id: string;
  eventType: AnalyticsEventType;
  productId?: string;
  productName?: string;
  pagePath: string;
  referrer?: string;
  sessionId: string;
  metadata?: Record<string, any>;
  createdAt: string;
}

export interface SiteSettings {
  whatsappNumber: string; // International clean digits e.g. "919911938324"
  displayPhone: string; // Formatted e.g. "+91-9911938324"
  email: string; // aartisinghofficial0@gmail.com
  distributorName: string; // Aarti Singh
  businessName: string; // Atomy India Independent Distributor
  address: string; // Apex Our Homes, Sector 37-C, Gurgaon, India
  supportHours: string; // 9:00 AM - 7:00 PM IST
  distributorDisclosure: string;
  defaultLanguage: 'en' | 'hi';
}

export interface HeroSlide {
  id: string;
  productId: string;
  productSlug: string;
  badge: string;
  title: string;
  subtitle: string;
  image: string;
  highlightPoints: string[];
  authorizedPrice: number;
  originalPrice?: number;
  isOffer: boolean;
  offerTag?: string;
  active: boolean;
  order: number;
}

export interface HeroSliderSettings {
  autoSlideEnabled: boolean;
  intervalSeconds: number;
}
