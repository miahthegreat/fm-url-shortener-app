import AdvancedStats from "@/components/AdvancedStats";
import BoostContainer from "@/components/BoostContainer";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ShortenContainer from "@/components/ShortenContainer";

export default function Home() {
  return (
    <main className="mt-36 grid w-full">
      <Hero />
      <div className="w-full bg-neutral-150">
        <ShortenContainer />
        <AdvancedStats />
      </div>
      <BoostContainer />
      <Footer />
    </main>
  );
}
