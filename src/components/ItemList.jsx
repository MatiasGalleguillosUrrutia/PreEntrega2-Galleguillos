import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ItemList = ({ items }) => {
  return (
    <Row className="g-4"> {/* Row con un gutter de 4 para espacio entre columnas */}
      {items.map((i) => (
        <Col key={i.id} xs={12} sm={6} md={6} lg={4} xl={3}> {/* 4 productos por fila en pantallas grandes */}
          <Card className="h-100"> {/* Asegura que todas las tarjetas tengan la misma altura */}
            <Card.Img 
              style={{ maxHeight: "300px", objectFit: "cover" }} 
              variant="top" 
              src={i.imageid} 
            />
            <Card.Body className="d-flex flex-column"> {/* Alinea el contenido verticalmente */}
              <Card.Title>{i.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{i.profesor}</Card.Subtitle>
              <Card.Text className="flex-grow-1">{i.description}</Card.Text> {/* Hace que la descripción ocupe el espacio disponible */}
              <div className="mt-auto"> {/* Empuja la categoría y el botón al final */}
                <Card.Text className="text-muted">Categoría: {i.categoryid}</Card.Text>
                <Link to={`/item/${i.id}`}>
                  <Button variant="primary" block>Ver</Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ItemList;
