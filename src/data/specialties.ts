export interface Specialty {
  id: string;
  name: string;
  category: 'primaria' | 'medica' | 'bienestar';
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  sampleDuration: string;
  referenceFee: string;
  keyAreas: string[];
  preparationAdvice: string[];
  associatedDoctorIds: string[];
}

export const SPECIALTIES_DATA: Specialty[] = [
  {
    id: 'medicina-general',
    name: 'Medicina General',
    category: 'primaria',
    categoryLabel: 'Atención Primaria',
    shortDescription: 'Evaluación integral, medicina preventiva y derivación coordinada para adultos.',
    fullDescription: 'Abordaje clínico de primer contacto enfocado en la prevención, el diagnóstico oportuno y el acompañamiento continuo de tu salud global.',
    iconName: 'Stethoscope',
    sampleDuration: '30 min',
    referenceFee: '$32.000 CLP (Ficticio)',
    keyAreas: [
      'Controles periódicos de salud y medicina preventiva',
      'Evaluación y control de afecciones comunes',
      'Interpretación orientativa de exámenes de rutina',
      'Coordinación de interconsultas especializadas'
    ],
    preparationAdvice: [
      'Llevar anotadas tus dudas o consultas principales',
      'Tener a mano la lista de medicamentos de uso habitual',
      'Traer exámenes de laboratorio recientes si cuentas con ellos'
    ],
    associatedDoctorIds: ['dra-elena-vargas']
  },
  {
    id: 'pediatria',
    name: 'Pediatría Integral',
    category: 'primaria',
    categoryLabel: 'Atención Primaria',
    shortDescription: 'Cuidado cercano y respetuoso del crecimiento y bienestar de niños y adolescentes.',
    fullDescription: 'Atención médica cercana orientada al desarrollo físico y emocional de la infancia, en un entorno diseñado para reducir la ansiedad de los más pequeños.',
    iconName: 'Baby',
    sampleDuration: '30 min',
    referenceFee: '$36.000 CLP (Ficticio)',
    keyAreas: [
      'Supervisión del crecimiento y desarrollo psicomotor',
      'Acompañamiento a padres en lactancia y primeros pasos',
      'Orientación sobre calendario de vacunas',
      'Evaluación de cuadros agudos infantiles'
    ],
    preparationAdvice: [
      'Traer carné o cartilla de control infantil',
      'Llegar 10 minutos antes para que el niño reconozca el espacio',
      'Traer un juguete u objeto de apego favorito'
    ],
    associatedDoctorIds: ['dra-camila-soto']
  },
  {
    id: 'cardiologia',
    name: 'Cardiología Preventiva',
    category: 'medica',
    categoryLabel: 'Especialidades Médicas',
    shortDescription: 'Salud cardiovascular, chequeos preventivos y orientación especializada del corazón.',
    fullDescription: 'Valoración cardiológica integral con énfasis en factores de riesgo cardiovascular, estilo de vida y prevención primaria y secundaria.',
    iconName: 'HeartPulse',
    sampleDuration: '40 min',
    referenceFee: '$48.000 CLP (Ficticio)',
    keyAreas: [
      'Evaluación del riesgo cardiovascular global',
      'Control y seguimiento de hipertensión arterial',
      'Chequeo cardiológico para aptitud deportiva',
      'Orientación en estudios diagnósticos no invasivos'
    ],
    preparationAdvice: [
      'Vestir ropa cómoda de dos piezas si se sugiere electrocardiograma',
      'Evitar café o energizantes las 3 horas previas al control',
      'Aportar informes cardiológicos o ecocardiogramas previos'
    ],
    associatedDoctorIds: ['dr-matias-herrera']
  },
  {
    id: 'dermatologia',
    name: 'Dermatología Clínica',
    category: 'medica',
    categoryLabel: 'Especialidades Médicas',
    shortDescription: 'Cuidado dermatológico, revisión de lesiones cutáneas y salud integral de la piel.',
    fullDescription: 'Diagnóstico y tratamiento de afecciones de la piel, cabello y uñas, con énfasis en fotoprotección, cuidado cutáneo y prevención del fotoenvejecimiento.',
    iconName: 'Sparkles',
    sampleDuration: '30 min',
    referenceFee: '$42.000 CLP (Ficticio)',
    keyAreas: [
      'Revisión preventiva de lunares y fotodaño',
      'Manejo clínico del acné y rosácea',
      'Dermatitis y afecciones alérgicas de la piel',
      'Orientación en rutinas de cuidado dermatológico'
    ],
    preparationAdvice: [
      'Asistir a la consulta con la piel limpia y sin maquillaje',
      'Anotar los productos tópicos que estés utilizando habitualmente',
      'Identificar la ubicación de lesiones que desees consultar'
    ],
    associatedDoctorIds: ['dr-nicolas-fuentes']
  },
  {
    id: 'traumatologia',
    name: 'Traumatología & Ortopedia',
    category: 'medica',
    categoryLabel: 'Especialidades Médicas',
    shortDescription: 'Evaluación del aparato locomotor, lesiones osteoarticulares y dolor articular.',
    fullDescription: 'Abordaje integral de molestias articulares, musculares y óseas causadas por actividad física, postura o desgaste articular.',
    iconName: 'Activity',
    sampleDuration: '30 min',
    referenceFee: '$45.000 CLP (Ficticio)',
    keyAreas: [
      'Evaluación de rodilla, columna, hombro y tobillo',
      'Manejo de tendinopatías y lesiones deportivas',
      'Planificación de reintegro a actividades físicas',
      'Coordinación directa con el equipo de kinesiología'
    ],
    preparationAdvice: [
      'Acudir con ropa holgada o deportiva para facilitar la exploración física',
      'Aportar radiografías o resonancias magnéticas previas si existen'
    ],
    associatedDoctorIds: ['dr-matias-herrera']
  },
  {
    id: 'nutricion',
    name: 'Nutrición Clínica & Hábitos',
    category: 'bienestar',
    categoryLabel: 'Bienestar & Rehabilitación',
    shortDescription: 'Educación alimentaria personalizada, hábitos sostenibles y nutrición basada en evidencia.',
    fullDescription: 'Acompañamiento nutricional empático y sin restricciones extremas, adaptado a tu estilo de vida, horarios y objetivos de salud a largo plazo.',
    iconName: 'Apple',
    sampleDuration: '45 min',
    referenceFee: '$30.000 CLP (Ficticio)',
    keyAreas: [
      'Planes de alimentación personalizados y realistas',
      'Manejo nutricional de resistencia a la insulina y dislipidemias',
      'Nutrición deportiva y rendimiento saludable',
      'Educación alimentaria familiar y hábitos sostenibles'
    ],
    preparationAdvice: [
      'Llevar un registro mental o escrito de tus comidas de los últimos 3 días',
      'Traer exámenes de sangre recientes (perfil lipídico, glicemia) si los tienes'
    ],
    associatedDoctorIds: ['lic-daniela-rios']
  },
  {
    id: 'kinesiologia',
    name: 'Kinesiología & Rehabilitación',
    category: 'bienestar',
    categoryLabel: 'Bienestar & Rehabilitación',
    shortDescription: 'Recuperación del movimiento funcional, rehabilitación física y terapia neuromuscular.',
    fullDescription: 'Espacio de rehabilitación activa orientado a devolver la movilidad, disminuir el dolor y fortalecer las estructuras musculoesqueléticas.',
    iconName: 'Dumbbell',
    sampleDuration: '50 min',
    referenceFee: '$28.000 CLP (Ficticio)',
    keyAreas: [
      'Rehabilitación traumatológica y postquirúrgica',
      'Readaptación funcional deportiva',
      'Reeducación postural y fortalecimiento guiado',
      'Terapia manual ortopédica'
    ],
    preparationAdvice: [
      'Asistir con ropa deportiva cómoda y zapatillas',
      'Llevar orden médica de kinesiología si tu consulta corresponde a un tratamiento derivado'
    ],
    associatedDoctorIds: ['lic-valentina-morales']
  },
  {
    id: 'psicologia',
    name: 'Psicología & Salud Mental',
    category: 'bienestar',
    categoryLabel: 'Bienestar & Rehabilitación',
    shortDescription: 'Acompañamiento psicológico, gestión del estrés y bienestar emocional.',
    fullDescription: 'Espacio confidencial, seguro y cálido para abordar desafíos emocionales, transiciones vitales, manejo de ansiedad y crecimiento personal.',
    iconName: 'Brain',
    sampleDuration: '50 min',
    referenceFee: '$35.000 CLP (Ficticio)',
    keyAreas: [
      'Gestión de ansiedad y sobrecarga de estrés cotidiano',
      'Acompañamiento en procesos de duelo y cambio',
      'Desarrollo de habilidades de regulación emocional',
      'Orientación y terapia individual para adultos'
    ],
    preparationAdvice: [
      'Elegir un horario donde dispongas de tiempo libre posterior a la sesión',
      'Acudir con disposición a reflexionar con calma en un entorno seguro'
    ],
    associatedDoctorIds: ['dra-elena-vargas']
  }
];
