import { createContext, useState } from "react";

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    const existingItemIndex = items.findIndex(
      (item) => item.id === newItem.id && item.fechaSeleccionada === newItem.fechaSeleccionada
    );

    if (existingItemIndex !== -1) {
      // Si el producto ya existe en el carrito con la misma fecha, incrementa la cantidad
      const updatedItems = items.map((item, index) =>
        index === existingItemIndex
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setItems(updatedItems);
    } else {
      // Si es un producto nuevo (diferente fecha o no existe en el carrito)
      setItems([...items, { ...newItem, quantity: 1 }]);
    }
  };

  const reset = () => setItems([]);

  return (
    <ItemContext.Provider value={{ items, addItem, reset }}>
      {children}
    </ItemContext.Provider>
  );
};
