import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import "./App.css";

const ContactForm = () => {
  const [form, setForm] = useState({
    asunto: '',
    razonSocial: '',
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);
  const [errorEnvio, setErrorEnvio] = useState(null);

  const validar = () => {
    const nuevosErrores = {};

    if (!form.nombre.trim()) nuevosErrores.nombre = 'El nombre es obligatorio.';

    if (!form.email.trim()) {
      nuevosErrores.email = 'El correo es obligatorio.';
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      nuevosErrores.email = 'Correo inválido.';
    }

    if (!form.telefono.trim()) {
      nuevosErrores.telefono = 'El teléfono es obligatorio.';
    } else if (!/^\d{7,15}$/.test(form.telefono)) {
      nuevosErrores.telefono = 'Teléfono inválido. Solo números (7-15 dígitos).';
    }

    if (!form.mensaje.trim()) nuevosErrores.mensaje = 'El mensaje es obligatorio.';
    if (!form.asunto.trim()) nuevosErrores.asunto = 'Debe seleccionar un asunto.';

    return nuevosErrores;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const erroresValidados = validar();
    if (Object.keys(erroresValidados).length === 0) {
      // ENVÍO CON EMAILJS
      const serviceID = 'service_vh0r71v';
      const templateID = 'template_pcl6msl';
      const userID = 'oJ9FLjJYQtqtx4Gmp';

      emailjs.send(serviceID, templateID, form, userID)
        .then((response) => {
          console.log('Email enviado:', response);
          setEnviado(true);
          setForm({ asunto: '',razonSocial:'', nombre: '', email: '', telefono: '', mensaje: '' });
          setErrores({});
          setErrorEnvio(null);
        })
        .catch((err) => {
          console.error('Error al enviar:', err);
          setErrorEnvio('Hubo un problema al enviar el mensaje. Inténtalo nuevamente.');
        });
    } else {
      setErrores(erroresValidados);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrores({ ...errores, [e.target.name]: null });
  };

  return (

     <div style={{ transform: 'scale(0.9)', transformOrigin: 'top center' }}>
      <div className="container mt-5" style={{ paddingBottom: '30px' }}>
        <h2>Contáctanos</h2>

        {enviado && <Alert variant="success">¡Mensaje enviado con éxito!</Alert>}
        {errorEnvio && <Alert variant="danger">{errorEnvio}</Alert>}

        <Form onSubmit={handleSubmit} noValidate>
          
          <div className="row">
            <Form.Group className="col-md-6" controlId="formAsunto">
              <Form.Label>Asunto</Form.Label>
              <Form.Select
                name="asunto"
                value={form.asunto}
                onChange={handleChange}
                isInvalid={!!errores.asunto}
              >
                <option value="">-- Selecciona un asunto --</option>
                <option value="Consulta General">Gestion de incidencias</option>
                <option value="Soporte Técnico">Networking</option>
                <option value="Cotización">Cámaras y Alarmas</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errores.asunto}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="col-md-6" controlId="formNombre">
              <Form.Label>Razón Social</Form.Label>
              <Form.Control
                type="text"
                name="razonSocial"
                value={form.razonSocial}
                onChange={handleChange}
                isInvalid={!!errores.razonSocial} />
              <Form.Control.Feedback type="invalid">
                {errores.razonSocial}
              </Form.Control.Feedback>
            </Form.Group>
          </div>

          <div className="row mt-3">
            <Form.Group className="col-md-6" controlId="formNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                isInvalid={!!errores.nombre} />
              <Form.Control.Feedback type="invalid">
                {errores.nombre}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="col-md-6" controlId="formEmail">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                isInvalid={!!errores.email} />
              <Form.Control.Feedback type="invalid">
                {errores.email}
              </Form.Control.Feedback>
            </Form.Group>
          </div>

          <div className="row mt-3">
            <Form.Group className="col-md-6" controlId="formTelefono">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="tel"
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                isInvalid={!!errores.telefono} />
              <Form.Control.Feedback type="invalid">
                {errores.telefono}
              </Form.Control.Feedback>
            </Form.Group>
          </div>

          <div className="row mt-3">
            <Form.Group className="col-md-12" controlId="formMensaje">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                isInvalid={!!errores.mensaje} />
              <Form.Control.Feedback type="invalid">
                {errores.mensaje}
              </Form.Control.Feedback>
            </Form.Group>
          </div>

          <Button className="mt-3" variant="primary" type="submit">
            Enviar Mensaje
          </Button>
        </Form>

        <a
          href="https://wa.me/56953397499"
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp whatsapp-icon"></i>
        </a>
      </div>
    </div>
    
    
  );
};

export default ContactForm;
