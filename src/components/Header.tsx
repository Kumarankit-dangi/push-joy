import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { IconSearch, IconHeart, IconBag, IconUser, IconMenu, IconX } from "./Icons";
import { useStore } from "../store";

const NAV = [
  { label: "Home", href: "#top" },
  { label: "Shop", href: "#shop" },
  { label: "Categories", href: "#categories" },
  { label: "New Arrivals", href: "#new" },
  { label: "Best Sellers", href: "#best" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { openCart, cartCount, openSearch, wishlist, bagPulse, openMobile, closeMobile, mobileOpen } = useStore();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top announce bar */}
      <div className="w-full bg-ink text-cream text-xs md:text-[0.78rem] font-medium py-2 px-4 overflow-hidden">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4">
          <span className="hidden sm:inline">📦 Free shipping across India on orders above ₹1,499</span>
          <span className="tracking-widest uppercase">✨ Joy of the Week — Up to 30% OFF</span>
          <span className="hidden sm:inline">📍 Kolkata, West Bengal</span>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 transition-all duration-500 ${
          scrolled ? "backdrop-blur-xl bg-cream/75 border-b border-black/5 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.3)]" : "backdrop-blur-sm bg-cream/40"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 flex items-center justify-between h-16 md:h-20">
          <Logo />

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map(n => (
              <a
                key={n.href}
                href={n.href}
                className="relative px-3 py-2 text-sm font-medium text-ink/80 hover:text-ink transition group"
              >
                {n.label}
                <span className="absolute inset-x-3 -bottom-0.5 h-[2px] bg-berry scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1 md:gap-1.5">
            <IconBtn onClick={openSearch} label="Search"><IconSearch /></IconBtn>
            <IconBtn onClick={() => document.getElementById("wishlist")?.scrollIntoView({ behavior: "smooth" })} label="Wishlist">
              <div className="relative">
                <IconHeart />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-berry text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </div>
            </IconBtn>
            <IconBtn onClick={openCart} label="Cart">
              <div className="relative">
                <span key={bagPulse} className={bagPulse > 0 ? "bag-bounce inline-block" : "inline-block"}>
                  <IconBag />
                </span>
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-berry text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
            </IconBtn>
            <IconBtn label="Account" className="hidden md:inline-flex"><IconUser /></IconBtn>

            <button
              className="lg:hidden ml-1 w-10 h-10 rounded-full flex items-center justify-center text-ink"
              onClick={openMobile}
              aria-label="Menu"
            >
              <IconMenu />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden fade-in">
          <div className="absolute inset-0 bg-ink/30" onClick={closeMobile} />
          <div className="absolute inset-y-0 right-0 w-[85%] max-w-sm bg-cream slide-in-right flex flex-col">
            <div className="flex items-center justify-between p-5 border-b border-black/5">
              <Logo />
              <button onClick={closeMobile} className="w-10 h-10 rounded-full bg-white flex items-center justify-center"><IconX /></button>
            </div>
            <nav className="flex flex-col p-5 gap-1">
              {NAV.map(n => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={closeMobile}
                  className="font-display text-2xl font-semibold py-2 border-b border-black/5"
                >
                  {n.label}
                </a>
              ))}
            </nav>
            <div className="mt-auto p-5 text-sm text-ink/60">
              📍 Kolkata, West Bengal, India
              <br />
              hello@plushjoy.in · +91 98765 43210
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function IconBtn({ children, onClick, label, className = "" }: any) {
  return (
    <button
      aria-label={label}
      onClick={onClick}
      className={`w-10 h-10 rounded-full text-ink hover:bg-white/70 hover:shadow-md transition-all inline-flex items-center justify-center ${className}`}
    >
      {children}
    </button>
  );
}
