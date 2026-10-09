import React from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  Eye,
  ShieldCheck,
  Compass,
  Sparkles,
  Building2,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div id="main-content" className="section-padding">
      <div className="container" style={{ maxWidth: '1040px' }}>
        {/* Page Header */}
        <div className="section-header">
          <span className="section-eyebrow">Filosofía & Concepto</span>
          <h1 className="section-title">Nuestra Manera de Entender la Salud</h1>
          <p className="section-description">
            Una propuesta conceptual creada para demostrar cómo el diseño, la empatía y la tecnología pueden transformar la experiencia del paciente.
          </p>
        </div>

        {/* Narrative Hero Card */}
        <div
          style={{
            backgroundColor: 'var(--color-white)',
            borderRadius: 'var(--radius-2xl)',
            padding: 'clamp(2rem, 5vw, 3.5rem)',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-card)',
            marginBottom: '3rem',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '3rem',
              alignItems: 'center',
            }}
          >
            <div>
              <span
                style={{
                  fontSize: 'var(--text-xs)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: 'var(--color-petrol)',
                  letterSpacing: '0.08em',
                  display: 'block',
                  marginBottom: '0.5rem',
                }}
              >
                Manifiesto Editorial
              </span>
              <h2 style={{ fontSize: 'var(--text-2xl)', color: 'var(--color-petrol-deep)', marginBottom: '1.25rem', lineHeight: 1.3 }}>
                «Cuidar de ti comienza con escucharte.»
              </h2>
              <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.7, color: 'var(--color-text-main)', marginBottom: '1rem' }}>
                En la vorágine de la atención contemporánea, la consulta médica a menudo ha quedado reducida a trámites
                apresurados y pantallas interpuestas. NOVA SALUD nace como un concepto de clínica integral donde el primer
                instrumento de diagnóstico es el tiempo dedicado a entender el contexto del paciente.
              </p>
              <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.7, color: 'var(--color-text-muted)' }}>
                Buscamos el equilibrio exacto: la calidez de la medicina familiar de siempre, respaldada por la precisión
                de la evidencia científica y una interfaz digital diseñada con la máxima claridad y accesibilidad.
              </p>
            </div>

            <div>
              <div
                style={{
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-hover)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <img
                  src="./images/facilities/waiting-lounge.jpg"
                  alt="Espacio sereno con luz natural y vegetación en NOVA SALUD"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Values */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 2.5rem' }}>
            <span className="section-eyebrow">Principios Guía</span>
            <h2 style={{ fontSize: 'var(--text-2xl)', color: 'var(--color-petrol-deep)' }}>
              Valores que sustentan la experiencia
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {[
              {
                icon: Heart,
                title: 'Escucha Activa',
                desc: 'Consultas con tiempos suficientes para que el paciente pueda expresar sus inquietudes sin sensación de prisa.',
              },
              {
                icon: Eye,
                title: 'Claridad Total',
                desc: 'Aranceles transparentes, explicaciones en lenguaje cotidiano e instrucciones precisas para exámenes.',
              },
              {
                icon: ShieldCheck,
                title: 'Rigor & Evidencia',
                desc: 'Práctica clínica multidisciplinaria respaldada por guías médicas actualizadas y ética profesional.',
              },
              {
                icon: Compass,
                title: 'Accesibilidad Universal',
                desc: 'Entornos físicos libres de barreras e interfaces digitales inclusivas preparadas bajo estándar WCAG 2.2 AA.',
              },
            ].map((val) => {
              const ValIcon = val.icon;

              return (
                <div
                  key={val.title}
                  style={{
                    backgroundColor: 'var(--color-white)',
                    padding: '1.75rem',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--color-border)',
                    boxShadow: 'var(--shadow-subtle)',
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--color-sage-soft)',
                      color: 'var(--color-petrol)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1rem',
                    }}
                  >
                    <ValIcon size={22} />
                  </div>
                  <h3 style={{ fontSize: 'var(--text-lg)', color: 'var(--color-petrol-deep)', marginBottom: '0.5rem' }}>
                    {val.title}
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', lineHeight: 1.6, margin: 0, color: 'var(--color-text-muted)' }}>
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Space Design / Neuro-architecture */}
        <div
          style={{
            backgroundColor: 'var(--color-surface-subtle)',
            borderRadius: 'var(--radius-2xl)',
            padding: 'clamp(2rem, 4vw, 3rem)',
            border: '1px solid var(--color-border)',
            marginBottom: '3.5rem',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center',
            }}
          >
            <div>
              <span className="badge badge-petrol" style={{ marginBottom: '0.75rem' }}>
                Neuroarquitectura Sanitaria
              </span>
              <h2 style={{ fontSize: 'var(--text-2xl)', color: 'var(--color-petrol-deep)', marginBottom: '1rem' }}>
                Espacios que calman antes de entrar a la consulta
              </h2>
              <p style={{ fontSize: 'var(--text-sm)', lineHeight: 1.7, color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
                Numerosos estudios de diseño hospitalario demuestran que la luz natural directa, el uso de tonos salvia y
                materiales nobles como la madera reducen los niveles de cortisol y la ansiedad ante una visita médica.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: 'var(--text-sm)', color: 'var(--color-text-main)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--color-petrol)' }} />
                  <span>Atenuación acústica en salas de espera</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: 'var(--text-sm)', color: 'var(--color-text-main)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--color-petrol)' }} />
                  <span>Vistas a jardines y vegetación interior</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: 'var(--text-sm)', color: 'var(--color-text-main)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--color-petrol)' }} />
                  <span>Consultorios sin escritorios divisorios intimidantes</span>
                </li>
              </ul>

              <div style={{ marginTop: '1.75rem' }}>
                <Link to="/facilities" className="btn btn-outline">
                  <Building2 size={16} />
                  <span>Conocer nuestras instalaciones</span>
                </Link>
              </div>
            </div>

            <div>
              <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-card)' }}>
                <img
                  src="./images/facilities/reception.jpg"
                  alt="Recepción luminosa y serena de NOVA SALUD"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Showcase Statement */}
        <div
          style={{
            backgroundColor: 'var(--color-white)',
            borderRadius: 'var(--radius-xl)',
            padding: '2rem',
            border: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '1rem',
          }}
        >
          <ShieldAlert size={24} style={{ color: '#D99B4B', flexShrink: 0, marginTop: '2px' }} />
          <div>
            <h4 style={{ fontSize: 'var(--text-base)', color: 'var(--color-petrol-deep)', marginBottom: '0.35rem' }}>
              Carácter Demostrativo del Proyecto
            </h4>
            <p style={{ fontSize: 'var(--text-xs)', lineHeight: 1.6, color: 'var(--color-text-muted)', margin: 0 }}>
              NOVA SALUD es una creación ficticia desarrollada por <strong>KuyénDev</strong> como plantilla de referencia
              de alta gama para centros médicos, consultas particulares, clínicas estéticas y odontológicas. No representa
              una entidad jurídica real ni posee vínculos con aseguradoras o centros de salud existentes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
