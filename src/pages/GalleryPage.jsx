import React, { useState } from 'react';
import { GALLERY } from '../data/gallery';
import { MapPin, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  const categories = ['All', 'Weddings', 'Lighting & Concerts', 'Live Sound', 'DJ Gear'];

  const filteredGallery = GALLERY.filter(item => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  const openLightbox = (index) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredGallery.length);
    }
  };

  const prevImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + filteredGallery.length) % filteredGallery.length);
    }
  };

  const currentItem = activeLightboxIndex !== null ? filteredGallery[activeLightboxIndex] : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
          Visual Portfolio
        </span>
        <h1 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
          Media & Event Gallery
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          A glimpse into real events powered by Superior Sounds across the Hudson Valley. Barn weddings, concert stages, outdoor festivals, and intelligent light shows.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex items-center justify-center space-x-2 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedCategory === cat
                ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGallery.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => openLightbox(idx)}
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800/90 hover:border-cyan-500/50 shadow-xl cursor-pointer transition-all duration-300 hover:-translate-y-1"
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-6">
              <span className="text-[11px] font-bold uppercase text-cyan-400 mb-1">
                {item.category}
              </span>
              <h3 className="text-white font-display font-bold text-lg mb-1 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-slate-300 flex items-center space-x-1 mb-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{item.location}</span>
              </p>
              <p className="text-xs text-slate-400 line-clamp-2">
                {item.description}
              </p>
            </div>

            {/* Quick View Icon */}
            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-950/70 border border-slate-700 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <Eye className="w-4 h-4 text-cyan-400" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {currentItem && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 rounded-full bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800 transition-colors z-50"
            aria-label="Close image"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 text-white hover:bg-cyan-500 hover:text-slate-950 border border-slate-800 transition-all z-50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 text-white hover:bg-cyan-500 hover:text-slate-950 border border-slate-800 transition-all z-50"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content */}
          <div
            className="max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentItem.src}
              alt={currentItem.title}
              className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-slate-800"
            />
            <div className="mt-4 text-center max-w-xl">
              <span className="text-xs font-bold uppercase text-cyan-400 tracking-wider">
                {currentItem.category} • {currentItem.location}
              </span>
              <h3 className="text-xl font-display font-bold text-white mt-1">
                {currentItem.title}
              </h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                {currentItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
