import { useState } from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";

const ItemDetail = ({ item, handleAddToCart }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [quantity, setQuantity] = useState(1); // Estado para manejar la cantidad seleccionada

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value, 10)); // Asegúrate de convertir el valor a un número entero
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
            <Card.Text className="text-muted">{item.description}</Card.Text>
            <Card.Text className="text-muted">Profesor(a): {item.profesor}</Card.Text>
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

            <Form.Group controlId="formCantidad" className="mb-3">
              <Form.Label>Cantidad:</Form.Label>
              <Form.Control
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                className="form-control-sm"
              />
            </Form.Group>

            <Button 
              variant="primary" 
              onClick={() => handleAddToCart(selectedDate, quantity)}
              disabled={!selectedDate || quantity < 1} // Deshabilita el botón si no se selecciona una fecha o cantidad es menor a 1
            >
              Comprar
            </Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default ItemDetail;
