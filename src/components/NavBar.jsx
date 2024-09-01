// Componentes Bootstrap
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

// Componentes
import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <>
      <div className="bg-body-tertiary d-flex justify-content-center align-items-center">
        <Navbar expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/">
                  Inicio
                </Nav.Link>
                <Nav.Link as={NavLink} to="/categoria/ClaseaClase">
                  Clase a Clase
                </Nav.Link>
                <Nav.Link as={NavLink} to="/categoria/Mensuales">
                  Clase Mensuales
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <CartWidget />
          </Container>
        </Navbar>
      </div>
    </>
  );
};
