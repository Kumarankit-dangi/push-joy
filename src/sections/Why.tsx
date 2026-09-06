const FEATURES = [
  {
    icon: "🛡️",
    title: "Safe & Quality Tested",
    text: "Every toy is BIS/EN71 certified — non-toxic materials, no sharp edges, tested by parents.",
    color: "bg-mint/25",
  },
  {
    icon: "🚚",
    title: "Fast Delivery Across India",
    text: "Same-day dispatch from our Kolkata warehouse. Delivered in 2–4 days pan-India.",
    color: "bg-sun/30",
  },
  {
    icon: "↩️",
    title: "Easy Returns",
    text: "Not the right smile? Return it within 7 days. No hassle, no questions.",
    color: "bg-lav/25",
  },
  {
    icon: "💛",
    title: "Made for Happy Childhoods",
    text: "Curated by parents, loved by kids. Every toy earns its place on our shelves.",
    color: "bg-peach/50",
  },
];

export function Why() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-cream-2">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-berry font-bold reveal">Why PLUSH JOY</span>
          <h2 className="reveal font-display text-4xl md:text-6xl font-bold leading-tight mt-3">
            Built On <em className="not-italic text-berry">Trust</em>, Delivered With Love
          </h2>
          <p className="reveal mt-5 text-ink/70 text-lg">
            We're a small Kolkata team obsessed with childhood. Every toy we sell has to pass one final test — the smile it puts on a child's face.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className="reveal relative bg-white rounded-3xl p-7 ring-1 ring-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className={`w-16 h-16 rounded-2xl ${f.color} flex items-center justify-center text-3xl mb-5 group-hover:rotate-6 transition-transform`}>
                {f.icon}
              </div>
              <h3 className="font-display text-xl font-bold leading-tight">{f.title}</h3>
              <p className="mt-3 text-sm text-ink/60 leading-relaxed">{f.text}</p>
              <div className="mt-5 text-[0.7rem] uppercase tracking-widest font-bold text-berry">0{i + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
