export interface FacilityItem {
  id: string;
  title: string;
  category: 'recepcion' | 'consultorios' | 'espera' | 'diagnostico';
  categoryLabel: string;
  imageUrl: string;
  description: string;
  highlight: string;
}

export const FACILITIES_DATA: FacilityItem[] = [
  {
    id: 'fac-reception',
    title: 'Recepción Principal & Módulo de Admisión',
    category: 'recepcion',
    categoryLabel: 'Recepción',
    imageUrl: './images/facilities/reception.jpg',
    description: 'Espacio de bienvenida diseñado con madera natural de roble, ventanales con luz natural y panel vegetal que disminuye el estrés visual desde el ingreso.',
    highlight: 'Luz natural continua y orientación intuitiva sin barreras visuales'
  },
  {
    id: 'fac-waiting',
    title: 'Sala de Espera Serena con Vista al Jardín',
    category: 'espera',
    categoryLabel: 'Salas de Espera',
    imageUrl: './images/facilities/waiting-lounge.jpg',
    description: 'Área de descanso con butacas ergonómicas distribuidas en grupos pequeños, iluminación indirecta cálida y conexión directa visual a un patio botánico.',
    highlight: 'Configuración acústica amortiguada para máxima tranquilidad'
  },
  {
    id: 'fac-consultation',
    title: 'Consultorio Médico de Atención Integrada',
    category: 'consultorios',
    categoryLabel: 'Consultorios',
    imageUrl: './images/facilities/consultation-room.jpg',
    description: 'Box clínico con escritorio amplio sin barreras jerárquicas, camilla de examen con privacidad lumínica y tecnología de visualización didáctica para el paciente.',
    highlight: 'Mobiliario orientado a la conversación cómoda y respetuosa'
  },
  {
    id: 'fac-rehab',
    title: 'Gimnasio de Rehabilitación & Kinesiología',
    category: 'diagnostico',
    categoryLabel: 'Procedimientos & Terapias',
    imageUrl: './images/facilities/rehab-gym.jpg',
    description: 'Área abierta de terapia y reeducación funcional equipada con barras paralelas, camillas terapéuticas y ventanales panorámicos hacia áreas verdes.',
    highlight: 'Entorno luminoso y ventilado para rehabilitación física activa'
  },
  {
    id: 'fac-pediatric',
    title: 'Consultorio Pediátrico Adaptado a la Infancia',
    category: 'consultorios',
    categoryLabel: 'Consultorios',
    imageUrl: './images/facilities/pediatric-room.jpg',
    description: 'Box pediátrico con decoración escandinava en madera, mesa de juego para que los niños exploren con calma y camilla no intimidante con motivos amables.',
    highlight: 'Diseño libre de estímulos agresivos para una visita sin lágrimas'
  },
  {
    id: 'fac-diagnostic',
    title: 'Suite de Diagnóstico No Invasivo & Cardiología',
    category: 'diagnostico',
    categoryLabel: 'Procedimientos & Terapias',
    imageUrl: './images/facilities/diagnostic-suite.jpg',
    description: 'Espacio de ultrasonido y electrocardiografía con atenuación de luz regulable, pantalla duplicada para explicación al paciente y camilla acolchada ergonómica.',
    highlight: 'Ambiente controlado con temperatura y acústica de precisión'
  }
];
