# Sakthi Sabarish - Portfolio Website

A modern, responsive, and high-performance developer portfolio built with React, Vite, Framer Motion, and CSS Variables.

## 🚀 Features

- **Dynamic Theme System**: Dark & Light mode toggle persisted in `localStorage` with smooth color transitions.
- **Responsive Layout**: Designed for mobile, tablet, and desktop screens with custom breakpoints.
- **Interactive Skills Section**: Categorized filter tabs (All, Frontend, Backend, Tools) with animated skill level progress bars.
- **Specialized Services**: Showcase of development capabilities with feature checklists.
- **Featured Projects**: Filterable project gallery with live preview links, GitHub code repositories, and detail modals.
- **Contact Form**: Interactive form with live validation and success feedback toast.
- **SEO Optimized**: Pre-configured meta tags, semantic HTML5 structure, and `robots.txt`.

## 🛠️ Project Structure

```
src/
├── components/          # Reusable React UI components
│   ├── Navbar.jsx       # Glassmorphic navbar with active section detection
│   ├── Hero.jsx         # Main banner with profile picture & CTAs
│   ├── About.jsx        # Biography, statistics & education timeline
│   ├── Skills.jsx       # Skill cards & filter tabs
│   ├── Services.jsx     # Service cards showcase
│   ├── Projects.jsx     # Project gallery & preview modal
│   ├── Contact.jsx      # Contact section & form
│   ├── Footer.jsx       # Quick links & back-to-top button
│   ├── ThemeToggle.jsx  # Dark/Light mode button
│   ├── SkillCard.jsx    # Skill item card
│   ├── ServiceCard.jsx  # Service item card
│   ├── ContactForm.jsx  # Validated contact form
│   └── SocialIcons.jsx  # SVG social media icons
│
├── styles/              # Modular CSS design system
│   ├── variables.css    # CSS custom properties for theming
│   ├── global.css       # Resets, typography & utility classes
│   ├── dark-mode.css    # Dark mode color overrides
│   ├── light-mode.css   # Light mode color overrides
│   └── responsive.css   # Media queries
│
├── utils/               # Constants & helpers
│   ├── constants.js     # Developer profile dataset
│   ├── themeContext.jsx # Theme Context API provider
│   └── helpers.js       # Utility functions
│
├── hooks/               # Custom React hooks
│   ├── useTheme.js      # Custom theme hook
│   └── useScroll.js     # Scroll state & active section tracker
│
├── App.jsx              # Main App layout
└── index.jsx            # React root entry point
```

## ⚙️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Build for Production
```bash
npm run build
```
Optimized assets will be generated in the `dist/` directory ready for deployment on Vercel, Netlify, or GitHub Pages.
