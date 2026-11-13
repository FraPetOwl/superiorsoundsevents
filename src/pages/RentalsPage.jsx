import React, { useState, useMemo } from 'react';
import { Search, Filter, Calendar, MapPin, Sparkles, X, ShoppingBag, ArrowUpDown, ShieldCheck, Check } from 'lucide-react';
import { INVENTORY, CATEGORIES } from '../data/inventory';
import ProductCard from '../components/ProductCard';
import { useQuote } from '../context/QuoteContext';

export default function RentalsPage() {
  const {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    rentalDays,
    totalItemCount,
    subtotal,
    setIsDrawerOpen
  } = useQuote();

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default'); // 'default' | 'price-asc' | 'price-desc' | 'name'

  // Filter and sort items
  const filteredProducts = useMemo(() => {
    return INVENTORY.filter((item) => {
      // Category filter
      if (selectedCategory !== 'All' && item.category !== selectedCategory) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesCategory = item.category.toLowerCase().includes(q);
        const matchesSpecs = item.specs?.some(s => s.toLowerCase().includes(q));
        const matchesDesc = item.description?.toLowerCase().includes(q);
        if (!matchesName && !matchesCategory && !matchesSpecs && !matchesDesc) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0; // default original order
    });
  }, [selectedCategory, searchQuery, sortBy]);

  // Count items per category for pills
  const categoryCounts = useMemo(() => {
    const counts = { All: INVENTORY.length };
    CATEGORIES.forEach(cat => {
      if (cat !== 'All') {
        counts[cat] = INVENTORY.filter(i => i.category === cat).length;
      }
    });
    return counts;
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
          Professional Gear Catalog
        </span>
        <h1 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
          Sound & Lighting Rentals
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          47 tour-grade sound systems, Pioneer CDJs, moving head lights, wireless microphones, and trussing. Select your rental dates below to calculate instant pricing.
        </p>
      </div>

      {/* RENTAL DATE SELECTOR BANNER */}
      <div className="p-5 sm:p-6 rounded-2xl bg-[#0c1322] border border-cyan-500/30 shadow-xl shadow-cyan-950/20 backdrop-blur-md">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-cyan-400 font-bold text-sm">
              <Calendar className="w-4 h-4" />
              <span>Select Event / Rental Window</span>
            </div>
            <p className="text-xs text-slate-400">
              Pricing automatically adjusts based on duration ({rentalDays} {rentalDays === 1 ? 'day' : 'days'}).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full lg:w-auto">
            <div className="flex items-center space-x-2 bg-slate-950 px-3 py-2 rounded-lg border border-slate-800">
              <span className="text-xs text-slate-400 font-medium">Start:</span>
              <input
                type="date"
                value={startDate}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setStartDate(e.target.value)}
                className="bg-transparent text-xs text-white focus:outline-none font-semibold"
              />
            </div>
            <div className="flex items-center space-x-2 bg-slate-950 px-3 py-2 rounded-lg border border-slate-800">
              <span className="text-xs text-slate-400 font-medium">End:</span>
              <input
                type="date"
                value={endDate}
                min={startDate || new Date().toISOString().split('T')[0]}
                onChange={(e) => setEndDate(e.target.value)}
                className="bg-transparent text-xs text-white focus:outline-none font-semibold"
              />
            </div>
          </div>

          {/* Quick Drawer Link */}
          <div className="flex items-center space-x-3 pt-2 lg:pt-0 border-t lg:border-t-0 border-slate-800">
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="w-full lg:w-auto px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center justify-center space-x-2 transition-all shadow-md active:scale-95"
            >
              <ShoppingBag className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>View Quote Bag ({totalItemCount} items • ${subtotal})</span>
            </button>
          </div>
        </div>
      </div>

      {/* SEARCH & FILTER CONTROLS */}
      <div className="space-y-4">
        {/* Top Controls: Search & Sort */}
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
          {/* Search Box */}
          <div className="relative w-full sm:max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search gear by name, brand (QSC, Pioneer, Chauvet)..."
              className="w-full bg-slate-900/90 border border-slate-800 rounded-xl pl-10 pr-10 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400 placeholder:text-slate-500 shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center space-x-2 w-full sm:w-auto justify-end">
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-300 focus:outline-none focus:border-cyan-400"
            >
              <option value="default">Default Order</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name">Name (A - Z)</option>
            </select>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category;
            const count = categoryCounts[category] || 0;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center space-x-1.5 ${
                  isSelected
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20 font-bold'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <span>{category}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected ? 'bg-slate-950/20 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* FILTER RESULTS SUMMARY */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-1">
        <div>
          Showing <span className="text-white font-bold">{filteredProducts.length}</span> of {INVENTORY.length} items
          {selectedCategory !== 'All' && <span> in <span className="text-cyan-400 font-semibold">{selectedCategory}</span></span>}
          {searchQuery && <span> matching "<span className="text-cyan-400 font-semibold">{searchQuery}</span>"</span>}
        </div>
        {(selectedCategory !== 'All' || searchQuery) && (
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="text-xs text-cyan-400 hover:underline font-medium"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* PRODUCTS GRID */}
      {filteredProducts.length === 0 ? (
        <div className="py-20 text-center space-y-4 bg-slate-900/20 rounded-2xl border border-slate-800">
          <p className="text-slate-400 text-sm">No equipment matches your search or filter criteria.</p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="px-4 py-2 rounded-lg bg-slate-800 text-cyan-400 text-xs font-bold hover:bg-slate-700"
          >
            Clear Search & Show All 47 Items
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* FOOTER POLICIES INFO BANNER */}
      <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 text-xs text-slate-400 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-start space-x-3">
          <MapPin className="w-5 h-5 text-cyan-400 shrink-0" />
          <div>
            <h4 className="font-bold text-white mb-1">Poughkeepsie Warehouse Pickup</h4>
            <p>Pick up directly at 91 College Ave, Poughkeepsie NY. Open all days 11am–7pm by appointment.</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />
          <div>
            <h4 className="font-bold text-white mb-1">Inspected & Soundchecked</h4>
            <p>Every cable, mixer, and speaker is cleaned and tested before release. Road cases and power cables included.</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Sparkles className="w-5 h-5 text-cyan-400 shrink-0" />
          <div>
            <h4 className="font-bold text-white mb-1">On-Site Delivery & Setup Available</h4>
            <p>Optional delivery and technician setup anywhere in Dutchess, Ulster, Columbia, and Orange counties.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
