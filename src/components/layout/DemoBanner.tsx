import React, { useState } from 'react';
import { Info, X, ShieldCheck } from 'lucide-react';
import { DEMO_CONFIG } from '../../config/demo';

export const DemoBanner: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <aside
      aria-label="Aviso de demostración"
      style={{
        backgroundColor: '#103846',
        color: '#FFFFFF',
        fontSize: '0.8125rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
        position: 'relative',
        zIndex: 100,
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '0.45rem',
          paddingBottom: '0.45rem',
          gap: '1rem',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: 1, minWidth: '260px' }}>
          <span
            style={{
              backgroundColor: 'var(--color-sage)',
              color: 'var(--color-petrol-deep)',
              fontWeight: 700,
              fontSize: '0.6875rem',
              padding: '0.15rem 0.5rem',
              borderRadius: '9999px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            Showcase KuyénDev
          </span>
          <span style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
            {DEMO_CONFIG.disclaimerShort}
          </span>
        </div>

        <button
          type="button"
          onClick={() => setShowDetails(!showDetails)}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--color-sage-soft)',
            fontSize: '0.75rem',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.3rem',
            padding: '0.2rem 0.5rem',
            borderRadius: '4px',
            textDecoration: 'underline',
          }}
          aria-expanded={showDetails}
        >
          <Info size={14} />
          {showDetails ? 'Ocultar detalles' : 'Ver alcance demostrativo'}
        </button>
      </div>

      {showDetails && (
        <div
          style={{
            backgroundColor: '#0D2E3A',
            padding: '0.75rem 0',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <div className="container" style={{ fontSize: '0.78125rem', color: '#D2E3DC', lineHeight: 1.6 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
              <ShieldCheck size={18} style={{ color: 'var(--color-sage)', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong>Compromiso de Privacidad y Simulación:</strong> Este portal está diseñado exclusivamente para evaluar la experiencia de usuario (UX), el sistema de agendamiento interactivo y la arquitectura técnica de un centro médico moderno. <strong>NO recopilamos datos personales, no solicitamos RUT ni antecedentes de salud</strong>, y ningún formulario realiza envíos a servidores externos.
              </div>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};
