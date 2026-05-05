import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function PromoBanner() {
  return (
    <section className="container py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-[2rem] p-8 md:p-16 bg-gradient-primary text-primary-foreground shadow-elegant"
      >
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-gold/40 blur-3xl" />
        <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-primary-glow/50 blur-3xl" />
        <div className="relative max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] opacity-80">Spring edit · limited time</p>
          <h3 className="font-display text-3xl md:text-5xl mt-3">
            20% off your first order
          </h3>
          <p className="mt-4 opacity-90 text-base md:text-lg">
            Discover the rituals our community is glowing about. Code <span className="font-semibold">GLOW20</span> at checkout.
          </p>
          <Button asChild size="lg" className="mt-8 rounded-full bg-background text-foreground hover:bg-background/90">
            <Link to="/shop">Shop the edit</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
