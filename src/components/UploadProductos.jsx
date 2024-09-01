import React, { useEffect, useState } from "react";
import { getFirestore, collection, setDoc, doc } from "firebase/firestore";
import productos from "../data/productos.json"; // Importa el archivo JSON
import { ProgressBar, Container, Alert } from "react-bootstrap";

const UploadProductos = () => {
  const [progress, setProgress] = useState(0); // Estado para manejar el progreso
  const [message, setMessage] = useState("");

  useEffect(() => {
    const uploadProductos = async () => {
      const db = getFirestore();
      const totalItems = productos.length; // Total de productos
      let uploadedCount = 0;

      for (let producto of productos) {
        try {
          const productoRef = doc(db, "items", producto.id);

          await setDoc(productoRef, producto, { merge: true });

          uploadedCount += 1;
          setProgress((uploadedCount / totalItems) * 100); // Actualiza el progreso

        } catch (error) {
          console.error("Error al añadir el producto:", error);
        }
      }

      setMessage("Carga completada exitosamente!");
    };

    uploadProductos();
  }, []);

  return (
    <Container className="mt-4">
      <h3>Subiendo productos a Firestore...</h3>
      <ProgressBar now={progress} label={`${Math.round(progress)}%`} />
      {message && <Alert variant="success" className="mt-3">{message}</Alert>}
    </Container>
  );
};

export default UploadProductos;
