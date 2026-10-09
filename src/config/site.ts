export interface NavItem {
  label: string;
  href: string;
  highlight?: boolean;
}

export const SITE_CONFIG = {
  name: 'NOVA SALUD',
  descriptor: 'Centro Médico Integral',
  slogan: 'Cuidar de ti comienza con escucharte.',
  creator: 'KuyénDev',
  creatorUrl: 'https://kuyendev.com',
  showcaseId: '04 — Clínicas y Centros Médicos',
  
  contact: {
    email: 'contacto@example.com',
    phone: '+56 2 2000 0000',
    whatsapp: '+56 9 0000 0000',
    address: 'Av. Las Araucarias 1420, Providencia, Santiago (Conceptual)',
    hoursWeekdays: '08:00 a 20:00 hrs',
    hoursSaturday: '08:30 a 14:00 hrs',
    hoursSunday: 'Cerrado (Atención demostrativa)',
  },

  navItems: [
    { label: 'Inicio', href: '/' },
    { label: 'Especialidades', href: '/specialties' },
    { label: 'Profesionales', href: '/professionals' },
    { label: 'Nosotros', href: '/about' },
    { label: 'Instalaciones', href: '/facilities' },
    { label: 'Información', href: '/information' },
    { label: 'Contacto', href: '/contact' },
  ] as NavItem[],

  ctaButton: {
    label: 'Simular hora médica',
    href: '/appointments'
  }
};
