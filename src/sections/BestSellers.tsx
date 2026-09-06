import { useRef } from "react";
import { products } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { IconArrow } from "../components/Icons";

export function BestSellers() {
  const scroller = useRef<HTMLDivElement>(null);
  const items = products.filter(p => p.isBestseller);

  const scroll = (dir: number) => {
    scroller.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section id="best" className="relative py-24 md:py-32 bg-cream">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="flex items-end justify-between gap-4 mb-10">
          <div className="reveal">
            <span className="text-xs uppercase tracking-widest text-berry font-bold">Best Sellers</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight mt-3">
              Everyone's <em className="not-italic text-berry">Favorites</em>
            </h2>
            <p className="text-ink/60 mt-3 max-w-lg">The toys parents keep coming back for — loved, rated and delivered thousands of times.</p>
          </div>
          <div className="hidden md:flex gap-2">
            <button onClick={() => scroll(-1)} aria-label="Prev" className="w-11 h-11 rounded-full bg-white ring-1 ring-black/10 flex items-center justify-center hover:bg-ink hover:text-cream transition"><IconArrow className="w-4 h-4 rotate-180" /></button>
            <button onClick={() => scroll(1)} aria-label="Next" className="w-11 h-11 rounded-full bg-white ring-1 ring-black/10 flex items-center justify-center hover:bg-ink hover:text-cream transition"><IconArrow className="w-4 h-4" /></button>
          </div>
        </div>

        <div
          ref={scroller}
          className="flex gap-5 md:gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 -mx-4 px-4"
        >
          {items.map(p => (
            <div key={p.id} className="snap-start shrink-0 w-[75vw] sm:w-[45vw] md:w-[320px]">
              <ProductCard p={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
