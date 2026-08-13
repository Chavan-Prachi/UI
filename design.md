# Design Specification: Climate Intelligence System (KJS-CES-01) Landing Page

## 1. Project Overview
**Project Name:** Climate Intelligence & Heatwave Early Warning System
**Target Audience:** State Disaster Management Authorities, Municipal Corporations, Agricultural Agencies, Public Health Departments, and Citizens.
**Vibe/Tone:** Authoritative, Scientific, Urgent, Clean, Data-Driven, and Trustworthy. It should feel like a modern government or enterprise SaaS dashboard.

## 2. Design System & UI/UX Guidelines

### Color Palette
The theme must visually represent temperature variations and technology.
* **Primary Background:** `#F8FAFC` (Very light slate/white for clean readability)
* **Primary Brand Color:** `#0F4C81` (Deep Ocean Blue - represents IMD data, trust, and technology)
* **Secondary Accent:** `#00A896` (Teal/Cyan - represents IoT sensors and AWS network)
* **Heat Alert Gradient (Crucial for UI elements):**
  * Normal/Safe: `#4CAF50` (Green)
  * Moderate Heat: `#FFD166` (Yellow)
  * Severe Heatwave: `#F77F00` (Orange)
  * Extreme Heatwave: `#D62828` (Crimson Red)
* **Text Colors:** `#1E293B` (Dark Slate for headings), `#475569` (Muted slate for body text).

### Typography
* **Headings:** 'Inter' or 'Poppins' (Bold, clean, modern sans-serif).
* **Body & Data:** 'Roboto' or 'Inter' (Highly legible for numbers and dashboard data).

### UI Style
* **Cards:** Use subtle drop shadows (`box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1)`) and rounded corners (`border-radius: 12px`).
* **Glassmorphism:** Light frosted glass effects on navbar and floating alert banners.
* **Layout:** Grid-based, spacious, prioritizing data visualization placeholders.

---

## 3. Landing Page Sections & Layout Structure

### Section 1: Navigation Bar (Sticky Top)
* **Left:** Logo placeholder (Icon of a globe with a thermometer/network nodes) + Text "ClimateIntel KJS".
* **Center Links:** Home, Live Dashboard, IoT Network, Advisories, API Docs.
* **Right:** "Login" (Ghost button) and "Access Command Center" (Solid Primary Blue button).

### Section 2: Hero Section
* **Layout:** Two-column layout.
* **Left Column (Text):**
  * **Pre-heading:** AI-Driven Meteorological Analytics
  * **Main Heading:** "Predict, Monitor, and Mitigate Heatwaves with AI Intelligence."
  * **Sub-text:** "Integrating IMD historical data with real-time IoT Automated Weather Stations (AWS) and LLM-powered advisory generation for proactive disaster management."
  * **Buttons:** 
    1. "View Live Heatmap" (Primary Blue)
    2. "Subscribe to SMS Alerts" (Outline Teal)
* **Right Column (Visual):** A stylized, abstract 3D or isometric illustration of a city map with glowing red/orange heat zones and small IoT sensor node icons.

### Section 3: Core Capabilities (3-Column Grid)
* **Card 1: AI Spatio-Temporal Forecasting.** Icon: Brain/Graph. Text: "Deep learning models analyzing historical IMD GRD files to predict region-wise maximum temperatures and hotspot evolution."
* **Card 2: IoT AWS Integration.** Icon: Sensor/Wifi. Text: "Real-time ground-truth validation using localized Automated Weather Stations to capture micro-climate heat stress."
* **Card 3: LLM-Generated Advisories.** Icon: Document/AI Sparkle. Text: "Automated translation of complex meteorological data into stakeholder-specific alerts for farmers, hospitals, and citizens."

### Section 4: Interactive Dashboard Preview (The "Wow" Factor)
* **Heading:** "Centralized Command & Control Dashboard"
* **UI Mockup Container:** A large, stylized browser window frame containing a mock dashboard UI.
* **Inside the Mock Dashboard:**
  * **Left Sidebar:** Navigation menu (Map, Analytics, Alerts, Settings).
  * **Main Area:** A large placeholder for a Map with 3 distinct glowing "Heat Hotspots" (Red, Orange, Yellow).
  * **Right Panel:** A "Live Alerts" feed. Show 3 mock alert cards:
    1. *Red Badge:* "Extreme Heatwave - Vidarbha Region"
    2. *Orange Badge:* "AWS Sensor Offline - Station 42"
    3. *Blue Badge:* "Advisory Generated for Agricultural Dept."

### Section 5: Impact & Stakeholders (Icon List)
* **Heading:** "Empowering Decision Makers Across Sectors"
* **Grid of 4 items:**
  1. **Disaster Management:** Resource allocation and cooling center deployment.
  2. **Agriculture:** Crop protection and irrigation scheduling advisories.
  3. **Public Health:** Heat-stroke preparedness for hospitals.
  4. **Citizens:** Daily SMS and App-based safety alerts.

### Section 6: Footer
* **Columns:** 
  1. About the Project (KJSIT / KJSSE Collaboration).
  2. Quick Links (IMD Data Portal, Research Papers).
  3. Contact & Support.
* **Bottom Bar:** Copyright © 2026 Climate Intelligence Project. | Privacy Policy | Terms of Service.

---

## 4. Technical Instructions for AI Generator
* Generate this strictly as a **single-page responsive landing page** using HTML/Tailwind CSS or React/Tailwind.
* Ensure the "Heat Alert Gradient" colors are actively used in the Dashboard Preview section to simulate real data.
* Use placeholder images from Unsplash (e.g., technology, maps, smart city) where visuals are needed.
* Do NOT generate internal dashboard pages; only generate this public-facing marketing/informational Landing Page.