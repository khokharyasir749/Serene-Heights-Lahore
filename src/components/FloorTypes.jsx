import React, { useState } from 'react';
import { ShoppingBag, Briefcase, Hotel, ArrowRight, CheckCircle2, Layers, Compass, Image as ImageIcon, Download } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function FloorTypes({ onOpenInquiry }) {
  const [activeTab, setActiveTab] = useState(siteData.floorTypes[0].id);
  const [viewMode, setViewMode] = useState('render'); // 'render' | 'blueprint'

  const tabIcons = {
    retail: ShoppingBag,
    corporate: Briefcase,
    serviced: Hotel
  };

  const currentFloor = siteData.floorTypes.find(f => f.id === activeTab) || siteData.floorTypes[0];

  const handleDownloadFloorplan = () => {
    const element = document.createElement('a');
    const file = new Blob([
      `SERENE HEIGHTS LAHORE - TECHNICAL ARCHITECTURAL BLUEPRINT\n\n` +
      `Category: ${currentFloor.title} (${currentFloor.subtitle})\n` +
      `Zoning: 100% Commercial High-Rise Clearance\n\n` +
      `TECHNICAL SPECIFICATIONS:\n` +
      `- Floor Coverage: ${currentFloor.blueprintDetails?.floorCoverage || 'Standard High-Rise Span'}\n` +
      `- Ceiling Clearance: ${currentFloor.blueprintDetails?.ceilingClearance || 'Standard Ceiling'}\n` +
      `- Corridor Width: ${currentFloor.blueprintDetails?.corridorWidth || '8 Ft Commercial Corridor'}\n` +
      `- Lift Access: ${currentFloor.blueprintDetails?.elevatorAccess || 'High-Speed Intelligent Elevators'}\n` +
      `- Service Access: ${currentFloor.blueprintDetails?.loadingBay || 'Dedicated Service Core'}\n\n` +
      `Project Location: Main Boulevard Gulberg III, Lahore\n` +
      `Official Developer Hotline: ${siteData.header.phoneMain}`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `Serene_Heights_${currentFloor.id.toUpperCase()}_Blueprint.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section id="floor-types" className="py-24 bg-serene-dark relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Title Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-semibold uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5" /> Project Categories & Floor Anatomy
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-widest uppercase">
            Tailored For Commerce, Corporate & <span className="gold-gradient-text italic font-normal">Luxury Living</span>
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base font-light">
            Explore the multi-tiered floor zoning of Serene Heights Lahore, offering world-class spaces engineered for high footfall, business growth, and rental yield.
          </p>
        </div>

        {/* Tab Selection Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3 p-2 bg-serene-card border border-serene-border rounded-2xl max-w-3xl mx-auto">
          {siteData.floorTypes.map((type) => {
            const Icon = tabIcons[type.id] || Layers;
            const isActive = activeTab === type.id;
            return (
              <button
                key={type.id}
                onClick={() => {
                  setActiveTab(type.id);
                  setViewMode('render');
                }}
                className={`flex-1 min-w-[200px] px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2.5 uppercase tracking-wider ${
                  isActive
                    ? 'bg-gold-500 text-serene-dark shadow-lg shadow-gold-500/20 font-bold'
                    : 'text-zinc-400 hover:text-gold-300 hover:bg-serene-surface'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-serene-dark' : 'text-gold-400'}`} />
                <span>{type.title.split(' ')[0]} {type.title.split(' ')[1]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Floor Type Card Showcase */}
        <div className="bg-serene-card rounded-3xl border border-serene-border p-6 lg:p-10 relative overflow-hidden transition-all duration-500 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Visual Side with Render vs Blueprint Switcher */}
            <div className="lg:col-span-6 space-y-4">
              
              {/* View Switcher Controls */}
              <div className="flex items-center justify-between bg-serene-dark p-1.5 rounded-xl border border-serene-border">
                <button
                  onClick={() => setViewMode('render')}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                    viewMode === 'render'
                      ? 'bg-gold-500 text-serene-dark shadow-md font-bold'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5" /> 3D Architectural Render
                </button>
                <button
                  onClick={() => setViewMode('blueprint')}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                    viewMode === 'blueprint'
                      ? 'bg-gold-500 text-serene-dark shadow-md font-bold'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <Compass className="w-3.5 h-3.5" /> Blueprint Schematic
                </button>
              </div>

              {/* Visual Display Container */}
              <div className="relative rounded-2xl overflow-hidden border border-serene-border shadow-2xl group min-h-[380px] sm:min-h-[440px] flex items-center justify-center bg-serene-dark">
                {viewMode === 'render' ? (
                  <>
                    <img
                      src={currentFloor.image}
                      alt={currentFloor.title}
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80";
                      }}
                      className="w-full h-[380px] sm:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-serene-dark/80 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-serene-dark/90 backdrop-blur-md border border-gold-500/40 text-gold-300 text-xs font-bold uppercase tracking-widest">
                      {currentFloor.badge}
                    </div>
                  </>
                ) : (
                  /* High Contrast Architectural Blueprint View */
                  <div className="w-full h-[380px] sm:h-[440px] p-6 bg-gradient-to-br from-[#0c1626] to-[#070d18] flex flex-col justify-between relative border border-cyan-500/20">
                    
                    {/* Grid Lines Overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a5f15_1px,transparent_1px),linear-gradient(to_bottom,#1e3a5f15_1px,transparent_1px)] bg-[size:24px_24px]" />

                    {/* Blueprint Header */}
                    <div className="relative z-10 flex items-center justify-between border-b border-cyan-500/30 pb-3">
                      <div className="flex items-center gap-2 text-cyan-400">
                        <Compass className="w-5 h-5 animate-spin-slow" />
                        <div>
                          <div className="text-xs font-bold tracking-widest uppercase font-mono">Schematic Layout // {currentFloor.id.toUpperCase()}</div>
                          <div className="text-[10px] text-cyan-300/70">Ref: SHL-ARCH-2026-F{currentFloor.id === 'retail' ? '01-03' : currentFloor.id === 'corporate' ? '04-12' : '13-20'}</div>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-mono text-[10px] uppercase">
                        Scale 1:100
                      </span>
                    </div>

                    {/* Blueprint Specifications Grid */}
                    <div className="relative z-10 grid grid-cols-1 gap-2.5 py-2">
                      <div className="p-2.5 rounded-lg bg-cyan-950/40 border border-cyan-500/20 text-xs font-mono text-cyan-200 flex justify-between">
                        <span className="text-cyan-400/80">Floor Coverage:</span>
                        <span className="font-semibold">{currentFloor.blueprintDetails?.floorCoverage}</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-cyan-950/40 border border-cyan-500/20 text-xs font-mono text-cyan-200 flex justify-between">
                        <span className="text-cyan-400/80">Ceiling Clearance:</span>
                        <span className="font-semibold">{currentFloor.blueprintDetails?.ceilingClearance}</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-cyan-950/40 border border-cyan-500/20 text-xs font-mono text-cyan-200 flex justify-between">
                        <span className="text-cyan-400/80">Elevator Core:</span>
                        <span className="font-semibold">{currentFloor.blueprintDetails?.elevatorAccess}</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-cyan-950/40 border border-cyan-500/20 text-xs font-mono text-cyan-200 flex justify-between">
                        <span className="text-cyan-400/80">Hallway Specs:</span>
                        <span className="font-semibold">{currentFloor.blueprintDetails?.corridorWidth}</span>
                      </div>
                    </div>

                    {/* Blueprint Footer */}
                    <div className="relative z-10 flex items-center justify-between border-t border-cyan-500/30 pt-3">
                      <span className="text-[10px] font-mono text-cyan-400/80">LDA Compliant Structural Grid</span>
                      <button
                        onClick={handleDownloadFloorplan}
                        className="px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-400/40 text-[11px] font-mono flex items-center gap-1.5 transition-colors"
                      >
                        <Download className="w-3 h-3" /> Export CAD Spec
                      </button>
                    </div>

                  </div>
                )}

                {/* Subtitle Bar */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-serene-dark/90 backdrop-blur-md border border-serene-border text-zinc-300 text-xs">
                  <span className="font-bold text-gold-400 block mb-0.5 uppercase tracking-wider">Zoning:</span>
                  {currentFloor.subtitle}
                </div>
              </div>

            </div>

            {/* Spec Details & Inquiry Side */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="space-y-2">
                <span className="text-xs uppercase font-bold tracking-widest text-gold-400">
                  {currentFloor.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-widest uppercase">
                  {currentFloor.title}
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed font-light">
                  {currentFloor.description}
                </p>
              </div>

              {/* Specifications Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-3">
                {currentFloor.specs.map((spec, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-serene-dark border border-serene-border flex flex-col justify-center space-y-1"
                  >
                    <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest">
                      {spec.label}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 border-t border-serene-border">
                <button
                  onClick={() => onOpenInquiry(currentFloor.title)}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-serene-dark font-semibold tracking-wider uppercase text-xs transition-all shadow-lg shadow-gold-500/20 flex items-center justify-center gap-2 group"
                >
                  <span>Inquire About {currentFloor.title.split(' ')[0]}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={handleDownloadFloorplan}
                  className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-serene-surface hover:bg-serene-dark text-gold-300 border border-gold-500/30 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-3.5 h-3.5" /> Download Blueprint (PDF)
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
