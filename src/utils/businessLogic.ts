import type { Product, Offer, AnalyticsEvent, Enquiry, Order } from '../types/index.ts';

export interface WhatsAppMessageOptions {
  whatsappNumber: string; // e.g. "919911938324"
  productName?: string;
  productId?: string;
  variantName?: string;
  quantity?: number;
  referenceId?: string;
  productPageUrl?: string;
  customMessage?: string;
  intent?: 'product_order' | 'product_enquiry' | 'general_contact' | 'business_opportunity';
}

/**
 * Generates an authorized WhatsApp click-to-chat URL strictly matching the distributor requirements.
 */
export function generateWhatsAppUrl(options: WhatsAppMessageOptions): {
  url: string;
  encodedText: string;
  rawText: string;
} {
  const cleanNumber = options.whatsappNumber.replace(/[^0-9]/g, '');

  let rawMessage = '';

  if (options.intent === 'business_opportunity') {
    rawMessage = [
      'Hello Aarti,',
      '',
      'I am interested in learning more about the Atomy Independent Distributor opportunity in India.',
      options.referenceId ? `Reference: ${options.referenceId}` : '',
      'Please share guidance on getting started and the approved distributor guidelines.',
      '',
      'Thank you!'
    ].filter(Boolean).join('\n');
  } else if (options.intent === 'general_contact' || !options.productName) {
    rawMessage = [
      'Hello Aarti,',
      '',
      options.customMessage || 'I would like to enquire about Atomy products and availability in India.',
      options.referenceId ? `Reference: ${options.referenceId}` : '',
      'Please connect with me at your convenience.',
      '',
      'Thank you!'
    ].filter(Boolean).join('\n');
  } else if (options.intent === 'product_order') {
    const lines = [
      'Hello Aarti, I would like to order the following Atomy product.',
      '',
      `Product: ${options.productName}`,
      options.productId ? `Product ID: ${options.productId}` : '',
      options.variantName ? `Variant: ${options.variantName}` : '',
      options.quantity ? `Quantity: ${options.quantity}` : 'Quantity: 1',
      options.referenceId ? `Order Reference: ${options.referenceId}` : '',
      options.productPageUrl ? `Product Page: ${options.productPageUrl}` : '',
      '',
      'Please confirm availability and share the payment & dispatch process.'
    ];
    rawMessage = lines.filter(Boolean).join('\n');
  } else {
    // Strictly formatted product enquiry as defined in Master Prompt section 10
    const lines = [
      'Hello Aarti, I am interested in the following product.',
      '',
      `Product: ${options.productName}`,
      options.productId ? `Product ID: ${options.productId}` : '',
      options.variantName ? `Variant: ${options.variantName}` : '',
      options.quantity ? `Quantity: ${options.quantity}` : 'Quantity: 1',
      options.referenceId ? `Enquiry Reference: ${options.referenceId}` : '',
      options.productPageUrl ? `Product Page: ${options.productPageUrl}` : '',
      '',
      'Please share the available details and the approved ordering process.'
    ];
    rawMessage = lines.filter(Boolean).join('\n');
  }

  const encodedText = encodeURIComponent(rawMessage);
  const url = `https://wa.me/${cleanNumber}?text=${encodedText}`;

  return { url, encodedText, rawText: rawMessage };
}

export interface ProductFilterOptions {
  searchQuery?: string;
  categoryId?: string;
  priceRange?: 'all' | 'under-1000' | '1000-2000' | '2000-5000' | 'above-5000';
  sortBy?: 'popularity' | 'price-asc' | 'price-desc' | 'newest';
  onlyPublished?: boolean;
}

/**
 * Pure function to filter and sort products cleanly
 */
export function filterAndSortProducts(
  products: Product[],
  options: ProductFilterOptions = {}
): Product[] {
  const {
    searchQuery = '',
    categoryId = 'all',
    priceRange = 'all',
    sortBy = 'popularity',
    onlyPublished = true,
  } = options;

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filtered = products.filter((product) => {
    if (onlyPublished && !product.isPublished) {
      return false;
    }

    if (categoryId && categoryId !== 'all') {
      if (product.categoryId !== categoryId) {
        return false;
      }
    }

    if (normalizedQuery) {
      const matchName = (product.name || '').toLowerCase().includes(normalizedQuery);
      const matchSku = (product.sku || '').toLowerCase().includes(normalizedQuery);
      const matchCat = (product.categoryName || '').toLowerCase().includes(normalizedQuery);
      const matchDesc = (product.shortDescription || '').toLowerCase().includes(normalizedQuery);
      const matchDetails = (product.description || '').toLowerCase().includes(normalizedQuery);
      if (!matchName && !matchSku && !matchCat && !matchDesc && !matchDetails) {
        return false;
      }
    }

    const price = product.authorizedPrice;
    if (priceRange === 'under-1000' && price >= 1000) return false;
    if (priceRange === '1000-2000' && (price < 1000 || price > 2000)) return false;
    if (priceRange === '2000-5000' && (price < 2000 || price > 5000)) return false;
    if (priceRange === 'above-5000' && price <= 5000) return false;

    return true;
  });

  return filtered.sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.authorizedPrice - b.authorizedPrice;
      case 'price-desc':
        return b.authorizedPrice - a.authorizedPrice;
      case 'newest':
        return new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime();
      case 'popularity':
      default:
        // Featured products first, then by rating/displayOrder
        if (a.isFeatured !== b.isFeatured) {
          return a.isFeatured ? -1 : 1;
        }
        return (a.displayOrder || 99) - (b.displayOrder || 99);
    }
  });
}

/**
 * Checks whether an offer is active and not expired based on verified dates
 */
export function isOfferActive(offer: Offer, currentDate = new Date()): boolean {
  if (!offer.isPublished) return false;
  const now = currentDate.getTime();
  const start = new Date(offer.startAt).getTime();
  const end = new Date(offer.endAt).getTime();
  return now >= start && now <= end;
}

/**
 * Calculates honest, non-fabricated analytics conversion metrics
 */
export function calculateConversionMetrics(
  events: AnalyticsEvent[],
  enquiries: Enquiry[],
  orders: Order[]
) {
  const productViews = events.filter((e) => e.eventType === 'product_view').length;
  const catalogueSearches = events.filter((e) => e.eventType === 'catalogue_search').length;
  const whatsappClicks = events.filter((e) => e.eventType === 'whatsapp_enquiry_click').length;
  const contactSubmissions = events.filter((e) => e.eventType === 'contact_form_submit').length;

  const recordedEnquiriesCount = enquiries.length;
  const confirmedOrdersCount = orders.filter((o) => o.status === 'confirmed' || o.status === 'processing' || o.status === 'completed').length;
  const completedOrdersCount = orders.filter((o) => o.status === 'completed').length;

  const totalConfirmedRevenue = orders
    .filter((o) => o.status === 'confirmed' || o.status === 'processing' || o.status === 'completed')
    .reduce((sum, o) => sum + (o.recordedTotal || 0), 0);

  // Safe rates with non-zero denominators
  const enquiryClickRate = productViews > 0 ? (whatsappClicks / productViews) * 100 : 0;
  const enquiryConversionRate = recordedEnquiriesCount > 0 ? (confirmedOrdersCount / recordedEnquiriesCount) * 100 : 0;

  return {
    productViews,
    catalogueSearches,
    whatsappClicks,
    contactSubmissions,
    recordedEnquiriesCount,
    confirmedOrdersCount,
    completedOrdersCount,
    totalConfirmedRevenue,
    enquiryClickRate: Math.round(enquiryClickRate * 10) / 10,
    enquiryConversionRate: Math.round(enquiryConversionRate * 10) / 10,
  };
}

export interface ImportValidationResult {
  validProducts: Partial<Product>[];
  errors: { row: number; field: string; message: string }[];
  duplicateCount: number;
}

/**
 * Validates CSV or JSON import payload before creating un-published records
 */
export function parseAndValidateProductsImport(
  content: string,
  format: 'json' | 'csv',
  existingSkus: Set<string>
): ImportValidationResult {
  const validProducts: Partial<Product>[] = [];
  const errors: { row: number; field: string; message: string }[] = [];
  let duplicateCount = 0;

  if (format === 'json') {
    try {
      const parsed = JSON.parse(content);
      const items = Array.isArray(parsed) ? parsed : [parsed];

      items.forEach((item, index) => {
        const row = index + 1;
        if (!item.name || typeof item.name !== 'string' || item.name.trim() === '') {
          errors.push({ row, field: 'name', message: 'Product name is required.' });
          return;
        }

        const sku = item.sku || item.externalProductId || `ATOMY-IMP-${Date.now()}-${row}`;
        if (existingSkus.has(sku)) {
          duplicateCount++;
          errors.push({ row, field: 'sku', message: `Duplicate SKU '${sku}' already exists in inventory.` });
          return;
        }

        const price = Number(item.authorizedPrice);
        if (isNaN(price) || price <= 0) {
          errors.push({ row, field: 'authorizedPrice', message: 'Valid positive authorized price is required.' });
          return;
        }

        validProducts.push({
          externalProductId: item.externalProductId || sku,
          sku,
          name: item.name.trim(),
          categoryId: item.categoryId || 'others',
          shortDescription: item.shortDescription || item.description?.slice(0, 120) || 'Imported Atomy product.',
          description: item.description || item.shortDescription || '',
          authorizedPrice: price,
          currency: item.currency || 'INR',
          isImported: true,
          isPublished: false, // Must remain unpublished until reviewed!
          isFeatured: false,
          isBestseller: false,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });
      });
    } catch (e: any) {
      errors.push({ row: 0, field: 'syntax', message: `Invalid JSON format: ${e.message}` });
    }
  } else {
    // CSV parser
    const lines = content.split(/\r?\n/).filter((l) => l.trim().length > 0);
    if (lines.length < 2) {
      errors.push({ row: 0, field: 'file', message: 'CSV file must contain a header row and at least one data row.' });
      return { validProducts, errors, duplicateCount };
    }

    const headers = lines[0].split(',').map((h) => h.trim().toLowerCase());
    const nameIdx = headers.indexOf('name');
    const skuIdx = headers.indexOf('sku');
    const priceIdx = headers.indexOf('price') !== -1 ? headers.indexOf('price') : headers.indexOf('authorizedprice');
    const categoryIdx = headers.indexOf('category') !== -1 ? headers.indexOf('category') : headers.indexOf('categoryid');

    if (nameIdx === -1) {
      errors.push({ row: 1, field: 'headers', message: "CSV header missing required 'name' column." });
      return { validProducts, errors, duplicateCount };
    }

    for (let i = 1; i < lines.length; i++) {
      const cols = lines[i].split(',').map((c) => c.trim().replace(/^["']|["']$/g, ''));
      const row = i + 1;
      const name = cols[nameIdx];
      if (!name) {
        errors.push({ row, field: 'name', message: 'Product name cannot be empty.' });
        continue;
      }

      const sku = skuIdx !== -1 && cols[skuIdx] ? cols[skuIdx] : `ATOMY-CSV-${Date.now()}-${row}`;
      if (existingSkus.has(sku)) {
        duplicateCount++;
        errors.push({ row, field: 'sku', message: `Duplicate SKU '${sku}' found.` });
        continue;
      }

      const rawPrice = priceIdx !== -1 ? cols[priceIdx] : '0';
      const price = parseFloat(rawPrice);
      if (isNaN(price) || price <= 0) {
        errors.push({ row, field: 'price', message: 'Invalid or missing price value.' });
        continue;
      }

      const category = categoryIdx !== -1 && cols[categoryIdx] ? cols[categoryIdx] : 'others';

      validProducts.push({
        externalProductId: sku,
        sku,
        name,
        categoryId: category as any,
        shortDescription: `Authentic Atomy ${name}`,
        description: `Imported listing for ${name}. Review before publishing.`,
        authorizedPrice: price,
        currency: 'INR',
        isImported: true,
        isPublished: false,
        isFeatured: false,
        isBestseller: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
    }
  }

  return { validProducts, errors, duplicateCount };
}
