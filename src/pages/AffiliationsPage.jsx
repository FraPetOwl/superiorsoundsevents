import React from 'react';
import { AFFILIATIONS } from '../data/affiliations';
import { Building2, MapPin, ExternalLink, ArrowRight, Handshake } from 'lucide-react';

export default function AffiliationsPage({ setActivePage }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
          Trusted Hudson Valley Network
        </span>
        <h1 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
          Our Affiliations & Venue Partners
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          We are proud to collaborate closely with premier Hudson Valley wedding planners, historic cultural spaces, event producers, media creators, and our international electronic music affiliate in Berlin.
        </p>
      </div>

      {/* Affiliations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {AFFILIATIONS.map((affil, idx) => (
          <div
            key={idx}
            className="p-8 rounded-2xl bg-[#0c1222] border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-800/60 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Handshake className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold text-slate-400 flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{affil.tag}</span>
                </span>
              </div>

              <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                {affil.name}
              </h3>

              <p className="text-xs text-cyan-400/90 font-semibold mb-3">
                {affil.role}
              </p>

              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                {affil.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
              <span>Preferred Production Partner</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            </div>
          </div>
        ))}
      </div>

      {/* Partner with us CTA */}
      <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/40 border border-slate-800 text-center space-y-4">
        <h3 className="text-2xl font-display font-bold text-white">
          Are You a Hudson Valley Venue or Planner?
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
          We love partnering with local estate managers, wedding coordinators, and production companies. Inquire about preferred vendor rates, rider fulfillment, and turn-key sound partnerships.
        </p>
        <button
          onClick={() => setActivePage('contact')}
          className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md transition-all"
        >
          <span>Connect With Our Team</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
