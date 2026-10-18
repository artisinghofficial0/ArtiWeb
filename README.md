# Atomy India — Aarti Singh Independent Distributor Portal

A premium discovery, catalogue, and WhatsApp enquiry website designed for **Aarti Singh, Independent Atomy India Distributor**.

## Visual Design Reference Match
Built directly from the provided reference UI showcase:
1. **Home Page (1/6)**: Hero showcase with "Better Life With Atomy", "Cherish the Spirit" callout, Section 1 swipeable carousel, Section 2 categories, Section 3 bestsellers grid, Section 4 Aarti Singh personal introduction, Section 5 Customer Support & FAQ, and Section 6 compliant footer.
2. **Catalogue Page (2/6)**: Search bar, category pill tabs, multi-criteria sidebar filters (Categories with exact counts, Price Ranges, Sort By), and responsive grid.
3. **Product Detail Page (3/6)**: Full image gallery, highlights (Korean Quality, Gentle Formulation, For All Types), authorized price, primary WhatsApp enquiry button, tabbed content (Overview, Key Benefits, How to Use, Ingredients, FAQ), and Aarti Singh guidance banner.
4. **About Page (4/6)**: Authentic portrait, distributor biography, 3 core values (Genuine Guidance, Personalised Support, Customer Satisfaction), and Atomy creed pillars.
5. **Contact Page (5/6)**: Direct WhatsApp (+91-9911938324), Calling (+91-9911938324), Email (aartisinghofficial0@gmail.com), Gurgaon location, and verified contact form.
6. **Business Opportunity Page (6/6)**: "Build a Healthier, Happier Tomorrow", 4 feature pillars (Global Brand, Quality Products, Business Opportunity, Positive Impact), and zero-fee distributor guidance.

---

## Key Features & Accessibility
- **Multilingual Support**: Real-time switch between **English (EN)** and **हिन्दी (Hindi)** with Noto Sans Devanagari font rendering.
- **Dark Mode**: Persistent dark mode with custom high-contrast dark palette.
- **Accessibility**: Screen reader skip link (`#main-content`), ARIA labels, semantic landmark elements, keyboard navigation.
- **WhatsApp Dynamic Message Generator**: Encodes exact reference, SKU, product name, quantity, and product URL into `https://wa.me/919911938324`.
- **Admin Dashboard (`#/admin`)**:
  - Secure login (`atomy2026`)
  - Real event analytics (views, searches, WhatsApp CTR, conversion rate)
  - Product publishing & homepage section controls
  - CSV & JSON feed import engine with duplicate SKU detection
  - Promotional offers manager with auto-expiration
  - Enquiry & Order management tables
  - Distributor settings manager

---

## Supabase PostgreSQL Database Setup
To connect this frontend to your production Supabase project:
1. Create a project at [supabase.com](https://supabase.com).
2. Open the SQL Editor and execute the schema located at `src/db/schema.sql`.
3. Row Level Security (RLS) policies are already included to protect customer inquiries and orders while keeping published products public.
