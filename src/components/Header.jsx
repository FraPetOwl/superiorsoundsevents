import React, { useState } from 'react';
import { Phone, ShoppingBag, Menu, X } from 'lucide-react';
import InstagramIcon from './icons/InstagramIcon';
import { useQuote } from '../context/QuoteContext';

export default function Header({ activePage, setActivePage }) {
  const { totalItemCount, subtotal, setIsDrawerOpen, bagBounced } = useQuote();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'rentals', label: 'Rentals & Gear', highlight: true },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Media & Gallery' },
    { id: 'about', label: 'About Us' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'affiliations', label: 'Affiliations' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#070b14]/95 backdrop-blur-md border-b border-slate-800/80 transition-all">
      {/* Top micro banner */}
      <div className="bg-[#0a0f1d] text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span className="font-medium tracking-wide text-slate-300">
              Hudson Valley Event Audio & Lighting • 20+ Years Touring & Production Experience
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-slate-300">
            <span>By Appointment: 91 College Ave, Poughkeepsie, NY</span>
            <a
              href="https://www.instagram.com/superiorsounds"
              target="_blank"
              rel="noreferrer"
              className="text-pink-400 hover:text-pink-300 font-semibold flex items-center space-x-1 transition-colors"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>@superiorsounds</span>
            </a>
            <a
              href="tel:8457905472"
              className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center space-x-1 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>845.790.5472</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 group focus:outline-none text-left tap-squash"
          >
            <div className="relative">
              <img
                src="/images/logo-cyan.png"
                alt="Superior Sounds Logo"
                className="h-11 w-auto object-contain transition-transform group-hover:scale-105"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <div>
              <span className="font-display font-black text-xl tracking-tight text-white block">
                SUPERIOR<span className="text-cyan-400">SOUNDS</span>
              </span>
              <span className="text-[10px] tracking-widest text-slate-400 uppercase font-medium block">
                Audio • Lighting • Production
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all relative tap-squash ${
                    isActive
                      ? 'text-cyan-400 bg-slate-800/80 shadow-inner'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  } ${item.highlight ? 'text-cyan-300 font-semibold' : ''}`}
                >
                  {item.label}
                  {item.highlight && (
                    <span className="ml-1.5 inline-block w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-cyan-400 rounded-full"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Actions: Direct Call & Quote Drawer Button */}
          <div className="flex items-center space-x-3">
            <a
              href="tel:8457905472"
              className="hidden sm:inline-flex items-center space-x-2 text-xs font-semibold px-3.5 py-2.5 rounded-lg bg-slate-800/90 text-slate-200 hover:text-cyan-400 hover:border-cyan-500/40 border border-slate-700/80 transition-all tap-squash"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>845.790.5472</span>
            </a>

            {/* Quote Bag Button with Secondary Action Follow-Through (bagPop) */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              className={`relative inline-flex items-center space-x-2.5 px-4 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-md transition-all tap-squash ${
                bagBounced ? 'animate-bagPop ring-2 ring-cyan-300 ring-offset-2 ring-offset-slate-950' : ''
              }`}
            >
              <ShoppingBag className="w-4 h-4 text-slate-950 stroke-[2.5]" />
              <span className="hidden md:inline">Quote Bag</span>
              {totalItemCount > 0 ? (
                <span className="inline-flex items-center justify-center bg-slate-950 text-cyan-300 text-xs font-black rounded-full px-2 py-0.5 ml-1">
                  {totalItemCount} • ${subtotal}
                </span>
              ) : (
                <span className="inline-flex items-center justify-center bg-slate-950/20 text-slate-900 text-xs font-black rounded-full px-1.5 py-0.5">
                  0
                </span>
              )}
            </button>

            {/* Mobile menu button (Fitts's Law: 44px touch target) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none tap-squash"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900/98 border-b border-slate-800 backdrop-blur-xl px-4 pt-3 pb-6 space-y-1 animate-fadeIn">
          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3.5 rounded-lg text-base font-medium flex items-center justify-between tap-squash ${
                    isActive
                      ? 'text-cyan-400 bg-slate-800/90 font-bold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.highlight && (
                    <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-cyan-400 border border-slate-700">
                      47 Items
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-4 mt-2 border-t border-slate-800 flex flex-col space-y-2">
            <a
              href="tel:8457905472"
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-lg bg-slate-800 text-cyan-400 font-semibold text-sm border border-slate-700 tap-squash"
            >
              <Phone className="w-4 h-4" />
              <span>Direct Call: 845.790.5472</span>
            </a>
            <div className="text-center text-xs text-slate-400 pt-2">
              91 College Ave, Poughkeepsie, NY (By Appointment)
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
