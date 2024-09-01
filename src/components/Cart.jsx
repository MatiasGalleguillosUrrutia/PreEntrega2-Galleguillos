import { useContext } from "react";
import { ItemContext } from "../contexts/ItemContext";
import { Card, Row, Col } from "react-bootstrap";

export const Cart = () => {
  const { items } = useContext(ItemContext);

  return (
    <>
      {items.length > 0 ? (
        items.map((item, index) => (
          <Card className="mb-2" key={index}>
            <Row className="g-0">
              <Col
                md={4}
                className="d-flex align-items-center justify-content-center"
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
        ))
      ) : (
        <p>Tu carrito está vacío.</p>
      )}
    </>
  );
};
