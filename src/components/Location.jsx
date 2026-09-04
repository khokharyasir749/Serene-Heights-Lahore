import React from 'react';
import { MapPin, Navigation, Clock, ExternalLink } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Location() {
  return (
    <section id="location" className="py-24 bg-serene-dark border-t border-b border-serene-border relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Title Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-semibold uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5" /> Location & Accessibility
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-widest uppercase">
            {siteData.location.title}
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base font-light">
            {siteData.location.subtitle}
          </p>
        </div>

        {/* Map & Landmark Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Landmarks Grid Side */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-4 rounded-2xl bg-gold-500/10 border border-gold-500/30 mb-6 flex items-start gap-3">
              <Navigation className="w-5 h-5 text-gold-400 mt-1 shrink-0" />
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">Main Boulevard Frontage</h4>
                <p className="text-xs text-zinc-300">
                  {siteData.location.address}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {siteData.location.landmarks.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-serene-card hover:bg-serene-surface p-4 rounded-2xl border border-serene-border hover:border-gold-500/40 transition-all duration-300 space-y-2 group shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="p-2 rounded-lg bg-gold-500/10 border border-gold-500/20 text-gold-400 group-hover:bg-gold-500 group-hover:text-serene-dark transition-colors">
                      <Clock className="w-4 h-4" />
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-gold-500/20 text-gold-300 text-xs font-bold uppercase tracking-wider">
                      {item.distance}
                    </span>
                  </div>

                  <div>
                    <h5 className="text-xs sm:text-sm font-semibold text-white group-hover:text-gold-300 transition-colors uppercase tracking-wider">
                      {item.name}
                    </h5>
                    <span className="text-[11px] text-zinc-400">
                      {item.highlight}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 text-xs text-zinc-400 flex items-center justify-between">
              <span>* Estimated driving travel time under normal conditions</span>
              <a
                href="https://maps.google.com/?q=Main+Boulevard+Gulberg+Lahore"
                target="_blank"
                rel="noreferrer"
                className="text-gold-400 hover:text-gold-300 hover:underline flex items-center gap-1 font-semibold uppercase tracking-wider text-[11px]"
              >
                Open Google Maps <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Interactive Map Visual Side */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-serene-border shadow-2xl h-[450px] bg-serene-card group">
              <iframe
                title="Serene Heights Lahore Location Map"
                src={siteData.location.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.7) invert(0.9) contrast(1.2)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              
              {/* Map Floating Card */}
              <div className="absolute top-4 left-4 p-4 bg-serene-dark/90 rounded-xl border border-serene-border backdrop-blur-md max-w-xs space-y-1">
                <div className="text-[10px] font-bold uppercase tracking-widest text-gold-400">Project Address</div>
                <div className="text-xs text-white font-medium">Gulberg Main Blvd, Gulberg III, Lahore</div>
                <div className="text-[10px] text-zinc-400">Opposite CBD Lahore / Liberty Axis</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
