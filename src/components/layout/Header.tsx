import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, ArrowRight } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { SITE_CONFIG } from '../../config/site';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle scroll state for subtle elevation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 90,
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.94)' : 'rgba(255, 255, 255, 0.88)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: '1px solid var(--color-border)',
        boxShadow: scrolled ? 'var(--shadow-subtle)' : 'none',
        transition: 'all 0.25s ease',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '4.75rem',
        }}
      >
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav
          aria-label="Navegación principal"
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '1.75rem',
          }}
          className="desktop-nav"
        >
          {SITE_CONFIG.navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'nav-link-active' : ''}`
              }
              style={({ isActive }) => ({
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--text-sm)',
                fontWeight: isActive ? 600 : 500,
                color: isActive ? 'var(--color-petrol)' : 'var(--color-text-main)',
                padding: '0.4rem 0.2rem',
                position: 'relative',
                transition: 'color var(--transition-fast)',
              })}
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '-4px',
                        left: 0,
                        right: 0,
                        height: '2px',
                        backgroundColor: 'var(--color-petrol)',
                        borderRadius: '2px',
                      }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Action Button (Desktop) */}
        <div style={{ display: 'none', alignItems: 'center', gap: '0.75rem' }} className="desktop-nav">
          <NavLink
            to={SITE_CONFIG.ctaButton.href}
            className="btn btn-primary"
            style={{
              padding: '0.75rem 1.35rem',
              fontSize: 'var(--text-sm)',
              boxShadow: '0 4px 14px rgba(22, 74, 91, 0.16)',
            }}
          >
            <Calendar size={16} />
            <span>{SITE_CONFIG.ctaButton.label}</span>
          </NavLink>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          aria-controls="mobile-navigation-drawer"
          className="mobile-toggle"
          style={{
            background: 'none',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            padding: '0.55rem',
            color: 'var(--color-petrol)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          style={{
            position: 'fixed',
            top: '4.75rem',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(16, 56, 70, 0.4)',
            backdropFilter: 'blur(4px)',
            zIndex: 99,
            display: 'flex',
            flexDirection: 'column',
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            style={{
              backgroundColor: 'var(--color-white)',
              padding: '1.75rem var(--container-pad) 2rem',
              borderBottom: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-modal)',
              maxHeight: 'calc(100vh - 5rem)',
              overflowY: 'auto',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <nav
              aria-label="Navegación móvil"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                marginBottom: '1.5rem',
              }}
            >
              {SITE_CONFIG.navItems.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={({ isActive }) => ({
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'var(--text-base)',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? 'var(--color-petrol)' : 'var(--color-text-main)',
                    backgroundColor: isActive ? 'var(--color-sage-soft)' : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  })}
                >
                  {({ isActive }) => (
                    <>
                      <span>{item.label}</span>
                      {isActive && <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-petrol)' }} />}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            <NavLink
              to={SITE_CONFIG.ctaButton.href}
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-primary btn-lg"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Calendar size={18} />
              <span>{SITE_CONFIG.ctaButton.label}</span>
              <ArrowRight size={16} />
            </NavLink>
          </div>
        </div>
      )}

      {/* Embedded CSS for responsive navigation toggle */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
        @media (max-width: 899px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
};
