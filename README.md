# My Muse | A Love Story 💕

A soft & dreamy portfolio website dedicated to celebrating love and beautiful moments. Built with modern web technologies and crafted with care.

## ✨ Features

- **Beautiful UI/UX**: Soft, dreamy color palette with smooth animations
- **Responsive Design**: Fully responsive across all devices
- **Performance Optimized**: Built with Next.js 16 and React 19
- **SEO Friendly**: Complete SEO metadata and optimization
- **Security Headers**: Comprehensive security configuration
- **MDX Support**: Write content with Markdown and React components
- **Smooth Animations**: Powered by Motion (formerly Framer Motion)
- **Type Safe**: Full TypeScript support

## 🎨 Sections

- **Hero Section**: Beautiful introduction with animated elements
- **Gallery**: Photo showcase with romantic quotes
- **About**: Personal card with traits and information
- **Relationship Roadmap**: Timeline of special moments
- **Traits Showcase**: Interactive display of loved qualities
- **Wishlist & Promises**: Shared dreams and goals
- **License Page**: Copyright and license information

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Motion](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Components**: [Radix UI](https://www.radix-ui.com/)
- **Content**: [MDX](https://mdxjs.com/)
- **Type Safety**: [TypeScript](https://www.typescriptlang.org/)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/xirothedev/athw-portfolio.git
cd athw-portfolio
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
# or
yarn install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your base URL:
```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

4. Generate favicons (optional):
```bash
pnpm run generate-favicons
```

5. Run the development server:
```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## 🛠️ Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm generate-favicons` - Generate favicon files from `public/image.png`

## 📁 Project Structure

```
athw-portfolio/
├── public/                 # Static assets
│   ├── gallary/           # Gallery images
│   └── image.png          # Source image for favicons
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── license/       # License page (MDX)
│   │   ├── layout.tsx     # Root layout
│   │   ├── page.tsx       # Home page
│   │   ├── globals.css    # Global styles
│   │   ├── robots.ts      # Robots.txt
│   │   └── sitemap.ts     # Sitemap
│   └── components/        # React components
│       ├── footer.tsx
│       ├── hero-section.tsx
│       ├── navigation.tsx
│       └── ...
├── scripts/               # Utility scripts
│   └── generate-favicons.js
├── mdx-components.tsx     # MDX component configuration
├── next.config.ts         # Next.js configuration
└── package.json
```

## 🎨 Customization

### Colors

Edit color palette in `src/app/globals.css`:
- Primary colors
- Accent colors
- Background and foreground
- Chart colors

### Content

- **Hero Section**: Edit `src/components/hero-section.tsx`
- **Gallery**: Update photos in `src/components/through-my-eyes.tsx`
- **Roadmap**: Modify milestones in `src/components/relationship-roadmap.tsx`
- **Traits**: Customize traits in `src/components/traits-showcase.tsx`
- **Wishlist**: Update wishes in `src/components/wishlist-promises.tsx`

### Fonts

Fonts are configured in `src/app/layout.tsx`:
- **Sans**: Nunito (default)
- **Display**: Dancing Script (for headings)

## 🔒 Security

The project includes comprehensive security headers:
- Content Security Policy (CSP)
- Strict Transport Security (HSTS)
- X-Frame-Options
- X-Content-Type-Options
- And more...

See `next.config.ts` for full configuration.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**xirothedev**

- Website: [xirothedev.site](https://www.xirothedev.site)
- GitHub: [@xirothedev](https://github.com/xirothedev)

## 🙏 Acknowledgments

- Built with love and dedication
- Inspired by beautiful moments and memories
- Made possible by modern web technologies

---

Made with ❤️ by [xirothedev](https://www.xirothedev.site)
