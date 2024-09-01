import React, { useEffect } from "react";
import { getFirestore, collection, setDoc, doc } from "firebase/firestore";
import productos from "../data/productos.json"; // Importa el archivo JSON

const UploadProductos = () => {
  useEffect(() => {
    const uploadProductos = async () => {
      const db = getFirestore();

      for (let producto of productos) {
        try {
          // Usar el campo 'id' del producto como ID del documento en Firestore
          const productoRef = doc(db, "items", producto.id);

          // Usamos setDoc con merge: true para evitar duplicados y sobreescribir solo si es necesario
          await setDoc(productoRef, producto, { merge: true });

          console.log(`Producto ${producto.title} añadido correctamente.`);
        } catch (error) {
          console.error("Error al añadir el producto:", error);
        }
      }
    };

    uploadProductos();
  }, []);

  return <div>Subiendo productos a Firestore...</div>;
};

export default UploadProductos;
