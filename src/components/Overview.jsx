import React from 'react';
import { Building, ShieldCheck, MapPin, TrendingUp, Check } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Overview() {
  const statIcons = [Building, ShieldCheck, MapPin, TrendingUp];

  return (
    <section id="overview" className="relative py-24 bg-serene-dark border-t border-b border-serene-border overflow-hidden">
      
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-500/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold-600/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Stats Ribbon Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {siteData.stats.map((stat, idx) => {
            const Icon = statIcons[idx % statIcons.length];
            return (
              <div
                key={stat.label}
                className="bg-serene-card hover:bg-serene-surface transition-all duration-300 p-6 rounded-2xl border border-serene-border hover:border-gold-500/40 relative overflow-hidden group shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-400 group-hover:bg-gold-500 group-hover:text-serene-dark transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 group-hover:text-gold-300 transition-colors">
                    {stat.unit}
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-widest group-hover:text-gold-300 transition-colors uppercase">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-zinc-500 line-clamp-1">
                    {stat.detail}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Narrative & Feature Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Showcase Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-serene-border shadow-2xl group">
              <img
                src={siteData.hero.accentImage}
                alt="Serene Heights Architecture"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=85";
                }}
                className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-85 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-serene-dark via-serene-dark/40 to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-serene-card/90 rounded-2xl border border-serene-border backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gold-400">Architectural Standard</span>
                    <h4 className="text-lg font-serif font-bold text-white tracking-widest uppercase">Gulberg Landmark</h4>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-gold-500 text-serene-dark text-xs font-bold uppercase tracking-wider">
                    2026 Ready
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-semibold uppercase tracking-widest">
              Project Overview
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-widest leading-tight uppercase">
              {siteData.overview.title}
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
              {siteData.overview.description}
            </p>

            <div className="space-y-3 pt-2">
              {siteData.overview.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-gold-500/20 text-gold-400 mt-1 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-zinc-300 font-medium leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-6 border-t border-serene-border">
              <div>
                <div className="text-[11px] text-zinc-500 uppercase tracking-widest">Approval Authority</div>
                <div className="text-sm sm:text-base font-serif font-bold text-gold-400 uppercase tracking-wider">Lahore Development Authority</div>
              </div>
              <div className="h-8 w-[1px] bg-serene-border" />
              <div>
                <div className="text-[11px] text-zinc-500 uppercase tracking-widest">Zoning Type</div>
                <div className="text-sm sm:text-base font-serif font-bold text-white uppercase tracking-wider">Mixed-Use Commercial</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
