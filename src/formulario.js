import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

export default function TicketForm() {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    asunto: "",
    mensaje: "",
    website: "", // honeypot
  });

  const [mensaje, setMensaje] = useState("");
  const [startTime, setStartTime] = useState(Date.now());

  useEffect(() => {
    setStartTime(Date.now());
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "telefono" && /[^0-9+]/.test(value)) return;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.website) {
      setMensaje("❌ Spam detectado.");
      return;
    }

    const elapsed = (Date.now() - startTime) / 1000;
    if (elapsed < 3) {
      setMensaje("⏳ ¡Eso fue muy rápido! ¿Bot quizás?");
      return;
    }

    try {
      const formData = new URLSearchParams();
      formData.append("nombre", form.nombre);
      formData.append("correo", form.correo);
      formData.append("telefono", form.telefono);
      formData.append("asunto", form.asunto);
      formData.append("mensaje", form.mensaje);
      formData.append("website", form.website);

      const res = await axios.post("https://net-ce.cl/api/crear_ticket.php", formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      if (res.data.success) {
        setMensaje("✅ Ticket enviado con éxito");
        setForm({ nombre: "", correo: "", telefono: "", asunto: "", mensaje: "", website: "" });
      } else {
        setMensaje("❌ Error: " + (res.data.message || "Error desconocido"));
      }
    } catch (error) {
      setMensaje("❌ Error de red o servidor. Intenta más tarde.");
      console.error(error);
    }
  };

  return (
    <div style={{ backgroundColor: "#f0f0f0", minHeight: "90vh", color: "black" }}>
      <div style={{ transform: 'scale(0.9)', transformOrigin: 'top center' }}>
        <div className="container" style={{ paddingBottom: '30px' }}>
          
          <h2 className="titulo  text-gradient-blue pt-5" style={{fontSize:'25pt', color:'#21AFEB'}}>Crear Ticket de Soporte</h2>
          <hr  style={{ color:'#0C3C5F', height:'3px'}}/>
          <p class="text-danger small pt-0 mt-0">Todos los campos son obligatorios</p>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="nombre"> Nombre</label>
              <input
                className="form-control"
                id="nombre"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                required
                autoComplete="name"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="correo">Correo</label>
              <input
                type="correo"
                className="form-control"
                id="correo"
                name="correo"
                value={form.correo}
                onChange={handleChange}
                required
                autoComplete="correo"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="telefono" className="form-label">Teléfono</label>
              <div className="input-group shadow">
                <span className="input-group-text">+56</span>
                <input
                  type="tel"
                  className="form-control"
                  id="telefono"
                  name="telefono"
                  value={form.telefono}
                  onChange={handleChange}
                  pattern="[0-9]+"
                  maxLength={15}
                  required
                  autoComplete="tel"
                />
              </div>
            </div>


            <div className="mb-3">
              <label htmlFor="asunto">Asunto</label>
              <input
                className="form-control"
                id="asunto"
                name="asunto"
                value={form.asunto}
                onChange={handleChange}
                required
                autoComplete="off"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                className="form-control"
                id="mensaje"
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                required
                autoComplete="off"
              />
            </div>

            {/* Honeypot invisible */}
            <input
              type="text"
              name="website"
              value={form.website}
              onChange={handleChange}
              style={{ display: "none" }}
              tabIndex="-1"
              autoComplete="off"
            />

            <button className="btn btn-primary mt-3" type="submit">
              Enviar Ticket
            </button>
          </form>
          {mensaje && <div className="alert alert-info mt-3">{mensaje}</div>}
        </div>
      </div>
    </div>






  );
}
