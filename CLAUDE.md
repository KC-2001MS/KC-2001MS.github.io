# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` - Start Next.js dev server on http://localhost:3000
- **Build**: `npm run build` - Build the production application
- **Start**: `npm run start` - Start the production server
- **Lint**: `npm run lint` - Run ESLint to check code quality

## Architecture

This is a Next.js 15 portfolio website built with TypeScript and Tailwind CSS, featuring a bilingual setup (Japanese/English).

### Project Structure

- `src/app/(root)/` - Japanese version pages with grouped routing
- `src/app/en/` - English version pages
- `src/components/` - Reusable React components (Header, Footer, AppStoreLink, etc.)
- `src/lib/` - Utility functions and enums (Language enum)
- `public/styles/` - CSS files (referenced as `@styles/*` via path mapping)

### Key Features

- **Bilingual Support**: Dual language structure with Japanese as default and English alternate
- **SEO Optimized**: Comprehensive metadata, OpenGraph, and Twitter card configuration
- **Static Generation**: Uses Next.js App Router for static site generation
- **Content Management**: Markdown processing with gray-matter, remark, and rehype for blog/newsroom content
- **Analytics**: Google Analytics integration
- **Social Integration**: Twitter and Bluesky embed support

### Path Aliases

- `@/*` maps to `./src/*`
- `@styles/*` maps to `./public/styles/*`

### Content Structure

The site includes sections for:
- Product showcase with dynamic routing (`/product/[slug]`)
- Blog with dynamic routing (`/blog/[slug]`)
- Newsroom with dynamic routing (`/newsroom/[slug]`)
- Static pages (contact, privacy, agreement, 404)

### Styling

Uses Tailwind CSS with custom CSS variables for theming. Material Symbols font is loaded for icons.
- @content/ja/product.json でUncheck Xの項目でCMを追加しなさい。これは２つの要素を持つ配列でnameとurlが必要です。