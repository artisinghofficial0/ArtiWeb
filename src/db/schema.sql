-- ==============================================================================
-- ATOMY INDIA DISTRIBUTOR PORTAL (AARTI SINGH)
-- Database Migration Schema for Supabase PostgreSQL
-- ==============================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. CATEGORIES TABLE
CREATE TABLE IF NOT EXISTS categories (
  id VARCHAR(64) PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  name_hi VARCHAR(120),
  slug VARCHAR(120) NOT NULL UNIQUE,
  description TEXT,
  description_hi TEXT,
  image_url TEXT,
  display_order INT DEFAULT 0,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. PRODUCTS TABLE
CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  external_product_id VARCHAR(100),
  sku VARCHAR(100) NOT NULL UNIQUE,
  slug VARCHAR(150) NOT NULL UNIQUE,
  name VARCHAR(255) NOT NULL,
  name_hi VARCHAR(255),
  category_id VARCHAR(64) REFERENCES categories(id) ON DELETE SET NULL,
  short_description TEXT,
  short_description_hi TEXT,
  description TEXT,
  description_hi TEXT,
  product_details JSONB DEFAULT '{}'::jsonb,
  authorized_price NUMERIC(12, 2) NOT NULL CHECK (authorized_price >= 0),
  original_price NUMERIC(12, 2) CHECK (original_price >= authorized_price),
  currency VARCHAR(10) DEFAULT 'INR',
  images TEXT[] DEFAULT '{}',
  thumbnail TEXT,
  badge VARCHAR(50),
  is_imported BOOLEAN DEFAULT false,
  is_published BOOLEAN DEFAULT false, -- Newly imported stay unpublished until reviewed!
  is_featured BOOLEAN DEFAULT false,
  is_bestseller BOOLEAN DEFAULT false,
  featured_order INT DEFAULT 99,
  display_order INT DEFAULT 99,
  rating NUMERIC(3, 2) DEFAULT 4.90,
  review_count INT DEFAULT 0,
  last_synced_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_products_category ON products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_sku ON products(sku);
CREATE INDEX IF NOT EXISTS idx_products_published ON products(is_published);
CREATE INDEX IF NOT EXISTS idx_products_featured ON products(is_featured);

-- 3. PRODUCT VARIANTS TABLE
CREATE TABLE IF NOT EXISTS product_variants (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  external_variant_id VARCHAR(100),
  sku VARCHAR(100) NOT NULL,
  name VARCHAR(150) NOT NULL,
  attributes JSONB DEFAULT '{}'::jsonb,
  authorized_price NUMERIC(12, 2) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. OFFERS TABLE
CREATE TABLE IF NOT EXISTS offers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  product_name VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  title_hi VARCHAR(255),
  description TEXT,
  description_hi TEXT,
  authorized_original_price NUMERIC(12, 2) NOT NULL,
  authorized_offer_price NUMERIC(12, 2) NOT NULL CHECK (authorized_offer_price < authorized_original_price),
  start_at TIMESTAMPTZ NOT NULL,
  end_at TIMESTAMPTZ NOT NULL,
  is_published BOOLEAN DEFAULT false,
  banner_tag VARCHAR(100) DEFAULT 'Special Offer',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. ENQUIRIES TABLE
CREATE TABLE IF NOT EXISTS enquiries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  reference_code VARCHAR(50) NOT NULL UNIQUE,
  product_id UUID REFERENCES products(id) ON DELETE SET NULL,
  product_name VARCHAR(255),
  product_sku VARCHAR(100),
  variant_name VARCHAR(150),
  quantity INT DEFAULT 1,
  customer_name VARCHAR(150) NOT NULL,
  customer_contact VARCHAR(100) NOT NULL,
  enquiry_type VARCHAR(50) DEFAULT 'product',
  channel VARCHAR(50) DEFAULT 'whatsapp',
  source_page VARCHAR(255),
  status VARCHAR(50) DEFAULT 'new', -- new, contacted, follow_up, converted, closed, not_interested
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_enquiries_status ON enquiries(status);
CREATE INDEX IF NOT EXISTS idx_enquiries_reference ON enquiries(reference_code);

-- 6. ORDERS TABLE
CREATE TABLE IF NOT EXISTS orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_reference VARCHAR(50) NOT NULL UNIQUE,
  enquiry_id UUID REFERENCES enquiries(id) ON DELETE SET NULL,
  customer_name VARCHAR(150) NOT NULL,
  customer_phone VARCHAR(50) NOT NULL,
  customer_address TEXT,
  recorded_total NUMERIC(12, 2) NOT NULL DEFAULT 0,
  currency VARCHAR(10) DEFAULT 'INR',
  status VARCHAR(50) DEFAULT 'pending_verification', -- pending_verification, confirmed, processing, completed, cancelled
  confirmation_source VARCHAR(100) DEFAULT 'WhatsApp confirmed',
  order_date DATE DEFAULT CURRENT_DATE,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. ORDER ITEMS TABLE
CREATE TABLE IF NOT EXISTS order_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  product_id UUID REFERENCES products(id) ON DELETE SET NULL,
  product_name_snapshot VARCHAR(255) NOT NULL,
  sku_snapshot VARCHAR(100) NOT NULL,
  quantity INT NOT NULL CHECK (quantity > 0),
  recorded_unit_price NUMERIC(12, 2) NOT NULL,
  recorded_subtotal NUMERIC(12, 2) NOT NULL
);

-- 8. ANALYTICS EVENTS TABLE
CREATE TABLE IF NOT EXISTS analytics_events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  event_type VARCHAR(64) NOT NULL,
  product_id UUID REFERENCES products(id) ON DELETE SET NULL,
  product_name VARCHAR(255),
  page_path VARCHAR(255) NOT NULL,
  referrer TEXT,
  session_id VARCHAR(100),
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_analytics_type ON analytics_events(event_type);
CREATE INDEX IF NOT EXISTS idx_analytics_created ON analytics_events(created_at);

-- 9. SITE SETTINGS TABLE
CREATE TABLE IF NOT EXISTS site_settings (
  id INT PRIMARY KEY DEFAULT 1,
  whatsapp_number VARCHAR(30) NOT NULL,
  display_phone VARCHAR(50) NOT NULL,
  email VARCHAR(120) NOT NULL,
  distributor_name VARCHAR(120) NOT NULL,
  business_name VARCHAR(150) NOT NULL,
  address TEXT NOT NULL,
  support_hours TEXT NOT NULL,
  distributor_disclosure TEXT NOT NULL,
  default_language VARCHAR(10) DEFAULT 'en',
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 10. ROW LEVEL SECURITY (RLS) POLICIES
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE offers ENABLE ROW LEVEL SECURITY;
ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;

-- Public can read published products, categories, active offers, and site settings
CREATE POLICY "Public read published products" ON products FOR SELECT USING (is_published = true);
CREATE POLICY "Public read categories" ON categories FOR SELECT USING (is_published = true);
CREATE POLICY "Public read active published offers" ON offers FOR SELECT USING (is_published = true AND NOW() BETWEEN start_at AND end_at);
CREATE POLICY "Public read site settings" ON site_settings FOR SELECT USING (true);

-- Public can insert new enquiries and analytics events
CREATE POLICY "Public insert enquiries" ON enquiries FOR INSERT WITH CHECK (true);
CREATE POLICY "Public insert analytics events" ON analytics_events FOR INSERT WITH CHECK (true);
