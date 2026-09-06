import { useEffect, useState } from "react";
import { IconArrow } from "../components/Icons";

export function Hero() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const on = () => setY(window.scrollY);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <section id="top" className="relative overflow-hidden bg-cream grain">
      {/* Background blobs */}
      <div className="absolute -top-32 -left-32 w-[550px] h-[550px] blob bg-peach/40 blur-3xl float-1 pointer-events-none" />
      <div className="absolute top-40 -right-40 w-[500px] h-[500px] blob-2 bg-sun/40 blur-3xl float-2 pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] blob bg-mint/40 blur-3xl float-3 pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-4 md:px-6 pt-10 md:pt-16 pb-16 md:pb-24 grid lg:grid-cols-12 gap-10 items-center">
        {/* Text */}
        <div className="lg:col-span-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur px-4 py-2 rounded-full text-xs uppercase tracking-widest font-semibold ring-1 ring-black/5 reveal">
            <span className="w-2 h-2 rounded-full bg-berry animate-pulse" />
            New Winter Collection · 2026
          </div>

          <h1 className="reveal font-display font-black tracking-tight leading-[0.9] mt-6 text-[3.4rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem]">
            <span className="block">LET</span>
            <span className="block text-shimmer">CHILDHOOD</span>
            <span className="block">BEGIN <em className="not-italic squiggle">HERE.</em></span>
          </h1>

          <p className="reveal mt-6 text-lg md:text-xl text-ink/70 max-w-xl leading-relaxed">
            Discover toys that spark imagination, creativity and endless smiles. Handpicked joy delivered from our little corner in Kolkata to your home.
          </p>

          <div className="reveal mt-8 flex flex-wrap gap-3">
            <a href="#shop" className="group inline-flex items-center gap-2 bg-ink text-cream px-7 py-4 rounded-full font-semibold hover:bg-berry transition-all hover:shadow-[0_20px_40px_-15px_rgba(230,57,115,0.6)] hover:-translate-y-0.5">
              SHOP TOYS
              <IconArrow className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#categories" className="inline-flex items-center gap-2 bg-white/80 backdrop-blur text-ink px-7 py-4 rounded-full font-semibold ring-1 ring-black/10 hover:bg-white hover:-translate-y-0.5 transition-all">
              EXPLORE COLLECTION
            </a>
          </div>

          <div className="reveal mt-12 grid grid-cols-3 gap-4 max-w-md">
            <Stat n="500+" l="Happy Toys" />
            <Stat n="20K+" l="Little Smiles" />
            <Stat n="4.9★" l="Rated by Parents" />
          </div>
        </div>

        {/* Image */}
        <div className="lg:col-span-6 relative">
          <div className="relative aspect-[4/4.4] max-w-[620px] mx-auto">
            <div
              className="absolute inset-0 blob bg-gradient-to-br from-berry/20 via-sun/30 to-mint/30"
              style={{ transform: `translateY(${y * 0.03}px) rotate(${y * 0.02}deg)` }}
            />
            <img
              src="/images/hero-toys.png"
              alt="Colorful premium toys arrangement featuring teddy bear, race car, blocks and rainbow stacker"
              className="relative w-full h-full object-contain drop-shadow-[0_40px_50px_rgba(0,0,0,0.15)]"
              style={{ transform: `translateY(${y * -0.05}px)` }}
            />

            {/* Floating accent chips */}
            <div className="absolute top-8 -left-2 md:-left-6 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 float-1">
              <div className="w-10 h-10 rounded-full bg-sun/40 flex items-center justify-center text-xl">🎁</div>
              <div>
                <div className="text-xs text-ink/50">Free Gift</div>
                <div className="font-semibold text-sm">Wrapping</div>
              </div>
            </div>
            <div className="absolute bottom-16 -right-2 md:-right-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 float-2">
              <div className="w-10 h-10 rounded-full bg-mint/40 flex items-center justify-center text-xl">🚚</div>
              <div>
                <div className="text-xs text-ink/50">Delivered in</div>
                <div className="font-semibold text-sm">2-4 Days</div>
              </div>
            </div>
            <div className="absolute top-1/2 -right-2 md:right-6 bg-white rounded-2xl shadow-xl px-4 py-2 float-3">
              <div className="text-[0.65rem] uppercase tracking-widest text-ink/40">Rating</div>
              <div className="font-display text-2xl font-bold flex items-center gap-1">4.9 <span className="text-sun-2">★</span></div>
            </div>

            {/* Spinning badge */}
            <div className="absolute -bottom-6 -left-2 md:left-4 w-28 h-28 spin-slow">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <path id="circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
                </defs>
                <circle cx="50" cy="50" r="46" fill="#1A1613" />
                <text fontSize="9.5" fontWeight="700" fill="#FBF7F1" letterSpacing="2">
                  <textPath href="#circle">PLUSH JOY · MADE IN KOLKATA · SINCE 2020 · </textPath>
                </text>
                <text x="50" y="55" textAnchor="middle" fontSize="18" fill="#FFC94A">★</text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom marquee */}
      <div className="relative py-4 border-y border-black/10 bg-cream overflow-hidden">
        <div className="marquee-track flex whitespace-nowrap gap-12 text-2xl md:text-3xl font-display font-semibold text-ink/80">
          {Array.from({ length: 3 }).map((_, k) => (
            <div key={k} className="flex items-center gap-12 shrink-0">
              <span>Play more.</span><span className="text-berry">✦</span>
              <span>Smile bigger.</span><span className="text-sun-2">✦</span>
              <span>Grow together.</span><span className="text-mint">✦</span>
              <span>Made in India.</span><span className="text-lav">✦</span>
              <span>Delivered with love.</span><span className="text-berry">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-display text-3xl md:text-4xl font-bold">{n}</div>
      <div className="text-xs text-ink/60 mt-1">{l}</div>
    </div>
  );
}
