# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Ondřej Gajdušek's personal website built with Gatsby and React. It's a single-page website featuring a personal introduction with social media links and a parallax animation effect.

## Architecture

- **Framework**: Gatsby (React-based static site generator)
- **Language**: TypeScript (`.tsx` files)
- **Styling**: SCSS with custom styles in `src/styles/styles.scss`
- **Components**: Simple React functional components with TypeScript
- **Pages**: Page components in `src/pages/` directory
- **Images**: Static assets in `src/images/` and `static/`
- **Icons**: FontAwesome icons for social media links

### Key Files Structure

- `src/pages/index.tsx`: Main homepage component with social links
- `src/components/layout.tsx`: Layout wrapper with parallax mouse effect
- `src/components/seo.tsx`: SEO metadata component
- `gatsby-config.js`: Gatsby configuration with plugins
- `src/styles/styles.scss`: Main stylesheet

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run develop
# or
npm start
# or
gatsby develop

# Build for production
npm run build
# or
gatsby build

# Serve production build locally
npm run serve

# Clean Gatsby cache and public folder
npm run clean

# Format code with Prettier
npm run format

# Check code formatting
npm run lint
```

## Code Style

- **Prettier configuration**: No semicolons (semi: false), avoid arrow function parentheses
- **TypeScript**: Functional components with proper typing
- **React patterns**: Uses React hooks (useEffect for event listeners)
- **FontAwesome**: Icons imported individually to optimize bundle size

## Key Features

- **Parallax Effect**: Mouse movement creates parallax background animation in layout component
- **Social Media Integration**: Direct links to GitHub, GitLab, LinkedIn, Twitter, Instagram, email
- **SEO Optimization**: Proper meta tags and structured data
- **Responsive Design**: Mobile-friendly layout
- **Static Assets**: Favicon, GPG key, and other static files served from `static/`

## Development Guidelines

- **Commit Management**: Always squash functional blocks together before merging PRs to maintain clean git history
- **Code Formatting**: Run `npm run format` before committing to ensure Prettier compliance

## Notes

- No testing framework currently configured (test script shows placeholder)
- Uses Google Analytics for tracking
- Custom domain configured via CNAME
- GPG public key available at `/ogajduse.asc`
