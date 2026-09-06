import { categories } from "../data/products";
import { IconArrow } from "../components/Icons";

export function Categories({ onPick }: { onPick: (cat: string) => void }) {
  return (
    <section id="categories" className="relative py-24 md:py-32 bg-cream">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl reveal">
            <span className="text-xs uppercase tracking-widest text-berry font-bold">Shop by Category</span>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mt-3">
              Find Their Next
              <br />
              <em className="not-italic text-berry">Favorite</em> Toy
            </h2>
          </div>
          <p className="text-ink/70 max-w-sm reveal">
            From cuddly companions to brain-boosting adventures — every category is curated with joy in mind.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {categories.map((c, i) => (
            <button
              key={c.name}
              onClick={() => onPick(c.name)}
              className={`reveal group relative aspect-[3/4] rounded-3xl overflow-hidden text-left bg-gradient-to-br ${c.color} ring-1 ring-black/5 hover:ring-black/10 transition-all hover:-translate-y-2 hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.25)]`}
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className="w-full h-full object-cover rounded-2xl mix-blend-multiply opacity-90 transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 bg-gradient-to-t from-black/60 to-transparent">
                <div className="flex items-end justify-between gap-2">
                  <h3 className="font-display font-bold text-white text-lg md:text-xl leading-tight">{c.name}</h3>
                  <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all">
                    <IconArrow className="w-4 h-4" />
                  </span>
                </div>
                <span className="text-[0.7rem] uppercase tracking-widest text-white/80 font-semibold">Explore →</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
