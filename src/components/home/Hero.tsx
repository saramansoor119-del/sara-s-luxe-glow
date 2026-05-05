import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroScene } from "@/components/three/HeroScene";
import { useIsMobile } from "@/hooks/use-mobile";

export function Hero() {
  const isMobile = useIsMobile();
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 -z-0 opacity-60 pointer-events-none">
        <div className="absolute -top-32 -left-20 h-96 w-96 rounded-full bg-primary-glow/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-gold/20 blur-3xl" />
      </div>

      <div className="container relative grid md:grid-cols-2 gap-10 items-center pt-12 pb-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs uppercase tracking-[0.2em]">
            <Sparkles className="h-3.5 w-3.5 text-accent" /> New season edit
          </span>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
            Glow naturally with{" "}
            <span className="text-gradient-primary">Sara's BeautyMart</span>
          </h1>
          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-lg">
            Modern, clean beauty rituals — skincare, makeup, haircare and fragrances
            crafted to celebrate the way you already shine.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full bg-gradient-primary shadow-glow">
              <Link to="/shop">Shop Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <Link to="/shop">Explore Collection</Link>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <span>✦ Cruelty-free</span>
            <span>✦ Dermatologist-tested</span>
            <span>✦ Free shipping over $50</span>
          </div>
        </motion.div>

        <div className="relative h-[380px] md:h-[520px] rounded-3xl overflow-hidden">
          {!isMobile ? (
            <HeroScene />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-56 w-56 rounded-full bg-gradient-primary shadow-glow animate-float" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
