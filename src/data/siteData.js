export const siteData = {
  header: {
    brandName: "SERENE HEIGHTS",
    brandSubtitle: "LAHORE",
    ldaTag: "LDA APPROVED",
    phoneMain: "0304-1111106",
    phoneSecondary: "0321-4979446",
    whatsappNumber: "923041111106",
    email: "info@sereneheightslahore.com",
    address: "Gulberg Main Boulevard, Gulberg III, Lahore, Pakistan"
  },
  hero: {
    badge: "LDA Approved | Prime Gulberg Main Boulevard",
    headline: "A New Standard of Urban Living",
    subheadline: "Experience Lahore's premier 21-storey commercial tower featuring world-class retail outlets, executive corporate suites, and luxury hotel serviced apartments.",
    ctaPrimary: "Schedule a Private Viewing",
    ctaSecondary: "Call Sales Team",
    heroImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=85",
    accentImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85"
  },
  stats: [
    { label: "Total Floors", value: "21", unit: "Storeys", detail: "State-of-the-Art High Rise Tower" },
    { label: "Commercial Zone", value: "100%", unit: "Approved", detail: "LDA & Cantonment Clearance" },
    { label: "Location", value: "Gulberg", unit: "Main Blvd", detail: "Heart of Commercial Hub" },
    { label: "Investment ROI", value: "High", unit: "Capital Gain", detail: "Guaranteed Rental Yield" }
  ],
  overview: {
    title: "An Architectural Triumph on Main Boulevard",
    subtitle: "Designed to redefine commercial sophistication in Gulberg III, Lahore",
    description: "Serene Heights Lahore stands as a monument to modern architectural engineering and high-yield real estate investment. Strategically positioned on Gulberg Main Boulevard, the 21-storey masterpiece combines luxury retail shopping, modern corporate workplaces, and hotel-serviced residence suites into a seamless ecosystem.",
    highlights: [
      "Prime front-facing commercial elevation on Main Boulevard Gulberg III",
      "Multi-tier security infrastructure with 24/7 centralized monitoring",
      "High-capacity multi-level basement parking for 500+ vehicles",
      "Dedicated corporate elevators separate from residential & hotel traffic",
      "100% full-load standby generator backup for zero power interruptions"
    ]
  },
  floorTypes: [
    {
      id: "retail",
      title: "Commercial & Retail Outlets",
      subtitle: "Ground, Mezzanine & Lower Floors",
      description: "Designed for high footfall and maximum brand exposure. Double-height ceilings, glass frontages, and open-plan retail layouts ideal for international brands, fashion boutiques, and fine dining.",
      specs: [
        { label: "Ceiling Height", value: "18 Feet (Double Height)" },
        { label: "Frontage", value: "Frameless Glass Display" },
        { label: "Footfall", value: "Main Boulevard Facing" },
        { label: "Ideal For", value: "Boutiques, Cafes, Flagship Stores" }
      ],
      blueprintDetails: {
        floorCoverage: "8,500 Sq. Ft. per floor",
        ceilingClearance: "18.0 Ft Net Clearance",
        corridorWidth: "12 Ft Double-Loaded Corridor",
        elevatorAccess: "2 Dedicated Glass Capsule Lifts + Escalators",
        loadingBay: "Direct Underground Loading Dock Access"
      },
      image: "https://images.unsplash.com/photo-1567449303078-57ad995bd301?auto=format&fit=crop&w=1200&q=85",
      blueprintImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
      badge: "High Footfall Zone"
    },
    {
      id: "corporate",
      title: "Modern Co-Working & Executive Suites",
      subtitle: "Mid-Level Corporate Floors (4th to 12th)",
      description: "Flexible, ultra-modern corporate office spaces equipped with smart automation, fiber-optic connectivity, executive conference rooms, and high-speed dedicated lifts.",
      specs: [
        { label: "Elevators", value: "High-Speed Dedicated Lifts" },
        { label: "Connectivity", value: "Gigabit Fiber Backbone" },
        { label: "Security", value: "Biometric & Access Card Control" },
        { label: "Amenities", value: "Shared Lounges & Boardrooms" }
      ],
      blueprintDetails: {
        floorCoverage: "7,200 Sq. Ft. per floor",
        ceilingClearance: "11.5 Ft Finished Ceiling",
        corridorWidth: "8 Ft High-Traffic Hallway",
        elevatorAccess: "3 High-Speed Destination Dispatch Elevators",
        loadingBay: "Dedicated Service & Freight Lift"
      },
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85",
      blueprintImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
      badge: "Corporate Excellence"
    },
    {
      id: "serviced",
      title: "Hotel Serviced Apartments",
      subtitle: "Upper Luxury Residences (13th to 20th)",
      description: "Fully furnished 1 & 2-Bedroom hotel-serviced apartments engineered for high rental yields. Managed by a dedicated hospitality management team providing 24/7 housekeeping and room service.",
      specs: [
        { label: "Furnishing", value: "5-Star Italian Designer Interiors" },
        { label: "Services", value: "24/7 Housekeeping & Concierge" },
        { label: "Views", value: "Panoramic Lahore Skyline" },
        { label: "Yield Program", value: "Quarterly Rental Dividends" }
      ],
      blueprintDetails: {
        floorCoverage: "6,800 Sq. Ft. per floor",
        ceilingClearance: "10.5 Ft Designer Ceiling",
        corridorWidth: "7 Ft Carpeted Acoustic Corridor",
        elevatorAccess: "2 Private Resident Key-Card Access Lifts",
        loadingBay: "Central Garbage Chutes & Maid Stations"
      },
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=85",
      blueprintImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85",
      badge: "High Yield Investment"
    }
  ],
  paymentPlans: {
    commercial: {
      category: "Commercial Retail Outlets",
      subtitle: "Ground & Mezzanine Levels",
      ratePerSqFt: 48000,
      downPaymentPercent: 25,
      monthlyPercent: 60, // 36 months
      possessionPercent: 15,
      tenureMonths: 36,
      minSqFt: 250,
      maxSqFt: 2000,
      defaultSqFt: 450,
      presets: [
        { label: "Compact Kiosk / Boutique", sqft: 320 },
        { label: "Prime Ground Retail Shop", sqft: 550 },
        { label: "Corner Flagship Outlet", sqft: 950 },
        { label: "Anchor Commercial Brand Store", sqft: 1500 }
      ]
    },
    corporate: {
      category: "Corporate Executive Suites",
      subtitle: "Floors 4 through 12",
      ratePerSqFt: 32000,
      downPaymentPercent: 20,
      monthlyPercent: 60, // 36 months
      possessionPercent: 20,
      tenureMonths: 36,
      minSqFt: 350,
      maxSqFt: 3500,
      defaultSqFt: 650,
      presets: [
        { label: "Executive Private Pod", sqft: 400 },
        { label: "Corporate Office Suite", sqft: 750 },
        { label: "Dual Department Suite", sqft: 1250 },
        { label: "Full Wing Corporate Floor", sqft: 2500 }
      ]
    },
    hotel: {
      category: "Hotel Serviced Apartments",
      subtitle: "Floors 13 through 20",
      ratePerSqFt: 38000,
      downPaymentPercent: 20,
      monthlyPercent: 65, // 36 months
      possessionPercent: 15,
      tenureMonths: 36,
      minSqFt: 450,
      maxSqFt: 2000,
      defaultSqFt: 650,
      presets: [
        { label: "Luxury Studio Suite", sqft: 520 },
        { label: "1-Bedroom Executive Suite", sqft: 850 },
        { label: "2-Bedroom Grand Suite", sqft: 1350 },
        { label: "Skyline Penthouse Residence", sqft: 1850 }
      ]
    }
  },
  amenities: [
    {
      icon: "ShieldCheck",
      title: "24/7 Monitored Security",
      description: "Smart CCTV surveillance, RFID vehicle entry points, and trained security personnel around the clock."
    },
    {
      icon: "Zap",
      title: "100% Uninterrupted Power",
      description: "Heavy-duty dual diesel generators guaranteeing zero power downtime for all shops, offices, and apartments."
    },
    {
      icon: "Car",
      title: "Multi-Level Underground Parking",
      description: "Ample multi-level basement parking equipped with automated guidance systems and valet service."
    },
    {
      icon: "Building2",
      title: "Intelligent High-Speed Lifts",
      description: "Ultra-fast passenger lifts and dedicated cargo elevators with minimal waiting times."
    },
    {
      icon: "Flame",
      title: "Smart Fire Fighting System",
      description: "Automated smoke detectors, sprinkler networks, emergency fire escape stairwells, and pressure hydrants."
    },
    {
      icon: "TrendingUp",
      title: "High-Yield Rental Management",
      description: "Hassle-free hands-off property management yielding lucrative quarterly rental returns for investors."
    },
    {
      icon: "Wifi",
      title: "High-Speed Smart Infrastructure",
      description: "Integrated fiber-optic networks, centralized building control, and high-speed Wi-Fi zones."
    },
    {
      icon: "Coffee",
      title: "Rooftop Executive Lounge",
      description: "Sky-high dining venue with breathtaking panoramic views across Gulberg and the Lahore skyline."
    }
  ],
  location: {
    title: "The Most Coveted Address in Lahore",
    subtitle: "Situated directly on Main Boulevard Gulberg III — the pulse of Lahore's commerce and luxury lifestyle.",
    address: "Gulberg Main Boulevard, Opposite CBD Lahore / Liberty Axis, Lahore, Pakistan",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13611.838381831885!2d74.3418!3d31.5152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045a16c143d7%3A0x2f3922d14878a87b!2sMain%20Blvd%20Gulberg%2C%20Lahore!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk",
    landmarks: [
      { name: "CBD Lahore (Central Business District)", distance: "2 Mins", highlight: "Direct Access" },
      { name: "Liberty Market & MM Alam Road", distance: "3 Mins", highlight: "Shopping & Dining" },
      { name: "Kalma Chowk Flyover & Underpass", distance: "4 Mins", highlight: "Key Arterial Connection" },
      { name: "Gaddafi Stadium Sports Complex", distance: "5 Mins", highlight: "Entertainment Hub" },
      { name: "Lahore Ring Road Interchange", distance: "10 Mins", highlight: "Expressway Access" },
      { name: "Allama Iqbal International Airport", distance: "18 Mins", highlight: "Smooth Commute" }
    ]
  },
  developers: {
    title: "A Prestigious Joint Venture",
    subtitle: "Backed by industry leaders with a track record of iconic real estate developments.",
    partners: [
      {
        name: "Fatir Developers",
        role: "Lead Structural & Architectural Developers",
        desc: "Renowned for delivering high-rise commercial structures and luxury residential complexes with uncompromising engineering standards.",
        tag: "Engineering Excellence"
      },
      {
        name: "DM Consortium",
        role: "Financial & Strategic Development Partner",
        desc: "A premier investment and real estate development group driving large-scale urban infrastructure projects in Pakistan.",
        tag: "Strategic Investment"
      },
      {
        name: "FALAH Developers",
        role: "Master Project Coordinators",
        desc: "Pioneers in high-end commercial property execution, committed to timely completion and world-class asset management.",
        tag: "Turnkey Execution"
      }
    ]
  },
  faq: [
    {
      q: "Is Serene Heights Lahore approved by LDA?",
      a: "Yes, Serene Heights Lahore is fully approved by the Lahore Development Authority (LDA) with all commercial clearances in place."
    },
    {
      q: "What types of properties are available for purchase?",
      a: "The project offers Commercial Retail Outlets (Ground & Mezzanine), Executive Corporate Office Suites, and Luxury Hotel Serviced Apartments."
    },
    {
      q: "Is there an installment payment plan?",
      a: "Yes, flexible multi-year quarterly and monthly installment plans over 36 months are available with low booking down payments."
    },
    {
      q: "How does the Hotel Serviced Apartment rental yield work?",
      a: "Serviced apartments are placed into a professional hotel rental pool managed by expert hospitality managers, providing investors with passive quarterly revenue."
    }
  ]
};
