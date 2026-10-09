import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Filter,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Stethoscope,
  Baby,
  HeartPulse,
  Activity,
  Apple,
  Dumbbell,
  Brain,
  CheckCircle2
} from 'lucide-react';
import { SPECIALTIES_DATA, Specialty } from '../data/specialties';

export const Specialties: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todas las áreas' },
    { id: 'primaria', label: 'Atención Primaria' },
    { id: 'medica', label: 'Especialidades Médicas' },
    { id: 'bienestar', label: 'Bienestar & Rehabilitación' },
  ];

  const filteredSpecialties = useMemo(() => {
    return SPECIALTIES_DATA.filter((spec) => {
      const matchesCategory =
        selectedCategory === 'all' || spec.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        spec.name.toLowerCase().includes(q) ||
        spec.shortDescription.toLowerCase().includes(q) ||
        spec.keyAreas.some((area) => area.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const renderIcon = (name: string) => {
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
      case 'Brain':
        return <Brain size={24} />;
      default:
        return <Stethoscope size={24} />;
    }
  };

  return (
    <div id="main-content" className="section-padding">
      <div className="container">
        {/* Page Header */}
        <div className="section-header">
          <span className="section-eyebrow">Catálogo Clínico</span>
          <h1 className="section-title">Especialidades Médicas</h1>
          <p className="section-description">
            Enfoque interdisciplinario con aranceles transparentes y atención guiada para el cuidado continuo de tu salud.
          </p>
        </div>

        {/* Safety Medical Notice */}
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
            <strong>Aviso de Demostración:</strong> El contenido de esta sección tiene carácter exclusivamente ilustrativo
            y descriptivo para la muestra digital de NOVA SALUD por KuyénDev. No proporciona consejos diagnósticos ni tratamientos médicos específicos.
          </div>
        </div>

        {/* Search & Category Filter Bar */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            marginBottom: '2.5rem',
            backgroundColor: 'var(--color-white)',
            padding: '1.25rem',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-subtle)',
          }}
        >
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {/* Search Input */}
            <div style={{ position: 'relative', flex: 1, minWidth: '260px' }}>
              <Search
                size={18}
                style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--color-slate-grey)',
                }}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por especialidad, síntoma habitual o palabra clave..."
                aria-label="Buscar especialidades"
                className="form-input"
                style={{ paddingLeft: '2.75rem' }}
              />
            </div>

            {/* Clear button if searching */}
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="btn btn-outline btn-sm"
              >
                Limpiar búsqueda
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div
            style={{
              display: 'flex',
              gap: '0.5rem',
              flexWrap: 'wrap',
              borderTop: '1px solid var(--color-border-subtle)',
              paddingTop: '1rem',
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
                  style={{
                    borderRadius: 'var(--radius-full)',
                    fontSize: 'var(--text-xs)',
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Count */}
        <div style={{ marginBottom: '1.5rem', fontSize: 'var(--text-sm)', color: 'var(--color-slate-grey)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>
            Mostrando <strong>{filteredSpecialties.length}</strong> de {SPECIALTIES_DATA.length} especialidades
          </span>
          {searchQuery && (
            <span>
              Filtrado por: «<strong>{searchQuery}</strong>»
            </span>
          )}
        </div>

        {/* Grid of Specialties */}
        {filteredSpecialties.length > 0 ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '1.75rem',
            }}
          >
            {filteredSpecialties.map((spec) => (
              <article
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
                        backgroundColor: 'var(--color-sage-soft)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-petrol)',
                      }}
                    >
                      {renderIcon(spec.iconName)}
                    </div>
                    <span className="badge badge-petrol">{spec.categoryLabel}</span>
                  </div>

                  <h2 style={{ fontSize: 'var(--text-xl)', marginBottom: '0.4rem', color: 'var(--color-petrol-deep)' }}>
                    {spec.name}
                  </h2>
                  <p style={{ fontSize: 'var(--text-sm)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {spec.shortDescription}
                  </p>

                  {/* Key Areas Preview */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--color-petrol)', display: 'block', marginBottom: '0.35rem' }}>
                      Áreas de Enfoque Habitual:
                    </span>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                      {spec.keyAreas.slice(0, 2).map((area, i) => (
                        <li key={i} style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'flex-start', gap: '0.35rem' }}>
                          <CheckCircle2 size={13} style={{ color: 'var(--color-sage-dark)', flexShrink: 0, marginTop: '2px' }} />
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Attributes */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--text-xs)', color: 'var(--color-slate-grey)', paddingTop: '0.75rem', borderTop: '1px solid var(--color-border-subtle)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Clock size={14} style={{ color: 'var(--color-sage-dark)' }} />
                      <span>{spec.sampleDuration}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Sparkles size={14} style={{ color: 'var(--color-sage-dark)' }} />
                      <span>{spec.referenceFee}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border-subtle)' }}>
                  <Link
                    to={`/specialties/${spec.id}`}
                    className="btn btn-outline btn-sm"
                    style={{ flex: 1 }}
                  >
                    Detalle
                  </Link>
                  <Link
                    to={`/appointments?specialty=${spec.id}`}
                    className="btn btn-primary btn-sm"
                    style={{ flex: 1 }}
                  >
                    Agendar
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div
            style={{
              textAlign: 'center',
              padding: '3rem 1.5rem',
              backgroundColor: 'var(--color-white)',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--color-border)',
            }}
          >
            <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-slate-grey)', marginBottom: '1rem' }}>
              No se encontraron especialidades que coincidan con los filtros aplicados.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="btn btn-primary"
            >
              Restablecer filtros
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
