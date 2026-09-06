type Props = { className?: string; dark?: boolean };

export function Logo({ className = "", dark = false }: Props) {
  const ink = dark ? "#FBF7F1" : "#1A1613";
  return (
    <a href="#top" className={`inline-flex items-center gap-2 group ${className}`} aria-label="PLUSH JOY home">
      <span className="relative inline-block w-10 h-10 shrink-0">
        <svg viewBox="0 0 48 48" className="w-full h-full transition-transform duration-500 group-hover:rotate-[18deg]">
          <defs>
            <linearGradient id="pj-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#E63973" />
              <stop offset="60%" stopColor="#FF7A3C" />
              <stop offset="100%" stopColor="#FFC94A" />
            </linearGradient>
          </defs>
          {/* Star / spark */}
          <path
            d="M24 3 L28.8 17.2 L43.5 18.1 L31.9 27 L36.2 41.2 L24 32.9 L11.8 41.2 L16.1 27 L4.5 18.1 L19.2 17.2 Z"
            fill="url(#pj-grad)"
          />
          {/* Smile */}
          <path
            d="M18 24 Q24 30 30 24"
            stroke={ink}
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
          />
          {/* Eyes */}
          <circle cx="20" cy="20.5" r="1.4" fill={ink} />
          <circle cx="28" cy="20.5" r="1.4" fill={ink} />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className="font-display font-black tracking-tight text-[1.35rem]"
          style={{ color: ink, letterSpacing: "-0.03em" }}
        >
          PLUSH<span style={{ color: "#E63973" }}>JOY</span>
        </span>
        <span
          className="text-[0.55rem] uppercase tracking-[0.25em] font-medium mt-0.5"
          style={{ color: dark ? "#FBF7F1AA" : "#1A161388" }}
        >
          Toys of Kolkata
        </span>
      </span>
    </a>
  );
}
