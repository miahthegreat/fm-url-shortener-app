import { useStateContext } from "@/context/StateContext";
import { classNames } from "@/utils";
import axios from "axios";

const ShortenContainer = () => {
  const { query, setQuery, error, setError, setResults, setLinks } =
    useStateContext();
  const getShortLink = async () => {
    if (query.trim() === "") {
      setError("Please add a link");
    } else {
      await axios
        .get(`https://api.shrtco.de/v2/shorten?url=${query.trim()}`)
        .then(function (response) {
          // handle success
          setError(null);
          setResults(response.data.result);
          setLinks((prevLinks) => [...prevLinks, response.data.result]);
        })
        .catch(function (err) {
          // handle error
          setResults(null);
          setError(err.response.data.error);
        })
        .finally(function () {
          // always executed
        });
    }
  };
  return (
    <div className="relative isolate mx-auto max-w-6xl -translate-y-20 overflow-hidden rounded-xl bg-primary-750 px-[64px] py-[52px] shadow-lg">
      <img
        className="absolute inset-0 isolate -z-10 w-full object-cover"
        src="./assets/bg-shorten-desktop.svg"
      />
      <div className="flex items-center gap-4">
        <input
          className={classNames(
            "flex-grow rounded-xl px-8 py-[14px] placeholder:text-primary-850/50",
            error
              ? "outline-none ring ring-red-500 ring-offset-1 ring-offset-white focus-within:ring focus:ring"
              : ""
          )}
          placeholder="Shorten a link here..."
          onChange={(e) => setQuery(e.target.value)}
        />
        {error && (
          <div className="absolute translate-y-[44px] italic text-red-500">
            {error}
          </div>
        )}
        <button
          type="button"
          className="rounded-xl bg-neutral-250 px-8 py-[14px] font-bold uppercase tracking-wide text-white transition duration-200 ease-in hover:bg-neutral-275"
          onClick={() => getShortLink()}
        >
          Shorten It!
        </button>
      </div>
    </div>
  );
};

export default ShortenContainer;
