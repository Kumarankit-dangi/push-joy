import { useMemo, useState } from "react";
import { useStore } from "../store";
import { IconX, IconPlus, IconMinus, IconTrash, IconSearch, IconHeart, IconBag, IconStar } from "./Icons";
import { priceINR, products } from "../data/products";

export function CartDrawer() {
  const { cart, cartOpen, closeCart, setQty, removeFromCart, cartTotal, addToCart } = useStore();
  const [checkout, setCheckout] = useState(false);

  if (!cartOpen) return null;

  const shipping = cartTotal > 1499 || cartTotal === 0 ? 0 : 99;
  const grand = cartTotal + shipping;

  return (
    <div className="fixed inset-0 z-50 fade-in">
      <div className="absolute inset-0 bg-ink/40 backdrop-blur-sm" onClick={closeCart} />
      <aside className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-cream slide-in-right flex flex-col shadow-2xl">
        <div className="flex items-center justify-between p-5 border-b border-black/5">
          <div>
            <h3 className="font-display text-2xl font-bold">Your Bag</h3>
            <p className="text-xs text-ink/50">{cart.length} {cart.length === 1 ? "item" : "items"}</p>
          </div>
          <button onClick={closeCart} className="w-10 h-10 rounded-full bg-white flex items-center justify-center"><IconX /></button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center mb-6">
              <IconBag className="w-10 h-10 text-ink/40" />
            </div>
            <h4 className="font-display text-xl font-semibold mb-2">Your bag feels lonely</h4>
            <p className="text-sm text-ink/60 mb-6">Add some joy to make it happy!</p>
            <button onClick={closeCart} className="bg-ink text-cream px-6 py-3 rounded-full text-sm font-semibold hover:bg-berry transition">
              Continue Shopping
            </button>
            <div className="mt-10 w-full">
              <p className="text-xs uppercase tracking-widest text-ink/40 mb-3">Popular right now</p>
              <div className="grid grid-cols-2 gap-3">
                {products.slice(0, 2).map(p => (
                  <button
                    key={p.id}
                    onClick={() => addToCart(p)}
                    className="text-left bg-white rounded-2xl p-3 hover:shadow-md transition"
                  >
                    <img src={p.image} alt={p.name} className="w-full aspect-square object-cover rounded-xl mb-2" />
                    <div className="text-xs font-semibold line-clamp-1">{p.name}</div>
                    <div className="text-xs text-berry font-bold">{priceINR(p.price)}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : checkout ? (
          <CheckoutView total={grand} onBack={() => setCheckout(false)} onDone={() => { setCheckout(false); closeCart(); }} />
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
              {cart.map(({ product, qty }) => {
                const line = product.price * (1 - (product.discount ?? 0) / 100) * qty;
                return (
                  <div key={product.id} className="flex gap-3 bg-white rounded-2xl p-3">
                    <img src={product.image} alt={product.name} className="w-20 h-20 rounded-xl object-cover" />
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between gap-2">
                        <h4 className="font-semibold text-sm line-clamp-2">{product.name}</h4>
                        <button onClick={() => removeFromCart(product.id)} aria-label="Remove" className="text-ink/40 hover:text-berry"><IconTrash /></button>
                      </div>
                      <div className="text-[11px] text-ink/50 mt-0.5">{product.category} · {product.ageGroup}</div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-1 bg-cream rounded-full p-1">
                          <button aria-label="Decrease" onClick={() => setQty(product.id, qty - 1)} className="w-7 h-7 rounded-full bg-white flex items-center justify-center"><IconMinus /></button>
                          <span className="w-8 text-center text-sm font-semibold">{qty}</span>
                          <button aria-label="Increase" onClick={() => setQty(product.id, qty + 1)} className="w-7 h-7 rounded-full bg-white flex items-center justify-center"><IconPlus /></button>
                        </div>
                        <span className="font-display font-bold text-berry">{priceINR(Math.round(line))}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-5 border-t border-black/5 bg-white/60 space-y-3">
              <Row label="Subtotal" value={priceINR(Math.round(cartTotal))} />
              <Row label="Shipping" value={shipping === 0 ? "FREE" : priceINR(shipping)} accent={shipping === 0} />
              <div className="border-t border-black/10 pt-3 flex justify-between items-baseline">
                <span className="text-sm">Total</span>
                <span className="font-display text-2xl font-bold">{priceINR(Math.round(grand))}</span>
              </div>
              <button
                onClick={() => setCheckout(true)}
                className="w-full bg-ink text-cream py-4 rounded-full font-semibold hover:bg-berry transition"
              >
                Proceed to Checkout →
              </button>
              <button onClick={closeCart} className="w-full text-center text-sm text-ink/60 hover:text-ink py-1">
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );

  function Row({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
    return (
      <div className="flex justify-between text-sm">
        <span className="text-ink/60">{label}</span>
        <span className={accent ? "text-mint font-bold" : "font-semibold"}>{value}</span>
      </div>
    );
  }
}

function CheckoutView({ total, onBack, onDone }: { total: number; onBack: () => void; onDone: () => void }) {
  const [placed, setPlaced] = useState(false);
  if (placed) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
        <div className="w-24 h-24 rounded-full bg-mint/40 flex items-center justify-center mb-6 text-4xl">🎉</div>
        <h4 className="font-display text-2xl font-bold mb-2">Order Confirmed!</h4>
        <p className="text-sm text-ink/60 mb-6">A little burst of joy is on its way to your doorstep.</p>
        <button onClick={onDone} className="bg-ink text-cream px-6 py-3 rounded-full text-sm font-semibold">Keep Shopping</button>
      </div>
    );
  }
  return (
    <form
      className="flex-1 overflow-y-auto p-5 space-y-3"
      onSubmit={(e) => { e.preventDefault(); setPlaced(true); }}
    >
      <button type="button" onClick={onBack} className="text-sm text-ink/60 hover:text-ink mb-2">← Back to bag</button>
      <h4 className="font-display text-xl font-bold">Shipping Details</h4>
      <Input placeholder="Full Name" required />
      <Input placeholder="Email" type="email" required />
      <Input placeholder="Phone" type="tel" required />
      <Input placeholder="Address" required />
      <div className="grid grid-cols-2 gap-3">
        <Input placeholder="City" defaultValue="Kolkata" required />
        <Input placeholder="Pincode" required />
      </div>
      <h4 className="font-display text-xl font-bold pt-4">Payment</h4>
      <div className="grid grid-cols-2 gap-3">
        <PayOption label="UPI" emoji="📱" active />
        <PayOption label="Card" emoji="💳" />
        <PayOption label="COD" emoji="💵" />
        <PayOption label="Net Banking" emoji="🏦" />
      </div>
      <button type="submit" className="w-full bg-berry text-white py-4 rounded-full font-semibold mt-4 hover:bg-berry-2 transition">
        Place Order · {priceINR(Math.round(total))}
      </button>
    </form>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full bg-white rounded-2xl px-4 py-3 text-sm border border-transparent focus:border-berry focus:outline-none transition"
    />
  );
}
function PayOption({ label, emoji, active }: { label: string; emoji: string; active?: boolean }) {
  return (
    <label className={`flex items-center gap-2 bg-white rounded-2xl px-4 py-3 text-sm cursor-pointer border ${active ? "border-berry" : "border-transparent"}`}>
      <input type="radio" name="pay" defaultChecked={active} className="accent-berry" />
      <span>{emoji}</span> {label}
    </label>
  );
}

export function SearchModal() {
  const { searchOpen, closeSearch, addToCart } = useStore();
  const [q, setQ] = useState("");
  const results = useMemo(() => {
    if (!q.trim()) return products.slice(0, 6);
    const s = q.toLowerCase();
    return products.filter(p =>
      p.name.toLowerCase().includes(s) ||
      p.category.toLowerCase().includes(s) ||
      p.description.toLowerCase().includes(s) ||
      p.ageGroup.toLowerCase().includes(s)
    ).slice(0, 8);
  }, [q]);

  if (!searchOpen) return null;
  return (
    <div className="fixed inset-0 z-50 fade-in">
      <div className="absolute inset-0 bg-ink/40 backdrop-blur-md" onClick={closeSearch} />
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[95%] max-w-2xl bg-cream rounded-3xl shadow-2xl overflow-hidden">
        <div className="flex items-center gap-3 p-4 border-b border-black/5">
          <IconSearch className="w-5 h-5 text-ink/50" />
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search for teddy bears, RC cars, blocks..."
            className="flex-1 bg-transparent outline-none text-lg"
          />
          <button onClick={closeSearch} className="w-9 h-9 rounded-full bg-white flex items-center justify-center"><IconX /></button>
        </div>
        <div className="max-h-[60vh] overflow-y-auto p-3">
          {results.length === 0 ? (
            <div className="p-10 text-center text-ink/60">No toys found. Try something else!</div>
          ) : (
            <ul className="divide-y divide-black/5">
              {results.map(p => (
                <li key={p.id} className="flex items-center gap-3 p-3 hover:bg-white rounded-2xl transition">
                  <img src={p.image} alt="" className="w-14 h-14 rounded-xl object-cover" />
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm line-clamp-1">{p.name}</div>
                    <div className="text-xs text-ink/50">{p.category} · {p.ageGroup}</div>
                  </div>
                  <span className="font-display font-bold">{priceINR(p.price)}</span>
                  <button onClick={() => addToCart(p)} className="ml-2 text-xs bg-ink text-cream px-3 py-1.5 rounded-full font-semibold">Add</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export function QuickView() {
  const { quickView, closeQuickView, addToCart, toggleWishlist, wishlist } = useStore();
  const [qty, setQty] = useState(1);
  if (!quickView) return null;
  const p = quickView;
  const wished = wishlist.includes(p.id);
  const finalPrice = p.discount ? p.price * (1 - p.discount / 100) : p.price;

  return (
    <div className="fixed inset-0 z-50 fade-in flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-ink/50 backdrop-blur-md" onClick={closeQuickView} />
      <div className="relative bg-cream rounded-3xl w-full max-w-4xl overflow-hidden grid md:grid-cols-2 shadow-2xl max-h-[92vh] overflow-y-auto">
        <button onClick={closeQuickView} className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow"><IconX /></button>
        <div className="relative aspect-square md:aspect-auto bg-gradient-to-br from-cream to-cream-2">
          <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
          {p.discount && (
            <span className="absolute top-4 left-4 bg-berry text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
              -{p.discount}% OFF
            </span>
          )}
        </div>
        <div className="p-6 md:p-8 flex flex-col">
          <span className="text-xs uppercase tracking-widest text-ink/50 font-semibold">{p.category}</span>
          <h3 className="font-display text-3xl md:text-4xl font-bold mt-2 leading-tight">{p.name}</h3>
          <div className="flex items-center gap-2 mt-3">
            <div className="flex text-sun-2">
              {Array.from({ length: 5 }).map((_, i) => <IconStar key={i} filled={i < Math.round(p.rating)} />)}
            </div>
            <span className="text-sm text-ink/60">{p.rating.toFixed(1)} · {p.reviews} reviews</span>
          </div>
          <p className="text-ink/70 mt-4 leading-relaxed">{p.description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            <Chip>Age: {p.ageGroup}</Chip>
            <Chip>{p.inStock ? "In Stock" : "Out of Stock"}</Chip>
            <Chip>Free Shipping</Chip>
          </div>
          <div className="flex items-baseline gap-3 mt-6">
            <span className="font-display text-4xl font-bold text-ink">{priceINR(Math.round(finalPrice))}</span>
            {p.discount && <span className="text-lg text-ink/40 line-through">{priceINR(p.price)}</span>}
          </div>

          <div className="flex items-center gap-3 mt-6">
            <div className="flex items-center gap-1 bg-white rounded-full p-1">
              <button aria-label="Decrease" onClick={() => setQty(q => Math.max(1, q - 1))} className="w-9 h-9 rounded-full bg-cream flex items-center justify-center"><IconMinus /></button>
              <span className="w-10 text-center font-semibold">{qty}</span>
              <button aria-label="Increase" onClick={() => setQty(q => q + 1)} className="w-9 h-9 rounded-full bg-cream flex items-center justify-center"><IconPlus /></button>
            </div>
            <button
              onClick={() => { addToCart(p, qty); closeQuickView(); }}
              className="flex-1 bg-ink text-cream py-3 rounded-full font-semibold hover:bg-berry transition inline-flex items-center justify-center gap-2"
            >
              <IconBag /> Add to Bag
            </button>
            <button
              onClick={() => toggleWishlist(p.id)}
              aria-label="Wishlist"
              className={`w-12 h-12 rounded-full flex items-center justify-center border border-black/10 ${wished ? "bg-berry text-white border-berry" : "bg-white text-ink"}`}
            >
              <IconHeart filled={wished} />
            </button>
          </div>

          <div className="mt-6 pt-6 border-t border-black/5 text-xs text-ink/60 grid grid-cols-2 gap-3">
            <div>✅ Safety tested</div>
            <div>🚚 Ships in 24 hours</div>
            <div>↩️ Easy 7-day returns</div>
            <div>🎁 Free gift wrapping</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return <span className="text-xs bg-white/70 border border-black/5 px-3 py-1 rounded-full">{children}</span>;
}
