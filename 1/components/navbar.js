import React from "react";
import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function AppNavbar() {
  return (
    <>
      {/* ВСТРОЕННЫЙ CSS */}
      <style>{`
        .navbar-custom {
          margin-left: -20px;
          margin-right: -20px;
          height: 90px;
        }

        @media (max-width: 768px) {
          .navbar-custom {
            margin-left: 0px;
            margin-right: 0px;
          }
        }

        #logoNNN {
          transition: 0.2s;
          cursor: pointer;
        }

        #logoNNN:hover {
          transform: scale(1.04);
        }

        #logoNNN:active {
          opacity: 0.7;
        }

        #logoNNN img {
          width: 70px;
        }

        #zmih {
          transition: 0.2s;
          text-decoration: none;
          color: #2b2b2b;
        }

        #zmih:hover {
          color: #131313;
        }

        .navbar a {
          color: #2b2b2b;
        }

        .navbar a:hover {
          color: #000;
        }

        .navbar .btn-dark {
          background-color: #2b2b2b;
          border-color: #2b2b2b;
        }

        .navbar .btn-dark:hover {
          background-color: #000;
          border-color: #000;
        }

        .navbar-toggler {
          border: 1px solid rgba(0,0,0,0.3);
        }

        .navbar-toggler:focus {
          box-shadow: none;
        }

        .navbar-toggler-icon {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba(0,0,0,0.8)' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
        }
      `}</style>

      {/* NAVBAR */}
      <Navbar
        expand="lg"
        className="navbar-custom p-2 my-2 rounded-3 shadow-sm"
        style={{
          background: "linear-gradient(90deg, #bfcdd4, #e1e8eb)"
        }}
      >
        <Container fluid>

          {/* LOGO */}
          <Navbar.Brand
            as={Link}
            to="/"
            id="logoNNN"
            className="d-flex align-items-center me-2"
          >
            <img src="/joystick.svg" alt="Лого" />
          </Navbar.Brand>

          {/* TITLE */}
          <Navbar.Brand as={Link} to="/" id="zmih" className="fw-bold fs-3 ms-3">
            Аптека
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />

          <Navbar.Collapse id="navbar-nav">

            {/* LEFT MENU */}
            <Nav className="ms-3">
              <Nav.Link as={Link} to="/eee" className="me-5">
                Товары
              </Nav.Link>

              <Nav.Link as={Link} to="/ttt" className="me-5">
                Добавить
              </Nav.Link>

              <Nav.Link as={Link} to="/contacts" className="me-5">
                Контакты
              </Nav.Link>
            </Nav>

            {/* RIGHT BUTTON */}
            <Nav className="ms-auto">
              <Button as={Link} to="/login" className="btn-dark btn-sm">
                Войти
              </Button>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default AppNavbar;