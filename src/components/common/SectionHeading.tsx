import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, subtitle, align = "center" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`max-w-2xl mb-10 ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.25em] text-accent font-medium mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl md:text-5xl text-foreground">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-muted-foreground text-base md:text-lg">{subtitle}</p>
      )}
    </motion.div>
  );
}
