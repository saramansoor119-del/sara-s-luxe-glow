import { Star } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/categories";
import type { Category } from "@/data/products";

interface Props {
  category: Category | "All";
  setCategory: (c: Category | "All") => void;
  price: [number, number];
  setPrice: (p: [number, number]) => void;
  minRating: number;
  setMinRating: (r: number) => void;
}

export function Filters({ category, setCategory, price, setPrice, minRating, setMinRating }: Props) {
  return (
    <aside className="space-y-8 md:sticky md:top-24 h-fit">
      <div>
        <h3 className="font-display text-lg mb-3">Category</h3>
        <div className="flex flex-wrap gap-2">
          {(["All", ...categories.map((c) => c.name)] as const).map((c) => (
            <Button
              key={c}
              size="sm"
              variant={category === c ? "default" : "outline"}
              onClick={() => setCategory(c)}
              className={`rounded-full ${category === c ? "bg-gradient-primary" : ""}`}
            >
              {c}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-display text-lg mb-3">Price</h3>
        <Slider
          value={price}
          min={0}
          max={150}
          step={5}
          onValueChange={(v) => setPrice([v[0], v[1]] as [number, number])}
        />
        <div className="mt-2 text-sm text-muted-foreground flex justify-between">
          <span>${price[0]}</span>
          <span>${price[1]}</span>
        </div>
      </div>

      <div>
        <h3 className="font-display text-lg mb-3">Minimum rating</h3>
        <div className="flex gap-1">
          {[0, 3, 4, 4.5].map((r) => (
            <Button
              key={r}
              size="sm"
              variant={minRating === r ? "default" : "outline"}
              onClick={() => setMinRating(r)}
              className={`rounded-full ${minRating === r ? "bg-gradient-primary" : ""}`}
            >
              {r === 0 ? "Any" : (
                <span className="flex items-center gap-1">
                  {r}+ <Star className="h-3 w-3 fill-current" />
                </span>
              )}
            </Button>
          ))}
        </div>
      </div>
    </aside>
  );
}
