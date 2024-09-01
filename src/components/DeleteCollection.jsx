import React, { useEffect } from "react";
import { getFirestore, collection, getDocs, deleteDoc, doc } from "firebase/firestore";

const DeleteCollection = () => {
  useEffect(() => {
    const deleteCollection = async () => {
      const db = getFirestore();
      const collectionRef = collection(db, "items"); // Cambia "items" por el nombre de tu colección

      const snapshot = await getDocs(collectionRef);

      const batchSize = 10; // Tamaño del lote (puedes ajustarlo)
      let batch = [];

      snapshot.docs.forEach((document) => {
        batch.push(deleteDoc(doc(db, "items", document.id)));
        if (batch.length === batchSize) {
          // Espera a que el lote actual se complete antes de continuar
          Promise.all(batch).then(() => {
            batch = [];
          });
        }
      });

      // Procesa los documentos restantes en el último lote
      if (batch.length > 0) {
        await Promise.all(batch);
      }

      console.log("Colección vaciada con éxito");
    };

    deleteCollection();
  }, []);

  return <div>Vaciando la colección...</div>;
};

export default DeleteCollection;
