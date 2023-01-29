// Import React
import React from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./App.css";

// Import from react-router-dom
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Import other React Component
import CreateKsiazka from "./Components/create-ksiazka";
import EditKsiazka from "./Components/edit-ksiazka";
import KsiazkiList from "./Components/zarzadzaj-ksiazki";
import KsiazkiLista from "./Components/ksiazki-lista";
import NaszeKsiazki from "./Components/nasze-ksiazki";

// App Component
const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/nasze-ksiazki"} className="nav-link">
                  E-Księgarnia
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/nasze-ksiazki"} className="nav-link">
                    Lista naszych ksiązek
                  </Link>
                </Nav>
                <Nav>
                  <Link to={"/ksiazki-lista"} className="nav-link">
                    Encyklopedia ksiązek
                  </Link>
                </Nav>
                <Nav>
                  <Link to={"/ksiazki-list"} className="nav-link">
                    Zarządzaj
                  </Link>
                </Nav>
                <Nav>
                  <Link to={"/create-ksiazka"} className="nav-link">
                    Dodaj ksiązke
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                  <Route exact path="/" element={<NaszeKsiazki />} />
                  <Route path="/nasze-ksiazki" element={<NaszeKsiazki />} />
                  <Route path="/create-ksiazka" element={<CreateKsiazka />} />
                  <Route path="/edit-ksiazka/:id" element={<EditKsiazka />} />
                  <Route path="/ksiazki-list" element={<KsiazkiList />} />
                  <Route path="/ksiazki-lista" element={<KsiazkiLista />} />
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
};

export default App;
