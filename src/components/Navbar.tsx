import React, { useState, useEffect } from 'react';
import { useApp, RouteName } from '../context/AppContext.tsx';
import {
  Menu,
  X,
  Moon,
  Sun,
  MessageCircle,
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    t,
    darkMode,
    toggleDarkMode,
    currentRoute,
    navigateTo,
    siteSettings,
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll detection to minimize navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isSubpage = currentRoute !== 'home';
  const navHeightClass = isSubpage
    ? isScrolled
      ? 'h-11 sm:h-12'
      : 'h-13 sm:h-14'
    : isScrolled
    ? 'h-12 sm:h-13'
    : 'h-16 sm:h-18';

  const logoSizeClass = isSubpage || isScrolled
    ? 'text-lg sm:text-xl'
    : 'text-xl sm:text-2xl';

  const navLinks: { route: RouteName; label: string }[] = [
    { route: 'home', label: t('navHome') },
    { route: 'catalogue', label: t('navCatalogue') },
    { route: 'about', label: t('navAbout') },
    { route: 'opportunity', label: t('navOpportunity') },
    { route: 'contact', label: t('navContact') },
  ];

  const handleNavClick = (route: RouteName) => {
    navigateTo(route);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-all duration-200 shadow-2xs">
      <nav
        className={`max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between transition-all duration-200 ${navHeightClass}`}
      >
        {/* Brand / Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 focus:outline-hidden focus:ring-2 focus:ring-sky-500 rounded-lg p-0.5 text-left group"
          aria-label="Atomy India - Aarti Singh Home"
        >
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span
                className={`font-black tracking-tight text-sky-600 dark:text-sky-400 group-hover:text-sky-700 transition-all ${logoSizeClass}`}
              >
                atom<span className="text-sky-500 font-serif">美</span>
              </span>
              <span
                className={`font-bold tracking-wider text-slate-800 dark:text-white transition-all ${
                  isSubpage || isScrolled ? 'text-base sm:text-lg' : 'text-lg sm:text-xl'
                }`}
              >
                ATOMY
              </span>
            </div>
            <span
              className={`font-semibold text-slate-500 dark:text-slate-400 -mt-1 tracking-wider uppercase transition-all ${
                isSubpage || isScrolled ? 'text-[9px] hidden sm:block' : 'text-[10px]'
              }`}
            >
              Aarti Singh • Independent Distributor
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => {
            const isActive = currentRoute === link.route;
            return (
              <button
                key={link.route}
                onClick={() => handleNavClick(link.route)}
                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
                  isActive
                    ? 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-slate-800 font-bold'
                    : 'text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>

        {/* Action Controls: Dark Mode, Quick WhatsApp, Admin (Language chooser removed per request) */}
        <div className="hidden sm:flex items-center space-x-2">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-1.5 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label={darkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            title={darkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
          </button>

          {/* Quick WhatsApp Contact (Clean Secondary/Pill style) */}
          <a
            href={`https://wa.me/${siteSettings.whatsappNumber}?text=${encodeURIComponent(
              'Hello Aarti, I visited your Atomy distributor website and would like guidance on Atomy products.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg shadow-2xs transition-colors"
            aria-label="Direct WhatsApp Chat with Aarti Singh"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Mobile controls & hamburger button */}
        <div className="flex sm:hidden items-center space-x-2">
          <button
            onClick={toggleDarkMode}
            className="p-1.5 text-slate-600 dark:text-slate-300"
            aria-label="Toggle dark mode mobile"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="p-1.5 rounded-md text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Toggle Mobile Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-2.5 pb-4 space-y-1 shadow-lg">
          {navLinks.map((link) => {
            const isActive = currentRoute === link.route;
            return (
              <button
                key={link.route}
                onClick={() => handleNavClick(link.route)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-semibold flex items-center justify-between ${
                  isActive
                    ? 'bg-sky-50 dark:bg-slate-800 text-sky-600 dark:text-sky-400 font-bold border-l-4 border-sky-600'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <span>{link.label}</span>
                {isActive && <span className="text-xs text-sky-600">●</span>}
              </button>
            );
          })}

          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
            <a
              href={`https://wa.me/${siteSettings.whatsappNumber}?text=${encodeURIComponent(
                'Hello Aarti, I visited your Atomy distributor website and would like guidance on Atomy products.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold text-xs shadow-2xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp ({siteSettings.displayPhone})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
