import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { FacilityItem } from '../../data/facilities';

interface LightboxProps {
  items: FacilityItem[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  const currentItem = items[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  if (!currentItem) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Visualizador: ${currentItem.title}`}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999,
        backgroundColor: 'rgba(10, 32, 40, 0.92)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
      }}
      onClick={onClose}
    >
      {/* Top bar controls */}
      <div
        style={{
          position: 'absolute',
          top: '1rem',
          left: '1.5rem',
          right: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: '#FFFFFF',
          zIndex: 10,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              padding: '0.25rem 0.65rem',
              borderRadius: '9999px',
              fontSize: 'var(--text-xs)',
              fontWeight: 600,
            }}
          >
            {currentIndex + 1} / {items.length}
          </span>
          <span style={{ fontSize: 'var(--text-sm)', color: '#D2E3DC' }}>
            {currentItem.categoryLabel}
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar visor"
          style={{
            background: 'rgba(255, 255, 255, 0.15)',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF',
            cursor: 'pointer',
            transition: 'background 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)')}
        >
          <X size={22} />
        </button>
      </div>

      {/* Main Image Container */}
      <div
        style={{
          maxWidth: '1000px',
          maxHeight: '75vh',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentItem.imageUrl}
          alt={currentItem.title}
          style={{
            maxWidth: '100%',
            maxHeight: '68vh',
            objectFit: 'contain',
            borderRadius: 'var(--radius-lg)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
          }}
        />

        {/* Prev / Next buttons */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Fotografía anterior"
          style={{
            position: 'absolute',
            left: '-1rem',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(4px)',
            border: 'none',
            borderRadius: '50%',
            width: '44px',
            height: '44px',
            color: '#FFFFFF',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ChevronLeft size={28} />
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Fotografía siguiente"
          style={{
            position: 'absolute',
            right: '-1rem',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(4px)',
            border: 'none',
            borderRadius: '50%',
            width: '44px',
            height: '44px',
            color: '#FFFFFF',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {/* Caption footer */}
      <div
        style={{
          marginTop: '1rem',
          maxWidth: '750px',
          textAlign: 'center',
          color: '#FFFFFF',
          padding: '0 1rem',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 style={{ fontSize: 'var(--text-lg)', color: '#FFFFFF', marginBottom: '0.25rem' }}>
          {currentItem.title}
        </h3>
        <p style={{ fontSize: 'var(--text-sm)', color: '#C0D5CE', margin: 0 }}>
          {currentItem.description}
        </p>
        <div
          style={{
            marginTop: '0.5rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontSize: 'var(--text-xs)',
            color: 'var(--color-sage)',
          }}
        >
          <Info size={14} />
          <span>{currentItem.highlight}</span>
        </div>
      </div>
    </div>
  );
};
