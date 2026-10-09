import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'light' | 'dark';
  compact?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'dark', compact = false }) => {
  const isLight = variant === 'light';
  
  return (
    <Link
      to="/"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.75rem',
        textDecoration: 'none',
      }}
      aria-label="NOVA SALUD — Ir al inicio"
    >
      {/* Abstract geometric wellness & health symbol */}
      <svg
        width={compact ? 34 : 40}
        height={compact ? 34 : 40}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0, transition: 'transform 0.2s ease' }}
      >
        <rect
          width="40"
          height="40"
          rx="12"
          fill={isLight ? '#FFFFFF' : '#164A5B'}
        />
        {/* Harmonious stylized 'N' + wellness arch */}
        <path
          d="M13 27V13L27 27V13"
          stroke={isLight ? '#164A5B' : '#91ADA0'}
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Soft focal dot of balance */}
        <circle
          cx="27.5"
          cy="12.5"
          r="2.5"
          fill={isLight ? '#91ADA0' : '#FFFFFF'}
        />
        <circle
          cx="12.5"
          cy="27.5"
          r="2"
          fill={isLight ? '#91ADA0' : '#E8F1EC'}
        />
      </svg>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: compact ? '1.15rem' : '1.3rem',
            letterSpacing: '-0.02em',
            color: isLight ? '#FFFFFF' : 'var(--color-petrol-deep)',
            lineHeight: 1.1,
          }}
        >
          NOVA SALUD
        </span>
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: '0.625rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: isLight ? 'rgba(255, 255, 255, 0.75)' : 'var(--color-slate-grey)',
            marginTop: '2px',
          }}
        >
          Centro Médico Integral
        </span>
      </div>
    </Link>
  );
};
