//import { useState, useEffect, useRef } from 'react';
//import { motion, AnimatePresence } from 'framer-motion';
import {  Row, Col } from 'react-bootstrap';
//import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function Home() {
  
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



  return (

    <div style={{ backgroundColor: "#f0f0f0", minHeight: "100vh", color: "black" }}>

      {/* div contenedor*/}
      <div style={{ minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
        <div className="w-100 h-100 px-3">
          
          <h3 className="text-center pt-3 pb-5" style={{ fontWeight: 'bold', fontSize:'30pt', color:'#21AFEB',  paddingBottom: '20px' }}>Nuestros Servicios</h3>
          <hr></hr>

          {/* Carousel */}
          <div id="myCarousel" className="carousel slide " data-bs-ride="carousel">
                <div className="position-relative " style={{ minHeight: '400px' }}>
                  <div className="carousel-inner ">
          
                  {imagenes.map((imagen, index) => (
                    <div
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                      key={index}
                    >
                      <div className="container-fluid ">
                        <Row className="align-items-center py-5">
                          <Col md={6} className="text-center mb-5 mb-md-0 ">
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
                          <Col md={6} className="text-start ">
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
          <hr></hr>

          {/* BLOQUE DE SERVICIOS */}
          <div className="container mt-5 pt-1">

            {/*titulo de las nuevas tarjetas gestion de incidencias */}
            <div className="mt-1 row text-center justify-content-between">
              
              <div>
                <h4 style={{ fontWeight: 'bold', fontSize:'25pt', color:'#21AFEB',  paddingBottom: '20px' }}>Gestión de Incidencias</h4>
                <hr style={{ color:'#0C3C5F'}}/>
              </div>
            </div>
            {/*nuevas tarjetas gestion de incidencias*/}
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center" style={{ fontSize: '1.1rem'}}>
              
              {/*Asistencia */}
              <div className="col tarjeta-zoom">
                <div className="card h-100 d-flex flex-column mb-4 rounded-3 shadow-sm">
                  <div className="card-header py-3 text-white" style={{ backgroundColor: '#21AFEB'}}>
                    <h4 className="my-0 fw-normal">Asistencia</h4>
                    <img src={`${process.env.PUBLIC_URL}/img/Asistencia.png`} alt="network" style={{ height: '50px', margin: '10px' }}/>
                  </div>
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="fuente-personalizada">
                      Atención oportuna para reducir el impacto en las operaciones de su negocio, para ello contamos con dos niveles de asistencia; el primero registra, categoriza, diagnostica y da soluciones a requerimientos más recurrentes caso contrario pasa a Nivel 2 quienes investigan y resuelven.
                    </h5>
                    </div>
                </div>
              </div>

              {/*Servicio Preventivo*/}
              <div className="col tarjeta-zoom">
                <div className="card h-100 d-flex flex-column mb-4 rounded-3 shadow-sm">
                  <div className="card-header py-3 text-white" style={{ backgroundColor: '#21AFEB'}}>
                    <h4 className="my-0 fw-normal">Servicio Preventivo</h4>
                    <img src={`${process.env.PUBLIC_URL}/img/Preventivo.png`} alt="wireless" style={{ height: '50px', margin: '10px' }} />
                  </div>
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="fuente-personalizada">Anticipación a fallas, es crucial para su continuidad operativa. El objetivo de un contrato es aumentar la durabilidad de tu equipamiento tecnológico y minimizando fallas.</h5>
                    </div>
                </div>
              </div>
              
              {/*Servicio Preventivo*/}
              <div className="col tarjeta-zoom">
                <div className="card h-100 d-flex flex-column mb-4 rounded-3 shadow-sm">
                  <div className="card-header py-3 text-white" style={{ backgroundColor: '#21AFEB'}}>
                    <h4 className="my-0 fw-normal">Servicio por Eventos</h4>
                    <img src={`${process.env.PUBLIC_URL}/img/Eventos.png`} alt="wireless" style={{ height: '50px', margin: '10px' }} />
                  </div>
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="fuente-personalizada">Restauración de fallas inesperadas por efectos de la vida util u otras variables que provoquen que el equipo deje de funcionar</h5>
                    </div>
                </div>
              </div>
              

            </div>

            {/*boton contactanos de gestion de incidencias*/}
              <div className=''>
                <button type="button" className="w-100 btn btn-lg btn-primary mt-auto " style={{ backgroundColor: '#21AFEB', border: 'none' }}>
                  <Link
                    className="nav-link fs-5"
                    style={{ color: '#f0f0f0' }}
                    to="/contact"
                    state={{ asuntoPreseleccionado: "Gestión de incidencias" }} // Cambia por cada botón
                  >
                    Contáctanos
                  </Link>
                </button>
              </div>
            {/*-------------------------------------------------------------------------------------------------*/}




            {/*titulo de las nuevas tarjetas networking */}
            <div className="mt-1 pt-5 row text-center justify-content-between">
              <div style={{ paddingBottom: '50px' }}>
                <h4 style={{ fontWeight: 'bold', fontSize:'25pt', color:'#21AFEB',  paddingBottom: '20px' }}>Networking</h4>
                <hr style={{ color:'#0C3C5F'}}/>
              </div>

            </div>
            {/*nuevas tarjetas networking*/}
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center" style={{ fontSize: '1.1rem'}}>

              <div className="col tarjeta-zoom">
                <div className="card h-100 d-flex flex-column mb-4 rounded-3 shadow-sm">
                  <div className="card-header py-3 text-white" style={{ backgroundColor: '#21AFEB'}}>
                    <h4 className="my-0 fw-normal">Diseño de redes LAN</h4>
                    <img src={`${process.env.PUBLIC_URL}/img/network.png`} alt="network" style={{ height: '50px', margin: '10px' }}/>
                  </div>
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="fuente-personalizada">
                      Trabajamos junto a usted para definir los requerimientos y diseñar una red escalable,
                      adaptada a su entorno. La infraestructura se implementará con tecnología y equipamiento adecuados, incorporando:
                    </h5>
                    <ul className="list-unstyled mt-3 mb-4" style={{ textAlign: "justify" }}>
                      <li>- Servidores ISE</li>
                      <li>- Plataforma Cisco Prime</li>
                      <li>- Configuración de Firewall y Appliance</li>
                      <li>- Políticas de calidad de servicio (QoS)</li>
                      <li>- Administración de redes LAN</li>
                    </ul>
                    </div>
                </div>
              </div>

                
              <div className="col tarjeta-zoom">
                <div className="card h-100 d-flex flex-column mb-4 rounded-3 shadow-sm">
                  <div className="card-header py-3 text-white" style={{ backgroundColor: '#21AFEB'}}>
                    <h4 className="my-0 fw-normal">wireless</h4>
                    <img src={`${process.env.PUBLIC_URL}/img/wireless.png`} alt="wireless" style={{ height: '50px', margin: '10px' }} />
                  </div>
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="fuente-personalizada">Ofrecemos soluciones de conectividad para su diversidad de dispositivos inalámbricos asegurando; Robustez,
                      seguridad y escalabilidad en la transmisión de los datos</h5>
                    <ul className="list-unstyled mt-3 mb-4" style={{ textAlign: "justify"}}>

                      <li>-Análisis de coberturas</li>
                      <li> -Detección de vulnerabilidades</li>
                      <li>- Configuración de Firewall y Appliance</li>
                      <li> -Tecnología WLC (Wireless LAN Controller)</li>
                      <li>-Implementación wifi</li>
                    </ul>
                    </div>
                </div>
              </div>

              <div className="col tarjeta-zoom">
                <div className="card h-100 d-flex flex-column mb-4 rounded-3 shadow-sm">
                  <div className="card-header py-3 text-white" style={{ backgroundColor: '#21AFEB'}}>
                    <h4 className="my-0 fw-normal">Cableado Estructurado</h4>
                    <img src={`${process.env.PUBLIC_URL}/img/cableadoestructurado.png`} alt="wireless" style={{ height: '50px', margin: '10px' }} />
                  </div>
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="fuente-personalizada">Realizamos el levantamiento, diseño y proyección del cableado estructurado. 
                      Además ofrecemos el servicio de mantenimiento preventivo y corrección para
                      Asegurar un rendimiento óptimo de su estructura alámbrica.
                      <br/>
                      <br/>
                      Tambien contamos con certificaciones de puntos de red.
                      </h5>
                    </div>
                </div>
              </div>
            </div>
            {/*boton contactanos de networking*/}
              <div>
                <button type="button" className="w-100 btn btn-lg btn-primary mt-auto " style={{ backgroundColor: '#21AFEB', border: 'none' }}>
                  <Link
                    className="nav-link fs-5"
                    style={{ color: '#f0f0f0' }}
                    to="/contact"
                    state={{ asuntoPreseleccionado: "Networking" }} // Cambia por cada botón
                  >
                    Contáctanos
                  </Link>
                </button>
              </div>
            {/*-------------------------------------------------------------------------------------------------*/}





            {/*titulo de las nuevas tarjetas camaras y alarmas */}
            <div className="mt-5 pt-4 text-center">
              <h4 style={{ fontWeight: 'bold', fontSize:'25pt', color:'#21AFEB',  paddingBottom: '20px' }}>Cámaras y Alarmas</h4>
              <hr style={{ color:'#0C3C5F'}}/>
              <div className="row mt-4">
                
                {/*-------------------------------------------------------------------------------------------------*/}
                <div className="row justify-content-center mt-4">
                </div>
              
                <div className="col tarjeta-zoom">
                  <div className="card h-100 d-flex flex-column mb-4 rounded-3 shadow-sm">
                    <div className="card-header py-3 text-white" style={{ backgroundColor: '#21AFEB'}}>
                      <h4 className="my-0 fw-normal">Inside</h4>
                      <img src={`${process.env.PUBLIC_URL}/img/camara-inside.png`} alt="network" style={{ height: '50px', margin: '10px' }}/>
                    </div>
                    <div className="card-body d-flex flex-column justify-content-between">
                      <h5 className="fuente-personalizada">
                        Brinde tranquilidad a su familia con un sistema de seguridad inalámbrico y de tecnología avanzada. 
                        <br></br>
                        <br></br>
                        Reciba alertas de intrusión directamente en su teléfono, acompañadas de imágenes en tiempo real.
                      </h5>
                      </div>
                  </div>
                </div>

                <div className="col tarjeta-zoom">
                  <div className="card h-100 d-flex flex-column mb-4 rounded-3 shadow-sm">
                    <div className="card-header py-3 text-white" style={{ backgroundColor: '#21AFEB'}}>
                      <h4 className="my-0 fw-normal">Perimetral</h4>
                      <img src={`${process.env.PUBLIC_URL}/img/perimetral2.png`} alt="network" style={{ height: '50px', margin: '10px' }}/>
                    </div>
                    <div className="card-body d-flex flex-column justify-content-between">
                      <h5 className="fuente-personalizada">
                        Proteja sus bienes con soluciones tecnológicas que disuaden robos y actos vandálicos. 
                        <br></br>
                        <br></br>
                        Nuestra tecnología perimetral ayuda a reducir los riesgos tanto para su patrimonio como para sus colaboradores.
                      </h5>
                      </div>
                  </div>
                </div>

               {/*-------------------------------------------------------------------------------------------------*/}
                <div className="row justify-content-center mt-3">
                </div>
                

                <div className="col tarjeta-zoom">
                  <div className="card h-100 d-flex flex-column mb-4 rounded-3 shadow-sm">
                    <div className="card-header py-3 text-white" style={{ backgroundColor: '#21AFEB'}}>
                      <h4 className="my-0 fw-normal">Alarmas comunitarias</h4>
                      <img src={`${process.env.PUBLIC_URL}/img/alarma-comunitaria.png`} alt="network" style={{ height: '50px', margin: '10px' }}/>
                    </div>
                    <div className="card-body d-flex flex-column justify-content-between">
                      <h5 className="fuente-personalizada">
                       Ofrecemos este tipo de alarmas para asegurar una protección coordinada, donde todos pueden monitorear en tiempo real.
                        <br></br>
                        <br></br>
                        Nuestro equipo de expertos lo asesorará para elegir la opción más adecuada para su sector.
                      </h5>
                     </div>
                  </div>
                </div>

                <div className="col tarjeta-zoom">
                  <div className="card h-100 d-flex flex-column mb-4 rounded-3 shadow-sm">
                    <div className="card-header py-3 text-white" style={{ backgroundColor: '#21AFEB'}}>
                      <h4 className="my-0 fw-normal">Mantención de Equipos</h4>
                      <img src={`${process.env.PUBLIC_URL}/img/mantencion-camaras.png`} alt="network" style={{ height: '50px', margin: '10px' }}/>
                    </div>
                    <div className="card-body d-flex flex-column justify-content-between">
                      <h5 className="fuente-personalizada">
                        Nuestro personal calificado realiza mantenciones periódicas para garantizar que su sistema de seguridad funcione siempre en condiciones óptimas.
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              
              {/*boton contactanos de camaras y alarmas*/}
              <div className='pt-3'>
                <button type="button" className="w-100 btn btn-lg btn-primary mt-auto " style={{ backgroundColor: '#21AFEB', border: 'none' }}>
                  <Link
                    className="nav-link fs-5"
                    style={{ color: '#f0f0f0' }}
                    to="/contact"
                    state={{ asuntoPreseleccionado: "Camaras y Alarmas" }} // Cambia por cada botón
                  >
                    Contáctanos
                  </Link>
                </button>
              </div>

            </div>
            {/*-------------------------------------------------------------------------------------------------*/}

          </div>
          
          {/* BLOQUE DE PROVEEDORES */}
          <div className="container mt-5 pt-1">
            <div className="container mt-1 row text-center justify-content-between">
              <div style={{ paddingBottom: '50px' }}>
                <h2 className="titulo  text-gradient-blue" style={{fontSize:'30pt', color:'#21AFEB'}}>Marcas con las que trabajamos</h2>
                <hr style={{ color:'#0C3C5F'}}/>
                
                
                <div className="d-flex justify-content-around align-items-center flex-wrap">
                  <img src={`${process.env.PUBLIC_URL}/img/hikvision.png`} alt="Hikvision" style={{ height: '50px', margin: '10px' }} />
                  <img src={`${process.env.PUBLIC_URL}/img/marcas/dahua.png`} alt="Dahua" style={{ height: '25px', margin: '10px' }} />
                  <img src={`${process.env.PUBLIC_URL}/img/marcas/ezviz.png`} alt="Ezviz" style={{ height: '65px', margin: '10px' }} />
                  <img src={`${process.env.PUBLIC_URL}/img/marcas/tapo.png`} alt="Tapo" style={{ height: '28px', margin: '10px' }} />
                  
                </div>
                <div className="d-flex justify-content-around align-items-center flex-wrap">
                  <img src={`${process.env.PUBLIC_URL}/img/marcas/cisco.png`} alt="Cisco" style={{ height: '45px', margin: '10px' }} />
                  <img src={`${process.env.PUBLIC_URL}/img/marcas/huawei.png`} alt="Huawei" style={{ height: '65px', margin: '10px' }} />
                  <img src={`${process.env.PUBLIC_URL}/img/marcas/fortinet.png`} alt="Fortinet" style={{ height: '100px', margin: '10px' }} />
                  <img src={`${process.env.PUBLIC_URL}/img/marcas/asus.png`} alt="Asus" style={{ height: '45px', margin: '10px' }} />
                  <img src={`${process.env.PUBLIC_URL}/img/marcas/linksys.png`} alt="Linksys" style={{ height: '50px', margin: '10px' }} />
                  
                </div>
                <hr style={{ color:'#0C3C5F'}}/>
                <p className="text-muted mt-2 w-100 text-center" style={{ fontSize: '0.9rem' }}>
                    *Logos mostrados solo con fines informativos*
                  </p>


              </div>
            </div>
          </div>

          {/* BLOQUE DE CLIENTES */}
          <div className="container mt-5 pt-1">
            <div className="container mt-1 row text-center justify-content-between">
              <div style={{ paddingBottom: '50px' }}>
                <h4 className="titulo  text-gradient-blue" style={{fontSize:'30pt', color:'#21AFEB'}}>Nuestros clientes</h4>
                <hr style={{ color:'#0C3C5F'}}/>
              </div>
            </div>
          </div>


        </div> 
      </div>   
    </div>

    
  );
    

}

export default Home;
