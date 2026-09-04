import React, { useState, useEffect } from 'react';
import { Building2, Phone, Download, Menu, X, ShieldCheck } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Navbar({ onOpenBrochure, onOpenInquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Overview', href: '#overview' },
    { label: 'Floor Anatomy', href: '#floor-types' },
    { label: 'Payment Plan', href: '#payment-plan' },
    { label: 'Location', href: '#location' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Developers', href: '#developers' },
    { label: 'Contact', href: '#inquiry' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'dark-glass-nav border-b border-serene-border py-3 shadow-2xl' 
        : 'bg-gradient-to-b from-serene-dark/95 via-serene-dark/50 to-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="p-2.5 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400 group-hover:bg-gold-500 group-hover:text-serene-dark transition-all duration-300 shadow-md">
            <Building2 className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-base sm:text-xl font-bold tracking-widest text-white group-hover:text-gold-300 transition-colors uppercase">
              SERENE HEIGHTS
            </span>
            <span className="text-[10px] uppercase font-semibold tracking-luxury text-gold-400 flex items-center gap-1.5">
              LAHORE <span className="inline-block w-1 h-1 rounded-full bg-gold-500" /> GULBERG III
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase font-medium tracking-widest text-zinc-300 hover:text-gold-300 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gold-500 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${siteData.header.phoneMain.replace(/-/g, '')}`}
            className="px-3.5 py-2 rounded-xl text-xs font-semibold text-zinc-300 hover:text-white border border-serene-border hover:border-gold-500/40 bg-serene-card/60 transition-all flex items-center gap-2"
          >
            <Phone className="w-3.5 h-3.5 text-gold-400" />
            <span className="hidden md:inline">{siteData.header.phoneMain}</span>
          </a>

          <button
            onClick={onOpenBrochure}
            className="px-4 py-2 rounded-xl bg-gold-500 hover:bg-gold-400 text-serene-dark font-semibold tracking-wider uppercase text-xs transition-all shadow-lg shadow-gold-500/20 flex items-center gap-2 hover:scale-[1.02]"
          >
            <Download className="w-3.5 h-3.5" />
            Brochure
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex xl:hidden items-center gap-2">
          <button
            onClick={onOpenBrochure}
            className="p-2 rounded-lg bg-gold-500 text-serene-dark font-bold"
            title="Download Brochure"
          >
            <Download className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-300 hover:text-white rounded-lg bg-serene-card border border-serene-border"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-serene-dark/98 border-b border-serene-border backdrop-blur-xl px-6 py-6 space-y-4 animate-in slide-in-from-top-5">
          <div className="flex items-center justify-between pb-3 border-b border-serene-border">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" /> LDA Approved Project
            </span>
            <span className="text-xs text-zinc-400">Gulberg Main Blvd</span>
          </div>

          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-zinc-200 hover:text-gold-300 py-1 transition-colors uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-serene-border space-y-2">
            <a
              href={`tel:${siteData.header.phoneMain.replace(/-/g, '')}`}
              className="w-full py-3 rounded-xl bg-serene-card border border-serene-border text-gold-300 font-semibold text-center flex items-center justify-center gap-2 text-xs uppercase tracking-wider"
            >
              <Phone className="w-4 h-4" /> Call {siteData.header.phoneMain}
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBrochure();
              }}
              className="w-full py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-serene-dark font-semibold tracking-wider uppercase text-xs text-center flex items-center justify-center gap-2 shadow-lg shadow-gold-500/20"
            >
              <Download className="w-4 h-4" /> Download Official Brochure
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
