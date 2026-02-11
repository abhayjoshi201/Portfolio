# Portfolio — Abhay Joshi

Personal portfolio website for a **Founding / Backend & Infrastructure Engineer**.

Dark-themed, DevOps-aesthetic site built with React — featuring terminal accents, a systems architecture pipeline, and a production philosophy section.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Styled Components](https://img.shields.io/badge/Styled_Components-5-DB7093?logo=styled-components&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- **Terminal-style hero** with typing animation and `profile.yml` code block
- **Experience timeline** — CloudKeeper, AfterQuery (YC-backed)
- **Project cards** — CodeRoom, Live Solve, Detector.ai
- **Systems Architecture** — visual pipeline from Clients → ML Inference
- **Grouped tech stack** — Backend, Infrastructure, Data, ML Systems
- **Achievement badges** — ICPC, LeetCode Knight, Amazon ML, FreeCAD
- **Production Philosophy** — engineering principles section
- **Dark theme** with dot-grid background, ambient glow orbs, JetBrains Mono font
- **Responsive** and performance-optimized

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build & Deploy

```bash
# Production build
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## 🗂 Project Structure

```
src/
├── App.js                        # Main app with section wiring
├── App.css                       # Global styles, animations, dot-grid
├── data/
│   └── constants.js              # All portfolio content
├── utils/
│   └── Themes.js                 # Dark theme tokens
└── components/
    ├── Navbar/                   # Fixed nav with mobile menu
    ├── HeroSection/              # Terminal block, typing animation, CTAs
    ├── About/                    # Summary paragraph
    ├── Experience/               # Timeline with role details
    ├── Projects/                 # Card grid
    ├── SystemsArchitecture/      # Infrastructure pipeline diagram
    ├── Skills/                   # Grouped tech stack cards
    ├── Cards/Achievements.js     # Achievement badges
    ├── Education/                # B.Tech details
    ├── Philosophy/               # Production engineering principles
    └── Footer/                   # Social links, status badge
```

## 🛠 Tech Stack

| Layer | Tech |
|-------|------|
| Framework | React 18 (CRA) |
| Styling | Styled Components |
| Fonts | Inter, JetBrains Mono |
| Icons | react-icons |
| Routing | react-router-dom |
| Deploy | GitHub Pages |

## 📝 Customization

All portfolio content lives in [`src/data/constants.js`](src/data/constants.js) — update your bio, experiences, projects, skills, and achievements there.

## 📄 License

MIT
