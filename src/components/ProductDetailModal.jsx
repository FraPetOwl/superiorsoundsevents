import React, { useState } from 'react';
import { X, Plus, Minus, Check, ShoppingBag, ShieldCheck, Calendar, Info } from 'lucide-react';
import { useQuote } from '../context/QuoteContext';

export default function ProductDetailModal() {
  const { quickViewProduct, setQuickViewProduct, addItem, rentalDays } = useQuote();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!quickViewProduct) return null;

  const handleAdd = () => {
    addItem(quickViewProduct, qty);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      setQuickViewProduct(null);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div
        className="relative bg-[#0d1424] border border-slate-700/80 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Left */}
          <div className="bg-slate-950/80 p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-slate-800 relative">
            <img
              src={quickViewProduct.image}
              alt={quickViewProduct.name}
              className="max-h-64 max-w-full object-contain"
              onError={(e) => {
                e.target.src = '/images/logo-cyan.png';
                e.target.className = 'max-h-24 opacity-40';
              }}
            />
            <div className="absolute top-4 left-4">
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">
                {quickViewProduct.category}
              </span>
            </div>
          </div>

          {/* Details Right */}
          <div className="p-6 md:p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-display font-black text-white mb-2">
                {quickViewProduct.name}
              </h2>

              <div className="flex items-baseline space-x-2 mb-4">
                <span className="text-3xl font-display font-black text-cyan-400">
                  ${quickViewProduct.price}
                </span>
                <span className="text-sm text-slate-400">
                  / day ({rentalDays} {rentalDays === 1 ? 'day' : 'days'} estimated: ${quickViewProduct.price * rentalDays})
                </span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {quickViewProduct.description}
              </p>

              {/* Technical Specifications */}
              {quickViewProduct.specs && quickViewProduct.specs.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center space-x-1.5">
                    <Info className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Technical Highlights</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {quickViewProduct.specs.map((spec, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="text-cyan-400 shrink-0 font-bold">•</span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Warehouse & Pickup Note */}
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-[11px] text-slate-400 mb-6 flex items-start space-x-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  Pickup available at our Poughkeepsie warehouse (11am-7pm daily by appointment) or optional on-site Hudson Valley delivery & technician setup.
                </span>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-slate-800 flex items-center space-x-3">
              <div className="flex items-center bg-slate-900 rounded-lg border border-slate-700 p-1">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="p-1.5 text-slate-400 hover:text-white"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-3 text-sm font-bold text-white w-8 text-center">
                  {qty}
                </span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="p-1.5 text-slate-400 hover:text-white"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={handleAdd}
                className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center space-x-2 transition-all shadow-lg ${
                  added
                    ? 'bg-emerald-500 text-slate-950'
                    : 'bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-slate-950 shadow-cyan-500/25 active:scale-95'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4 stroke-[3]" />
                    <span>Added to Quote Bag!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 text-slate-950 stroke-[2.5]" />
                    <span>Add to Quote (${quickViewProduct.price * qty * rentalDays})</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
