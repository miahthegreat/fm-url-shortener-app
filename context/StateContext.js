import { createContext, useContext, useState, useEffect } from "react";

const Context = createContext();

export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const StateContext = ({ children }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [links, setLinks] = useState([]);

  return (
    <Context.Provider
      value={{
        query,
        setQuery,
        results,
        setResults,
        error,
        setError,
        links,
        setLinks,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
