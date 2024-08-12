import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import data from "../data/productos.json";
import ItemDetail from "./ItemDetail";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    new Promise((resolve) => setTimeout(() => resolve(data), 2000))
      .then((response) => {
        const finded = response.find((i) => i.id === id);
        setItem(finded);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return "wait";

  return (
    <Container className="mt-4">
      <ItemDetail item={item} />
    </Container>
  );
};
