# Serene Heights Lahore - Luxury Commercial & Hotel Apartments Web Application

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Lucide React](https://img.shields.io/badge/Lucide_React-F59E0B?style=for-the-badge&logo=feather&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

A modern, high-converting, ultra-luxury web clone of the [Serene Heights Lahore](https://www.sereneheightslahore.com/) commercial tower website built from scratch with React, Vite, Tailwind CSS, and Lucide React.

---

## 🌟 Core Features

- **🏛️ 21-Storey Architectural Overview**: Complete presentation of Lahore's premier commercial landmark on Gulberg Main Boulevard with LDA approval badges and structural metrics.
- **📊 Interactive 3-Year Payment Plan Calculator**: Dynamic slider and preset layout selector with real-time Pakistani Rupee (PKR) breakdowns for Down Payment (Booking), 36 Monthly Installments, and Possession amounts.
- **📐 3D Render vs. CAD Blueprint Visualizer**: Interactive toggle allowing investors to inspect photorealistic 3D elevations and technical high-contrast architectural floorplan schematics (with CAD spec PDF export).
- **✉️ Live Web3Forms Lead Dispatch**: Integrated lead capture form posting directly to Web3Forms API with client-side validation, error handling, loading spinners, and confirmation modals.
- **🎨 Official Luxury Brand Aesthetics**: Typography pairing `Cinzel` serif headers with `Montserrat` body copy, styled over deep obsidian (`#0B0C10`), card slate (`#131419`), and champagne gold accents (`#C5A880`).
- **📱 Fully Responsive Experience**: Glassmorphic sticky header with scroll transitions, mobile drawer navigation, lead-gated brochure download modal, and floating WhatsApp contact widget.
- **🔍 Full SEO & OpenGraph Optimization**: Preconfigured meta descriptions, keywords, OpenGraph sharing cards, Twitter cards, and semantic HTML structure.

---

## 🏗️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Google Fonts (`Cinzel` & `Montserrat`)
- **Lead API**: [Web3Forms](https://web3forms.com/)

---

## 📂 Project Structure

```text
├── public/
│   ├── _redirects              # SPA redirect rules for Netlify & Vercel
│   └── favicon.svg             # Brand favicon
├── src/
│   ├── components/
│   │   ├── Amenities.jsx       # 8 Luxury amenity highlight cards
│   │   ├── BrochureModal.jsx   # Interactive brochure download modal
│   │   ├── Developers.jsx      # Joint venture consortium credibility
│   │   ├── FloorTypes.jsx      # Tabbed floor zoning & blueprint visualizer
│   │   ├── Footer.jsx          # Corporate contact, FAQ accordion & WhatsApp CTA
│   │   ├── Hero.jsx            # High-impact architectural backdrop & primary CTAs
│   │   ├── InquiryForm.jsx     # Live lead capture form with Web3Forms dispatch
│   │   ├── Location.jsx        # Landmark proximity badges & dark Google Map
│   │   ├── Navbar.jsx          # Sticky glassmorphic navbar with mobile drawer
│   │   ├── Overview.jsx        # Stats ribbon & architectural narrative
│   │   └── PaymentPlan.jsx     # 3-Year installment calculator with PKR totals
│   ├── data/
│   │   └── siteData.js         # Centralized dataset for specs, pricing & text
│   ├── App.jsx                 # Master application layout and state
│   ├── index.css               # Theme definitions, gold gradients & glass utilities
│   └── main.jsx                # React DOM entrypoint
├── index.html                  # SEO, OpenGraph & Google Fonts head configuration
├── package.json                # Project dependencies & scripts
├── tailwind.config.js          # Custom gold & serene color palette extensions
└── vite.config.js              # Vite React configuration
```

---

## 🚀 Quick Start

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (version 18.0 or higher recommended)
- `npm` or `yarn`

### 2. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/your-username/serene-heights-lahore.git
cd serene-heights-lahore
npm install
```

### 3. Development Server
Start the local development server:
```bash
npm run dev
```
Open `http://localhost:5173/` in your browser.

### 4. Production Build
Compile the optimized production bundle:
```bash
npm run build
```
Preview the production build locally:
```bash
npm run preview
```

---

## 🌐 Production Deployment

### Deploy to Vercel
1. Push this repository to GitHub / GitLab.
2. Import the repository into [Vercel](https://vercel.com/).
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.
6. Click **Deploy**.

### Deploy to Netlify
1. Connect repository in [Netlify](https://www.netlify.com/).
2. Build Command: `npm run build`.
3. Publish Directory: `dist`.
4. The included `public/_redirects` file automatically handles single-page app routing.

---

## 📄 License
This project is licensed under the MIT License.
