const ITEMS = [
  "SAFE MATERIALS", "★ 4.9 PARENT RATED", "MADE IN INDIA", "FAST DELIVERY", "EASY RETURNS",
  "GIFT WRAPPED", "BIS CERTIFIED", "SECURE PAYMENTS",
];

export function TrustBar() {
  return (
    <section className="bg-ink text-cream py-5 overflow-hidden">
      <div className="marquee-track flex whitespace-nowrap gap-10 text-sm font-semibold tracking-widest">
        {Array.from({ length: 3 }).map((_, k) => (
          <div key={k} className="flex items-center gap-10 shrink-0">
            {ITEMS.map(i => (
              <span key={i} className="flex items-center gap-10">
                {i} <span className="text-berry">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
