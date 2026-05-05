import { Mail, MapPin, Phone, Instagram, Twitter, Facebook } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Contact = () => {
  return (
    <div className="container py-12 md:py-20">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-accent">Get in touch</p>
        <h1 className="font-display text-4xl md:text-6xl mt-3">
          We'd <span className="text-gradient-primary">love</span> to hear from you
        </h1>
        <p className="mt-4 text-muted-foreground">
          Questions, press, partnerships — reach out and our team will get back within 24h.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1fr_400px] gap-10 mt-14">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            toast.success("Message sent! We'll be in touch soon ✨");
            (e.currentTarget as HTMLFormElement).reset();
          }}
          className="p-8 md:p-10 rounded-3xl glass shadow-soft space-y-5"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" required className="mt-2 rounded-full bg-background" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required className="mt-2 rounded-full bg-background" />
            </div>
          </div>
          <div>
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" className="mt-2 rounded-full bg-background" />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" rows={6} required className="mt-2 rounded-2xl bg-background" />
          </div>
          <Button type="submit" size="lg" className="rounded-full bg-gradient-primary shadow-glow">
            Send message
          </Button>
        </form>

        <aside className="space-y-6">
          <div className="p-6 rounded-3xl glass">
            <h3 className="font-display text-xl">Visit us</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-accent" /> 24 Bloom St, Studio 5<br/>London, UK</li>
              <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-accent" /> hello@sarasbeautymart.com</li>
              <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-accent" /> +44 20 1234 5678</li>
            </ul>
            <div className="flex gap-3 mt-5">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="h-9 w-9 rounded-full bg-background flex items-center justify-center hover:text-primary transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden h-64 relative shadow-soft bg-gradient-hero">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-8 w-8 text-primary mx-auto" />
                <p className="font-display text-lg mt-2">Our flagship</p>
                <p className="text-xs text-muted-foreground">Map preview</p>
              </div>
            </div>
            <div className="absolute inset-0 opacity-30 pointer-events-none">
              <div className="absolute top-10 left-10 h-32 w-32 rounded-full bg-primary-glow/40 blur-2xl" />
              <div className="absolute bottom-8 right-8 h-32 w-32 rounded-full bg-gold/40 blur-2xl" />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Contact;
