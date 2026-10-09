import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { SkipToContent } from './components/ui/SkipToContent';
import { DemoBanner } from './components/layout/DemoBanner';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

// Pages
import { Home } from './pages/Home';
import { Specialties } from './pages/Specialties';
import { SpecialtyDetail } from './pages/SpecialtyDetail';
import { Professionals } from './pages/Professionals';
import { ProfessionalDetail } from './pages/ProfessionalDetail';
import { Appointments } from './pages/Appointments';
import { About } from './pages/About';
import { Facilities } from './pages/Facilities';
import { Information } from './pages/Information';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

// Scroll to top helper on hash route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <SkipToContent />
      <DemoBanner />
      <Header />

      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/specialties" element={<Specialties />} />
          <Route path="/specialties/:id" element={<SpecialtyDetail />} />
          <Route path="/professionals" element={<Professionals />} />
          <Route path="/professionals/:id" element={<ProfessionalDetail />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/about" element={<About />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/information" element={<Information />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </HashRouter>
  );
};

export default App;
