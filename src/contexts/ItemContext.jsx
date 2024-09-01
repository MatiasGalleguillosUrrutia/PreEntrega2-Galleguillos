import { createContext, useState } from "react";

// Crea el contexto para los ítems
export const ItemContext = createContext();

// Crea el proveedor del contexto
export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  // Función para agregar un ítem al carrito
  const addItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  console.log(items); // Para verificar que los ítems se están agregando correctamente

  return (
    <ItemContext.Provider value={{ items, addItem }}>
      {children}
    </ItemContext.Provider>
  );
};
