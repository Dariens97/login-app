import React from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer style={{ background: '#222', color: '#fff', padding: '1rem 0' }}>
      <div className="container d-flex flex-column flex-md-row justify-content-center align-items-center" style={{ gap: '10px' }}>
        {/* Texto izquierdo */}
        <div style={{ fontSize: '0.95rem' }}>
          Llámanos al número <a href="tel:+56957928042" className="text-white text-decoration-none">+56 9 5792 8042</a>
        </div>

        {/* Separador visual opcional (quitar si no te gusta) */}
        <div className="d-none d-md-block mx-2" style={{ fontSize: '1.2rem', color: '#888' }}>|</div>

        {/* Texto central + íconos */}
        <div style={{ fontSize: '0.95rem' }} className="d-flex align-items-center gap-2">
          <span>Síguenos en:</span>

          <a
            href="https://www.instagram.com/_net_ce_?utm_source=qr&igsh=ZWFjZ3NwcXJhMjhh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white icono-zoom"
          >
            <FaInstagram size={22} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61566330650513"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white icono-zoom"
          >
            <FaFacebook size={22} />
          </a>
          <a
            href="https://wa.me/56957928042"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white icono-zoom"
          >
            <FaWhatsapp size={22} />
          </a>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="container text-center mt-3">
        <p style={{ fontSize: '0.8rem', marginBottom: 0 }}>
          © 2025 NET-CE | Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
