import React, { useState, useMemo, createContext, useCallback } from "react";

const dummyValues = {
  id1: "Toothbrush",
  id2: "Soap",
  id3: "Milk",
  id4: "Cereal",
  // id5: "Soap",
  // id6: "Milk",
  // id7: "Cereal",
  // id8: "Soap",
  // id9: "Milk",
  // id10: "Cereal",
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
