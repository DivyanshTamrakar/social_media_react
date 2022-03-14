import { createContext, useContext, useState } from "react";
export const LoaderContext = createContext();


export function LoaderProvider({ children }) {
  const [showloader, setshowloader] = useState(false);

  return (
    <LoaderContext.Provider value={{ showloader, setshowloader}}>
      {children}
    </LoaderContext.Provider>
  );
}
export function useLoader() {
  return useContext(LoaderContext);
}
