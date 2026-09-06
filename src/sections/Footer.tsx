import { useState } from "react";
import { Logo } from "../components/Logo";
import { IconInstagram, IconFacebook, IconYoutube, IconArrow } from "../components/Icons";

const LINKS = {
  quick: ["Home", "Shop", "Categories", "New Arrivals", "Best Sellers", "About", "Contact"],
  support: ["Shipping", "Returns", "FAQ", "Privacy Policy", "Terms & Conditions"],
};

export function Footer() {
  const [subbed, setSubbed] = useState(false);

  return (
    <footer id="wishlist" className="relative bg-ink text-cream overflow-hidden">
      <div className="absolute -top-20 left-1/4 w-96 h-96 blob bg-berry/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 right-10 w-96 h-96 blob-2 bg-sun/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-4 md:px-6 pt-20 pb-10">
        {/* Newsletter */}
        <div className="grid lg:grid-cols-2 gap-8 items-center pb-14 border-b border-cream/10">
          <div>
            <h3 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              Get new toy launches,
              <br />
              offers & <em className="not-italic text-berry">playful</em> updates.
            </h3>
            <p className="mt-3 text-cream/60 max-w-lg">Join 12,000+ happy parents receiving our weekly joy edit.</p>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); setSubbed(true); }}
            className="flex bg-cream/10 backdrop-blur rounded-full p-2 ring-1 ring-cream/20"
          >
            <input
              type="email"
              required
              placeholder="you@email.com"
              className="flex-1 bg-transparent px-4 py-3 text-cream placeholder:text-cream/40 outline-none"
            />
            <button
              type="submit"
              className="bg-cream text-ink px-6 py-3 rounded-full font-semibold hover:bg-sun transition inline-flex items-center gap-2"
            >
              {subbed ? "✓ Subscribed" : "Subscribe"}
              {!subbed && <IconArrow className="w-4 h-4" />}
            </button>
          </form>
        </div>

        {/* Main grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 py-14">
          <div className="lg:col-span-1">
            <Logo dark />
            <p className="mt-5 text-cream/60 text-sm max-w-xs leading-relaxed">
              Where Every Toy Brings a Little More Joy. Handpicked from Kolkata for happy Indian childhoods.
            </p>
            <div className="mt-6 flex gap-2">
              <Social icon={<IconInstagram />} label="Instagram" />
              <Social icon={<IconFacebook />} label="Facebook" />
              <Social icon={<IconYoutube />} label="YouTube" />
            </div>
          </div>

          <FooterCol title="Quick Links" links={LINKS.quick} />
          <FooterCol title="Customer Support" links={LINKS.support} />

          <div>
            <h4 className="text-xs uppercase tracking-widest text-cream/50 font-bold mb-4">Visit Us</h4>
            <p className="text-sm text-cream/80 leading-relaxed">
              Plush Joy Flagship
              <br />
              Park Street
              <br />
              Kolkata, West Bengal
              <br />
              India · 700016
            </p>
            <p className="mt-4 text-sm text-cream/80">
              hello@plushjoy.in
              <br />
              +91 98765 43210
            </p>
          </div>
        </div>

        {/* Big word */}
        <div className="border-t border-cream/10 pt-10">
          <div className="font-display text-[18vw] md:text-[15vw] lg:text-[13vw] font-black leading-[0.85] text-cream/[0.06] tracking-tighter select-none">
            PLUSH JOY
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 text-xs text-cream/50">
          <div>© {new Date().getFullYear()} Plush Joy Toys Pvt. Ltd. · Made with 💛 in Kolkata.</div>
          <div className="flex gap-6">
            <span>All prices in INR (₹)</span>
            <span>GSTIN: 19AAAAA0000A1Z5</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="text-xs uppercase tracking-widest text-cream/50 font-bold mb-4">{title}</h4>
      <ul className="space-y-2.5">
        {links.map(l => (
          <li key={l}>
            <a href="#" className="text-sm text-cream/80 hover:text-berry transition inline-flex items-center gap-2 group">
              <span className="w-0 h-px bg-berry group-hover:w-4 transition-all" />
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Social({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <a href="#" aria-label={label} className="w-10 h-10 rounded-full bg-cream/10 hover:bg-berry hover:text-cream flex items-center justify-center transition-all hover:-translate-y-1">
      {icon}
    </a>
  );
}
