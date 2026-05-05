import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { products, type Category } from "@/data/products";
import { ProductCard } from "@/components/shop/ProductCard";
import { Filters } from "@/components/shop/Filters";
import { SectionHeading } from "@/components/common/SectionHeading";

const Shop = () => {
  const [params] = useSearchParams();
  const initial = (params.get("category") as Category | null) ?? "All";
  const [category, setCategory] = useState<Category | "All">(initial);
  const [price, setPrice] = useState<[number, number]>([0, 150]);
  const [minRating, setMinRating] = useState(0);

  useEffect(() => {
    const c = params.get("category") as Category | null;
    if (c) setCategory(c);
  }, [params]);

  const filtered = useMemo(
    () =>
      products.filter(
        (p) =>
          (category === "All" || p.category === category) &&
          p.price >= price[0] &&
          p.price <= price[1] &&
          p.rating >= minRating,
      ),
    [category, price, minRating],
  );

  return (
    <div className="container py-12 md:py-20">
      <SectionHeading
        align="left"
        eyebrow="The shop"
        title={<>All <span className="text-gradient-gold">products</span></>}
        subtitle="Filter by category, price and rating to find your next favorite."
      />
      <div className="grid md:grid-cols-[260px_1fr] gap-10">
        <Filters
          category={category}
          setCategory={setCategory}
          price={price}
          setPrice={setPrice}
          minRating={minRating}
          setMinRating={setMinRating}
        />
        <div>
          {filtered.length === 0 ? (
            <p className="text-muted-foreground">No products match your filters.</p>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filtered.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
