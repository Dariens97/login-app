import React from "react";
import "./colores.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo 720x470.png';
import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './Home';
import Footer from './Footer';
import Contact from "./Contact";
import About from "./About";
import '@fortawesome/fontawesome-free/css/all.min.css';

function Navigation() {
  return (
/*    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">*/
      <nav className="navbar navbar-expand-lg navbar-dark navbar-gradient">

      <div className="container-fluid" style={{textAlign: 'center' }}>

      {/*Logo e información 
      <Link className="navbar-brand d-flex align-items-center" to="/">
        <img src={logo} alt="Logo" width="150" className="me-2" />
        <h6 className="gris text-center">soluciones tecnologicas</h6>
      </Link>
      <Link className="navbar-brand text-center" to="/"><h2>NET-CE</h2>
      <h5 className="gris text-center">Soluciones Tecnologicas Echas a Tú Medida</h5></Link>
      */}
      
        {/* Logo e información */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          
          <div className="d-none d-md-block text-start"style={{float:"left"}}>
            <img src={logo} alt="Logo" width="100" className="me-2" />
            

          </div>
          
        </Link>

        {/* Botón hamburguesa para móviles */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        {/*Menú colapsable */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">Nosotros</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
      </nav>
    /*</nav>*/
  );
}




export default function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </div>
      
    </Router>
  );
}
