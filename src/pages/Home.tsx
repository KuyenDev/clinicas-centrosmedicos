import React from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  Users,
  Compass,
  FileText,
  Building2,
  Heart,
  ChevronRight,
  Stethoscope,
  Baby,
  HeartPulse,
  Activity,
  Apple,
  Dumbbell
} from 'lucide-react';
import { SPECIALTIES_DATA } from '../data/specialties';
import { PROFESSIONALS_DATA } from '../data/professionals';
import { FACILITIES_DATA } from '../data/facilities';

export const Home: React.FC = () => {
  const featuredSpecialties = SPECIALTIES_DATA.slice(0, 6);
  const featuredDoctors = PROFESSIONALS_DATA.filter((p) => p.featured);
  const previewFacilities = FACILITIES_DATA.slice(0, 3);

  // Icon mapping
  const renderSpecialtyIcon = (name: string) => {
    switch (name) {
      case 'Baby':
        return <Baby size={24} />;
      case 'HeartPulse':
        return <HeartPulse size={24} />;
      case 'Activity':
        return <Activity size={24} />;
      case 'Apple':
        return <Apple size={24} />;
      case 'Dumbbell':
        return <Dumbbell size={24} />;
      default:
        return <Stethoscope size={24} />;
    }
  };

  return (
    <div id="main-content">
      {/* ======================================================================
          1. HERO SECTION
          ====================================================================== */}
      <section
        style={{
          paddingTop: 'clamp(2.5rem, 5vw, 4.5rem)',
          paddingBottom: 'clamp(3rem, 6vw, 5.5rem)',
          background: 'linear-gradient(180deg, rgba(232, 241, 236, 0.45) 0%, rgba(248, 250, 249, 1) 100%)',
          borderBottom: '1px solid var(--color-border-subtle)',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(2rem, 5vw, 4rem)',
              alignItems: 'center',
            }}
          >
            {/* Hero Left: Text & CTAs */}
            <div>
              <div className="section-eyebrow animate-fade-in">
                <Sparkles size={14} />
                <span>Salud Humanizada • Modelo Demostrativo</span>
              </div>

              <h1
                style={{
                  fontSize: 'var(--text-4xl)',
                  color: 'var(--color-petrol-deep)',
                  lineHeight: 1.15,
                  marginBottom: '1.25rem',
                }}
                className="animate-fade-in"
              >
                Tu bienestar merece una atención diferente.
              </h1>

              <p
                style={{
                  fontSize: 'var(--text-lg)',
                  color: 'var(--color-text-muted)',
                  lineHeight: 1.6,
                  marginBottom: '2rem',
                  maxWidth: '540px',
                }}
                className="animate-fade-in-delayed"
              >
                Una experiencia de salud más cercana, clara y conectada contigo.
                Espacios luminosos, profesionales multidisciplinarios y un sistema digital intuitivo.
              </p>

              {/* CTAs */}
              <div
                style={{
                  display: 'flex',
                  gap: '1rem',
                  flexWrap: 'wrap',
                  marginBottom: '2.5rem',
                }}
                className="animate-fade-in-delayed"
              >
                <Link to="/appointments" className="btn btn-primary btn-lg">
                  <Calendar size={18} />
                  <span>Simular una hora médica</span>
                  <ArrowRight size={16} />
                </Link>

                <Link to="/specialties" className="btn btn-secondary btn-lg">
                  <span>Explorar especialidades</span>
                </Link>
              </div>

              {/* Verified Interface Highlights */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                  gap: '1rem',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid var(--color-border)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <ShieldCheck size={18} style={{ color: 'var(--color-petrol)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ fontSize: 'var(--text-xs)', display: 'block', color: 'var(--color-petrol-deep)' }}>
                      Privacidad Estricta
                    </strong>
                    <span style={{ fontSize: '0.6875rem', color: 'var(--color-text-muted)' }}>
                      Sin RUT ni datos médicos
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-petrol)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ fontSize: 'var(--text-xs)', display: 'block', color: 'var(--color-petrol-deep)' }}>
                      Accesible WCAG 2.2 AA
                    </strong>
                    <span style={{ fontSize: '0.6875rem', color: 'var(--color-text-muted)' }}>
                      Navegación total por teclado
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <Sparkles size={18} style={{ color: 'var(--color-petrol)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ fontSize: 'var(--text-xs)', display: 'block', color: 'var(--color-petrol-deep)' }}>
                      Agendamiento Ágil
                    </strong>
                    <span style={{ fontSize: '0.6875rem', color: 'var(--color-text-muted)' }}>
                      Simulación en 5 pasos
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Right: Photography */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'relative',
                  borderRadius: 'var(--radius-2xl)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-hover)',
                  border: '1px solid rgba(22, 74, 91, 0.1)',
                }}
              >
                <img
                  src="./images/hero/hero-medical.jpg"
                  alt="Consulta médica en un entorno cálido, luminoso y moderno de estilo escandinavo"
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />

                {/* Floating pill badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1.25rem',
                    left: '1.25rem',
                    right: '1.25rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.94)',
                    backdropFilter: 'blur(10px)',
                    padding: '0.85rem 1.25rem',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid rgba(255, 255, 255, 0.6)',
                    boxShadow: 'var(--shadow-card)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-sage-soft)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-petrol)',
                      }}
                    >
                      <Heart size={18} />
                    </div>
                    <div>
                      <strong style={{ fontSize: 'var(--text-xs)', display: 'block', color: 'var(--color-petrol-deep)' }}>
                        Atención Centrada en la Persona
                      </strong>
                      <span style={{ fontSize: '0.6875rem', color: 'var(--color-text-muted)' }}>
                        Conversación sin apuros ni barreras
                      </span>
                    </div>
                  </div>

                  <span
                    style={{
                      fontSize: '0.6875rem',
                      fontWeight: 700,
                      color: 'var(--color-petrol)',
                      backgroundColor: 'var(--color-surface-subtle)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '9999px',
                    }}
                  >
                    Concepto
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          2. ACCESOS RÁPIDOS
          ====================================================================== */}
      <section style={{ padding: 'var(--space-2xl) 0', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {[
              {
                title: 'Especialidades Médicas',
                desc: '8 áreas clínicas con información detallada de aranceles y preparación.',
                icon: Stethoscope,
                href: '/specialties',
                badge: '8 Áreas',
              },
              {
                title: 'Directorio Profesional',
                desc: 'Conoce al equipo médico ficticio, sus áreas de interés y disponibilidad.',
                icon: Users,
                href: '/professionals',
                badge: 'Equipo Ficticio',
              },
              {
                title: 'Agendamiento Simulado',
                desc: 'Experimenta el flujo guiado de reserva de horas sin compromiso real.',
                icon: Calendar,
                href: '/appointments',
                badge: 'Interactivo',
              },
              {
                title: 'Información al Paciente',
                desc: 'Guía de preparación, horarios y preguntas frecuentes respondidas.',
                icon: FileText,
                href: '/information',
                badge: 'Preguntas',
              },
            ].map((card) => {
              const IconComp = card.icon;

              return (
                <Link
                  key={card.title}
                  to={card.href}
                  className="card card-interactive"
                  style={{
                    padding: '1.5rem',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                      <div
                        style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: 'var(--radius-md)',
                          backgroundColor: 'var(--color-sage-soft)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--color-petrol)',
                        }}
                      >
                        <IconComp size={22} />
                      </div>
                      <span className="badge badge-petrol">{card.badge}</span>
                    </div>

                    <h3 style={{ fontSize: 'var(--text-lg)', marginBottom: '0.4rem', color: 'var(--color-petrol-deep)' }}>
                      {card.title}
                    </h3>
                    <p style={{ fontSize: 'var(--text-sm)', margin: 0, lineHeight: 1.5 }}>
                      {card.desc}
                    </p>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      marginTop: '1.25rem',
                      fontSize: 'var(--text-xs)',
                      fontWeight: 700,
                      color: 'var(--color-petrol)',
                    }}
                  >
                    <span>Explorar sección</span>
                    <ChevronRight size={14} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================================
          3. ESPECIALIDADES DESTACADAS
          ====================================================================== */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Áreas Clínicas</span>
            <h2 className="section-title">Especialidades para cada etapa de tu vida</h2>
            <p className="section-description">
              Atención multidisciplinaria con enfoque preventivo y humano. Selecciona una especialidad para ver detalles o simular tu cita.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2.5rem',
            }}
          >
            {featuredSpecialties.map((spec) => (
              <div
                key={spec.id}
                className="card card-interactive"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: 'var(--radius-lg)',
                        backgroundColor: 'var(--color-surface-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-petrol)',
                        border: '1px solid var(--color-border)',
                      }}
                    >
                      {renderSpecialtyIcon(spec.iconName)}
                    </div>
                    <span className="badge badge-sage">{spec.categoryLabel}</span>
                  </div>

                  <h3 style={{ fontSize: 'var(--text-xl)', marginBottom: '0.5rem', color: 'var(--color-petrol-deep)' }}>
                    {spec.name}
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {spec.shortDescription}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginBottom: '1.5rem', fontSize: 'var(--text-xs)', color: 'var(--color-slate-grey)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Clock size={14} style={{ color: 'var(--color-sage-dark)' }} />
                      <span>Duración estimada: {spec.sampleDuration}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Sparkles size={14} style={{ color: 'var(--color-sage-dark)' }} />
                      <span>Arancel ref: {spec.referenceFee}</span>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border-subtle)' }}>
                  <Link
                    to={`/specialties/${spec.id}`}
                    className="btn btn-outline btn-sm"
                    style={{ flex: 1 }}
                  >
                    Ver detalle
                  </Link>
                  <Link
                    to={`/appointments?specialty=${spec.id}`}
                    className="btn btn-primary btn-sm"
                    style={{ flex: 1 }}
                  >
                    Agendar
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/specialties" className="btn btn-outline btn-lg">
              <span>Ver todas las 8 especialidades</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ======================================================================
          4. FILOSOFÍA DE ATENCIÓN (EDITORIAL)
          ====================================================================== */}
      <section
        style={{
          padding: 'var(--space-4xl) 0',
          backgroundColor: '#164A5B',
          color: '#FFFFFF',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(2.5rem, 5vw, 4.5rem)',
              alignItems: 'center',
            }}
          >
            <div>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--color-sage)',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  marginBottom: '1rem',
                }}
              >
                Nuestra Manera de Atender
              </span>

              <h2
                style={{
                  fontSize: 'var(--text-3xl)',
                  color: '#FFFFFF',
                  lineHeight: 1.25,
                  marginBottom: '1.5rem',
                }}
              >
                La atención comienza con una buena conversación.
              </h2>

              <p style={{ color: '#D2E3DC', fontSize: 'var(--text-base)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Creemos que la medicina no debe apresurar a quien consulta. Cada diagnóstico parte del acto de escuchar
                con atención, explicar con sencillez y construir un camino de salud en conjunto con el paciente.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
                <div style={{ borderLeft: '3px solid var(--color-sage)', paddingLeft: '1rem' }}>
                  <h4 style={{ color: '#FFFFFF', fontSize: 'var(--text-base)', marginBottom: '0.25rem' }}>
                    Sin Prisas Innecesarias
                  </h4>
                  <p style={{ color: '#B3CBC3', fontSize: 'var(--text-xs)', margin: 0, lineHeight: 1.5 }}>
                    Tiempos de consulta generosos pensados para responder todas tus preguntas.
                  </p>
                </div>

                <div style={{ borderLeft: '3px solid var(--color-sage)', paddingLeft: '1rem' }}>
                  <h4 style={{ color: '#FFFFFF', fontSize: 'var(--text-base)', marginBottom: '0.25rem' }}>
                    Lenguaje Cercano
                  </h4>
                  <p style={{ color: '#B3CBC3', fontSize: 'var(--text-xs)', margin: 0, lineHeight: 1.5 }}>
                    Explicaciones claras sin tecnicismos que confundan a la familia.
                  </p>
                </div>
              </div>

              <div style={{ marginTop: '2.5rem' }}>
                <Link to="/about" className="btn btn-white">
                  <span>Conocer más sobre nuestro enfoque</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Editorial Visual */}
            <div>
              <div
                style={{
                  borderRadius: 'var(--radius-2xl)',
                  overflow: 'hidden',
                  boxShadow: '0 20px 45px rgba(0,0,0,0.25)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                }}
              >
                <img
                  src="./images/facilities/consultation-room.jpg"
                  alt="Espacio de consulta amplio y luminoso donde médico y paciente conversan en calma"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          5. PROFESIONALES DESTACADOS
          ====================================================================== */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Equipo Médico</span>
            <h2 className="section-title">Profesionales dedicados a escucharte</h2>
            <p className="section-description">
              Perfiles ficticios cuidadosamente diseñados para ilustrar cómo se presenta un equipo clínico de alto nivel.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2.5rem',
            }}
          >
            {featuredDoctors.map((doc) => (
              <div
                key={doc.id}
                className="card card-interactive"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ position: 'relative', marginBottom: '1.25rem', overflow: 'hidden', borderRadius: 'var(--radius-lg)' }}>
                    <img
                      src={doc.avatarUrl}
                      alt={doc.name}
                      style={{
                        width: '100%',
                        aspectRatio: '1',
                        objectFit: 'cover',
                      }}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        top: '0.75rem',
                        right: '0.75rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.92)',
                        backdropFilter: 'blur(4px)',
                        fontSize: '0.6875rem',
                        fontWeight: 700,
                        color: 'var(--color-petrol)',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '9999px',
                      }}
                    >
                      {doc.specialtyName}
                    </span>
                  </div>

                  <h3 style={{ fontSize: 'var(--text-lg)', marginBottom: '0.25rem', color: 'var(--color-petrol-deep)' }}>
                    {doc.name}
                  </h3>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-slate-grey)', marginBottom: '0.75rem', fontWeight: 500 }}>
                    {doc.role}
                  </div>
                  <p style={{ fontSize: 'var(--text-xs)', lineHeight: 1.6, margin: 0 }}>
                    {doc.shortBio}
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border-subtle)' }}>
                  <Link
                    to={`/professionals/${doc.id}`}
                    className="btn btn-outline btn-sm"
                    style={{ flex: 1 }}
                  >
                    Ver perfil
                  </Link>
                  <Link
                    to={`/appointments?doctor=${doc.id}`}
                    className="btn btn-primary btn-sm"
                    style={{ flex: 1 }}
                  >
                    Agendar
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/professionals" className="btn btn-outline btn-lg">
              <span>Ver directorio completo</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ======================================================================
          6. PROCESO DE AGENDAMIENTO EN 3 PASOS
          ====================================================================== */}
      <section
        style={{
          padding: 'var(--space-3xl) 0',
          backgroundColor: 'var(--color-surface-subtle)',
          borderTop: '1px solid var(--color-border)',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Experiencia Digital</span>
            <h2 className="section-title">Agendar nunca debería ser un obstáculo</h2>
            <p className="section-description">
              Un flujo intuitivo y sin fricciones, diseñado para personas de todas las edades.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2.5rem',
            }}
          >
            {[
              {
                step: '01',
                title: 'Selecciona Especialidad',
                desc: 'Explora las áreas médicas con aranceles referenciales y duraciones claras sin letras chicas.',
                icon: Stethoscope,
              },
              {
                step: '02',
                title: 'Elige Profesional y Horario',
                desc: 'Selecciona a tu médico de preferencia o pide la primera hora disponible en un calendario accesible.',
                icon: Calendar,
              },
              {
                step: '03',
                title: 'Confirmación Inmediata',
                desc: 'Revisa el resumen claro de tu cita con código demostrativo sin solicitar datos sensibles.',
                icon: CheckCircle2,
              },
            ].map((item) => {
              const StepIcon = item.icon;

              return (
                <div
                  key={item.step}
                  style={{
                    backgroundColor: 'var(--color-white)',
                    padding: '2rem',
                    borderRadius: 'var(--radius-xl)',
                    border: '1px solid var(--color-border)',
                    boxShadow: 'var(--shadow-subtle)',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'var(--text-3xl)',
                      fontWeight: 800,
                      color: 'var(--color-sage-soft)',
                      position: 'absolute',
                      top: '1.25rem',
                      right: '1.5rem',
                      lineHeight: 1,
                    }}
                  >
                    {item.step}
                  </div>

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
                      marginBottom: '1.25rem',
                    }}
                  >
                    <StepIcon size={22} />
                  </div>

                  <h3 style={{ fontSize: 'var(--text-lg)', marginBottom: '0.5rem', color: 'var(--color-petrol-deep)' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', lineHeight: 1.6, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/appointments" className="btn btn-primary btn-lg">
              <Calendar size={18} />
              <span>Probar el simulador de agendamiento</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ======================================================================
          7. INSTALACIONES PREVIEW
          ====================================================================== */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Arquitectura & Bienestar</span>
            <h2 className="section-title">Espacios diseñados para transmitir serenidad</h2>
            <p className="section-description">
              Ambientes luminosos con luz natural, maderas cálidas y vegetación para reducir la ansiedad clínica.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2.5rem',
            }}
          >
            {previewFacilities.map((fac) => (
              <div
                key={fac.id}
                className="card card-interactive"
                style={{ overflow: 'hidden' }}
              >
                <img
                  src={fac.imageUrl}
                  alt={fac.title}
                  style={{
                    width: '100%',
                    height: '220px',
                    objectFit: 'cover',
                  }}
                />
                <div style={{ padding: '1.5rem' }}>
                  <span className="badge badge-sage" style={{ marginBottom: '0.5rem' }}>
                    {fac.categoryLabel}
                  </span>
                  <h3 style={{ fontSize: 'var(--text-base)', marginBottom: '0.4rem', color: 'var(--color-petrol-deep)' }}>
                    {fac.title}
                  </h3>
                  <p style={{ fontSize: 'var(--text-xs)', lineHeight: 1.6, margin: 0 }}>
                    {fac.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/facilities" className="btn btn-outline btn-lg">
              <Building2 size={18} />
              <span>Ver galería completa de instalaciones</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ======================================================================
          8. CTA FINAL
          ====================================================================== */}
      <section
        style={{
          padding: 'var(--space-3xl) 0',
          background: 'linear-gradient(135deg, #103846 0%, #164A5B 100%)',
          color: '#FFFFFF',
          textAlign: 'center',
        }}
      >
        <div className="container" style={{ maxWidth: '720px' }}>
          <h2 style={{ fontSize: 'var(--text-3xl)', color: '#FFFFFF', marginBottom: '1rem' }}>
            Una experiencia pensada para tu tranquilidad.
          </h2>
          <p style={{ fontSize: 'var(--text-lg)', color: '#D2E3DC', marginBottom: '2rem', lineHeight: 1.6 }}>
            Experimenta cómo se siente un centro médico digital contemporáneo. Explora nuestras especialidades o realiza una simulación interactiva.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/appointments" className="btn btn-white btn-lg">
              <Calendar size={18} />
              <span>Explorar agendamiento</span>
            </Link>
            <Link to="/contact" className="btn btn-outline btn-lg" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#FFFFFF' }}>
              <span>Ver información de contacto</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
