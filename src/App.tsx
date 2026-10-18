import React from 'react';
import { AppProvider, useApp } from './context/AppContext.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { WhatsAppButton } from './components/WhatsAppButton.tsx';

import { HomePage } from './pages/HomePage.tsx';
import { CataloguePage } from './pages/CataloguePage.tsx';
import { ProductDetailPage } from './pages/ProductDetailPage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';
import { OpportunityPage } from './pages/OpportunityPage.tsx';
import { PrivacyPage } from './pages/PrivacyPage.tsx';
import { AdminDashboard } from './pages/AdminDashboard.tsx';

const AppContent: React.FC = () => {
  const { currentRoute, t } = useApp();

  const renderCurrentPage = () => {
    switch (currentRoute) {
      case 'home':
        return <HomePage />;
      case 'catalogue':
        return <CataloguePage />;
      case 'product':
        return <ProductDetailPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'opportunity':
        return <OpportunityPage />;
      case 'privacy':
        return <PrivacyPage />;
      case 'admin':
      case 'store-manager-9911':
        return <AdminDashboard />;
      default:
        return <HomePage />;
    }
  };

  const isAdminPage = currentRoute === 'admin' || currentRoute === 'store-manager-9911';

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors duration-200 selection:bg-sky-500 selection:text-white">
      {/* Skip to Main Content Link for Screen Readers & Keyboard Access */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-sky-600 focus:text-white focus:rounded-md focus:shadow-lg focus:outline-hidden"
      >
        {t('skipToContent')}
      </a>

      {/* Main Header / Navigation */}
      <Navbar />

      {/* Page Content */}
      <main id="main-content" className="flex-1 focus:outline-hidden">
        {renderCurrentPage()}
      </main>

      {/* Reusable Floating WhatsApp Button on Non-Admin Pages */}
      {!isAdminPage && (
        <WhatsAppButton
          variant="floating"
          sourceContext="floating_cta"
        />
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
