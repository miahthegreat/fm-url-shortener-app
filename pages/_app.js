import Navbar from "@/components/Navbar";
import { StateContext } from "@/context/StateContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <div className="relative flex min-h-screen w-full flex-col p-12 font-cabin text-primary-850 dark:text-neutral-150">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </StateContext>
  );
}
