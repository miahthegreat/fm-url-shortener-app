import Navbar from "@/components/Navbar";
import { StateContext } from "@/context/StateContext";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Toaster />
      <div className="app-container">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </StateContext>
  );
}
