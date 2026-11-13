import React, { useState } from 'react';
import { Plus, Minus, Check, Eye, Sparkles } from 'lucide-react';
import { useQuote } from '../context/QuoteContext';

export default function ProductCard({ product }) {
  const { addItem, setQuickViewProduct, items } = useQuote();
  const [qty, setQty] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  // Check if item is already in bag
  const inBagItem = items.find(i => i.id === product.id);
  const inBagQty = inBagItem ? inBagItem.quantity : 0;

  const handleAdd = (e) => {
    e.stopPropagation();
    addItem(product, qty);
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
    }, 1500);
  };

  const getCategoryColor = (cat) => {
    switch (cat) {
      case 'Audio': return 'bg-cyan-950/80 text-cyan-400 border-cyan-800/60';
      case 'Lighting': return 'bg-amber-950/80 text-amber-400 border-amber-800/60';
      case 'DJ Gear': return 'bg-purple-950/80 text-purple-400 border-purple-800/60';
      case 'Soundboards': return 'bg-blue-950/80 text-blue-400 border-blue-800/60';
      case 'Microphones': return 'bg-emerald-950/80 text-emerald-400 border-emerald-800/60';
      case 'Truss': return 'bg-slate-800 text-slate-300 border-slate-700';
      case 'Visuals': return 'bg-rose-950/80 text-rose-400 border-rose-800/60';
      case 'Add-Ons': return 'bg-pink-950/80 text-pink-400 border-pink-800/60';
      default: return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  return (
    <div
      onClick={() => setQuickViewProduct(product)}
      className="group bg-[#0d1424] hover:bg-[#111a30] rounded-xl border border-slate-800/90 hover:border-cyan-500/50 transition-all duration-300 flex flex-col overflow-hidden shadow-lg hover:shadow-cyan-500/10 cursor-pointer relative"
    >
      {/* Top Image Box */}
      <div className="relative aspect-[4/3] bg-slate-950/60 overflow-hidden flex items-center justify-center p-4">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            // fallback placeholder if image fails
            e.target.src = '/images/logo-cyan.png';
            e.target.className = 'max-h-16 opacity-40';
          }}
        />

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className={`text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-md border backdrop-blur-md ${getCategoryColor(product.category)}`}>
            {product.category}
          </span>
        </div>

        {/* In Bag Indicator */}
        {inBagQty > 0 && (
          <div className="absolute top-3 right-3 bg-cyan-400 text-slate-950 text-xs font-black px-2 py-0.5 rounded-full shadow-md flex items-center space-x-1">
            <Check className="w-3 h-3 stroke-[3]" />
            <span>{inBagQty} in bag</span>
          </div>
        )}

        {/* Hover Quick View Button Overlay */}
        <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-white bg-slate-900/90 border border-slate-700 px-3 py-1.5 rounded-lg shadow-lg">
            <Eye className="w-3.5 h-3.5 text-cyan-400" />
            <span>Quick View Specs</span>
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-white font-display font-bold text-base leading-snug group-hover:text-cyan-300 transition-colors">
              {product.name}
            </h3>
          </div>

          <div className="flex items-baseline space-x-1.5 mb-3">
            <span className="text-xl font-display font-extrabold text-cyan-400">
              ${product.price}
            </span>
            <span className="text-xs text-slate-400 font-medium">
              / {product.unit || 'day'}
            </span>
          </div>

          {/* Quick Specs Snippet */}
          {product.specs && product.specs.length > 0 && (
            <ul className="space-y-1 mb-4 text-xs text-slate-400">
              {product.specs.slice(0, 2).map((spec, idx) => (
                <li key={idx} className="flex items-start space-x-1.5 line-clamp-1">
                  <span className="text-cyan-400 shrink-0">•</span>
                  <span className="truncate">{spec}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Bottom Actions: Quantity + Add To Quote */}
        <div className="pt-3 border-t border-slate-800/80 flex items-center space-x-2" onClick={(e) => e.stopPropagation()}>
          {/* Quantity Controls */}
          <div className="flex items-center bg-slate-900 rounded-lg border border-slate-800 p-0.5">
            <button
              onClick={() => setQty(Math.max(1, qty - 1))}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="px-2 text-xs font-bold text-white w-7 text-center">
              {qty}
            </span>
            <button
              onClick={() => setQty(qty + 1)}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Add to Quote Button */}
          <button
            onClick={handleAdd}
            className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center space-x-1.5 transition-all shadow-md ${
              justAdded
                ? 'bg-emerald-500 text-slate-950 shadow-emerald-500/20'
                : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-cyan-500/20 active:scale-95'
            }`}
          >
            {justAdded ? (
              <>
                <Check className="w-3.5 h-3.5 stroke-[3]" />
                <span>Added to Quote!</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5 stroke-[3]" />
                <span>Add to Quote</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
