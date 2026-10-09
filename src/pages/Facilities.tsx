import React, { useState, useMemo } from 'react';
import { Eye, ShieldAlert, Sparkles, Building2 } from 'lucide-react';
import { FACILITIES_DATA, FacilityItem } from '../data/facilities';
import { Lightbox } from '../components/ui/Lightbox';

export const Facilities: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'Todos los espacios' },
    { id: 'recepcion', label: 'Recepción & Admisión' },
    { id: 'consultorios', label: 'Consultorios Médicos' },
    { id: 'espera', label: 'Salas de Espera' },
    { id: 'diagnostico', label: 'Procedimientos & Terapias' },
  ];

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') return FACILITIES_DATA;
    return FACILITIES_DATA.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const handleOpenLightbox = (item: FacilityItem) => {
    const idx = filteredItems.findIndex((f) => f.id === item.id);
    if (idx !== -1) setActiveLightboxIndex(idx);
  };

  const handleNextLightbox = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrevLightbox = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        (activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  return (
    <div id="main-content" className="section-padding">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-eyebrow">Arquitectura & Espacios</span>
          <h1 className="section-title">Instalaciones Diseñadas para tu Calma</h1>
          <p className="section-description">
            Recorre visualmente nuestros espacios concebidos bajo principios de diseño escandinavo, luz natural y acústica serena.
          </p>
        </div>

        {/* Fictional disclaimer */}
        <div
          style={{
            backgroundColor: 'var(--color-surface-subtle)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
            padding: '1rem 1.25rem',
            marginBottom: '2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            fontSize: 'var(--text-xs)',
            color: 'var(--color-slate-grey)',
          }}
        >
          <ShieldAlert size={18} style={{ color: 'var(--color-petrol)', flexShrink: 0 }} />
          <div>
            <strong>Aviso de Demostración:</strong> Las fotografías exhibidas corresponden a representaciones
            conceptuales seleccionadas para reflejar los lineamientos de diseño de NOVA SALUD por KuyénDev. No representan una clínica física existente.
          </div>
        </div>

        {/* Category Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            flexWrap: 'wrap',
            marginBottom: '2.5rem',
          }}
        >
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                aria-pressed={isSelected}
                className={`btn btn-sm ${isSelected ? 'btn-primary' : 'btn-outline'}`}
                style={{ borderRadius: 'var(--radius-full)' }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '2rem',
          }}
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="card card-interactive"
              style={{
                cursor: 'pointer',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
              onClick={() => handleOpenLightbox(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleOpenLightbox(item);
                }
              }}
              aria-label={`Ver en detalle: ${item.title}`}
            >
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '240px',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
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
                    padding: '0.2rem 0.6rem',
                    borderRadius: '9999px',
                  }}
                >
                  {item.categoryLabel}
                </span>

                <div
                  style={{
                    position: 'absolute',
                    bottom: '0.75rem',
                    right: '0.75rem',
                    backgroundColor: 'rgba(16, 56, 70, 0.85)',
                    color: '#FFFFFF',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Eye size={16} />
                </div>
              </div>

              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: 'var(--text-base)', color: 'var(--color-petrol-deep)', marginBottom: '0.5rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: 'var(--text-xs)', lineHeight: 1.6, color: 'var(--color-text-muted)', margin: 0 }}>
                    {item.description}
                  </p>
                </div>

                <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid var(--color-border-subtle)', fontSize: '0.6875rem', color: 'var(--color-slate-grey)' }}>
                  <strong>Detalle:</strong> {item.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal Component */}
        {activeLightboxIndex !== null && (
          <Lightbox
            items={filteredItems}
            currentIndex={activeLightboxIndex}
            onClose={() => setActiveLightboxIndex(null)}
            onNext={handleNextLightbox}
            onPrev={handlePrevLightbox}
          />
        )}
      </div>
    </div>
  );
};
