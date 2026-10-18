import { Product, Category, Offer, SiteSettings, Enquiry, Order } from '../types/index.ts';

import aartiPortrait from '../assets/images/aarti_portrait.jpg';
import skincareHero from '../assets/images/atomy_skincare_hero.jpg';
import hemohimImg from '../assets/images/atomy_hemohim.jpg';
import eveningCareImg from '../assets/images/atomy_evening_care.jpg';
import toothpasteImg from '../assets/images/atomy_toothpaste.jpg';
import vitaminCImg from '../assets/images/atomy_vitaminc.jpg';
import shampooImg from '../assets/images/atomy_shampoo.jpg';

export { aartiPortrait, skincareHero, hemohimImg, eveningCareImg, toothpasteImg, vitaminCImg, shampooImg };

export const INITIAL_SITE_SETTINGS: SiteSettings = {
  whatsappNumber: '919911938324', // Original distributor WhatsApp (Aarti Singh: +91-9911938324)
  displayPhone: '+91-9911938324',
  email: 'aartisinghofficial0@gmail.com',
  distributorName: 'Aarti Singh',
  businessName: 'Atomy Independent Distributor',
  address: 'Apex Our Homes, Sector 37-C, Gurgaon, Haryana, India',
  supportHours: 'Monday - Saturday: 9:00 AM - 7:00 PM IST',
  distributorDisclosure:
    'Aarti Singh is an Independent Atomy Distributor (India). This website is an independent distributor showcase and enquiry portal and is not the official corporate website of Atomy India. All trademarks, logos, and brand names are the property of Atomy Co., Ltd.',
  defaultLanguage: 'en',
};

export const INITIAL_CATEGORIES: Category[] = [
  {
    id: 'skincare',
    name: 'Skincare',
    nameHi: 'स्किनकेयर',
    slug: 'skincare',
    description: 'Radiant & healthy skin powered by cutting-edge Korean biotechnology.',
    descriptionHi: 'उन्नत कोरियाई बायोटेक्नोलॉजी से चमकदार और स्वस्थ त्वचा।',
    image: 'https://image.atomy.com/IN/goods/D00207/D00207_01.jpg',
    productCount: 44,
    displayOrder: 1,
    isPublished: true,
  },
  {
    id: 'health',
    name: 'Health',
    nameHi: 'हेल्थ व वेलनेस',
    slug: 'health',
    description: 'Daily nutrition, vitality, and immune defense for your family.',
    descriptionHi: 'आपके परिवार के लिए दैनिक पोषण, ऊर्जा और रोग प्रतिरोधक क्षमता।',
    image: 'https://image.atomy.com/IN/goods/D00101/D00101_01.jpg',
    productCount: 15,
    displayOrder: 2,
    isPublished: true,
  },
  {
    id: 'personal-care',
    name: 'Personal Care',
    nameHi: 'पर्सनल केयर',
    slug: 'personal-care',
    description: 'For a cleaner, healthier you with natural herbal formulations.',
    descriptionHi: 'प्राकृतिक हर्बल फ़ार्मुलों के साथ स्वच्छ और स्वस्थ दैनिक देखभाल।',
    image: 'https://image.atomy.com/IN/goods/D00521/D00521_01.jpg',
    productCount: 19,
    displayOrder: 3,
    isPublished: true,
  },
  {
    id: 'makeup',
    name: 'Makeup',
    nameHi: 'मेकअप',
    slug: 'makeup',
    description: 'Natural Korean aesthetic finishes and skin-nourishing cosmetics.',
    descriptionHi: 'प्राकृतिक कोरियाई सुंदरता और त्वचा-पोषण मेकअप।',
    image: 'https://image.atomy.com/IN/goods/D00281/D00281_01.jpg',
    productCount: 5,
    displayOrder: 4,
    isPublished: true,
  },
  {
    id: 'home-care',
    name: 'Home Care',
    nameHi: 'होम केयर',
    slug: 'home-care',
    description: 'Eco-friendly and natural everyday household solutions.',
    descriptionHi: 'पर्यावरण-अनुकूल और प्राकृतिक घरेलू सफाई समाधान।',
    image: 'https://image.atomy.com/IN/goods/D00601/D00601_01.jpg',
    productCount: 3,
    displayOrder: 5,
    isPublished: true,
  },
  {
    id: 'others',
    name: 'Others',
    nameHi: 'अन्य उत्पाद',
    slug: 'others',
    description: 'Special seasonal wellness accessories and lifestyle collections.',
    descriptionHi: 'विशेष मौसमी वेलनेस एक्सेसरीज़ और लाइफस्टाइल उत्पाद।',
    image: 'https://image.atomy.com/IN/goods/D00975/D00975_01.jpg',
    productCount: 8,
    displayOrder: 6,
    isPublished: true,
  },
];

export const INITIAL_PRODUCTS: Product[] = [
  {
    "id": "atomy-d00768",
    "externalProductId": "D00768",
    "sku": "D00768",
    "slug": "a-c-expert-system-set-d00768",
    "name": "A.C. Expert System Set",
    "nameHi": "",
    "categoryId": "skincare",
    "categoryName": "Skincare",
    "shortDescription": "Atomy A.C. Expert System is a 4-step acne care solution with patented ingredients to control sebum and purify pores, perfect for sensitive skin and breakouts.",
    "shortDescriptionHi": "",
    "description": "Atomy A.C. Expert System is a 4-step acne care solution with patented ingredients to control sebum and purify pores, perfect for sensitive skin and breakouts.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "900 GRM (230*180*60mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy A.C. Expert System Set?",
          "a": "Yes, 100% genuine Atomy A.C. Expert System Set sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 6300,
    "originalPrice": 7244,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00768/D00768_01.jpg",
      "https://image.atomy.com/IN/goods/D00768/D00768_02.jpg",
      "https://image.atomy.com/IN/goods/D00768/D00768_03.jpg",
      "https://image.atomy.com/IN/goods/D00768/D00768_04.jpg",
      "https://image.atomy.com/IN/goods/D00768/D00768_05.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00768/D00768_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 24,
    "pv": 22050,
    "productUrl": "https://in.atomy.com/product/D00768",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d90178",
    "externalProductId": "D90178",
    "sku": "D90178",
    "slug": "atomy-100-pure-spirulina-india-d90178",
    "name": "ATOMY 100% PURE* SPIRULINA (India)",
    "nameHi": "",
    "categoryId": "health",
    "categoryName": "Health",
    "shortDescription": "Atomy 100% Pure Spirulina is a premium superfood with a 95% absorption rate, providing 60 nutrients like Phycocyanin for antioxidant and immune support.",
    "shortDescriptionHi": "",
    "description": "Atomy 100% Pure Spirulina is a premium superfood with a 95% absorption rate, providing 60 nutrients like Phycocyanin for antioxidant and immune support.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "50 GRM (1*1*1mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy ATOMY 100% PURE* SPIRULINA (India)?",
          "a": "Yes, 100% genuine Atomy ATOMY 100% PURE* SPIRULINA (India) sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 599,
    "originalPrice": 688,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D90178/org/881/260422000051881.jpeg",
      "https://image.atomy.com/IN/goods/D90178/D90178_01.jpg",
      "https://image.atomy.com/IN/goods/D90178/D90178_02.jpg",
      "https://image.atomy.com/IN/goods/D90178/org/880/260422000051880.jpeg",
      "https://image.atomy.com/IN/goods/D90178/editor/178/detail_d90178_0001.png"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D90178/org/881/260422000051881.jpeg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": true,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 14,
    "pv": 2096,
    "productUrl": "https://in.atomy.com/product/D90178",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d02479",
    "externalProductId": "D02479",
    "sku": "D02479",
    "slug": "atomy-dna-english-d02479",
    "name": "ATOMY DNA (ENGLISH)",
    "nameHi": "",
    "categoryId": "others",
    "categoryName": "Others",
    "shortDescription": "Discover the management philosophy and success secrets of Atomy, a global leader with 15 million members, built on the principles of Absolute Quality and Price.",
    "shortDescriptionHi": "",
    "description": "Discover the management philosophy and success secrets of Atomy, a global leader with 15 million members, built on the principles of Absolute Quality and Price.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "Official Standard Pack",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy ATOMY DNA (ENGLISH)?",
          "a": "Yes, 100% genuine Atomy ATOMY DNA (ENGLISH) sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 850,
    "originalPrice": 977,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D02479/org/971/260424000051971.jpeg",
      "https://image.atomy.com/IN/goods/D02479/org/972/260424000051972.jpeg",
      "https://image.atomy.com/IN/goods/D02479/org/479/thumb_d02479_0002.jpg",
      "https://image.atomy.com/IN/goods/D02479/editor/479/detail_d02479_0001.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D02479/org/971/260424000051971.jpeg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 24,
    "pv": 2975,
    "productUrl": "https://in.atomy.com/product/D02479",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00227",
    "externalProductId": "D00227",
    "sku": "D00227",
    "slug": "absolute-ampoule-d00227",
    "name": "Absolute Ampoule",
    "nameHi": "",
    "categoryId": "skincare",
    "categoryName": "Skincare",
    "shortDescription": "Atomy Absolute CellActive Skincare Set uses CellActive Technology for anti-aging. It targets wrinkles and lifting for a firm, radiant, and hydrated complexion.",
    "shortDescriptionHi": "",
    "description": "Atomy Absolute CellActive Skincare Set uses CellActive Technology for anti-aging. It targets wrinkles and lifting for a firm, radiant, and hydrated complexion.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "180 GRM (120*50*50mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Absolute Ampoule?",
          "a": "Yes, 100% genuine Atomy Absolute Ampoule sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 4500,
    "originalPrice": 5175,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00227/D00227_01.jpg",
      "https://image.atomy.com/IN/goods/D00227/D00227_02.jpg",
      "https://image.atomy.com/IN/goods/D00227/D00227_03.jpg",
      "https://image.atomy.com/IN/goods/D00227/D00227_04.jpg",
      "https://image.atomy.com/IN/goods/D00227/D00227_00.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00227/D00227_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": true,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 1,
    "pv": 15750,
    "productUrl": "https://in.atomy.com/product/D00227",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00257",
    "externalProductId": "D00257",
    "sku": "D00257",
    "slug": "absolute-eye-complex-d00257",
    "name": "Absolute Eye-Complex",
    "nameHi": "",
    "categoryId": "skincare",
    "categoryName": "Skincare",
    "shortDescription": "Atomy Absolute CellActive Skincare is a premium anti-aging set. It delivers lifting, wrinkle care, and skin regeneration for those seeking firm, youthful skin.",
    "shortDescriptionHi": "",
    "description": "Atomy Absolute CellActive Skincare is a premium anti-aging set. It delivers lifting, wrinkle care, and skin regeneration for those seeking firm, youthful skin.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "110 GRM (64*62*57mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Absolute Eye-Complex?",
          "a": "Yes, 100% genuine Atomy Absolute Eye-Complex sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 3700,
    "originalPrice": 4255,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00257/D00257_01.jpg",
      "https://image.atomy.com/IN/goods/D00257/D00257_02.jpg",
      "https://image.atomy.com/IN/goods/D00257/D00257_03.jpg",
      "https://image.atomy.com/IN/goods/D00257/D00257_04.jpg",
      "https://image.atomy.com/IN/goods/D00257/D00257_00.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00257/D00257_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 2,
    "pv": 12950,
    "productUrl": "https://in.atomy.com/product/D00257",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00247",
    "externalProductId": "D00247",
    "sku": "D00247",
    "slug": "absolute-lotion-d00247",
    "name": "Absolute Lotion",
    "nameHi": "",
    "categoryId": "skincare",
    "categoryName": "Skincare",
    "shortDescription": "Atomy Absolute CellActive Skincare is a premium anti-aging set with plant-derived EGF and Smart Capsulation to reduce wrinkles, brighten, and firm the skin.",
    "shortDescriptionHi": "",
    "description": "Atomy Absolute CellActive Skincare is a premium anti-aging set with plant-derived EGF and Smart Capsulation to reduce wrinkles, brighten, and firm the skin.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "270 GRM (189*55*55mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Absolute Lotion?",
          "a": "Yes, 100% genuine Atomy Absolute Lotion sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 3400,
    "originalPrice": 3909,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00247/D00247_01.jpg",
      "https://image.atomy.com/IN/goods/D00247/D00247_02.jpg",
      "https://image.atomy.com/IN/goods/D00247/D00247_03.jpg",
      "https://image.atomy.com/IN/goods/D00247/D00247_04.jpg",
      "https://image.atomy.com/IN/goods/D00247/D00247_00.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00247/D00247_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 24,
    "pv": 11900,
    "productUrl": "https://in.atomy.com/product/D00247",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00267",
    "externalProductId": "D00267",
    "sku": "D00267",
    "slug": "absolute-nutrition-cream-d00267",
    "name": "Absolute Nutrition Cream",
    "nameHi": "",
    "categoryId": "skincare",
    "categoryName": "Skincare",
    "shortDescription": "Atomy Absolute CellActive Skincare Set provides premium anti-aging care with CellActive Code and Smart Capsulation to enhance skin elasticity and radiance.",
    "shortDescriptionHi": "",
    "description": "Atomy Absolute CellActive Skincare Set provides premium anti-aging care with CellActive Code and Smart Capsulation to enhance skin elasticity and radiance.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "130 GRM (70*68*61mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Absolute Nutrition Cream?",
          "a": "Yes, 100% genuine Atomy Absolute Nutrition Cream sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 3300,
    "originalPrice": 3794,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00267/D00267_01.jpg",
      "https://image.atomy.com/IN/goods/D00267/D00267_02.jpg",
      "https://image.atomy.com/IN/goods/D00267/D00267_03.jpg",
      "https://image.atomy.com/IN/goods/D00267/D00267_04.jpg",
      "https://image.atomy.com/IN/goods/D00267/D00267_00.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00267/D00267_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 2,
    "pv": 11550,
    "productUrl": "https://in.atomy.com/product/D00267",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00237",
    "externalProductId": "D00237",
    "sku": "D00237",
    "slug": "absolute-serum-d00237",
    "name": "Absolute Serum",
    "nameHi": "",
    "categoryId": "skincare",
    "categoryName": "Skincare",
    "shortDescription": "Atomy Absolute CellActive Serum provides intensive anti-aging care using a patented nutrient delivery system to improve skin density and elasticity for firm skin.",
    "shortDescriptionHi": "",
    "description": "Atomy Absolute CellActive Serum provides intensive anti-aging care using a patented nutrient delivery system to improve skin density and elasticity for firm skin.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "130 GRM (145*40*45mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Absolute Serum?",
          "a": "Yes, 100% genuine Atomy Absolute Serum sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 3700,
    "originalPrice": 4255,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00237/D00237_01.jpg",
      "https://image.atomy.com/IN/goods/D00237/D00237_02.jpg",
      "https://image.atomy.com/IN/goods/D00237/D00237_03.jpg",
      "https://image.atomy.com/IN/goods/D00237/D00237_04.jpg",
      "https://image.atomy.com/IN/goods/D00237/D00237_00.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00237/D00237_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 24,
    "pv": 12950,
    "productUrl": "https://in.atomy.com/product/D00237",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00207",
    "externalProductId": "D00207",
    "sku": "D00207",
    "slug": "absolute-skincare-set-d00207",
    "name": "Absolute Skincare Set",
    "nameHi": "",
    "categoryId": "skincare",
    "categoryName": "Skincare",
    "shortDescription": "The Atomy Absolute CellActive Skincare Set features advanced CellActive technology and botanical EGF to provide intensive anti-aging, wrinkle reduction, and brightening.",
    "shortDescriptionHi": "",
    "description": "The Atomy Absolute CellActive Skincare Set features advanced CellActive technology and botanical EGF to provide intensive anti-aging, wrinkle reduction, and brightening.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "2690 GRM (330*210*75mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Absolute Skincare Set?",
          "a": "Yes, 100% genuine Atomy Absolute Skincare Set sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 20000,
    "originalPrice": 23000,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00207/D00207_01.jpg",
      "https://image.atomy.com/IN/goods/D00207/D00207_02.jpg",
      "https://image.atomy.com/IN/goods/D00207/D00207_03.jpg",
      "https://image.atomy.com/IN/goods/D00207/D00207_04.jpg",
      "https://image.atomy.com/IN/goods/D00207/D00207_05.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00207/D00207_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 3,
    "pv": 70000,
    "productUrl": "https://in.atomy.com/product/D00207",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00217",
    "externalProductId": "D00217",
    "sku": "D00217",
    "slug": "absolute-toner-d00217",
    "name": "Absolute Toner",
    "nameHi": "",
    "categoryId": "skincare",
    "categoryName": "Skincare",
    "shortDescription": "Atomy Absolute CellActive Toner uses advanced CellActive technology and Botanical EGF to improve elasticity, brighten dull skin, and refine texture effectively.",
    "shortDescriptionHi": "",
    "description": "Atomy Absolute CellActive Toner uses advanced CellActive technology and Botanical EGF to improve elasticity, brighten dull skin, and refine texture effectively.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "280 GRM (189*55*55mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Absolute Toner?",
          "a": "Yes, 100% genuine Atomy Absolute Toner sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 3300,
    "originalPrice": 3794,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00217/D00217_01.jpg",
      "https://image.atomy.com/IN/goods/D00217/D00217_02.jpg",
      "https://image.atomy.com/IN/goods/D00217/D00217_03.jpg",
      "https://image.atomy.com/IN/goods/D00217/D00217_04.jpg",
      "https://image.atomy.com/IN/goods/D00217/D00217_00.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00217/D00217_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 24,
    "pv": 11550,
    "productUrl": "https://in.atomy.com/product/D00217",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d04704",
    "externalProductId": "D04704",
    "sku": "D04704",
    "slug": "adelica-concealer-beige-d04704",
    "name": "Adelica Concealer - Beige",
    "nameHi": "",
    "categoryId": "skincare",
    "categoryName": "Skincare",
    "shortDescription": "Atomy Adelica Concealer No. 23 Beige provides flawless coverage and UV protection. Silky formula with Niacinamide and Hyaluronic Acid, ideal for sensitive skin.",
    "shortDescriptionHi": "",
    "description": "Atomy Adelica Concealer No. 23 Beige provides flawless coverage and UV protection. Silky formula with Niacinamide and Hyaluronic Acid, ideal for sensitive skin.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "Official Standard Pack",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Adelica Concealer - Beige?",
          "a": "Yes, 100% genuine Atomy Adelica Concealer - Beige sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 900,
    "originalPrice": 1035,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D04704/org/115/260326000051115.jpeg",
      "https://image.atomy.com/IN/goods/D04704/org/795/260129000049795.jpg",
      "https://image.atomy.com/IN/goods/D04704/org/796/260129000049796.jpg",
      "https://image.atomy.com/IN/goods/D04704/org/797/260129000049797.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D04704/org/115/260326000051115.jpeg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 24,
    "pv": 3150,
    "productUrl": "https://in.atomy.com/product/D04704",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d04723",
    "externalProductId": "D04723",
    "sku": "D04723",
    "slug": "adelica-soft-brow-pencil-gray-d04723",
    "name": "Adelica Soft Brow Pencil - Gray",
    "nameHi": "",
    "categoryId": "skincare",
    "categoryName": "Skincare",
    "shortDescription": "Atomy Adelica Soft Brow Pencil Gray features a dual-edge tip and built-in spoolie to deliver precise, natural eyebrow definition with nourishing blackberry extract, ideally tailored for dark hair tones.",
    "shortDescriptionHi": "",
    "description": "Atomy Adelica Soft Brow Pencil Gray features a dual-edge tip and built-in spoolie to deliver precise, natural eyebrow definition with nourishing blackberry extract, ideally tailored for dark hair tones.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "10 GRM (15*15*150mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Adelica Soft Brow Pencil - Gray?",
          "a": "Yes, 100% genuine Atomy Adelica Soft Brow Pencil - Gray sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 700,
    "originalPrice": 804,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D04723/org/425/260818000054425.jpg",
      "https://image.atomy.com/IN/goods/D04723/org/426/260818000054426.jpg",
      "https://image.atomy.com/IN/goods/D04723/org/457/260818000054457.jpg",
      "https://image.atomy.com/IN/goods/D04723/org/458/260818000054458.jpg",
      "https://image.atomy.com/IN/goods/D04723/org/427/260818000054427.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D04723/org/425/260818000054425.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 24,
    "pv": 2450,
    "productUrl": "https://in.atomy.com/product/D04723",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d04717",
    "externalProductId": "D04717",
    "sku": "D04717",
    "slug": "adelica-waterproof-mascara-black-d04717",
    "name": "Adelica Waterproof Mascara - Black",
    "nameHi": "",
    "categoryId": "makeup",
    "categoryName": "Makeup",
    "shortDescription": "Atomy Adelica Waterproof Mascara offers triple-proofing against water, sweat, and sebum. Its square brush provides a clump-free, voluminous look for oily eyelids.",
    "shortDescriptionHi": "",
    "description": "Atomy Adelica Waterproof Mascara offers triple-proofing against water, sweat, and sebum. Its square brush provides a clump-free, voluminous look for oily eyelids.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "Official Standard Pack",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Adelica Waterproof Mascara - Black?",
          "a": "Yes, 100% genuine Atomy Adelica Waterproof Mascara - Black sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 1000,
    "originalPrice": 1150,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D04717/D04717_00.jpg",
      "https://image.atomy.com/IN/goods/D04717/D04717_01.jpg",
      "https://image.atomy.com/IN/goods/D04717/D04717_02.jpg",
      "https://image.atomy.com/IN/goods/D04717/D04717_03.jpg",
      "https://image.atomy.com/IN/goods/D04717/D04717_04.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D04717/D04717_00.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 24,
    "pv": 3500,
    "productUrl": "https://in.atomy.com/product/D04717",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00111",
    "externalProductId": "D00111",
    "sku": "D00111",
    "slug": "alaska-e-omega-3-d00111",
    "name": "Alaska E-Omega 3",
    "nameHi": "",
    "categoryId": "health",
    "categoryName": "Health",
    "shortDescription": "Atomy Alaska E-Omega3 provides pure EPA and DHA from Alaska pollock. It supports blood circulation and eye health in small softgels for seniors and busy adults.",
    "shortDescriptionHi": "",
    "description": "Atomy Alaska E-Omega3 provides pure EPA and DHA from Alaska pollock. It supports blood circulation and eye health in small softgels for seniors and busy adults.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "180 GRM (120*65*65mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Alaska E-Omega 3?",
          "a": "Yes, 100% genuine Atomy Alaska E-Omega 3 sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 3600,
    "originalPrice": 4140,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00111/D00111_01.jpg",
      "https://image.atomy.com/IN/goods/D00111/D00111_02.jpg",
      "https://image.atomy.com/IN/goods/D00111/D00111_03.jpg",
      "https://image.atomy.com/IN/goods/D00111/D00111_04.jpg",
      "https://image.atomy.com/IN/goods/D00111/D00111_00.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00111/D00111_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 2,
    "pv": 12600,
    "productUrl": "https://in.atomy.com/product/D00111",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d94084",
    "externalProductId": "D94084",
    "sku": "D94084",
    "slug": "atomy-100-pure-spirulina-powder-d94084",
    "name": "Atomy 100% Pure* Spirulina Powder",
    "nameHi": "",
    "categoryId": "health",
    "categoryName": "Health",
    "shortDescription": "Atomy 100% Pure Spirulina Powder features 60% protein and a 95% absorption rate. This nutrient-dense superfood is perfect for immune support and daily vitality.",
    "shortDescriptionHi": "",
    "description": "Atomy 100% Pure Spirulina Powder features 60% protein and a 95% absorption rate. This nutrient-dense superfood is perfect for immune support and daily vitality.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "Official Standard Pack",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Atomy 100% Pure* Spirulina Powder?",
          "a": "Yes, 100% genuine Atomy Atomy 100% Pure* Spirulina Powder sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 1799,
    "originalPrice": 2068,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D94084/org/083/260501000052083.png",
      "https://image.atomy.com/IN/goods/D94084/org/084/260501000052084.png",
      "https://image.atomy.com/IN/goods/D94084/D94084_02.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D94084/org/083/260501000052083.png",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 24,
    "pv": 6296,
    "productUrl": "https://in.atomy.com/product/D94084",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d07116",
    "externalProductId": "D07116",
    "sku": "D07116",
    "slug": "atomy-360-degree-health-combo-d07116",
    "name": "Atomy 360 Degree Health Combo*",
    "nameHi": "",
    "categoryId": "skincare",
    "categoryName": "Skincare",
    "shortDescription": "Atomy Algae Omega 3 provides 100% plant-based TG-type EPA and DHA to support circulatory and eye health. Ideal for vegans, pregnant women, and digital device users.",
    "shortDescriptionHi": "",
    "description": "Atomy Algae Omega 3 provides 100% plant-based TG-type EPA and DHA to support circulatory and eye health. Ideal for vegans, pregnant women, and digital device users.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "Official Standard Pack",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Atomy 360 Degree Health Combo*?",
          "a": "Yes, 100% genuine Atomy Atomy 360 Degree Health Combo* sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 11699,
    "originalPrice": 13453,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D07116/org/183/260330000051183.jpeg",
      "https://image.atomy.com/IN/goods/D07116/org/116/thumb_d07116_0002.jpg",
      "https://image.atomy.com/IN/goods/D07116/editor/116/detail_d07116_0001.jpg",
      "https://image.atomy.com/IN/goods/D07116/editor/116/detail_d07116_0002.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D07116/org/183/260330000051183.jpeg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 24,
    "pv": 40946,
    "productUrl": "https://in.atomy.com/product/D07116",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d01513",
    "externalProductId": "D01513",
    "sku": "D01513",
    "slug": "atomy-absolute-24k-gold-night-mask-d01513",
    "name": "Atomy Absolute 24K Gold Night Mask",
    "nameHi": "",
    "categoryId": "skincare",
    "categoryName": "Skincare",
    "shortDescription": "Atomy Absolute 24K Gold Night Mask revitalizes skin overnight with real gold and saffron. It offers dual whitening and wrinkle care for firming and hydration.",
    "shortDescriptionHi": "",
    "description": "Atomy Absolute 24K Gold Night Mask revitalizes skin overnight with real gold and saffron. It offers dual whitening and wrinkle care for firming and hydration.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "Official Standard Pack",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Atomy Absolute 24K Gold Night Mask?",
          "a": "Yes, 100% genuine Atomy Atomy Absolute 24K Gold Night Mask sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 3100,
    "originalPrice": 3564,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D01513/D01513_00.jpg",
      "https://image.atomy.com/IN/goods/D01513/D01513_01.jpg",
      "https://image.atomy.com/IN/goods/D01513/D01513_02.jpg",
      "https://image.atomy.com/IN/goods/D01513/D01513_03.jpg",
      "https://image.atomy.com/IN/goods/D01513/D01513_04.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D01513/D01513_00.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 24,
    "pv": 10850,
    "productUrl": "https://in.atomy.com/product/D01513",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d01523",
    "externalProductId": "D01523",
    "sku": "D01523",
    "slug": "atomy-absolute-hydra-balm-d01523",
    "name": "Atomy Absolute Hydra Balm",
    "nameHi": "",
    "categoryId": "skincare",
    "categoryName": "Skincare",
    "shortDescription": "Atomy Absolute Hydra Balm is a portable moisture stick with 89% hydrating essence and patented collagen tech that delivers 12-layer deep hydration and firming care.",
    "shortDescriptionHi": "",
    "description": "Atomy Absolute Hydra Balm is a portable moisture stick with 89% hydrating essence and patented collagen tech that delivers 12-layer deep hydration and firming care.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "Official Standard Pack",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Atomy Absolute Hydra Balm?",
          "a": "Yes, 100% genuine Atomy Atomy Absolute Hydra Balm sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 1100,
    "originalPrice": 1265,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D01523/org/440/260521000052440.jpg",
      "https://image.atomy.com/IN/goods/D01523/org/441/260521000052441.jpg",
      "https://image.atomy.com/IN/goods/D01523/org/442/260521000052442.jpg",
      "https://image.atomy.com/IN/goods/D01523/org/443/260521000052443.jpg",
      "https://image.atomy.com/IN/goods/D01523/org/444/260521000052444.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D01523/org/440/260521000052440.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 24,
    "pv": 3850,
    "productUrl": "https://in.atomy.com/product/D01523",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d01526",
    "externalProductId": "D01526",
    "sku": "D01526",
    "slug": "atomy-absolute-snow-dark-spot-corrector-d01526",
    "name": "Atomy Absolute Snow Dark Spot Corrector",
    "nameHi": "",
    "categoryId": "skincare",
    "categoryName": "Skincare",
    "shortDescription": "Atomy Absolute Snow Dark Spot Corrector reduces dark spots by 15.83% with CellActive tech. A steel ball applicator offers targeted care for radiant, even skin.",
    "shortDescriptionHi": "",
    "description": "Atomy Absolute Snow Dark Spot Corrector reduces dark spots by 15.83% with CellActive tech. A steel ball applicator offers targeted care for radiant, even skin.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "50 GRM (22*22*120mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Atomy Absolute Snow Dark Spot Corrector?",
          "a": "Yes, 100% genuine Atomy Atomy Absolute Snow Dark Spot Corrector sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 1200,
    "originalPrice": 1380,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D01526/org/448/251119000048448.jpg",
      "https://image.atomy.com/IN/goods/D01526/org/449/251119000048449.jpg",
      "https://image.atomy.com/IN/goods/D01526/org/450/251119000048450.jpg",
      "https://image.atomy.com/IN/goods/D01526/org/451/251119000048451.jpg",
      "https://image.atomy.com/IN/goods/D01526/org/447/251119000048447.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D01526/org/448/251119000048448.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 4.7,
    "reviewCount": 3,
    "pv": 4200,
    "productUrl": "https://in.atomy.com/product/D01526",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00396",
    "externalProductId": "D00396",
    "sku": "D00396",
    "slug": "atomy-air-pact-21-d00396",
    "name": "Atomy Air Pact #21",
    "nameHi": "",
    "categoryId": "skincare",
    "categoryName": "Skincare",
    "shortDescription": "Atomy Air Pact provides advanced sebum control and sweat resistance for a fresh look. Its Silk Veil Blur technology covers pores perfectly for oily and sensitive skin.",
    "shortDescriptionHi": "",
    "description": "Atomy Air Pact provides advanced sebum control and sweat resistance for a fresh look. Its Silk Veil Blur technology covers pores perfectly for oily and sensitive skin.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "80 GRM (76*76*78mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Atomy Air Pact #21?",
          "a": "Yes, 100% genuine Atomy Atomy Air Pact #21 sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 1900,
    "originalPrice": 2185,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00396/org/442/251119000048442.jpg",
      "https://image.atomy.com/IN/goods/D00396/org/443/251119000048443.jpg",
      "https://image.atomy.com/IN/goods/D00396/org/444/251119000048444.jpg",
      "https://image.atomy.com/IN/goods/D00396/org/445/251119000048445.jpg",
      "https://image.atomy.com/IN/goods/D00396/org/446/251119000048446.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00396/org/442/251119000048442.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 24,
    "pv": 6650,
    "productUrl": "https://in.atomy.com/product/D00396",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00397",
    "externalProductId": "D00397",
    "sku": "D00397",
    "slug": "atomy-air-pact-23-d00397",
    "name": "Atomy Air Pact #23",
    "nameHi": "",
    "categoryId": "skincare",
    "categoryName": "Skincare",
    "shortDescription": "The Atomy Air Pact uses advanced micro-powder technology to control sebum and blur pores, providing a lightweight, breathable, and radiant finish for all-day wear.",
    "shortDescriptionHi": "",
    "description": "The Atomy Air Pact uses advanced micro-powder technology to control sebum and blur pores, providing a lightweight, breathable, and radiant finish for all-day wear.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "80 GRM (76*76*78mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Atomy Air Pact #23?",
          "a": "Yes, 100% genuine Atomy Atomy Air Pact #23 sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 1900,
    "originalPrice": 2185,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00397/org/453/251119000048453.jpg",
      "https://image.atomy.com/IN/goods/D00397/org/454/251119000048454.jpg",
      "https://image.atomy.com/IN/goods/D00397/org/455/251119000048455.jpg",
      "https://image.atomy.com/IN/goods/D00397/org/456/251119000048456.jpg",
      "https://image.atomy.com/IN/goods/D00397/org/457/251119000048457.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00397/org/453/251119000048453.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 24,
    "pv": 6650,
    "productUrl": "https://in.atomy.com/product/D00397",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d04006",
    "externalProductId": "D04006",
    "sku": "D04006",
    "slug": "atomy-algae-omega3-d04006",
    "name": "Atomy Algae Omega3",
    "nameHi": "",
    "categoryId": "health",
    "categoryName": "Health",
    "shortDescription": "Atomy Algae Omega 3 provides 100% plant-based DHA and EPA to support circulation and eye health. A pure, TG-type vegan formula ideal for prenatal and vegan diets.",
    "shortDescriptionHi": "",
    "description": "Atomy Algae Omega 3 provides 100% plant-based DHA and EPA to support circulation and eye health. A pure, TG-type vegan formula ideal for prenatal and vegan diets.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "150 GRM (1*1*1mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Atomy Algae Omega3?",
          "a": "Yes, 100% genuine Atomy Atomy Algae Omega3 sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 5200,
    "originalPrice": 5979,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D04006/D04006_01.jpg",
      "https://image.atomy.com/IN/goods/D04006/D04006_02.jpg",
      "https://image.atomy.com/IN/goods/D04006/D04006_03.jpg",
      "https://image.atomy.com/IN/goods/D04006/D04006_04.jpg",
      "https://image.atomy.com/IN/goods/D04006/D04006_00.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D04006/D04006_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 4.6,
    "reviewCount": 11,
    "pv": 18200,
    "productUrl": "https://in.atomy.com/product/D04006",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00975",
    "externalProductId": "D00975",
    "sku": "D00975",
    "slug": "atomy-cafe-arabica-black-50-sticks-d00975",
    "name": "Atomy Cafe Arabica Black (50 sticks)",
    "nameHi": "",
    "categoryId": "health",
    "categoryName": "Health",
    "shortDescription": "Atomy Cafe Arabica Black is a premium instant coffee using 100% Arabica beans. This low-caffeine blend offers a rich aroma and smooth, hand-drip quality taste.",
    "shortDescriptionHi": "",
    "description": "Atomy Cafe Arabica Black is a premium instant coffee using 100% Arabica beans. This low-caffeine blend offers a rich aroma and smooth, hand-drip quality taste.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "170 GRM (125*70*140mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Atomy Cafe Arabica Black (50 sticks)?",
          "a": "Yes, 100% genuine Atomy Atomy Cafe Arabica Black (50 sticks) sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 1800,
    "originalPrice": 2070,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00975/D00975_01.jpg",
      "https://image.atomy.com/IN/goods/D00975/D00975_02.jpg",
      "https://image.atomy.com/IN/goods/D00975/D00975_03.jpg",
      "https://image.atomy.com/IN/goods/D00975/D00975_04.jpg",
      "https://image.atomy.com/IN/goods/D00975/D00975_00.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00975/D00975_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 2,
    "pv": 6300,
    "productUrl": "https://in.atomy.com/product/D00975",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00466",
    "externalProductId": "D00466",
    "sku": "D00466",
    "slug": "atomy-daily-expert-mask-brightening-d00466",
    "name": "Atomy Daily Expert Mask  Brightening",
    "nameHi": "",
    "categoryId": "skincare",
    "categoryName": "Skincare",
    "shortDescription": "Atomy Daily Expert Mask features an innovative seaweed sheet with Niacinamide and Glutathione to inhibit melanin and provide intensive moisture for radiant skin.",
    "shortDescriptionHi": "",
    "description": "Atomy Daily Expert Mask features an innovative seaweed sheet with Niacinamide and Glutathione to inhibit melanin and provide intensive moisture for radiant skin.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "300 GRM (123*162*40mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Atomy Daily Expert Mask  Brightening?",
          "a": "Yes, 100% genuine Atomy Atomy Daily Expert Mask  Brightening sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 1300,
    "originalPrice": 1494,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00466/D00466_01.jpg",
      "https://image.atomy.com/IN/goods/D00466/D00466_02.jpg",
      "https://image.atomy.com/IN/goods/D00466/D00466_03.jpg",
      "https://image.atomy.com/IN/goods/D00466/D00466_00.jpg",
      "https://image.atomy.com/IN/goods/D00466/editor/466/detail_d00466_0001.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00466/D00466_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 1,
    "pv": 4550,
    "productUrl": "https://in.atomy.com/product/D00466",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00467",
    "externalProductId": "D00467",
    "sku": "D00467",
    "slug": "atomy-daily-expert-mask-firming-d00467",
    "name": "Atomy Daily Expert Mask Firming",
    "nameHi": "",
    "categoryId": "skincare",
    "categoryName": "Skincare",
    "shortDescription": "Atomy Daily Expert Mask Firming improves skin elasticity and reduces wrinkles with collagen. This seaweed sheet mask provides deep nourishment for aging skin.",
    "shortDescriptionHi": "",
    "description": "Atomy Daily Expert Mask Firming improves skin elasticity and reduces wrinkles with collagen. This seaweed sheet mask provides deep nourishment for aging skin.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "300 GRM (123*162*40mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Atomy Daily Expert Mask Firming?",
          "a": "Yes, 100% genuine Atomy Atomy Daily Expert Mask Firming sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 1300,
    "originalPrice": 1494,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00467/D00467_01.jpg",
      "https://image.atomy.com/IN/goods/D00467/D00467_02.jpg",
      "https://image.atomy.com/IN/goods/D00467/D00467_03.jpg",
      "https://image.atomy.com/IN/goods/D00467/D00467_00.jpg",
      "https://image.atomy.com/IN/goods/D00467/editor/467/detail_d00467_0001.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00467/D00467_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 24,
    "pv": 4550,
    "productUrl": "https://in.atomy.com/product/D00467",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00465",
    "externalProductId": "D00465",
    "sku": "D00465",
    "slug": "atomy-daily-expert-mask-moisturizing-d00465",
    "name": "Atomy Daily Expert Mask Moisturizing",
    "nameHi": "",
    "categoryId": "skincare",
    "categoryName": "Skincare",
    "shortDescription": "Atomy Daily Expert Mask provides intensive hydration and skin barrier protection using seaweed fiber sheets. Enjoy professional home care for all skin types.",
    "shortDescriptionHi": "",
    "description": "Atomy Daily Expert Mask provides intensive hydration and skin barrier protection using seaweed fiber sheets. Enjoy professional home care for all skin types.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "300 GRM (123*162*40mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Atomy Daily Expert Mask Moisturizing?",
          "a": "Yes, 100% genuine Atomy Atomy Daily Expert Mask Moisturizing sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 1300,
    "originalPrice": 1494,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00465/D00465_01.jpg",
      "https://image.atomy.com/IN/goods/D00465/D00465_02.jpg",
      "https://image.atomy.com/IN/goods/D00465/D00465_03.jpg",
      "https://image.atomy.com/IN/goods/D00465/D00465_00.jpg",
      "https://image.atomy.com/IN/goods/D00465/editor/465/detail_d00465_0001.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00465/D00465_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 1,
    "pv": 4550,
    "productUrl": "https://in.atomy.com/product/D00465",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00482",
    "externalProductId": "D00482",
    "sku": "D00482",
    "slug": "atomy-deep-pure-cleansing-oil-d00482",
    "name": "Atomy Deep Pure Cleansing Oil",
    "nameHi": "",
    "categoryId": "skincare",
    "categoryName": "Skincare",
    "shortDescription": "Atomy Deep Pure Cleansing Oil removes heavy makeup and blackheads using patented Anti-Sebum P technology. This mild formula leaves your skin hydrated and refreshed.",
    "shortDescriptionHi": "",
    "description": "Atomy Deep Pure Cleansing Oil removes heavy makeup and blackheads using patented Anti-Sebum P technology. This mild formula leaves your skin hydrated and refreshed.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "200 GRM (44*45*89mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Atomy Deep Pure Cleansing Oil?",
          "a": "Yes, 100% genuine Atomy Atomy Deep Pure Cleansing Oil sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 2100,
    "originalPrice": 2415,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00482/D00482_01.jpg",
      "https://image.atomy.com/IN/goods/D00482/D00482_02.jpg",
      "https://image.atomy.com/IN/goods/D00482/D00482_03.jpg",
      "https://image.atomy.com/IN/goods/D00482/D00482_04.jpg",
      "https://image.atomy.com/IN/goods/D00482/D00482_00.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00482/D00482_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 24,
    "pv": 7350,
    "productUrl": "https://in.atomy.com/product/D00482",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d01235",
    "externalProductId": "D01235",
    "sku": "D01235",
    "slug": "atomy-homme-energizing-all-in-one-d01235",
    "name": "Atomy Homme Energizing All In One",
    "nameHi": "",
    "categoryId": "skincare",
    "categoryName": "Skincare",
    "shortDescription": "Atomy Homme Energizing All-in-One provides intensive brightening and wrinkle care with a non-sticky dual-essence formula, perfect for busy men seeking deep hydration.",
    "shortDescriptionHi": "",
    "description": "Atomy Homme Energizing All-in-One provides intensive brightening and wrinkle care with a non-sticky dual-essence formula, perfect for busy men seeking deep hydration.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "140 GRM (40*40*140mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Atomy Homme Energizing All In One?",
          "a": "Yes, 100% genuine Atomy Atomy Homme Energizing All In One sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 2000,
    "originalPrice": 2300,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D01235/D01235_01.jpg",
      "https://image.atomy.com/IN/goods/D01235/D01235_02.jpg",
      "https://image.atomy.com/IN/goods/D01235/D01235_03.jpg",
      "https://image.atomy.com/IN/goods/D01235/D01235_04.jpg",
      "https://image.atomy.com/IN/goods/D01235/D01235_00.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D01235/D01235_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 2,
    "pv": 7000,
    "productUrl": "https://in.atomy.com/product/D01235",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d07115",
    "externalProductId": "D07115",
    "sku": "D07115",
    "slug": "atomy-korean-beauty-pack-d07115",
    "name": "Atomy Korean Beauty Pack",
    "nameHi": "",
    "categoryId": "others",
    "categoryName": "Others",
    "shortDescription": "Atomy BB Cream SPF30 PA++ provides natural coverage, UV protection, and anti-aging. This multi-tasking balm is perfect for busy professionals and all skin types.",
    "shortDescriptionHi": "",
    "description": "Atomy BB Cream SPF30 PA++ provides natural coverage, UV protection, and anti-aging. This multi-tasking balm is perfect for busy professionals and all skin types.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "Official Standard Pack",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Atomy Korean Beauty Pack?",
          "a": "Yes, 100% genuine Atomy Atomy Korean Beauty Pack sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 3200,
    "originalPrice": 3679,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D07115/org/184/260330000051184.jpeg",
      "https://image.atomy.com/IN/goods/D07115/org/115/thumb_d07115_0002.jpg",
      "https://image.atomy.com/IN/goods/D07115/editor/115/detail_d07115_0001.jpg",
      "https://image.atomy.com/IN/goods/D07115/editor/115/detail_d07115_0002.jpg",
      "https://image.atomy.com/IN/goods/D07115/editor/115/detail_d07115_0003.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D07115/org/184/260330000051184.jpeg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 24,
    "pv": 11200,
    "productUrl": "https://in.atomy.com/product/D07115",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d92658",
    "externalProductId": "D92658",
    "sku": "D92658",
    "slug": "atomy-life-scenario-including-moment-of-truth-d92658",
    "name": "Atomy Life Scenario (Including Moment of Truth)",
    "nameHi": "",
    "categoryId": "others",
    "categoryName": "Others",
    "shortDescription": "ETC, Supplementary Goods, Atomy Life Scenario (Including Moment of Truth)",
    "shortDescriptionHi": "",
    "description": "ETC, Supplementary Goods, Atomy Life Scenario (Including Moment of Truth)",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "Official Standard Pack",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Atomy Life Scenario (Including Moment of Truth)?",
          "a": "Yes, 100% genuine Atomy Atomy Life Scenario (Including Moment of Truth) sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 150,
    "originalPrice": 172,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D92658/org/905/260422000051905.jpeg",
      "https://image.atomy.com/IN/goods/D92658/org/906/260422000051906.jpeg",
      "https://image.atomy.com/IN/goods/D92658/org/474/251120000048474.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D92658/org/905/260422000051905.jpeg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 24,
    "pv": 525,
    "productUrl": "https://in.atomy.com/product/D92658",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00400",
    "externalProductId": "D00400",
    "sku": "D00400",
    "slug": "atomy-lip-glow-d00400",
    "name": "Atomy Lip Glow",
    "nameHi": "",
    "categoryId": "makeup",
    "categoryName": "Makeup",
    "shortDescription": "Atomy Lip Glow Rose Enhanced Moisturizing Lip Care features SPF 15 and hydration. Its responsive pink tint and rose oil repair dry lips for a natural look.",
    "shortDescriptionHi": "",
    "description": "Atomy Lip Glow Rose Enhanced Moisturizing Lip Care features SPF 15 and hydration. Its responsive pink tint and rose oil repair dry lips for a natural look.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "20 GRM (82*23*23mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Atomy Lip Glow?",
          "a": "Yes, 100% genuine Atomy Atomy Lip Glow sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 1200,
    "originalPrice": 1380,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00400/D00400_01.jpg",
      "https://image.atomy.com/IN/goods/D00400/D00400_02.jpg",
      "https://image.atomy.com/IN/goods/D00400/D00400_03.jpg",
      "https://image.atomy.com/IN/goods/D00400/D00400_04.jpg",
      "https://image.atomy.com/IN/goods/D00400/D00400_00.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00400/D00400_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 4.2,
    "reviewCount": 5,
    "pv": 4200,
    "productUrl": "https://in.atomy.com/product/D00400",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00174",
    "externalProductId": "D00174",
    "sku": "D00174",
    "slug": "atomy-milk-thistle-d00174",
    "name": "Atomy Milk Thistle",
    "nameHi": "",
    "categoryId": "health",
    "categoryName": "Health",
    "shortDescription": "Atomy Milk Thistle supports liver function and detox with high-purity Silymarin. This Kolmar BNH supplement provides 60 days of vital antioxidant protection.",
    "shortDescriptionHi": "",
    "description": "Atomy Milk Thistle supports liver function and detox with high-purity Silymarin. This Kolmar BNH supplement provides 60 days of vital antioxidant protection.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "110 GRM (104*86*56mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Atomy Milk Thistle?",
          "a": "Yes, 100% genuine Atomy Atomy Milk Thistle sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 3400,
    "originalPrice": 3909,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00174/org/910/260422000051910.jpeg",
      "https://image.atomy.com/IN/goods/D00174/D00174_01.jpg",
      "https://image.atomy.com/IN/goods/D00174/D00174_02.jpg",
      "https://image.atomy.com/IN/goods/D00174/D00174_03.jpg",
      "https://image.atomy.com/IN/goods/D00174/org/909/260422000051909.jpeg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00174/org/910/260422000051910.jpeg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": true,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 2,
    "pv": 11900,
    "productUrl": "https://in.atomy.com/product/D00174",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d04086",
    "externalProductId": "D04086",
    "sku": "D04086",
    "slug": "atomy-moringa-d04086",
    "name": "Atomy Moringa",
    "nameHi": "",
    "categoryId": "health",
    "categoryName": "Health",
    "shortDescription": "Atomy Moringa Capsule provides powerful antioxidant support and immune health with Moringa Oleifera. This superfood is ideal for daily detox and metabolic balance.",
    "shortDescriptionHi": "",
    "description": "Atomy Moringa Capsule provides powerful antioxidant support and immune health with Moringa Oleifera. This superfood is ideal for daily detox and metabolic balance.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "Official Standard Pack",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Atomy Moringa?",
          "a": "Yes, 100% genuine Atomy Atomy Moringa sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 799,
    "originalPrice": 918,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D04086/D04086_00.jpg",
      "https://image.atomy.com/IN/goods/D04086/D04086_01.jpg",
      "https://image.atomy.com/IN/goods/D04086/D04086_02.jpg",
      "https://image.atomy.com/IN/goods/D04086/editor/086/detail_d04086_0001.jpg",
      "https://image.atomy.com/IN/goods/D04086/editor/086/detail_d04086_0002.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D04086/D04086_00.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 24,
    "pv": 2796,
    "productUrl": "https://in.atomy.com/product/D04086",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00170",
    "externalProductId": "D00170",
    "sku": "D00170",
    "slug": "atomy-noni-drink-d00170",
    "name": "Atomy Noni Drink",
    "nameHi": "",
    "categoryId": "health",
    "categoryName": "Health",
    "shortDescription": "Atomy Noni Drink features 92.09% organic Java Noni extract fermented for 1,440 hours. This NFC juice boosts immunity and vitality for seniors and busy adults.",
    "shortDescriptionHi": "",
    "description": "Atomy Noni Drink features 92.09% organic Java Noni extract fermented for 1,440 hours. This NFC juice boosts immunity and vitality for seniors and busy adults.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "1700 GRM (151*118*360mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Atomy Noni Drink?",
          "a": "Yes, 100% genuine Atomy Atomy Noni Drink sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 5900,
    "originalPrice": 6784,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00170/org/351/260401000051351.jpg",
      "https://image.atomy.com/IN/goods/D00170/D00170_01.jpg",
      "https://image.atomy.com/IN/goods/D00170/D00170_02.jpg",
      "https://image.atomy.com/IN/goods/D00170/D00170_03.jpg",
      "https://image.atomy.com/IN/goods/D00170/D00170_04.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00170/org/351/260401000051351.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 4.8,
    "reviewCount": 5,
    "pv": 20650,
    "productUrl": "https://in.atomy.com/product/D00170",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00160",
    "externalProductId": "D00160",
    "sku": "D00160",
    "slug": "atomy-nutraceutical-mix-d00160",
    "name": "Atomy Nutraceutical Mix",
    "nameHi": "",
    "categoryId": "health",
    "categoryName": "Health",
    "shortDescription": "Atomy Nutraceutical Mix features 14 probiotic strains and 3 billion CFU for gut health. This fruit-flavored powder boosts immunity and digestion for families.",
    "shortDescriptionHi": "",
    "description": "Atomy Nutraceutical Mix features 14 probiotic strains and 3 billion CFU for gut health. This fruit-flavored powder boosts immunity and digestion for families.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "200 GRM (110*65*110mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Atomy Nutraceutical Mix?",
          "a": "Yes, 100% genuine Atomy Atomy Nutraceutical Mix sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 4000,
    "originalPrice": 4600,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00160/D00160_01.jpg",
      "https://image.atomy.com/IN/goods/D00160/D00160_02.jpg",
      "https://image.atomy.com/IN/goods/D00160/D00160_03.jpg",
      "https://image.atomy.com/IN/goods/D00160/D00160_04.jpg",
      "https://image.atomy.com/IN/goods/D00160/D00160_00.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00160/D00160_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": true,
    "isBestseller": true,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 5,
    "pv": 14000,
    "productUrl": "https://in.atomy.com/product/D00160",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d92688",
    "externalProductId": "D92688",
    "sku": "D92688",
    "slug": "atomy-pamphlet-food-amp-health-products-only-100-pcs-per-pack-d92688",
    "name": "Atomy Pamphlet Food &amp; Health Products only (100 pcs per pack)",
    "nameHi": "",
    "categoryId": "others",
    "categoryName": "Others",
    "shortDescription": "Atomy Multilingual Pamphlet Pack (English &amp; Hindi) offers technical research and ingredient details to support global business and customer education in India.",
    "shortDescriptionHi": "",
    "description": "Atomy Multilingual Pamphlet Pack (English &amp; Hindi) offers technical research and ingredient details to support global business and customer education in India.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "Official Standard Pack",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Atomy Pamphlet Food &amp; Health Products only (100 pcs per pack)?",
          "a": "Yes, 100% genuine Atomy Atomy Pamphlet Food &amp; Health Products only (100 pcs per pack) sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 350,
    "originalPrice": 402,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D92688/org/688/thumb_d92688_0001.jpg",
      "https://image.atomy.com/IN/goods/D92688/org/688/thumb_d92688_0002.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D92688/org/688/thumb_d92688_0001.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 24,
    "pv": 1225,
    "productUrl": "https://in.atomy.com/product/D92688",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d01505",
    "externalProductId": "D01505",
    "sku": "D01505",
    "slug": "atomy-peeling-pad-d01505",
    "name": "Atomy Peeling Pad",
    "nameHi": "",
    "categoryId": "skincare",
    "categoryName": "Skincare",
    "shortDescription": "Atomy Peeling Pad combines AHA, BHA, PHA, and LHA with white flower extracts to gently clear dead skin cells, refine texture, and replenish deep moisture for radiant skin.",
    "shortDescriptionHi": "",
    "description": "Atomy Peeling Pad combines AHA, BHA, PHA, and LHA with white flower extracts to gently clear dead skin cells, refine texture, and replenish deep moisture for radiant skin.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "200 GRM (80*80*70mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Atomy Peeling Pad?",
          "a": "Yes, 100% genuine Atomy Atomy Peeling Pad sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 1200,
    "originalPrice": 1380,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D01505/org/001/260914000055001.jpg",
      "https://image.atomy.com/IN/goods/D01505/org/004/260914000055004.jpg",
      "https://image.atomy.com/IN/goods/D01505/org/005/260914000055005.jpg",
      "https://image.atomy.com/IN/goods/D01505/org/003/260914000055003.jpg",
      "https://image.atomy.com/IN/goods/D01505/org/002/260914000055002.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D01505/org/001/260914000055001.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 24,
    "pv": 4200,
    "productUrl": "https://in.atomy.com/product/D01505",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00183",
    "externalProductId": "D00183",
    "sku": "D00183",
    "slug": "atomy-pomegranate-mixed-fruit-jelly-d00183",
    "name": "Atomy Pomegranate Mixed Fruit Jelly",
    "nameHi": "",
    "categoryId": "health",
    "categoryName": "Health",
    "shortDescription": "Atomy Pomegranate Mixed Fruit Jelly supports menopausal health and skin moisture. This award-winning stick jelly is perfect for busy, beauty-conscious women.",
    "shortDescriptionHi": "",
    "description": "Atomy Pomegranate Mixed Fruit Jelly supports menopausal health and skin moisture. This award-winning stick jelly is perfect for busy, beauty-conscious women.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "1000 GRM (230*200*200mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Atomy Pomegranate Mixed Fruit Jelly?",
          "a": "Yes, 100% genuine Atomy Atomy Pomegranate Mixed Fruit Jelly sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 6700,
    "originalPrice": 7704,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00183/D00183_01.jpg",
      "https://image.atomy.com/IN/goods/D00183/D00183_02.jpg",
      "https://image.atomy.com/IN/goods/D00183/D00183_03.jpg",
      "https://image.atomy.com/IN/goods/D00183/D00183_04.jpg",
      "https://image.atomy.com/IN/goods/D00183/D00183_00.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00183/D00183_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 24,
    "pv": 23450,
    "productUrl": "https://in.atomy.com/product/D00183",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00180",
    "externalProductId": "D00180",
    "sku": "D00180",
    "slug": "atomy-pu-er-tea-d00180",
    "name": "Atomy Pu'er Tea",
    "nameHi": "",
    "categoryId": "health",
    "categoryName": "Health",
    "shortDescription": "Atomy Pu'er Tea Extract features 35mg of Gallic Acid to support body fat reduction and metabolic health. This premium antioxidant tea is ideal for busy lifestyles.",
    "shortDescriptionHi": "",
    "description": "Atomy Pu'er Tea Extract features 35mg of Gallic Acid to support body fat reduction and metabolic health. This premium antioxidant tea is ideal for busy lifestyles.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "60 GRM (72*60*112mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Atomy Pu'er Tea?",
          "a": "Yes, 100% genuine Atomy Atomy Pu'er Tea sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 3200,
    "originalPrice": 3679,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00180/org/342/260402000051342.jpg",
      "https://image.atomy.com/IN/goods/D00180/D00180_01.jpg",
      "https://image.atomy.com/IN/goods/D00180/D00180_02.jpg",
      "https://image.atomy.com/IN/goods/D00180/D00180_03.jpg",
      "https://image.atomy.com/IN/goods/D00180/D00180_04.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00180/org/342/260402000051342.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 1,
    "pv": 11200,
    "productUrl": "https://in.atomy.com/product/D00180",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00629",
    "externalProductId": "D00629",
    "sku": "D00629",
    "slug": "atomy-root-vital-hair-care-set-d00629",
    "name": "Atomy Root Vital Hair Care Set",
    "nameHi": "",
    "categoryId": "personal-care",
    "categoryName": "Personal Care",
    "shortDescription": "Atomy Root Vital Hair Care Set offers a professional 3-step solution for hair loss relief and scalp anti-aging using Root Vital Code and 10,000 ppm caffeine.",
    "shortDescriptionHi": "",
    "description": "Atomy Root Vital Hair Care Set offers a professional 3-step solution for hair loss relief and scalp anti-aging using Root Vital Code and 10,000 ppm caffeine.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "Official Standard Pack",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Atomy Root Vital Hair Care Set?",
          "a": "Yes, 100% genuine Atomy Atomy Root Vital Hair Care Set sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 4700,
    "originalPrice": 5405,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00629/org/435/260227000050435.png",
      "https://image.atomy.com/IN/goods/D00629/org/330/260221000050330.png",
      "https://image.atomy.com/IN/goods/D00629/org/328/260221000050328.jpg",
      "https://image.atomy.com/IN/goods/D00629/org/329/260221000050329.jpg",
      "https://image.atomy.com/IN/goods/D00629/org/327/260221000050327.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00629/org/435/260227000050435.png",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 24,
    "pv": 16450,
    "productUrl": "https://in.atomy.com/product/D00629",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00295",
    "externalProductId": "D00295",
    "sku": "D00295",
    "slug": "atomy-rose-rain-mist-d00295",
    "name": "Atomy Rose Rain Mist",
    "nameHi": "",
    "categoryId": "skincare",
    "categoryName": "Skincare",
    "shortDescription": "Atomy Rose Rain Mist is a 3-in-1 toner and essence providing instant hydration. This mist is ideal for dry skin, makeup setting, and soothing sensitive skin.",
    "shortDescriptionHi": "",
    "description": "Atomy Rose Rain Mist is a 3-in-1 toner and essence providing instant hydration. This mist is ideal for dry skin, makeup setting, and soothing sensitive skin.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "190 GRM (182*45*45mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Atomy Rose Rain Mist?",
          "a": "Yes, 100% genuine Atomy Atomy Rose Rain Mist sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 1400,
    "originalPrice": 1609,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00295/D00295_01.jpg",
      "https://image.atomy.com/IN/goods/D00295/D00295_02.jpg",
      "https://image.atomy.com/IN/goods/D00295/D00295_03.jpg",
      "https://image.atomy.com/IN/goods/D00295/D00295_04.jpg",
      "https://image.atomy.com/IN/goods/D00295/D00295_00.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00295/D00295_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 24,
    "pv": 4900,
    "productUrl": "https://in.atomy.com/product/D00295",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00487",
    "externalProductId": "D00487",
    "sku": "D00487",
    "slug": "atomy-salt-body-scrub-d00487",
    "name": "Atomy Salt Body Scrub",
    "nameHi": "",
    "categoryId": "personal-care",
    "categoryName": "Personal Care",
    "shortDescription": "Atomy Salt Body Scrub features a dual salt system and oil-bearing gel technology to effectively exfoliate and moisturize rough skin for a smooth, radiant finish.",
    "shortDescriptionHi": "",
    "description": "Atomy Salt Body Scrub features a dual salt system and oil-bearing gel technology to effectively exfoliate and moisturize rough skin for a smooth, radiant finish.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "Official Standard Pack",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Atomy Salt Body Scrub?",
          "a": "Yes, 100% genuine Atomy Atomy Salt Body Scrub sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 1400,
    "originalPrice": 1609,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00487/org/378/260402000051378.jpg",
      "https://image.atomy.com/IN/goods/D00487/D00487_01.jpg",
      "https://image.atomy.com/IN/goods/D00487/D00487_02.jpg",
      "https://image.atomy.com/IN/goods/D00487/D00487_03.jpg",
      "https://image.atomy.com/IN/goods/D00487/D00487_04.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00487/org/378/260402000051378.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 24,
    "pv": 4900,
    "productUrl": "https://in.atomy.com/product/D00487",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d01883",
    "externalProductId": "D01883",
    "sku": "D01883",
    "slug": "atomy-scratch-free-scrubber-d01883",
    "name": "Atomy Scratch Free Scrubber",
    "nameHi": "",
    "categoryId": "home-care",
    "categoryName": "Home Care",
    "shortDescription": "Atomy Scratch Free Scrubber features a premium triple-layer structure and certified 99.9% antibacterial protection to thoroughly clean high-end tableware and coated pans without scratching.",
    "shortDescriptionHi": "",
    "description": "Atomy Scratch Free Scrubber features a premium triple-layer structure and certified 99.9% antibacterial protection to thoroughly clean high-end tableware and coated pans without scratching.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "Official Standard Pack",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Atomy Scratch Free Scrubber?",
          "a": "Yes, 100% genuine Atomy Atomy Scratch Free Scrubber sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 600,
    "originalPrice": 690,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D01883/org/886/260317000050886.jpg",
      "https://image.atomy.com/IN/goods/D01883/org/907/260317000050907.jpg",
      "https://image.atomy.com/IN/goods/D01883/org/624/260416000051624.jpg",
      "https://image.atomy.com/IN/goods/D01883/org/625/260416000051625.jpg",
      "https://image.atomy.com/IN/goods/D01883/org/626/260416000051626.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D01883/org/886/260317000050886.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 24,
    "pv": 2100,
    "productUrl": "https://in.atomy.com/product/D01883",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d94085",
    "externalProductId": "D94085",
    "sku": "D94085",
    "slug": "atomy-shilajit-capsules-d94085",
    "name": "Atomy Shilajit Capsules",
    "nameHi": "",
    "categoryId": "health",
    "categoryName": "Health",
    "shortDescription": "Atomy Shilajit Capsule is an AYUSH-certified Ayurvedic supplement with 500mg of Shilajit and Fulvic Acid. Boost energy, metabolism, and vitality naturally.",
    "shortDescriptionHi": "",
    "description": "Atomy Shilajit Capsule is an AYUSH-certified Ayurvedic supplement with 500mg of Shilajit and Fulvic Acid. Boost energy, metabolism, and vitality naturally.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "Official Standard Pack",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Atomy Shilajit Capsules?",
          "a": "Yes, 100% genuine Atomy Atomy Shilajit Capsules sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 849,
    "originalPrice": 976,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D94085/org/907/260422000051907.jpeg",
      "https://image.atomy.com/IN/goods/D94085/org/908/260422000051908.jpeg",
      "https://image.atomy.com/IN/goods/D94085/D94085_01.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D94085/org/907/260422000051907.jpeg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 24,
    "pv": 2971,
    "productUrl": "https://in.atomy.com/product/D94085",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00488",
    "externalProductId": "D00488",
    "sku": "D00488",
    "slug": "atomy-sugar-body-scrub-d00488",
    "name": "Atomy Sugar Body Scrub",
    "nameHi": "",
    "categoryId": "personal-care",
    "categoryName": "Personal Care",
    "shortDescription": "Atomy Sugar Body Scrub uses a triple sugar blend and botanical oils to gently exfoliate and deeply hydrate, leaving skin soft, radiant, and perfectly smooth.",
    "shortDescriptionHi": "",
    "description": "Atomy Sugar Body Scrub uses a triple sugar blend and botanical oils to gently exfoliate and deeply hydrate, leaving skin soft, radiant, and perfectly smooth.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "290 GRM (64*51*177.5mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Atomy Sugar Body Scrub?",
          "a": "Yes, 100% genuine Atomy Atomy Sugar Body Scrub sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 1400,
    "originalPrice": 1609,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00488/D00488_01.jpg",
      "https://image.atomy.com/IN/goods/D00488/D00488_02.jpg",
      "https://image.atomy.com/IN/goods/D00488/D00488_03.jpg",
      "https://image.atomy.com/IN/goods/D00488/D00488_04.jpg",
      "https://image.atomy.com/IN/goods/D00488/D00488_00.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00488/D00488_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 24,
    "pv": 4900,
    "productUrl": "https://in.atomy.com/product/D00488",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00286",
    "externalProductId": "D00286",
    "sku": "D00286",
    "slug": "atomy-sun-stick-d00286",
    "name": "Atomy Sun Stick",
    "nameHi": "",
    "categoryId": "skincare",
    "categoryName": "Skincare",
    "shortDescription": "Atomy Sun Stick offers SPF 50+ PA++++ protection with a non-sticky matte finish. It controls sebum and calms sensitive skin, making it perfect for golfers and daily outdoor use.",
    "shortDescriptionHi": "",
    "description": "Atomy Sun Stick offers SPF 50+ PA++++ protection with a non-sticky matte finish. It controls sebum and calms sensitive skin, making it perfect for golfers and daily outdoor use.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "50 GRM (1*1*1mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Atomy Sun Stick?",
          "a": "Yes, 100% genuine Atomy Atomy Sun Stick sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 1200,
    "originalPrice": 1380,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00286/D00286_01.jpg",
      "https://image.atomy.com/IN/goods/D00286/D00286_02.jpg",
      "https://image.atomy.com/IN/goods/D00286/D00286_03.jpg",
      "https://image.atomy.com/IN/goods/D00286/D00286_04.jpg",
      "https://image.atomy.com/IN/goods/D00286/D00286_00.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00286/D00286_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 24,
    "pv": 4200,
    "productUrl": "https://in.atomy.com/product/D00286",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d92676",
    "externalProductId": "D92676",
    "sku": "D92676",
    "slug": "atomy-t-shirt-l-1n-d92676",
    "name": "Atomy T-Shirt (L)-1N",
    "nameHi": "",
    "categoryId": "others",
    "categoryName": "Others",
    "shortDescription": "Atomy India Neck Polo Pattern Plain Logo White features premium CVC fabric for moisture-wicking and wrinkle-resistance. Perfect for office workers and golfers.",
    "shortDescriptionHi": "",
    "description": "Atomy India Neck Polo Pattern Plain Logo White features premium CVC fabric for moisture-wicking and wrinkle-resistance. Perfect for office workers and golfers.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "200 GRM (1*1*1mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Atomy T-Shirt (L)-1N?",
          "a": "Yes, 100% genuine Atomy Atomy T-Shirt (L)-1N sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 378,
    "originalPrice": 434,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D92676/org/879/260422000051879.jpeg",
      "https://image.atomy.com/IN/goods/D92676/org/878/260422000051878.jpeg",
      "https://image.atomy.com/IN/goods/D92676/editor/676/detail_d92676_0001.jpeg",
      "https://image.atomy.com/IN/goods/D92676/editor/676/detail_d92676_0002.jpeg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D92676/org/879/260422000051879.jpeg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 24,
    "pv": 1323,
    "productUrl": "https://in.atomy.com/product/D92676",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d92680",
    "externalProductId": "D92680",
    "sku": "D92680",
    "slug": "atomy-t-shirt-s-1n-d92680",
    "name": "Atomy T-Shirt (S)-1N",
    "nameHi": "",
    "categoryId": "others",
    "categoryName": "Others",
    "shortDescription": "The Atomy India Neck Polo features a breathable CVC blend and wrinkle resistance. Ideal for a professional look in the office or on the golf course.",
    "shortDescriptionHi": "",
    "description": "The Atomy India Neck Polo features a breathable CVC blend and wrinkle resistance. Ideal for a professional look in the office or on the golf course.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "200 GRM (1*1*1mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Atomy T-Shirt (S)-1N?",
          "a": "Yes, 100% genuine Atomy Atomy T-Shirt (S)-1N sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 378,
    "originalPrice": 434,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D92680/org/900/260422000051900.jpeg",
      "https://image.atomy.com/IN/goods/D92680/org/899/260422000051899.jpeg",
      "https://image.atomy.com/IN/goods/D92680/editor/680/detail_d92680_0001.jpeg",
      "https://image.atomy.com/IN/goods/D92680/editor/680/detail_d92680_0002.jpeg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D92680/org/900/260422000051900.jpeg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 24,
    "pv": 1323,
    "productUrl": "https://in.atomy.com/product/D92680",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d92677",
    "externalProductId": "D92677",
    "sku": "D92677",
    "slug": "atomy-t-shirt-xl-1n-d92677",
    "name": "Atomy T-Shirt (XL)-1N",
    "nameHi": "",
    "categoryId": "others",
    "categoryName": "Others",
    "shortDescription": "Atomy India Neck Polo is a breathable 60% cotton blend shirt. This moisture-wicking, wrinkle-resistant piece is perfect for professionals seeking a sharp look.",
    "shortDescriptionHi": "",
    "description": "Atomy India Neck Polo is a breathable 60% cotton blend shirt. This moisture-wicking, wrinkle-resistant piece is perfect for professionals seeking a sharp look.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "200 GRM (1*1*1mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Atomy T-Shirt (XL)-1N?",
          "a": "Yes, 100% genuine Atomy Atomy T-Shirt (XL)-1N sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 378,
    "originalPrice": 434,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D92677/org/902/260422000051902.jpeg",
      "https://image.atomy.com/IN/goods/D92677/org/677/thumb_d92677_0002.jpeg",
      "https://image.atomy.com/IN/goods/D92677/org/901/260422000051901.jpeg",
      "https://image.atomy.com/IN/goods/D92677/editor/677/detail_d92677_0001.jpeg",
      "https://image.atomy.com/IN/goods/D92677/editor/677/detail_d92677_0002.jpeg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D92677/org/902/260422000051902.jpeg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 24,
    "pv": 1323,
    "productUrl": "https://in.atomy.com/product/D92677",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d90501",
    "externalProductId": "D90501",
    "sku": "D90501",
    "slug": "atomy-toothpaste-200g-x1n-d90501",
    "name": "Atomy Toothpaste 200g x1N",
    "nameHi": "",
    "categoryId": "personal-care",
    "categoryName": "Personal Care",
    "shortDescription": "Atomy Toothpaste (Propolis) prevents cavities and removes bad breath using natural propolis and green tea extracts. Ideal for families and gum health support.",
    "shortDescriptionHi": "",
    "description": "Atomy Toothpaste (Propolis) prevents cavities and removes bad breath using natural propolis and green tea extracts. Ideal for families and gum health support.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "200 GRM (1*1*1mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Atomy Toothpaste 200g x1N?",
          "a": "Yes, 100% genuine Atomy Atomy Toothpaste 200g x1N sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 359,
    "originalPrice": 412,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D90501/org/664/251130000048664.jpg",
      "https://image.atomy.com/IN/goods/D90501/org/666/251130000048666.jpg",
      "https://image.atomy.com/IN/goods/D90501/org/665/251130000048665.jpg",
      "https://image.atomy.com/IN/goods/D90501/org/663/251130000048663.jpg",
      "https://image.atomy.com/IN/goods/D90501/editor/501/detail_d90501_0001.gif"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D90501/org/664/251130000048664.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 4.5,
    "reviewCount": 31,
    "pv": 1256,
    "productUrl": "https://in.atomy.com/product/D90501",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00261",
    "externalProductId": "D00261",
    "sku": "D00261",
    "slug": "bb-cream-spf30-pa-d00261",
    "name": "BB Cream SPF30 PA++",
    "nameHi": "",
    "categoryId": "makeup",
    "categoryName": "Makeup",
    "shortDescription": "Atomy BB Cream SPF30 PA++ offers dual functional UV protection and brightening. Formulated with Black Yeast Beta-glucan for a natural, moist, and clear complexion.",
    "shortDescriptionHi": "",
    "description": "Atomy BB Cream SPF30 PA++ offers dual functional UV protection and brightening. Formulated with Black Yeast Beta-glucan for a natural, moist, and clear complexion.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "60 GRM (111*36*36mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy BB Cream SPF30 PA++?",
          "a": "Yes, 100% genuine Atomy BB Cream SPF30 PA++ sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 900,
    "originalPrice": 1035,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00261/D00261_01.jpg",
      "https://image.atomy.com/IN/goods/D00261/D00261_02.jpg",
      "https://image.atomy.com/IN/goods/D00261/D00261_03.jpg",
      "https://image.atomy.com/IN/goods/D00261/D00261_04.jpg",
      "https://image.atomy.com/IN/goods/D00261/D00261_00.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00261/D00261_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 2,
    "pv": 3150,
    "productUrl": "https://in.atomy.com/product/D00261",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00645",
    "externalProductId": "D00645",
    "sku": "D00645",
    "slug": "body-lotion-d00645",
    "name": "Body Lotion",
    "nameHi": "",
    "categoryId": "skincare",
    "categoryName": "Skincare",
    "shortDescription": "Atomy Body Care Body Lotion provides intensive moisture with organic herbs. This non-sticky formula soothes dry skin and manages keratin for a smooth finish.",
    "shortDescriptionHi": "",
    "description": "Atomy Body Care Body Lotion provides intensive moisture with organic herbs. This non-sticky formula soothes dry skin and manages keratin for a smooth finish.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "480 GRM (66*64*162mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Body Lotion?",
          "a": "Yes, 100% genuine Atomy Body Lotion sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 1200,
    "originalPrice": 1380,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00645/D00645_01.jpg",
      "https://image.atomy.com/IN/goods/D00645/D00645_02.jpg",
      "https://image.atomy.com/IN/goods/D00645/D00645_03.jpg",
      "https://image.atomy.com/IN/goods/D00645/D00645_04.jpg",
      "https://image.atomy.com/IN/goods/D00645/D00645_00.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00645/D00645_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 8,
    "pv": 4200,
    "productUrl": "https://in.atomy.com/product/D00645",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d01440",
    "externalProductId": "D01440",
    "sku": "D01440",
    "slug": "brush-pen-eyeliner-black-d01440",
    "name": "Brush Pen Eyeliner - Black",
    "nameHi": "",
    "categoryId": "personal-care",
    "categoryName": "Personal Care",
    "shortDescription": "Atomy Adelica Brush Pen Eyeliner offers smudge-proof lines. This nutrient-rich formula ensures lash health and provides easy removal using lukewarm water.",
    "shortDescriptionHi": "",
    "description": "Atomy Adelica Brush Pen Eyeliner offers smudge-proof lines. This nutrient-rich formula ensures lash health and provides easy removal using lukewarm water.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "10 GRM (15*15*130mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Brush Pen Eyeliner - Black?",
          "a": "Yes, 100% genuine Atomy Brush Pen Eyeliner - Black sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 900,
    "originalPrice": 1035,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D01440/org/811/260128000049811.jpg",
      "https://image.atomy.com/IN/goods/D01440/org/812/260128000049812.png",
      "https://image.atomy.com/IN/goods/D01440/org/810/260128000049810.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D01440/org/811/260128000049811.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 3.0,
    "reviewCount": 2,
    "pv": 3150,
    "productUrl": "https://in.atomy.com/product/D01440",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00553",
    "externalProductId": "D00553",
    "sku": "D00553",
    "slug": "cleansing-travel-kit-6pcs-per-set-d00553",
    "name": "Cleansing Travel Kit (6pcs per set)",
    "nameHi": "",
    "categoryId": "personal-care",
    "categoryName": "Personal Care",
    "shortDescription": "The Atomy Cleansing Travel Kit (6 Items) provides professional deep cleansing and hydration with oriental herbs. This portable set is ideal for travelers and professionals on the go.",
    "shortDescriptionHi": "",
    "description": "The Atomy Cleansing Travel Kit (6 Items) provides professional deep cleansing and hydration with oriental herbs. This portable set is ideal for travelers and professionals on the go.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "330 GRM (120*200*45mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Cleansing Travel Kit (6pcs per set)?",
          "a": "Yes, 100% genuine Atomy Cleansing Travel Kit (6pcs per set) sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 1500,
    "originalPrice": 1724,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00553/D00553_01.jpg",
      "https://image.atomy.com/IN/goods/D00553/D00553_02.jpg",
      "https://image.atomy.com/IN/goods/D00553/D00553_03.jpg",
      "https://image.atomy.com/IN/goods/D00553/D00553_04.jpg",
      "https://image.atomy.com/IN/goods/D00553/D00553_05.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00553/D00553_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 3,
    "pv": 5250,
    "productUrl": "https://in.atomy.com/product/D00553",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00511",
    "externalProductId": "D00511",
    "sku": "D00511",
    "slug": "compact-toothbrush-8n-d00511",
    "name": "Compact Toothbrush 8N",
    "nameHi": "",
    "categoryId": "makeup",
    "categoryName": "Makeup",
    "shortDescription": "Atomy Compact Toothbrush features 99.9% gold-infused super slim bristles for antibacterial protection. The small head is ideal for women and sensitive gums.",
    "shortDescriptionHi": "",
    "description": "Atomy Compact Toothbrush features 99.9% gold-infused super slim bristles for antibacterial protection. The small head is ideal for women and sensitive gums.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "180 GRM (240*44*100mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Compact Toothbrush 8N?",
          "a": "Yes, 100% genuine Atomy Compact Toothbrush 8N sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 950,
    "originalPrice": 1092,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00511/D00511_01.jpg",
      "https://image.atomy.com/IN/goods/D00511/D00511_02.jpg",
      "https://image.atomy.com/IN/goods/D00511/D00511_03_blue.jpg",
      "https://image.atomy.com/IN/goods/D00511/D00511_04_pink.jpg",
      "https://image.atomy.com/IN/goods/D00511/D00511_05_purple.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00511/D00511_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 4,
    "pv": 3325,
    "productUrl": "https://in.atomy.com/product/D00511",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00321",
    "externalProductId": "D00321",
    "sku": "D00321",
    "slug": "evening-care-deep-cleanser-d00321",
    "name": "Evening Care Deep Cleanser",
    "nameHi": "",
    "categoryId": "skincare",
    "categoryName": "Skincare",
    "shortDescription": "Atomy Evening Care Deep Cleanser removes makeup and impurities while cleansing pores. Ginseng and Green Tea provide a hydrating glow and firming effect.",
    "shortDescriptionHi": "",
    "description": "Atomy Evening Care Deep Cleanser removes makeup and impurities while cleansing pores. Ginseng and Green Tea provide a hydrating glow and firming effect.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "170 GRM (173*48*54mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Evening Care Deep Cleanser?",
          "a": "Yes, 100% genuine Atomy Evening Care Deep Cleanser sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 900,
    "originalPrice": 1035,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00321/D00321_01.jpg",
      "https://image.atomy.com/IN/goods/D00321/D00321_02.jpg",
      "https://image.atomy.com/IN/goods/D00321/D00321_03.jpg",
      "https://image.atomy.com/IN/goods/D00321/D00321_00.jpg",
      "https://image.atomy.com/IN/goods/D00321/editor/321/detail_d00321_0001.gif"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00321/D00321_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 4.3,
    "reviewCount": 6,
    "pv": 3150,
    "productUrl": "https://in.atomy.com/product/D00321",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00301",
    "externalProductId": "D00301",
    "sku": "D00301",
    "slug": "evening-care-foam-cleanser-d00301",
    "name": "Evening Care Foam Cleanser",
    "nameHi": "",
    "categoryId": "skincare",
    "categoryName": "Skincare",
    "shortDescription": "Remove makeup and impurities with Atomy Evening Care Foam Cleanser. Infused with Cordyceps and Rice Ferment extracts for a deep clean and hydrated, radiant finish.",
    "shortDescriptionHi": "",
    "description": "Remove makeup and impurities with Atomy Evening Care Foam Cleanser. Infused with Cordyceps and Rice Ferment extracts for a deep clean and hydrated, radiant finish.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "200 GRM (173*48*54mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Evening Care Foam Cleanser?",
          "a": "Yes, 100% genuine Atomy Evening Care Foam Cleanser sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 900,
    "originalPrice": 1035,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00301/D00301_01.jpg",
      "https://image.atomy.com/IN/goods/D00301/D00301_02.jpg",
      "https://image.atomy.com/IN/goods/D00301/D00301_03.jpg",
      "https://image.atomy.com/IN/goods/D00301/D00301_00.jpg",
      "https://image.atomy.com/IN/goods/D00301/editor/301/detail_d00301_0001.gif"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00301/D00301_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": true,
    "isBestseller": true,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 27,
    "pv": 3150,
    "productUrl": "https://in.atomy.com/product/D00301",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00331",
    "externalProductId": "D00331",
    "sku": "D00331",
    "slug": "evening-care-peel-off-mask-d00331",
    "name": "Evening Care Peel Off Mask",
    "nameHi": "",
    "categoryId": "skincare",
    "categoryName": "Skincare",
    "shortDescription": "Atomy Evening Care Peel-Off Mask minimizes pores and boosts elasticity using Amethyst and Jade powders. Ideal for home aesthetics to achieve firm, clear skin.",
    "shortDescriptionHi": "",
    "description": "Atomy Evening Care Peel-Off Mask minimizes pores and boosts elasticity using Amethyst and Jade powders. Ideal for home aesthetics to achieve firm, clear skin.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "150 GRM (173*42*49mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Evening Care Peel Off Mask?",
          "a": "Yes, 100% genuine Atomy Evening Care Peel Off Mask sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 900,
    "originalPrice": 1035,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00331/D00331_01.jpg",
      "https://image.atomy.com/IN/goods/D00331/D00331_02.jpg",
      "https://image.atomy.com/IN/goods/D00331/D00331_03.jpg",
      "https://image.atomy.com/IN/goods/D00331/D00331_00.jpg",
      "https://image.atomy.com/IN/goods/D00331/editor/331/detail_d00331_0001.gif"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00331/D00331_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 1,
    "pv": 3150,
    "productUrl": "https://in.atomy.com/product/D00331",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00311",
    "externalProductId": "D00311",
    "sku": "D00311",
    "slug": "evening-care-peeling-gel-d00311",
    "name": "Evening Care Peeling Gel",
    "nameHi": "",
    "categoryId": "skincare",
    "categoryName": "Skincare",
    "shortDescription": "Atomy Evening Care Peeling Gel is a gentle enzymatic exfoliator that removes dead skin and sebum. It uses Ceramide NP to provide a smooth and radiant finish.",
    "shortDescriptionHi": "",
    "description": "Atomy Evening Care Peeling Gel is a gentle enzymatic exfoliator that removes dead skin and sebum. It uses Ceramide NP to provide a smooth and radiant finish.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "150 GRM (174*43*49mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Evening Care Peeling Gel?",
          "a": "Yes, 100% genuine Atomy Evening Care Peeling Gel sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 900,
    "originalPrice": 1035,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00311/D00311_01.jpg",
      "https://image.atomy.com/IN/goods/D00311/D00311_02.jpg",
      "https://image.atomy.com/IN/goods/D00311/D00311_03.jpg",
      "https://image.atomy.com/IN/goods/D00311/D00311_00.jpg",
      "https://image.atomy.com/IN/goods/D00311/editor/311/detail_d00311_0001.gif"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00311/D00311_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 24,
    "pv": 3150,
    "productUrl": "https://in.atomy.com/product/D00311",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00351",
    "externalProductId": "D00351",
    "sku": "D00351",
    "slug": "evening-care-set-4-pcs-per-set-d00351",
    "name": "Evening Care Set(4 Pcs per Set)",
    "nameHi": "",
    "categoryId": "skincare",
    "categoryName": "Skincare",
    "shortDescription": "Atomy Evening Care 4 Set provides a systematic 4-step home spa routine. Infused with Centella and Ginseng for deep cleansing, exfoliation, and radiant skin.",
    "shortDescriptionHi": "",
    "description": "Atomy Evening Care 4 Set provides a systematic 4-step home spa routine. Infused with Centella and Ginseng for deep cleansing, exfoliation, and radiant skin.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "870 GRM (330*206*51mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Evening Care Set(4 Pcs per Set)?",
          "a": "Yes, 100% genuine Atomy Evening Care Set(4 Pcs per Set) sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 3300,
    "originalPrice": 3794,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00351/D00351_01.jpg",
      "https://image.atomy.com/IN/goods/D00351/D00351_02.jpg",
      "https://image.atomy.com/IN/goods/D00351/D00351_03.jpg",
      "https://image.atomy.com/IN/goods/D00351/D00351_04.jpg",
      "https://image.atomy.com/IN/goods/D00351/D00351_05.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00351/D00351_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 7,
    "pv": 11550,
    "productUrl": "https://in.atomy.com/product/D00351",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00828",
    "externalProductId": "D00828",
    "sku": "D00828",
    "slug": "fabric-detergent-1kg-d00828",
    "name": "Fabric Detergent (1KG)",
    "nameHi": "",
    "categoryId": "home-care",
    "categoryName": "Home Care",
    "shortDescription": "Atomy Fabric Detergent is a concentrated, plant-based powder designed for residue-free cleaning. It is zeolite-free, eco-friendly, and safe for infants and sensitive skin.",
    "shortDescriptionHi": "",
    "description": "Atomy Fabric Detergent is a concentrated, plant-based powder designed for residue-free cleaning. It is zeolite-free, eco-friendly, and safe for infants and sensitive skin.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "1000 GRM (190*90*280mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Fabric Detergent (1KG)?",
          "a": "Yes, 100% genuine Atomy Fabric Detergent (1KG) sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 800,
    "originalPrice": 919,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00828/D00828_01.jpg",
      "https://image.atomy.com/IN/goods/D00828/D00828_02.jpg",
      "https://image.atomy.com/IN/goods/D00828/D00828_03.jpg",
      "https://image.atomy.com/IN/goods/D00828/D00828_00.jpg",
      "https://image.atomy.com/IN/goods/D00828/editor/828/detail_d00828_0001.gif"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00828/D00828_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 2,
    "pv": 2800,
    "productUrl": "https://in.atomy.com/product/D00828",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00681",
    "externalProductId": "D00681",
    "sku": "D00681",
    "slug": "hair-essential-oil-d00681",
    "name": "Hair Essential Oil",
    "nameHi": "",
    "categoryId": "personal-care",
    "categoryName": "Personal Care",
    "shortDescription": "Atomy Hair Essential Oil features a 6-oil blend for deep nourishment and heat protection. It repairs damaged ends and controls frizz for a silky finish.",
    "shortDescriptionHi": "",
    "description": "Atomy Hair Essential Oil features a 6-oil blend for deep nourishment and heat protection. It repairs damaged ends and controls frizz for a silky finish.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "150 GRM (45*40*170mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Hair Essential Oil?",
          "a": "Yes, 100% genuine Atomy Hair Essential Oil sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 1150,
    "originalPrice": 1322,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00681/D00681_01.jpg",
      "https://image.atomy.com/IN/goods/D00681/D00681_02.jpg",
      "https://image.atomy.com/IN/goods/D00681/D00681_03.jpg",
      "https://image.atomy.com/IN/goods/D00681/D00681_04.jpg",
      "https://image.atomy.com/IN/goods/D00681/D00681_00.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00681/D00681_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 5,
    "pv": 4025,
    "productUrl": "https://in.atomy.com/product/D00681",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00541",
    "externalProductId": "D00541",
    "sku": "D00541",
    "slug": "hand-soap-d00541",
    "name": "Hand Soap",
    "nameHi": "",
    "categoryId": "personal-care",
    "categoryName": "Personal Care",
    "shortDescription": "Atomy Hand Soap is a 98% natural antibacterial wash featuring a pH-balanced, sulfate-free formula with bergamot and citrus for gentle, daily family cleansing.",
    "shortDescriptionHi": "",
    "description": "Atomy Hand Soap is a 98% natural antibacterial wash featuring a pH-balanced, sulfate-free formula with bergamot and citrus for gentle, daily family cleansing.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "490 GRM (70*70*140mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Hand Soap?",
          "a": "Yes, 100% genuine Atomy Hand Soap sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 500,
    "originalPrice": 575,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00541/D00541_01.jpg",
      "https://image.atomy.com/IN/goods/D00541/D00541_02.jpg",
      "https://image.atomy.com/IN/goods/D00541/D00541_03.jpg",
      "https://image.atomy.com/IN/goods/D00541/D00541_04.jpg",
      "https://image.atomy.com/IN/goods/D00541/D00541_00.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00541/D00541_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 24,
    "pv": 1750,
    "productUrl": "https://in.atomy.com/product/D00541",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00266",
    "externalProductId": "D00266",
    "sku": "D00266",
    "slug": "healthy-glow-base-spf30-pa-d00266",
    "name": "Healthy Glow Base SPF30 PA++",
    "nameHi": "",
    "categoryId": "skincare",
    "categoryName": "Skincare",
    "shortDescription": "Atomy Healthy Glow Base SPF30 PA++ is a triple-functional makeup base providing radiance, UV protection, and wrinkle care with pearl powder for a natural glow.",
    "shortDescriptionHi": "",
    "description": "Atomy Healthy Glow Base SPF30 PA++ is a triple-functional makeup base providing radiance, UV protection, and wrinkle care with pearl powder for a natural glow.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "100 GRM (130*39*39mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Healthy Glow Base SPF30 PA++?",
          "a": "Yes, 100% genuine Atomy Healthy Glow Base SPF30 PA++ sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 1400,
    "originalPrice": 1609,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00266/D00266_01.jpg",
      "https://image.atomy.com/IN/goods/D00266/D00266_02.jpg",
      "https://image.atomy.com/IN/goods/D00266/D00266_03.jpg",
      "https://image.atomy.com/IN/goods/D00266/D00266_04.jpg",
      "https://image.atomy.com/IN/goods/D00266/D00266_00.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00266/D00266_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 4,
    "pv": 4900,
    "productUrl": "https://in.atomy.com/product/D00266",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00101",
    "externalProductId": "D00101",
    "sku": "D00101",
    "slug": "hemohim-1set-d00101",
    "name": "HemoHIM *1set",
    "nameHi": "",
    "categoryId": "health",
    "categoryName": "Health",
    "shortDescription": "Atomy HemoHIM Botanical-Mix enhances immune health and NK cell activity. It provides vital energy and fatigue recovery for exhausted workers, seniors, and students.",
    "shortDescriptionHi": "",
    "description": "Atomy HemoHIM Botanical-Mix enhances immune health and NK cell activity. It provides vital energy and fatigue recovery for exhausted workers, seniors, and students.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "1500 GRM (266*237*65mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy HemoHIM *1set?",
          "a": "Yes, 100% genuine Atomy HemoHIM *1set sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 13000,
    "originalPrice": 14949,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00101/D00101_01.jpg",
      "https://image.atomy.com/IN/goods/D00101/D00101_02.jpg",
      "https://image.atomy.com/IN/goods/D00101/D00101_03.jpg",
      "https://image.atomy.com/IN/goods/D00101/D00101_04.jpg",
      "https://image.atomy.com/IN/goods/D00101/org/085/260326000051085.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00101/D00101_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": true,
    "isBestseller": true,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 13,
    "pv": 45500,
    "productUrl": "https://in.atomy.com/product/D00101",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00102",
    "externalProductId": "D00102",
    "sku": "D00102",
    "slug": "hemohim-2set-d00102",
    "name": "HemoHIM *2set",
    "nameHi": "",
    "categoryId": "health",
    "categoryName": "Health",
    "shortDescription": "Atomy HemoHIM (HemoHIM Botanical-Mix) is a patented health supplement by KAERI designed to boost immune function, activate NK cells, and restore daily vitality.",
    "shortDescriptionHi": "",
    "description": "Atomy HemoHIM (HemoHIM Botanical-Mix) is a patented health supplement by KAERI designed to boost immune function, activate NK cells, and restore daily vitality.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "3000 GRM (266*237*65mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy HemoHIM *2set?",
          "a": "Yes, 100% genuine Atomy HemoHIM *2set sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 26000,
    "originalPrice": 29899,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00102/org/802/261016000055802.jpg",
      "https://image.atomy.com/IN/goods/D00102/org/412/261007000055412.jpg",
      "https://image.atomy.com/IN/goods/D00102/org/413/261007000055413.jpg",
      "https://image.atomy.com/IN/goods/D00102/org/414/261007000055414.jpg",
      "https://image.atomy.com/IN/goods/D00102/org/475/261007000055475.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00102/org/802/261016000055802.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 2,
    "pv": 91000,
    "productUrl": "https://in.atomy.com/product/D00102",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00104",
    "externalProductId": "D00104",
    "sku": "D00104",
    "slug": "hemohim-4set-d00104",
    "name": "HemoHIM *4set",
    "nameHi": "",
    "categoryId": "health",
    "categoryName": "Health",
    "shortDescription": "Atomy HemoHIM is a KAERI-developed health supplement for immune support and energy. This patented liquid aids fatigue recovery for busy workers and seniors.",
    "shortDescriptionHi": "",
    "description": "Atomy HemoHIM is a KAERI-developed health supplement for immune support and energy. This patented liquid aids fatigue recovery for busy workers and seniors.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "7500 GRM (1*1*1mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy HemoHIM *4set?",
          "a": "Yes, 100% genuine Atomy HemoHIM *4set sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 52000,
    "originalPrice": 59799,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00104/org/816/261016000055816.jpg",
      "https://image.atomy.com/IN/goods/D00104/org/462/261007000055462.jpg",
      "https://image.atomy.com/IN/goods/D00104/org/463/261007000055463.jpg",
      "https://image.atomy.com/IN/goods/D00104/org/464/261007000055464.jpg",
      "https://image.atomy.com/IN/goods/D00104/org/465/261007000055465.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00104/org/816/261016000055816.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 2,
    "pv": 182000,
    "productUrl": "https://in.atomy.com/product/D00104",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00631",
    "externalProductId": "D00631",
    "sku": "D00631",
    "slug": "herbal-body-cleanser-d00631",
    "name": "Herbal Body Cleanser",
    "nameHi": "",
    "categoryId": "skincare",
    "categoryName": "Skincare",
    "shortDescription": "Atomy Herbal Body Cleanser provides deep cleansing and nourishment with an oriental medicine formula. Its organic herbs and HBADS soothe sensitive skin for all.",
    "shortDescriptionHi": "",
    "description": "Atomy Herbal Body Cleanser provides deep cleansing and nourishment with an oriental medicine formula. Its organic herbs and HBADS soothe sensitive skin for all.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "500 GRM (67*67*210mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Herbal Body Cleanser?",
          "a": "Yes, 100% genuine Atomy Herbal Body Cleanser sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 1000,
    "originalPrice": 1150,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00631/D00631_01.jpg",
      "https://image.atomy.com/IN/goods/D00631/D00631_02.jpg",
      "https://image.atomy.com/IN/goods/D00631/D00631_03.jpg",
      "https://image.atomy.com/IN/goods/D00631/D00631_04.jpg",
      "https://image.atomy.com/IN/goods/D00631/D00631_00.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00631/D00631_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 3,
    "pv": 3500,
    "productUrl": "https://in.atomy.com/product/D00631",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00661",
    "externalProductId": "D00661",
    "sku": "D00661",
    "slug": "herbal-hair-conditioner-d00661",
    "name": "Herbal Hair Conditioner",
    "nameHi": "",
    "categoryId": "personal-care",
    "categoryName": "Personal Care",
    "shortDescription": "Atomy Herbal Hair Conditioner uses an Oriental Herbal Complex and Protein Coating Technology to repair damaged hair, providing intense moisturizing and frizz control.",
    "shortDescriptionHi": "",
    "description": "Atomy Herbal Hair Conditioner uses an Oriental Herbal Complex and Protein Coating Technology to repair damaged hair, providing intense moisturizing and frizz control.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "500 GRM (67*67*210mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Herbal Hair Conditioner?",
          "a": "Yes, 100% genuine Atomy Herbal Hair Conditioner sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 1400,
    "originalPrice": 1609,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00661/D00661_01.jpg",
      "https://image.atomy.com/IN/goods/D00661/D00661_02.jpg",
      "https://image.atomy.com/IN/goods/D00661/D00661_03.jpg",
      "https://image.atomy.com/IN/goods/D00661/D00661_04.jpg",
      "https://image.atomy.com/IN/goods/D00661/D00661_00.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00661/D00661_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 2,
    "pv": 4900,
    "productUrl": "https://in.atomy.com/product/D00661",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00601",
    "externalProductId": "D00601",
    "sku": "D00601",
    "slug": "herbal-hair-shampoo-d00601",
    "name": "Herbal Hair Shampoo",
    "nameHi": "",
    "categoryId": "personal-care",
    "categoryName": "Personal Care",
    "shortDescription": "Atomy Herbal Hair Shampoo provides deep scalp cleansing with an oriental herbal formula to remove waste, enhance elasticity, and restore texture for healthy hair.",
    "shortDescriptionHi": "",
    "description": "Atomy Herbal Hair Shampoo provides deep scalp cleansing with an oriental herbal formula to remove waste, enhance elasticity, and restore texture for healthy hair.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "500 GRM (67*67*210mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Herbal Hair Shampoo?",
          "a": "Yes, 100% genuine Atomy Herbal Hair Shampoo sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 1050,
    "originalPrice": 1207,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00601/D00601_01.jpg",
      "https://image.atomy.com/IN/goods/D00601/D00601_02.jpg",
      "https://image.atomy.com/IN/goods/D00601/D00601_03.jpg",
      "https://image.atomy.com/IN/goods/D00601/D00601_04.jpg",
      "https://image.atomy.com/IN/goods/D00601/D00601_00.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00601/D00601_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 4.0,
    "reviewCount": 12,
    "pv": 3675,
    "productUrl": "https://in.atomy.com/product/D00601",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00611",
    "externalProductId": "D00611",
    "sku": "D00611",
    "slug": "herbal-hair-treatment-d00611",
    "name": "Herbal Hair Treatment",
    "nameHi": "",
    "categoryId": "personal-care",
    "categoryName": "Personal Care",
    "shortDescription": "Atomy Herbal Hair Treatment uses a patented herbal formula to restore moisture balance and prevent split ends. Ideal for dry hair seeking deep nutrient supply.",
    "shortDescriptionHi": "",
    "description": "Atomy Herbal Hair Treatment uses a patented herbal formula to restore moisture balance and prevent split ends. Ideal for dry hair seeking deep nutrient supply.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "250 GRM (57*57*193mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Herbal Hair Treatment?",
          "a": "Yes, 100% genuine Atomy Herbal Hair Treatment sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 800,
    "originalPrice": 919,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00611/D00611_01.jpg",
      "https://image.atomy.com/IN/goods/D00611/D00611_02.jpg",
      "https://image.atomy.com/IN/goods/D00611/D00611_03.jpg",
      "https://image.atomy.com/IN/goods/D00611/D00611_00.jpg",
      "https://image.atomy.com/IN/goods/D00611/editor/611/detail_d00611_0001.gif"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00611/D00611_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 1,
    "pv": 2800,
    "productUrl": "https://in.atomy.com/product/D00611",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00755",
    "externalProductId": "D00755",
    "sku": "D00755",
    "slug": "hydra-brightening-capsule-essence-d00755",
    "name": "Hydra Brightening  capsule essence",
    "nameHi": "",
    "categoryId": "skincare",
    "categoryName": "Skincare",
    "shortDescription": "Atomy Hydra Brightening Capsule Essence is a 2-in-1 toner-essence hybrid providing intense hydration and brightening for dull skin with micro-encapsulated Vitamin E.",
    "shortDescriptionHi": "",
    "description": "Atomy Hydra Brightening Capsule Essence is a 2-in-1 toner-essence hybrid providing intense hydration and brightening for dull skin with micro-encapsulated Vitamin E.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "250 GRM (50*50*180mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Hydra Brightening  capsule essence?",
          "a": "Yes, 100% genuine Atomy Hydra Brightening  capsule essence sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 1600,
    "originalPrice": 1839,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00755/D00755_01.jpg",
      "https://image.atomy.com/IN/goods/D00755/D00755_02.jpg",
      "https://image.atomy.com/IN/goods/D00755/D00755_03.jpg",
      "https://image.atomy.com/IN/goods/D00755/D00755_04.jpg",
      "https://image.atomy.com/IN/goods/D00755/D00755_00.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00755/D00755_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 1,
    "pv": 5600,
    "productUrl": "https://in.atomy.com/product/D00755",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00756",
    "externalProductId": "D00756",
    "sku": "D00756",
    "slug": "hydra-brightening-cream-d00756",
    "name": "Hydra Brightening  cream",
    "nameHi": "",
    "categoryId": "skincare",
    "categoryName": "Skincare",
    "shortDescription": "Atomy Hydra Brightening Cream provides deep hydration and radiance with Vitamin B12. It strengthens skin barriers and is perfect for dry, dull, and sensitive skin.",
    "shortDescriptionHi": "",
    "description": "Atomy Hydra Brightening Cream provides deep hydration and radiance with Vitamin B12. It strengthens skin barriers and is perfect for dry, dull, and sensitive skin.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "160 GRM (65*65*55mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Hydra Brightening  cream?",
          "a": "Yes, 100% genuine Atomy Hydra Brightening  cream sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 1600,
    "originalPrice": 1839,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00756/D00756_01.jpg",
      "https://image.atomy.com/IN/goods/D00756/D00756_02.jpg",
      "https://image.atomy.com/IN/goods/D00756/D00756_03.jpg",
      "https://image.atomy.com/IN/goods/D00756/D00756_04.jpg",
      "https://image.atomy.com/IN/goods/D00756/D00756_00.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00756/D00756_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 4.3,
    "reviewCount": 6,
    "pv": 5600,
    "productUrl": "https://in.atomy.com/product/D00756",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00757",
    "externalProductId": "D00757",
    "sku": "D00757",
    "slug": "hydra-brightening-care-set-2-pcs-per-set-d00757",
    "name": "Hydra Brightening Care Set (2 Pcs per Set)",
    "nameHi": "",
    "categoryId": "skincare",
    "categoryName": "Skincare",
    "shortDescription": "Atomy Hydra Brightening Care Set offers deep hydration and brightening with birch tree sap and niacinamide. This 2-step system revitalizes dry, sensitive skin.",
    "shortDescriptionHi": "",
    "description": "Atomy Hydra Brightening Care Set offers deep hydration and brightening with birch tree sap and niacinamide. This 2-step system revitalizes dry, sensitive skin.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "500 GRM (138*198*60mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Hydra Brightening Care Set (2 Pcs per Set)?",
          "a": "Yes, 100% genuine Atomy Hydra Brightening Care Set (2 Pcs per Set) sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 3000,
    "originalPrice": 3449,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00757/D00757_01.jpg",
      "https://image.atomy.com/IN/goods/D00757/D00757_02.jpg",
      "https://image.atomy.com/IN/goods/D00757/D00757_03.jpg",
      "https://image.atomy.com/IN/goods/D00757/D00757_04.jpg",
      "https://image.atomy.com/IN/goods/D00757/D00757_05.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00757/D00757_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 4.7,
    "reviewCount": 10,
    "pv": 10500,
    "productUrl": "https://in.atomy.com/product/D00757",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00460",
    "externalProductId": "D00460",
    "sku": "D00460",
    "slug": "lip-treatment-d00460",
    "name": "Lip Treatment",
    "nameHi": "",
    "categoryId": "makeup",
    "categoryName": "Makeup",
    "shortDescription": "Atomy Lip Treatment delivers intensive hydration and barrier repair with shea butter and rose oil, offering a non-sticky, high-gloss finish for chapped lips.",
    "shortDescriptionHi": "",
    "description": "Atomy Lip Treatment delivers intensive hydration and barrier repair with shea butter and rose oil, offering a non-sticky, high-gloss finish for chapped lips.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "20 GRM (76*19*19mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Lip Treatment?",
          "a": "Yes, 100% genuine Atomy Lip Treatment sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 600,
    "originalPrice": 690,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00460/D00460_01.jpg",
      "https://image.atomy.com/IN/goods/D00460/D00460_02.jpg",
      "https://image.atomy.com/IN/goods/D00460/D00460_03.jpg",
      "https://image.atomy.com/IN/goods/D00460/D00460_04.jpg",
      "https://image.atomy.com/IN/goods/D00460/D00460_00.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00460/D00460_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 7,
    "pv": 2100,
    "productUrl": "https://in.atomy.com/product/D00460",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00520",
    "externalProductId": "D00520",
    "sku": "D00520",
    "slug": "oral-care-system-1set-d00520",
    "name": "Oral Care System*1set",
    "nameHi": "",
    "categoryId": "personal-care",
    "categoryName": "Personal Care",
    "shortDescription": "Atomy Oral Care System is a premium 4-piece portable kit featuring propolis toothpaste and super slim bristles for plaque removal and sensitive gum protection.",
    "shortDescriptionHi": "",
    "description": "Atomy Oral Care System is a premium 4-piece portable kit featuring propolis toothpaste and super slim bristles for plaque removal and sensitive gum protection.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "460 GRM (205*50*125mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Oral Care System*1set?",
          "a": "Yes, 100% genuine Atomy Oral Care System*1set sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 1150,
    "originalPrice": 1322,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00520/D00520_01.jpg",
      "https://image.atomy.com/IN/goods/D00520/D00520_02.jpg",
      "https://image.atomy.com/IN/goods/D00520/D00520_03.jpg",
      "https://image.atomy.com/IN/goods/D00520/D00520_04.jpg",
      "https://image.atomy.com/IN/goods/D00520/D00520_00.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00520/D00520_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 9,
    "pv": 4025,
    "productUrl": "https://in.atomy.com/product/D00520",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00620",
    "externalProductId": "D00620",
    "sku": "D00620",
    "slug": "saengmodan-hair-tonic-d00620",
    "name": "Saengmodan Hair Tonic",
    "nameHi": "",
    "categoryId": "personal-care",
    "categoryName": "Personal Care",
    "shortDescription": "Atomy Saengmodan Hair Tonic uses herbal fermentation to alleviate hair loss and increase thickness. It cools heat-stressed scalps and provides vital nutrients.",
    "shortDescriptionHi": "",
    "description": "Atomy Saengmodan Hair Tonic uses herbal fermentation to alleviate hair loss and increase thickness. It cools heat-stressed scalps and provides vital nutrients.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "240 GRM (49*49*190mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Saengmodan Hair Tonic?",
          "a": "Yes, 100% genuine Atomy Saengmodan Hair Tonic sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 1300,
    "originalPrice": 1494,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00620/D00620_01.jpg",
      "https://image.atomy.com/IN/goods/D00620/D00620_02.jpg",
      "https://image.atomy.com/IN/goods/D00620/D00620_03.jpg",
      "https://image.atomy.com/IN/goods/D00620/D00620_04.jpg",
      "https://image.atomy.com/IN/goods/D00620/D00620_00.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00620/D00620_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 3.7,
    "reviewCount": 3,
    "pv": 4550,
    "productUrl": "https://in.atomy.com/product/D00620",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00693",
    "externalProductId": "D00693",
    "sku": "D00693",
    "slug": "scalpcare-2-set-d00693",
    "name": "Scalpcare 2 Set",
    "nameHi": "",
    "categoryId": "personal-care",
    "categoryName": "Personal Care",
    "shortDescription": "Revitalize your scalp with the Atomy Scalpcare 2-Piece Set. Featuring an Ayurvedic recipe, it deep-cleanses pores and balances oil for a healthier scalp.",
    "shortDescriptionHi": "",
    "description": "Revitalize your scalp with the Atomy Scalpcare 2-Piece Set. Featuring an Ayurvedic recipe, it deep-cleanses pores and balances oil for a healthier scalp.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "1000 GRM (144*75*202mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Scalpcare 2 Set?",
          "a": "Yes, 100% genuine Atomy Scalpcare 2 Set sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 2800,
    "originalPrice": 3219,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00693/D00693_01.jpg",
      "https://image.atomy.com/IN/goods/D00693/D00693_02.jpg",
      "https://image.atomy.com/IN/goods/D00693/D00693_03.jpg",
      "https://image.atomy.com/IN/goods/D00693/D00693_04.jpg",
      "https://image.atomy.com/IN/goods/D00693/D00693_05.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00693/D00693_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 4.8,
    "reviewCount": 5,
    "pv": 9800,
    "productUrl": "https://in.atomy.com/product/D00693",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00692",
    "externalProductId": "D00692",
    "sku": "D00692",
    "slug": "scalpcare-hair-conditioner-d00692",
    "name": "Scalpcare Hair Conditioner",
    "nameHi": "",
    "categoryId": "personal-care",
    "categoryName": "Personal Care",
    "shortDescription": "Atomy Scalpcare Hair Conditioner revitalizes the scalp with an Ayurvedic recipe. It balances moisture and controls sebum, perfect for oily or sensitive hair types.",
    "shortDescriptionHi": "",
    "description": "Atomy Scalpcare Hair Conditioner revitalizes the scalp with an Ayurvedic recipe. It balances moisture and controls sebum, perfect for oily or sensitive hair types.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "500 GRM (195*71*71mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Scalpcare Hair Conditioner?",
          "a": "Yes, 100% genuine Atomy Scalpcare Hair Conditioner sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 1600,
    "originalPrice": 1839,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00692/D00692_01.jpg",
      "https://image.atomy.com/IN/goods/D00692/D00692_02.jpg",
      "https://image.atomy.com/IN/goods/D00692/D00692_03.jpg",
      "https://image.atomy.com/IN/goods/D00692/D00692_04.jpg",
      "https://image.atomy.com/IN/goods/D00692/D00692_00.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00692/D00692_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 1,
    "pv": 5600,
    "productUrl": "https://in.atomy.com/product/D00692",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00691",
    "externalProductId": "D00691",
    "sku": "D00691",
    "slug": "scalpcare-hair-shampoo-d00691",
    "name": "Scalpcare Hair Shampoo",
    "nameHi": "",
    "categoryId": "personal-care",
    "categoryName": "Personal Care",
    "shortDescription": "Atomy Scalpcare Hair Shampoo uses an Ayurvedic herbal recipe to cleanse pores and remove dead skin. Clinically proven to improve sebum levels in two weeks.",
    "shortDescriptionHi": "",
    "description": "Atomy Scalpcare Hair Shampoo uses an Ayurvedic herbal recipe to cleanse pores and remove dead skin. Clinically proven to improve sebum levels in two weeks.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "500 GRM (195*71*71mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Scalpcare Hair Shampoo?",
          "a": "Yes, 100% genuine Atomy Scalpcare Hair Shampoo sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 1350,
    "originalPrice": 1552,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00691/D00691_01.jpg",
      "https://image.atomy.com/IN/goods/D00691/D00691_02.jpg",
      "https://image.atomy.com/IN/goods/D00691/D00691_03.jpg",
      "https://image.atomy.com/IN/goods/D00691/D00691_04.jpg",
      "https://image.atomy.com/IN/goods/D00691/D00691_00.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00691/D00691_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 4.5,
    "reviewCount": 8,
    "pv": 4725,
    "productUrl": "https://in.atomy.com/product/D00691",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d92445",
    "externalProductId": "D92445",
    "sku": "D92445",
    "slug": "shopping-bag-non-woven-d92445",
    "name": "Shopping Bag(Non Woven)",
    "nameHi": "",
    "categoryId": "others",
    "categoryName": "Others",
    "shortDescription": "ETC, Supplementary Goods, Shopping Bag(Non Woven)",
    "shortDescriptionHi": "",
    "description": "ETC, Supplementary Goods, Shopping Bag(Non Woven)",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "10 GRM (1*1*1mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Shopping Bag(Non Woven)?",
          "a": "Yes, 100% genuine Atomy Shopping Bag(Non Woven) sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 28,
    "originalPrice": 32,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D92445/org/970/260424000051970.jpeg",
      "https://image.atomy.com/IN/goods/D92445/org/969/260424000051969.jpeg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D92445/org/970/260424000051970.jpeg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 1,
    "pv": 98,
    "productUrl": "https://in.atomy.com/product/D92445",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00835",
    "externalProductId": "D00835",
    "sku": "D00835",
    "slug": "stainless-scrubber-2n-d00835",
    "name": "Stainless Scrubber 2N",
    "nameHi": "",
    "categoryId": "home-care",
    "categoryName": "Home Care",
    "shortDescription": "The Atomy Stainless Steel Scrubber features premium rust resistance and superior scouring power. Durable and ergonomic, it is ideal for kitchens and grills.",
    "shortDescriptionHi": "",
    "description": "The Atomy Stainless Steel Scrubber features premium rust resistance and superior scouring power. Durable and ergonomic, it is ideal for kitchens and grills.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "60 GRM (160*90*30mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Stainless Scrubber 2N?",
          "a": "Yes, 100% genuine Atomy Stainless Scrubber 2N sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 400,
    "originalPrice": 459,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00835/D00835_01.jpg",
      "https://image.atomy.com/IN/goods/D00835/D00835_02.jpg",
      "https://image.atomy.com/IN/goods/D00835/D00835_03.jpg",
      "https://image.atomy.com/IN/goods/D00835/D00835_04.jpg",
      "https://image.atomy.com/IN/goods/D00835/D00835_00.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00835/D00835_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 4.8,
    "reviewCount": 6,
    "pv": 1400,
    "productUrl": "https://in.atomy.com/product/D00835",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00281",
    "externalProductId": "D00281",
    "sku": "D00281",
    "slug": "sunscreen-spf50-pa-beige-d00281",
    "name": "Sunscreen SPF50+ PA+++(Beige )",
    "nameHi": "",
    "categoryId": "skincare",
    "categoryName": "Skincare",
    "shortDescription": "Atomy Sunscreen Beige SPF 50+ PA+++ provides powerful UV protection and skin tone correction. This non-sticky, herbal formula is ideal for sensitive skin types.",
    "shortDescriptionHi": "",
    "description": "Atomy Sunscreen Beige SPF 50+ PA+++ provides powerful UV protection and skin tone correction. This non-sticky, herbal formula is ideal for sensitive skin types.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "80 GRM (47*142*32mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Sunscreen SPF50+ PA+++(Beige )?",
          "a": "Yes, 100% genuine Atomy Sunscreen SPF50+ PA+++(Beige ) sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 900,
    "originalPrice": 1035,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00281/D00281_01.jpg",
      "https://image.atomy.com/IN/goods/D00281/D00281_02.jpg",
      "https://image.atomy.com/IN/goods/D00281/D00281_03.jpg",
      "https://image.atomy.com/IN/goods/D00281/D00281_04.jpg",
      "https://image.atomy.com/IN/goods/D00281/D00281_00.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00281/D00281_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": true,
    "isBestseller": true,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 4.7,
    "reviewCount": 14,
    "pv": 3150,
    "productUrl": "https://in.atomy.com/product/D00281",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00271",
    "externalProductId": "D00271",
    "sku": "D00271",
    "slug": "sunscreen-spf50-pa-white-d00271",
    "name": "Sunscreen SPF50+ PA+++(White )",
    "nameHi": "",
    "categoryId": "skincare",
    "categoryName": "Skincare",
    "shortDescription": "Atomy Sunscreen White SPF 50+ PA+++ provides powerful broad-spectrum UV protection with a matte, non-sticky finish, ideal for sensitive skin and sports.",
    "shortDescriptionHi": "",
    "description": "Atomy Sunscreen White SPF 50+ PA+++ provides powerful broad-spectrum UV protection with a matte, non-sticky finish, ideal for sensitive skin and sports.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "80 GRM (47*142*32mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Sunscreen SPF50+ PA+++(White )?",
          "a": "Yes, 100% genuine Atomy Sunscreen SPF50+ PA+++(White ) sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 900,
    "originalPrice": 1035,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00271/D00271_01.jpg",
      "https://image.atomy.com/IN/goods/D00271/D00271_02.jpg",
      "https://image.atomy.com/IN/goods/D00271/D00271_03.jpg",
      "https://image.atomy.com/IN/goods/D00271/D00271_04.jpg",
      "https://image.atomy.com/IN/goods/D00271/D00271_00.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00271/D00271_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 7,
    "pv": 3150,
    "productUrl": "https://in.atomy.com/product/D00271",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d01443",
    "externalProductId": "D01443",
    "sku": "D01443",
    "slug": "synergy-ampoule-program-1-set-d01443",
    "name": "Synergy Ampoule Program *1 set",
    "nameHi": "",
    "categoryId": "skincare",
    "categoryName": "Skincare",
    "shortDescription": "Atomy Synergy Ampoule Program provides 4-week intensive care with Vitamin C and 24K Gold. Experience professional brightening, lifting, and skin regeneration.",
    "shortDescriptionHi": "",
    "description": "Atomy Synergy Ampoule Program provides 4-week intensive care with Vitamin C and 24K Gold. Experience professional brightening, lifting, and skin regeneration.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "300 GRM (1*1*1mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Synergy Ampoule Program *1 set?",
          "a": "Yes, 100% genuine Atomy Synergy Ampoule Program *1 set sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 8500,
    "originalPrice": 9775,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D01443/D01443_01.jpg",
      "https://image.atomy.com/IN/goods/D01443/D01443_02.jpg",
      "https://image.atomy.com/IN/goods/D01443/D01443_00.jpg",
      "https://image.atomy.com/IN/goods/D01443/editor/443/detail_d01443_0001.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D01443/D01443_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 24,
    "pv": 29750,
    "productUrl": "https://in.atomy.com/product/D01443",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00194",
    "externalProductId": "D00194",
    "sku": "D00194",
    "slug": "the-fame-essence-d00194",
    "name": "The Fame Essence",
    "nameHi": "",
    "categoryId": "skincare",
    "categoryName": "Skincare",
    "shortDescription": "Atomy The Fame Essence provides concentrated nutrition and deep hydration using Panthenol and Ceramide. It repairs the skin barrier for a smooth and glowing look.",
    "shortDescriptionHi": "",
    "description": "Atomy The Fame Essence provides concentrated nutrition and deep hydration using Panthenol and Ceramide. It repairs the skin barrier for a smooth and glowing look.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "130 GRM (40*40*140mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy The Fame Essence?",
          "a": "Yes, 100% genuine Atomy The Fame Essence sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 2100,
    "originalPrice": 2415,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00194/D00194_01.jpg",
      "https://image.atomy.com/IN/goods/D00194/D00194_02.jpg",
      "https://image.atomy.com/IN/goods/D00194/D00194_03.jpg",
      "https://image.atomy.com/IN/goods/D00194/D00194_04.jpg",
      "https://image.atomy.com/IN/goods/D00194/D00194_00.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00194/D00194_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 24,
    "pv": 7350,
    "productUrl": "https://in.atomy.com/product/D00194",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00192",
    "externalProductId": "D00192",
    "sku": "D00192",
    "slug": "the-fame-eye-cream-d00192",
    "name": "The Fame Eye Cream",
    "nameHi": "",
    "categoryId": "skincare",
    "categoryName": "Skincare",
    "shortDescription": "Atomy The Fame Eye Cream reduces wrinkles and restores elasticity with HST Film Tech. Infused with Ceramide and Panthenol to nourish dry, sensitive eye areas.",
    "shortDescriptionHi": "",
    "description": "Atomy The Fame Eye Cream reduces wrinkles and restores elasticity with HST Film Tech. Infused with Ceramide and Panthenol to nourish dry, sensitive eye areas.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "120 GRM (70*70*60mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy The Fame Eye Cream?",
          "a": "Yes, 100% genuine Atomy The Fame Eye Cream sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 2000,
    "originalPrice": 2300,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00192/D00192_01.jpg",
      "https://image.atomy.com/IN/goods/D00192/D00192_02.jpg",
      "https://image.atomy.com/IN/goods/D00192/D00192_03.jpg",
      "https://image.atomy.com/IN/goods/D00192/D00192_04.jpg",
      "https://image.atomy.com/IN/goods/D00192/D00192_00.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00192/D00192_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 24,
    "pv": 7000,
    "productUrl": "https://in.atomy.com/product/D00192",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00196",
    "externalProductId": "D00196",
    "sku": "D00196",
    "slug": "the-fame-lotion-d00196",
    "name": "The Fame Lotion",
    "nameHi": "",
    "categoryId": "skincare",
    "categoryName": "Skincare",
    "shortDescription": "Atomy The Fame Lotion balances oil and water with Hyaluronic Acid and Ceramide. It provides deep hydration and strengthens the skin barrier for a healthy glow.",
    "shortDescriptionHi": "",
    "description": "Atomy The Fame Lotion balances oil and water with Hyaluronic Acid and Ceramide. It provides deep hydration and strengthens the skin barrier for a healthy glow.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "230 GRM (50*50*170mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy The Fame Lotion?",
          "a": "Yes, 100% genuine Atomy The Fame Lotion sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 2000,
    "originalPrice": 2300,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00196/D00196_01.jpg",
      "https://image.atomy.com/IN/goods/D00196/D00196_02.jpg",
      "https://image.atomy.com/IN/goods/D00196/D00196_03.jpg",
      "https://image.atomy.com/IN/goods/D00196/D00196_04.jpg",
      "https://image.atomy.com/IN/goods/D00196/D00196_00.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00196/D00196_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 1,
    "pv": 7000,
    "productUrl": "https://in.atomy.com/product/D00196",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00198",
    "externalProductId": "D00198",
    "sku": "D00198",
    "slug": "the-fame-nutrition-cream-d00198",
    "name": "The Fame Nutrition Cream",
    "nameHi": "",
    "categoryId": "skincare",
    "categoryName": "Skincare",
    "shortDescription": "Atomy The Fame Nutrition Cream provides intensive moisturizing and skin barrier reinforcement. It is ideal for dry skin seeking deep nourishment and firmness.",
    "shortDescriptionHi": "",
    "description": "Atomy The Fame Nutrition Cream provides intensive moisturizing and skin barrier reinforcement. It is ideal for dry skin seeking deep nourishment and firmness.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "140 GRM (70*70*60mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy The Fame Nutrition Cream?",
          "a": "Yes, 100% genuine Atomy The Fame Nutrition Cream sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 2000,
    "originalPrice": 2300,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00198/D00198_01.jpg",
      "https://image.atomy.com/IN/goods/D00198/D00198_02.jpg",
      "https://image.atomy.com/IN/goods/D00198/D00198_03.jpg",
      "https://image.atomy.com/IN/goods/D00198/D00198_04.jpg",
      "https://image.atomy.com/IN/goods/D00198/D00198_00.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00198/D00198_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 2,
    "pv": 7000,
    "productUrl": "https://in.atomy.com/product/D00198",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00003",
    "externalProductId": "D00003",
    "sku": "D00003",
    "slug": "the-fame-skincare-set-5-pcs-per-set-d00003",
    "name": "The Fame Skincare Set (5 Pcs per Set)",
    "nameHi": "",
    "categoryId": "skincare",
    "categoryName": "Skincare",
    "shortDescription": "Atomy The Fame Skincare Set provides deep nourishment and wrinkle improvement with HST technology. A daily regimen for sensitive skin to achieve a healthy glow.",
    "shortDescriptionHi": "",
    "description": "Atomy The Fame Skincare Set provides deep nourishment and wrinkle improvement with HST technology. A daily regimen for sensitive skin to achieve a healthy glow.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "1300 GRM (260*200*70mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy The Fame Skincare Set (5 Pcs per Set)?",
          "a": "Yes, 100% genuine Atomy The Fame Skincare Set (5 Pcs per Set) sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 9100,
    "originalPrice": 10465,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00003/D00003_01.jpg",
      "https://image.atomy.com/IN/goods/D00003/D00003_02.jpg",
      "https://image.atomy.com/IN/goods/D00003/D00003_03.jpg",
      "https://image.atomy.com/IN/goods/D00003/D00003_04.jpg",
      "https://image.atomy.com/IN/goods/D00003/D00003_05.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00003/D00003_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 24,
    "pv": 31850,
    "productUrl": "https://in.atomy.com/product/D00003",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00190",
    "externalProductId": "D00190",
    "sku": "D00190",
    "slug": "the-fame-toner-d00190",
    "name": "The Fame Toner",
    "nameHi": "",
    "categoryId": "skincare",
    "categoryName": "Skincare",
    "shortDescription": "Atomy The Fame Toner provides immediate moisture and strengthens the skin barrier using Triple Oil Micro Capsule technology and 5-fold Hyaluronic Acid.",
    "shortDescriptionHi": "",
    "description": "Atomy The Fame Toner provides immediate moisture and strengthens the skin barrier using Triple Oil Micro Capsule technology and 5-fold Hyaluronic Acid.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "250 GRM (50*50*180mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy The Fame Toner?",
          "a": "Yes, 100% genuine Atomy The Fame Toner sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 2000,
    "originalPrice": 2300,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00190/D00190_01.jpg",
      "https://image.atomy.com/IN/goods/D00190/D00190_02.jpg",
      "https://image.atomy.com/IN/goods/D00190/D00190_03.jpg",
      "https://image.atomy.com/IN/goods/D00190/D00190_04.jpg",
      "https://image.atomy.com/IN/goods/D00190/D00190_00.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00190/D00190_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 24,
    "pv": 7000,
    "productUrl": "https://in.atomy.com/product/D00190",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00510",
    "externalProductId": "D00510",
    "sku": "D00510",
    "slug": "toothbrush-8n-d00510",
    "name": "Toothbrush 8N",
    "nameHi": "",
    "categoryId": "personal-care",
    "categoryName": "Personal Care",
    "shortDescription": "The Atomy Toothbrush features 0.03mm super slim tapered bristles infused with 99.9% gold powder for antibacterial protection, deep cleaning, and gentle gum care.",
    "shortDescriptionHi": "",
    "description": "The Atomy Toothbrush features 0.03mm super slim tapered bristles infused with 99.9% gold powder for antibacterial protection, deep cleaning, and gentle gum care.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "190 GRM (240*44*123mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Toothbrush 8N?",
          "a": "Yes, 100% genuine Atomy Toothbrush 8N sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 950,
    "originalPrice": 1092,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00510/D00510_01.jpg",
      "https://image.atomy.com/IN/goods/D00510/D00510_02.jpg",
      "https://image.atomy.com/IN/goods/D00510/D00510_03_blue.jpg",
      "https://image.atomy.com/IN/goods/D00510/D00510_04_pink.jpg",
      "https://image.atomy.com/IN/goods/D00510/D00510_04_white.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00510/D00510_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 4.8,
    "reviewCount": 16,
    "pv": 3325,
    "productUrl": "https://in.atomy.com/product/D00510",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00501",
    "externalProductId": "D00501",
    "sku": "D00501",
    "slug": "toothpaste-200g-x-5-n-d00501",
    "name": "Toothpaste 200g X 5 N",
    "nameHi": "",
    "categoryId": "personal-care",
    "categoryName": "Personal Care",
    "shortDescription": "Atomy Toothpaste (200g) features water-soluble propolis and green tea extract to provide triple-action cavity protection and effective breath freshening for all ages.",
    "shortDescriptionHi": "",
    "description": "Atomy Toothpaste (200g) features water-soluble propolis and green tea extract to provide triple-action cavity protection and effective breath freshening for all ages.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "1000 GRM (255*190*40mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Toothpaste 200g X 5 N?",
          "a": "Yes, 100% genuine Atomy Toothpaste 200g X 5 N sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 1795,
    "originalPrice": 2064,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00501/D00501_01.jpg",
      "https://image.atomy.com/IN/goods/D00501/D00501_02.jpg",
      "https://image.atomy.com/IN/goods/D00501/D00501_03.jpg",
      "https://image.atomy.com/IN/goods/D00501/D00501_04.jpg",
      "https://image.atomy.com/IN/goods/D00501/D00501_00.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00501/D00501_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": false,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 5.0,
    "reviewCount": 11,
    "pv": 6282,
    "productUrl": "https://in.atomy.com/product/D00501",
    "stockStatus": "in_stock"
  },
  {
    "id": "atomy-d00521",
    "externalProductId": "D00521",
    "sku": "D00521",
    "slug": "toothpaste-50g-x-4-n-d00521",
    "name": "Toothpaste 50g x 4 N",
    "nameHi": "",
    "categoryId": "personal-care",
    "categoryName": "Personal Care",
    "shortDescription": "Atomy Toothpaste (Propolis) uses water-soluble propolis and green tea extract to prevent plaque, tartar, and cavities. It keeps breath fresh and gums healthy.",
    "shortDescriptionHi": "",
    "description": "Atomy Toothpaste (Propolis) uses water-soluble propolis and green tea extract to prevent plaque, tartar, and cavities. It keeps breath fresh and gums healthy.",
    "descriptionHi": "",
    "productDetails": {
      "koreanQuality": "Certified 100% Genuine Atomy Korea",
      "gentleFormulation": "Advanced Botanical Bio-Technology & Pure Fermentation",
      "skinTypes": "Suitable for All Skin & Body Types",
      "volumeOrWeight": "200 GRM (166*27*95mm)",
      "keyIngredients": [
        "Pure Botanical Extracts",
        "Patented Korean Herbal Ferments"
      ],
      "howToUse": "Apply or consume daily according to official Atomy packaging guidelines.",
      "warnings": "For genuine use only. Keep in a cool, dry place away from direct sunlight.",
      "benefits": [
        "Absolute Quality, Absolute Price guaranteed",
        "Direct from authorized Atomy India warehouse",
        "Clinically tested formulation with proven results",
        "Full point value (PV) for member benefits"
      ],
      "faq": [
        {
          "q": "Is this authentic Atomy Toothpaste 50g x 4 N?",
          "a": "Yes, 100% genuine Atomy Toothpaste 50g x 4 N sourced directly from the authorized warehouse in India through Aarti Singh, Authorized Distributor."
        },
        {
          "q": "How do I place an order?",
          "a": "Simply tap Order on WhatsApp to connect directly with Aarti Singh for doorstep delivery and guidance."
        }
      ]
    },
    "authorizedPrice": 520,
    "originalPrice": 598,
    "currency": "INR",
    "images": [
      "https://image.atomy.com/IN/goods/D00521/D00521_01.jpg",
      "https://image.atomy.com/IN/goods/D00521/D00521_02.jpg",
      "https://image.atomy.com/IN/goods/D00521/D00521_03.jpg",
      "https://image.atomy.com/IN/goods/D00521/D00521_04.jpg",
      "https://image.atomy.com/IN/goods/D00521/D00521_00.jpg"
    ],
    "thumbnail": "https://image.atomy.com/IN/goods/D00521/D00521_01.jpg",
    "isImported": true,
    "isPublished": true,
    "isFeatured": false,
    "isBestseller": true,
    "featuredOrder": 1,
    "displayOrder": 1,
    "rating": 4.8,
    "reviewCount": 40,
    "pv": 1820,
    "productUrl": "https://in.atomy.com/product/D00521",
    "stockStatus": "in_stock"
  }
];

export const INITIAL_OFFERS: Offer[] = [
  {
    id: 'offer-001',
    productId: 'atomy-d00207',
    productName: 'Absolute Skincare Set',
    title: 'Festive Korean Glow Bundle',
    titleHi: 'उत्सव कोरियाई ग्लो बंडल',
    description: 'Get authorized introductory guidance plus travel mini accessories with complete set enquiry.',
    descriptionHi: 'पूरे 6-पीस सेट की पूछताछ पर विशेष मार्गदर्शन और सहायक सामग्री।',
    authorizedOriginalPrice: 23000,
    authorizedOfferPrice: 20000,
    startAt: '2026-09-01T00:00:00Z',
    endAt: '2026-11-30T23:59:59Z',
    isPublished: true,
    bannerTag: 'Seasonal Exclusive Offer',
  },
  {
    id: 'offer-002',
    productId: 'atomy-d00351',
    productName: 'Evening Care Set(4 Pcs per Set)',
    title: 'Home Spa Facial Duo Privilege',
    titleHi: 'होम स्पा फेशियल विशेष पैकेज',
    description: 'Authorized distributor offer on the full 4-step evening aesthetic cleanse system.',
    descriptionHi: '4-स्टेप क्लींजिंग सिस्टम पर अधिकृत डिस्काउंट ऑफर।',
    authorizedOriginalPrice: 3800,
    authorizedOfferPrice: 3300,
    startAt: '2026-10-01T00:00:00Z',
    endAt: '2026-11-15T23:59:59Z',
    isPublished: true,
    bannerTag: 'Limited Stock Offer',
  },
  {
    id: 'offer-003',
    productId: 'atomy-d00101',
    productName: 'HemoHIM *1set',
    title: 'Immune Defense Booster Special',
    titleHi: 'इम्युनिटी डिफेंस बूस्टर स्पेशल',
    description: 'Official KAERI-developed patented Korean functional health food with full PV points.',
    descriptionHi: 'प्रतिरक्षा स्वास्थ्य और जीवन शक्ति के लिए अधिकृत हिमोहिम सप्लीमेंट।',
    authorizedOriginalPrice: 14500,
    authorizedOfferPrice: 13000,
    startAt: '2026-10-01T00:00:00Z',
    endAt: '2026-12-31T23:59:59Z',
    isPublished: true,
    bannerTag: 'Distributor Special',
  },
];

export const INITIAL_ENQUIRIES: Enquiry[] = [
  {
    id: 'enq-001',
    referenceCode: 'ENQ-2610-0891',
    productId: 'atomy-d00207',
    productName: 'Absolute Skincare Set',
    productSku: 'D00207',
    variantName: 'Full 6-Piece Set',
    quantity: 1,
    customerName: 'Priya Sharma',
    customerContact: '+91 98112 34567',
    enquiryType: 'product',
    channel: 'whatsapp',
    sourcePage: '/product/absolute-skincare-set-d00207',
    status: 'converted',
    notes: 'Customer asked about suitability for dry skin. Provided routine guidance. Order confirmed on 14 Oct.',
    createdAt: '2026-10-14T11:20:00Z',
    updatedAt: '2026-10-14T15:30:00Z',
  },
  {
    id: 'enq-002',
    referenceCode: 'ENQ-2610-0892',
    productId: 'atomy-d00101',
    productName: 'HemoHIM *1set',
    productSku: 'D00101',
    variantName: 'Box of 60 Packets',
    quantity: 2,
    customerName: 'Rajesh Verma',
    customerContact: '+91 98230 45678',
    enquiryType: 'product',
    channel: 'whatsapp',
    sourcePage: '/product/hemohim-1set-d00101',
    status: 'contacted',
    notes: 'Requested dosage instructions for senior parents. Shared official booklet via WhatsApp.',
    createdAt: '2026-10-15T09:15:00Z',
    updatedAt: '2026-10-15T10:00:00Z',
  },
  {
    id: 'enq-003',
    referenceCode: 'ENQ-2610-0893',
    customerName: 'Meenakshi Iyer',
    customerContact: '+91 99401 23456',
    enquiryType: 'opportunity',
    channel: 'web_form',
    sourcePage: '/opportunity',
    status: 'new',
    notes: 'Requested distributor compensation structure and free registration details for South India region.',
    createdAt: '2026-10-15T14:45:00Z',
    updatedAt: '2026-10-15T14:45:00Z',
  },
];

export const INITIAL_ORDERS: Order[] = [
  {
    id: 'ord-001',
    enquiryId: 'enq-001',
    customerName: 'Priya Sharma',
    customerPhone: '+91 98112 34567',
    items: [
      {
        id: 'ord-item-001',
        orderId: 'ord-001',
        productId: 'atomy-d00207',
        productNameSnapshot: 'Absolute Skincare Set',
        skuSnapshot: 'D00207',
        quantity: 1,
        recordedUnitPrice: 20000,
        recordedSubtotal: 20000,
      },
    ],
    recordedTotal: 20000,
    status: 'fulfilled',
    paymentConfirmed: true,
    dispatchNotes: 'Dispatched via BlueDart AWB #981274191 from Gurgaon warehouse. Delivered 16 Oct.',
    notes: 'Customer delighted with packaging and routine booklet.',
    createdAt: '2026-10-14T16:00:00Z',
  },
];

export const INITIAL_HERO_SLIDER_SETTINGS: { autoSlideEnabled: boolean; intervalSeconds: number } = {
  autoSlideEnabled: true,
  intervalSeconds: 4.5,
};

export const INITIAL_HERO_SLIDES = [
  {
    id: 'slide-1',
    productId: 'atomy-d00207',
    productSlug: 'absolute-skincare-set-d00207',
    badge: 'Flagship Prestige Collection',
    title: 'Atomy Absolute Skincare Set',
    subtitle: 'Advanced CellActive™ Biotechnology targeting signs of aging, intense cellular hydration, and skin rejuvenation.',
    image: 'https://image.atomy.com/IN/goods/D00207/D00207_01.jpg',
    highlightPoints: ['6-Piece Luxury Regimen', 'Dermatest Excellent Certified', 'CellActive Smart Delivery'],
    authorizedPrice: 20000,
    originalPrice: 23000,
    isOffer: true,
    offerTag: 'Festive Privilege Bundle',
    active: true,
    order: 1,
  },
  {
    id: 'slide-2',
    productId: 'atomy-d00101',
    productSlug: 'hemohim-1set-d00101',
    badge: 'Patented Korean Functional Health Food',
    title: 'HemoHIM Herbal Immune Vitality',
    subtitle: 'Developed by the Korea Atomic Energy Research Institute (KAERI) over 8 years to bolster healthy immune system defense.',
    image: 'https://image.atomy.com/IN/goods/D00101/D00101_01.jpg',
    highlightPoints: ['Angelica Gigas Extract', '60 Liquid Sachets', 'KFDA Certified Functional Health'],
    authorizedPrice: 13000,
    originalPrice: 14500,
    isOffer: false,
    active: true,
    order: 2,
  },
  {
    id: 'slide-3',
    productId: 'atomy-d00351',
    productSlug: 'evening-care-set-4-pcs-per-set-d00351',
    badge: 'Professional Home Spa Facial',
    title: 'Evening Care 4-Step Cleansing Set',
    subtitle: 'Complete Korean deep cleansing and pore refining system with natural ferment extracts for clear, radiant skin.',
    image: 'https://image.atomy.com/IN/goods/D00351/D00351_01.jpg',
    highlightPoints: ['Deep Cleanser & Foam Cleanser', 'Gentle Peeling Gel', 'FIRM Peel-off Mask'],
    authorizedPrice: 3300,
    originalPrice: 3800,
    isOffer: true,
    offerTag: 'Spa Duo Special',
    active: true,
    order: 3,
  },
  {
    id: 'slide-4',
    productId: 'atomy-d90178',
    productSlug: 'atomy-100-pure-spirulina-india-d90178',
    badge: 'Daily Superfood Nutrition',
    title: 'Atomy 100% Pure Spirulina (India)',
    subtitle: 'Pure Hawaiian spirulina cultivated in clean seawater, rich in 60+ nutrients, antioxidants, and plant protein.',
    image: 'https://image.atomy.com/IN/goods/D90178/org/881/260422000051881.jpeg',
    highlightPoints: ['95% High Absorption Rate', 'Natural Phycocyanin & Chlorophyll', 'Antioxidant & Vitality Boost'],
    authorizedPrice: 599,
    originalPrice: 699,
    isOffer: false,
    active: true,
    order: 4,
  },
  {
    id: 'slide-5',
    productId: 'atomy-d00281',
    productSlug: 'sunscreen-spf50-pa-beige-d00281',
    badge: 'Broad Spectrum UV Shield',
    title: 'Atomy Sunscreen SPF50+ PA+++ (Beige)',
    subtitle: 'Lightweight double defense against UVA/UVB rays without stickiness, white cast, or clogged pores.',
    image: 'https://image.atomy.com/IN/goods/D00281/D00281_01.jpg',
    highlightPoints: ['Non-greasy Moisture Finish', 'Centella & Lemon Balm Calming', 'Dermatologically Tested'],
    authorizedPrice: 900,
    originalPrice: 1050,
    isOffer: false,
    active: true,
    order: 5,
  },
  {
    id: 'slide-6',
    productId: 'atomy-d00521',
    productSlug: 'toothpaste-50g-x-4-n-d00521',
    badge: 'Natural Propolis Oral Care',
    title: 'Atomy Propolis Toothpaste (Pack of 4)',
    subtitle: 'Water-soluble bee propolis and green tea catechins to eliminate plaque, protect gums, and refresh breath.',
    image: 'https://image.atomy.com/IN/goods/D00521/D00521_01.jpg',
    highlightPoints: ['Natural Antibacterial Defense', 'Tartar & Plaque Prevention', 'Gentle for Sensitive Teeth'],
    authorizedPrice: 520,
    originalPrice: 600,
    isOffer: false,
    active: true,
    order: 6,
  },
];
