import { products } from "../data/products";
import { IconArrow } from "../components/Icons";
import { priceINR } from "../data/products";
import { useStore } from "../store";

export function NewArrivals() {
  const items = products.filter(p => p.isNew).slice(0, 4);
  const [big, ...rest] = items;
  const { openQuickView } = useStore();

  return (
    <section id="new" className="relative py-24 md:py-32 bg-ink text-cream overflow-hidden">
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] blob bg-berry/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] blob-2 bg-sun/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="reveal">
            <span className="text-xs uppercase tracking-widest text-sun font-bold">Just Landed</span>
            <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] mt-3">
              JUST
              <br />
              <span className="text-berry italic">LANDED.</span>
            </h2>
            <p className="mt-4 text-cream/70 max-w-md">
              Fresh toys. Fresh adventures. Fresh reasons to smile — straight from our latest curation.
            </p>
          </div>
          <a href="#shop" className="group inline-flex items-center gap-2 bg-cream text-ink px-6 py-3 rounded-full font-semibold hover:bg-sun transition">
            View All New Arrivals
            <IconArrow className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {big && (
            <button
              onClick={() => openQuickView(big)}
              className="reveal group relative aspect-[4/5] md:aspect-auto rounded-3xl overflow-hidden text-left bg-gradient-to-br from-berry/30 to-sun/20"
            >
              <img src={big.image} alt={big.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
              <div className="absolute top-6 left-6 bg-cream text-ink text-[0.7rem] uppercase tracking-widest px-3 py-1.5 rounded-full font-bold">
                Editor's Pick
              </div>
              <div className="absolute inset-x-0 bottom-0 p-8">
                <div className="text-sun text-xs uppercase tracking-widest font-bold mb-2">{big.category}</div>
                <h3 className="font-display text-3xl md:text-5xl font-bold leading-tight">{big.name}</h3>
                <p className="mt-3 text-cream/70 max-w-md">{big.description}</p>
                <div className="mt-5 flex items-center gap-4">
                  <span className="font-display text-3xl font-bold">{priceINR(big.price)}</span>
                  <span className="inline-flex items-center gap-2 text-sm">
                    Discover <IconArrow className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </button>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {rest.map((p, i) => (
              <button
                key={p.id}
                onClick={() => openQuickView(p)}
                className="reveal group relative aspect-square rounded-3xl overflow-hidden text-left bg-cream/5"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-xl font-semibold leading-tight">{p.name}</h3>
                  <div className="text-sm text-cream/60 mt-1">{priceINR(p.price)}</div>
                </div>
                <span className="absolute top-4 right-4 bg-berry text-white text-[0.65rem] uppercase tracking-widest px-2.5 py-1 rounded-full font-bold">New</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
