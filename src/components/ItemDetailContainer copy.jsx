import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import data from "../data/productos.json";

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
  console.log(item);
  return (
    <Container className="mt-4">
      <h1> {item.titulo}</h1>
      <h1> {item.profesor}</h1>
      <h1> {item.categoria}</h1>
      <h1> {item.precio}</h1>
      <img
        src={new URL(`${item.imagen}`, import.meta.url).href}
        height="200px"
      ></img>
    </Container>
  );
};
