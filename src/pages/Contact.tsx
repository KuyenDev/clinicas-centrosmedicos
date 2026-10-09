import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ShieldAlert,
  AlertCircle,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { DEMO_CONFIG } from '../config/demo';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    alias: '',
    category: 'informacion',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ alias: '', category: 'informacion', message: '' });
    setSubmitted(false);
  };

  return (
    <div id="main-content" className="section-padding">
      <div className="container" style={{ maxWidth: '1040px' }}>
        {/* Header */}
        <div className="section-header">
          <span className="section-eyebrow">Canales de Comunicación</span>
          <h1 className="section-title">Contacto & Ubicación Conceptual</h1>
          <p className="section-description">
            Información de contacto orientativa y formulario de prueba local para evaluar la interacción con el usuario.
          </p>
        </div>

        {/* Fictional Disclaimer */}
        <div
          style={{
            backgroundColor: 'var(--color-surface-subtle)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
            padding: '1rem 1.25rem',
            marginBottom: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            fontSize: 'var(--text-xs)',
            color: 'var(--color-slate-grey)',
          }}
        >
          <ShieldAlert size={18} style={{ color: 'var(--color-petrol)', flexShrink: 0 }} />
          <div>
            <strong>Aviso de Demostración:</strong> Los datos de contacto, teléfonos y direcciones mostrados a continuación
            son puramente demostrativos y no pertenecen a un establecimiento asistencial operativo.
          </div>
        </div>

        {/* 2 Columns: Contact Form & Info / Map */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
          }}
        >
          {/* Left: Interactive Simulated Form */}
          <div
            style={{
              backgroundColor: 'var(--color-white)',
              borderRadius: 'var(--radius-xl)',
              padding: '2.5rem',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <h2 style={{ fontSize: 'var(--text-xl)', color: 'var(--color-petrol-deep)', marginBottom: '0.5rem' }}>
              Formulario Demostrativo
            </h2>
            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
              Prueba cómo responde este formulario. Los datos se procesan exclusivamente en memoria local en tu navegador.
            </p>

            {/* Mandatory anti-medical data banner */}
            <div
              style={{
                backgroundColor: '#FFF8F0',
                border: '1px solid #F5D3A8',
                borderRadius: 'var(--radius-md)',
                padding: '0.75rem 1rem',
                fontSize: '0.6875rem',
                color: '#8A5818',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.5rem',
              }}
            >
              <AlertCircle size={16} style={{ flexShrink: 0, marginTop: '1px' }} />
              <div>
                <strong>Privacidad:</strong> {DEMO_CONFIG.disclaimerContact}
              </div>
            </div>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-sage-soft)',
                    color: 'var(--color-petrol)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                  }}
                >
                  <CheckCircle2 size={32} />
                </div>
                <h3 style={{ fontSize: 'var(--text-lg)', color: 'var(--color-petrol-deep)', marginBottom: '0.5rem' }}>
                  Demostración completada
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                  No se ha enviado ningún mensaje ni se almacenó información. La validación visual de la interfaz funcionó correctamente.
                </p>
                <button type="button" onClick={handleReset} className="btn btn-outline btn-sm">
                  Enviar otro mensaje de prueba
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="contact-alias" className="form-label">
                    Nombre o alias de prueba (Opcional):
                  </label>
                  <input
                    id="contact-alias"
                    type="text"
                    value={formData.alias}
                    onChange={(e) => setFormData({ ...formData, alias: e.target.value })}
                    placeholder="Ej. Visitante Demo"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-category" className="form-label">
                    Categoría de consulta:
                  </label>
                  <select
                    id="contact-category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="form-select"
                  >
                    <option value="informacion">Información general sobre especialidades</option>
                    <option value="aranceles">Consultas sobre aranceles referenciales</option>
                    <option value="tecnica">Consulta técnica sobre la plantilla para clínicas</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">
                    Mensaje de prueba:
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Escribe un mensaje de prueba para verificar la interfaz..."
                    className="form-textarea"
                  />
                  <span className="form-help">
                    No incluyas datos personales sensibles ni antecedentes médicos.
                  </span>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <Send size={16} />
                  <span>Enviar mensaje de prueba</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Contact Information & Conceptual Map */}
          <div>
            {/* Info Box */}
            <div
              style={{
                backgroundColor: 'var(--color-white)',
                borderRadius: 'var(--radius-xl)',
                padding: '2rem',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-subtle)',
                marginBottom: '1.5rem',
              }}
            >
              <h2 style={{ fontSize: 'var(--text-lg)', color: 'var(--color-petrol-deep)', marginBottom: '1.25rem' }}>
                Canales de Atención Ilustrativos
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <MapPin size={20} style={{ color: 'var(--color-petrol)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ fontSize: 'var(--text-sm)', display: 'block', color: 'var(--color-petrol-deep)' }}>
                      Dirección Conceptual
                    </strong>
                    <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>
                      {SITE_CONFIG.contact.address}
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <Phone size={20} style={{ color: 'var(--color-petrol)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ fontSize: 'var(--text-sm)', display: 'block', color: 'var(--color-petrol-deep)' }}>
                      Teléfono de Demostración
                    </strong>
                    <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>
                      {SITE_CONFIG.contact.phone}
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <Mail size={20} style={{ color: 'var(--color-petrol)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ fontSize: 'var(--text-sm)', display: 'block', color: 'var(--color-petrol-deep)' }}>
                      Correo Demostrativo
                    </strong>
                    <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>
                      {SITE_CONFIG.contact.email}
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <Clock size={20} style={{ color: 'var(--color-petrol)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ fontSize: 'var(--text-sm)', display: 'block', color: 'var(--color-petrol-deep)' }}>
                      Horarios de Atención Demostrativos
                    </strong>
                    <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>
                      Lunes a Viernes: {SITE_CONFIG.contact.hoursWeekdays}<br />
                      Sábados: {SITE_CONFIG.contact.hoursSaturday}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Conceptual SVG Stylized Map */}
            <div
              style={{
                backgroundColor: 'var(--color-surface-subtle)',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                border: '1px solid var(--color-border)',
                position: 'relative',
              }}
            >
              <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--color-border)', backgroundColor: 'var(--color-white)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--color-petrol)' }}>
                  Plano Conceptual de Ubicación
                </span>
                <span className="badge badge-sage">Santiago, Chile (Ficticio)</span>
              </div>

              {/* Styled clean map graphic */}
              <div style={{ position: 'relative', height: '220px', background: '#E6ECE9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="100%" height="100%" viewBox="0 0 400 220" preserveAspectRatio="none">
                  {/* Subtle map blocks */}
                  <rect x="0" y="0" width="400" height="220" fill="#E8EFEA" />
                  {/* Grid roads */}
                  <path d="M 0 60 Q 150 70 400 50" stroke="#FFFFFF" strokeWidth="14" fill="none" />
                  <path d="M 0 160 Q 200 150 400 170" stroke="#FFFFFF" strokeWidth="18" fill="none" />
                  <path d="M 120 0 L 140 220" stroke="#FFFFFF" strokeWidth="12" fill="none" />
                  <path d="M 280 0 L 260 220" stroke="#FFFFFF" strokeWidth="14" fill="none" />
                  {/* Green park shape */}
                  <rect x="30" y="80" width="70" height="60" rx="8" fill="#D3E2DA" />
                  <rect x="290" y="80" width="80" height="70" rx="8" fill="#D3E2DA" />
                </svg>

                {/* Central pin for NOVA SALUD */}
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'var(--color-petrol)',
                    color: '#FFFFFF',
                    padding: '0.65rem 1rem',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--shadow-hover)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: 'var(--text-xs)',
                    fontWeight: 700,
                    zIndex: 2,
                  }}
                >
                  <MapPin size={16} style={{ color: 'var(--color-sage)' }} />
                  <span>NOVA SALUD (Conceptual)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
