import type { Product } from "../data/products";
import { priceINR } from "../data/products";
import { useStore } from "../store";
import { IconHeart, IconEye, IconStar, IconBag } from "./Icons";

export function ProductCard({ p }: { p: Product }) {
  const { addToCart, toggleWishlist, wishlist, openQuickView } = useStore();
  const wished = wishlist.includes(p.id);
  const finalPrice = p.discount ? p.price * (1 - p.discount / 100) : p.price;

  return (
    <div className="product-card group relative flex flex-col bg-white rounded-3xl overflow-hidden ring-1 ring-black/5 hover:ring-black/10 hover:shadow-[0_20px_60px_-20px_rgba(230,57,115,0.35)] transition-all duration-500">
      <div className="img-wrap relative aspect-square overflow-hidden bg-gradient-to-br from-cream to-cream-2">
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
          {p.discount && (
            <span className="text-[0.7rem] font-bold uppercase tracking-wider bg-berry text-white px-2.5 py-1 rounded-full">
              -{p.discount}%
            </span>
          )}
          {p.isNew && (
            <span className="text-[0.7rem] font-bold uppercase tracking-wider bg-ink text-white px-2.5 py-1 rounded-full">
              New
            </span>
          )}
          {p.isBestseller && !p.isNew && (
            <span className="text-[0.7rem] font-bold uppercase tracking-wider bg-sun text-ink px-2.5 py-1 rounded-full">
              Bestseller
            </span>
          )}
        </div>

        {/* Wishlist */}
        <button
          onClick={() => toggleWishlist(p.id)}
          aria-label="Add to wishlist"
          className={`absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-md transition-all hover:scale-110 ${wished ? "text-berry" : "text-ink/70"}`}
        >
          <IconHeart filled={wished} />
        </button>

        {/* Quick view - appears on hover */}
        <button
          onClick={() => openQuickView(p)}
          className="absolute inset-x-4 bottom-4 translate-y-16 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-white text-ink py-2.5 rounded-full text-sm font-semibold flex items-center justify-center gap-2 shadow-lg"
        >
          <IconEye /> Quick View
        </button>
      </div>

      <div className="p-5 flex flex-col gap-2">
        <span className="text-[0.7rem] uppercase tracking-widest text-ink/50 font-semibold">{p.category}</span>
        <h3 className="font-display text-lg font-semibold leading-tight text-ink">{p.name}</h3>
        <p className="text-sm text-ink/60 line-clamp-2">{p.description}</p>

        <div className="flex items-center gap-1.5 mt-1">
          <div className="flex text-sun-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <IconStar key={i} filled={i < Math.round(p.rating)} />
            ))}
          </div>
          <span className="text-xs text-ink/60">
            {p.rating.toFixed(1)} <span className="text-ink/40">({p.reviews})</span>
          </span>
        </div>

        <div className="flex items-end justify-between mt-3">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-2xl font-bold text-ink">{priceINR(Math.round(finalPrice))}</span>
            {p.discount && <span className="text-sm text-ink/40 line-through">{priceINR(p.price)}</span>}
          </div>
          <button
            onClick={() => addToCart(p)}
            aria-label="Add to cart"
            className="w-11 h-11 rounded-full bg-ink text-cream flex items-center justify-center hover:bg-berry transition-all hover:scale-105 active:scale-95"
          >
            <IconBag />
          </button>
        </div>
      </div>
    </div>
  );
}
