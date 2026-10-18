import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext.tsx';
import { ProductCard } from '../components/ProductCard.tsx';
import { filterAndSortProducts, ProductFilterOptions } from '../utils/businessLogic.ts';
import { Search, Filter, RotateCcw, X, ArrowRight, Sparkles, Tag, ChevronRight } from 'lucide-react';
import { Product, Category } from '../types/index.ts';

export const CataloguePage: React.FC = () => {
  const { t, products, categories, currentCategoryFilter, trackEvent, navigateTo } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(currentCategoryFilter || 'all');
  const [priceRange, setPriceRange] = useState<ProductFilterOptions['priceRange']>('all');
  const [sortBy, setSortBy] = useState<ProductFilterOptions['sortBy']>('popularity');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Auto-suggestion state
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Popular search tags when query is empty
  const popularSearches = [
    'Absolute Skincare',
    'HemoHIM',
    'Evening Care',
    'Propolis Toothpaste',
    'Vitamin C',
    'Herbal Shampoo',
  ];

  // Auto-suggestions calculation
  const suggestions = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return { products: [], categories: [] };

    const matchingProducts = products
      .filter((p) => p.isPublished)
      .filter(
        (p) =>
          (p.name || '').toLowerCase().includes(q) ||
          (p.sku || '').toLowerCase().includes(q) ||
          (p.categoryName || '').toLowerCase().includes(q) ||
          (p.shortDescription || '').toLowerCase().includes(q) ||
          (p.productDetails?.keyIngredients || []).some((ing) => (ing || '').toLowerCase().includes(q))
      )
      .slice(0, 5);

    const matchingCategories = categories.filter(
      (c) =>
        c.isPublished &&
        (c.name.toLowerCase().includes(q) || c.slug.toLowerCase().includes(q))
    );

    return { products: matchingProducts, categories: matchingCategories };
  }, [products, categories, searchQuery]);

  // Click outside listener for suggestions popup
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target as Node)
      ) {
        setSuggestionsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard navigation for suggestions
  const handleKeyDown = (e: React.KeyboardEvent) => {
    const totalItems = suggestions.products.length + suggestions.categories.length;
    if (!suggestionsOpen || totalItems === 0) {
      if (e.key === 'ArrowDown') {
        setSuggestionsOpen(true);
      }
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveSuggestionIndex((prev) => (prev < totalItems - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveSuggestionIndex((prev) => (prev > 0 ? prev - 1 : totalItems - 1));
    } else if (e.key === 'Enter') {
      if (activeSuggestionIndex >= 0) {
        e.preventDefault();
        if (activeSuggestionIndex < suggestions.products.length) {
          const prod = suggestions.products[activeSuggestionIndex];
          navigateTo('product', prod.slug);
          setSuggestionsOpen(false);
        } else {
          const catIndex = activeSuggestionIndex - suggestions.products.length;
          const cat = suggestions.categories[catIndex];
          handleCategorySelect(cat.id);
          setSearchQuery('');
          setSuggestionsOpen(false);
        }
      }
    } else if (e.key === 'Escape') {
      setSuggestionsOpen(false);
    }
  };

  // Apply filters
  const filteredProducts = useMemo(() => {
    return filterAndSortProducts(products, {
      searchQuery,
      categoryId: selectedCategory,
      priceRange,
      sortBy,
      onlyPublished: true,
    });
  }, [products, searchQuery, selectedCategory, priceRange, sortBy]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuggestionsOpen(false);
    if (searchQuery.trim()) {
      trackEvent('catalogue_search', { query: searchQuery });
    }
  };

  const handleSelectProductSuggestion = (prod: Product) => {
    setSuggestionsOpen(false);
    navigateTo('product', prod.slug);
  };

  const handleSelectCategorySuggestion = (catId: string) => {
    setSelectedCategory(catId);
    setSearchQuery('');
    setSuggestionsOpen(false);
    trackEvent('category_click', { categoryId: catId });
  };

  const handlePopularSearchClick = (term: string) => {
    setSearchQuery(term);
    setSuggestionsOpen(false);
    trackEvent('catalogue_search', { query: term });
  };

  const handleCategorySelect = (catId: string) => {
    setSelectedCategory(catId);
    trackEvent('category_click', { categoryId: catId });
  };

  const resetAllFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setPriceRange('all');
    setSortBy('popularity');
  };

  // Category counts
  const categoryCounts: Record<string, number> = {
    all: products.filter((p) => p.isPublished).length,
    skincare: 42,
    health: 28,
    'personal-care': 26,
    makeup: 18,
    'home-care': 12,
    others: 10,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Title & Subtitle */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          {t('catalogueTitle')}
        </h1>
        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-2">
          {t('catalogueSubtitle')}
        </p>
      </div>

      {/* Top Search Bar with Auto-Suggestions */}
      <div ref={searchContainerRef} className="relative max-w-2xl mx-auto mb-8">
        <form onSubmit={handleSearchSubmit} className="flex gap-2">
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setSuggestionsOpen(true);
                setActiveSuggestionIndex(-1);
              }}
              onFocus={() => setSuggestionsOpen(true)}
              onKeyDown={handleKeyDown}
              placeholder={t('searchPlaceholder')}
              className="w-full pl-11 pr-10 py-3.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-sky-500 shadow-2xs transition-all"
              autoComplete="off"
              aria-expanded={suggestionsOpen}
              aria-autocomplete="list"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setActiveSuggestionIndex(-1);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1 rounded-full"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          <button
            type="submit"
            className="px-6 py-3.5 bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm rounded-xl shadow-xs transition-colors shrink-0"
          >
            {t('searchBtn')}
          </button>
        </form>

        {/* Auto-Suggestion Dropdown Popup */}
        {suggestionsOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 z-50 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-xl overflow-hidden backdrop-blur-md">
            {/* Case A: User has entered characters */}
            {searchQuery.trim().length > 0 ? (
              <div className="p-2 space-y-2">
                {/* Product Matches */}
                {suggestions.products.length > 0 && (
                  <div>
                    <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      Matching Products ({suggestions.products.length})
                    </div>
                    <div className="space-y-1">
                      {suggestions.products.map((prod, idx) => {
                        const isHighlighted = idx === activeSuggestionIndex;
                        return (
                          <div
                            key={prod.id}
                            onClick={() => handleSelectProductSuggestion(prod)}
                            onMouseEnter={() => setActiveSuggestionIndex(idx)}
                            className={`flex items-center gap-3 p-2.5 rounded-xl cursor-pointer transition-colors ${
                              isHighlighted
                                ? 'bg-sky-50 dark:bg-slate-700/80 text-sky-700 dark:text-sky-300'
                                : 'hover:bg-slate-50 dark:hover:bg-slate-700/50 text-slate-800 dark:text-slate-200'
                            }`}
                          >
                            <img
                              src={prod.thumbnail}
                              alt={prod.name}
                              className="w-11 h-11 object-contain rounded-lg bg-slate-50 dark:bg-slate-900/60 p-1 border border-slate-200 dark:border-slate-700 shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-bold truncate">
                                  {prod.name}
                                </span>
                                {prod.badge && (
                                  <span className="text-[10px] px-1.5 py-0.2 rounded-full font-bold bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 shrink-0">
                                    {prod.badge}
                                  </span>
                                )}
                              </div>
                              <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400">
                                <span className="capitalize">{prod.categoryName}</span>
                                <span>•</span>
                                <span className="font-semibold text-slate-900 dark:text-white">
                                  ₹{prod.authorizedPrice.toLocaleString('en-IN')}
                                </span>
                              </div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Category Matches */}
                {suggestions.categories.length > 0 && (
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-700">
                    <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      Categories
                    </div>
                    <div className="flex flex-wrap gap-1.5 p-1">
                      {suggestions.categories.map((cat, catIdx) => {
                        const totalProdCount = suggestions.products.length;
                        const isHighlighted = totalProdCount + catIdx === activeSuggestionIndex;
                        return (
                          <button
                            key={cat.id}
                            type="button"
                            onClick={() => handleSelectCategorySuggestion(cat.id)}
                            onMouseEnter={() => setActiveSuggestionIndex(totalProdCount + catIdx)}
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                              isHighlighted
                                ? 'bg-sky-600 text-white'
                                : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-sky-100 dark:hover:bg-slate-600'
                            }`}
                          >
                            <Tag className="w-3 h-3" />
                            <span>{cat.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* No Results Fallback */}
                {suggestions.products.length === 0 && suggestions.categories.length === 0 && (
                  <div className="p-4 text-center text-xs text-slate-500 dark:text-slate-400">
                    No exact match found for "{searchQuery}". Press Enter to view all available matches.
                  </div>
                )}
              </div>
            ) : (
              /* Case B: Query is empty — show popular searches */
              <div className="p-3">
                <div className="flex items-center gap-1.5 px-1 pb-2 text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-sky-500" />
                  <span>Popular Product Searches</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {popularSearches.map((term) => (
                    <button
                      key={term}
                      type="button"
                      onClick={() => handlePopularSearchClick(term)}
                      className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700/80 hover:bg-sky-50 hover:text-sky-600 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5"
                    >
                      <Search className="w-3 h-3 text-slate-400" />
                      <span>{term}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Category Pills (horizontal scroll on mobile) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
        <button
          onClick={() => handleCategorySelect('all')}
          className={`px-4 py-2 rounded-full text-xs font-bold shrink-0 transition-colors ${
            selectedCategory === 'all'
              ? 'bg-sky-600 text-white shadow-xs'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
          }`}
        >
          {t('allCategories')} ({categoryCounts.all})
        </button>

        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategorySelect(cat.id)}
            className={`px-4 py-2 rounded-full text-xs font-bold shrink-0 transition-colors ${
              selectedCategory === cat.id
                ? 'bg-sky-600 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {cat.name} ({categoryCounts[cat.id] || cat.productCount})
          </button>
        ))}
      </div>

      {/* Main Layout: Sidebar Filters + Products Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-700">
          <button
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-bold text-slate-800 dark:text-slate-200"
          >
            <Filter className="w-4 h-4 text-sky-600" />
            <span>Filters & Sorting</span>
          </button>
          <span className="text-xs text-slate-500">{filteredProducts.length} products found</span>
        </div>

        {/* Filter Sidebar (Desktop Always, Mobile Collapsible) */}
        <aside
          className={`${
            mobileFilterOpen ? 'block' : 'hidden'
          } lg:block lg:col-span-1 space-y-6 bg-white dark:bg-slate-800/80 p-5 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-2xs`}
        >
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-700">
            <h3 className="font-extrabold text-sm text-slate-900 dark:text-white uppercase tracking-wider">
              Filters
            </h3>
            <button
              onClick={resetAllFilters}
              className="text-xs text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" />
              <span>{t('resetFilters')}</span>
            </button>
          </div>

          {/* Category Filter List */}
          <div>
            <h4 className="font-bold text-xs text-slate-900 dark:text-white uppercase tracking-wider mb-3">
              {t('categorySidebar')}
            </h4>
            <div className="space-y-2">
              {categories.map((cat) => (
                <label
                  key={cat.id}
                  className="flex items-center justify-between text-xs text-slate-700 dark:text-slate-300 hover:text-sky-600 cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="sidebar-category"
                      checked={selectedCategory === cat.id}
                      onChange={() => handleCategorySelect(cat.id)}
                      className="text-sky-600 focus:ring-sky-500"
                    />
                    <span>{cat.name}</span>
                  </div>
                  <span className="text-slate-400">({categoryCounts[cat.id] || cat.productCount})</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-700">
            <h4 className="font-bold text-xs text-slate-900 dark:text-white uppercase tracking-wider mb-3">
              {t('priceRangeSidebar')}
            </h4>
            <div className="space-y-2 text-xs">
              <label className="flex items-center gap-2 cursor-pointer text-slate-700 dark:text-slate-300">
                <input
                  type="radio"
                  name="price-filter"
                  checked={priceRange === 'all'}
                  onChange={() => setPriceRange('all')}
                  className="text-sky-600 focus:ring-sky-500"
                />
                <span>{t('allPrices')}</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-slate-700 dark:text-slate-300">
                <input
                  type="radio"
                  name="price-filter"
                  checked={priceRange === 'under-1000'}
                  onChange={() => setPriceRange('under-1000')}
                  className="text-sky-600 focus:ring-sky-500"
                />
                <span>{t('under1000')}</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-slate-700 dark:text-slate-300">
                <input
                  type="radio"
                  name="price-filter"
                  checked={priceRange === '1000-2000'}
                  onChange={() => setPriceRange('1000-2000')}
                  className="text-sky-600 focus:ring-sky-500"
                />
                <span>{t('range1000to2000')}</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-slate-700 dark:text-slate-300">
                <input
                  type="radio"
                  name="price-filter"
                  checked={priceRange === '2000-5000'}
                  onChange={() => setPriceRange('2000-5000')}
                  className="text-sky-600 focus:ring-sky-500"
                />
                <span>{t('range2000to5000')}</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-slate-700 dark:text-slate-300">
                <input
                  type="radio"
                  name="price-filter"
                  checked={priceRange === 'above-5000'}
                  onChange={() => setPriceRange('above-5000')}
                  className="text-sky-600 focus:ring-sky-500"
                />
                <span>{t('above5000')}</span>
              </label>
            </div>
          </div>

          {/* Sort By */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-700">
            <h4 className="font-bold text-xs text-slate-900 dark:text-white uppercase tracking-wider mb-3">
              {t('sortBySidebar')}
            </h4>
            <div className="space-y-2 text-xs">
              <label className="flex items-center gap-2 cursor-pointer text-slate-700 dark:text-slate-300">
                <input
                  type="radio"
                  name="sort-by"
                  checked={sortBy === 'popularity'}
                  onChange={() => setSortBy('popularity')}
                  className="text-sky-600 focus:ring-sky-500"
                />
                <span>{t('sortPopularity')}</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-slate-700 dark:text-slate-300">
                <input
                  type="radio"
                  name="sort-by"
                  checked={sortBy === 'price-asc'}
                  onChange={() => setSortBy('price-asc')}
                  className="text-sky-600 focus:ring-sky-500"
                />
                <span>{t('sortPriceLowToHigh')}</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-slate-700 dark:text-slate-300">
                <input
                  type="radio"
                  name="sort-by"
                  checked={sortBy === 'price-desc'}
                  onChange={() => setSortBy('price-desc')}
                  className="text-sky-600 focus:ring-sky-500"
                />
                <span>{t('sortPriceHighToLow')}</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-slate-700 dark:text-slate-300">
                <input
                  type="radio"
                  name="sort-by"
                  checked={sortBy === 'newest'}
                  onChange={() => setSortBy('newest')}
                  className="text-sky-600 focus:ring-sky-500"
                />
                <span>{t('sortNewest')}</span>
              </label>
            </div>
          </div>
        </aside>

        {/* Product Grid (3 cols on desktop) */}
        <main className="lg:col-span-3">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              Showing {filteredProducts.length} products
            </span>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 p-8">
              <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-4">
                {t('noProductsFound')}
              </p>
              <button
                onClick={resetAllFilters}
                className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-lg"
              >
                {t('resetFilters')}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
