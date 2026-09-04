import React from 'react';
import { 
  ShieldCheck, Zap, Car, Building2, Flame, 
  TrendingUp, Wifi, Coffee, Sparkles 
} from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Amenities() {
  const iconMap = {
    ShieldCheck,
    Zap,
    Car,
    Building2,
    Flame,
    TrendingUp,
    Wifi,
    Coffee
  };

  return (
    <section id="amenities" className="py-24 bg-serene-dark relative overflow-hidden">
      
      {/* Glow Orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gold-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> World-Class Amenities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-widest uppercase">
            Designed For Comfort, Security & <span className="gold-gradient-text italic font-normal">Excellence</span>
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base font-light">
            Every feature at Serene Heights Lahore is crafted to international luxury specifications to maximize tenant comfort and investor satisfaction.
          </p>
        </div>

        {/* Amenities Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData.amenities.map((item, idx) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={idx}
                className="bg-serene-card hover:bg-serene-surface transition-all duration-300 p-6 rounded-2xl border border-serene-border hover:border-gold-500/40 space-y-4 group relative overflow-hidden shadow-lg"
              >
                {/* Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-500 to-gold-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-400 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-serene-dark transition-colors shadow-md">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-serif font-bold text-white group-hover:text-gold-300 transition-colors uppercase tracking-wider">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
