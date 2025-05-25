import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

const testimonials = [
  {
    nombre: 'Carlos Fernández',
    cargo: 'Gerente de Operaciones',
    comentario: 'El equipo de NET-CE superó nuestras expectativas. Su tecnología y atención fueron excepcionales.',
    imagen: '/testimonios/cliente1.jpg',
  },
  {
    nombre: 'María López',
    cargo: 'Directora de Seguridad',
    comentario: 'Recomiendo sus servicios al 100%. Profesionalismo y confianza desde el primer día.',
    imagen: '/testimonios/cliente2.jpg',
  },
  {
    nombre: 'Andrés Ramírez',
    cargo: 'CEO de InovaTech',
    comentario: 'Con NET-CE encontramos una solución innovadora, eficiente y con gran soporte técnico.',
    imagen: '/testimonios/cliente3.jpg',
  }
];

const TestimonialsCarousel = () => {
  return (
    <div style={{ background: '#f5f7fa', padding: '60px 0' }}>
      <Container>
        <h2 className="text-center mb-5">Testimonios de nuestros clientes</h2>
        <Carousel indicators={false} controls={false} interval={4000} fade>
          {testimonials.map((t, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex flex-column align-items-center text-center">
                <img
                  src={t.imagen}
                  alt={`Testimonio de ${t.nombre}`}
                  style={{
                    borderRadius: '50%',
                    width: '140px',
                    height: '140px',
                    objectFit: 'cover',
                    marginBottom: '20px'
                  }}
                />
                <h5>{t.nombre}</h5>
                <small className="text-muted mb-3">{t.cargo}</small>
                <p style={{ maxWidth: '600px' }}>"{t.comentario}"</p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
};

export default TestimonialsCarousel;
