import React, { useState } from "react";
import "./colores.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo 720x470.png';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './Home';
import Footer from './Footer';
import Contact from "./Contact";
import About from "./About";
import Pruebas from "./pruebas";
import TicketForm from "./formulario";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Gracias from "./Gracias";




function Navigation() {
  //estado para verificar y cerrar el menu colapsable
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavLinkClick = () => {
    setIsNavCollapsed(true);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-gradient" style={{  background: 'linear-gradient(to right, black, #21AFEB)'}}>
      <div className="container-fluid px-4">

        {/* Logo alineado a la izquierda */}
        <Link className="navbar-brand d-flex align-items-center mx-auto" to="/">

          <img src={logo} alt="Logo" width="100" className="me-2" style={{ maxWidth: '100%' }} />
          {/*se verificará para sacar o dejar */}
          <small className="gris mb-0">Soluciones <br></br>Tecnológicas</small>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsNavCollapsed(!isNavCollapsed)}
          aria-controls="navbarContent"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
        >

          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${!isNavCollapsed ? 'show' : ''}`} id="navbarContent" >
          <ul className="navbar-nav ms-auto text-center" style={{border: '2px solid', color:'#f0f0f0'}}>
            <li className="nav-item tarjeta-zoom">
              <Link className="nav-link fs-5" style={{ color:'#f0f0f0'}}  to="/" onClick={handleNavLinkClick}>Inicio</Link>
            </li>
            <li className="nav-item tarjeta-zoom">
              <Link className="nav-link fs-5" style={{ color:'#f0f0f0'}} to="/about" onClick={handleNavLinkClick}>Nosotros</Link>
            </li>
            <li className="nav-item tarjeta-zoom">
              <Link className="nav-link fs-5" style={{ color:'#f0f0f0'}} to="/contact" onClick={handleNavLinkClick}>Contacto</Link>
            </li>
            {/*link para el formulario */}
             <Link className="nav-link fs-5" style={{ color:'#f0f0f0'}} to="/tickets">Crear Ticket</Link>

            {/*<li className="nav-item tarjeta-zoom">
              <Link className="nav-link fs-5" style={{ color:'#f0f0f0'}} to="/pruebas" onClick={handleNavLinkClick}>Pruebas</Link>
            </li>*/}
          </ul>
        </div>
            {/* linear-gradient(to right, black, gold)*/}

      </div>
    </nav>
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
          {/*link para el formulario */}
          <Route path="/tickets" element={<TicketForm />} />

          <Route path="/gracias" element={<Gracias />} /> {/* NUEVA RUTA */}
          {/*<Route path="/pruebas" element={<Pruebas />} /> RUTA DE PRUEBA*/}
        </Routes>
        <Footer/>
      </div>
      
    </Router>
  );
}
