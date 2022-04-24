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
  addItem: () => {
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

  const addItem = useCallback(
    (key, item) =>
      setItems((prevState) => {
        const newState = { ...prevState };
        newState[key] = item;

        return newState;
      }),
    []
  );

  const value = useMemo(
    () => ({ items, setItems, deleteItem, addItem }),
    [items, setItems, deleteItem, addItem]
  );

  return (
    <CheckoutContext.Provider value={value}>
      {children}
    </CheckoutContext.Provider>
  );
}
