import { Link } from "react-router-dom";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/store/cart";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Cart = () => {
  const { items, setQty, remove, total, clear } = useCart();
  const sum = total();
  const shipping = sum > 50 || sum === 0 ? 0 : 6;

  if (items.length === 0) {
    return (
      <div className="container py-24 text-center">
        <h1 className="font-display text-4xl">Your bag is empty</h1>
        <p className="mt-3 text-muted-foreground">Let's find you a little glow.</p>
        <Button asChild size="lg" className="rounded-full bg-gradient-primary mt-8">
          <Link to="/shop">Start shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-12 md:py-16">
      <h1 className="font-display text-4xl md:text-5xl">Your bag</h1>

      <div className="grid lg:grid-cols-[1fr_360px] gap-10 mt-10">
        <div className="space-y-4">
          {items.map((i) => (
            <div key={i.product.id} className="flex gap-4 p-4 rounded-2xl glass">
              <Link to={`/product/${i.product.id}`} className="shrink-0">
                <img src={i.product.image} alt={i.product.name} className="h-24 w-24 md:h-28 md:w-28 object-cover rounded-xl" />
              </Link>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between gap-3">
                  <Link to={`/product/${i.product.id}`} className="font-display text-lg leading-tight hover:text-primary">{i.product.name}</Link>
                  <span className="font-medium whitespace-nowrap">${(i.product.price * i.quantity).toFixed(2)}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{i.product.category}</p>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-2 rounded-full border border-border px-2 py-1">
                    <Button size="icon" variant="ghost" className="rounded-full h-7 w-7" onClick={() => setQty(i.product.id, i.quantity - 1)}>
                      <Minus className="h-3.5 w-3.5" />
                    </Button>
                    <span className="w-5 text-center text-sm">{i.quantity}</span>
                    <Button size="icon" variant="ghost" className="rounded-full h-7 w-7" onClick={() => setQty(i.product.id, i.quantity + 1)}>
                      <Plus className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => remove(i.product.id)} className="text-muted-foreground">
                    <Trash2 className="h-4 w-4 mr-1" /> Remove
                  </Button>
                </div>
              </div>
            </div>
          ))}
          <Button variant="ghost" onClick={clear} className="text-muted-foreground">Clear bag</Button>
        </div>

        <aside className="h-fit p-6 rounded-3xl glass shadow-soft md:sticky md:top-24">
          <h3 className="font-display text-2xl">Order summary</h3>
          <div className="mt-5 space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>${sum.toFixed(2)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span></div>
          </div>
          <div className="border-t border-border my-4" />
          <div className="flex justify-between font-display text-xl">
            <span>Total</span><span>${(sum + shipping).toFixed(2)}</span>
          </div>
          <Button
            size="lg"
            className="w-full rounded-full bg-gradient-primary shadow-glow mt-6"
            onClick={() => toast.success("Checkout is a UI demo — happy browsing! ✨")}
          >
            Checkout
          </Button>
          <p className="text-xs text-muted-foreground text-center mt-3">Free shipping on orders over $50</p>
        </aside>
      </div>
    </div>
  );
};

export default Cart;
