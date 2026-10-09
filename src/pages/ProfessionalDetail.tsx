import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ChevronLeft,
  Calendar,
  Clock,
  CheckCircle2,
  ShieldAlert,
  ArrowRight,
  Heart,
  Stethoscope
} from 'lucide-react';
import { PROFESSIONALS_DATA } from '../data/professionals';
import { SPECIALTIES_DATA } from '../data/specialties';

export const ProfessionalDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const doctor = PROFESSIONALS_DATA.find((p) => p.id === id);
  const specialty = SPECIALTIES_DATA.find((s) => s.id === doctor?.specialtyId);

  if (!doctor) {
    return (
      <div id="main-content" className="section-padding container" style={{ textAlign: 'center' }}>
        <h2>Profesional no encontrado</h2>
        <p style={{ margin: '1rem 0 2rem' }}>El perfil solicitado no forma parte del directorio demostrativo.</p>
        <Link to="/professionals" className="btn btn-primary">
          Volver al directorio
        </Link>
      </div>
    );
  }

  return (
    <div id="main-content" className="section-padding">
      <div className="container" style={{ maxWidth: '960px' }}>
        {/* Back navigation */}
        <div style={{ marginBottom: '1.5rem' }}>
          <Link
            to="/professionals"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontSize: 'var(--text-sm)',
              fontWeight: 600,
              color: 'var(--color-petrol)',
            }}
          >
            <ChevronLeft size={16} />
            <span>Volver al directorio médico</span>
          </Link>
        </div>

        {/* Profile Card Header */}
        <div
          style={{
            backgroundColor: 'var(--color-white)',
            borderRadius: 'var(--radius-xl)',
            padding: '2.5rem',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-card)',
            marginBottom: '2rem',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center',
            }}
          >
            {/* Left: Avatar */}
            <div>
              <div
                style={{
                  position: 'relative',
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-hover)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <img
                  src={doctor.avatarUrl}
                  alt={doctor.name}
                  style={{
                    width: '100%',
                    aspectRatio: '1',
                    objectFit: 'cover',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(6px)',
                    fontSize: 'var(--text-xs)',
                    fontWeight: 700,
                    color: 'var(--color-petrol)',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '9999px',
                    boxShadow: 'var(--shadow-subtle)',
                  }}
                >
                  Perfil Demostrativo
                </span>
              </div>
            </div>

            {/* Right: Info */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <span className="badge badge-petrol">{doctor.specialtyName}</span>
                {specialty && (
                  <Link
                    to={`/specialties/${specialty.id}`}
                    style={{ fontSize: 'var(--text-xs)', color: 'var(--color-petrol)', textDecoration: 'underline' }}
                  >
                    Ver especialidad
                  </Link>
                )}
              </div>

              <h1 style={{ fontSize: 'var(--text-3xl)', color: 'var(--color-petrol-deep)', marginBottom: '0.4rem' }}>
                {doctor.name}
              </h1>

              <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-slate-grey)', marginBottom: '1.25rem', fontWeight: 500 }}>
                {doctor.role}
              </div>

              <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.6, color: 'var(--color-text-main)', marginBottom: '1.5rem' }}>
                {doctor.fullBio}
              </p>

              {/* Schedule pill */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: 'var(--color-sage-soft)',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  fontSize: 'var(--text-sm)',
                  color: 'var(--color-petrol-deep)',
                  marginBottom: '1.75rem',
                }}
              >
                <Clock size={18} style={{ color: 'var(--color-petrol)', flexShrink: 0 }} />
                <span><strong>Horarios demostrativos:</strong> {doctor.scheduleSummary}</span>
              </div>

              {/* CTA button */}
              <Link
                to={`/appointments?doctor=${doctor.id}`}
                className="btn btn-primary btn-lg"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <Calendar size={18} />
                <span>Simular reserva con {doctor.name.split(' ')[1]}</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Areas of Interest */}
        <div
          style={{
            backgroundColor: 'var(--color-white)',
            borderRadius: 'var(--radius-xl)',
            padding: '2rem',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-subtle)',
            marginBottom: '2rem',
          }}
        >
          <h3 style={{ fontSize: 'var(--text-xl)', color: 'var(--color-petrol-deep)', marginBottom: '1.25rem' }}>
            Áreas de Interés Clínico y Abordaje
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr)))',
              gap: '1rem',
            }}
          >
            {doctor.areasOfInterest.map((area, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.65rem',
                  backgroundColor: 'var(--color-surface-subtle)',
                  padding: '1rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border-subtle)',
                }}
              >
                <CheckCircle2 size={18} style={{ color: 'var(--color-sage-dark)', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-main)', lineHeight: 1.5 }}>
                  {area}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Safety Disclaimer */}
        <div
          style={{
            backgroundColor: 'var(--color-surface-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.25rem',
            border: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            fontSize: 'var(--text-xs)',
            color: 'var(--color-slate-grey)',
          }}
        >
          <ShieldAlert size={20} style={{ color: 'var(--color-petrol)', flexShrink: 0 }} />
          <div>
            <strong>Aviso de Transparencia:</strong> Este perfil no corresponde a un médico real en ejercicio ni contiene
            datos de registro verificables. Ha sido creado exclusivamente con propósitos de muestra estética y funcional
            para el portafolio de diseño de KuyénDev.
          </div>
        </div>
      </div>
    </div>
  );
};
