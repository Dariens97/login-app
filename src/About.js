import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import NuestroEquipo from './equipo';

const AboutUs = () => {
  return (
    <div style={{
      padding: '80px 0'
    }}>
      <Container>
        <h2 className="text-center mb-5" style={{ fontWeight: 'bold' }}>Nosotros</h2>

        <Row className="align-items-center mb-5">
          <Col md={6}>
            <img
              src={`${process.env.PUBLIC_URL}/img/arbol 1.jpg`}
              alt="Equipo de NET-CE"
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col md={6}>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
              En <strong>NET-CE</strong>, somos una empresa enfocada en brindar soluciones integrales en seguridad electrónica.
              Nuestro compromiso es entregar tecnología de vanguardia con un enfoque profesional, serio y cercano a nuestros clientes.
              <br /><br />
              Creemos en la confianza como base de toda relación, y por eso trabajamos con excelencia, responsabilidad y transparencia.
            </p>
          </Col>
        </Row>

        <Row className="text-center">
          <Col md={4}>
            <Card className="bg-transparent shadow border-0">
              <Card.Body>
                <h4>🔐 Nuestra Misión</h4>
                <p>
                  Satisfacer las necesidades actuales y dejar las bases para un crecimiento de la demanda tecnológica del cliente
                  teniendo en cuenta sus: requerimientos, necesidades y situación socioeconómica, para así brindar una mejor calidad
                  en el servicio impartido hacia nuestros clientes, todo esto dentro de las normas ISO. Esto es pensar globalmente y actuar localmente.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="bg-transparent shadow border-0">
              <Card.Body>
                <h4>🚀 Visión</h4>
                <p>
                  Somos una empresa que tendrá reconocimiento y crecimiento en el tiempo gracias a nuestros valores, calidad del servicio
                  e innovación en cada uno de los procesos y productos hacia nuestros clientes, y consolidándonos en los próximos 5 años
                  en una empresa con prestigio en asesorías e instalaciones de sistemas de seguridad.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="bg-transparent shadow border-0">
              <Card.Body>
                <h4>💡 Valores</h4>
                <p>
                  Nuestra prioridad son las personas y como tal los valores que nos mueven son: justicia, coherencia, honestidad,
                  diligencia, responsabilidad social y adaptabilidad. Hemos adoptado medidas para combatir el cambio climático y sus efectos
                  producto en gran parte por nuestras acciones. Por cada proyecto aprobado, se donará un árbol y se le entregará una tarjeta
                  al cliente por su aporte al programa “regala un árbol nativo” de la Fundación Reforestemos.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <NuestroEquipo/>
      </Container>
    </div>


);

};




export default AboutUs;
