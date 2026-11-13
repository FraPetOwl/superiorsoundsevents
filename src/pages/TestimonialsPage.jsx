import React from 'react';
import { Star, ExternalLink, ArrowRight, CheckCircle2, MessageSquare, Quote } from 'lucide-react';
import { TESTIMONIALS, YELP_URL } from '../data/testimonials';
import { useQuote } from '../context/QuoteContext';

export default function TestimonialsPage({ setActivePage }) {
  const { setIsDrawerOpen } = useQuote();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
          Client Feedback & Yelp Reviews
        </span>
        <h1 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
          Client Testimonials
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Real feedback from couples, private hosts, and venue coordinators throughout the Hudson Valley.
        </p>

        {/* Yelp Banner Link */}
        <div className="pt-2">
          <a
            href={YELP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-red-950/60 border border-red-700/60 text-red-300 hover:text-white hover:bg-red-900/60 transition-all text-xs font-bold shadow-lg"
          >
            <span>Read & Review Superior Sounds on Yelp (5.0 ★★★★★)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {TESTIMONIALS.map((item) => (
          <div
            key={item.id}
            className="p-8 sm:p-10 rounded-3xl bg-[#0c1222] border border-slate-800/90 shadow-xl flex flex-col justify-between relative overflow-hidden group hover:border-cyan-500/40 transition-all"
          >
            <div className="absolute top-4 right-4 text-slate-800 group-hover:text-cyan-950 transition-colors pointer-events-none">
              <Quote className="w-16 h-16 opacity-30" />
            </div>

            <div>
              {/* Stars */}
              <div className="flex items-center space-x-1 text-amber-400 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs text-slate-400 font-bold ml-2">{item.rating}.0 Rating</span>
              </div>

              {/* Quote */}
              <blockquote className="text-slate-200 text-sm sm:text-base leading-relaxed italic mb-8">
                "{item.quote}"
              </blockquote>
            </div>

            <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between">
              <div>
                <div className="font-display font-bold text-white text-base">
                  {item.author}
                </div>
                <div className="text-xs text-cyan-400 font-medium">
                  {item.role} • {item.location}
                </div>
              </div>
              <span className="text-[11px] px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-400">
                {item.source}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Box */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-cyan-950 via-slate-900 to-cyan-950 border border-cyan-500/30 text-center space-y-4">
        <h3 className="text-2xl sm:text-3xl font-display font-black text-white">
          Make Your Event the Next Success Story
        </h3>
        <p className="text-sm text-slate-300 max-w-xl mx-auto">
          Contact us today to talk through dates, music preferences, audio requirements, and lighting setups.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black text-sm shadow-lg shadow-cyan-500/20"
          >
            Request Custom Event Quote
          </button>
          <button
            onClick={() => setActivePage('contact')}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700"
          >
            Direct Contact Form
          </button>
        </div>
      </div>
    </div>
  );
}
