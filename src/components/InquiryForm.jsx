import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, User, Mail, Phone, MessageSquare, Building2, Shield, Calendar, AlertCircle } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function InquiryForm({ initialUnitPreference = 'Commercial Retail Shop' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    unitPreference: initialUnitPreference,
    budget: '10M - 25M PKR',
    message: ''
  });

  useEffect(() => {
    if (initialUnitPreference) {
      setFormData(prev => ({ ...prev, unitPreference: initialUnitPreference }));
    }
  }, [initialUnitPreference]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedModal, setSubmittedModal] = useState(false);
  const [lastSubmittedLead, setLastSubmittedLead] = useState(null);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone / WhatsApp number is required';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      errs.phone = 'Please enter a valid 11-digit phone number';
    }
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setServerError(null);
    setIsSubmitting(true);

    const accessKey = "YOUR_ACCESS_KEY_HERE";
    const payload = {
      access_key: accessKey,
      subject: `New Inquiry for Serene Heights Lahore - ${formData.unitPreference}`,
      from_name: "Serene Heights Lahore Portal",
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      unit_type: formData.unitPreference,
      estimated_budget: formData.budget,
      message: formData.message || 'No additional notes provided.'
    };

    try {
      if (accessKey === "YOUR_ACCESS_KEY_HERE") {
        // Simulated network delay when developer key is not yet replaced
        await new Promise(resolve => setTimeout(resolve, 1000));
        setLastSubmittedLead({
          name: formData.name,
          phone: formData.phone,
          unitPreference: formData.unitPreference
        });
        setIsSubmitting(false);
        setSubmittedModal(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          unitPreference: 'Commercial Retail Shop',
          budget: '10M - 25M PKR',
          message: ''
        });
        return;
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (result.success) {
        setLastSubmittedLead({
          name: formData.name,
          phone: formData.phone,
          unitPreference: formData.unitPreference
        });
        setIsSubmitting(false);
        setSubmittedModal(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          unitPreference: 'Commercial Retail Shop',
          budget: '10M - 25M PKR',
          message: ''
        });
      } else {
        setServerError(result.message || "Failed to submit inquiry. Please try calling directly.");
        setIsSubmitting(false);
      }
    } catch (err) {
      setServerError("Network error. Please check your internet connection or call our sales hotline directly.");
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setSubmittedModal(false);
  };

  return (
    <section id="inquiry" className="py-24 bg-serene-dark relative overflow-hidden">
      
      {/* Background Orbs */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copy & Direct Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-semibold uppercase tracking-widest">
                <Calendar className="w-3.5 h-3.5" /> Book Private Viewing
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-widest leading-tight uppercase">
                Secure Your Spot at <span className="gold-gradient-text italic font-normal">Serene Heights</span>
              </h2>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
                Fill out the inquiry form to receive exclusive pricing schedules, site visit appointments, and customized installment quotes directly from our sales office.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-2xl bg-serene-card border border-serene-border flex items-center gap-4 shadow-md">
                <div className="p-3 rounded-xl bg-gold-500/10 text-gold-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-400 uppercase tracking-widest">Sales Hotline</div>
                  <div className="text-sm sm:text-base font-serif font-bold text-white tracking-wider">
                    {siteData.header.phoneMain} / {siteData.header.phoneSecondary}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-serene-card border border-serene-border flex items-center gap-4 shadow-md">
                <div className="p-3 rounded-xl bg-gold-500/10 text-gold-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-400 uppercase tracking-widest">Official Email</div>
                  <div className="text-xs sm:text-sm font-semibold text-white">
                    {siteData.header.email}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-serene-card border border-serene-border flex items-center gap-4 shadow-md">
                <div className="p-3 rounded-xl bg-gold-500/10 text-gold-400">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-400 uppercase tracking-widest">Site Office Address</div>
                  <div className="text-xs text-zinc-300 font-medium">
                    {siteData.header.address}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="bg-serene-card p-6 sm:p-10 rounded-3xl border border-serene-border shadow-2xl relative">
              
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-serene-border">
                <div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-white uppercase tracking-wider">Official Sales Inquiry</h3>
                  <p className="text-xs text-zinc-400">Directly connected to project sales desk</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5">
                  <Shield className="w-3 h-3" /> Priority Response
                </span>
              </div>

              {serverError && (
                <div className="mb-5 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2.5">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{serverError}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-3.5 w-4 h-4 text-zinc-500" />
                      <input
                        type="text"
                        placeholder="e.g. Chaudhry Usman"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className={`w-full pl-10 pr-4 py-3 bg-serene-dark border ${
                          errors.name ? 'border-red-500' : 'border-serene-border'
                        } rounded-xl text-white text-sm focus:outline-none focus:border-gold-500 transition-colors`}
                      />
                    </div>
                    {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-zinc-500" />
                      <input
                        type="tel"
                        placeholder="+92 304 1111106"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className={`w-full pl-10 pr-4 py-3 bg-serene-dark border ${
                          errors.phone ? 'border-red-500' : 'border-serene-border'
                        } rounded-xl text-white text-sm focus:outline-none focus:border-gold-500 transition-colors`}
                      />
                    </div>
                    {errors.phone ? (
                      <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>
                    ) : (
                      <p className="text-[10px] text-zinc-500 mt-1">Format: +92 3XX XXXXXXX</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-zinc-500" />
                      <input
                        type="email"
                        placeholder="usman@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className={`w-full pl-10 pr-4 py-3 bg-serene-dark border ${
                          errors.email ? 'border-red-500' : 'border-serene-border'
                        } rounded-xl text-white text-sm focus:outline-none focus:border-gold-500 transition-colors`}
                      />
                    </div>
                    {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                  </div>

                  {/* Unit Preference */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Unit Preference
                    </label>
                    <select
                      value={formData.unitPreference}
                      onChange={(e) => setFormData({...formData, unitPreference: e.target.value})}
                      className="w-full px-4 py-3 bg-serene-dark border border-serene-border rounded-xl text-white text-sm focus:outline-none focus:border-gold-500 transition-colors"
                    >
                      <option value="Commercial Retail Shop">Commercial Retail Shop (Ground/Mezzanine)</option>
                      <option value="Corporate Executive Suite">Corporate Executive Suite (Office Floors)</option>
                      <option value="Hotel Serviced Apartment">Hotel Serviced Apartment (1 & 2 Bed)</option>
                      <option value="Penthouse Suite">Penthouse Suite</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Message / Special Requirements
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-zinc-500" />
                    <textarea
                      rows="3"
                      placeholder="Specify preferred floor, size in sq. ft., or installment plan questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 bg-serene-dark border border-serene-border rounded-xl text-white text-sm focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Submit CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gold-500 hover:bg-gold-400 font-semibold text-serene-dark tracking-wider uppercase text-xs transition-all shadow-xl shadow-gold-500/20 flex items-center justify-center gap-2 hover:scale-[1.01] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-serene-dark border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Submit Private Viewing Inquiry
                      </>
                    )}
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>
      </div>

      {/* Submission Success Modal */}
      {submittedModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-serene-dark/85 backdrop-blur-md">
          <div className="bg-serene-card border border-serene-border p-8 rounded-3xl max-w-md w-full text-center space-y-5 shadow-2xl">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-serif font-bold text-white uppercase tracking-wider">Inquiry Submitted!</h3>
              <p className="text-xs text-zinc-400">
                Thank you <span className="text-gold-300 font-semibold">{lastSubmittedLead?.name}</span>. Preference: <span className="text-white font-medium">{lastSubmittedLead?.unitPreference}</span>.
              </p>
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed bg-serene-dark p-4 rounded-2xl border border-serene-border">
              Our Senior Property Advisor will contact you on <span className="text-gold-300 font-semibold">{lastSubmittedLead?.phone}</span> within 2 hours to confirm your private site viewing and provide the official payment schedule.
            </p>

            <button
              onClick={closeModal}
              className="w-full py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-serene-dark font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              Done & Return
            </button>
          </div>
        </div>
      )}

    </section>
  );
}
