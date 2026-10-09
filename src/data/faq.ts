export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Agendamiento',
    question: '¿Cómo funciona el proceso de agendamiento en esta demostración?',
    answer: 'En esta plataforma demostrativa puedes experimentar un flujo guiado en 5 pasos (Especialidad, Profesional, Fecha, Horario y Resumen). El sistema funciona de manera 100% interactiva en tu navegador sin requerir datos personales reales ni almacenar información. Al finalizar, obtendrás una ficha de confirmación simulada.'
  },
  {
    id: 'faq-2',
    category: 'Profesionales',
    question: '¿Puedo elegir un especialista específico o ver la primera hora disponible?',
    answer: 'Sí. El flujo de agendamiento permite dos modalidades: seleccionar a un profesional en particular según su perfil o elegir la opción "Cualquier profesional disponible" para visualizar un abanico más amplio de fechas y horarios.'
  },
  {
    id: 'faq-3',
    category: 'Privacidad y Seguridad',
    question: '¿Por qué no se solicita RUT, diagnósticos ni antecedentes médicos?',
    answer: 'Porque NOVA SALUD es una muestra de diseño web ficticia creada por KuyénDev. Siguiendo estándares éticos y de privacidad digital, ninguna demostración debe solicitar, recopilar ni almacenar datos sensibles de salud ni identificadores oficiales como RUT o cédula.'
  },
  {
    id: 'faq-4',
    category: 'Gestión de Citas',
    question: '¿Cómo se modificaría o cancelaría una hora médica en una versión productiva?',
    answer: 'En una implementación real adaptada para una clínica auténtica, el sistema se conectaría con un motor de backend (HIS/EHR) enviando un código seguro de gestión por SMS o correo electrónico, permitiendo reprogramar o anular con 24 horas de antelación sin fricción.'
  },
  {
    id: 'faq-5',
    category: 'Atención y Visita',
    question: '¿Qué recomendaciones administrativas se ofrecen antes de una visita médica?',
    answer: 'Sugerimos presentarse con 10 minutos de anticipación para el registro administrativo inicial, llevar un listado conciso de medicamentos en uso y traer exámenes complementarios previos relevantes para enriquecer la conversación con el profesional.'
  },
  {
    id: 'faq-6',
    category: 'Arquitectura & Inclusión',
    question: '¿Cómo está diseñado el centro médico en términos de accesibilidad física y digital?',
    answer: 'En lo físico, el diseño conceptual contempla accesos a nivel de calle, pasillos amplios y señalética de alto contraste. En lo digital, este sitio web implementa directrices WCAG 2.2 nivel AA con navegación completa por teclado, etiquetas descriptivas y soporte para movimiento reducido.'
  }
];
