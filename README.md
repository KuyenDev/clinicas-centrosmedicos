# NOVA SALUD — Centro Médico Integral
### Demostración Web Premium, Ficticia, Accesible y Reutilizable
**Proyecto 04 del Catálogo de Demostraciones de Diseño Web de KuyénDev**

---

> [!IMPORTANT]
> **AVISO FUNDAMENTAL DE DEMOSTRACIÓN:**
> Este sitio web ha sido creado por **KuyénDev** exclusivamente con propósitos demostrativos de diseño de experiencia de usuario (UX/UI) y arquitectura de software. **NOVA SALUD es una marca ficticia. No es un establecimiento sanitario real, no ofrece atención médica auténtica ni permite reservar citas clínicas reales. No recopila datos médicos, no solicita RUT, ni procesa pagos.**

---

## 1. Misión y Concepto del Proyecto

NOVA SALUD propone un estándar superior en plataformas digitales para instituciones sanitarias:
- **Estética:** *Modern Healthcare / Soft Minimalism / Human-Centered Design*, combinando luz natural, tonos petróleo y verde salvia con la serenidad de la arquitectura escandinava contemporánea.
- **Humanidad:** Prioriza la escucha activa y la reducción de la ansiedad que habitualmente genera una visita médica.
- **Accesibilidad:** Diseñado bajo los estándares internacionales **WCAG 2.2 nivel AA**, con navegación completa por teclado, indicadores de foco visibles, soporte para `prefers-reduced-motion` y compatibilidad con lectores de pantalla.
- **Interoperabilidad:** Desarrollado como un sitio estático moderno listo para desplegarse sin servidores en **GitHub Pages** u hospedajes estáticos (Cloudflare Pages, Vercel, Netlify).

---

## 2. Tecnologías Utilizadas

- **Framework:** React 19 + TypeScript.
- **Empaquetador y Dev Server:** Vite 6.
- **Enrutamiento:** React Router 7 con `HashRouter` (garantiza funcionamiento sin errores 404 en cualquier subdirectorio de GitHub Pages).
- **Iconografía:** Lucide React (iconos vectoriales coherentes, ligeros y accesibles).
- **Efectos y Microinteracciones:** Vanilla CSS optimizado con variables y aceleración GPU (`transform`, `opacity`) + Canvas Confetti para el cierre del simulador.
- **Tipografías:** Plus Jakarta Sans & Outfit (Google Fonts).
- **Fotografía:** Dirección de arte fotográfica en alta resolución, representando interiores luminosos y consultas respetuosas.

---

## 3. Estructura del Proyecto

```text
clinicas-centrosmedicos/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Flujo automatizado de despliegue a GitHub Pages
├── public/
│   ├── 404.html                # Redirección SPA de respaldo para GitHub Pages
│   └── images/
│       ├── hero/               # Fotografías de portada
│       ├── facilities/         # Galería de arquitectura e interiores
│       └── professionals/      # Retratos profesionales de muestra
├── src/
│   ├── components/
│   │   ├── appointments/
│   │   │   └── AppointmentWizard.tsx  # Simulador de agendamiento en 5 pasos
│   │   ├── layout/
│   │   │   ├── Header.tsx      # Cabecera con menú responsive y drawer
│   │   │   ├── Footer.tsx      # Pie de página institucional y disclaimers
│   │   │   └── DemoBanner.tsx  # Banner informativo permanente
│   │   └── ui/
│   │       ├── Logo.tsx        # Logotipo vectorial SVG de NOVA SALUD
│   │       ├── Lightbox.tsx    # Visor accesible de galería con teclado
│   │       ├── Accordion.tsx   # Acordeón accesible de preguntas frecuentes
│   │       └── SkipToContent.tsx # Enlace de salto accesible
│   ├── config/
│   │   ├── site.ts             # Configuración centralizada de marca y navegación
│   │   └── demo.ts             # Directivas del modo demostración y avisos
│   ├── data/
│   │   ├── specialties.ts      # Catálogo de 8 especialidades médicas
│   │   ├── professionals.ts    # Directorio de 6 profesionales de muestra
│   │   ├── facilities.ts       # 6 espacios arquitectónicos y características
│   │   └── faq.ts              # Preguntas frecuentes con respuestas
│   ├── pages/
│   │   ├── Home.tsx            # Portada principal con secciones editoriales
│   │   ├── Specialties.tsx     # Catálogo con búsqueda y filtros
│   │   ├── SpecialtyDetail.tsx # Ficha individual por especialidad
│   │   ├── Professionals.tsx   # Directorio con filtros por especialidad
│   │   ├── ProfessionalDetail.tsx # Perfil individual con agendamiento
│   │   ├── Appointments.tsx    # Simulador de agendamiento interactivo
│   │   ├── About.tsx           # Filosofía, valores y neuroarquitectura
│   │   ├── Facilities.tsx      # Galería con Lightbox
│   │   ├── Information.tsx     # Guía para el paciente y acordeón FAQ
│   │   ├── Contact.tsx         # Formulario local y mapa conceptual
│   │   └── NotFound.tsx        # Página de error 404 accesible
│   ├── styles/
│   │   ├── tokens.css          # Paleta cromática, tipografías y espaciados
│   │   ├── animations.css      # Transiciones suaves y reduced motion
│   │   └── global.css          # Estilos globales y utilidades
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 4. Instalación y Ejecución Local

### Prerrequisitos
- Node.js versión 18 o superior.
- npm versión 9 o superior.

### 1. Clonar e instalar dependencias
```bash
npm install
```

### 2. Iniciar servidor de desarrollo
```bash
npm run dev
```
La aplicación estará disponible localmente en `http://localhost:5173/`.

### 3. Compilar para producción
```bash
npm run build
```
Genera la carpeta optimizada `dist/` con activos estáticos minificados.

### 4. Probar la compilación en local
```bash
npm run preview
```

---

## 5. Despliegue en GitHub Pages

Este proyecto viene configurado de forma nativa para GitHub Pages:
1. **Rutas Relativas:** En `vite.config.ts`, `base: './'` permite que los archivos JS, CSS e imágenes carguen adecuadamente en cualquier subcarpeta de repositorio (ej. `https://usuario.github.io/clinicas-centrosmedicos/`).
2. **HashRouter:** El enrutador (`/#/specialties`, `/#/appointments`) asegura que las rutas funcionen sin requerir redirecciones complejas en el servidor web de GitHub.
3. **Workflow Automatizado:** El archivo [`.github/workflows/deploy.yml`](file:///.github/workflows/deploy.yml) realiza la compilación y publicación automática en cada `push` a la rama `main`.

### Activación en el repositorio de GitHub:
1. Ve a **Settings** > **Pages** en tu repositorio de GitHub.
2. En **Build and deployment** > **Source**, selecciona **GitHub Actions**.
3. Al hacer push a la rama `main`, la acción compilará y desplegará el sitio en segundos.

---

## 6. Guía de Personalización y Adaptación de Marca

Toda la información del proyecto está **estrictamente centralizada** para facilitar su adaptación a cualquier clínica, consulta médica o centro de salud real:

### 6.1 Cambio de Marca y Datos Generales
Edita el archivo [`src/config/site.ts`](file:///src/config/site.ts):
```typescript
export const SITE_CONFIG = {
  name: 'TU CLÍNICA AQUÍ',
  descriptor: 'Centro de Especialidades Médicas',
  slogan: 'Tu bienestar en manos expertas.',
  contact: {
    email: 'contacto@tuclinica.cl',
    phone: '+56 2 2222 3333',
    address: 'Av. Principal 123, Tu Ciudad',
    hoursWeekdays: '08:00 a 20:00 hrs',
    hoursSaturday: '09:00 a 14:00 hrs',
  },
  // ...
};
```

### 6.2 Cambio de Paleta de Colores
Edita las variables CSS en [`src/styles/tokens.css`](file:///src/styles/tokens.css):
- `--color-petrol`: Color principal de confianza y botones primarios.
- `--color-sage`: Tono secundario de serenidad y etiquetas de salud.
- `--color-warm-white`: Color de fondo principal.
- `--color-text-main`: Color de lectura de textos.

### 6.3 Cambio de Logotipo
El componente [`src/components/ui/Logo.tsx`](file:///src/components/ui/Logo.tsx) contiene el símbolo vectorial SVG personalizable o puede reemplazarse por una etiqueta `<img src="/images/logo.svg" />`.

### 6.4 Edición de Especialidades
Edita [`src/data/specialties.ts`](file:///src/data/specialties.ts):
- Puedes agregar, quitar o editar nombres, aranceles referenciales, duraciones, áreas de atención y consejos de preparación.

### 6.5 Edición de Profesionales
Edita [`src/data/professionals.ts`](file:///src/data/professionals.ts):
- Permite configurar nombre, cargo, fotografía en `/public/images/professionals/`, biografía, días hábiles de atención (`availableDays: [1, 2, 3, 4, 5]`) y bloques horarios.

### 6.6 Edición de Fotografías
Reemplaza las imágenes en la carpeta [`public/images/`](file:///public/images/):
- `public/images/hero/hero-medical.jpg`: Portada principal.
- `public/images/facilities/`: Espacios arquitectónicos para la galería.
- `public/images/professionals/`: Fotografías del equipo.

---

## 7. Módulo de Agendamiento Simulado

El componente [`src/components/appointments/AppointmentWizard.tsx`](file:///src/components/appointments/AppointmentWizard.tsx) ofrece una experiencia interactiva en 5 etapas:
1. **Paso 1 (Especialidad):** Selección entre las especialidades configuradas.
2. **Paso 2 (Profesional):** Permite elegir a un profesional en particular o la opción «Cualquier profesional disponible».
3. **Paso 3 (Fecha):** Calendario interactivo accesible que bloquea fechas pasadas y domingos, calculando días activos deterministas.
4. **Paso 4 (Horario):** Grilla de bloques horarios por bloques diurnos y vespertinos.
5. **Paso 5 (Resumen & Confirmación):** Resumen detallado con generación de código aleatorio (`NOV-XXXX`), efecto de confeti, botón para imprimir comprobante y advertencia constante de su condición ficticia.

> **Preselección vía URL:**
> Puedes enlazar directamente al agendador con parámetros predeterminados:
> - `/#/appointments?specialty=cardiologia`
> - `/#/appointments?doctor=dr-matias-herrera`

---

## 8. Consideraciones para una Implementación Comercial Real

Para transformar esta demostración en una plataforma operativa para una institución médica auténtica, se deben implementar las siguientes capas que van más allá del frontend estático:

1. **Integración con HIS / EHR / I-Med:**
   - Conexión con sistemas de Registro Clínico Electrónico (Medisyn, Rayen, Medipass, Saludbox, etc.) para consultar disponibilidades reales en tiempo real y registrar citas.
2. **Autenticación y Cifrado de Datos de Pacientes:**
   - Validación segura de identidad (RUT / Cédula / ClaveÚnica o SMS OTP) y cifrado en tránsito (TLS 1.3) y en reposo (AES-256).
3. **Cumplimiento Legal y Sanitario:**
   - En Chile, cumplimiento estricto de la **Ley N° 20.584** (Derechos y Deberes del Paciente) y la **Ley N° 19.628** (Protección de la Vida Privada).
   - En otros países, cumplimiento con **HIPAA** (EE. UU.) o **GDPR** (Unión Europea).
4. **Pasarela de Pago o Copago Fonasa/Isapre:**
   - Integración con Webpay Plus o I-Med para compra de bonos electrónicos.
5. **Notificaciones Automatizadas:**
   - Webhooks hacia proveedores de WhatsApp Business API o SMS transaccionales para recordatorios 24h/48h antes de la cita.

---

## 9. Créditos y Licencia

- **Diseño y Desarrollo:** Equipo multidisciplinario de [KuyénDev](https://kuyendev.com).
- **Catálogo:** Portafolio de Demostraciones de Diseño Web — Proyecto 04: Clínicas y Centros Médicos.
- **Licencia:** Proyecto demostrativo reutilizable como base y plantilla de diseño para clientes de KuyénDev.
