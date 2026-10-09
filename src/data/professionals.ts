export interface Professional {
  id: string;
  name: string;
  role: string;
  specialtyId: string;
  specialtyName: string;
  avatarUrl: string;
  shortBio: string;
  fullBio: string;
  areasOfInterest: string[];
  scheduleSummary: string;
  availableDays: number[]; // 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat
  sampleSlots: string[];
  featured: boolean;
}

export const PROFESSIONALS_DATA: Professional[] = [
  {
    id: 'dra-elena-vargas',
    name: 'Dra. Elena Vargas',
    role: 'Medicina Familiar & General (Perfil Demostrativo)',
    specialtyId: 'medicina-general',
    specialtyName: 'Medicina General',
    avatarUrl: './images/professionals/elena-vargas.jpg',
    shortBio: 'Enfoque preventivo y escucha activa orientado a la salud integral de adultos.',
    fullBio: 'Dra. Elena Vargas orienta su práctica hacia una relación médico-paciente horizontal, donde el tiempo de consulta permite comprender el contexto de vida, hábitos y bienestar general de cada persona.',
    areasOfInterest: [
      'Medicina preventiva del adulto',
      'Control de condiciones crónicas frecuentes',
      'Promoción de estilo de vida saludable',
      'Salud integral en etapas de adultez'
    ],
    scheduleSummary: 'Lunes a Jueves: 09:00 a 14:00 hrs',
    availableDays: [1, 2, 3, 4],
    sampleSlots: ['09:00', '09:30', '10:30', '11:30', '13:00'],
    featured: true
  },
  {
    id: 'dr-matias-herrera',
    name: 'Dr. Matías Herrera',
    role: 'Cardiología Clínica (Perfil Demostrativo)',
    specialtyId: 'cardiologia',
    specialtyName: 'Cardiología Preventiva',
    avatarUrl: './images/professionals/matias-herrera.jpg',
    shortBio: 'Especialista en prevención cardiovascular y chequeo de salud del corazón.',
    fullBio: 'Dr. Matías Herrera destaca por su método de explicación claro y didáctico sobre la salud cardiovascular, facilitando que el paciente comprenda con tranquilidad sus indicadores y metas de cuidado.',
    areasOfInterest: [
      'Prevención cardiovascular primaria y secundaria',
      'Manejo de hipertensión y dislipidemias',
      'Evaluación cardiológica pre-participativa deportiva',
      'Ecocardiografía y estudios funcionales'
    ],
    scheduleSummary: 'Lunes, Miércoles y Viernes: 10:00 a 17:00 hrs',
    availableDays: [1, 3, 5],
    sampleSlots: ['10:00', '10:45', '11:30', '14:30', '15:15', '16:00'],
    featured: true
  },
  {
    id: 'dra-camila-soto',
    name: 'Dra. Camila Soto',
    role: 'Pediatría & Desarrollo Infantil (Perfil Demostrativo)',
    specialtyId: 'pediatria',
    specialtyName: 'Pediatría Integral',
    avatarUrl: './images/professionals/camila-soto.jpg',
    shortBio: 'Atención cercana y lúdica para acompañar el sano crecimiento de niños y familias.',
    fullBio: 'Dra. Camila Soto crea un ambiente acogedor para que los controles pediátricos sean una experiencia tranquila y positiva tanto para los pequeños como para sus madres y padres.',
    areasOfInterest: [
      'Desarrollo psicomotor y crecimiento infantil',
      'Acompañamiento en pautas de crianza respetuosa',
      'Prevención e inmunizaciones en la infancia',
      'Nutrición y alimentación complementaria'
    ],
    scheduleSummary: 'Martes, Jueves y Sábados: 09:00 a 13:30 hrs',
    availableDays: [2, 4, 6],
    sampleSlots: ['09:00', '09:40', '10:20', '11:00', '12:00'],
    featured: true
  },
  {
    id: 'dr-nicolas-fuentes',
    name: 'Dr. Nicolás Fuentes',
    role: 'Dermatología Clínica (Perfil Demostrativo)',
    specialtyId: 'dermatologia',
    specialtyName: 'Dermatología Clínica',
    avatarUrl: './images/professionals/nicolas-fuentes.jpg',
    shortBio: 'Cuidado integral de la piel, control preventivo de lunares y fotoprotección.',
    fullBio: 'Dr. Nicolás Fuentes combina una mirada rigurosa con pautas dermatológicas simplificadas y sostenibles, promoviendo la salud cutánea a largo plazo.',
    areasOfInterest: [
      'Dermatoscopía y vigilancia de nevos (lunares)',
      'Acné, rosácea y barrera cutánea',
      'Educación en fotoprotección solar',
      'Afecciones inflamatorias de la piel'
    ],
    scheduleSummary: 'Lunes, Martes y Jueves: 14:00 a 19:00 hrs',
    availableDays: [1, 2, 4],
    sampleSlots: ['14:00', '14:40', '15:30', '16:20', '17:30', '18:15'],
    featured: true
  },
  {
    id: 'lic-daniela-rios',
    name: 'Lic. Daniela Ríos',
    role: 'Nutricionista Clínica (Perfil Demostrativo)',
    specialtyId: 'nutricion',
    specialtyName: 'Nutrición Clínica & Hábitos',
    avatarUrl: './images/professionals/daniela-rios.jpg',
    shortBio: 'Educación nutricional basada en hábitos realistas, empatía y evidencia.',
    fullBio: 'Lic. Daniela Ríos guía a sus pacientes hacia una relación positiva con la comida, construyendo planes individualizados sin culpas y adaptados a la realidad cotidiana.',
    areasOfInterest: [
      'Educación alimentaria para la vida diaria',
      'Manejo de resistencia a la insulina',
      'Planes nutricionales en patología gastrointestinal',
      'Alimentación basada en plantas y vegetarianismo'
    ],
    scheduleSummary: 'Miércoles a Viernes: 09:00 a 16:00 hrs',
    availableDays: [3, 4, 5],
    sampleSlots: ['09:30', '10:30', '11:30', '14:00', '15:00'],
    featured: false
  },
  {
    id: 'lic-valentina-morales',
    name: 'Lic. Valentina Morales',
    role: 'Kinesióloga & Fisioterapia (Perfil Demostrativo)',
    specialtyId: 'kinesiologia',
    specialtyName: 'Kinesiología & Rehabilitación',
    avatarUrl: './images/professionals/valentina-morales.jpg',
    shortBio: 'Rehabilitación física activa y fortalecimiento neuromuscular guiado.',
    fullBio: 'Lic. Valentina Morales enfoca la kinesiología en el movimiento activo del paciente, empoderándolo en su proceso de rehabilitación y prevención de recaídas articulares.',
    areasOfInterest: [
      'Rehabilitación funcional de extremidades',
      'Reeducación postural y ergonomía laboral',
      'Fortalecimiento para reintegro a la actividad física',
      'Manejo de dolor musculoesquelético crónico'
    ],
    scheduleSummary: 'Lunes a Viernes: 08:30 a 15:30 hrs',
    availableDays: [1, 2, 3, 4, 5],
    sampleSlots: ['08:30', '09:30', '10:30', '11:30', '13:30', '14:30'],
    featured: false
  }
];
