import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-cream overflow-hidden">
      <div className="absolute top-20 -left-20 w-80 h-80 blob bg-sun/30 blur-3xl float-1 pointer-events-none" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 blob-2 bg-mint/30 blur-3xl float-2 pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="reveal">
          <span className="text-xs uppercase tracking-widest text-berry font-bold">Contact Us</span>
          <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.9] mt-3">
            LET'S MAKE
            <br />
            SOMEONE
            <br />
            <em className="not-italic text-berry">SMILE.</em>
          </h2>
          <p className="mt-5 text-lg text-ink/70 max-w-md">
            Questions, wholesale enquiries, birthday-gift ideas or just a friendly hello — we'd love to hear from you.
          </p>

          <div className="mt-8 space-y-4">
            <ContactRow emoji="📞" label="Call us" value="+91 98765 43210" />
            <ContactRow emoji="✉️" label="Email" value="hello@plushjoy.in" />
            <ContactRow emoji="📍" label="Visit" value="Park Street, Kolkata 700016" />
            <ContactRow emoji="🕙" label="Hours" value="Mon–Sat · 10am to 8pm" />
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 4000); }}
          className="reveal bg-white rounded-[2rem] p-8 md:p-10 shadow-xl ring-1 ring-black/5"
        >
          <h3 className="font-display text-2xl font-bold mb-6">Send us a note</h3>

          <div className="space-y-4">
            <Field label="Your Name" name="name" placeholder="Aarohi Roy" required />
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Email" type="email" name="email" placeholder="you@email.com" required />
              <Field label="Phone" type="tel" name="phone" placeholder="+91 98765 43210" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest font-bold text-ink/60">Message</label>
              <textarea
                required
                rows={4}
                placeholder="Tell us what would make your child smile…"
                className="mt-2 w-full bg-cream rounded-2xl px-4 py-3 text-sm border border-transparent focus:border-berry focus:outline-none transition"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-ink text-cream py-4 rounded-full font-semibold hover:bg-berry transition"
            >
              {sent ? "✓ Thanks — we'll reply soon!" : "GET IN TOUCH →"}
            </button>
            <p className="text-xs text-ink/50 text-center">We reply within 24 hours (usually much faster).</p>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest font-bold text-ink/60">{label}</label>
      <input
        {...props}
        className="mt-2 w-full bg-cream rounded-2xl px-4 py-3 text-sm border border-transparent focus:border-berry focus:outline-none transition"
      />
    </div>
  );
}

function ContactRow({ emoji, label, value }: { emoji: string; label: string; value: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-2xl bg-white ring-1 ring-black/5 flex items-center justify-center text-xl">{emoji}</div>
      <div>
        <div className="text-[0.65rem] uppercase tracking-widest text-ink/40 font-bold">{label}</div>
        <div className="font-semibold text-ink">{value}</div>
      </div>
    </div>
  );
}
