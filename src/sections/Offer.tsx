import { IconArrow } from "../components/Icons";

export function Offer() {
  return (
    <section className="relative py-16 md:py-24 bg-cream">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-berry via-berry-2 to-[#8f0f45] text-cream p-8 md:p-16 lg:p-20 min-h-[420px] grain">
          {/* Floating decorative elements */}
          <div className="absolute -top-10 -right-10 w-64 h-64 blob bg-sun/30 blur-2xl float-1 pointer-events-none" />
          <div className="absolute -bottom-16 -left-10 w-72 h-72 blob-2 bg-lav/30 blur-2xl float-2 pointer-events-none" />
          <div className="absolute top-8 right-8 md:top-16 md:right-24 text-6xl float-3">🎁</div>
          <div className="absolute bottom-10 right-12 md:right-40 text-5xl float-1">🧸</div>
          <div className="absolute top-1/2 right-4 md:right-16 text-4xl float-2">⭐</div>

          <div className="relative max-w-2xl">
            <span className="inline-block bg-cream/20 backdrop-blur px-4 py-1.5 rounded-full text-xs uppercase tracking-widest font-bold ring-1 ring-cream/30">
              Limited Time · This Week Only
            </span>
            <h2 className="reveal font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mt-5">
              JOY OF THE
              <br />
              <span className="italic text-sun">WEEK</span>
            </h2>
            <p className="reveal text-2xl md:text-3xl font-display font-semibold mt-4">
              Up to <span className="text-sun">30% OFF</span> on selected toys
            </p>
            <p className="reveal mt-3 text-cream/80 max-w-md">
              A hand-picked selection of our most-loved toys — priced to bring extra smiles this week.
            </p>
            <a href="#shop" className="reveal mt-8 inline-flex items-center gap-2 bg-cream text-ink px-7 py-4 rounded-full font-semibold hover:bg-sun transition group">
              SHOP THE OFFER
              <IconArrow className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-cream/80">
              <span>✓ Free shipping over ₹1,499</span>
              <span>✓ Same-day dispatch</span>
              <span>✓ 7-day easy returns</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
