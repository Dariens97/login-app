import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import NuestroEquipo from './equipo';

const AboutUs = () => {
  return (
    <div style={{ backgroundColor: "#f0f0f0", minHeight: "100vh", color: "black" }}>
      <div style={{ transform: 'scale(1)', transformOrigin: 'top center' }}>
      <div className="container text-center">
        <div style={{
          padding: '15px 0'
        }}>
          <Container>
            <h2 className="text-center mt-4" style={{ fontWeight: 'bold', fontSize:'30pt', color:'#21AFEB',  paddingBottom: '0.1px' }}>Nosotros</h2>
              <hr style={{ paddingBottom: '50px', color:'#0C3C5F'}}/>
            <Row className="align-items-center mb-5 " >
              <Col md={4}>
                <img
                  src={`${process.env.PUBLIC_URL}/img/edificio las condes.png`}
                  alt="Equipo de NET-CE"
                  className="img-fluid rounded shadow"
                  style={{maxHeight:'400px'}}
                />
              </Col>
              <Col md={8}>
                <div style={{ textAlign: "justify"}}>
                  <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                    Somos una empresa enfocada en brindar soluciones integrales en seguridad CCTV y redes LAN. 
                    Nuestro compromiso es entregar tecnología de vanguardia con un enfoque de innovación en función de las personas, 
                    para ello estaremos constantemente cuestionando; nuestro modelo de negocio, tecnologías, 
                    la capacidad adaptativa y nuestro nivel de empatía hacia los clientes.
                    <br /><br />
                    Creemos en la confianza como base de toda relación, y por eso trabajamos con excelencia, responsabilidad y transparencia. 
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="text-center mt-4">
              <Col md={4}>
                <Card className=" shadow border-0 mt-4"style={{minHeight:'325px'}}>
                  <Card.Body>
                    <h4 style={{ fontWeight: 'bold', fontSize:'20pt', color:'#21AFEB',  paddingBottom: '20px' }}>🔐 Nuestra Misión</h4>
                    <div style={{ textAlign: "justify"}}>
                      <p>
                        Satisfacer las necesidades actuales y dejar las bases para un crecimiento de la demanda tecnológica del cliente
                        teniendo en cuenta sus: requerimientos, necesidades, para así brindar una mejor calidad
                        en el servicio impartido hacia nuestros clientes, todo esto dentro de las normas ISO. Esto es pensar globalmente y actuar localmente.
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className=" shadow border-0 mt-4" style={{minHeight:'325px'}}>
                  <Card.Body>
                    <h4 style={{ fontWeight: 'bold', fontSize:'20pt', color:'#21AFEB',  paddingBottom: '20px' }}>🚀 Visión</h4>
                    <div style={{ textAlign: "justify"}}>
                      <p>
                        Somos una empresa que tendrá reconocimiento y crecimiento en el tiempo gracias a nuestros valores, calidad del servicio
                        e innovación en cada uno de los procesos y productos hacia nuestros clientes, y consolidándonos en los próximos 5 años
                        en una empresa con prestigio en asesorías e instalaciones de sistemas de seguridad y redes LAN.
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className=" shadow border-0 mt-4"style={{minHeight:'325px'}}>
                  <Card.Body>
                    <h4 style={{ fontWeight: 'bold', fontSize:'20pt', color:'#21AFEB',  paddingBottom: '20px' }}>💡 Valores</h4>
                    <div style={{ textAlign: "justify"}}>
                      <p>
                        Nuestra prioridad son las personas y como tal los valores que nos mueven son: justicia, coherencia, honestidad,
                        diligencia, responsabilidad social y adaptabilidad.
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <NuestroEquipo/>
          </Container>
        </div>
      </div>
      </div>
    </div>

);

};




export default AboutUs;
