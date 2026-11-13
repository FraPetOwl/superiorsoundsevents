import React, { useState, useEffect } from 'react';
import { QuoteProvider } from './context/QuoteContext';
import Header from './components/Header';
import Footer from './components/Footer';
import QuoteDrawer from './components/QuoteDrawer';
import ProductDetailModal from './components/ProductDetailModal';
import ChatDrawer from './components/ChatDrawer';

// Pages
import HomePage from './pages/HomePage';
import RentalsPage from './pages/RentalsPage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import TestimonialsPage from './pages/TestimonialsPage';
import AffiliationsPage from './pages/AffiliationsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  // Read initial page from URL hash if available
  const [activePage, setActivePage] = useState(() => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    const validPages = ['home', 'rentals', 'services', 'gallery', 'about', 'testimonials', 'affiliations', 'contact'];
    return validPages.includes(hash) ? hash : 'home';
  });

  // Sync hash when activePage changes
  const handlePageChange = (page) => {
    setActivePage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Listen to browser forward/back buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validPages = ['home', 'rentals', 'services', 'gallery', 'about', 'testimonials', 'affiliations', 'contact'];
      if (validPages.includes(hash)) {
        setActivePage(hash);
      } else if (!hash) {
        setActivePage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <QuoteProvider>
      <div className="min-h-screen flex flex-col bg-[#070b14] text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
        {/* Navigation Header */}
        <Header activePage={activePage} setActivePage={handlePageChange} />

        {/* Main Content Area */}
        <main className="flex-1">
          {activePage === 'home' && <HomePage setActivePage={handlePageChange} />}
          {activePage === 'rentals' && <RentalsPage />}
          {activePage === 'services' && <ServicesPage setActivePage={handlePageChange} />}
          {activePage === 'gallery' && <GalleryPage />}
          {activePage === 'about' && <AboutPage setActivePage={handlePageChange} />}
          {activePage === 'testimonials' && <TestimonialsPage setActivePage={handlePageChange} />}
          {activePage === 'affiliations' && <AffiliationsPage setActivePage={handlePageChange} />}
          {activePage === 'contact' && <ContactPage />}
        </main>

        {/* Global Slide-Over Quote Drawer */}
        <QuoteDrawer />

        {/* Global Product Detail Modal */}
        <ProductDetailModal />

        {/* Floating AI Equipment & Event Assistant Drawer */}
        <ChatDrawer />

        {/* Footer */}
        <Footer setActivePage={handlePageChange} />
      </div>
    </QuoteProvider>
  );
}
