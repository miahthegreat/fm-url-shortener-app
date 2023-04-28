import Navbar from "@/components/Navbar";
import { StateContext } from "@/context/StateContext";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Toaster />
      <div className="relative flex min-h-screen w-full flex-col pt-12 font-cabin text-primary-850 dark:text-neutral-150">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </StateContext>
  );
}
