import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import data from "../data/productos.json";
import ItemList from "./ItemList";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    new Promise((resolve, reject) => setTimeout(() => resolve(data), 2000))
      .then((response) => {
        if (!id) {
          setItems(response);
        } else {
          const filtered = response.filter((i) => i.categoria === id);
          setItems(filtered);
        }
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return "wait";

  return (
    <Container className="mt-4">
      <ItemList items={items} />
    </Container>
  );
};
