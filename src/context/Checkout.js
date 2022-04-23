import React, { useState, useMemo, createContext } from "react";

const dummyValues = {
  id1: "Toothbrush",
  id2: "Soap",
  id3: "Milk",
  id4: "Cereal",
};

export const CheckoutContext = createContext({ items: dummyValues });

export default function Checkout({ children }) {
  const [items, setItems] = useState(dummyValues);

  const value = useMemo(() => ({ items, setItems }), [items, setItems]);

  return (
    <CheckoutContext.Provider value={value}>
      {children}
    </CheckoutContext.Provider>
  );
}
