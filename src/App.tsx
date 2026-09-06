import { useState } from "react";
import { StoreProvider } from "./store";
import { Header } from "./components/Header";
import { CartDrawer, SearchModal, QuickView } from "./components/Drawers";
import { Hero } from "./sections/Hero";
import { TrustBar } from "./sections/TrustBar";
import { Categories } from "./sections/Categories";
import { Shop } from "./sections/Shop";
import { NewArrivals } from "./sections/Editorial";
import { BestSellers } from "./sections/BestSellers";
import { Why } from "./sections/Why";
import { ByAge } from "./sections/ByAge";
import { Learn } from "./sections/Learn";
import { Offer } from "./sections/Offer";
import { Location } from "./sections/Location";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import { useReveal } from "./hooks/useReveal";

export default function App() {
  useReveal();
  const [category, setCategory] = useState<string | null>(null);

  const pickCategory = (c: string) => {
    setCategory(c);
    requestAnimationFrame(() => document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" }));
  };

  return (
    <StoreProvider>
      <div className="min-h-screen bg-cream text-ink">
        <Header />
        <main>
          <Hero />
          <TrustBar />
          <Categories onPick={pickCategory} />
          <Shop filterCategory={category} onClear={() => setCategory(null)} />
          <NewArrivals />
          <BestSellers />
          <Why />
          <ByAge />
          <Learn />
          <Offer />
          <Location />
          <Contact />
        </main>
        <Footer />

        {/* Global overlays */}
        <CartDrawer />
        <SearchModal />
        <QuickView />
      </div>
    </StoreProvider>
  );
}
