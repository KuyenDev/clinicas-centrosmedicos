import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div
      id="main-content"
      className="section-padding container"
      style={{ textAlign: 'center', maxWidth: '600px', margin: 'auto' }}
    >
      <span className="section-eyebrow">Error 404</span>
      <h1 className="section-title" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
        Página no encontrada
      </h1>
      <p className="section-description" style={{ marginBottom: '2rem' }}>
        La ruta a la que intentas acceder no existe en la demostración digital de NOVA SALUD.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <Link to="/" className="btn btn-primary">
          <Home size={16} />
          <span>Volver al inicio</span>
        </Link>
        <Link to="/specialties" className="btn btn-outline">
          <span>Explorar especialidades</span>
        </Link>
      </div>
    </div>
  );
};
