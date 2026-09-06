export function Location() {
  return (
    <section className="relative py-24 md:py-32 bg-cream-2 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <span className="text-xs uppercase tracking-widest text-berry font-bold">Our Home</span>
          <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] mt-3">
            HELLO,
            <br />
            <em className="not-italic text-berry">KOLKATA!</em>
          </h2>
          <p className="mt-5 text-lg text-ink/70 max-w-lg leading-relaxed">
            Bringing playful moments and unforgettable childhood memories to families across the City of Joy — and now, to every corner of India.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <InfoBlock label="Visit us" value={<>Plush Joy Flagship Store<br />Park Street, Kolkata 700016</>} />
            <InfoBlock label="Call us" value={<>+91 98765 43210<br />Mon–Sat · 10am–8pm</>} />
            <InfoBlock label="Email" value={<>hello@plushjoy.in<br />support@plushjoy.in</>} />
            <InfoBlock label="Region" value={<>Kolkata, West Bengal<br />India · 700001</>} />
          </div>

          <a href="#contact" className="mt-8 inline-flex items-center gap-2 bg-ink text-cream px-6 py-3 rounded-full text-sm font-semibold hover:bg-berry transition">
            Get Directions →
          </a>
        </div>

        <div className="relative reveal">
          {/* Elegant illustrated map */}
          <div className="relative aspect-square rounded-[2rem] overflow-hidden bg-gradient-to-br from-mint/30 via-sun/20 to-berry/20 ring-1 ring-black/10 shadow-2xl">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              <defs>
                <pattern id="dot" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
                  <circle cx="9" cy="9" r="1" fill="#1A161320" />
                </pattern>
                <linearGradient id="river" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#7EC8E3" />
                  <stop offset="100%" stopColor="#7BD3B7" />
                </linearGradient>
              </defs>
              <rect width="400" height="400" fill="url(#dot)" />
              {/* Hooghly river */}
              <path
                d="M40 20 C 100 80, 90 180, 140 220 S 180 340, 220 400"
                stroke="url(#river)"
                strokeWidth="18"
                fill="none"
                opacity="0.6"
                strokeLinecap="round"
              />
              {/* Roads */}
              <path d="M0 260 L400 220" stroke="#1A1613" strokeWidth="1" opacity="0.15" />
              <path d="M0 140 L400 180" stroke="#1A1613" strokeWidth="1" opacity="0.15" />
              <path d="M180 0 L220 400" stroke="#1A1613" strokeWidth="1" opacity="0.15" />
              <path d="M280 0 L310 400" stroke="#1A1613" strokeWidth="1" opacity="0.15" />

              {/* Landmarks */}
              <g fontFamily="Inter" fontSize="8" fill="#1A1613">
                <circle cx="120" cy="180" r="3" fill="#1A1613" opacity="0.5" />
                <text x="128" y="184">Howrah Bridge</text>
                <circle cx="290" cy="170" r="3" fill="#1A1613" opacity="0.5" />
                <text x="298" y="174">Salt Lake</text>
                <circle cx="240" cy="260" r="3" fill="#1A1613" opacity="0.5" />
                <text x="248" y="264">Victoria Memorial</text>
                <circle cx="180" cy="310" r="3" fill="#1A1613" opacity="0.5" />
                <text x="188" y="314">Alipore</text>
              </g>

              {/* Pin */}
              <g transform="translate(220, 200)">
                <circle r="28" fill="#E63973" opacity="0.2" className="spin-slow" />
                <circle r="18" fill="#E63973" opacity="0.35" />
                <circle r="10" fill="#E63973" />
                <path d="M0 -30 L6 -18 L-6 -18 Z" fill="#E63973" />
                <text y="-40" textAnchor="middle" fontFamily="Fraunces" fontSize="14" fontWeight="800" fill="#1A1613">Plush Joy</text>
                <text y="-26" textAnchor="middle" fontFamily="Inter" fontSize="7" fill="#1A1613" letterSpacing="2">PARK STREET</text>
              </g>
            </svg>

            {/* Location card overlay */}
            <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur rounded-2xl p-4 shadow-xl flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-berry text-white flex items-center justify-center text-xl">📍</div>
              <div className="flex-1">
                <div className="font-display font-bold">Kolkata, West Bengal</div>
                <div className="text-xs text-ink/60">India · The City of Joy</div>
              </div>
              <div className="text-right">
                <div className="text-[0.65rem] uppercase text-ink/40 tracking-widest">Open Now</div>
                <div className="text-xs font-semibold text-mint">● Live</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoBlock({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl p-4 ring-1 ring-black/5">
      <div className="text-[0.65rem] uppercase tracking-widest text-ink/40 font-bold mb-1">{label}</div>
      <div className="text-sm font-medium text-ink leading-relaxed">{value}</div>
    </div>
  );
}
