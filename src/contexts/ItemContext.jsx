import React, { createContext, useState } from "react";

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.id === newItem.id && item.selectedDate === newItem.selectedDate
      );
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === newItem.id && item.selectedDate === newItem.selectedDate
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      } else {
        return [...prevItems, newItem];
      }
    });
  };

  const removeItem = (itemId, selectedDate) => {
    setItems((prevItems) => {
      return prevItems
        .map((item) => {
          if (item.id === itemId && item.selectedDate === selectedDate) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity > 0); // Filtrar para eliminar items con cantidad 0
    });
  };

  const reset = () => {
    setItems([]);
  };

  return (
    <ItemContext.Provider value={{ items, addItem, removeItem, reset }}>
      {children}
    </ItemContext.Provider>
  );
};
