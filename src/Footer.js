// src/Footer.js
import React from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

 // Opcional si quieres estilos separados

function Footer() {
  return (
    <footer style={{ background: '#222', color: '#fff', padding: '0.1rem ', textAlign: 'center'}}>
      <h5 style={{fontSize: "1rem"}}>
       
      </h5>
      
      
      <div className="container text-center ">
        <div className="mb-3 ">
          <a
            href="https://www.instagram.com/_net_ce_?utm_source=qr&igsh=ZWFjZ3NwcXJhMjhh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-3 icono-zoom"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61566330650513"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-3 icono-zoom"
          >
            <FaFacebook size={30} />
          </a>
          <a
            href="https://wa.me/56957928042" // cambia por tu número de WhatsApp
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-3 icono-zoom"
          >
            <FaWhatsapp size={30} />
          </a>
        </div>
        <p>© 2025 NET-CE | Todos los derechos reservados.</p>
    
      </div>
         
      
    </footer>
  );
}

export default Footer;
