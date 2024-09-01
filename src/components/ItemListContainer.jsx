import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { getFirestore, collection, where, query, getDocs } from "firebase/firestore";
import ItemList from "./ItemList";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const refCollection = !id
      ? collection(db, "items")  // Obtiene todos los items si no hay una categoría seleccionada
      : query(collection(db, "items"), where("categoryid", "==", id));  // Filtra por categoría si se proporciona un ID

    getDocs(refCollection).then((snapshot) => {
      const itemsList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setItems(itemsList);  // Actualiza el estado con los items obtenidos
      setLoading(false);  // Indica que ya no está cargando
    });
  }, [id]);

  if (loading) return "wait";  // Muestra un mensaje de espera mientras se cargan los datos

  return (
    <Container className="mt-4">
      <ItemList items={items} />
    </Container>
  );
};
