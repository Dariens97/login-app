import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {  Row, Col } from 'react-bootstrap';

function Home() {
  const [detalleActivo, setDetalleActivo] = useState(null);
  const [imagenActual, setImagenActual] = useState(0);

  const imagenes = [
    {
      src: process.env.PUBLIC_URL + "/img/arbol 2.jpg",
      alt: "Servicio 1"
    },

    {
      src: process.env.PUBLIC_URL + "/img/cctv.jpg",
      alt: "Servicio 2"

    },
    {
      src: process.env.PUBLIC_URL + "/img/cableado-estructurado.jpg",
      alt: "Servicio 3"
    },
    {
      src: process.env.PUBLIC_URL + "/img/proyecto redes LAN.jpg",
      alt: "Servicio 4"
    },
    {
      src: process.env.PUBLIC_URL + "/img/redes lan.jpg",
      alt: "Servicio 5"
    }
  ];

  useEffect(() => {
      imagenes.forEach((img) => {
        const preloadImg = new Image();
        preloadImg.src = img.src;
      });
    }, []);

  

    


  useEffect(() => {
    const intervalo = setInterval(() => {
      setImagenActual((prev) => (prev + 1) % imagenes.length);
    }, 10000); // cambia cada 10 segundos

    return () => clearInterval(intervalo);
  }, [imagenes.length]);

  const animaciones = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };
return (
  /* div contenedor*/
  <div style={{ transform: 'scale(0.75)', transformOrigin: 'top center' }}>
    <div className="container mt-5 text-center ">

                   
      <h3 className="text-center pt-1 pb-5">Nuestros Servicios</h3>
      
      {/*div contenedor de imagenes con texto */}
      <div className="mb-5 " style={{ minHeight: '300px' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={imagenActual}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            
          >
            <Row className="align-items-center">
              <Col md={6} className="text-center mb-4 mb-md-0">
                <img
                  src={imagenes[imagenActual].src}
                  alt={imagenes[imagenActual].alt}
                  className="img-fluid rounded "
                  style={{ maxHeight: '400px', maxWidth: '200', objectFit: 'cover' }}
                />
              </Col>
              <Col md={6}>
                {imagenActual === 0 && (
                  <div style={{ padding: '20px', borderRadius: '10px' }}>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                      <h2>Regalemos un arbol nativo</h2>
                      <br />
                      
                     Juntémonos para combatir el cambio climático y sus efectos producto en gran parte por nuestras acciones.
                      <br />
                      <br />
                      Por cada proyecto aprobado en conjunto donaremos un árbol y se entregará una tarjeta al cliente como recuerdo por su aporte al programa Reforestemos.
                    </p>
                  </div>
                )}
                {imagenActual === 1 && (
                  <div style={{ padding: '20px', borderRadius: '10px' }}>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                       <h2>Sistema CCTV y sensores</h2>
                      <br />
                        Asesoría, instalación, mejoras, mantención en sistemas de seguridad CCTV.
                        Ayudamos a que se sientan seguro y tranquilo en su ambiente.
                        <br />
                        <br />
                        Asesoramos y diseñamos soluciones a tu medida con equipos de alta calidad.
                                           
                        
                        
                    </p>
                  </div>
                )}
                {imagenActual === 2 && (
                  <div style={{ padding: '20px', borderRadius: '10px' }}>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                       <h2>Cableado Estructurado</h2>
                      <br />
                      Entendemos lo importante de una red de datos.
                      <br />
                      por eso cumplimos la norma ANSI/TIA/EIA-568 y nos esmeramos por ofrecer un servicio profesional en proyectos
                      de instalacion, mantención y optimización para; 
                      <br />
                       colegios, oficinas, pequeñas y medianas empresas, etc.  
                    </p>
                  </div>
                )}
                {imagenActual === 3 && (
                  <div style={{ padding: '20px', borderRadius: '10px' }}>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                       <h2>Soluciones WIFI y AP</h2>
                      <br />
                      Mantengamos a todos conectados y en movimiento. 
                      <br />
                      Maximiza tu conectividad y rendimiento dentro de tu organización con una red Wifi robusta, eficiente y segura.
                    </p>
                  </div>
                )}
                {imagenActual === 4 && (
                  <div style={{ padding: '20px', borderRadius: '10px' }}>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                       <h2>Redes LAN</h2>
                      <br />
                      Si quieres estar a un click de distancia, asegura tu red permitiendo una interconexión segura y robusta entre tus recursos y las personas. 
                      
                    </p>
                  </div>
                )}


              </Col>
            </Row>
          </motion.div>
        </AnimatePresence>
      </div>


      {/* BLOQUE DE SERVICIOS */}
      <div className="container mt-5 pt-1">
        <AnimatePresence mode="wait">
          {!detalleActivo ? (
            <motion.div
              key="principal"
              {...animaciones}
              className="row text-center justify-content-between"
            >
              {/* Tarjetas */}
              <div className="col-md-3 bg-light p-4 rounded shadow d-flex flex-column justify-content-between" style={{ minHeight: '300px' }}>
                <h4>Gestión De Incidencias</h4>
                <p className="fuente-personalizada">Asistencia</p>
                <p className="fuente-personalizada">Servicio Preventivo</p>
                <p className="fuente-personalizada">Servicio Por Eventos</p>
                <div className="mt-auto text-center">
                  <button className="btn btn-primary" onClick={() => setDetalleActivo('incidencias')}>
                    Ver más
                  </button>
                </div>
              </div>

              <div className="col-md-3 bg-light p-4 rounded shadow d-flex flex-column justify-content-between" style={{ minHeight: '300px' }}>
                <h4>Networking</h4>
                <p className="fuente-personalizada">Proyectos de redes LAN</p>
                <p className="fuente-personalizada">Soluciones Wifi y AP</p>
                <p className="fuente-personalizada">Cableado estructurado</p>
                <div className="mt-auto text-center">
                  <button className="btn btn-primary" onClick={() => setDetalleActivo('networking')}>
                    Ver más
                  </button>
                </div>
              </div>

              <div className="col-md-3 bg-light p-4 rounded shadow d-flex flex-column justify-content-between" style={{ minHeight: '300px' }}>
                <h4>Cámaras y Alarmas</h4>
                <p className="fuente-personalizada">Sistema Inside</p>
                <p className="fuente-personalizada">Sistema Perimetral</p>
                <p className="fuente-personalizada">Alarmas Comunitarias</p>
                <p className="fuente-personalizada">Mantención de equipos</p>
                <div className="mt-auto text-center">
                  <button className="btn btn-primary" onClick={() => setDetalleActivo('camaras')}>
                    Ver más
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="detalles"
              {...animaciones}
              className="row text-center justify-content-center"
            >
              {/* Sección de detalles dinámicos 
              {detalleActivo === 'incidencias' && (
                <div className="container mt-1 row text-center justify-content-between">
                  <div style={{ paddingBottom: '50px' }}>
                    <h4>Gestión de Incidencias</h4>
                  </div>
                  <div className="col-md-3 bg-light p-4 rounded shadow">
                    <h5>Asistencia</h5>
                    <p className="fuente-personalizada" >Atención oportuna para reducir el impacto en la seguridad y resolver problemas técnicos de Nivel 1.</p>
                  </div>
                  <div className="col-md-3 bg-light p-4 rounded shadow">
                    <h5>Servicio Preventivo</h5>
                    <p className="fuente-personalizada" >Anticipación a fallas y aseguramiento de la durabilidad del sistema de seguridad.</p>
                  </div>
                  <div className="col-md-3 bg-light p-4 rounded shadow">
                    <h5>Servicio por Eventos</h5>
                    <p className="fuente-personalizada" >Restauración de fallas inesperadas a nivel de hardware.</p>
                  </div>
                </div>
              )}*/}
              {detalleActivo === 'incidencias' && (
                <div className="container mt-5 text-center">
                  <h4>Gestión de Incidencias</h4>
                  <div className="row mt-4">

                    {/* Tarjeta izquierda (grande) */}
                    <div className="col-md-6 mb-4">
                      <div className="card-hover bg-light rounded shadow h-100 d-flex flex-column">
                        
                        <img
                          src={process.env.PUBLIC_URL + "/img/Asistencia.png"}
                          alt="Asistencia"
                          className="img-fluid"
                          style={{ height: "300px", width: "100%", objectFit: "cover" }}
                        />
                        <div className="overlay d-flex flex-column justify-content-center align-items-center text-center p-3">
                          <h5 className="mb-2">Asistencia</h5>
                          <p>Atención oportuna para reducir el impacto en la seguridad y resolver problemas técnicos de Nivel 1.</p>
                        </div>
                      </div>
                    </div>

                    {/* Columna derecha (2 tarjetas pequeñas) */}
                    <div className="col-md-6 d-flex flex-column justify-content-between">
                      <div className="card-hover bg-light rounded shadow mb-4 flex-fill">
                        
                        <img
                          src={process.env.PUBLIC_URL + "/img/servicio preventivo.png"}
                          alt="Preventivo"
                          className="img-fluid"
                          style={{ height: "145px", width: "100%", objectFit: "cover" }}
                        />
                        <div className="overlay d-flex flex-column justify-content-center align-items-center text-center p-3">
                          <h5 className="pt-3">Servicio Preventivo</h5>
                          <p>Anticipación a fallas y aseguramiento de la durabilidad del sistema de seguridad.</p>
                        </div>
                      </div>

                      <div className="card-hover bg-light rounded shadow flex-fill">
                        
                        <img
                          src={process.env.PUBLIC_URL + "/img/servicio por eventos.jpg"}
                          alt="Eventos"
                          className="img-fluid"
                          style={{ height: "145px", width: "100%", objectFit: "cover" }}
                        />
                        <div className="overlay d-flex flex-column justify-content-center align-items-center text-center p-3">
                          <h5 className="pt-3">Servicio por Eventos</h5>
                          <p>Restauración de fallas inesperadas a nivel de hardware.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}


              {detalleActivo === 'networking' && (
                <div className="container mt-5 text-center">
                  <h4>Networking</h4>
                  <div className="row mt-4">

                    {/*tarjeta izquierda */}
                    <div className="col-md-6 mb-4">
                      <div className="card-hover bg-light rounded shadow h-100 d-flex flex-column">
                        <div className="card-hover bg-light rounded shadow h-100 d-flex flex-column">
                          <img
                            src={process.env.PUBLIC_URL + "/img/Asistencia.png"}
                            alt="Asistencia"
                            className="img-fluid"
                            style={{ height: "300px", width: "100%", objectFit: "cover" }}
                          />
                          <div className="overlay d-flex flex-column justify-content-center align-items-center text-center p-3">
                            <h5 className="mb-2">Diseño de Redes LAN</h5>
                            <p>Trabajamos junto a usted para definir los requerimientos y diseñar una red escalable, adaptada a su entorno. La infraestructura se implementará con tecnología y equipamiento adecuados, incorporando:

                            Servidores ISE

                            Plataforma Cisco Prime

                            Configuración de Firewall y Appliance

                            Políticas de calidad de servicio (QoS)

                            Administración de redes LAN</p>
                          </div>
                        </div>
                      </div>

                    </div>

                    {/*tarjetas a la derecha */}
                    <div className="col-md-6 d-flex flex-column justify-content-between">
                      <div className="card-hover bg-light rounded shadow mb-4 flex-fill">
                        
                        <img
                          src={process.env.PUBLIC_URL + "/img/servicio preventivo.png"}
                          alt="Preventivo"
                          className="img-fluid"
                          style={{ height: "145px", width: "100%", objectFit: "cover" }}
                        />
                        <div className="overlay d-flex flex-column justify-content-center align-items-center text-center p-3">
                          <h5 className="pt-3">Soluciones WiFi</h5>
                          <p>Ofrecemos una solución integral para su red inalámbrica, que incluye:
                            Análisis de cobertura, dimensionamiento y detección de vulnerabilidades
                            Configuración y administración de tecnología WLC mediante AP ligeros o redes con AP autónomos
                            Implementación completa de redes WiFi</p>
                        </div>
                      </div>

                      <div className="card-hover bg-light rounded shadow flex-fill">
                        
                        <img
                          src={process.env.PUBLIC_URL + "/img/servicio por eventos.jpg"}
                          alt="Eventos"
                          className="img-fluid"
                          style={{ height: "145px", width: "100%", objectFit: "cover" }}
                        />
                        <div className="overlay d-flex flex-column justify-content-center align-items-center text-center p-3">
                          <h5 className="pt-3">Cableado Estructurado</h5>
                          <p>Realizamos el levantamiento, diseño y proyección del cableado estructurado, además del mantenimiento preventivo y correctivo para asegurar un rendimiento óptimo del sistema.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}


              {detalleActivo === 'camaras' && (
                <div className="container mt-5 text-center">
                  <h4>Cámaras y Alarmas</h4>
                  <div className="row mt-4">
                    
                    {/*tarjeta izquierda */}

                      <div className="col-md-6 mb-4">
                        <div className="card-hover bg-light rounded shadow h-100 d-flex flex-column">
                          <div className="card-hover bg-light rounded shadow h-100 d-flex flex-column">
                            <img
                              src={process.env.PUBLIC_URL + "/img/Asistencia.png"}
                              alt="Asistencia"
                              className="img-fluid"
                              style={{ height: "300px", width: "100%", objectFit: "cover" }}
                            />
                            <div className="overlay d-flex flex-column justify-content-center align-items-center text-center p-3">
                              <h5 className="mb-2">Inside</h5>
                              <p>Brinde tranquilidad a su familia con un sistema de seguridad inalámbrico y de tecnología avanzada. 
                              <br></br>
                              Reciba alertas de intrusión directamente en su teléfono, acompañadas de imágenes en tiempo real.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    {/*tarqueta grande 2 */}
                      <div className="col-md-6 mb-4">
                        <div className="card-hover bg-light rounded shadow h-100 d-flex flex-column">
                          <div className="card-hover bg-light rounded shadow h-100 d-flex flex-column">
                            <img
                              src={process.env.PUBLIC_URL + "/img/Asistencia.png"}
                              alt="Asistencia"
                              className="img-fluid"
                              style={{ height: "300px", width: "100%", objectFit: "cover" }}
                            />
                            <div className="overlay d-flex flex-column justify-content-center align-items-center text-center p-3">
                              <h5 className="mb-2">Perimetral</h5>
                              <p>
                                Proteja sus bienes con soluciones tecnológicas que disuaden robos y actos vandálicos. 
                                <br></br>
                                Nuestra tecnología perimetral ayuda a reducir los riesgos tanto para su patrimonio como para sus colaboradores.</p>
                            </div>
                          </div>
                        </div>
                      </div>


                    {/*<div className="row justify-content-center mt-4">
                      <div className="col-md-5 bg-light p-4 m-2 rounded shadow" >
                        <h5>Inside</h5>
                        <p className="fuente-personalizada">
                          Brinde tranquilidad a su familia con un sistema de seguridad inalámbrico y de tecnología avanzada. 
                          <br></br>
                          Reciba alertas de intrusión directamente en su teléfono, acompañadas de imágenes en tiempo real.
                        </p>
                      </div>
                      <div className="col-md-5 bg-light p-4 m-2 rounded shadow">
                        <h5>Perimetral</h5>
                        <p className="fuente-personalizada">
                          Proteja sus bienes con soluciones tecnológicas que disuaden robos y actos vandálicos. 
                          <br></br>
                          Nuestra tecnología perimetral ayuda a reducir los riesgos tanto para su patrimonio como para sus colaboradores.
                        </p>
                      </div>
                    </div>
                  
                    <div className="row justify-content-center mt-3">
                      <div className="col-md-5 bg-light p-4 m-2 rounded shadow">
                        <h5>Alarmas Comunitarias</h5>
                        <p className="fuente-personalizada">
                          
                          Ofrecemos este tipo de alarmas para asegurar una protección coordinada, donde todos pueden monitorear en tiempo real.
                          <br></br>
                          <br></br>
                          Nuestro equipo de expertos lo asesorará para elegir la opción más adecuada para su sector.
                          
                        </p>
                      </div>
                      <div className="col-md-5 bg-light p-4 m-2 rounded shadow">
                        <h5>Mantención de Equipos</h5>
                        <p className="fuente-personalizada">
                          Nuestro personal calificado realiza mantenciones periódicas para garantizar que su sistema de seguridad funcione siempre en condiciones óptimas.
                        </p>
                      </div>
                    </div>*/}
                  </div>

                  {/*tarjetas grandes parte de abajo */}
                  <div className="row mt-4">

                    {/*tarjeta izquierda 3 */}
                       <div className="col-md-6 mb-4">
                        <div className="card-hover bg-light rounded shadow h-100 d-flex flex-column">
                          <div className="card-hover bg-light rounded shadow h-100 d-flex flex-column">
                            <img
                              src={process.env.PUBLIC_URL + "/img/Asistencia.png"}
                              alt="Asistencia"
                              className="img-fluid"
                              style={{ height: "300px", width: "100%", objectFit: "cover" }}
                            />
                            <div className="overlay d-flex flex-column justify-content-center align-items-center text-center p-3">
                              <h5 className="mb-2">Mantención de Equipos</h5>
                              <p>Nuestro personal calificado realiza mantenciones periódicas para garantizar que su sistema de seguridad funcione siempre en condiciones óptimas.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                    {/*tarjeta izquierda 4 */}
                      <div className="col-md-6 mb-4">
                        <div className="card-hover bg-light rounded shadow h-100 d-flex flex-column">
                          <div className="card-hover bg-light rounded shadow h-100 d-flex flex-column">
                            <img
                              src={process.env.PUBLIC_URL + "/img/Asistencia.png"}
                              alt="Asistencia"
                              className="img-fluid"
                              style={{ height: "300px", width: "100%", objectFit: "cover" }}
                            />
                            <div className="overlay d-flex flex-column justify-content-center align-items-center text-center p-3">
                              <h5 className="mb-2">Alarmas Comunitarias</h5>
                              <p>
                                Ofrecemos este tipo de alarmas para asegurar una protección coordinada, donde todos pueden monitorear en tiempo real.
                                <br></br>
                                <br></br>
                                Nuestro equipo de expertos lo asesorará para elegir la opción más adecuada para su sector.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>

                </div>
              )}


              <motion.button
                className="btn btn-secondary mt-4"
                onClick={() => setDetalleActivo(null)}
                whileHover={{ scale: 1.05 }}
              >
                Volver
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* BLOQUE DE productos */}
      <div className="container mt-5 pt-1">
        


      </div>


    </div> 
  </div>   


    
  );
    

}

export default Home;
