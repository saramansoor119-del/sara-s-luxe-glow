import { products } from "@/data/products";
import { ProductCard } from "@/components/shop/ProductCard";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function BestSellers() {
  const best = products.filter((p) => p.bestSeller);
  return (
    <section className="container py-20">
      <SectionHeading
        eyebrow="Loved by you"
        title={<>Best <span className="text-gradient-primary">sellers</span></>}
        subtitle="The pieces our community keeps coming back to."
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {best.map((p, i) => (
          <ProductCard key={p.id} product={p} index={i} />
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button asChild size="lg" variant="outline" className="rounded-full">
          <Link to="/shop">View all products</Link>
        </Button>
      </div>
    </section>
  );
}
