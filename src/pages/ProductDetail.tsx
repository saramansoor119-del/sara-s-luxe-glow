import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Minus, Plus, ShoppingBag, Star } from "lucide-react";
import { getProduct } from "@/data/products";
import { reviews } from "@/data/reviews";
import { Button } from "@/components/ui/button";
import { useCart } from "@/store/cart";
import { toast } from "sonner";
import { useState } from "react";
import { ProductScene } from "@/components/three/ProductScene";
import { motion } from "framer-motion";

const ProductDetail = () => {
  const { id } = useParams();
  const product = id ? getProduct(id) : undefined;
  const add = useCart((s) => s.add);
  const [qty, setQty] = useState(1);
  const [view, setView] = useState<"image" | "3d">("image");

  if (!product) {
    return (
      <div className="container py-24 text-center">
        <h1 className="font-display text-3xl">Product not found</h1>
        <Button asChild className="mt-6 rounded-full"><Link to="/shop">Back to shop</Link></Button>
      </div>
    );
  }

  return (
    <div className="container py-10 md:py-16">
      <Link to="/shop" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
        <ArrowLeft className="h-4 w-4" /> Back to shop
      </Link>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-16 mt-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-hero shadow-soft"
        >
          {view === "image" ? (
            <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
          ) : (
            <ProductScene tone="#e8b4d8" />
          )}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 glass-strong rounded-full p-1">
            {(["image", "3d"] as const).map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-widest transition-colors ${
                  view === v ? "bg-primary text-primary-foreground" : "text-foreground/70"
                }`}
              >
                {v === "image" ? "Photo" : "3D View"}
              </button>
            ))}
          </div>
        </motion.div>

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-accent">{product.category}</p>
          <h1 className="font-display text-3xl md:text-5xl mt-2">{product.name}</h1>
          <div className="flex items-center gap-2 mt-3 text-sm">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span>{product.rating.toFixed(1)}</span>
            <span className="text-muted-foreground">· {reviews.length} reviews</span>
          </div>
          <p className="mt-4 text-muted-foreground">{product.description}</p>

          <div className="mt-8 flex items-end gap-4">
            <span className="font-display text-4xl">${product.price}</span>
            <span className="text-sm text-muted-foreground line-through">${product.price + 12}</span>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <div className="flex items-center gap-3 rounded-full border border-border px-2 py-1">
              <Button size="icon" variant="ghost" className="rounded-full h-9 w-9" onClick={() => setQty((q) => Math.max(1, q - 1))}>
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-6 text-center font-medium">{qty}</span>
              <Button size="icon" variant="ghost" className="rounded-full h-9 w-9" onClick={() => setQty((q) => q + 1)}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <Button
              size="lg"
              className="rounded-full bg-gradient-primary shadow-glow flex-1"
              onClick={() => {
                add(product, qty);
                toast.success(`Added ${qty} × ${product.name}`);
              }}
            >
              <ShoppingBag className="h-4 w-4 mr-2" /> Add to Cart
            </Button>
          </div>

          <div className="mt-10">
            <h3 className="font-display text-xl mb-3">Key ingredients</h3>
            <div className="flex flex-wrap gap-2">
              {product.ingredients.map((i) => (
                <span key={i} className="px-3 py-1.5 rounded-full bg-secondary text-sm">{i}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="mt-20">
        <h2 className="font-display text-2xl md:text-3xl">What others are saying</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {reviews.map((r) => (
            <div key={r.id} className="rounded-2xl p-6 glass">
              <div className="flex items-center gap-1 text-accent">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <h4 className="font-display text-lg mt-2">{r.title}</h4>
              <p className="text-sm text-muted-foreground mt-2">{r.body}</p>
              <p className="text-xs text-muted-foreground mt-4">— {r.author}, {r.date}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
