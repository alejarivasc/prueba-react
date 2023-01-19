import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Search = ({ setTextoBuscar, setOrdenado, ordenado, textoBuscar }) => {
  // Recibe props de App.jsx

  return (
    <>
      <Navbar className="nav">
        <Container>
          <Navbar.Brand>¡Encuentra tu mago favorito!</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Form className="d-flex mb-3">
                <Form.Control
                  type="search"
                  placeholder="Buscar por nombre o por casa..."
                  className="me-2"
                  aria-label="Search"
                  onChange={(e) => setTextoBuscar(e.target.value)}
                  value={textoBuscar}
                />
                <Form.Select
                  onChange={(e) => setOrdenado(e.target.value)}
               value={ordenado}
                >
                  <option  value="ASC" >Ordenar por orden alfabético ascendente</option  >
                  <option   value="DESC">Ordenar por orden alfabético descendente</option>
                </Form.Select>
              </Form>{" "}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Search;
