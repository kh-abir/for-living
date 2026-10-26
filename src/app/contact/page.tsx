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
    <div className="bg-[#12100e] text-white pt-28 pb-16">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left: Contact Info & Philosophy */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#bd7b58] block mb-3 font-semibold">
                Initiate Consultation
              </span>
              <h1 className="font-serif-luxury text-3xl sm:text-5xl font-light text-white tracking-tight mb-4">
                Let’s craft your next masterpiece
              </h1>
              <p className="text-xs md:text-sm text-white/70 font-light leading-relaxed mb-8">
                Whether you are developing a lakeside duplex in Gulshan, a boutique tea retreat in Sreemangal, or a coastal resort in Cox’s Bazar, our Dhaka atelier is ready to examine your architectural drawings.
              </p>

              {/* Atelier Locations */}
              <div className="space-y-4 pt-4 border-t border-white/10 text-xs font-mono">
                <div>
                  <span className="text-white/40 uppercase tracking-widest block mb-0.5">
                    Dhaka Atelier & Engineering Office
                  </span>
                  <div className="text-sm text-white font-sans-luxury">
                    House 14, Road 71, Gulshan 2, Dhaka 1212, Bangladesh
                  </div>
                </div>

                <div>
                  <span className="text-white/40 uppercase tracking-widest block mb-0.5">
                    Direct Communications
                  </span>
                  <div className="text-sm text-white font-sans-luxury space-y-0.5">
                    <div>
                      Email:{' '}
                      <a href="mailto:contact@prangonstudios.com" className="text-[#bd7b58] hover:underline">
                        contact@prangonstudios.com
                      </a>
                    </div>
                    <div>Phone: +880 2 988 4120 / +880 1711 500 200</div>
                  </div>
                </div>

                <div>
                  <span className="text-white/40 uppercase tracking-widest block mb-0.5">
                    Regional Studios
                  </span>
                  <div className="text-xs text-white/70 font-sans-luxury">
                    Dhaka (Gulshan) • Chittagong (Agrabad) • Sylhet (Shahjalal Uposhohor)
                  </div>
                </div>
              </div>
            </div>

            {/* Dhaka Map Card */}
            <div className="relative mt-8 rounded-xl overflow-hidden border border-white/10 aspect-[16/9] bg-[#2a241e]">
              <img
                src="/assets/milan-cathedral.avif"
                alt="Dhaka Studio location map"
                className="w-full h-full object-cover filter contrast-125 opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 z-10 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#bd7b58] animate-ping" />
                <span className="text-xs font-mono text-white tracking-wider">
                  PRANGON Atelier — Gulshan 2 Lakefront, Dhaka
                </span>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 bg-[#221d18] rounded-2xl p-6 md:p-10 border border-white/10 shadow-2xl">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-14 h-14 rounded-full bg-[#bd7b58]/20 text-[#bd7b58] border border-[#bd7b58] mx-auto flex items-center justify-center text-xl mb-4">
                  ✓
                </div>
                <h3 className="font-serif-luxury text-2xl text-white mb-2 font-light">
                  Consultation Initiated
                </h3>
                <p className="text-xs md:text-sm text-white/70 max-w-md mx-auto leading-relaxed font-light mb-6">
                  Thank you for reaching out to PRANGON Studios. Our principal architectural engineering team will review your inquiry and respond within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs uppercase tracking-[0.2em] px-5 py-2.5 rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition-colors cursor-pointer"
                >
                  Send another inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-white/10 pb-3 mb-4">
                  <h3 className="font-serif-luxury text-xl text-white font-light">
                    Commission Consultation Form
                  </h3>
                  <p className="text-xs text-white/50 font-light mt-0.5">
                    Please provide an overview of your architectural or interior project.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-white/60 block mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rafiq Azam"
                      className="w-full bg-[#181916] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#bd7b58] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-white/60 block mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="architect@studio.com"
                      className="w-full bg-[#181916] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#bd7b58] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-white/60 block mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+880 1711 000 000"
                      className="w-full bg-[#181916] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#bd7b58] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-white/60 block mb-1.5">
                      Living Environment *
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-[#181916] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#bd7b58] transition-colors"
                    >
                      <option value="Residential">Residential Living (Villa / Duplex)</option>
                      <option value="Commercial">Commercial Living (Lounge / Retail)</option>
                      <option value="Marine">Marine & Riverside (Yacht / Cruiser)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-white/60 block mb-1.5">
                      Project Location
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Gulshan / Sreemangal / Cox's Bazar"
                      className="w-full bg-[#181916] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#bd7b58] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-white/60 block mb-1.5">
                      Estimated Budget Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-[#181916] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#bd7b58] transition-colors"
                    >
                      <option value="">Select Range</option>
                      <option value="25lakh-50lakh">BDT 25 Lakh – 50 Lakh</option>
                      <option value="50lakh-1cr">BDT 50 Lakh – 1 Crore</option>
                      <option value="1cr-3cr">BDT 1 Crore – 3 Crore</option>
                      <option value="3cr+">BDT 3 Crore+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider text-white/60 block mb-1.5">
                    Architectural Scope & Required Craft Details *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe the site area, materials envisioned (teak, terracotta, brass), and target completion date..."
                    className="w-full bg-[#181916] border border-white/10 rounded-lg p-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#bd7b58] transition-colors"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-white text-black text-xs uppercase tracking-[0.22em] font-medium transition-all duration-300 hover:bg-[#bd7b58] hover:text-white shadow-xl cursor-pointer active:scale-[0.98]"
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
