import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { ProgressBar, Container, Alert } from "react-bootstrap";

const DeleteCollection = () => {
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const deleteCollection = async () => {
      const db = getFirestore();
      const collectionRef = collection(db, "items");
      const snapshot = await getDocs(collectionRef);
      const totalItems = snapshot.docs.length;

      let deletedCount = 0;

      for (let document of snapshot.docs) {
        try {
          await deleteDoc(doc(db, "items", document.id));
          deletedCount += 1;
          setProgress((deletedCount / totalItems) * 100); // Actualiza el progreso
        } catch (error) {
          console.error("Error al eliminar el documento:", error);
        }
      }

      setMessage("Colección vaciada exitosamente!");
    };

    deleteCollection();
  }, []);

  return (
    <Container className="mt-4">
      <h3>Vaciando la colección...</h3>
      <ProgressBar now={progress} label={`${Math.round(progress)}%`} />
      {message && <Alert variant="success" className="mt-3">{message}</Alert>}
    </Container>
  );
};

export default DeleteCollection;
