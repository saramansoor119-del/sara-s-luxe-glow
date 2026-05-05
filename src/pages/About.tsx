import { motion } from "framer-motion";
import { Sparkles, Leaf, Heart } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";

const About = () => (
  <div>
    <section className="bg-gradient-hero">
      <div className="container py-20 md:py-28 text-center max-w-3xl">
        <p className="text-xs uppercase tracking-[0.3em] text-accent">Our story</p>
        <h1 className="font-display text-4xl md:text-6xl mt-3">
          Beauty, <span className="text-gradient-primary">redefined</span>.
        </h1>
        <p className="mt-6 text-muted-foreground text-base md:text-lg">
          Sara's BeautyMart was built to redefine natural beauty care — modern formulas,
          transparent ingredients, and rituals that feel as good as they look.
        </p>
      </div>
    </section>

    <section className="container py-20 grid md:grid-cols-2 gap-12 items-center">
      <motion.img
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        src="https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=900&q=80"
        alt="Sara's BeautyMart studio"
        className="rounded-3xl shadow-soft aspect-[4/5] object-cover"
      />
      <div>
        <SectionHeading
          align="left"
          eyebrow="Founded on intention"
          title={<>Crafted with <span className="text-gradient-gold">care</span></>}
        />
        <p className="text-muted-foreground">
          From a small studio to a global community, every formula is developed with chemists
          and dermatologists, tested by a community of real people, and made to fit into your
          everyday routine without the noise.
        </p>
        <p className="mt-4 text-muted-foreground">
          We believe in clean — but not preachy. Effective — but never overcomplicated.
          And above all, beauty that helps you feel like the most luminous version of yourself.
        </p>
      </div>
    </section>

    <section className="container pb-24">
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: Sparkles, title: "Our Mission", body: "Modern, intentional beauty that celebrates how you already shine — never how you should change." },
          { icon: Leaf, title: "Our Promise", body: "Clean, cruelty-free formulations with ingredients you can actually pronounce." },
          { icon: Heart, title: "Our Vision", body: "A beauty community where everyone feels seen, glow-y, and gloriously themselves." },
        ].map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-8 rounded-3xl glass hover-lift"
          >
            <div className="h-12 w-12 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow mb-4">
              <c.icon className="h-5 w-5 text-primary-foreground" />
            </div>
            <h3 className="font-display text-xl">{c.title}</h3>
            <p className="mt-2 text-muted-foreground text-sm">{c.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default About;
