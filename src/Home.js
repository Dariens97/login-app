import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Home() {
  const [detalleActivo, setDetalleActivo] = useState(null);
  const [imagenActual, setImagenActual] = useState(0);

  const imagenes = [
    {
      src: process.env.PUBLIC_URL + "/img/arbol 1.jpg",
      alt: "Servicio 1",
      contenido: (
        <p style={{ background: '#222', color: '#fff', fontSize: '1.2rem', lineHeight: '1.6' }}>
          Se decidió ayudar a combatir el cambio climático y sus efectos
          producto en gran parte por nuestras acciones. Por cada proyecto aprobado se donará un árbol
          y se le entregará una tarjeta al cliente por su aporte al programa revive una.
        </p>
      )
    },

    {
      src: process.env.PUBLIC_URL + "/img/arbol 2.jpg",
      alt: "Servicio 2"
    },
    {
      src: process.env.PUBLIC_URL + "/img/cableado.png",
      alt: "Servicio 3"
    }
  ];

  useEffect(() => {
    const intervalo = setInterval(() => {
      setImagenActual((prev) => (prev + 1) % imagenes.length);
    }, 8000); // cambia cada 3 segundos

    return () => clearInterval(intervalo);
  }, [imagenes.length]);

  const animaciones = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <div className="container mt-5 text-center" >
      <div>
        <h1 >Soluciones Tecnológicas a Tu Medida</h1>
      </div>          
      <h2 className="text-center pt-5" >Nuestros Servicios</h2>

      <div className="mb-5">
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
                  className="img-fluid rounded shadow"
                  style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }}
                />
              </Col>
              <Col md={6}>
                {imagenActual === 0 && (
                  <div style={{ padding: '20px', borderRadius: '10px' }}>
                    <p style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
                      Se decidió ayudar a combatir el cambio climático y sus efectos, producto en gran parte por nuestras acciones.
                      <br />
                      <br />
                      Por cada proyecto aprobado se donará un árbol y se le entregará una tarjeta al cliente por su aporte al programa.
                    </p>
                  </div>
                )}
              </Col>
            </Row>
          </motion.div>
        </AnimatePresence>
      </div>


      {/* BLOQUE DE SERVICIOS */}
      <div className="container mt-5">
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
              {/* Sección de detalles dinámicos */}
              {detalleActivo === 'incidencias' && (
                <div className="container mt-5 row text-center justify-content-between">
                  <div style={{ paddingBottom: '50px' }}>
                    <h4>Gestión de Incidencias</h4>
                  </div>
                  <div className="col-md-3 bg-light p-4 rounded shadow">
                    <h5>Asistencia</h5>
                    <p className="fuente-personalizada" style={{ fontSize: '0.8em' }}>Atención oportuna para reducir el impacto en la seguridad y resolver problemas técnicos de Nivel 1.</p>
                  </div>
                  <div className="col-md-3 bg-light p-4 rounded shadow">
                    <h5>Servicio Preventivo</h5>
                    <p className="fuente-personalizada" style={{ fontSize: '0.8em' }}>Anticipación a fallas y aseguramiento de la durabilidad del sistema de seguridad.</p>
                  </div>
                  <div className="col-md-3 bg-light p-4 rounded shadow">
                    <h5>Servicio por Eventos</h5>
                    <p className="fuente-personalizada" style={{ fontSize: '0.8em' }}>Restauración de fallas inesperadas a nivel de hardware.</p>
                  </div>
                </div>
              )}

              {detalleActivo === 'networking' && (
                <div className="container mt-5  row text-center justify-content-between ">
                  <h4>Networking</h4>
                  <div className="col-md-3 bg-light p-4 rounded shadow">
                    <h5>Diseño de Redes LAN</h5>
                    <p className="fuente-personalizada"> Trabajamos junto a usted para definir los requerimientos y diseñar una red escalable, adaptada a su entorno. La infraestructura se implementará con tecnología y equipamiento adecuados, incorporando:

                        Servidores ISE

                        Plataforma Cisco Prime

                        Configuración de Firewall y Appliance

                        Políticas de calidad de servicio (QoS)

                        Administración de redes LAN</p>
                  </div>
                  <div className="col-md-3 bg-light p-4 rounded shadow">
                    <h5>Soluciones WiFi</h5>
                    <p className="fuente-personalizada"> Ofrecemos una solución integral para su red inalámbrica, que incluye:

                        Análisis de cobertura, dimensionamiento y detección de vulnerabilidades

                        Configuración y administración de tecnología WLC mediante AP ligeros o redes con AP autónomos

                        Implementación completa de redes WiFi</p>
                  </div>
                  <div className="col-md-3 bg-light p-4 rounded shadow">
                    <h5>Cableado Estructurado</h5>
                    <p className="fuente-personalizada"> Realizamos el levantamiento, diseño y proyección del cableado estructurado, además del mantenimiento preventivo y correctivo para asegurar un rendimiento óptimo del sistema.</p>
                  </div>
                </div>
              )}
              {detalleActivo === 'camaras' && (
                <div className="container mt-5  row text-center justify-content-between ">
                  <h4>Cámaras y Alarmas</h4>
                  
                    <h5>Cableado Estructurado</h5>
                    <div className="col-md-2 bg-light p-4 rounded shadow">
                      <h5>Inside</h5>
                      <p className="fuente-personalizada"> Brinde tranquilidad a su familia con un sistema de seguridad inalámbrico y de tecnología avanzada. Reciba alertas de intrusión directamente en su teléfono, acompañadas de imágenes en tiempo real.</p>
                    </div>
                    <div className="col-md-3 bg-light p-4 rounded shadow">
                      <h5>Perimetral</h5>
                      <p className="fuente-personalizada"> Proteja sus bienes con soluciones tecnológicas que disuaden robos y actos vandálicos. Nuestra tecnología perimetral ayuda a reducir los riesgos tanto para su patrimonio como para sus colaboradores.</p>
                    </div>
                    <div className="col-md-3 bg-light p-4 rounded shadow">
                      <h5>Alarmas Comunitarias</h5>
                      <p className="fuente-personalizada"> Proteja a su familia y comunidad con nuestras soluciones colectivas. Nuestro equipo de expertos lo asesorará para elegir la opción más adecuada para su sector.</p>
                    </div>
                    <div className="col-md-3 bg-light p-4 rounded shadow">
                      <h5>Mantención de Equipos</h5>
                      <p className="fuente-personalizada"> Nuestro personal calificado realiza mantenciones periódicas para garantizar que su sistema de seguridad funcione siempre en condiciones óptimas.</p>
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

      <div style={{ paddingTop: '50px' }}>
        <p className="fuente-personalizada" style={{ fontSize: '0.8em' }}>
          Asumimos nuestra responsabilidad social y ayudamos a combatir el cambio climático y sus efectos. Por ese motivo, se plantará un árbol nativo por medio de la ONG REFORESTEMOS por cada proyecto aprobado.
        </p>
      </div>

      <div style={{ height: '100px' }}></div>
    </div>
  );
}

export default Home;
