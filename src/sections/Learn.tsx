const PILLARS = [
  { emoji: "🎨", title: "Creativity", desc: "Open-ended play unlocks imagination and self-expression." },
  { emoji: "🧩", title: "Problem Solving", desc: "Puzzles and building sets build patient, curious minds." },
  { emoji: "🚀", title: "Imagination", desc: "Every toy becomes a doorway to another world." },
  { emoji: "🤸", title: "Motor Skills", desc: "From grasping to balancing — playful movement, every day." },
  { emoji: "📚", title: "Learning Through Play", desc: "Alphabets, numbers and stories woven into fun." },
];

export function Learn() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-cream to-cream-2 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 reveal">
          <span className="text-xs uppercase tracking-widest text-berry font-bold">Play. Learn. Grow.</span>
          <h2 className="font-display text-5xl md:text-6xl font-bold leading-[0.95] mt-3">
            Toys That Help
            <br />
            Little Minds
            <br />
            <em className="not-italic text-berry">Flourish.</em>
          </h2>
          <p className="mt-5 text-ink/70 text-lg max-w-md">
            At Plush Joy, we believe play is the language of childhood. Every toy on our shelf is chosen for how it stretches imagination, sparks curiosity and grows a happier, more confident child.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#shop" className="bg-ink text-cream px-6 py-3 rounded-full text-sm font-semibold hover:bg-berry transition">Shop Learning Toys</a>
            <a href="#categories" className="bg-white text-ink px-6 py-3 rounded-full text-sm font-semibold ring-1 ring-black/10 hover:bg-cream-2 transition">Browse Categories</a>
          </div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-4">
          {PILLARS.map((p, i) => (
            <div
              key={p.title}
              className={`reveal bg-white rounded-3xl p-6 ring-1 ring-black/5 hover:-translate-y-1 hover:shadow-xl transition-all ${i === 0 ? "md:row-span-2 md:col-span-1" : ""}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="text-4xl mb-3">{p.emoji}</div>
              <h3 className="font-display text-xl font-bold">{p.title}</h3>
              <p className="text-sm text-ink/60 mt-2 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
