import { useState, useContext } from "react";
import { ItemContext } from "../contexts/ItemContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

export const Checkout = () => {
  const { items, reset } = useContext(ItemContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [orderId, setOrderId] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");

    const order = {
      buyer: {
        name,
        email,
        address,
      },
      items: items.map(item => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: 1, // Si no manejas cantidad, puedes cambiarlo
        date: item.fechaSeleccionada,
      })),
      date: new Date(),
      total: items.reduce((acc, item) => acc + item.price, 0),
    };

    try {
      const docRef = await addDoc(ordersCollection, order);
      setOrderId(docRef.id);
      reset(); // Vaciar el carrito
    } catch (error) {
      console.error("Error al agregar la orden: ", error);
    }
  };

  return (
    <Container className="mt-4">
      <h1>Finalizar Compra</h1>
      {orderId ? (
        <p>Gracias por tu compra! Tu número de orden es: <strong>{orderId}</strong></p>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingresa tu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Dirección</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tu dirección"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Confirmar Orden
          </Button>
        </Form>
      )}
    </Container>
  );
};

export default Checkout;
