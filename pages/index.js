import AdvancedStats from "@/components/AdvancedStats";
import BoostContainer from "@/components/BoostContainer";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ShortenContainer from "@/components/ShortenContainer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shortly | Link Shortener</title>
      </Head>
      <main className="main-container">
        <Hero />
        <div className="w-full bg-neutral-150">
          <ShortenContainer />
          <AdvancedStats />
        </div>
        <BoostContainer />
        <Footer />
      </main>
    </>
  );
}
