import { useContext } from "react";
import { ItemContext } from "../contexts/ItemContext";
import { Card, Button, Row, Col, Container, Alert, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { items, removeItem, reset } = useContext(ItemContext);

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Container className="mt-4">
      <h1 className="mb-4 text-center">Carrito de Compras</h1>
      {items.length > 0 ? (
        <>
          <Button variant="danger" onClick={reset} className="mb-2 w-100 btn-sm">
            Vaciar Carrito
          </Button>
          <ListGroup variant="flush">
            {items.map((item, index) => (
              <ListGroup.Item key={index} className="mb-1 p-1 shadow-sm rounded">
                <Row className="g-0">
                  <Col
                    md={4}
                    className="d-flex align-items-center justify-content-center p-1"
                  >
                    <img
                      src={item.imageid}
                      alt={item.titulo}
                      className="img-fluid rounded-start"
                      style={{ maxHeight: "200px", objectFit: "cover" }}
                    />
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <Card.Title as="h3" className="mb-2">
                        {item.title}
                      </Card.Title>
                      <Card.Subtitle as="h5" className="mb-2 text-muted">
                        {item.profesor}
                      </Card.Subtitle>
                      <Card.Text className="text-muted">
                        Categoría: {item.categoryid}
                      </Card.Text>
                      <Card.Text className="text-muted">
                        Fecha seleccionada: {item.selectedDate}
                      </Card.Text>
                      <Card.Text className="text-muted">
                        Cantidad: {item.quantity}
                      </Card.Text>
                      <Card.Text as="h4" className="text-primary">
                        Total: ${item.price * item.quantity}
                      </Card.Text>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => removeItem(item.id, item.selectedDate)} // Asegúrate de que se llama correctamente
                      >
                        Eliminar 1
                      </Button>
                    </Card.Body>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <h3 className="mt-4">Total de productos: {totalItems}</h3>
          <h3 className="mb-4">Total a pagar: ${totalPrice}</h3>
          <Link to="/checkout">
            <Button variant="success" className="w-100 btn-sm">
              Ir al Checkout
            </Button>
          </Link>
        </>
      ) : (
        <Alert variant="warning" className="text-center">
          Tu carrito está vacío.
        </Alert>
      )}
    </Container>
  );
};
