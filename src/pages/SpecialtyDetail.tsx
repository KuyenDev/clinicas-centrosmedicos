import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ChevronLeft,
  Calendar,
  Clock,
  Sparkles,
  CheckCircle2,
  ShieldAlert,
  User,
  ArrowRight,
  Info
} from 'lucide-react';
import { SPECIALTIES_DATA } from '../data/specialties';
import { PROFESSIONALS_DATA } from '../data/professionals';

export const SpecialtyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const specialty = SPECIALTIES_DATA.find((s) => s.id === id);

  if (!specialty) {
    return (
      <div id="main-content" className="section-padding container" style={{ textAlign: 'center' }}>
        <h2>Especialidad no encontrada</h2>
        <p style={{ margin: '1rem 0 2rem' }}>La especialidad solicitada no existe en el catálogo demostrativo.</p>
        <Link to="/specialties" className="btn btn-primary">
          Volver a especialidades
        </Link>
      </div>
    );
  }

  // Associated doctors
  const associatedDoctors = PROFESSIONALS_DATA.filter((p) =>
    specialty.associatedDoctorIds.includes(p.id)
  );

  return (
    <div id="main-content" className="section-padding">
      <div className="container" style={{ maxWidth: '960px' }}>
        {/* Breadcrumb / Back button */}
        <div style={{ marginBottom: '1.5rem' }}>
          <Link
            to="/specialties"
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
            <span>Volver a todas las especialidades</span>
          </Link>
        </div>

        {/* Hero Card */}
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <span className="badge badge-petrol">{specialty.categoryLabel}</span>
            <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-slate-grey)' }}>
              Área Clínica Ficticia
            </span>
          </div>

          <h1 style={{ fontSize: 'var(--text-3xl)', color: 'var(--color-petrol-deep)', marginBottom: '1rem' }}>
            {specialty.name}
          </h1>

          <p style={{ fontSize: 'var(--text-lg)', lineHeight: 1.6, color: 'var(--color-text-main)', marginBottom: '1.75rem' }}>
            {specialty.fullDescription}
          </p>

          {/* Quick Metrics */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.25rem',
              backgroundColor: 'var(--color-surface-subtle)',
              padding: '1.25rem',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--color-border-subtle)',
              marginBottom: '2rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Clock size={20} style={{ color: 'var(--color-petrol)' }} />
              <div>
                <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-slate-grey)', display: 'block' }}>
                  Duración Demostrativa
                </span>
                <strong style={{ fontSize: 'var(--text-sm)', color: 'var(--color-petrol-deep)' }}>
                  {specialty.sampleDuration}
                </strong>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Sparkles size={20} style={{ color: 'var(--color-petrol)' }} />
              <div>
                <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-slate-grey)', display: 'block' }}>
                  Arancel Referencial
                </span>
                <strong style={{ fontSize: 'var(--text-sm)', color: 'var(--color-petrol-deep)' }}>
                  {specialty.referenceFee}
                </strong>
              </div>
            </div>
          </div>

          {/* Direct booking CTA */}
          <Link
            to={`/appointments?specialty=${specialty.id}`}
            className="btn btn-primary btn-lg"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <Calendar size={18} />
            <span>Simular agendamiento en {specialty.name}</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Content sections: Key areas & Preparation */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
          {/* Key Areas */}
          <div
            style={{
              backgroundColor: 'var(--color-white)',
              padding: '2rem',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-subtle)',
            }}
          >
            <h3 style={{ fontSize: 'var(--text-xl)', color: 'var(--color-petrol-deep)', marginBottom: '1.25rem' }}>
              Áreas y Motivos de Consulta Habituales
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {specialty.keyAreas.map((area, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-sage-dark)', flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: 'var(--text-sm)', lineHeight: 1.5, color: 'var(--color-text-main)' }}>
                    {area}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Preparation Advice */}
          <div
            style={{
              backgroundColor: 'var(--color-white)',
              padding: '2rem',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-subtle)',
            }}
          >
            <h3 style={{ fontSize: 'var(--text-xl)', color: 'var(--color-petrol-deep)', marginBottom: '1.25rem' }}>
              Recomendaciones para tu Consulta
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {specialty.preparationAdvice.map((prep, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                  <Info size={18} style={{ color: 'var(--color-petrol)', flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: 'var(--text-sm)', lineHeight: 1.5, color: 'var(--color-text-main)' }}>
                    {prep}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Associated Doctors Section */}
        {associatedDoctors.length > 0 && (
          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: 'var(--text-xl)', color: 'var(--color-petrol-deep)', marginBottom: '1rem' }}>
              Equipo Médico en {specialty.name}
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
              {associatedDoctors.map((doc) => (
                <div
                  key={doc.id}
                  className="card"
                  style={{
                    padding: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                  }}
                >
                  <img
                    src={doc.avatarUrl}
                    alt={doc.name}
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      flexShrink: 0,
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: 'var(--text-base)', color: 'var(--color-petrol-deep)', margin: 0 }}>
                      {doc.name}
                    </h4>
                    <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-slate-grey)', display: 'block', margin: '2px 0 0.5rem' }}>
                      {doc.role}
                    </span>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <Link to={`/professionals/${doc.id}`} className="btn btn-outline btn-sm">
                        Ver ficha
                      </Link>
                      <Link to={`/appointments?doctor=${doc.id}`} className="btn btn-primary btn-sm">
                        Agendar
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

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
            <strong>Transparencia del Showcase:</strong> La información contenida en esta ficha es puramente demostrativa
            y educativa para el portafolio de KuyénDev. No constituye asesoramiento médico, farmacológico ni asistencial real.
          </div>
        </div>
      </div>
    </div>
  );
};
