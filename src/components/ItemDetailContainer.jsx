import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import { ItemContext } from "../contexts/ItemContext"; // Asegúrate de que la ruta sea correcta

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const { addItem } = useContext(ItemContext);

  const handleAddToCart = (fechaSeleccionada) => {
    const itemWithDate = { ...item, fechaSeleccionada };
    addItem(itemWithDate);
  };

  useEffect(() => {
    const db = getFirestore();
    const refDoc = doc(db, "items", id);

    getDoc(refDoc).then((snapshot) => {
      if (snapshot.exists()) {
        setItem({ id: snapshot.id, ...snapshot.data() });
      } else {
        console.log("No such document!");
      }
      setLoading(false);
    });
  }, [id]);

  if (loading) return "wait";

  return (
    <Container className="container-fluid mt-4">
      <ItemDetail item={item} handleAddToCart={handleAddToCart} /> {/* Pasar la función para agregar al carrito */}
    </Container>
  );
};

export default ItemDetailContainer;
