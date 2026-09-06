import { ageGroups, products } from "../data/products";
import { useState } from "react";
import { priceINR } from "../data/products";
import { useStore } from "../store";

export function ByAge() {
  const [active, setActive] = useState(ageGroups[1].label);
  const list = products.filter(p => p.ageGroup === active).slice(0, 4);
  const { openQuickView } = useStore();

  return (
    <section className="relative py-24 md:py-32 bg-cream overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="text-center mb-14 reveal">
          <span className="text-xs uppercase tracking-widest text-berry font-bold">Shop By Age</span>
          <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] mt-3">
            The <em className="not-italic text-berry">Right Toy</em> For
            <br />Every Little Moment
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12 reveal">
          {ageGroups.map(a => {
            const isActive = active === a.label;
            const bgMap: Record<string, string> = {
              "bg-peach": "#FFB59A",
              "bg-sun": "#FFC94A",
              "bg-mint": "#7BD3B7",
              "bg-sky": "#7EC8E3",
              "bg-lav": "#C7A9F5",
            };
            return (
              <button
                key={a.label}
                onClick={() => setActive(a.label)}
                className={`px-6 py-4 rounded-2xl font-semibold transition-all text-left min-w-[140px] hover:-translate-y-1 ${
                  isActive ? "text-cream shadow-2xl -translate-y-1" : "text-ink"
                }`}
                style={{
                  background: isActive ? "#1A1613" : bgMap[a.color] || "#FFF",
                }}
              >
                <div className="text-[0.65rem] uppercase tracking-widest opacity-70">{a.tag}</div>
                <div className="font-display text-lg">{a.label}</div>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {list.map(p => (
            <button
              key={p.id}
              onClick={() => openQuickView(p)}
              className="reveal group bg-white rounded-3xl overflow-hidden ring-1 ring-black/5 hover:shadow-xl hover:-translate-y-1 transition-all text-left"
            >
              <div className="aspect-square overflow-hidden bg-cream-2">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-4">
                <h4 className="font-display font-semibold line-clamp-1">{p.name}</h4>
                <div className="flex items-center justify-between mt-2">
                  <span className="font-display text-lg font-bold text-berry">{priceINR(p.price)}</span>
                  <span className="text-xs text-ink/50">★ {p.rating}</span>
                </div>
              </div>
            </button>
          ))}
          {list.length === 0 && (
            <div className="col-span-full text-center text-ink/60 py-10">No products in this age group yet.</div>
          )}
        </div>
      </div>
    </section>
  );
}
