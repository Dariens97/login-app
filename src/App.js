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
        <Link className="navbar-brand d-flex align-items-center w-100 justify-content-between" to="/">
          
          <div className="d-none d-md-block ms-5">
            <img src={logo} alt="Logo" width="100" className="me-2" />
            

          </div>
          <div className="d-none d-md-block mx-auto " style={{ maxWidth: "800px", fontSize: "0.9rem" }}>
            <h5 style={{fontSize: "1rem"}}>
              Tenemos como idea pragmática el concepto “innovación” en función de las personas, 
              <br></br>
              estamos constantemente cuestionando nuestro; modelo de negocio, tecnologías, 
              <br></br>
              capacidad adaptativa y nivel de empatía hacia nuestro entorno
            </h5>
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
              <Link className="nav-link fs-5" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5" to="/about">Nosotros</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5" to="/contact">Contacto</Link>
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
