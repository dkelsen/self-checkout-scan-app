import React, { useState, useMemo, createContext, useCallback } from "react";

const dummyValues = {
  id1: "Toothbrush",
  id2: "Soap",
  id3: "Milk",
  id4: "Cereal",
};

export const CheckoutContext = createContext({
  items: dummyValues,
  deleteItem: () => {
    /* */
  },
});

export default function Checkout({ children }) {
  const [items, setItems] = useState(dummyValues);

  const deleteItem = useCallback(
    (key) =>
      setItems((prevState) => {
        const newState = { ...prevState };
        delete newState[key];

        return newState;
      }),
    []
  );

  const value = useMemo(
    () => ({ items, setItems, deleteItem }),
    [items, setItems, deleteItem]
  );

  return (
    <CheckoutContext.Provider value={value}>
      {children}
    </CheckoutContext.Provider>
  );
}
