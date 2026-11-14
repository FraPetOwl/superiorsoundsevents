import React, { useState } from 'react';
import { Plus, Minus, Check, Eye } from 'lucide-react';
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
    }, 1800);
  };

  const getCategoryColor = (cat) => {
    switch (cat) {
      case 'Audio': return 'bg-cyan-950/90 text-cyan-400 border-cyan-800/60';
      case 'Lighting': return 'bg-amber-950/90 text-amber-400 border-amber-800/60';
      case 'DJ Gear': return 'bg-purple-950/90 text-purple-400 border-purple-800/60';
      case 'Soundboards': return 'bg-blue-950/90 text-blue-400 border-blue-800/60';
      case 'Microphones': return 'bg-emerald-950/90 text-emerald-400 border-emerald-800/60';
      case 'Truss': return 'bg-slate-800 text-slate-300 border-slate-700';
      case 'Visuals': return 'bg-rose-950/90 text-rose-400 border-rose-800/60';
      case 'Add-Ons': return 'bg-pink-950/90 text-pink-400 border-pink-800/60';
      default: return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  return (
    <div
      onClick={() => setQuickViewProduct(product)}
      className="hardware-card group rounded-2xl flex flex-col overflow-hidden cursor-pointer relative"
    >
      {/* Top Image Box */}
      <div className="relative aspect-[4/3] bg-[#070b14] overflow-hidden flex items-center justify-center p-5 border-b border-slate-850">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain transition-transform duration-300 ease-studio group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            e.target.src = '/images/logo-cyan.png';
            e.target.className = 'max-h-16 opacity-30';
          }}
        />

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className={`text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md border backdrop-blur-md ${getCategoryColor(product.category)}`}>
            {product.category}
          </span>
        </div>

        {/* In Bag Indicator (Follow-Through) */}
        {inBagQty > 0 && (
          <div className="absolute top-3 right-3 bg-cyan-400 text-slate-950 text-xs font-black px-2.5 py-0.5 rounded-full shadow-md flex items-center space-x-1 animate-scaleUp">
            <Check className="w-3 h-3 stroke-[3]" />
            <span>{inBagQty} in bag</span>
          </div>
        )}

        {/* Hover Quick View Button Overlay */}
        <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
          <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-white bg-slate-900/90 border border-slate-700 px-3.5 py-2 rounded-xl shadow-lg tap-squash">
            <Eye className="w-3.5 h-3.5 text-cyan-400" />
            <span>Quick Specs</span>
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
            <span className="text-2xl font-display font-black text-cyan-400">
              ${product.price}
            </span>
            <span className="text-xs text-slate-400 font-medium">
              / {product.unit || 'day'}
            </span>
          </div>

          {/* Quick Specs Snippet (Miller's Law - Chunking info) */}
          {product.specs && product.specs.length > 0 && (
            <ul className="space-y-1.5 mb-4 text-xs text-slate-400">
              {product.specs.slice(0, 2).map((spec, idx) => (
                <li key={idx} className="flex items-center space-x-1.5 line-clamp-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 shrink-0"></span>
                  <span className="truncate">{spec}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Bottom Actions: Quantity + Add To Quote (Fitts's Law + Squash & Stretch) */}
        <div
          className="pt-3 border-t border-slate-800/80 flex items-center space-x-2"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Quantity Controls (Fitts's Law: 38px comfortable tap region) */}
          <div className="flex items-center bg-slate-900/90 rounded-xl border border-slate-800 p-1">
            <button
              onClick={() => setQty(Math.max(1, qty - 1))}
              className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors tap-squash"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="px-2 text-xs font-bold text-white w-7 text-center">
              {qty}
            </span>
            <button
              onClick={() => setQty(qty + 1)}
              className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors tap-squash"
              aria-label="Increase quantity"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Add to Quote Button (Squash & Stretch + Exaggerated Feedback) */}
          <button
            onClick={handleAdd}
            className={`flex-1 h-10 px-3 rounded-xl text-xs font-bold flex items-center justify-center space-x-1.5 transition-all shadow-md tap-squash ${
              justAdded
                ? 'bg-emerald-500 text-slate-950 ring-2 ring-emerald-400 shadow-emerald-500/20'
                : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-cyan-500/20'
            }`}
          >
            {justAdded ? (
              <>
                <Check className="w-4 h-4 stroke-[3]" />
                <span>Added to Quote!</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4 stroke-[3]" />
                <span>Add to Quote</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
