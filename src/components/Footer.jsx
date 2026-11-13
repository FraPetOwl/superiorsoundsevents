import React from 'react';
import { Phone, Mail, MapPin, Clock, Calendar, ExternalLink, ShieldCheck, Heart } from 'lucide-react';
import { YELP_URL } from '../data/testimonials';

export default function Footer({ setActivePage }) {
  const handleNav = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050811] text-slate-400 border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/images/logo-cyan.png"
                alt="Superior Sounds Logo"
                className="h-10 w-auto"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <span className="font-display font-black text-xl text-white">
                SUPERIOR<span className="text-cyan-400">SOUNDS</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Hudson Valley's trusted sound reinforcement, concert lighting, and mobile entertainment partner for over two decades. From intimate acoustic sessions to 1,000-guest college block parties.
            </p>
            <div className="pt-2 flex items-center space-x-2 text-xs text-cyan-400">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Fully Insured & Tour-Grade Reliable</span>
            </div>
          </div>

          {/* Col 2: Fast Navigation */}
          <div>
            <h4 className="text-white font-display font-semibold text-sm uppercase tracking-wider mb-4 border-l-2 border-cyan-400 pl-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-cyan-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('rentals')} className="hover:text-cyan-400 transition-colors text-cyan-300 font-medium">
                  Rentals & Gear Catalog (47 Items)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-cyan-400 transition-colors">
                  Production Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('gallery')} className="hover:text-cyan-400 transition-colors">
                  Media & Event Gallery
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-cyan-400 transition-colors">
                  About Our Crew
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('testimonials')} className="hover:text-cyan-400 transition-colors">
                  Client Reviews
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('affiliations')} className="hover:text-cyan-400 transition-colors">
                  Hudson Valley Affiliations
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-cyan-400 transition-colors">
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Service Areas */}
          <div>
            <h4 className="text-white font-display font-semibold text-sm uppercase tracking-wider mb-4 border-l-2 border-cyan-400 pl-3">
              Service Regions
            </h4>
            <p className="text-xs text-slate-400 mb-3">
              On-site delivery, setup, and sound engineering available throughout:
            </p>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li className="flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span>Poughkeepsie & Dutchess County</span>
              </li>
              <li className="flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span>Kingston, New Paltz & Ulster County</span>
              </li>
              <li className="flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span>Hudson & Columbia County</span>
              </li>
              <li className="flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span>Beacon, Newburgh & Orange County</span>
              </li>
              <li className="flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span>Catskills, Westchester & NYC Metro</span>
              </li>
              <li className="flex items-center space-x-1.5 text-slate-400 pt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                <span>International Affiliate: Berlin, Germany</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Warehouse & Contact */}
          <div className="space-y-3">
            <h4 className="text-white font-display font-semibold text-sm uppercase tracking-wider mb-4 border-l-2 border-cyan-400 pl-3">
              Warehouse & Contact
            </h4>
            <div className="flex items-start space-x-3 text-sm text-slate-300">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Superior Sounds</p>
                <p>91 College Ave</p>
                <p>Poughkeepsie, NY 12603</p>
                <p className="text-xs text-amber-400/90 font-medium mt-0.5">(By Appointment Only)</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-sm text-slate-300 pt-1">
              <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
              <div>
                <p className="text-xs">Visiting & Pickup Hours:</p>
                <p className="font-medium text-white text-xs">All Days: 11:00 AM – 7:00 PM</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-sm pt-1">
              <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
              <a href="tel:8457905472" className="text-cyan-400 font-bold hover:underline">
                845.790.5472
              </a>
            </div>

            <div className="flex items-center space-x-3 text-sm">
              <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
              <a href="mailto:info@superiorsoundsevents.com" className="text-slate-300 hover:text-cyan-400 truncate text-xs">
                info@superiorsoundsevents.com
              </a>
            </div>

            <div className="pt-2">
              <a
                href={YELP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 text-xs px-3 py-1.5 rounded-lg bg-red-950/40 text-red-400 border border-red-800/50 hover:bg-red-900/40 transition-colors"
              >
                <span>Check us out on Yelp ★★★★★</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800/80 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 space-y-4 md:space-y-0">
          <div>
            © {new Date().getFullYear()} Superior Sounds Events. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <button onClick={() => handleNav('contact')} className="hover:text-slate-400">
              Terms & Rental Agreement
            </button>
            <span className="text-slate-700">•</span>
            <button onClick={() => handleNav('contact')} className="hover:text-slate-400">
              Pickup Instructions
            </button>
            <span className="text-slate-700">•</span>
            <span className="text-slate-400">
              Redeveloped for Superior Sounds Events
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
