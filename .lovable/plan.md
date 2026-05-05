## Sara's BeautyMart — Luxury Beauty E-Commerce (Frontend Only)

A polished, fully responsive multi-page React site with elegant typography, soft pink/gold palette, Framer Motion animations, and Three.js 3D product accents. All data is mocked (no backend).

### Pages & Routes

- `/` Home — animated hero, floating 3D cosmetics, featured categories, best sellers, promo banner
- `/shop` — product grid with category/price/rating filters and hover-glow cards
- `/product/:id` — large image + rotating 3D placeholder, description, ingredients, mock reviews, Add to Cart
- `/cart` — line items, quantity steppers, totals, checkout button (UI only)
- `/about` — brand story, mission, vision
- `/contact` — form UI, static map placeholder, social icons
- 404 stays as fallback

### Global Layout

- Sticky navbar with blur/glassmorphism, logo wordmark, nav links, cart icon with badge, theme toggle
- Footer with brand blurb, link columns, socials, newsletter input (UI only)
- Animated loading screen on first mount
- Page transitions via Framer Motion's AnimatePresence
- Scroll-reveal wrapper for sections

### Design System (in `index.css` + `tailwind.config.ts`)

- Palette (HSL tokens): blush pink, nude beige, ivory white, soft gold accent, deep mauve text; full dark mode variants
- Fonts: Playfair Display (headings), Inter (body) via Google Fonts in `index.html`
- Tokens: rounded-2xl defaults, soft layered shadows, gold gradient utility, glass utility (backdrop-blur + translucent bg)
- Custom Tailwind animations: fade-in, scale-in, float, shimmer, glow-pulse

### 3D (Three.js)

- React Three Fiber + Drei (pinned: `@react-three/fiber@^8.18`, `@react-three/drei@^9.122.0`, `three@>=0.133`)
- Hero: low-poly stylized cosmetic shapes (lipstick = capsule+cylinder, cream jar = cylinder, serum = bottle from lathe) gently floating/rotating, soft env lighting, gold material
- Product page: single rotating shape with OrbitControls (auto-rotate), suspense fallback
- Optional ambient particle field (lightweight Points) behind hero
- Performance: dpr clamp, frameloop="demand" where possible, disable on small screens via `useIsMobile`

### Cart State

- Lightweight Zustand store (or React Context) persisted to localStorage; exposes add/remove/updateQty/total

### Mock Data

- `src/data/products.ts` — ~12 items across Skincare, Makeup, Haircare, Fragrances (name, price, image, rating, description, ingredients[], category)
- `src/data/reviews.ts`, `src/data/categories.ts`
- Product images from Unsplash beauty queries

### File Structure (new)

```
src/
  components/
    layout/ Navbar.tsx Footer.tsx PageTransition.tsx LoadingScreen.tsx
    home/ Hero.tsx FeaturedCategories.tsx BestSellers.tsx PromoBanner.tsx
    shop/ ProductCard.tsx Filters.tsx
    three/ HeroScene.tsx ProductScene.tsx Particles.tsx
    common/ ThemeToggle.tsx SectionHeading.tsx
  pages/ Home.tsx Shop.tsx ProductDetail.tsx Cart.tsx About.tsx Contact.tsx
  data/ products.ts categories.ts reviews.ts
  store/ cart.ts
  hooks/ useTheme.ts
```

### Responsiveness

- Mobile-first; hero collapses to single column, 3D canvas hidden or simplified < md
- Product grid: 1 / 2 / 3 / 4 cols across breakpoints
- Touch-friendly tap targets, swipeable best-sellers row on mobile

### Technical Notes

- Replace placeholder `Index.tsx` with real Home; wire all routes in `App.tsx`
- Add Framer Motion, Zustand, R3F/Drei/Three, lucide-react (already common)
- Theme toggle adds/removes `dark` class on `<html>`; persist in localStorage
- All cart/checkout/contact actions are UI-only with toast confirmations
