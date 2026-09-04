import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle2, Phone, Mail, User } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function BrochureModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Commercial'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleDownload = () => {
    // Simulated PDF download trigger
    const element = document.createElement('a');
    const file = new Blob([
      `SERENE HEIGHTS LAHORE - OFFICIAL BROCHURE & PAYMENT PLAN\n\n` +
      `Project Location: Main Boulevard Gulberg III, Lahore\n` +
      `LDA Approved | 21-Storey Commercial & Serviced Tower\n\n` +
      `Contact Sales Team:\n` +
      `Phone: ${siteData.header.phoneMain} / ${siteData.header.phoneSecondary}\n` +
      `Email: ${siteData.header.email}\n` +
      `Website: https://www.sereneheightslahore.com/\n\n` +
      `Thank you for your interest! Our executive real estate advisor will get in touch shortly.`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "Serene_Heights_Lahore_Brochure.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-serene-dark/85 backdrop-blur-md transition-all duration-300">
      <div className="relative w-full max-w-xl bg-serene-card border border-serene-border rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Header Ribbon */}
        <div className="relative p-6 bg-serene-surface border-b border-serene-border flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-white tracking-wider uppercase">Official Project Brochure</h3>
              <p className="text-xs text-gold-400 font-medium tracking-wide">Serene Heights Lahore • Gulberg III</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-serene-card transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8">
          {isSuccess ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-serif font-bold text-white uppercase tracking-wider">Brochure Unlocked!</h4>
              <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto">
                Thank you for your interest. Click below to download the official floor plans, site map, and installment breakdown.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleDownload}
                  className="px-6 py-3.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-serene-dark font-semibold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-gold-500/20"
                >
                  <Download className="w-4 h-4" /> Download PDF Brochure
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-3.5 rounded-xl bg-serene-surface hover:bg-serene-dark text-white text-xs font-semibold uppercase tracking-wider transition-colors border border-serene-border"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-zinc-400 mb-2">
                Enter your details to download the complete 2026 investment portfolio, payment breakdown, and architectural floor layouts.
              </p>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3.5 w-4 h-4 text-zinc-500" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Malik Ahmad"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 bg-serene-dark border border-serene-border rounded-xl text-white text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                  WhatsApp / Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-zinc-500" />
                  <input
                    type="tel"
                    required
                    placeholder="+92 300 1234567"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 bg-serene-dark border border-serene-border rounded-xl text-white text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-zinc-500" />
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 bg-serene-dark border border-serene-border rounded-xl text-white text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                  Investment Interest
                </label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({...formData, interest: e.target.value})}
                  className="w-full px-4 py-3 bg-serene-dark border border-serene-border rounded-xl text-white text-sm focus:outline-none focus:border-gold-500"
                >
                  <option value="Commercial">Commercial Retail Shops</option>
                  <option value="Executive Suite">Executive Corporate Office</option>
                  <option value="Hotel Apartment">Hotel Serviced Apartment</option>
                  <option value="General">General Project Inquiry</option>
                </select>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-gold-500 hover:bg-gold-400 font-semibold text-serene-dark tracking-wider uppercase text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-gold-500/20 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-serene-dark border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Download className="w-4 h-4" /> Download Official Brochure
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
