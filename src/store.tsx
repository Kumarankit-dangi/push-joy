import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Product } from "./data/products";

type CartItem = { product: Product; qty: number };

type StoreCtx = {
  cart: CartItem[];
  wishlist: string[];
  cartOpen: boolean;
  quickView: Product | null;
  searchOpen: boolean;
  mobileOpen: boolean;
  addToCart: (p: Product, qty?: number) => void;
  removeFromCart: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  toggleWishlist: (id: string) => void;
  openCart: () => void;
  closeCart: () => void;
  openQuickView: (p: Product) => void;
  closeQuickView: () => void;
  openSearch: () => void;
  closeSearch: () => void;
  openMobile: () => void;
  closeMobile: () => void;
  cartCount: number;
  cartTotal: number;
  bagPulse: number;
};

const Ctx = createContext<StoreCtx | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [quickView, setQuickView] = useState<Product | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [bagPulse, setBagPulse] = useState(0);

  useEffect(() => {
    // lock scroll when overlay open
    const lock = cartOpen || quickView || searchOpen || mobileOpen;
    document.body.style.overflow = lock ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [cartOpen, quickView, searchOpen, mobileOpen]);

  const value = useMemo<StoreCtx>(() => {
    const cartCount = cart.reduce((s, i) => s + i.qty, 0);
    const cartTotal = cart.reduce((s, i) => {
      const p = i.product.price * (1 - (i.product.discount ?? 0) / 100);
      return s + p * i.qty;
    }, 0);
    return {
      cart, wishlist, cartOpen, quickView, searchOpen, mobileOpen,
      cartCount, cartTotal, bagPulse,
      addToCart(p, qty = 1) {
        setCart(prev => {
          const found = prev.find(i => i.product.id === p.id);
          if (found) return prev.map(i => i.product.id === p.id ? { ...i, qty: i.qty + qty } : i);
          return [...prev, { product: p, qty }];
        });
        setBagPulse(x => x + 1);
      },
      removeFromCart(id) { setCart(prev => prev.filter(i => i.product.id !== id)); },
      setQty(id, qty) {
        setCart(prev => prev.map(i => i.product.id === id ? { ...i, qty: Math.max(1, qty) } : i));
      },
      toggleWishlist(id) {
        setWishlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
      },
      openCart: () => setCartOpen(true),
      closeCart: () => setCartOpen(false),
      openQuickView: (p) => setQuickView(p),
      closeQuickView: () => setQuickView(null),
      openSearch: () => setSearchOpen(true),
      closeSearch: () => setSearchOpen(false),
      openMobile: () => setMobileOpen(true),
      closeMobile: () => setMobileOpen(false),
    };
  }, [cart, wishlist, cartOpen, quickView, searchOpen, mobileOpen, bagPulse]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useStore = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("useStore must be used inside StoreProvider");
  return c;
};
