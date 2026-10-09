import React from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  Clock,
  HelpCircle,
  ShieldAlert,
  CheckCircle2,
  Calendar,
  AlertCircle,
  ArrowRight,
  Phone,
  Mail
} from 'lucide-react';
import { FAQ_DATA } from '../data/faq';
import { Accordion } from '../components/ui/Accordion';
import { SITE_CONFIG } from '../config/site';

export const Information: React.FC = () => {
  return (
    <div id="main-content" className="section-padding">
      <div className="container" style={{ maxWidth: '980px' }}>
        {/* Header */}
        <div className="section-header">
          <span className="section-eyebrow">Guía de Atención</span>
          <h1 className="section-title">Información para Pacientes</h1>
          <p className="section-description">
            Todo lo necesario para preparar tu visita con tranquilidad, comprender el modelo de atención y resolver tus dudas frecuentes.
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
            <strong>Aviso Demostrativo:</strong> Esta sección contiene recomendaciones de flujo administrativo y de experiencia de usuario.
            No proporciona diagnósticos, indicaciones farmacológicas ni tratamientos clínicos particulares.
          </div>
        </div>

        {/* 1. Preparation Guide */}
        <div
          style={{
            backgroundColor: 'var(--color-white)',
            borderRadius: 'var(--radius-xl)',
            padding: '2.5rem',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-subtle)',
            marginBottom: '3rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <FileText size={20} style={{ color: 'var(--color-petrol)' }} />
            <h2 style={{ fontSize: 'var(--text-2xl)', color: 'var(--color-petrol-deep)', margin: 0 }}>
              Preparación para tu Visita Médica
            </h2>
          </div>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', marginBottom: '1.75rem' }}>
            Para que aproveches al máximo el tiempo de consulta con tu especialista, te sugerimos seguir estos sencillos pasos:
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {[
              {
                title: 'Llegada Puntual',
                desc: 'Presentarse con 10 minutos de antelación para el ingreso en recepción y tomar asiento sin apuros.',
              },
              {
                title: 'Historial de Medicación',
                desc: 'Llevar anotados o fotografiados los nombres y dosis de cualquier medicamento o suplemento habitual.',
              },
              {
                title: 'Exámenes Previos',
                desc: 'Si cuentas con análisis de laboratorio o imágenes de los últimos 6 meses, tráelos en formato físico o digital.',
              },
              {
                title: 'Lista de Preguntas',
                desc: 'Anota en tu teléfono las dudas puntuales que desees resolver para asegurarte de abordar todas en consulta.',
              },
            ].map((step, idx) => (
              <div
                key={step.title}
                style={{
                  backgroundColor: 'var(--color-surface-subtle)',
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border-subtle)',
                }}
              >
                <div
                  style={{
                    fontSize: 'var(--text-xs)',
                    fontWeight: 700,
                    color: 'var(--color-petrol)',
                    marginBottom: '0.35rem',
                  }}
                >
                  Paso 0{idx + 1}
                </div>
                <h3 style={{ fontSize: 'var(--text-base)', color: 'var(--color-petrol-deep)', marginBottom: '0.35rem' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.5 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Opening Hours */}
        <div
          style={{
            backgroundColor: 'var(--color-surface-subtle)',
            borderRadius: 'var(--radius-xl)',
            padding: '2rem 2.5rem',
            border: '1px solid var(--color-border)',
            marginBottom: '3rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            alignItems: 'center',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Clock size={20} style={{ color: 'var(--color-petrol)' }} />
              <h2 style={{ fontSize: 'var(--text-xl)', color: 'var(--color-petrol-deep)', margin: 0 }}>
                Horarios de Atención
              </h2>
            </div>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.6 }}>
              Horarios demostrativos configurados para la operación conceptual de NOVA SALUD.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: 'var(--text-sm)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid var(--color-border)' }}>
              <span style={{ fontWeight: 600, color: 'var(--color-petrol-deep)' }}>Lunes a Viernes</span>
              <span style={{ color: 'var(--color-text-main)' }}>{SITE_CONFIG.contact.hoursWeekdays}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid var(--color-border)' }}>
              <span style={{ fontWeight: 600, color: 'var(--color-petrol-deep)' }}>Sábados</span>
              <span style={{ color: 'var(--color-text-main)' }}>{SITE_CONFIG.contact.hoursSaturday}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontWeight: 600, color: 'var(--color-slate-grey)' }}>Domingos y Festivos</span>
              <span style={{ color: 'var(--color-slate-grey)' }}>{SITE_CONFIG.contact.hoursSunday}</span>
            </div>
          </div>
        </div>

        {/* 3. FAQ Section with Accordion */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 2rem' }}>
            <span className="section-eyebrow">Respuestas Claras</span>
            <h2 style={{ fontSize: 'var(--text-2xl)', color: 'var(--color-petrol-deep)' }}>
              Preguntas Frecuentes
            </h2>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
              Respuestas sobre el funcionamiento de este sitio de demostración y sobre la adaptación a centros reales.
            </p>
          </div>

          <Accordion items={FAQ_DATA} />
        </div>

        {/* Bottom CTA to test wizard */}
        <div
          style={{
            backgroundColor: 'var(--color-white)',
            borderRadius: 'var(--radius-xl)',
            padding: '2.5rem',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-card)',
            textAlign: 'center',
          }}
        >
          <h3 style={{ fontSize: 'var(--text-xl)', color: 'var(--color-petrol-deep)', marginBottom: '0.5rem' }}>
            ¿Deseas probar la experiencia de reserva?
          </h3>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', maxWidth: '580px', margin: '0 auto 1.5rem', lineHeight: 1.6 }}>
            Accede al simulador interactivo de 5 pasos para comprobar la fluidez y sencillez de nuestro diseño digital.
          </p>
          <Link to="/appointments" className="btn btn-primary btn-lg">
            <Calendar size={18} />
            <span>Simular una hora médica</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
