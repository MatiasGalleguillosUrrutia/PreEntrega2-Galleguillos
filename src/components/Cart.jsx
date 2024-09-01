import { useContext } from "react";
import { ItemContext } from "../contexts/ItemContext";
import { Card, Button, Row, Col, Container, Alert } from "react-bootstrap";

export const Cart = () => {
  const { items, reset } = useContext(ItemContext);

  return (
    <Container className="mt-4">
      <h1 className="mb-4">Carrito de Compras</h1>
      {items.length > 0 ? (
        <>
          <Button variant="danger" onClick={reset} className="mb-4">
            Vaciar Carrito
          </Button>
          {items.map((item, index) => (
            <Card className="mb-3 shadow-sm" key={index}>
              <Row className="g-0">
                <Col
                  md={4}
                  className="d-flex align-items-center justify-content-center p-3"
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
                    <Card.Title as="h2" className="mb-3">
                      {item.title}
                    </Card.Title>
                    <Card.Subtitle as="h4" className="mb-2 text-muted">
                      {item.profesor}
                    </Card.Subtitle>
                    <Card.Text className="text-muted">
                      Categoría: {item.categoryid}
                    </Card.Text>
                    <Card.Text as="h4" className="text-primary">
                      ${item.price}
                    </Card.Text>
                    <Card.Text className="text-muted">
                      Fecha seleccionada: {item.fechaSeleccionada}
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          ))}
        </>
      ) : (
        <Alert variant="warning" className="text-center">
          Tu carrito está vacío.
        </Alert>
      )}
    </Container>
  );
};
