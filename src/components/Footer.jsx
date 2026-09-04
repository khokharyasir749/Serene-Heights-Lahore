import React, { useState } from 'react';
import { Building2, Phone, Mail, MapPin, MessageCircle, ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Footer({ onOpenBrochure }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <footer className="bg-serene-dark text-zinc-400 border-t border-serene-border relative">
      
      {/* FAQ Accordion Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-serene-border">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-400">Frequently Asked Questions</span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-widest uppercase">Everything You Need To Know</h3>
          </div>

          <div className="space-y-3">
            {siteData.faq.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-serene-card border border-serene-border overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider">{item.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-gold-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-zinc-500 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 text-xs text-zinc-300 border-t border-serene-border/60 pt-3 leading-relaxed">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold text-white tracking-widest uppercase">
                  SERENE HEIGHTS
                </span>
                <span className="text-[10px] uppercase font-semibold tracking-luxury text-gold-400">
                  LAHORE • GULBERG III
                </span>
              </div>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Serene Heights Lahore is an iconic 21-storey mixed-use commercial tower offering luxury retail shops, executive corporate offices, and hotel-serviced apartments on Main Boulevard Gulberg III.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" /> LDA Approved Commercial Project
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-white">Quick Links</h4>
            <ul className="space-y-2 text-xs uppercase tracking-wider">
              <li><a href="#hero" className="hover:text-gold-300 transition-colors">Home</a></li>
              <li><a href="#overview" className="hover:text-gold-300 transition-colors">Overview</a></li>
              <li><a href="#floor-types" className="hover:text-gold-300 transition-colors">Floor Types</a></li>
              <li><a href="#payment-plan" className="hover:text-gold-300 transition-colors">Payment Plan</a></li>
              <li><a href="#location" className="hover:text-gold-300 transition-colors">Location</a></li>
              <li><a href="#amenities" className="hover:text-gold-300 transition-colors">Amenities</a></li>
              <li><a href="#developers" className="hover:text-gold-300 transition-colors">Developers</a></li>
              <li><a href="#inquiry" className="hover:text-gold-300 transition-colors">Book Viewing</a></li>
            </ul>
          </div>

          {/* Project Options */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-white">Property Options</h4>
            <ul className="space-y-2 text-xs uppercase tracking-wider">
              <li className="text-zinc-300">Commercial Retail Shops</li>
              <li className="text-zinc-300">Executive Corporate Offices</li>
              <li className="text-zinc-300">Hotel Serviced Apartments</li>
              <li className="text-zinc-300">Penthouse & Rooftop Lounge</li>
            </ul>
            <div className="pt-2">
              <button
                onClick={onOpenBrochure}
                className="px-4 py-2 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-300 hover:bg-gold-500 hover:text-serene-dark text-xs font-semibold uppercase tracking-wider transition-all"
              >
                Download Payment Plan
              </button>
            </div>
          </div>

          {/* Corporate Contact Info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-white">Corporate Contact</h4>
            
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>{siteData.header.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`tel:${siteData.header.phoneMain.replace(/-/g, '')}`} className="hover:text-white transition-colors">
                  {siteData.header.phoneMain} / {siteData.header.phoneSecondary}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`mailto:${siteData.header.email}`} className="hover:text-white transition-colors">
                  {siteData.header.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-12 pt-8 border-t border-serene-border flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} Serene Heights Lahore. All Rights Reserved.</p>
          <p className="text-[11px] max-w-md text-center sm:text-right">
            Disclaimer: Architectural renders, floor dimensions, and specifications are subject to adjustments by developers as per regulatory LDA norms.
          </p>
        </div>
      </div>

      {/* Floating WhatsApp Action Button */}
      <a
        href={`https://wa.me/${siteData.header.whatsappNumber}?text=Hello!%20I%20am%20interested%20in%20Serene%20Heights%20Lahore.`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 p-3.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl shadow-emerald-500/30 flex items-center justify-center gap-2.5 group transition-all duration-300 hover:scale-110"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap text-xs font-bold uppercase tracking-wider pr-1">
          WhatsApp Sales
        </span>
      </a>

    </footer>
  );
}
