# Serene Heights Lahore — Luxury Real Estate Web Platform

[![React](https://img.shields.io/badge/React-18.x-blue?style=flat-square&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

A high-performance luxury real estate web application modeled after the 21-storey landmark **Serene Heights Lahore** on Gulberg Main Boulevard. Built with a bespoke design system featuring editorial serif typography, obsidian and champagne-gold color palettes, interactive financial calculation engines, and lead acquisition workflows.

---

## Key Features

- **Luxury Brand Aesthetics:** Custom design system built with Cinzel serif headings, Montserrat body typography, obsidian cards (`#131419`), and brushed champagne-gold accents (`#C5A880`).
- **Interactive 3-Year Payment Plan Calculator:** Real-time financial estimator supporting Commercial Retail, Corporate Offices, and Hotel Serviced Suites with custom square-footage sliders and PKR milestone breakdowns.
- **Architectural Blueprint & Render Visualizer:** Interactive switcher toggling between 3D photorealistic architectural perspectives and CAD structural blueprint schematics.
- **Lead Capture & Inquiry Dispatch:** Multi-field booking form with client-side input validation, country code helpers (+92), unit selection, and direct API submission handling.
- **Location & Connectivity Radar:** Interactive dark-mode map layout detailing proximity to CBD Lahore, Liberty Market, Kalma Chowk, and Allama Iqbal International Airport.
- **Joint Venture Consortium Showcase:** Detailed credentials for Fatir Developers, DM Consortium, and FALAH Developers.
- **Investor Suite Utilities:** Dedicated project brochure download modal, interactive FAQ accordion, and floating direct WhatsApp inquiry triggers.

---

## Tech Stack

- **Frontend:** React 18, Vite
- **Styling:** Tailwind CSS, PostCSS, Custom Design Tokens
- **Icons:** Lucide React
- **Typography:** Google Fonts (Cinzel, Montserrat)
- **Deployment & Routing:** Single-Page Application (SPA) configuration with redirect rules

---

## Project Structure

```text
serene-heights-lahore/
├── public/
│   └── _redirects              # SPA routing fallback for Netlify/Vercel
├── src/
│   ├── assets/                 # Brand assets and imagery
│   ├── components/
│   │   ├── Amenities.jsx       # 8-card luxury amenities grid
│   │   ├── BrochureModal.jsx   # Project brochure download modal
│   │   ├── Developers.jsx      # Consortium developer profiles
│   │   ├── FloorTypes.jsx      # Floor anatomy & CAD blueprint visualizer
│   │   ├── Footer.jsx          # Luxury footer, FAQ & contact information
│   │   ├── Hero.jsx            # High-impact video/image hero section
│   │   ├── InquiryForm.jsx     # Lead generation form with API dispatch
│   │   ├── Location.jsx        # Accessibility map & proximity badges
│   │   ├── Navbar.jsx          # Sticky glassmorphic navigation header
│   │   ├── Overview.jsx        # Key project metrics ribbon (21 floors, LDA)
│   │   └── PaymentPlan.jsx     # Dynamic 36-month installment calculator
│   ├── data/
│   │   └── siteData.js         # Centralized project specifications & data
│   ├── App.jsx                 # Application entry and layout orchestration
│   ├── index.css               # Design system rules & metallic gradients
│   └── main.jsx
├── index.html                  # SEO & Social Graph meta tags
├── tailwind.config.js          # Brand color tokens & font definitions
└── vite.config.js
