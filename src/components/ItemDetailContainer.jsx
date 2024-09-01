import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import { ItemContext } from "../contexts/ItemContext";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const { addItem } = useContext(ItemContext);
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const itemRef = doc(db, "items", id);
    
    getDoc(itemRef).then((snapshot) => {
      if (snapshot.exists()) {
        setItem({ id: snapshot.id, ...snapshot.data() });
      }
      setLoading(false);
    });
  }, [id]);

  const handleAddToCart = (selectedDate, quantity) => {
    if (item) {
      addItem({ ...item, selectedDate, quantity });
    }
  };

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <Container>
      {item && <ItemDetail item={item} handleAddToCart={handleAddToCart} />}
    </Container>
  );
};

export default ItemDetailContainer;
