import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import { ItemContext } from "../contexts/ItemContext";
import Alert from "react-bootstrap/Alert";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(false); // Estado para manejar la visibilidad de la alerta
  const { id } = useParams();

  const { addItem } = useContext(ItemContext);

  const handleAddToCart = (fechaSeleccionada) => {
    const itemWithDate = { ...item, fechaSeleccionada };
    addItem(itemWithDate);
    setShowAlert(true); // Mostrar la alerta

    // Ocultar la alerta después de 3 segundos
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
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
      {/* Mostrar la alerta si showAlert es true */}
      {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          Producto agregado al carrito.
        </Alert>
      )}
      <ItemDetail item={item} handleAddToCart={handleAddToCart} /> {/* Pasar la función para agregar al carrito */}
    </Container>
  );
};

export default ItemDetailContainer;
