import React from 'react';
import { Award, CheckCircle2, ShieldCheck, Building } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Developers() {
  return (
    <section id="developers" className="py-24 bg-serene-dark border-t border-b border-serene-border relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Title */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-semibold uppercase tracking-widest">
            <Award className="w-3.5 h-3.5" /> Joint Venture Consortium
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-widest uppercase">
            {siteData.developers.title}
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base font-light">
            {siteData.developers.subtitle}
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteData.developers.partners.map((partner, idx) => (
            <div
              key={idx}
              className="bg-serene-card hover:bg-serene-surface p-8 rounded-3xl border border-serene-border hover:border-gold-500/40 transition-all duration-300 space-y-6 relative overflow-hidden flex flex-col justify-between group shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-400 group-hover:bg-gold-500 group-hover:text-serene-dark transition-colors">
                    <Building className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-serene-dark border border-serene-border text-gold-300 text-[10px] font-bold uppercase tracking-widest">
                    {partner.tag}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white group-hover:text-gold-300 transition-colors uppercase tracking-wider">
                    {partner.name}
                  </h3>
                  <p className="text-xs font-semibold text-gold-400 uppercase tracking-widest">
                    {partner.role}
                  </p>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  {partner.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-serene-border flex items-center gap-2 text-xs text-zinc-400 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Verified Track Record & Compliance</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="bg-serene-card p-6 sm:p-8 rounded-3xl border border-serene-border flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-serif font-bold text-white uppercase tracking-wider">Legal Approval & Clear Titles</h4>
              <p className="text-xs text-zinc-400 max-w-xl">
                Serene Heights Lahore possesses complete NOC clearances from LDA and municipal authorities, offering full title transfer security for all commercial shops and serviced apartments.
              </p>
            </div>
          </div>
          <a
            href={`tel:${siteData.header.phoneMain.replace(/-/g, '')}`}
            className="px-6 py-3 rounded-xl bg-serene-surface hover:bg-serene-dark text-gold-300 border border-gold-500/30 text-xs font-bold uppercase tracking-widest transition-colors shrink-0"
          >
            Verify Title Documents
          </a>
        </div>

      </div>
    </section>
  );
}
