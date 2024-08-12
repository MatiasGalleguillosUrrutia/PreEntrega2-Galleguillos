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
                <Nav.Link as={NavLink} to="#home">
                  Inicio
                </Nav.Link>
                <Nav.Link as={NavLink} to="#link">
                  Conócenos
                </Nav.Link>
                <NavDropdown title="Clases" id="basic-nav-dropdown">
                  <NavDropdown.Item as={NavLink} to="#action/3.1">
                    1 Clase
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="#action/3.2">
                    2 Clase
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="#action/3.3">
                    3 Clases
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={NavLink} to="#action/3.4">
                    Clases Mensuales
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={NavLink} to="/categoria/Clase a Clase">
                  Clase a Clase
                </Nav.Link>
                <Nav.Link as={NavLink} to="/categoria/Mensual">
                  Clase Mensuales
                </Nav.Link>
                <Nav.Link as={NavLink} to="#link">
                  Contáctanos
                </Nav.Link>
                <Nav.Link as={NavLink} to="#link">
                  Términos y condiciones
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};
