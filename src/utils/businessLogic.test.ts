import test from 'node:test';
import assert from 'node:assert/strict';
import {
  generateWhatsAppUrl,
  filterAndSortProducts,
  isOfferActive,
  calculateConversionMetrics,
  parseAndValidateProductsImport,
} from './businessLogic.ts';
import type { Product, Offer, AnalyticsEvent, Enquiry, Order } from '../types/index.ts';

test('WhatsApp URL generator formats message according to master prompt template', () => {
  const result = generateWhatsAppUrl({
    whatsappNumber: '+91-9911938324',
    productName: 'Atomy Absolute Skincare Set',
    productId: 'ATOMY-SK-001',
    variantName: 'Full 6-Piece Set',
    quantity: 1,
    referenceId: 'ENQ-TEST-123',
    productPageUrl: 'https://atomy-aarti.in/product/atomy-absolute-skincare-set',
  });

  assert.ok(result.url.startsWith('https://wa.me/919911938324?text='));
  assert.ok(result.rawText.includes('Hello Aarti, I am interested in the following product.'));
  assert.ok(result.rawText.includes('Product: Atomy Absolute Skincare Set'));
  assert.ok(result.rawText.includes('Product ID: ATOMY-SK-001'));
  assert.ok(result.rawText.includes('Variant: Full 6-Piece Set'));
  assert.ok(result.rawText.includes('Quantity: 1'));
  assert.ok(result.rawText.includes('Enquiry Reference: ENQ-TEST-123'));
  assert.ok(result.rawText.includes('Product Page: https://atomy-aarti.in/product/atomy-absolute-skincare-set'));
  assert.ok(result.rawText.includes('Please share the available details and the approved ordering process.'));
});

test('Product filtering matches search query and category correctly', () => {
  const mockProducts: Product[] = [
    {
      id: 'p1',
      externalProductId: 'ext1',
      sku: 'SKU-001',
      slug: 'skincare-cream',
      name: 'Atomy Absolute CellActive Ampoule',
      nameHi: 'ऐटोमी एब्सोल्यूट सेलएक्टिव एम्पुल',
      categoryId: 'skincare',
      categoryName: 'Skincare',
      shortDescription: 'High efficacy anti-aging ampoule',
      shortDescriptionHi: '',
      description: 'CellActive smart delivery technology',
      descriptionHi: '',
      productDetails: {
        koreanQuality: 'Certified',
        gentleFormulation: 'Dermatologically tested',
        skinTypes: 'All',
        volumeOrWeight: '40ml',
        keyIngredients: ['De-Aging Code'],
        howToUse: 'Apply evenly',
        warnings: 'For external use',
        benefits: ['Hydration', 'Elasticity'],
        faq: [],
      },
      authorizedPrice: 3400,
      currency: 'INR',
      images: ['/img1.jpg'],
      thumbnail: '/img1.jpg',
      isImported: false,
      isPublished: true,
      isFeatured: true,
      isBestseller: true,
      featuredOrder: 1,
      displayOrder: 1,
      createdAt: '2026-01-01T00:00:00Z',
      updatedAt: '2026-01-01T00:00:00Z',
    },
    {
      id: 'p2',
      externalProductId: 'ext2',
      sku: 'SKU-002',
      slug: 'hemohim',
      name: 'Atomy HemoHIM',
      nameHi: 'ऐटोमी हेमोहिम',
      categoryId: 'health',
      categoryName: 'Health',
      shortDescription: 'Immune support functional food',
      shortDescriptionHi: '',
      description: 'Angelica gigas extract',
      descriptionHi: '',
      productDetails: {
        koreanQuality: 'Certified',
        gentleFormulation: 'Herbal',
        skinTypes: 'N/A',
        volumeOrWeight: '60 packets',
        keyIngredients: ['Angelica Gigas'],
        howToUse: 'Take 2 packets daily',
        warnings: 'Consult physician if pregnant',
        benefits: ['Immunity'],
        faq: [],
      },
      authorizedPrice: 8500,
      currency: 'INR',
      images: ['/img2.jpg'],
      thumbnail: '/img2.jpg',
      isImported: false,
      isPublished: true,
      isFeatured: true,
      isBestseller: true,
      featuredOrder: 2,
      displayOrder: 2,
      createdAt: '2026-01-02T00:00:00Z',
      updatedAt: '2026-01-02T00:00:00Z',
    },
  ];

  // Category filter
  const healthProducts = filterAndSortProducts(mockProducts, { categoryId: 'health' });
  assert.equal(healthProducts.length, 1);
  assert.equal(healthProducts[0].name, 'Atomy HemoHIM');

  // Search filter
  const searchResults = filterAndSortProducts(mockProducts, { searchQuery: 'Ampoule' });
  assert.equal(searchResults.length, 1);
  assert.equal(searchResults[0].sku, 'SKU-001');

  // Price range filter
  const under5000 = filterAndSortProducts(mockProducts, { priceRange: '2000-5000' });
  assert.equal(under5000.length, 1);
  assert.equal(under5000[0].authorizedPrice, 3400);
});

test('Offer active check correctly respects start and end dates', () => {
  const activeOffer: Offer = {
    id: 'off-1',
    productId: 'p1',
    productName: 'Atomy Absolute Skincare Set',
    title: 'Festive Wellness Bundle',
    titleHi: 'उत्सव वेलनेस बंडल',
    description: 'Exclusive bundle with extra sample travel kit',
    descriptionHi: '',
    authorizedOriginalPrice: 16000,
    authorizedOfferPrice: 14500,
    startAt: '2026-10-01T00:00:00Z',
    endAt: '2026-10-31T23:59:59Z',
    isPublished: true,
    bannerTag: 'Limited Seasonal Offer',
  };

  const expiredOffer: Offer = {
    ...activeOffer,
    id: 'off-2',
    endAt: '2026-10-10T00:00:00Z',
  };

  const testDate = new Date('2026-10-15T12:00:00Z');
  assert.equal(isOfferActive(activeOffer, testDate), true);
  assert.equal(isOfferActive(expiredOffer, testDate), false);
});

test('Conversion metrics handle non-zero and zero divisions safely', () => {
  const emptyMetrics = calculateConversionMetrics([], [], []);
  assert.equal(emptyMetrics.productViews, 0);
  assert.equal(emptyMetrics.enquiryClickRate, 0);
  assert.equal(emptyMetrics.enquiryConversionRate, 0);

  const mockEvents: AnalyticsEvent[] = [
    { id: '1', eventType: 'product_view', pagePath: '/product/p1', sessionId: 's1', createdAt: '' },
    { id: '2', eventType: 'product_view', pagePath: '/product/p1', sessionId: 's2', createdAt: '' },
    { id: '3', eventType: 'whatsapp_enquiry_click', pagePath: '/product/p1', sessionId: 's1', createdAt: '' },
  ];

  const mockEnquiries: Enquiry[] = [
    {
      id: 'e1',
      referenceCode: 'ENQ-001',
      customerName: 'Pooja Sharma',
      customerContact: '+919876543210',
      enquiryType: 'product',
      channel: 'whatsapp',
      sourcePage: '/product/p1',
      status: 'converted',
      notes: 'Confirmed 1 absolute skincare set',
      createdAt: '',
      updatedAt: '',
    },
  ];

  const mockOrders: Order[] = [
    {
      id: 'o1',
      orderReference: 'ORD-001',
      enquiryId: 'e1',
      customerName: 'Pooja Sharma',
      customerPhone: '+919876543210',
      items: [],
      recordedTotal: 14500,
      currency: 'INR',
      status: 'confirmed',
      confirmationSource: 'WhatsApp confirmed',
      orderDate: '2026-10-15',
      notes: '',
      createdAt: '',
      updatedAt: '',
    },
  ];

  const metrics = calculateConversionMetrics(mockEvents, mockEnquiries, mockOrders);
  assert.equal(metrics.productViews, 2);
  assert.equal(metrics.whatsappClicks, 1);
  assert.equal(metrics.enquiryClickRate, 50); // 1 / 2 * 100
  assert.equal(metrics.confirmedOrdersCount, 1);
  assert.equal(metrics.enquiryConversionRate, 100); // 1 / 1 * 100
  assert.equal(metrics.totalConfirmedRevenue, 14500);
});

test('Product import parses CSV and rejects duplicates and invalid prices', () => {
  const existingSkus = new Set(['ATOMY-EXISTING-01']);
  const csvContent = `name,sku,price,category
Atomy Evening Cleanser,ATOMY-EV-01,950,skincare
Existing Item,ATOMY-EXISTING-01,1200,skincare
Bad Price Item,ATOMY-BAD-01,invalid,skincare`;

  const result = parseAndValidateProductsImport(csvContent, 'csv', existingSkus);

  assert.equal(result.validProducts.length, 1);
  assert.equal(result.validProducts[0].name, 'Atomy Evening Cleanser');
  assert.equal(result.validProducts[0].isPublished, false); // New imports stay unpublished
  assert.equal(result.duplicateCount, 1);
  assert.equal(result.errors.length, 2); // 1 duplicate + 1 invalid price
});
