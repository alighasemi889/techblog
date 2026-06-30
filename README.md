# TechBlog - Modern Technology Blog

A modern, responsive technology blog focused on Artificial Intelligence, Programming, and Cybersecurity. Built with React and Tailwind CSS.

## Features

- **Dark Theme**: Modern dark theme with blue/cyan accent colors
- **Responsive Design**: Fully responsive for mobile, tablet, and desktop
- **Hero Section**: Eye-catching hero with gradient background and stats
- **Featured Articles**: 9 article cards with categories, descriptions, and reading times
- **Categories**: Three category cards (AI, Programming, Cybersecurity) with icons
- **Newsletter**: Email subscription section
- **About Section**: Feature highlights and statistics
- **Footer**: Navigation links, social icons, and copyright

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/alighasemi889/techblog.git
cd techblog
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Header.tsx        # Fixed navbar with logo and navigation
│   ├── Hero.tsx          # Full-screen hero section
│   ├── FeaturedArticles.tsx  # Featured articles grid
│   ├── Categories.tsx    # Category cards section
│   ├── LatestArticles.tsx    # Latest articles grid
│   ├── Newsletter.tsx    # Newsletter subscription
│   ├── About.tsx         # About section
│   ├── Footer.tsx        # Footer with links
│   └── ArticleCard.tsx   # Reusable article card
├── data/
│   └── articles.ts       # Article data and types
├── App.tsx               # Main app component
├── index.css             # Global styles
└── main.tsx              # Entry point
```

## Author

**Ali Ghasemi**

## License

MIT License
