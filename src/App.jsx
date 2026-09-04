import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Overview from './components/Overview';
import FloorTypes from './components/FloorTypes';
import PaymentPlan from './components/PaymentPlan';
import Location from './components/Location';
import Amenities from './components/Amenities';
import Developers from './components/Developers';
import InquiryForm from './components/InquiryForm';
import Footer from './components/Footer';
import BrochureModal from './components/BrochureModal';

export default function App() {
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [selectedUnitPref, setSelectedUnitPref] = useState('Commercial Retail Shop');

  const handleOpenInquiryWithUnit = (unitTitle) => {
    setSelectedUnitPref(unitTitle);
    const el = document.getElementById('inquiry');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-serene-dark text-zinc-300 font-sans antialiased selection:bg-gold-500 selection:text-serene-dark">
      
      {/* Navigation Bar */}
      <Navbar 
        onOpenBrochure={() => setIsBrochureOpen(true)}
        onOpenInquiry={() => handleOpenInquiryWithUnit('Commercial Retail Shop')}
      />

      {/* Main Content */}
      <main>
        <Hero 
          onOpenBrochure={() => setIsBrochureOpen(true)}
        />
        
        <Overview />
        
        <FloorTypes 
          onOpenInquiry={handleOpenInquiryWithUnit}
        />

        <PaymentPlan 
          onSelectPlanForInquiry={handleOpenInquiryWithUnit}
        />
        
        <Location />
        
        <Amenities />
        
        <Developers />
        
        <InquiryForm 
          initialUnitPreference={selectedUnitPref}
        />
      </main>

      {/* Footer & WhatsApp Widget */}
      <Footer 
        onOpenBrochure={() => setIsBrochureOpen(true)}
      />

      {/* Official Brochure Download Modal */}
      <BrochureModal 
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
      />

    </div>
  );
}
