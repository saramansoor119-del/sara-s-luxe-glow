import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/40">
      <div className="container py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-2xl">
            Sara's <span className="text-gradient-gold">BeautyMart</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-md">
            Modern, clean beauty essentials made to celebrate your natural glow.
            Crafted with intention. Loved by you.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              toast.success("You're on the list — check your inbox ✨");
            }}
            className="mt-6 flex gap-2 max-w-sm"
          >
            <Input type="email" required placeholder="Your email" className="rounded-full bg-background" />
            <Button type="submit" className="rounded-full bg-gradient-primary">Subscribe</Button>
          </form>
        </div>

        <div>
          <h4 className="font-display text-lg mb-3">Shop</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/shop" className="hover:text-primary">All products</Link></li>
            <li><Link to="/shop?category=Skincare" className="hover:text-primary">Skincare</Link></li>
            <li><Link to="/shop?category=Makeup" className="hover:text-primary">Makeup</Link></li>
            <li><Link to="/shop?category=Fragrances" className="hover:text-primary">Fragrances</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            <li><a href="#" className="hover:text-primary">Press</a></li>
            <li><a href="#" className="hover:text-primary">Careers</a></li>
          </ul>
          <div className="flex gap-3 mt-5">
            {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="h-9 w-9 rounded-full glass flex items-center justify-center hover:text-primary transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container py-5 text-xs text-muted-foreground flex flex-col md:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Sara's BeautyMart. All rights reserved.</p>
          <p>Made with love · Glow naturally</p>
        </div>
      </div>
    </footer>
  );
}
