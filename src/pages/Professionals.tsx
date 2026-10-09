import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  ShieldAlert,
  User,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { PROFESSIONALS_DATA, Professional } from '../data/professionals';
import { SPECIALTIES_DATA } from '../data/specialties';

export const Professionals: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('all');

  const filteredProfessionals = useMemo(() => {
    return PROFESSIONALS_DATA.filter((doc) => {
      const matchesSpec =
        selectedSpecialty === 'all' || doc.specialtyId === selectedSpecialty;
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        doc.name.toLowerCase().includes(q) ||
        doc.specialtyName.toLowerCase().includes(q) ||
        doc.areasOfInterest.some((a) => a.toLowerCase().includes(q));

      return matchesSpec && matchesQuery;
    });
  }, [searchQuery, selectedSpecialty]);

  return (
    <div id="main-content" className="section-padding">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-eyebrow">Equipo Médico</span>
          <h1 className="section-title">Directorio de Profesionales</h1>
          <p className="section-description">
            Conoce a nuestro equipo multidisciplinario ficticio, enfocado en una atención cálida, empática y basada en la evidencia.
          </p>
        </div>

        {/* Fictional disclaimer notice */}
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
            <strong>Aviso de Demostración:</strong> Todos los nombres, semblanzas, horarios y fotografías de esta sección
            son ficticios e ilustrativos para el portafolio de KuyénDev. No representan médicos en ejercicio real ni registros sanitarios verificables.
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            marginBottom: '2.5rem',
            backgroundColor: 'var(--color-white)',
            padding: '1.25rem',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-subtle)',
          }}
        >
          {/* Search bar */}
          <div style={{ position: 'relative', flex: 1, minWidth: '260px' }}>
            <Search
              size={18}
              style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50)',
                color: 'var(--color-slate-grey)',
              }}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por nombre o especialidad..."
              aria-label="Buscar profesional"
              className="form-input"
              style={{ paddingLeft: '2.75rem' }}
            />
          </div>

          {/* Specialty Select Filter */}
          <div style={{ minWidth: '220px' }}>
            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              aria-label="Filtrar por especialidad"
              className="form-select"
            >
              <option value="all">Todas las especialidades</option>
              {SPECIALTIES_DATA.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          {/* Reset button if active */}
          {(searchQuery || selectedSpecialty !== 'all') && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedSpecialty('all');
              }}
              className="btn btn-outline btn-sm"
            >
              Limpiar filtros
            </button>
          )}
        </div>

        {/* Results Counter */}
        <div style={{ marginBottom: '1.5rem', fontSize: 'var(--text-sm)', color: 'var(--color-slate-grey)' }}>
          Mostrando <strong>{filteredProfessionals.length}</strong> de {PROFESSIONALS_DATA.length} profesionales
        </div>

        {/* Grid of Professionals */}
        {filteredProfessionals.length > 0 ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '2rem',
            }}
          >
            {filteredProfessionals.map((doc) => (
              <article
                key={doc.id}
                className="card card-interactive"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  {/* Photo & Badge */}
                  <div style={{ position: 'relative', marginBottom: '1.25rem', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
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
                        left: '0.75rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.94)',
                        backdropFilter: 'blur(4px)',
                        fontSize: '0.6875rem',
                        fontWeight: 700,
                        color: 'var(--color-petrol)',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '9999px',
                      }}
                    >
                      {doc.specialtyName}
                    </span>
                  </div>

                  <h2 style={{ fontSize: 'var(--text-xl)', marginBottom: '0.25rem', color: 'var(--color-petrol-deep)' }}>
                    {doc.name}
                  </h2>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-slate-grey)', marginBottom: '0.75rem', fontWeight: 500 }}>
                    {doc.role}
                  </div>
                  <p style={{ fontSize: 'var(--text-sm)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {doc.shortBio}
                  </p>

                  {/* Schedule */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: 'var(--text-xs)', color: 'var(--color-petrol)', backgroundColor: 'var(--color-sage-soft)', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.25rem' }}>
                    <Clock size={14} style={{ flexShrink: 0 }} />
                    <span>{doc.scheduleSummary}</span>
                  </div>
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', gap: '0.75rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border-subtle)' }}>
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
              No se encontraron profesionales con los criterios seleccionados.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedSpecialty('all');
              }}
              className="btn btn-primary"
            >
              Restablecer búsqueda
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
