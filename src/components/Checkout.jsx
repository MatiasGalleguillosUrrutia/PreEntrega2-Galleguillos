import { useState, useContext } from "react";
import { ItemContext } from "../contexts/ItemContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";

export const Checkout = () => {
  const { items, reset } = useContext(ItemContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [validated, setValidated] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

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
        quantity: item.quantity,
        date: item.fechaSeleccionada,
      })),
      date: new Date(),
      total: items.reduce((acc, item) => acc + item.price * item.quantity, 0),
    };

    try {
      const docRef = await addDoc(ordersCollection, order);
      setOrderId(docRef.id);
      reset(); // Vaciar el carrito
    } catch (error) {
      setError("Hubo un problema al procesar tu orden. Inténtalo de nuevo.");
    }
  };

  return (
    <Container className="mt-4">
      <h1>Finalizar Compra</h1>
      {orderId ? (
        <Alert variant="success">
          ¡Gracias por tu compra! Tu número de orden es: <strong>{orderId}</strong>
        </Alert>
      ) : (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group controlId="name" className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Ingresa tu nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Por favor, ingresa tu nombre.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="email" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Ingresa tu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Por favor, ingresa un correo electrónico válido.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="address" className="mb-3">
            <Form.Label>Dirección</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Ingresa tu dirección"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Por favor, ingresa tu dirección.
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary" type="submit">
            Confirmar Orden
          </Button>
          {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
        </Form>
      )}
    </Container>
  );
};

export default Checkout;
