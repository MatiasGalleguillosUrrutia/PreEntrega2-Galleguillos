import { createContext, useState } from "react";

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    const existingItemIndex = items.findIndex(
      (item) => item.id === newItem.id && item.fechaSeleccionada === newItem.fechaSeleccionada
    );

    if (existingItemIndex !== -1) {
      const updatedItems = items.map((item, index) =>
        index === existingItemIndex
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setItems(updatedItems);
    } else {
      setItems([...items, { ...newItem, quantity: 1 }]);
    }
  };

  const removeItem = (id, fechaSeleccionada) => {
    const updatedItems = items.map((item) => {
      if (item.id === id && item.fechaSeleccionada === fechaSeleccionada) {
        if (item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return null; // Devuelve null si la cantidad es 1, lo que indica que se debe eliminar
      }
      return item;
    }).filter(item => item !== null); // Elimina los productos con cantidad 0
    setItems(updatedItems);
  };

  const reset = () => setItems([]);

  return (
    <ItemContext.Provider value={{ items, addItem, removeItem, reset }}>
      {children}
    </ItemContext.Provider>
  );
};
