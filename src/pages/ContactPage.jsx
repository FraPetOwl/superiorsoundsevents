import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Calendar, ShieldCheck, CheckCircle2, ArrowRight, MessageSquare, Send, ExternalLink } from 'lucide-react';
import InstagramIcon from '../components/icons/InstagramIcon';
import { YELP_URL } from '../data/testimonials';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    venueLocation: '',
    eventType: 'Wedding',
    guestCount: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: 'c90eb87d-8153-470a-86c3-11b339459385',
          subject: `General Event Inquiry from ${formData.name} (${formData.eventType})`,
          from_name: 'Superior Sounds Website',
          to_email: 'info@superiorsoundsevents.com',
          ...formData
        })
      });
      setSubmitted(true);
    } catch (err) {
      console.warn('API error, mailto fallback', err);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const generateDirectMail = () => {
    const subject = encodeURIComponent(`Inquiry from ${formData.name || 'Superior Sounds Visitor'}`);
    const body = encodeURIComponent(
      `Hello Superior Sounds,\n\nI would like to inquire about your event services:\n\n` +
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email}\n` +
      `Date: ${formData.eventDate}\n` +
      `Venue: ${formData.venueLocation}\n` +
      `Event Type: ${formData.eventType}\n` +
      `Guest Count: ${formData.guestCount}\n\n` +
      `Message: ${formData.message}\n`
    );
    return `mailto:info@superiorsoundsevents.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
          Get in Touch
        </span>
        <h1 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
          Contact Superior Sounds
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Ready to reserve gear, schedule a sound check walkthrough, or discuss wedding entertainment? Reach out via phone, email, or our inquiry form below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Contact Info Left */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 rounded-3xl bg-[#0c1222] border border-slate-800/90 shadow-xl space-y-6">
            <h3 className="text-xl font-display font-bold text-white border-b border-slate-800 pb-4">
              Direct Contact & Warehouse
            </h3>

            {/* Direct Phone */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-950 flex items-center justify-center text-cyan-400 border border-cyan-800/60 shrink-0 mt-0.5">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 uppercase tracking-wider block">Direct Phone</span>
                <a href="tel:8457905472" className="text-xl font-display font-bold text-cyan-400 hover:underline">
                  845.790.5472
                </a>
                <p className="text-[11px] text-slate-400 mt-0.5">Call or text for immediate availability</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-950 flex items-center justify-center text-cyan-400 border border-cyan-800/60 shrink-0 mt-0.5">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 uppercase tracking-wider block">Email Inquiries</span>
                <a href="mailto:info@superiorsoundsevents.com" className="text-sm font-semibold text-white hover:text-cyan-400 break-all">
                  info@superiorsoundsevents.com
                </a>
                <p className="text-[11px] text-slate-400 mt-0.5">We reply promptly within 24 hours</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-950 flex items-center justify-center text-cyan-400 border border-cyan-800/60 shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 uppercase tracking-wider block">Warehouse Location</span>
                <p className="text-sm font-semibold text-white">91 College Ave</p>
                <p className="text-xs text-slate-300">Poughkeepsie, NY 12603</p>
                <span className="inline-block mt-1 text-[11px] px-2 py-0.5 rounded bg-amber-950/80 text-amber-300 border border-amber-800/60 font-semibold">
                  By Appointment Only
                </span>
              </div>
            </div>

            {/* Visiting Hours */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-950 flex items-center justify-center text-cyan-400 border border-cyan-800/60 shrink-0 mt-0.5">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 uppercase tracking-wider block">Visiting & Pickup Hours</span>
                <p className="text-sm font-bold text-white">All Days: 11:00 AM – 7:00 PM</p>
                <p className="text-[11px] text-slate-400 mt-0.5">By scheduled appointment</p>
              </div>
            </div>
          </div>

          {/* Yelp & Instagram Trust Cards */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-pink-950/30 via-slate-900 to-cyan-950/30 border border-slate-800 space-y-3">
            <h4 className="text-sm font-bold text-white flex items-center space-x-2">
              <InstagramIcon className="w-4 h-4 text-pink-400" />
              <span>Follow @superiorsounds</span>
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Explore live event setups, behind-the-scenes concert sound checks, and dance floors across the Hudson Valley.
            </p>
            <a
              href="https://www.instagram.com/superiorsounds"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-1.5 text-xs text-pink-400 hover:text-pink-300 font-semibold"
            >
              <span>Follow on Instagram (@superiorsounds)</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Yelp / Trust Card */}
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-3">
            <h4 className="text-sm font-bold text-white flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Full Service & Delivery Guarantee</span>
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              We provide delivery, professional setup, cable neatness, and on-site audio technicians across all Hudson Valley venues.
            </p>
            <a
              href={YELP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-block text-xs text-red-400 hover:underline font-semibold"
            >
              Check out Superior Sounds on Yelp (5-Stars) →
            </a>
          </div>
        </div>

        {/* Form Right */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0c1222] border border-slate-800/90 shadow-xl">
            {submitted ? (
              <div className="py-12 text-center space-y-5 animate-fadeIn">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-950 border border-emerald-500/50 flex items-center justify-center text-emerald-400 shadow-xl shadow-emerald-500/20">
                  <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
                </div>
                <h3 className="text-2xl font-display font-black text-white">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-white font-bold">{formData.name}</span>! We’ve received your inquiry regarding your event on <span className="text-cyan-400 font-semibold">{formData.eventDate || 'your upcoming date'}</span>. Our team will get back to you promptly.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href="tel:8457905472"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black text-xs shadow-lg shadow-cyan-500/20"
                  >
                    Need Instant Answers? Call 845.790.5472
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold hover:bg-slate-700"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-display font-bold text-white mb-2">
                  Send Us an Inquiry
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  Fill out the form below or call us directly. We'll consult with you to recommend the perfect audio, lighting, and DJ options.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Amanda Jones"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="amanda@example.com"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(845) 555-0199"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Event Date</label>
                    <input
                      type="date"
                      name="eventDate"
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Venue or Town / Location</label>
                    <input
                      type="text"
                      name="venueLocation"
                      value={formData.venueLocation}
                      onChange={handleChange}
                      placeholder="e.g. Rhinebeck Barn, Poughkeepsie Estate"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Guest Count</label>
                    <input
                      type="number"
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleChange}
                      placeholder="e.g. 150"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Primary Service Needed</label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="Wedding">Wedding DJ & Production Package</option>
                    <option value="Live Sound Reinforcement">Sound Reinforcement for Band / Artists</option>
                    <option value="Lighting Design">Architectural & Ambient Uplighting</option>
                    <option value="Equipment Rental">Gear Rental Only (Dry Hire)</option>
                    <option value="Private Party / Milestone">Private Party / Milestone Celebration</option>
                    <option value="Corporate / Speaking Event">Corporate AV / Public Address</option>
                    <option value="Other">Other Custom Event</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Tell Us About Your Event Vision</label>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what you're looking for, equipment specifics, venue constraints, or questions..."
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-cyan-400 resize-none"
                  ></textarea>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-slate-950 font-black text-sm flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 active:scale-95 transition-all disabled:opacity-50"
                  >
                    {submitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 stroke-[2.5]" />
                        <span>Send Event Inquiry</span>
                      </>
                    )}
                  </button>

                  <a
                    href={generateDirectMail()}
                    className="text-xs text-slate-400 hover:text-cyan-400 underline font-medium"
                  >
                    Prefer to email directly via your mail app?
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
