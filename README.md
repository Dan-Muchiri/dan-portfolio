# Dan Muchiri — Personal Portfolio

A Vite + React personal portfolio site for Dan Muchiri, Mechatronic Engineer.

## Getting Started

### Prerequisites
- Node.js 18+ installed

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder — ready to deploy to Netlify, Vercel, or GitHub Pages.

### Deploy to Netlify (quickest)
1. Run `npm run build`
2. Drag the `dist/` folder to [netlify.com/drop](https://app.netlify.com/drop)
3. Done — live URL in seconds.

### Deploy to GitHub Pages
```bash
# Add to vite.config.js: base: '/your-repo-name/'
npm run build
# Push dist/ to gh-pages branch
```

## Project Structure

```
src/
├── assets/
│   └── dan.jpg              # Profile photo
├── components/
│   ├── Nav.jsx / .module.css
│   ├── Hero.jsx / .module.css
│   ├── Mechatronics.jsx / .module.css
│   ├── Timeline.jsx / .module.css
│   ├── Skills.jsx / .module.css
│   └── Footer.jsx / .module.css
├── App.jsx                  # Root — all data lives here
├── main.jsx
└── index.css                # Global CSS variables & resets
```

## Customisation

- **Contact links** — update `href` values in `Hero.jsx`
- **LinkedIn / GitHub URLs** — update in `Hero.jsx` and `Footer.jsx`
- **Content** — all experience/education data is in `App.jsx`
- **Colours** — change `--maroon` and friends in `index.css`
- **Photo** — replace `src/assets/dan.jpg` with a new image
# dan-portfolio
