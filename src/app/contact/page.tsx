'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Residential',
    location: '',
    budget: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#080e00] text-white pt-32 pb-24">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Contact Info & Philosophy */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#b65234] block mb-4 font-semibold">
                Initiate Consultation
              </span>
              <h1 className="font-serif-luxury text-4xl sm:text-6xl font-light text-white tracking-tight mb-6">
                Let’s craft your next masterpiece
              </h1>
              <p className="text-sm md:text-base text-white/70 font-light leading-relaxed mb-10">
                Whether you are designing a private Mediterranean villa, a flagship boutique, or a bespoke 60m superyacht, our Milan engineering studio is ready to discuss your architectural requirements.
              </p>

              {/* Atelier Locations */}
              <div className="space-y-6 pt-6 border-t border-white/10 text-xs font-mono">
                <div>
                  <span className="text-white/40 uppercase tracking-widest block mb-1">
                    Headquarters & Atelier
                  </span>
                  <div className="text-sm text-white font-sans-luxury">
                    Via Brera, 24 — 20121 Milano (MI), Italy
                  </div>
                </div>

                <div>
                  <span className="text-white/40 uppercase tracking-widest block mb-1">
                    Direct Contacts
                  </span>
                  <div className="text-sm text-white font-sans-luxury space-y-1">
                    <div>Email: <a href="mailto:info@for-living.it" className="text-[#b65234] hover:underline">info@for-living.it</a></div>
                    <div>Tel: +39 02 8414 7291</div>
                  </div>
                </div>

                <div>
                  <span className="text-white/40 uppercase tracking-widest block mb-1">
                    International Liaison
                  </span>
                  <div className="text-sm text-white/70 font-sans-luxury">
                    Milan • London • Cannes • Monaco
                  </div>
                </div>
              </div>
            </div>

            {/* Milan Map Card */}
            <div className="relative mt-12 rounded-xl overflow-hidden border border-white/10 aspect-[16/9] bg-[#161715]">
              <img
                src="/assets/milan-cathedral.avif"
                alt="Milan Studio location map"
                className="w-full h-full object-cover filter contrast-125 opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#b65234] animate-ping" />
                <span className="text-xs font-mono text-white tracking-wider">
                  Milan Design District (Brera)
                </span>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 bg-[#111111] rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <div className="w-16 h-16 rounded-full bg-[#b65234]/20 text-[#b65234] border border-[#b65234] mx-auto flex items-center justify-center text-2xl mb-6">
                  ✓
                </div>
                <h3 className="font-serif-luxury text-3xl text-white mb-3 font-light">
                  Dialogue Initiated
                </h3>
                <p className="text-sm text-white/70 max-w-md mx-auto leading-relaxed font-light mb-8">
                  Thank you for your interest in For Living. Our executive engineering team will review your project details and respond within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs uppercase tracking-[0.2em] px-6 py-2.5 rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition-colors"
                >
                  Send another inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-white/10 pb-4 mb-6">
                  <h3 className="font-serif-luxury text-2xl text-white font-light">
                    Project Consultation Form
                  </h3>
                  <p className="text-xs text-white/50 font-light mt-1">
                    Please provide an overview of your architectural commission.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-white/60 block mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Jean Nouvel"
                      className="w-full bg-[#181916] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#b65234] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-white/60 block mb-2">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="architect@studio.com"
                      className="w-full bg-[#181916] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#b65234] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-white/60 block mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+39 02 123 4567"
                      className="w-full bg-[#181916] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#b65234] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-white/60 block mb-2">
                      Living Environment *
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-[#181916] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#b65234] transition-colors"
                    >
                      <option value="Residential">Residential Living</option>
                      <option value="Commercial">Commercial Living</option>
                      <option value="Marine">Marine Living (Superyacht)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-white/60 block mb-2">
                      Project Location
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Cannes / Geneva / Milan"
                      className="w-full bg-[#181916] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#b65234] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-white/60 block mb-2">
                      Estimated Budget Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-[#181916] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#b65234] transition-colors"
                    >
                      <option value="">Select Range</option>
                      <option value="250k-500k">€250,000 – €500,000</option>
                      <option value="500k-1m">€500,000 – €1,000,000</option>
                      <option value="1m-3m">€1,000,000 – €3,000,000</option>
                      <option value="3m+">€3,000,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-white/60 block mb-2">
                    Scope Details & Architectural Requirements *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe the architectural scope, target handover date, and required materials..."
                    className="w-full bg-[#181916] border border-white/10 rounded-lg p-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#b65234] transition-colors"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-white text-black text-xs uppercase tracking-[0.22em] font-medium transition-all duration-300 hover:bg-[#b65234] hover:text-white shadow-xl"
                  >
                    Submit Project Inquiry
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
