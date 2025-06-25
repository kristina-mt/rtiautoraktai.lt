# RTi Auto Locksmith – 24/7 UK Car Key Services

**Author**: Kristina Masiulytė Tomkienė  
**Project Name**: RTi Auto Locksmith  
**Project Type**: Multi-language service website

---

## 📄 Description

This responsive website promotes RTi Auto Locksmith's full-range UK-wide services, including:

- 🚗 Car key programming, duplication, and repairs
- 🔓 Emergency car lockout assistance
- 🔧 Ignition lock repair
- ⚙️ ECU remapping
- 🎓 Automotive training programs
- 🌍 Global postal service for repairs (send locks via mail)

---

## 🌟 Features

- 🌐 Multilingual interface: **English, Lithuanian, Russian, Polish**
- 📞 "Call Now" animated mobile button with SVG icon
- 📨 Contact form with **Netlify** integration
- 📬 Downloadable form for postal service
- 🚀 SEO optimized: `robots.txt`, `sitemap.xml`, `meta`, `hreflang`, JSON-LD
- 📱 Mobile-first responsive layout
- 🧭 Scroll-triggered animations with `IntersectionObserver`
- 🔼 Back-to-top floating button
- 🔗 Social media links (header + footer)

---

## 🛠 Technologies Used

- HTML5 + CSS3 + JavaScript
- Netlify (contact form processing)
- Font Awesome (icons)
- SVG animation (custom)
- Git + GitHub
- Visual Studio Code

---

## 📁 Project Structure

```
project-root/
│
├── index.html
├── styles.css
├── script.js
├── translations.js
├── robots.txt
├── sitemap.xml
├── README.md
│
├── en/
│   └── thanks.html
├── lt/
│   └── thanks.html
├── pl/
│   └── thanks.html
├── ru/
│   └── thanks.html
│
└── images/
    ├── logo.webp
    ├── flag-gb.svg, flag-lt.svg, ...
    └── icons (whatsapp-icon.png, etc.)
```

---

## 🧪 QA Testing Summary

### ✅ Manual Testing

- Netlify contact form validation (required fields, valid email)
- Language switching (texts + placeholders)
- Responsive display on mobile/tablet/desktop
- Navigation links and scroll anchors
- Social media icon behavior
- Call Now button animation and functionality
- SEO setup validation via:
  - Google Search Console
  - DuckDuckGo / Brave / Bing
  - `robots.txt` + `sitemap.xml` correctness

### 🤖 Cypress Automated Testing

- Navigation flow (multi-page, multi-language)
- Contact form submission (success & error)
- Language switching checks
- UI visibility and layout tests
- Edge cases (404 fallback, mobile menu behavior)
- GitHub Actions CI pipeline integration

---

## 📡 Deployment

Hosted on **Netlify**, accessible via:

```
https://www.rtiautolocksmith.co.uk/
```

---

## 👤 Author

**Kristina Masiulytė Tomkienė**  
Website owner and QA specialist

---

_This multilingual, responsive and SEO-optimized site serves drivers across the UK, offering quick help with keys, lockouts and ignition issues. Accessible in your preferred language – anytime, anywhere._
