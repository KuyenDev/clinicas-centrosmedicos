import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Heart, MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { SITE_CONFIG } from '../../config/site';
import { DEMO_CONFIG } from '../../config/demo';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: '#103846',
        color: '#E8F1EC',
        paddingTop: 'var(--space-3xl)',
        paddingBottom: 'var(--space-xl)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        marginTop: 'auto',
      }}
    >
      <div className="container">
        {/* Mandatory Fictional Demonstration Alert Box */}
        <div
          style={{
            backgroundColor: 'rgba(22, 74, 91, 0.65)',
            border: '1px solid rgba(145, 173, 160, 0.35)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.25rem 1.5rem',
            marginBottom: 'var(--space-2xl)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '1rem',
          }}
        >
          <ShieldAlert
            size={24}
            style={{ color: '#D99B4B', flexShrink: 0, marginTop: '2px' }}
            aria-hidden="true"
          />
          <div>
            <div
              style={{
                fontSize: 'var(--text-sm)',
                fontWeight: 700,
                color: '#FFFFFF',
                marginBottom: '0.25rem',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}
            >
              Aviso Obligatorio de Demostración — KuyénDev Web Showcase
            </div>
            <p style={{ color: '#D1E0DB', fontSize: 'var(--text-sm)', margin: 0, lineHeight: 1.6 }}>
              {DEMO_CONFIG.disclaimerShort} Este entorno digital ha sido diseñado como una prueba de concepto
              de experiencia médica (UI/UX) y no recopila datos reales, no efectúa reservas auténticas ni proporciona atención sanitaria.
            </p>
          </div>
        </div>

        {/* Footer Main Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2.5rem',
            marginBottom: 'var(--space-2xl)',
          }}
        >
          {/* Col 1: Identity */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <Logo variant="light" />
            </div>
            <p style={{ color: '#ADC0BA', fontSize: 'var(--text-sm)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              «{SITE_CONFIG.slogan}»
            </p>
            <p style={{ color: '#8DA69E', fontSize: 'var(--text-xs)', lineHeight: 1.5 }}>
              Propuesta conceptual para clínicas privadas, centros ambulatorios y consultas especializadas que buscan transmitir calidez y claridad.
            </p>
          </div>

          {/* Col 2: Accesos Directos */}
          <div>
            <h4
              style={{
                color: '#FFFFFF',
                fontSize: 'var(--text-base)',
                fontWeight: 600,
                marginBottom: '1rem',
                letterSpacing: '0.02em',
              }}
            >
              Navegación
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {SITE_CONFIG.navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    style={{
                      color: '#C4D6D0',
                      fontSize: 'var(--text-sm)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#C4D6D0')}
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/appointments"
                  style={{
                    color: 'var(--color-sage)',
                    fontWeight: 600,
                    fontSize: 'var(--text-sm)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                  }}
                >
                  <span>Simular Agendamiento</span>
                  <ArrowUpRight size={14} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Horarios Demostrativos */}
          <div>
            <h4
              style={{
                color: '#FFFFFF',
                fontSize: 'var(--text-base)',
                fontWeight: 600,
                marginBottom: '1rem',
                letterSpacing: '0.02em',
              }}
            >
              Horarios de Muestra
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: 'var(--text-sm)', color: '#C4D6D0' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <Clock size={16} style={{ color: 'var(--color-sage)', flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <div style={{ fontWeight: 600, color: '#FFFFFF' }}>Lunes a Viernes</div>
                  <div>{SITE_CONFIG.contact.hoursWeekdays}</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <Clock size={16} style={{ color: 'var(--color-sage)', flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <div style={{ fontWeight: 600, color: '#FFFFFF' }}>Sábados</div>
                  <div>{SITE_CONFIG.contact.hoursSaturday}</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <Clock size={16} style={{ color: '#8DA69E', flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <div style={{ color: '#8DA69E' }}>Domingos & Festivos</div>
                  <div style={{ color: '#8DA69E' }}>{SITE_CONFIG.contact.hoursSunday}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Contacto Conceptual */}
          <div>
            <h4
              style={{
                color: '#FFFFFF',
                fontSize: 'var(--text-base)',
                fontWeight: 600,
                marginBottom: '1rem',
                letterSpacing: '0.02em',
              }}
            >
              Canales Ficticios
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: 'var(--text-sm)', color: '#C4D6D0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={16} style={{ color: 'var(--color-sage)', flexShrink: 0 }} />
                <span>{SITE_CONFIG.contact.address}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={16} style={{ color: 'var(--color-sage)', flexShrink: 0 }} />
                <span>{SITE_CONFIG.contact.phone}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={16} style={{ color: 'var(--color-sage)', flexShrink: 0 }} />
                <span>{SITE_CONFIG.contact.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div
          style={{
            paddingTop: 'var(--space-lg)',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: 'var(--text-xs)',
            color: '#8DA69E',
          }}
        >
          <div>
            © {new Date().getFullYear()} NOVA SALUD — Centro Médico Integral ficticio para el catálogo de demostraciones.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>Diseñado con rigor y accesibilidad por</span>
            <strong style={{ color: '#FFFFFF', letterSpacing: '0.04em' }}>KuyénDev</strong>
          </div>
        </div>
      </div>
    </footer>
  );
};
