import React, { useRef, useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import "./App.css";
import { useNavigate } from "react-router-dom";
//import para el recaptcha
import ReCAPTCHA from "react-google-recaptcha";





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
  const navigate = useNavigate();

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

  //estados y referencias para el recaptcha
  const captchaRef = useRef(null);
  const [captchaValido, setCaptchaValido] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    //función para el recaptcha
    // Verificar que el usuario completó el reCAPTCHA
    const recaptchaValue = window.grecaptcha.getResponse();
    if (!recaptchaValue) {
      setErrorEnvio('Por favor verifica que no eres un robot.');
      return;
    }
    //verificar si el captcha fue completado
    const token = captchaRef.current.getValue();

    if (!token) {
      setCaptchaValido(false);
      setErrorEnvio("Por favor completa el reCAPTCHA.");
      return;
    }

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
          setTimeout(() => navigate("/gracias"), 500); // Redirige luego de 0.5s

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
                <option value="Gestión de incidencias">Gestion de incidencias</option>
                <option value="Networking">Networking</option>
                <option value="Camaras y Alarmas">Cámaras y Alarmas</option>
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

          {/*boton para el recaptcha
          <div className="g-recaptcha" data-sitekey="6Lc2D4MrAAAAACl7zA50alnto73ymVFBiSfJGjMx"></div>
          <button type="submit">Enviar</button>

          <Button className="mt-3" variant="primary" type="submit">
            Enviar Mensaje
          </Button>*/}

          {/*boton actualizado para el recaptcha */}
          <div className="mt-4">
            {/*<div className="g-recaptcha mb-3" data-sitekey="6Lc2D4MrAAAAACl7zA50alnto73ymVFBiSfJGjMx"></div>*/}

            <div className="my-3 d-flex justify-content-center">
              <ReCAPTCHA
                ref={captchaRef}
                sitekey="6Lc2D4MrAAAAACl7zA50alnto73ymVFBiSfJGjMx"
                onChange={() => setCaptchaValido(true)}
              />
            </div>

            {captchaValido === false && (
              <div className="text-danger text-center">Por favor completa el reCAPTCHA</div>
            )}



            {/*<Button variant="primary" type="submit">
              Enviar Mensaje
            </Button>*/}

            <Button className="mt-3" variant="primary" type="submit" disabled={!captchaValido}>
              Enviar Mensaje
            </Button>

          </div>
        </Form>

        <a
          href="https://wa.me/56957928042"
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
