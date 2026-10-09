import React from 'react';
import { Calendar, ShieldCheck, Clock, Sparkles, AlertCircle } from 'lucide-react';
import { AppointmentWizard } from '../components/appointments/AppointmentWizard';
import { DEMO_CONFIG } from '../config/demo';

export const Appointments: React.FC = () => {
  return (
    <div id="main-content" className="section-padding">
      <div className="container" style={{ maxWidth: '980px' }}>
        {/* Page Header */}
        <div className="section-header">
          <span className="section-eyebrow">Experiencia Interactiva</span>
          <h1 className="section-title">Simulador de Agendamiento</h1>
          <p className="section-description">
            Experimenta el flujo de reserva de horas de NOVA SALUD. Un proceso en 5 pasos claro, intuitivo y sin barreras.
          </p>
        </div>

        {/* Demo safeguard banner */}
        <div
          style={{
            backgroundColor: '#FFF9F2',
            border: '1px solid #F5D3A8',
            borderRadius: 'var(--radius-lg)',
            padding: '1.25rem 1.5rem',
            marginBottom: '2rem',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '1rem',
          }}
        >
          <AlertCircle size={22} style={{ color: '#C88D44', flexShrink: 0, marginTop: '2px' }} />
          <div>
            <strong style={{ fontSize: 'var(--text-sm)', color: '#8A5818', display: 'block', marginBottom: '0.25rem' }}>
              Recordatorio Importante de Demostración
            </strong>
            <p style={{ color: '#684518', fontSize: 'var(--text-xs)', margin: 0, lineHeight: 1.6 }}>
              {DEMO_CONFIG.disclaimerScheduling} Puedes interactuar con total tranquilidad seleccionando
              cualquier especialidad, profesional, fecha y hora disponible.
            </p>
          </div>
        </div>

        {/* Wizard Component */}
        <AppointmentWizard />

        {/* Technical Architecture Notes for Prospective Clinic Owners */}
        <div
          style={{
            marginTop: '3.5rem',
            padding: '2rem',
            backgroundColor: 'var(--color-surface-subtle)',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--color-border)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <Sparkles size={18} style={{ color: 'var(--color-petrol)' }} />
            <h3 style={{ fontSize: 'var(--text-base)', color: 'var(--color-petrol-deep)', margin: 0 }}>
              ¿Cómo se adapta este módulo a una clínica médica real?
            </h3>
          </div>
          <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
            Esta interfaz está arquitecturada como una capa frontend agnóstica. En una puesta en marcha productiva,
            KuyénDev puede conectar este componente con los sistemas informáticos de tu institución:
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1rem',
            }}
          >
            <div style={{ backgroundColor: 'var(--color-white)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-subtle)' }}>
              <strong style={{ fontSize: 'var(--text-xs)', display: 'block', color: 'var(--color-petrol-deep)', marginBottom: '0.25rem' }}>
                1. Conexión HIS / EHR / I-Med
              </strong>
              <span style={{ fontSize: '0.6875rem', color: 'var(--color-text-muted)', lineHeight: 1.4 }}>
                Sincronización en tiempo real de agendas médicas con sistemas hospitalarios existentes.
              </span>
            </div>

            <div style={{ backgroundColor: 'var(--color-white)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-subtle)' }}>
              <strong style={{ fontSize: 'var(--text-xs)', display: 'block', color: 'var(--color-petrol-deep)', marginBottom: '0.25rem' }}>
                2. Verificación Segura de Identidad
              </strong>
              <span style={{ fontSize: '0.6875rem', color: 'var(--color-text-muted)', lineHeight: 1.4 }}>
                Validación de RUT y previsión mediante canales cifrados con cumplimiento de ley de datos de pacientes.
              </span>
            </div>

            <div style={{ backgroundColor: 'var(--color-white)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-subtle)' }}>
              <strong style={{ fontSize: 'var(--text-xs)', display: 'block', color: 'var(--color-petrol-deep)', marginBottom: '0.25rem' }}>
                3. Notificaciones WhatsApp y SMS
              </strong>
              <span style={{ fontSize: '0.6875rem', color: 'var(--color-text-muted)', lineHeight: 1.4 }}>
                Recordatorios automatizados 24 horas antes para reducir la tasa de inasistencia (no-show).
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
