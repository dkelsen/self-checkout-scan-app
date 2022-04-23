import React, { useState, useMemo, createContext } from "react";

export const pagesMapping = {
  home: "home",
  scan: "scan",
};

export const RoutingContext = createContext({ page: pagesMapping.home });

export default function Router({ children }) {
  const [page, setPage] = useState(pagesMapping.home);

  const value = useMemo(() => ({ page, setPage }), [page, setPage]);

  return (
    <RoutingContext.Provider value={value}>{children}</RoutingContext.Provider>
  );
}
