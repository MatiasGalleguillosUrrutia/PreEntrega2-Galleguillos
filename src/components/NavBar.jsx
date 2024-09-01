import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CartWidget } from "./CartWidget"; // Importa el CartWidget

export const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const categoriesCollection = collection(db, "categories");

    getDocs(categoriesCollection).then((snapshot) => {
      const categoriesList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCategories(categoriesList);
    });
  }, []);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto d-flex align-items-center"> {/* Este es el cambio clave */}
            <Nav.Link as={NavLink} to="/">Inicio</Nav.Link>
            {categories.map((category) => (
              <Nav.Link key={category.id} as={NavLink} to={`/categoria/${category.name}`}>
                {category.name}
              </Nav.Link>
            ))}
            <Nav.Link as={NavLink} to="/cart">
              <CartWidget />
            </Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
