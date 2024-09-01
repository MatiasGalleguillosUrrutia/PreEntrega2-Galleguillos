import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ItemList = ({ items }) => {
  return (
    <div className="d-flex">
      {items.map((i) => (
        <Card key={i.id} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={i.imageid} />
          <Card.Body>
            <Card.Title>{i.title}</Card.Title>
            <Card.Title>{i.profesor}</Card.Title>
            <Card.Text>{i.description}</Card.Text>
            <Card.Text>{i.categoryid}</Card.Text>
            <Link to={`/item/${i.id}`}>
              <Button variant="primary">Ver</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ItemList;
