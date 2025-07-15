import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {  Row, Col } from 'react-bootstrap';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function Home() {
  //const [detalleActivo, setDetalleActivo] = useState(null);
  const [imagenActual, setImagenActual] = useState(0);

  
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



  useEffect(() => {
    const intervalo = setInterval(() => {
      setImagenActual((prev) => (prev + 1) % imagenes.length);
    }, 8000);
    return () => clearInterval(intervalo);
  }, []);

  const irA = (dir) => {
    setImagenActual((prev) =>
      dir === "izq"
        ? (prev - 1 + imagenes.length) % imagenes.length
        : (prev + 1) % imagenes.length
    );
  };

  /*  const imagenes = [
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

 */


  return (
  /* div contenedor*/
   <div style={{ minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
    <div className="w-100 h-100 px-3">

      <h3 className="text-center pt-1 pb-5">Nuestros Servicios</h3>
      <div className="position-relative w-100 overflow-hidden" style={{ minHeight: '400px' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={imagenActual}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Row className="align-items-center">
              <Col md={6} className="text-center mb-5 mb-md-0">
                <img
                  src={imagenes[imagenActual].src}
                  alt={imagenes[imagenActual].alt}
                  className="img-fluid rounded"
                  style={{ maxHeight: '400px', objectFit: 'cover' }}
                />
              </Col>
              <Col md={6} className="text-start">
                <div style={{ padding: '20px', borderRadius: '10px' }}>
                  <h2>{imagenes[imagenActual].titulo}</h2>
                  <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>{imagenes[imagenActual].texto}</p>
                </div>
              </Col>
            </Row>
          </motion.div>
        </AnimatePresence>

        {/* Flechas de navegación */}
        <button
          onClick={() => irA("izq")}
          className="position-absolute top-50 start-0 translate-middle-y btn btn-light opacity-50"
          style={{ zIndex: 10 }}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => irA("der")}
          className="position-absolute top-50 end-0 translate-middle-y btn btn-light opacity-50"
          style={{ zIndex: 10 }}
        >
          <ChevronRight size={24} />
        </button>
      </div>





      {/* <div className="mb-5 " style={{ minHeight: '300px' }}>
          <AnimatePresence mode="wait">
          <motion.div
            key={imagenActual}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          >
            <Row className="align-items-center">
              <Col md={6} className="text-center mb-5 mb-md-0">
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
                    <p style={{ fontSize: '1.3rem', lineHeight: '1.6' }}>
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
                    <p style={{ fontSize: '1.3rem', lineHeight: '1.6' }}>
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
                    <p style={{ fontSize: '1.3rem', lineHeight: '1.6' }}>
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
                    <p style={{ fontSize: '1.3rem', lineHeight: '1.6' }}>
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
                    <p style={{ fontSize: '1.3rem', lineHeight: '1.6' }}>
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
      </div>*/}


      {/* BLOQUE DE SERVICIOS */}
      <div className="container mt-5 pt-1">

        <div className="container mt-1 row text-center justify-content-between">
          <div style={{ paddingBottom: '50px' }}>
            <h4>Gestión de Incidencias</h4>
          </div>
          <div className="col-md-3 bg-light p-4 rounded shadow" style={{ fontSize: '1.1rem',}}>
            <h5>Asistencia <br/> <img src={`${process.env.PUBLIC_URL}/img/Asistencia.jpg`} alt="asistencia" style={{ height: '50px', margin: '10px' }} /></h5>
              <div style={{ textAlign: "justify"}}>
                <p className="fuente-personalizada" >Atención oportuna para reducir el impacto en las operaciones de su negocio. Por este servicio podremos restablecer lo antes posible la operatividad. Para ello contamos con dos niveles de asistencia.
                  el nivel 1: registra, categoriza diagnostica y da soluciones a requerimientos más recurrentes.
                  <br/>
                  caso contrario pasa a nivel 2 quienes investigan y resuelven. para ello se implementó una plataforma de administración de asistencias (TICKETS)
                </p>
              </div>
          </div>
          <div className="col-md-3 bg-light p-4 rounded shadow" style={{ fontSize: '1.1rem',}}>
            <h5>Servicio Preventivo <br/><img src={`${process.env.PUBLIC_URL}/img/Preventivo.png`} alt="preventivo" style={{ height: '50px', margin: '10px' }} /></h5>
             <div style={{ textAlign: "justify"}}>
                <p className="fuente-personalizada" >Anticipación a fallas, es crucial para su continuidad operativa. El objetivo de un contrato de mantenimiento preventivo es aumentar la durabilidad de tu equipamiento tecnologico, previniendo desperfectos y minimizando fallas
                </p>
              </div>
          </div>
          <div className="col-md-3 bg-light p-4 rounded shadow" style={{ fontSize: '1.1rem',}}>
            <h5>Servicio por Eventos <br/><img src={`${process.env.PUBLIC_URL}/img/Eventos.png`} alt="eventos" style={{ height: '50px', margin: '10px' }} /></h5>
             <div style={{ textAlign: "justify"}}>
              <p className="fuente-personalizada" >Restauración de fallas inesperadas por efectos de la vida util u otras variables que provoquen que el equipo deje de funcionar</p>
            </div>
          </div>
        </div>

        <div className="container mt-1 pt-5 row text-center justify-content-between">
          <div style={{ paddingBottom: '50px' }}>
            <h4>Networking</h4>
          </div>
          <div className="col-md-3 bg-light p-2 rounded shadow " style={{ fontSize: '1.1rem'}}>
            <h5>Diseño de Redes LAN <br/><img src={`${process.env.PUBLIC_URL}/img/network.png`} alt="network" style={{ height: '50px', margin: '10px' }} /></h5>
            <div style={{ textAlign: "justify"}}>
              <p className="fuente-personalizada " >Trabajamos junto a usted para definir los requerimientos y diseñar una red escalable, adaptada a su entorno. La infraestructura se implementará con tecnología y equipamiento adecuados, incorporando: <br></br>
                    
                    - Servidores ISE<br />
                    - Plataforma Cisco Prime<br />
                    - Configuración de Firewall y Appliance<br />
                    - Políticas de calidad de servicio (QoS)<br />
                    - Administración de redes LAN
              </p>
            </div>
          </div>
          <div className="col-md-3 bg-light p-2 rounded shadow" style={{ fontSize: '1.1rem'}}>
            <h5>wireless <br/><img src={`${process.env.PUBLIC_URL}/img/wireless.png`} alt="wireless" style={{ height: '50px', margin: '10px' }} /></h5>
            <div style={{ textAlign: "justify"}}>
              <p className="fuente-personalizada" >Ofrecemos soluciones de conectividad para su diversidad de dispositivos inalámbricos asegurando; Robustez,
                seguridad y escalabilidad en la transmisión de los datos
                <br/>
                <br/>
                -Análisis de coberturas<br/>
                -Detección de vulnerabilidades<br/>
                -Tecnología WLC (Wireless LAN Controller)<br/>
                -Implementación wifi</p>
            </div>
          </div>
          <div className="col-md-3 bg-light p-2 rounded shadow" style={{ fontSize: '1.1rem'}}>
            <h5>Cableado Estructurado</h5>
            <p className="fuente-personalizada" >Realizamos el levantamiento, diseño y proyección del cableado estructurado, además del mantenimiento preventivo y correctivo para asegurar un rendimiento óptimo del sistema.</p>
          </div>
        </div>

        <div className="container mt-5 pt-4 text-center">
          <h4>Cámaras y Alarmas</h4>
          <div className="row mt-4">
            
            
            <div className="row justify-content-center mt-4">
              <div className="col-md-5 bg-light p-4 m-2 rounded shadow" style={{ fontSize: '1.1rem'}}>
                <h5>Inside <br/><img src={`${process.env.PUBLIC_URL}/img/camara-inside.png`} alt="camaraInside" style={{ height: '50px', margin: '10px' }} /></h5>
                <div style={{ textAlign: "justify"}}>
                    <p className="fuente-personalizada">
                    Brinde tranquilidad a su familia con un sistema de seguridad inalámbrico y de tecnología avanzada. 
                    <br></br>
                    <br></br>
                    Reciba alertas de intrusión directamente en su teléfono, acompañadas de imágenes en tiempo real.
                  </p>

                </div>
                  
              </div>
              <div className="col-md-5 bg-light p-4 m-2 rounded shadow" style={{ fontSize: '1.1rem'}}>
                
                <h5>Perimetral <br/>
                  <img src={`${process.env.PUBLIC_URL}/img/perimetral2.png`} alt="perimetral" style={{ height: '50px', margin: '10px' }} /></h5>
                
                <div style={{ textAlign: "justify"}}>
                  <p className="fuente-personalizada">
                    Proteja sus bienes con soluciones tecnológicas que disuaden robos y actos vandálicos. 
                    <br></br>
                    <br></br>
                    Nuestra tecnología perimetral ayuda a reducir los riesgos tanto para su patrimonio como para sus colaboradores.
                  </p>
                </div>
              </div>
            </div>
          
            <div className="row justify-content-center mt-3">
              <div>

              </div>
              <div className="col-md-5 bg-light p-4 m-2 rounded shadow" style={{ fontSize: '1.1rem',}}>  
                <div>
                   <h5 >Alarmas comunitarias <br/>
                     <img src={`${process.env.PUBLIC_URL}/img/alarma-comunitaria.png`} alt="alarmacom" style={{ height: '50px', margin: '10px' }} /></h5>
                </div>
                <div style={{ textAlign: "justify"}}>
                  <p className="fuente-personalizada">
                  
                  Ofrecemos este tipo de alarmas para asegurar una protección coordinada, donde todos pueden monitorear en tiempo real.
                  <br></br>
                  <br></br>
                  Nuestro equipo de expertos lo asesorará para elegir la opción más adecuada para su sector.
                  
                  </p>  
              </div>
                
              </div>
              <div className="col-md-5 bg-light p-4 m-2 rounded shadow" style={{ fontSize: '1.1rem'}}>
                <h5>Mantención de Equipos <br/>
                 <img src={`${process.env.PUBLIC_URL}/img/mantencion-camaras.png`} alt="mantcamaras" style={{ height: '50px', margin: '10px' }} /></h5>
                <div style={{ textAlign: "justify"}}>
                  <p className="fuente-personalizada">
                    Nuestro personal calificado realiza mantenciones periódicas para garantizar que su sistema de seguridad funcione siempre en condiciones óptimas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          

        </div>





        {/* 
        <AnimatePresence mode="wait">
          {!detalleActivo ? (
            <motion.div
              key="principal"
              {...animaciones}
              className="row text-center justify-content-between"
            >
              {/* Tarjetas 
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
              {/*incidencias
              {detalleActivo === 'incidencias' && (
                <div className="container mt-1 row text-center justify-content-between">
                  <div style={{ paddingBottom: '50px' }}>
                    <h4>Gestión de Incidencias</h4>
                  </div>
                  <div className="col-md-3 bg-light p-4 rounded shadow" style={{ fontSize: '1.1rem',}}>
                    <h5>Asistencia</h5>
                    <p className="fuente-personalizada" >Atención oportuna para reducir el impacto en la seguridad y resolver problemas técnicos de Nivel 1.</p>
                  </div>
                  <div className="col-md-3 bg-light p-4 rounded shadow" style={{ fontSize: '1.1rem',}}>
                    <h5>Servicio Preventivo</h5>
                    <p className="fuente-personalizada" >Anticipación a fallas y aseguramiento de la durabilidad del sistema de seguridad.</p>
                  </div>
                  <div className="col-md-3 bg-light p-4 rounded shadow" style={{ fontSize: '1.1rem',}}>
                    <h5>Servicio por Eventos</h5>
                    <p className="fuente-personalizada" >Restauración de fallas inesperadas a nivel de hardware.</p>
                  </div>
                </div>
              )}

              {/*netwoking
              {detalleActivo === 'networking' && (
                <div className="container mt-1 row text-center justify-content-between">
                  <div style={{ paddingBottom: '50px' }}>
                    <h4>Networking</h4>
                  </div>
                  <div className="col-md-3 bg-light p-4 rounded shadow" style={{ fontSize: '1.1rem',}}>
                    <h5>Diseño de Redes LAN</h5>
                    <p className="fuente-personalizada" >Trabajamos junto a usted para definir los requerimientos y diseñar una red escalable, adaptada a su entorno. La infraestructura se implementará con tecnología y equipamiento adecuados, incorporando:

                            Servidores ISE

                            Plataforma Cisco Prime

                            Configuración de Firewall y Appliance

                            Políticas de calidad de servicio (QoS)

                            Administración de redes LAN</p>
                  </div>
                  <div className="col-md-3 bg-light p-4 rounded shadow" style={{ fontSize: '1.1rem',}}>
                    <h5>Soluciones WiFi</h5>
                    <p className="fuente-personalizada" >Ofrecemos una solución integral para su red inalámbrica, que incluye:
                            Análisis de cobertura, dimensionamiento y detección de vulnerabilidades
                            Configuración y administración de tecnología WLC mediante AP ligeros o redes con AP autónomos
                            Implementación completa de redes WiFi</p>
                  </div>
                  <div className="col-md-3 bg-light p-4 rounded shadow" style={{ fontSize: '1.1rem',}}>
                    <h5>Cableado Estructurado</h5>
                    <p className="fuente-personalizada" >Realizamos el levantamiento, diseño y proyección del cableado estructurado, además del mantenimiento preventivo y correctivo para asegurar un rendimiento óptimo del sistema.</p>
                  </div>
                </div>
              )}

              {/*camaras y alarmas 
              {detalleActivo === 'camaras' && (
                <div className="container mt-5 text-center">
                  <h4>Cámaras y Alarmas</h4>
                  <div className="row mt-4">
                   
                   
                    <div className="row justify-content-center mt-4">
                      <div className="col-md-5 bg-light p-4 m-2 rounded shadow" style={{ fontSize: '1.1rem',}}>
                        <h5>Inside</h5>
                        <p className="fuente-personalizada">
                          Brinde tranquilidad a su familia con un sistema de seguridad inalámbrico y de tecnología avanzada. 
                          <br></br>
                          Reciba alertas de intrusión directamente en su teléfono, acompañadas de imágenes en tiempo real.
                        </p>
                      </div>
                      <div className="col-md-5 bg-light p-4 m-2 rounded shadow" style={{ fontSize: '1.1rem',}}>
                        <h5>Perimetral</h5>
                        <p className="fuente-personalizada">
                          Proteja sus bienes con soluciones tecnológicas que disuaden robos y actos vandálicos. 
                          <br></br>
                          Nuestra tecnología perimetral ayuda a reducir los riesgos tanto para su patrimonio como para sus colaboradores.
                        </p>
                      </div>
                    </div>
                  
                    <div className="row justify-content-center mt-3">
                      <div className="col-md-5 bg-light p-4 m-2 rounded shadow" style={{ fontSize: '1.1rem',}}>
                        <h5>Alarmas Comunitarias</h5>
                        <p className="fuente-personalizada">
                          
                          Ofrecemos este tipo de alarmas para asegurar una protección coordinada, donde todos pueden monitorear en tiempo real.
                          <br></br>
                          <br></br>
                          Nuestro equipo de expertos lo asesorará para elegir la opción más adecuada para su sector.
                          
                        </p>
                      </div>
                      <div className="col-md-5 bg-light p-4 m-2 rounded shadow" style={{ fontSize: '1.1rem',}}>
                        <h5>Mantención de Equipos</h5>
                        <p className="fuente-personalizada">
                          Nuestro personal calificado realiza mantenciones periódicas para garantizar que su sistema de seguridad funcione siempre en condiciones óptimas.
                        </p>
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
        </AnimatePresence>*/}
      </div>
      
      {/* BLOQUE DE PROVEEDORES */}
      <div className="container mt-5 pt-1">
        <div className="container mt-1 row text-center justify-content-between">
          <div style={{ paddingBottom: '50px' }}>
            <h4>Marcas con las que trabajamos</h4>

            
            <div className="d-flex justify-content-around align-items-center flex-wrap">
              <img src={`${process.env.PUBLIC_URL}/img/hikvision.jpg`} alt="Hikvision" style={{ height: '50px', margin: '10px' }} />
              <img src={`${process.env.PUBLIC_URL}/img/marcas/dahua.jpg`} alt="Dahua" style={{ height: '25px', margin: '10px' }} />
              <img src={`${process.env.PUBLIC_URL}/img/marcas/ezviz.jpg`} alt="Ezviz" style={{ height: '65px', margin: '10px' }} />
              <img src={`${process.env.PUBLIC_URL}/img/marcas/tapo.jpg`} alt="Tapo" style={{ height: '28px', margin: '10px' }} />
              
            </div>
            <div className="d-flex justify-content-around align-items-center flex-wrap">
              <img src={`${process.env.PUBLIC_URL}/img/marcas/cisco.jpg`} alt="Cisco" style={{ height: '45px', margin: '10px' }} />
              <img src={`${process.env.PUBLIC_URL}/img/marcas/huawei.jpg`} alt="Huawei" style={{ height: '65px', margin: '10px' }} />
              <img src={`${process.env.PUBLIC_URL}/img/marcas/fortinet.jpg`} alt="Fortinet" style={{ height: '100px', margin: '10px' }} />
              <img src={`${process.env.PUBLIC_URL}/img/marcas/asus.jpg`} alt="Asus" style={{ height: '45px', margin: '10px' }} />
              <img src={`${process.env.PUBLIC_URL}/img/marcas/linksys.jpg`} alt="Linksys" style={{ height: '50px', margin: '10px' }} />
              
            </div>
            <p className="text-muted mt-2 w-100 text-center" style={{ fontSize: '0.9rem' }}>
                *Logos mostrados solo con fines informativos como parte de nuestras integraciones y servicios.
              </p>


          </div>
        </div>
      </div>

      {/* BLOQUE DE CLIENTES */}
      <div className="container mt-5 pt-1">
        <div className="container mt-1 row text-center justify-content-between">
          <div style={{ paddingBottom: '50px' }}>
            <h4>Nuestros clientes</h4>
          </div>
        </div>
      </div>


    </div> 
  </div>   


    
  );
    

}

export default Home;
