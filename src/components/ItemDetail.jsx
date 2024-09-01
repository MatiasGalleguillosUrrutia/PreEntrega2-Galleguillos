import { useState } from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";

const ItemDetail = ({ item, handleAddToCart }) => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <Card className="mb-4">
      <Row className="g-0">
        <Col md={4} className="d-flex align-items-center justify-content-center">
          <img
            src={item.imageid}
            alt={item.titulo}
            className="img-fluid rounded-start"
            style={{ maxHeight: "200px", objectFit: "cover" }}
          />
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title as="h1" className="mb-3">{item.title}</Card.Title>
            <Card.Subtitle as="h2" className="mb-2 text-muted">{item.profesor}</Card.Subtitle>
            <Card.Text className="text-muted">Categoría: {item.categoryid}</Card.Text>
            <Card.Text as="h4" className="text-primary">${item.price}</Card.Text>

            <Form.Group controlId="formFechas" className="mb-3">
              <Form.Label>Selecciona una fecha:</Form.Label>
              <Form.Select
                className="form-control-sm"
                value={selectedDate}
                onChange={handleDateChange}
              >
                <option value="" disabled>Selecciona una fecha</option>
                {item.fechas && item.fechas.map((fecha, index) => (
                  <option key={index} value={fecha}>
                    {fecha}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Button variant="primary" onClick={() => handleAddToCart(selectedDate)}>
              Comprar
            </Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default ItemDetail;
