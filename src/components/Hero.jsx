import React from 'react';
import { ShieldCheck, Calendar, Phone, ArrowRight, ChevronDown, CheckCircle } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Hero({ onOpenBrochure }) {
  const scrollToInquiry = () => {
    const el = document.getElementById('inquiry');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-serene-dark">
      
      {/* Background Architectural Visual with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={siteData.hero.heroImage}
          alt="Serene Heights Lahore Architectural Tower"
          fetchpriority="high"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=85";
          }}
          className="w-full h-full object-cover object-center scale-105 filter brightness-70 contrast-110"
        />
        {/* Multi-layer Luxury Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-serene-dark via-serene-dark/80 to-serene-dark/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-serene-dark/95 via-serene-dark/65 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(11,12,16,0.65)_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Main Copy */}
          <div className="lg:col-span-8 space-y-8 text-left">
            
            {/* LDA Approved Floating Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/40 text-gold-300 bg-gold-500/10 tracking-widest backdrop-blur-md shadow-lg shadow-gold-500/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <ShieldCheck className="w-4 h-4 text-gold-400" />
              <span className="text-xs font-semibold uppercase">
                {siteData.hero.badge}
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-white tracking-widest leading-[1.15] uppercase">
                A New Standard of <br />
                <span className="gold-gradient-text italic font-normal">Urban Living</span> & Commerce
              </h1>
              <p className="text-sm sm:text-base text-zinc-300 max-w-2xl font-light leading-relaxed">
                {siteData.hero.subheadline}
              </p>
            </div>

            {/* Value Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="flex items-center gap-2.5 text-zinc-300 text-xs font-medium">
                <CheckCircle className="w-4 h-4 text-gold-400 shrink-0" />
                <span className="uppercase tracking-wider">21-Storey Elevation</span>
              </div>
              <div className="flex items-center gap-2.5 text-zinc-300 text-xs font-medium">
                <CheckCircle className="w-4 h-4 text-gold-400 shrink-0" />
                <span className="uppercase tracking-wider">100% Commercial Zone</span>
              </div>
              <div className="flex items-center gap-2.5 text-zinc-300 text-xs font-medium">
                <CheckCircle className="w-4 h-4 text-gold-400 shrink-0" />
                <span className="uppercase tracking-wider">Serviced Hotel Suites</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={scrollToInquiry}
                className="px-8 py-4 rounded-xl bg-gold-500 hover:bg-gold-400 text-serene-dark font-semibold tracking-wider uppercase text-xs transition-all shadow-xl shadow-gold-500/25 flex items-center gap-3 hover:scale-[1.02] group"
              >
                <Calendar className="w-4 h-4" />
                <span>{siteData.hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`tel:${siteData.header.phoneMain.replace(/-/g, '')}`}
                className="px-7 py-4 rounded-xl bg-serene-card/80 hover:bg-serene-surface text-white font-semibold text-xs tracking-wider uppercase transition-all border border-serene-border hover:border-gold-500/40 flex items-center gap-3"
              >
                <Phone className="w-4 h-4 text-gold-400" />
                <span>Call Sales: {siteData.header.phoneMain}</span>
              </a>
            </div>

          </div>

          {/* Right Column - Glass Key Highlights Card */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="bg-serene-card/85 p-7 rounded-2xl border border-serene-border relative overflow-hidden space-y-6 shadow-2xl backdrop-blur-md">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 blur-3xl rounded-full" />
              
              <div className="flex items-center justify-between pb-4 border-b border-serene-border">
                <span className="text-xs uppercase font-bold tracking-widest text-gold-400">Project Snapshot</span>
                <span className="px-2.5 py-1 rounded bg-gold-500/20 text-gold-300 text-[10px] font-semibold uppercase tracking-wider">2026 Phase</span>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-serene-dark/80 border border-serene-border flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-zinc-400 uppercase tracking-wider">Total Height</div>
                    <div className="text-xl font-bold text-white font-serif tracking-wide">21 Storeys</div>
                  </div>
                  <span className="text-xs font-semibold text-gold-300 bg-gold-500/10 border border-gold-500/20 px-2.5 py-1 rounded-lg uppercase tracking-wider">High-Rise</span>
                </div>

                <div className="p-4 rounded-xl bg-serene-dark/80 border border-serene-border flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-zinc-400 uppercase tracking-wider">Prime Location</div>
                    <div className="text-base font-bold text-white font-serif tracking-wide">Main Blvd Gulberg III</div>
                  </div>
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-lg uppercase tracking-wider">Approved</span>
                </div>

                <div className="p-4 rounded-xl bg-serene-dark/80 border border-serene-border flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-zinc-400 uppercase tracking-wider">Consortium</div>
                    <div className="text-sm font-bold text-zinc-200">Fatir / DM / FALAH</div>
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenBrochure}
                className="w-full py-3.5 rounded-xl bg-serene-surface hover:bg-serene-card text-gold-300 text-xs font-bold uppercase tracking-widest transition-colors border border-gold-500/30 flex items-center justify-center gap-2 shadow-sm"
              >
                Request Detailed Specs
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#overview"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-zinc-400 hover:text-gold-300 transition-colors flex flex-col items-center gap-1 text-[10px] uppercase tracking-widest animate-bounce"
      >
        <span>Explore Tower</span>
        <ChevronDown className="w-4 h-4" />
      </a>
    </section>
  );
}
