import { useMemo, useState, useEffect } from "react";
import { products, categories } from "../data/products";
import { ProductCard } from "../components/ProductCard";

type Props = { filterCategory: string | null; onClear: () => void };

const SORTS = [
  { key: "featured", label: "Featured" },
  { key: "price-asc", label: "Price ↑" },
  { key: "price-desc", label: "Price ↓" },
  { key: "rating", label: "Top Rated" },
  { key: "new", label: "Newest" },
];

export function Shop({ filterCategory, onClear }: Props) {
  const [cat, setCat] = useState<string>("All");
  const [sort, setSort] = useState("featured");

  useEffect(() => {
    if (filterCategory) setCat(filterCategory);
  }, [filterCategory]);

  const list = useMemo(() => {
    let l = products.slice();
    if (cat !== "All") l = l.filter(p => p.category === cat);
    switch (sort) {
      case "price-asc": l.sort((a, b) => a.price - b.price); break;
      case "price-desc": l.sort((a, b) => b.price - a.price); break;
      case "rating": l.sort((a, b) => b.rating - a.rating); break;
      case "new": l.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)); break;
    }
    return l;
  }, [cat, sort]);

  return (
    <section id="shop" className="relative py-24 md:py-32 bg-gradient-to-b from-cream-2 to-cream">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div className="reveal">
            <span className="text-xs uppercase tracking-widest text-berry font-bold">Featured Collection</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight mt-3">
              Toys Made For <em className="not-italic text-berry">Big</em> Imaginations
            </h2>
          </div>
          <div className="flex items-center gap-2">
            {filterCategory && (
              <button onClick={() => { setCat("All"); onClear(); }} className="text-xs bg-ink text-cream px-3 py-2 rounded-full">
                Clear filter ×
              </button>
            )}
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-white rounded-full px-4 py-2 text-sm font-medium ring-1 ring-black/10 focus:outline-none focus:ring-berry"
            >
              {SORTS.map(s => <option key={s.key} value={s.key}>Sort · {s.label}</option>)}
            </select>
          </div>
        </div>

        {/* Category chips */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-4 mb-8 -mx-4 px-4">
          {["All", ...categories.map(c => c.name)].map(c => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold ring-1 transition-all ${
                cat === c
                  ? "bg-ink text-cream ring-ink"
                  : "bg-white text-ink/70 ring-black/10 hover:bg-cream-2"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {list.slice(0, 8).map(p => (
            <div key={p.id} className="reveal"><ProductCard p={p} /></div>
          ))}
        </div>

        {list.length > 8 && (
          <div className="mt-12 text-center">
            <button className="bg-ink text-cream px-8 py-4 rounded-full font-semibold hover:bg-berry transition">
              View All {list.length} Products
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
