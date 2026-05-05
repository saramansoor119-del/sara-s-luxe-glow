import { Link } from "react-router-dom";
import { Star, Plus } from "lucide-react";
import { motion } from "framer-motion";
import type { Product } from "@/data/products";
import { useCart } from "@/store/cart";
import { toast } from "sonner";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const add = useCart((s) => s.add);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: (index % 8) * 0.05 }}
      className="group"
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden rounded-2xl bg-secondary/60 aspect-[4/5] shadow-soft hover-lift">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <button
            onClick={(e) => {
              e.preventDefault();
              add(product);
              toast.success(`${product.name} added to cart`);
            }}
            aria-label="Quick add"
            className="absolute bottom-3 right-3 h-11 w-11 rounded-full bg-background text-foreground shadow-elegant flex items-center justify-center translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            <Plus className="h-5 w-5" />
          </button>
          <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full glass-strong">
            {product.category}
          </span>
        </div>
      </Link>
      <div className="mt-3 px-1">
        <div className="flex items-start justify-between gap-3">
          <Link to={`/product/${product.id}`} className="font-display text-base md:text-lg leading-snug hover:text-primary transition-colors">
            {product.name}
          </Link>
          <span className="font-medium whitespace-nowrap">${product.price}</span>
        </div>
        <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
          <Star className="h-3.5 w-3.5 fill-accent text-accent" />
          <span>{product.rating.toFixed(1)}</span>
          <span className="mx-1">·</span>
          <span className="truncate">{product.tagline}</span>
        </div>
      </div>
    </motion.div>
  );
}
