import React from "react";

const ItemDetail = ({ item }) => {
  return (
    <div>
      <h1>{item.titulo}</h1>
      <h2>{item.profesor}</h2>
      <p>{item.categoria}</p>
      <p>{item.precio}</p>
      <img
        src={new URL(`${item.imagen}`, import.meta.url).href}
        height="200px"
        alt={item.titulo}
      />
    </div>
  );
};

export default ItemDetail;
