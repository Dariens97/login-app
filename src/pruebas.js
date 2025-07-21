import React from "react";
import { Row, Col } from "react-bootstrap";

const imagenes = [
  {
    src: process.env.PUBLIC_URL + "/img/arbol 2.jpg",
    alt: "Árbol",
    titulo: "Regalemos un árbol nativo",
    texto: "Juntémonos para combatir el cambio climático y sus efectos producto en gran parte por nuestras acciones. Por cada proyecto aprobado en conjunto donaremos un árbol y se entregará una tarjeta al cliente como recuerdo por su aporte a la fundación Reforestemos."
  },
  {
    src: process.env.PUBLIC_URL + "/img/cctv.png",
    alt: "CCTV",
    titulo: "Sistema CCTV y sensores",
    texto: "Asesoría, instalación, mejoras, mantención en sistemas de seguridad CCTV. Ayudamos a que se sientan seguro y tranquilo en su ambiente. Asesoramos y diseñamos soluciones a tu medida con equipos de alta calidad."
  },
  {
    src: process.env.PUBLIC_URL + "/img/cableado-estructurado.jpg",
    alt: "Cableado",
    titulo: "Cableado Estructurado",
    texto: "Entendemos lo importante de una red de datos. Por eso cumplimos la norma ANSI/TIA/EIA-568 y nos esmeramos por ofrecer un servicio profesional en proyectos de instalación, mantención y optimización para colegios, oficinas, pequeñas y medianas empresas, etc."
  },
  {
    src: process.env.PUBLIC_URL + "/img/proyecto redes LAN.jpg",
    alt: "WiFi",
    titulo: "Soluciones WIFI y AP",
    texto: "Mantengamos a todos conectados y en movimiento. Maximiza tu conectividad y rendimiento dentro de tu organización con una red Wifi robusta, eficiente y segura."
  },
  {
    src: process.env.PUBLIC_URL + "/img/redes lan.jpg",
    alt: "LAN",
    titulo: "Redes LAN",
    texto: "Si quieres estar a un click de distancia, asegura tu red permitiendo una interconexión segura y robusta entre tus recursos y las personas."
  }
];

function Pruebas() {
  return (
    //div contenedor del slider
    
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="position-relative w-100 overflow-hidden h-100 px-3" style={{ minHeight: '400px' }}>
        <div className="carousel-inner">

        {imagenes.map((imagen, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <div className="container-fluid  ">
              <Row className="align-items-center " style={{ height: '100vh' }}>
                <Col md={6} className="text-center mb-5 mb-md-0 shadow">
                  <img
                    src={imagen.src}
                    alt={imagen.alt}
                    className="img-fluid rounded"
                    style={{
                      maxHeight: '400px',
                      objectFit: 'cover'
                    }}
                  />
                </Col>
                <Col md={6} className="text-start shadow ">
                  <div style={{ padding: '20px', borderRadius: '10px' }}>
                    <h2>{imagen.titulo}</h2>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                      {imagen.texto}
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        ))}

        </div>

        {/* Controles del carousel */}
        <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
        >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
        </button>
        <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
        >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </div>
  );
}

export default Pruebas;
