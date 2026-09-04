import React, { useState } from 'react';
import { Calculator, DollarSign, ArrowRight, CheckCircle2, Sliders, Calendar, ShieldAlert } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function PaymentPlan({ onSelectPlanForInquiry }) {
  const [activePlanKey, setActivePlanKey] = useState('commercial');
  const currentPlan = siteData.paymentPlans[activePlanKey] || siteData.paymentPlans.commercial;
  const [sqft, setSqft] = useState(currentPlan.defaultSqFt);

  // Switch tab handler
  const handleTabChange = (key) => {
    setActivePlanKey(key);
    setSqft(siteData.paymentPlans[key].defaultSqFt);
  };

  // Calculations
  const totalPrice = sqft * currentPlan.ratePerSqFt;
  const downPayment = Math.round(totalPrice * (currentPlan.downPaymentPercent / 100));
  const totalInstallmentAmount = totalPrice * (currentPlan.monthlyPercent / 100);
  const monthlyInstallment = Math.round(totalInstallmentAmount / currentPlan.tenureMonths);
  const possessionPayment = Math.round(totalPrice * (currentPlan.possessionPercent / 100));

  // PKR Currency Formatter
  const formatPKR = (amount) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      maximumFractionDigits: 0
    }).format(amount).replace('PKR', 'PKR ');
  };

  // Millions / Crores helper
  const formatMillions = (amount) => {
    if (amount >= 10000000) {
      return `${(amount / 10000000).toFixed(2)} Crore`;
    }
    return `${(amount / 1000000).toFixed(2)} Million`;
  };

  const handleInquiryClick = () => {
    if (onSelectPlanForInquiry) {
      onSelectPlanForInquiry(currentPlan.category);
    } else {
      const el = document.getElementById('inquiry');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="payment-plan" className="py-24 bg-serene-dark border-t border-b border-serene-border relative overflow-hidden">
      
      {/* Background Accent Glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-500/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-semibold uppercase tracking-widest">
            <Calculator className="w-3.5 h-3.5" /> 3-Year Installment Calculator
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-widest uppercase">
            Flexible & Investor-Friendly <span className="gold-gradient-text italic font-normal">Payment Plans</span>
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base font-light">
            Calculate your estimated 36-month installment schedule with transparent down payments and easy quarterly milestones.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap items-center justify-center gap-3 p-2 bg-serene-card border border-serene-border rounded-2xl max-w-3xl mx-auto">
          {Object.entries(siteData.paymentPlans).map(([key, plan]) => {
            const isActive = activePlanKey === key;
            return (
              <button
                key={key}
                onClick={() => handleTabChange(key)}
                className={`flex-1 min-w-[200px] px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 uppercase tracking-wider ${
                  isActive
                    ? 'bg-gold-500 text-serene-dark shadow-lg shadow-gold-500/20 font-bold'
                    : 'text-zinc-400 hover:text-gold-300 hover:bg-serene-surface'
                }`}
              >
                <DollarSign className={`w-4 h-4 ${isActive ? 'text-serene-dark' : 'text-gold-400'}`} />
                <span>{plan.category.split(' ')[0]} {plan.category.split(' ')[1]}</span>
              </button>
            );
          })}
        </div>

        {/* Calculator Main Box */}
        <div className="bg-serene-card rounded-3xl border border-serene-border p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Sliders & Presets */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="space-y-1">
                <span className="text-xs uppercase font-bold tracking-widest text-gold-400">
                  {currentPlan.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white uppercase tracking-wider">
                  {currentPlan.category}
                </h3>
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <span>Base Rate:</span>
                  <span className="text-gold-300 font-semibold">{formatPKR(currentPlan.ratePerSqFt)} / Sq. Ft.</span>
                </div>
              </div>

              {/* Slider Control */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-zinc-300 uppercase tracking-wider flex items-center gap-2">
                    <Sliders className="w-3.5 h-3.5 text-gold-400" /> Unit Size (Sq. Ft.)
                  </label>
                  <span className="text-base sm:text-lg font-bold text-white font-mono bg-serene-dark px-3 py-1 rounded-lg border border-serene-border">
                    {sqft} <span className="text-xs text-zinc-400 font-sans">sq.ft</span>
                  </span>
                </div>

                <input
                  type="range"
                  min={currentPlan.minSqFt}
                  max={currentPlan.maxSqFt}
                  step={25}
                  value={sqft}
                  onChange={(e) => setSqft(Number(e.target.value))}
                  className="w-full h-2.5 bg-serene-dark rounded-lg appearance-none cursor-pointer accent-gold-500 border border-serene-border"
                />

                <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
                  <span>{currentPlan.minSqFt} Sq.Ft</span>
                  <span>{currentPlan.maxSqFt} Sq.Ft</span>
                </div>
              </div>

              {/* Preset Buttons */}
              <div className="space-y-2">
                <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-widest">
                  Quick Select Preset Layouts:
                </span>
                <div className="grid grid-cols-2 gap-2.5">
                  {currentPlan.presets.map((preset, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSqft(preset.sqft)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        sqft === preset.sqft
                          ? 'border-gold-500/60 bg-gold-500/10 text-white'
                          : 'border-serene-border bg-serene-dark hover:border-gold-500/30 text-zinc-300'
                      }`}
                    >
                      <div className="text-xs font-semibold">{preset.label}</div>
                      <div className="text-[11px] text-gold-400 font-mono mt-0.5">{preset.sqft} Sq. Ft.</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Installment Plan Breakdown Bar */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                  <span>Down Payment ({currentPlan.downPaymentPercent}%)</span>
                  <span>36 Months ({currentPlan.monthlyPercent}%)</span>
                  <span>Possession ({currentPlan.possessionPercent}%)</span>
                </div>
                <div className="w-full h-3 rounded-full bg-serene-dark overflow-hidden flex border border-serene-border">
                  <div style={{ width: `${currentPlan.downPaymentPercent}%` }} className="bg-gold-500 h-full" title="Down Payment" />
                  <div style={{ width: `${currentPlan.monthlyPercent}%` }} className="bg-amber-600 h-full" title="36 Months" />
                  <div style={{ width: `${currentPlan.possessionPercent}%` }} className="bg-zinc-600 h-full" title="Possession" />
                </div>
              </div>

            </div>

            {/* Right Column: Calculations & Summary Card */}
            <div className="lg:col-span-6 space-y-4">
              
              <div className="p-6 sm:p-8 rounded-2xl bg-serene-dark border border-gold-500/30 relative overflow-hidden shadow-xl space-y-6">
                
                {/* Total Value Ribbon */}
                <div className="pb-4 border-b border-serene-border flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Estimated Total Value</span>
                    <div className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-wider">
                      {formatPKR(totalPrice)}
                    </div>
                  </div>
                  <span className="px-3 py-1.5 rounded-xl bg-gold-500/15 border border-gold-500/30 text-gold-300 text-xs font-bold font-mono">
                    ~ {formatMillions(totalPrice)}
                  </span>
                </div>

                {/* Metrics Breakdown Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Down Payment */}
                  <div className="p-4 rounded-xl bg-serene-card border border-serene-border space-y-1">
                    <div className="flex items-center justify-between text-[11px] text-zinc-400 uppercase tracking-wider">
                      <span>Booking ({currentPlan.downPaymentPercent}%)</span>
                      <Calendar className="w-3.5 h-3.5 text-gold-400" />
                    </div>
                    <div className="text-lg font-bold text-gold-300 font-mono">
                      {formatPKR(downPayment)}
                    </div>
                    <div className="text-[10px] text-zinc-500">Upon 100% Confirmation</div>
                  </div>

                  {/* Monthly Installment */}
                  <div className="p-4 rounded-xl bg-serene-card border border-serene-border space-y-1">
                    <div className="flex items-center justify-between text-[11px] text-zinc-400 uppercase tracking-wider">
                      <span>Monthly (36 Months)</span>
                      <Calendar className="w-3.5 h-3.5 text-gold-400" />
                    </div>
                    <div className="text-lg font-bold text-white font-mono">
                      {formatPKR(monthlyInstallment)}
                    </div>
                    <div className="text-[10px] text-zinc-500">Per Month for 3 Years</div>
                  </div>

                  {/* Possession */}
                  <div className="p-4 rounded-xl bg-serene-card border border-serene-border space-y-1 sm:col-span-2">
                    <div className="flex items-center justify-between text-[11px] text-zinc-400 uppercase tracking-wider">
                      <span>Final Handover & Possession ({currentPlan.possessionPercent}%)</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <div className="text-lg font-bold text-white font-mono">
                      {formatPKR(possessionPayment)}
                    </div>
                    <div className="text-[10px] text-zinc-500">Due upon physical delivery of keys</div>
                  </div>

                </div>

                {/* CTA */}
                <div className="pt-2">
                  <button
                    onClick={handleInquiryClick}
                    className="w-full py-4 rounded-xl bg-gold-500 hover:bg-gold-400 text-serene-dark font-semibold tracking-wider uppercase text-xs transition-all shadow-xl shadow-gold-500/20 flex items-center justify-center gap-2 hover:scale-[1.01]"
                  >
                    <span>Request Official Schedule for this Unit</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center gap-2 text-[10px] text-zinc-500 justify-center">
                  <ShieldAlert className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  <span>Custom installment plans and balloon payment options available on request.</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
