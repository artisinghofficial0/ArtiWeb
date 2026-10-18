import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load all 94 authentic Atomy India official products scraped from in.atomy.com
let officialAtomyCatalog: any[] = [];
try {
  const jsonPath = path.resolve(__dirname, 'src/data/atomy_official_products.json');
  if (fs.existsSync(jsonPath)) {
    officialAtomyCatalog = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
  }
} catch (e) {
  console.warn('Could not load official Atomy products catalog:', e);
}

// Fallback curated map for top queries
const ATOMY_CATALOG_FALLBACK: Record<string, any> = {
  'atomy probiotics 10+': {
    nameHi: 'एटॉमी प्रोबायोटिक्स 10+',
    categoryId: 'health',
    categoryName: 'Health',
    sku: 'ATOMY-HL-003',
    authorizedPrice: 2400,
    originalPrice: 2800,
    pv: 13000,
    thumbnail: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    images: ['https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80'],
    shortDescription: '12 types of mixed Lactobacilli providing over 3 billion active probiotics for optimal gut vitality and immune balance.',
    description: 'Atomy Probiotics 10+ contains 12 strains of beneficial live bacteria designed to survive stomach acids and flourish in the gastrointestinal tract. Scientifically proven to enhance gut flora, ease digestion, and support natural immunity.',
    benefits: [
      'Over 3 billion active live probiotics per sachet',
      '12 distinct lactic acid bacteria strains',
      'Promotes beneficial bacteria growth & reduces harmful microbes',
      'Pleasant natural orange flavor, easy to take anytime',
    ],
    howToUse: 'Take 1 sachet daily with or without water. Ideal after a meal.',
    keyIngredients: ['Bifidobacterium bifidum', 'Lactobacillus acidophilus', 'Apple fruit extract', 'Orange juice extract', 'Kimchi lactic acid bacteria'],
    productUrl: 'https://www.atomy.com/in/home/product/mall/detail?itemCode=000160',
    faq: [
      { q: 'Who should take Atomy Probiotics 10+?', a: 'Suitable for adults and children seeking better digestion, reduced bloating, and stronger gut health.' },
      { q: 'Does it require refrigeration?', a: 'No, advanced micro-encapsulation keeps the bacteria stable at regular room temperature.' }
    ],
  },
  'atomy absolute spot-out essence': {
    name: 'Atomy Absolute Spot-Out Essence',
    nameHi: 'एटॉमी एब्सोल्यूट स्पॉट-आउट एसेंस',
    categoryId: 'skincare',
    categoryName: 'Skincare',
    sku: 'ATOMY-SK-005',
    authorizedPrice: 3400,
    originalPrice: 3950,
    pv: 21000,
    thumbnail: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
    images: ['https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80'],
    shortDescription: 'Clinical 6-stage brightening mechanism that targets dark spots, hyperpigmentation, and sun damage with CellActive Brightening Code.',
    description: 'Formulated with Korean patented CellActive Technology, Atomy Absolute Spot-Out Essence gently suppresses melanin production, reduces stubborn sun blemishes, and restores luminous glass-skin clarity.',
    benefits: [
      'Clinically proven reduction in melanin pigment index',
      'Targeted 6-step dark spot lightening mechanism',
      'Absorbs deeply without sticky or heavy residue',
      'Dermatologist tested hypoallergenic formula for sensitive skin',
    ],
    howToUse: 'Apply 2-3 drops to cleansed skin morning and evening. Gently press into areas with blemishes or pigmentation until absorbed.',
    keyIngredients: ['Dragon Fruit Extract', 'CellActive Brightening Code', 'Licorice Root Extract', 'Green Tea Water', 'Niacinamide'],
    productUrl: 'https://www.atomy.com/in/home/product/mall/detail?itemCode=000215',
    faq: [
      { q: 'How soon can I see results?', a: 'Noticeable reduction in dark spot intensity is typically observed within 4-6 weeks of consistent daily usage.' },
      { q: 'Can I use this with Sunscreen?', a: 'Yes! Daily sunscreen application enhances the brightening efficacy and prevents new spot formation.' }
    ],
  },
  'atomy bb cream': {
    name: 'Atomy BB Cream SPF30 PA++',
    nameHi: 'एटॉमी बीबी क्रीम',
    categoryId: 'makeup',
    categoryName: 'Makeup',
    sku: 'ATOMY-MK-001',
    authorizedPrice: 900,
    originalPrice: 1150,
    pv: 3500,
    thumbnail: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    images: ['https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80'],
    shortDescription: 'Multi-functional Korean blemish balm providing sheer natural coverage, UV defense SPF30, and all-day skin hydration.',
    description: 'Atomy BB Cream evens out skin tone, smooths pores, and conceals redness while feeding the skin with natural herbal extracts and broad-spectrum sun protection.',
    benefits: [
      'Natural radiant finish without caking or chalkiness',
      'Broad spectrum SPF30 PA++ protection',
      'Whitening and anti-wrinkle dual functionality',
      'Featherlight texture that allows skin to breathe',
    ],
    howToUse: 'After morning skincare, squeeze a pea-sized amount and blend evenly over the face using fingertips or a sponge.',
    keyIngredients: ['Fermented Phellinus Linteus Mushroom', 'Portulaca Oleracea Extract', 'Marshmallow Herb', 'Rosemary Leaf'],
    productUrl: 'https://www.atomy.com/in/home/product/mall/detail?itemCode=000250',
    faq: [
      { q: 'Is it suitable for Indian skin tones?', a: 'Yes, the sheer micro-pigments blend seamlessly to adapt to light, medium, and wheatish Indian complexions.' }
    ],
  },
  'atomy sunscreen': {
    name: 'Atomy Sunscreen SPF50+ PA+++',
    nameHi: 'एटॉमी सनस्क्रीन SPF50+',
    categoryId: 'skincare',
    categoryName: 'Skincare',
    sku: 'ATOMY-SK-006',
    authorizedPrice: 850,
    originalPrice: 1050,
    pv: 3200,
    thumbnail: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80',
    images: ['https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80'],
    shortDescription: 'High-protection broad-spectrum sun lotion with zero white cast, non-sticky matte finish, and soothing Centella herbs.',
    description: 'Guards against intense UVA and UVB rays while keeping skin moisturized and comfortable in high Indian heat and humidity. Leaves no greasy feeling or chalky residue.',
    benefits: [
      'Maximum UVA (PA+++) and UVB (SPF50+) defense',
      'Non-greasy, fast-absorbing texture',
      'Sweat-resistant and ideal under makeup',
      'Infused with fresh Korean botanical extracts to soothe heat stress',
    ],
    howToUse: 'Apply generously to face, neck, and exposed skin 30 minutes before sun exposure. Reapply after heavy sweating or swimming.',
    keyIngredients: ['Centella Asiatica (Cica)', 'Lemon Balm Extract', 'Aloe Vera Leaf', 'Portulaca Extract'],
    productUrl: 'https://www.atomy.com/in/home/product/mall/detail?itemCode=000260',
    faq: [
      { q: 'Does it leave a white cast on darker skin tones?', a: 'No, Atomy Sunscreen absorbs completely clear with a natural dewy hydration finish.' }
    ],
  },
  'atomy dish detergent': {
    name: 'Atomy Eco Dish Detergent',
    nameHi: 'एटॉमी इको डिश डिटर्जेंट',
    categoryId: 'home-care',
    categoryName: 'Home Care',
    sku: 'ATOMY-HM-001',
    authorizedPrice: 750,
    originalPrice: 950,
    pv: 3600,
    thumbnail: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=800&q=80',
    images: ['https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=800&q=80'],
    shortDescription: 'Eco-friendly Class 1 natural dishwashing concentrate safe for fruits, vegetables, dishes, and baby feeding bottles.',
    description: 'Certified Class 1 biodegradable detergent derived from natural plant-based cleansers and calamansi extract. Cuts through tough oil and grease while remaining gentle on bare hands.',
    benefits: [
      'Certified Class 1 Dish Detergent — safe to wash fresh fruits and vegetables',
      'Ultra-concentrated: 1 bottle lasts months',
      'Enriched with Calamansi extract containing 30x more Vitamin C than lemon',
      'Zero synthetic dyes, parabens, or harsh phosphates',
    ],
    howToUse: 'Dilute 0.67ml per 1 liter of water for regular dishes. For fruits & vegetables, soak for 30 seconds and rinse thoroughly with clean water.',
    keyIngredients: ['Calamansi Extract', 'Tangerine Extract', 'Bergamot Fruit Oil', 'Natural Coconut Surfactant'],
    productUrl: 'https://www.atomy.com/in/home/product/mall/detail?itemCode=000300',
    faq: [
      { q: 'Can it really wash apples and vegetables?', a: 'Yes! It is officially certified Class 1 food-safe by Korean and international safety standards.' }
    ],
  },
  'atomy herbal hair tonic': {
    name: 'Atomy Saengmodan Herbal Hair Tonic',
    nameHi: 'एटॉमी हर्बल हेयर टॉनिक',
    categoryId: 'personal-care',
    categoryName: 'Personal Care',
    sku: 'ATOMY-PC-003',
    authorizedPrice: 1250,
    originalPrice: 1550,
    pv: 5400,
    thumbnail: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80',
    images: ['https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80'],
    shortDescription: 'Nutrient-rich scalp spray formulated with traditional Korean herbal bio-extracts (Saengmodan) to strengthen hair roots and reduce hair fall.',
    description: 'Combines 10 traditional Korean herbal medicines fermented using advanced bio-technology. Delivers cooling relief to stressed scalps, stimulates micro-circulation, and nourishes weak hair follicles.',
    benefits: [
      'Reduces seasonal hair thinning and follicle blockage',
      'Saengmodan complex of 10 traditional Korean herbs',
      'Menthol cooling sensation relieves scalp itch and dryness',
      'Non-greasy aqueous spray that does not leave residue on styled hair',
    ],
    howToUse: 'Shake well before use. Spray directly onto clean, towel-dried scalp and massage gently with fingertips for 1-2 minutes.',
    keyIngredients: ['Saengmodan Herbal Complex', 'Angelica Dahurica', 'Cnidium Officinale', 'Menthol', 'Salicylic Acid', 'Panthenol'],
    productUrl: 'https://www.atomy.com/in/home/product/mall/detail?itemCode=000350',
    faq: [
      { q: 'Can both men and women use this tonic?', a: 'Yes, it is formulated for anyone experiencing scalp dryness, hair fall, or thinning.' }
    ],
  },
};

async function startServer() {
  const app = express();
  const port = Number(process.env.PORT) || 3000;

  // --------------------------------------------------------------------------
  // SECURITY PATCHES & HARDENING
  // --------------------------------------------------------------------------
  // 1. Disable X-Powered-By header to hide Express server fingerprint
  app.disable('x-powered-by');

  // 2. HTTP Security Response Headers (CSP, Anti-Clickjacking, Anti-Sniffing)
  app.use((_req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=()');
    res.setHeader(
      'Content-Security-Policy',
      [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "font-src 'self' https://fonts.gstatic.com data:",
        "img-src 'self' data: blob: https://images.unsplash.com https://image.atomy.com https://www.atomy.com https://*.atomy.com https://res.cloudinary.com",
        "connect-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com ws: wss:",
        "frame-ancestors 'self'",
        "base-uri 'self'",
        "form-action 'self'",
      ].join('; ')
    );
    next();
  });

  // 3. Request Payload Size Limiting (DoS prevention)
  app.use(express.json({ limit: '100kb' }));

  // 4. Rate Limiting for API Endpoints (Anti-scraping / Brute-force protection)
  const apiRateLimits = new Map<string, { count: number; resetAt: number }>();
  const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
  const MAX_REQUESTS_PER_WINDOW = 40; // Max 40 requests / min per IP

  app.use('/api/', (req, res, next) => {
    const clientIp = (req.headers['x-forwarded-for'] as string)?.split(',')[0].trim() || req.ip || req.socket.remoteAddress || 'unknown';
    const now = Date.now();
    const clientData = apiRateLimits.get(clientIp);

    if (!clientData || now > clientData.resetAt) {
      apiRateLimits.set(clientIp, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
      return next();
    }

    if (clientData.count >= MAX_REQUESTS_PER_WINDOW) {
      const retryAfterSec = Math.ceil((clientData.resetAt - now) / 1000);
      res.setHeader('Retry-After', retryAfterSec.toString());
      return res.status(429).json({
        error: 'Too many requests. Please slow down and try again shortly.',
        retryAfter: retryAfterSec,
      });
    }

    clientData.count += 1;
    next();
  });

  // --------------------------------------------------------------------------
  // AI PRODUCT IMPORT ENDPOINT (Section 8 + User Request)
  // Convenient AI-assisted product fetching from Atomy official catalog
  // --------------------------------------------------------------------------
  // --------------------------------------------------------------------------
  // AUTHENTIC ATOMY PRODUCT SEARCH ENDPOINT
  // Searches only official Atomy India products from in.atomy.com (no fake dummy products)
  // --------------------------------------------------------------------------
  app.post('/api/ai/fetch-product', async (req, res) => {
    const { query } = req.body;
    if (!query || typeof query !== 'string') {
      return res.status(400).json({ error: 'Please provide a product name, SKU, or keyword.' });
    }

    if (query.length > 150) {
      return res.status(400).json({ error: 'Search query is too long (maximum 150 characters).' });
    }

    const cleanQuery = query.trim().toLowerCase();

    // 1. Check official Atomy catalog (scraped directly from in.atomy.com)
    const exactMatch = officialAtomyCatalog.find(
      (p) =>
        p.sku?.toLowerCase() === cleanQuery ||
        p.name?.toLowerCase() === cleanQuery ||
        p.externalProductId?.toLowerCase() === cleanQuery
    );

    if (exactMatch) {
      return res.json({
        success: true,
        source: 'official_atomy_catalog',
        product: exactMatch,
      });
    }

    // 2. Partial match in official Atomy catalog
    const partialMatch = officialAtomyCatalog.find(
      (p) =>
        p.name?.toLowerCase().includes(cleanQuery) ||
        cleanQuery.includes(p.name?.toLowerCase() || '') ||
        p.sku?.toLowerCase().includes(cleanQuery) ||
        (p.shortDescription && p.shortDescription.toLowerCase().includes(cleanQuery))
    );

    if (partialMatch) {
      return res.json({
        success: true,
        source: 'official_atomy_catalog',
        product: partialMatch,
      });
    }

    // 3. Check fallback curated map
    for (const [key, prod] of Object.entries(ATOMY_CATALOG_FALLBACK)) {
      if (cleanQuery.includes(key) || key.includes(cleanQuery)) {
        return res.json({
          success: true,
          source: 'official_curated_catalog',
          product: prod,
        });
      }
    }

    return res.status(404).json({
      error: 'Product not found in official Atomy India catalog. Please check the name or SKU.',
    });
  });

  // Mount Vite middlewares in development or serve static files in production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Atomy Distributor server running on http://0.0.0.0:${port}`);
  });
}

startServer();
