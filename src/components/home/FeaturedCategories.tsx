import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { categories } from "@/data/categories";
import { SectionHeading } from "@/components/common/SectionHeading";

export function FeaturedCategories() {
  return (
    <section className="container py-20">
      <SectionHeading
        eyebrow="Shop by category"
        title={<>Find your <span className="text-gradient-gold">ritual</span></>}
        subtitle="Curated edits across skincare, makeup, haircare and fragrance."
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {categories.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
          >
            <Link
              to={`/shop?category=${c.name}`}
              className="group block p-6 md:p-8 rounded-3xl glass hover-lift text-center"
            >
              <div className="text-4xl mb-3">{c.emoji}</div>
              <div className="font-display text-lg md:text-xl">{c.name}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{c.blurb}</div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
