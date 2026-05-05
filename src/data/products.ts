export type Category = "Skincare" | "Makeup" | "Haircare" | "Fragrances";

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  rating: number;
  image: string;
  tagline: string;
  description: string;
  ingredients: string[];
  bestSeller?: boolean;
}

const img = (q: string) =>
  `https://images.unsplash.com/${q}?auto=format&fit=crop&w=900&q=80`;

export const products: Product[] = [
  {
    id: "rose-glow-serum",
    name: "Rose Glow Vitamin C Serum",
    category: "Skincare",
    price: 48,
    rating: 4.8,
    image: img("photo-1620916566398-39f1143ab7be"),
    tagline: "Brightening daily radiance booster",
    description:
      "A featherlight serum infused with Bulgarian rose and stabilized vitamin C to brighten, even tone, and restore a luminous glow.",
    ingredients: ["Vitamin C (15%)", "Bulgarian Rose Water", "Hyaluronic Acid", "Niacinamide", "Squalane"],
    bestSeller: true,
  },
  {
    id: "velvet-lip-lacquer",
    name: "Velvet Matte Lip Lacquer",
    category: "Makeup",
    price: 28,
    rating: 4.7,
    image: img("photo-1586495777744-4413f21062fa"),
    tagline: "All-day plush matte color",
    description:
      "Pillow-soft matte finish that wears like a balm. Pigment-rich color that doesn't budge — even through coffee dates.",
    ingredients: ["Jojoba Oil", "Vitamin E", "Shea Butter", "Mineral Pigments"],
    bestSeller: true,
  },
  {
    id: "silk-hair-elixir",
    name: "Silk Hair Elixir Oil",
    category: "Haircare",
    price: 34,
    rating: 4.9,
    image: img("photo-1631730486572-226d1f595b68"),
    tagline: "Weightless shine + frizz control",
    description:
      "A blend of argan, marula, and camellia oils that smooths flyaways and adds a glassy, mirror-like shine without grease.",
    ingredients: ["Argan Oil", "Marula Oil", "Camellia Oil", "Vitamin E"],
    bestSeller: true,
  },
  {
    id: "midnight-bloom-eau",
    name: "Midnight Bloom Eau de Parfum",
    category: "Fragrances",
    price: 92,
    rating: 4.6,
    image: img("photo-1541643600914-78b084683601"),
    tagline: "Jasmine, oud & vanilla musk",
    description:
      "An intoxicating evening signature: night-blooming jasmine wrapped in smoky oud and a soft vanilla musk dry-down.",
    ingredients: ["Jasmine Absolute", "Oud", "Vanilla", "White Musk", "Bergamot"],
    bestSeller: true,
  },
  {
    id: "cloud-cream-moisturizer",
    name: "Cloud Cream Moisturizer",
    category: "Skincare",
    price: 42,
    rating: 4.7,
    image: img("photo-1556228720-195a672e8a03"),
    tagline: "Whipped 72-hour hydration",
    description: "A cushion-soft cream that melts into skin, locking in moisture for a plump, dewy finish.",
    ingredients: ["Ceramides", "Peptides", "Glycerin", "Shea Butter"],
  },
  {
    id: "gilded-eye-palette",
    name: "Gilded Hour Eye Palette",
    category: "Makeup",
    price: 56,
    rating: 4.5,
    image: img("photo-1512496015851-a90fb38ba796"),
    tagline: "12 buttery, blendable shades",
    description: "From soft champagne to molten bronze — a wearable palette of shimmer and matte for any hour.",
    ingredients: ["Mica", "Talc-Free Pigments", "Vitamin E"],
  },
  {
    id: "scalp-detox-shampoo",
    name: "Scalp Detox Shampoo",
    category: "Haircare",
    price: 26,
    rating: 4.4,
    image: img("photo-1535585209827-a15fcdbc4c2d"),
    tagline: "Clarifying weekly reset",
    description: "Gently lifts buildup with charcoal and tea tree, leaving the scalp clean and the hair full of body.",
    ingredients: ["Activated Charcoal", "Tea Tree", "Salicylic Acid"],
  },
  {
    id: "soft-petal-mist",
    name: "Soft Petal Body Mist",
    category: "Fragrances",
    price: 32,
    rating: 4.3,
    image: img("photo-1592945403244-b3fbafd7f539"),
    tagline: "Peony, pear & cashmere",
    description: "A daydream in a bottle — delicate peony and crisp pear settle into a warm cashmere finish.",
    ingredients: ["Peony", "Pear", "Cashmere Musk"],
  },
  {
    id: "overnight-retinol",
    name: "Overnight Retinol Renewal",
    category: "Skincare",
    price: 64,
    rating: 4.8,
    image: img("photo-1570194065650-d99fb4bedf0a"),
    tagline: "Smooth, refine, renew",
    description: "Encapsulated retinol works while you sleep to soften lines and refine texture, gently.",
    ingredients: ["Encapsulated Retinol 0.3%", "Bakuchiol", "Squalane", "Centella"],
  },
  {
    id: "sculpt-blush-stick",
    name: "Sculpt Cream Blush Stick",
    category: "Makeup",
    price: 30,
    rating: 4.6,
    image: img("photo-1631214540242-3cd8c4b0b3d8"),
    tagline: "Lit-from-within flush",
    description: "A creamy, glide-on blush that melts into skin for a natural, just-pinched flush.",
    ingredients: ["Jojoba", "Squalane", "Mineral Pigments"],
  },
  {
    id: "curl-define-cream",
    name: "Curl Define Styling Cream",
    category: "Haircare",
    price: 28,
    rating: 4.5,
    image: img("photo-1522338242992-e1a54906a8da"),
    tagline: "Soft-hold, frizz-free curls",
    description: "Defines curls and waves with a flexible, touchable hold — never crunchy.",
    ingredients: ["Flax Seed", "Aloe", "Shea Butter"],
  },
  {
    id: "amber-noir-parfum",
    name: "Amber Noir Parfum",
    category: "Fragrances",
    price: 110,
    rating: 4.9,
    image: img("photo-1594035910387-fea47794261f"),
    tagline: "Warm amber, smoky vanilla",
    description: "A confident, addictive parfum — warm amber resin layered over smoky vanilla and tobacco leaf.",
    ingredients: ["Amber Resin", "Vanilla", "Tobacco", "Sandalwood"],
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);
