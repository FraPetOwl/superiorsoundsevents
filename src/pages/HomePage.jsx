import React from 'react';
import { ArrowRight, Music, Speaker, Sparkles, Zap, ShieldCheck, Star, Phone, Calendar, CheckCircle2, ChevronRight, MapPin, Tv, Mic2 } from 'lucide-react';
import { INVENTORY } from '../data/inventory';
import { SERVICES } from '../data/services';
import { GALLERY } from '../data/gallery';
import { TESTIMONIALS } from '../data/testimonials';
import ProductCard from '../components/ProductCard';
import { useQuote } from '../context/QuoteContext';

export default function HomePage({ setActivePage }) {
  const { setIsDrawerOpen } = useQuote();

  // Featured 4 items from inventory
  const featuredIds = ['pioneer-djm-900nxs2', 'qsc-kw122', 'chauvet-gigbar-move', 'shure-slxd24d-sm58-dual'];
  const featuredGear = INVENTORY.filter(item => featuredIds.includes(item.id));

  // Featured 3 gallery shots
  const featuredGallery = GALLERY.slice(0, 3);

  const featuredTestimonial = TESTIMONIALS[0];

  return (
    <div className="space-y-24 pb-16">
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-8 pb-16">
        {/* Background Ambient Glow & Visual Elements */}
        <div className="absolute inset-0 bg-[#070b14] -z-20"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-8 shadow-lg shadow-cyan-950/50 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <span>Serving Hudson Valley & Surrounding Areas for 20+ Years</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight text-white max-w-5xl mx-auto leading-[1.08] mb-6">
            HUDSON VALLEY’S PREMIER{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400">
              SOUND & LIGHTING
            </span>{' '}
            PRODUCTION
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed mb-10">
            From intimate acoustic performances and luxury barn weddings to 1,000-person college block parties. We deliver tour-grade sound reinforcement, intelligent lighting, full-service DJing, and rider-ready gear rentals.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none">
            <button
              onClick={() => setActivePage('rentals')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-slate-950 font-display font-black text-base shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40 transition-all transform active:scale-95 flex items-center justify-center space-x-2"
            >
              <span>Explore Rental Gear (47 Items)</span>
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </button>

            <button
              onClick={() => setIsDrawerOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-display font-bold text-base border border-slate-700/80 hover:border-cyan-500/40 transition-all flex items-center justify-center space-x-2"
            >
              <span>Build Custom Event Quote</span>
            </button>
          </div>

          {/* Direct Phone / Appointment note */}
          <div className="mt-8 flex items-center justify-center space-x-6 text-xs text-slate-400">
            <span className="flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Commercial Grade & Insured</span>
            </span>
            <span>•</span>
            <span className="flex items-center space-x-1.5">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>91 College Ave, Poughkeepsie (By Appt)</span>
            </span>
            <span>•</span>
            <a href="tel:8457905472" className="text-cyan-400 hover:underline font-bold flex items-center space-x-1">
              <Phone className="w-3.5 h-3.5" />
              <span>845.790.5472</span>
            </a>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md">
          <div className="text-center p-4 border-r border-slate-800/60 last:border-0">
            <div className="text-3xl sm:text-4xl font-display font-black text-cyan-400 mb-1">20+</div>
            <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Years Experience</div>
          </div>
          <div className="text-center p-4 border-r border-slate-800/60 last:border-0">
            <div className="text-3xl sm:text-4xl font-display font-black text-white mb-1">47+</div>
            <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Rentable Gear Items</div>
          </div>
          <div className="text-center p-4 border-r border-slate-800/60 last:border-0">
            <div className="text-3xl sm:text-4xl font-display font-black text-cyan-400 mb-1">1,000+</div>
            <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Events Powered</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl sm:text-4xl font-display font-black text-white flex items-center justify-center space-x-1 mb-1">
              <span>5.0</span>
              <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">5-Star Client Rating</div>
          </div>
        </div>
      </section>

      {/* CORE PRODUCTION SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-3">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight mb-4">
            Full-Spectrum Event Production
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            We are much more than a standard DJ company. Superior Sounds provides comprehensive technical reinforcement, staging, and entertainment infrastructure tailored to your exact venue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.slice(0, 6).map((service) => {
            return (
              <div
                key={service.id}
                onClick={() => setActivePage('services')}
                className="group p-8 rounded-2xl bg-[#0c1222] border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/10 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-800/60 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all">
                    {service.id === 'mobile-dj' && <Music className="w-6 h-6" />}
                    {service.id === 'sound-reinforcement' && <Speaker className="w-6 h-6" />}
                    {service.id === 'lighting-production' && <Sparkles className="w-6 h-6" />}
                    {service.id === 'intelligent-dance-lighting' && <Zap className="w-6 h-6" />}
                    {service.id === 'public-address' && <Mic2 className="w-6 h-6" />}
                    {service.id === 'visuals-multimedia' && <Tv className="w-6 h-6" />}
                    {service.id === 'event-management' && <Calendar className="w-6 h-6" />}
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-cyan-400/90 font-medium mb-3">
                    {service.tagline}
                  </p>

                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {service.description.slice(0, 130)}...
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-bold text-slate-300 group-hover:text-cyan-400">
                  <span>Learn more & specs</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => setActivePage('services')}
            className="inline-flex items-center space-x-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 underline underline-offset-8"
          >
            <span>View All 8 Production & Sound Services</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* POPULAR RENTAL GEAR SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-2">
              Tour-Grade Inventory
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight">
              Featured Rental Equipment
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-xl">
              Clean, tested, and tour-ready in road cases. Available for warehouse pickup in Poughkeepsie or on-site delivery throughout Hudson Valley.
            </p>
          </div>

          <button
            onClick={() => setActivePage('rentals')}
            className="inline-flex items-center space-x-2 text-sm font-bold px-5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-cyan-400 hover:bg-slate-800 transition-colors self-start md:self-auto"
          >
            <span>View All 47 Products</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredGear.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* REAL EVENT GALLERY PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-2">
            In Action
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight mb-3">
            Real Events Across the Hudson Valley
          </h2>
          <p className="text-slate-400 text-sm">
            Historic barns in Rhinebeck, industrial spaces at Basilica Hudson, campus festivals, and vineyard receptions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setActivePage('gallery')}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 cursor-pointer shadow-xl"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity flex flex-col justify-end p-6">
                <span className="text-[11px] font-bold uppercase text-cyan-400 mb-1">
                  {item.category}
                </span>
                <h3 className="text-white font-display font-bold text-lg mb-1 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 flex items-center space-x-1">
                  <MapPin className="w-3 h-3 text-cyan-400" />
                  <span>{item.location}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => setActivePage('gallery')}
            className="inline-flex items-center space-x-2 text-sm font-bold px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white transition-all shadow-md"
          >
            <span>Explore Full Photo Gallery (12 Events)</span>
            <ArrowRight className="w-4 h-4 text-cyan-400" />
          </button>
        </div>
      </section>

      {/* FEATURED TESTIMONIAL */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-slate-900/90 to-[#0a101f] border border-cyan-500/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 translate-x-8 -translate-y-8 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex items-center space-x-1 text-amber-400 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>

          <blockquote className="text-xl sm:text-2xl text-slate-100 font-normal leading-relaxed mb-8 italic">
            "{featuredTestimonial.quote}"
          </blockquote>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-800">
            <div>
              <div className="text-white font-display font-bold text-lg">
                {featuredTestimonial.author}
              </div>
              <div className="text-xs text-cyan-400 font-semibold">
                {featuredTestimonial.role} • {featuredTestimonial.location}
              </div>
            </div>

            <button
              onClick={() => setActivePage('testimonials')}
              className="text-xs text-slate-400 hover:text-cyan-400 font-semibold flex items-center space-x-1.5 self-start sm:self-auto"
            >
              <span>Read more reviews on Yelp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* BOTTOM ACTION CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-r from-cyan-950 via-slate-900 to-cyan-950 border border-cyan-500/40 shadow-2xl overflow-hidden text-center">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight">
              Ready to Make Your Event Unforgettable?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Whether you need a full live band sound system, wireless uplighting package, or professional DJ backline, we’re here to help design the perfect technical solution.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={() => setIsDrawerOpen(true)}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black text-sm shadow-xl shadow-cyan-400/20 active:scale-95 transition-all"
              >
                Build Instant Rental Quote
              </button>
              <a
                href="tel:8457905472"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-sm border border-slate-700 transition-all flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>Call 845.790.5472</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
