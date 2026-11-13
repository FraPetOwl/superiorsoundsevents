import React from 'react';
import { SERVICES } from '../data/services';
import { Music, Speaker, Sparkles, Zap, Mic2, Tv, Calendar, Disc, CheckCircle2, ArrowRight, Phone } from 'lucide-react';
import { useQuote } from '../context/QuoteContext';

export default function ServicesPage({ setActivePage }) {
  const { setIsDrawerOpen } = useQuote();

  const getServiceIcon = (id) => {
    switch (id) {
      case 'mobile-dj': return <Music className="w-7 h-7 text-cyan-400" />;
      case 'sound-reinforcement': return <Speaker className="w-7 h-7 text-cyan-400" />;
      case 'lighting-production': return <Sparkles className="w-7 h-7 text-cyan-400" />;
      case 'intelligent-dance-lighting': return <Zap className="w-7 h-7 text-cyan-400" />;
      case 'event-management': return <Calendar className="w-7 h-7 text-cyan-400" />;
      case 'public-address': return <Mic2 className="w-7 h-7 text-cyan-400" />;
      case 'complete-dj-setups': return <Disc className="w-7 h-7 text-cyan-400" />;
      case 'visuals-multimedia': return <Tv className="w-7 h-7 text-cyan-400" />;
      default: return <Sparkles className="w-7 h-7 text-cyan-400" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
          Hudson Valley Event Production
        </span>
        <h1 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
          Services & Technical Solutions
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Over 20 years of technical expertise. From high-touch wedding entertainment and touring live band sound reinforcement to concert lighting design and corporate audiovisual management.
        </p>
      </div>

      {/* Services List */}
      <div className="space-y-12">
        {SERVICES.map((service, index) => (
          <div
            key={service.id}
            id={service.id}
            className={`p-8 sm:p-10 rounded-3xl bg-[#0c1222] border border-slate-800/90 shadow-xl flex flex-col lg:flex-row gap-8 items-start ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Left / Info Column */}
            <div className="flex-1 space-y-5">
              <div className="flex items-center space-x-3">
                <div className="w-14 h-14 rounded-2xl bg-cyan-950/80 border border-cyan-800/60 flex items-center justify-center shadow-lg shadow-cyan-950/40 shrink-0">
                  {getServiceIcon(service.id)}
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-display font-black text-white">
                    {service.title}
                  </h2>
                  <p className="text-xs text-cyan-400 font-semibold tracking-wide">
                    {service.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {service.description}
              </p>

              {/* Feature Checklist */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Key Service Highlights:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended For Tags */}
              {service.recommendedFor && (
                <div className="pt-2">
                  <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Ideal For:
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {service.recommendedFor.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-medium text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Action Box */}
            <div className="w-full lg:w-72 bg-slate-950/80 p-6 rounded-2xl border border-slate-800 space-y-4 shrink-0 text-center">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Book This Service
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Every event is unique. Contact our production director for a customized quote tailored to your venue and date.
              </p>

              <button
                onClick={() => setIsDrawerOpen(true)}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-slate-950 font-black text-xs shadow-lg shadow-cyan-500/20 active:scale-95 transition-all"
              >
                Request Service Quote
              </button>

              <a
                href="tel:8457905472"
                className="w-full inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-bold border border-slate-700 transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>Call 845.790.5472</span>
              </a>

              <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-500">
                Turn-key engineering & full backup gear included on every booking.
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-cyan-950 via-slate-900 to-cyan-950 border border-cyan-500/30 text-center space-y-4">
        <h3 className="text-2xl sm:text-3xl font-display font-black text-white">
          Looking for Equipment Rental Only?
        </h3>
        <p className="text-sm text-slate-300 max-w-xl mx-auto">
          Need to dry-hire speakers, microphones, or CDJs for your own event or DJ? Check out our complete 47-item rental inventory.
        </p>
        <button
          onClick={() => setActivePage('rentals')}
          className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black text-sm shadow-lg shadow-cyan-500/20"
        >
          <span>Browse 47 Rentable Gear Items</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
