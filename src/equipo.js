import React from 'react';
import { Container, Row, Col, Card , Carousel } from 'react-bootstrap';



const NuestroEquipo = () => {
  return (
    <div style={{ padding: '40px 0' }}>
      <Container>
        <h2 className="text-center mb-4">Nuestro Equipo</h2>
        <Row className="justify-content-center">
          {equipo.map((persona, idx) => (
            <Col key={idx} md={4} className="mb-4">
              <Card className="text-center shadow" style={{ borderRadius: '15px' }}>
                <Card.Img
                  variant="top"
                  src={persona.imagen}
                  style={{ height: '300px', objectFit: 'cover', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}
                />
                <Card.Body>
                  <Card.Title>{persona.nombre}</Card.Title>
                  <Card.Text>{persona.cargo}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <h2 className="text-center mt-5 mb-4">Testimonios</h2>
        <Carousel indicators={false} interval={5000}>
          {testimonios.map((item, idx) => (
            <Carousel.Item key={idx}>
              <div className="text-center p-4" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <p className="fs-5 fst-italic">“{item.comentario}”</p>
                <h6 className="fw-bold mt-3">- {item.autor}</h6>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
};


const equipo = [
  {
    nombre: 'Dariens Echeverria M.',
    cargo: 'Gerente De negocios',
    imagen: process.env.PUBLIC_URL + '/img/Dariens negocios.jpg'
  },
  {
    nombre: 'Claudio Caffi A.',
    cargo: 'Gerente de Proyectos',
    imagen: process.env.PUBLIC_URL + '/img/Socio-1-editado.jpg'
  },
  {
    nombre: 'Gerardo Machuca',
    cargo: 'Asesor En Infraestructura',
    imagen: process.env.PUBLIC_URL + '/img/Gerardo Machuca.jpg'
  }
];

const testimonios = [
  {
    autor: 'María González',
    comentario: 'Excelente servicio, muy profesionales y atentos en todo momento.'
  },
  {
    autor: 'Jorge Rivas',
    comentario: 'Quedamos muy conformes con la instalación del sistema de cámaras.'
  },
  {
    autor: 'Claudia Peña',
    comentario: 'Recomiendo NET-CE, excelente atención al cliente y soporte.'
  }
];




export default NuestroEquipo;
