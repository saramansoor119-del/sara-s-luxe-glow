# Sara's Luxe Glow

Premium beauty e-commerce platform featuring luxury skincare, makeup, haircare, and fragrances.

## 🌟 Features

- **Modern UI/UX**: Beautiful, responsive design with Tailwind CSS and Radix UI components
- **Product Catalog**: Browse products by category with filtering and sorting
- **Shopping Cart**: Persistent cart using Zustand with local storage
- **3D Product Views**: Interactive 3D product visualization with Three.js and React Three Fiber
- **Smooth Animations**: Page transitions and UI animations with Framer Motion
- **Mobile Responsive**: Fully optimized for mobile, tablet, and desktop devices
- **Performance Optimized**: Code splitting, lazy loading, and optimized builds
- **SEO Friendly**: Comprehensive meta tags and structured data
- **Production Ready**: Configured for Vercel deployment with security headers

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **UI Components**: Radix UI + shadcn/ui
- **Styling**: Tailwind CSS with custom utilities
- **State Management**: Zustand
- **Routing**: React Router v6
- **3D Graphics**: Three.js with React Three Fiber
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **Data Fetching**: TanStack React Query
- **Icons**: Lucide React
- **Testing**: Vitest
- **Linting**: ESLint with TypeScript support

## 📋 Prerequisites

- Node.js >= 18.17.0
- npm >= 9.0.0 (or use your preferred package manager)

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/saramansoor119-del/sara-s-luxe-glow.git
cd sara-s-luxe-glow

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Start server with open browser
npm run dev -- --open
```

The app will be available at `http://localhost:8080`

### Building

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

## 🔧 Configuration

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```env
VITE_API_URL=https://api.example.com
```

### Project Structure

```
src/
├── components/          # React components
│   ├── layout/         # Layout components (Navbar, Footer, etc.)
│   ├── home/           # Home page components
│   ├── shop/           # Shop page components
│   ├── common/         # Shared components
│   ├── three/          # 3D components
│   └── ui/             # shadcn/ui components
├── pages/              # Page components
├── store/              # Zustand stores
├── data/               # Static data (products, categories, reviews)
├── lib/                # Utility functions
├── hooks/              # Custom React hooks
├── App.tsx             # Root app component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## 🧪 Testing

```bash
# Run tests
npm run test

# Watch mode
npm run test:watch
```

## 📦 Build Output

Production builds are optimized with:

- Code splitting for better caching
- Terser minification
- Asset optimization
- Lazy chunk loading

The `dist/` directory is ready for deployment.

## 🌐 Deployment

### Vercel

This project is configured for seamless Vercel deployment:

```bash
# Deploy to Vercel (recommended)
npm run build
vercel
```

**Features**:
- Automatic deployments from GitHub
- Preview deployments for pull requests
- Edge caching with optimal cache headers
- Security headers (CSP, X-Frame-Options, etc.)

**Manual Setup**:
1. Connect GitHub repository to Vercel
2. Environment variables are inherited from `.env.local` (if added)
3. Build command: `npm run build`
4. Output directory: `dist/`

### Environment Configuration in Vercel

Add to Vercel project settings if needed:
- `VITE_API_URL`: Your API endpoint

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ✅ Production Checklist

Before deploying to production:

- [ ] Run `npm run build` successfully
- [ ] Run `npm run type-check` - no TypeScript errors
- [ ] Run `npm run lint` - no linting errors
- [ ] Test all routes and navigation
- [ ] Test responsive design on mobile
- [ ] Verify all images load correctly
- [ ] Check console for errors/warnings
- [ ] Test cart persistence
- [ ] Verify external links work
- [ ] Check SEO meta tags with browser DevTools
- [ ] Test performance with Lighthouse
- [ ] Verify `.env` variables are not committed

## 🔒 Security

- No sensitive data in version control
- Environment variables for secrets
- Security headers configured in `vercel.json`
- CSP (Content Security Policy) ready
- X-Frame-Options to prevent clickjacking
- XSS protection headers

## 🚢 Performance

- Lazy loading of components
- Code splitting by vendor and feature
- Optimized image loading
- CSS-in-JS optimization with Tailwind
- React Query for efficient data fetching
- Zustand for lightweight state management

## 📄 License

MIT License - see LICENSE file for details

## 👤 Author

Sara's BeautyMart

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For issues or questions, please create an issue on GitHub.

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com)
- [React Router](https://reactrouter.com)
- [Vercel Deployment](https://vercel.com/docs)

---

**Last Updated**: 2026
**Status**: Production Ready ✅