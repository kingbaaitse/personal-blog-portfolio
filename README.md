# Personal Blog Portfolio

A modern, brutalist-design personal blog portfolio built with Next.js, React, TypeScript, and Tailwind CSS. My project showcases academic and professional development with a unique aesthetic approach.

## Features

### ✨ Core Pages

- **Home/About Me** - Personal introduction, academic background, and professional interests
- **CV/Resume** - Comprehensive curriculum vitae with education, experience, skills, and certifications
- **Blog** - Reflective posts including:
  - Learning Journey reflection
  - Group Work Experience analysis using Tuckman's model
- **Skills & Projects** - Showcase of technical abilities with 3 featured projects
- **Study Resources** - Curated study tips, techniques, and recommended tools

### 🎨 Design

- **Brutalist Aesthetic** - Bold, geometric design with strong visual hierarchy
- **Google Product Sans Font** - Modern, clean typography
- **Responsive Layout** - Mobile-first design that works on all devices
- **Modern UI** - TailwindCSS with custom brutalist components

## Tech Stack

- **Framework:** Next.js 14 (React 18)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Font:** Google Product Sans

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd personal-blog-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
personal-blog-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Home/About Me page
│   ├── globals.css         # Global styles
│   ├── cv/
│   │   └── page.tsx        # CV/Resume page
│   ├── blog/
│   │   ├── page.tsx        # Blog listing
│   │   ├── learning-journey/
│   │   │   └── page.tsx    # Learning reflection post
│   │   └── group-work-reflection/
│   │       └── page.tsx    # Group work reflection post
│   ├── skills/
│   │   └── page.tsx        # Skills and projects showcase
│   └── resources/
│       └── page.tsx        # Study tips and resources
├── components/
│   └── Navigation.tsx      # Navigation component
├── public/                 # Static assets
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project dependencies

```

## Customization

### Personalizing Content

1. **About Me Section** - `app/page.tsx`
2. **CV Details** - `app/cv/page.tsx`
3. **Blog Posts** - `app/blog/*/page.tsx`
4. **Skills** - `app/skills/page.tsx`
5. **Resources** - `app/resources/page.tsx`

### Styling

- Colours and design tokens are configured in `tailwind.config.js`
- Custom brutalist components are defined in `app/globals.css`

### Adding New Pages

You can also new page files in the `app/` directory following Next.js App Router conventions, just play around with it.

## Design Philosophy

This portfolio embraces a **brutalist design** approach:

- **Bold Typography** - Large, impactful text hierarchy
- **Sharp Borders** - Strong 4-8px black borders
- **Box Shadows** - Distinctive offset shadows for depth
- **Limited Color Palette** - Black, white, gray, and accent red
- **Geometric Shapes** - Clean, rectangular components
- **High Contrast** - Maximum readability and visual impact

## Deployment

This Next.js app can be easily deployed to:

- **Vercel** (which I highly recommend) - Zero-config deployment
- **Netlify** - Static site generation
- **GitHub Pages** - With static export
- **Any Node.js hosting** - VPS, DigitalOcean, etc.

### Deploy to Vercel

```bash
npx vercel
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal and educational use.

## Contact

Feel free to use this codebase and customize it to showcase your unique journey!

---

Built with ❤️ and that good Leatile effect using Next.js and modern web standards.
