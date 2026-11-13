import React from 'react';
import { ShieldCheck, Award, Heart, Users, MapPin, Clock, Phone, Mail, ArrowRight, Sparkles } from 'lucide-react';

export default function AboutPage({ setActivePage }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
          Our Story & Philosophy
        </span>
        <h1 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
          About Superior Sounds
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Over two decades of dedication to live sound reinforcement, event production, and premier entertainment across the Hudson Valley and surrounding regions.
        </p>
      </div>

      {/* Main Story & Founders Section */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#0c1222] border border-slate-800/90 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Founders Photo Left */}
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-950 border border-slate-700/80 shadow-2xl">
            <img
              src="/images/owners.jpg"
              alt="Superior Sounds Founders"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = '/images/gallery-4.jpg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-800 text-center">
              <span className="text-sm font-display font-bold text-white block">Founders & Production Directors</span>
              <span className="text-xs text-cyan-400 font-medium">20+ Years Behind the Boards & Decks</span>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl -z-10"></div>
        </div>

        {/* Story Text Right */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-display font-black text-white leading-tight">
            "More Than Just a Mobile DJ Company"
          </h2>

          <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
            <p>
              Superior Sounds is the company you call when you want to make your event unique, fun, and memorable. With over 20 years of experience in the entertainment business, we are much more than just a mobile DJ company.
            </p>
            <p>
              Our goal is to provide professional and reliable service at a reasonable price. We will work hand-in-hand with you to design the perfect party or event and make it an enjoyable experience for you and your guests.
            </p>
            <p>
              While mobile DJing is a large part of our business, we also provide many other services, such as sound and light reinforcement for bands, DJs, and special events.
            </p>
            <p className="font-semibold text-white bg-slate-900/80 p-4 rounded-xl border-l-4 border-cyan-400">
              "From a casual coffee house acoustic performance, to an elegant wedding reception, to a college block party with a thousand students—no event is too big or too small for the team at Superior Sounds."
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
            <div>
              <span className="text-xs text-slate-400 uppercase tracking-wider block">Service Area</span>
              <span className="text-sm font-bold text-white">Hudson Valley & Surrounding Area</span>
            </div>
            <div>
              <span className="text-xs text-slate-400 uppercase tracking-wider block">Direct Phone</span>
              <a href="tel:8457905472" className="text-sm font-bold text-cyan-400 hover:underline">845.790.5472</a>
            </div>
          </div>
        </div>
      </div>

      {/* Core Principles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <div className="w-12 h-12 rounded-xl bg-cyan-950 flex items-center justify-center text-cyan-400 border border-cyan-800/60 mb-4">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-display font-bold text-white">Tour-Grade Reliability</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            We invest in premier industry brands: Pioneer Pro DJ, QSC KW loudspeakers, Chauvet intelligent lighting, and Shure/Sennheiser digital wireless mics. We bring on-site backups to every event.
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <div className="w-12 h-12 rounded-xl bg-cyan-950 flex items-center justify-center text-cyan-400 border border-cyan-800/60 mb-4">
            <Heart className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-display font-bold text-white">Zero Gimmicks, Pure Music</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            No cheesy line-dance routines, no pushy sales tactics. We read the room, curate sophisticated music, mix live seamlessly, and let the great vibes and dance floor speak for themselves.
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <div className="w-12 h-12 rounded-xl bg-cyan-950 flex items-center justify-center text-cyan-400 border border-cyan-800/60 mb-4">
            <Users className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-display font-bold text-white">Personalized Collaboration</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            We take the time to learn your vision, walk through your venue acoustics, and build a custom timeline so on the day of the event, you can relax and truly celebrate with your guests.
          </p>
        </div>
      </div>

      {/* Warehouse & Location Details */}
      <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            Headquarters & Warehouse
          </span>
          <h3 className="text-2xl font-display font-bold text-white">
            Poughkeepsie, New York
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Our central warehouse in Poughkeepsie allows us to quickly serve venues, estates, and events across Dutchess, Ulster, Columbia, Greene, Orange, and Putnam counties, as well as the Catskills and NYC metro.
          </p>
          <div className="space-y-2 text-xs text-slate-300">
            <p className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>91 College Ave, Poughkeepsie, NY 12603 (By Appointment Only)</span>
            </p>
            <p className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span>Visiting & Pickup Hours: All Days 11:00 AM – 7:00 PM</span>
            </p>
          </div>
        </div>

        <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-4 text-center">
          <h4 className="text-base font-bold text-white">Ready to Discuss Your Event?</h4>
          <p className="text-xs text-slate-400">
            Schedule a consultation or book equipment rentals directly online.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={() => setActivePage('contact')}
              className="px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs"
            >
              Contact Our Crew
            </button>
            <button
              onClick={() => setActivePage('rentals')}
              className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs"
            >
              Browse Gear Catalog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
