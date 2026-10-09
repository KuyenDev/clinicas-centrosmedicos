import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import {
  Calendar as CalendarIcon,
  Clock,
  User,
  Stethoscope,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  RotateCcw,
  Printer,
  ShieldAlert,
  Sparkles,
  Info
} from 'lucide-react';
import { SPECIALTIES_DATA, Specialty } from '../../data/specialties';
import { PROFESSIONALS_DATA, Professional } from '../../data/professionals';
import { DEMO_CONFIG } from '../../config/demo';
import { SITE_CONFIG } from '../../config/site';

interface AppointmentState {
  specialtyId: string;
  professionalId: string; // 'any' or specific ID
  date: string; // YYYY-MM-DD
  timeSlot: string;
  patientAlias: string;
}

export const AppointmentWizard: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Initial step: 1 to 5
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>('');

  const [bookingData, setBookingData] = useState<AppointmentState>({
    specialtyId: searchParams.get('specialty') || '',
    professionalId: searchParams.get('doctor') || '',
    date: '',
    timeSlot: '',
    patientAlias: 'Visitante Demostrativo',
  });

  // Calendar state
  const [currentMonthDate, setCurrentMonthDate] = useState<Date>(new Date());

  // Handle URL query pre-population
  useEffect(() => {
    const specParam = searchParams.get('specialty');
    const docParam = searchParams.get('doctor');

    if (docParam) {
      const doc = PROFESSIONALS_DATA.find((p) => p.id === docParam);
      if (doc) {
        setBookingData((prev) => ({
          ...prev,
          professionalId: doc.id,
          specialtyId: doc.specialtyId,
        }));
        setCurrentStep(3); // Jump directly to date selection
      }
    } else if (specParam) {
      setBookingData((prev) => ({ ...prev, specialtyId: specParam }));
      setCurrentStep(2); // Jump to professional selection
    }
  }, [searchParams]);

  // Selected entities
  const selectedSpecialty = SPECIALTIES_DATA.find((s) => s.id === bookingData.specialtyId);
  const selectedProfessional = PROFESSIONALS_DATA.find((p) => p.id === bookingData.professionalId);

  // Filter professionals for selected specialty
  const availableProfessionals = bookingData.specialtyId
    ? PROFESSIONALS_DATA.filter((p) => p.specialtyId === bookingData.specialtyId)
    : PROFESSIONALS_DATA;

  // Calendar calculation
  const year = currentMonthDate.getFullYear();
  const month = currentMonthDate.getMonth();
  const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];
  const daysOfWeek = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá', 'Do'];

  const firstDayIndex = (new Date(year, month, 1).getDay() + 6) % 7; // Monday = 0
  const totalDaysInMonth = new Date(year, month + 1, 0).getDate();

  // Generate calendar days
  const calendarCells = [];
  for (let i = 0; i < firstDayIndex; i++) {
    calendarCells.push(null);
  }
  for (let d = 1; d <= totalDaysInMonth; d++) {
    calendarCells.push(new Date(year, month, d));
  }

  // Today for disabling past days
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const isDaySelectable = (date: Date) => {
    if (date < today) return false;
    const dayOfWeek = date.getDay(); // 0 is Sunday
    if (dayOfWeek === 0) return false; // Clinic closed on Sundays

    // If specific professional selected, check their available days (1=Mon ... 6=Sat)
    if (selectedProfessional && selectedProfessional.availableDays.length > 0) {
      const mappedDay = dayOfWeek === 0 ? 7 : dayOfWeek;
      return selectedProfessional.availableDays.includes(mappedDay);
    }
    return true; // Monday through Saturday
  };

  const handleDateSelect = (date: Date) => {
    const formatted = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(
      date.getDate()
    ).padStart(2, '0')}`;
    setBookingData((prev) => ({ ...prev, date: formatted, timeSlot: '' }));
  };

  // Determine available time slots
  const getAvailableSlots = () => {
    if (selectedProfessional && selectedProfessional.sampleSlots.length > 0) {
      return selectedProfessional.sampleSlots;
    }
    return ['09:00', '09:30', '10:30', '11:00', '14:00', '15:00', '16:30'];
  };

  // Complete simulation
  const handleFinishSimulation = () => {
    const randomCode = 'NOV-' + Math.floor(1000 + Math.random() * 9000);
    setBookingRef(randomCode);
    setIsCompleted(true);

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#164A5B', '#91ADA0', '#20343D', '#E8F1EC'],
      });
    } catch (e) {
      // Ignored if confetti fails
    }
  };

  const handleResetSimulation = () => {
    setBookingData({
      specialtyId: '',
      professionalId: '',
      date: '',
      timeSlot: '',
      patientAlias: 'Visitante Demostrativo',
    });
    setCurrentStep(1);
    setIsCompleted(false);
    setBookingRef('');
  };

  return (
    <div
      style={{
        backgroundColor: 'var(--color-white)',
        borderRadius: 'var(--radius-xl)',
        border: '1px solid var(--color-border)',
        boxShadow: 'var(--shadow-card)',
        overflow: 'hidden',
      }}
    >
      {/* Top Wizard Header & Progress */}
      <div
        style={{
          padding: '1.75rem 2rem 1.25rem',
          borderBottom: '1px solid var(--color-border)',
          backgroundColor: 'var(--color-surface-subtle)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--text-xs)',
                fontWeight: 700,
                color: 'var(--color-petrol)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              Simulador de Agendamiento Web
            </span>
            <h2 style={{ fontSize: 'var(--text-xl)', marginTop: '2px', color: 'var(--color-petrol-deep)' }}>
              {isCompleted ? 'Confirmación Demostrativa' : `Paso ${currentStep} de 5`}
            </h2>
          </div>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              backgroundColor: 'var(--color-accent-soft)',
              padding: '0.3rem 0.75rem',
              borderRadius: '9999px',
              fontSize: 'var(--text-xs)',
              fontWeight: 600,
              color: 'var(--color-accent-warm)',
              border: '1px solid rgba(200, 141, 68, 0.25)',
            }}
          >
            <Sparkles size={14} />
            <span>Simulación Local sin Datos Reales</span>
          </div>
        </div>

        {/* Progress Step Bar */}
        {!isCompleted && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: '0.5rem',
              marginTop: '0.5rem',
            }}
          >
            {[
              { num: 1, label: 'Especialidad' },
              { num: 2, label: 'Profesional' },
              { num: 3, label: 'Fecha' },
              { num: 4, label: 'Horario' },
              { num: 5, label: 'Confirmación' },
            ].map((step) => {
              const isActive = step.num === currentStep;
              const isPast = step.num < currentStep;

              return (
                <div key={step.num} style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <div
                    style={{
                      height: '5px',
                      borderRadius: '9999px',
                      backgroundColor: isActive
                        ? 'var(--color-petrol)'
                        : isPast
                        ? 'var(--color-sage)'
                        : 'var(--color-border)',
                      transition: 'background-color 0.3s ease',
                    }}
                  />
                  <span
                    style={{
                      fontSize: '0.6875rem',
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? 'var(--color-petrol)' : isPast ? 'var(--color-sage-dark)' : 'var(--color-slate-grey)',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {step.num}. {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Main Content Area */}
      <div style={{ padding: '2rem' }}>
        {/* COMPLETED SUCCESS STATE */}
        {isCompleted ? (
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-sage-soft)',
                color: 'var(--color-petrol)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem',
              }}
            >
              <CheckCircle2 size={36} />
            </div>

            <h3 style={{ fontSize: 'var(--text-2xl)', color: 'var(--color-petrol-deep)', marginBottom: '0.5rem' }}>
              {DEMO_CONFIG.bookingCompletedTitle}
            </h3>
            <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              {DEMO_CONFIG.bookingCompletedMessage}
            </p>

            {/* Permanent Warning Badge */}
            <div
              style={{
                backgroundColor: '#FFF8F0',
                border: '1px solid #F5D3A8',
                borderRadius: 'var(--radius-md)',
                padding: '0.85rem 1rem',
                marginBottom: '1.75rem',
                fontSize: 'var(--text-sm)',
                color: '#8A5818',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}
            >
              <ShieldAlert size={22} style={{ flexShrink: 0 }} />
              <div>
                <strong>Aviso de Simulación:</strong> Ningún profesional ficticio ni centro médico real ha recibido una solicitud. No se han almacenado ni transmitido datos.
              </div>
            </div>

            {/* Simulated Booking Voucher Card */}
            <div
              style={{
                backgroundColor: 'var(--color-surface-subtle)',
                borderRadius: 'var(--radius-lg)',
                border: '1px dashed var(--color-petrol)',
                padding: '1.5rem',
                textAlign: 'left',
                marginBottom: '2rem',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.75rem', marginBottom: '1rem' }}>
                <div>
                  <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-slate-grey)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Comprobante de Muestra</span>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-lg)', color: 'var(--color-petrol)' }}>
                    Código: {bookingRef}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-slate-grey)' }}>Modalidad</span>
                  <div style={{ fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--color-petrol-deep)' }}>Presencial (Simulada)</div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', fontSize: 'var(--text-sm)' }}>
                <div>
                  <span style={{ color: 'var(--color-slate-grey)', fontSize: 'var(--text-xs)' }}>Especialidad</span>
                  <div style={{ fontWeight: 600, color: 'var(--color-petrol-deep)' }}>{selectedSpecialty?.name}</div>
                </div>
                <div>
                  <span style={{ color: 'var(--color-slate-grey)', fontSize: 'var(--text-xs)' }}>Profesional</span>
                  <div style={{ fontWeight: 600, color: 'var(--color-petrol-deep)' }}>
                    {selectedProfessional ? selectedProfessional.name : 'Cualquier profesional disponible'}
                  </div>
                </div>
                <div>
                  <span style={{ color: 'var(--color-slate-grey)', fontSize: 'var(--text-xs)' }}>Fecha Simulada</span>
                  <div style={{ fontWeight: 600, color: 'var(--color-petrol-deep)' }}>{bookingData.date}</div>
                </div>
                <div>
                  <span style={{ color: 'var(--color-slate-grey)', fontSize: 'var(--text-xs)' }}>Hora Estimada</span>
                  <div style={{ fontWeight: 600, color: 'var(--color-petrol-deep)' }}>{bookingData.timeSlot} hrs</div>
                </div>
              </div>
            </div>

            {/* Bottom action buttons */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={handleResetSimulation}
                className="btn btn-primary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <RotateCcw size={16} />
                <span>Iniciar otra simulación</span>
              </button>
              <button
                type="button"
                onClick={() => window.print()}
                className="btn btn-outline"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <Printer size={16} />
                <span>Imprimir ficha ficticia</span>
              </button>
              <button
                type="button"
                onClick={() => navigate('/')}
                className="btn btn-secondary"
              >
                <span>Volver al inicio</span>
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* STEP 1: ESPECIALIDAD */}
            {currentStep === 1 && (
              <div>
                <h3 style={{ fontSize: 'var(--text-xl)', marginBottom: '0.35rem' }}>
                  Selecciona la especialidad de consulta
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', marginBottom: '1.5rem' }}>
                  Elige entre nuestras 8 áreas clínicas ficticias preparadas para esta demostración.
                </p>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                    gap: '1rem',
                  }}
                >
                  {SPECIALTIES_DATA.map((specialty) => {
                    const isSelected = bookingData.specialtyId === specialty.id;

                    return (
                      <div
                        key={specialty.id}
                        onClick={() => setBookingData((prev) => ({ ...prev, specialtyId: specialty.id }))}
                        style={{
                          padding: '1.25rem',
                          borderRadius: 'var(--radius-lg)',
                          border: `2px solid ${isSelected ? 'var(--color-petrol)' : 'var(--color-border)'}`,
                          backgroundColor: isSelected ? 'var(--color-sage-soft)' : 'var(--color-white)',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          gap: '0.75rem',
                        }}
                      >
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                            <span
                              style={{
                                fontSize: '0.6875rem',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                color: 'var(--color-petrol)',
                                backgroundColor: isSelected ? 'rgba(255,255,255,0.7)' : 'var(--color-surface-subtle)',
                                padding: '0.2rem 0.5rem',
                                borderRadius: '9999px',
                              }}
                            >
                              {specialty.categoryLabel}
                            </span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--color-slate-grey)' }}>
                              {specialty.sampleDuration}
                            </span>
                          </div>

                          <h4 style={{ fontSize: 'var(--text-base)', marginBottom: '0.35rem', color: 'var(--color-petrol-deep)' }}>
                            {specialty.name}
                          </h4>
                          <p style={{ fontSize: 'var(--text-xs)', margin: 0, lineHeight: 1.5 }}>
                            {specialty.shortDescription}
                          </p>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.5rem', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                          <span style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--color-slate-grey)' }}>
                            Arancel ref: {specialty.referenceFee}
                          </span>
                          <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: isSelected ? 'var(--color-petrol)' : 'var(--color-text-light)' }}>
                            {isSelected ? '✓ Seleccionada' : 'Elegir'}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 2: PROFESIONAL */}
            {currentStep === 2 && (
              <div>
                <h3 style={{ fontSize: 'var(--text-xl)', marginBottom: '0.35rem' }}>
                  Elige un profesional o primera disponibilidad
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', marginBottom: '1.5rem' }}>
                  Especialidad actual:{' '}
                  <strong style={{ color: 'var(--color-petrol)' }}>{selectedSpecialty?.name}</strong>.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {/* Option: Any Available Doctor */}
                  <div
                    onClick={() => setBookingData((prev) => ({ ...prev, professionalId: 'any' }))}
                    style={{
                      padding: '1.25rem',
                      borderRadius: 'var(--radius-lg)',
                      border: `2px solid ${bookingData.professionalId === 'any' ? 'var(--color-petrol)' : 'var(--color-border)'}`,
                      backgroundColor: bookingData.professionalId === 'any' ? 'var(--color-sage-soft)' : 'var(--color-white)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1rem',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--color-petrol-alpha10)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--color-petrol)',
                        }}
                      >
                        <User size={24} />
                      </div>
                      <div>
                        <h4 style={{ fontSize: 'var(--text-base)', color: 'var(--color-petrol-deep)', margin: 0 }}>
                          Cualquier profesional disponible
                        </h4>
                        <p style={{ fontSize: 'var(--text-xs)', margin: 0, color: 'var(--color-text-muted)' }}>
                          Te ofrecerá el mayor abanico de fechas y horarios inmediatos.
                        </p>
                      </div>
                    </div>
                    <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--color-petrol)' }}>
                      {bookingData.professionalId === 'any' ? '✓ Seleccionado' : 'Elegir'}
                    </span>
                  </div>

                  {/* Specific doctors */}
                  {availableProfessionals.map((doctor) => {
                    const isSelected = bookingData.professionalId === doctor.id;

                    return (
                      <div
                        key={doctor.id}
                        onClick={() => setBookingData((prev) => ({ ...prev, professionalId: doctor.id }))}
                        style={{
                          padding: '1.25rem',
                          borderRadius: 'var(--radius-lg)',
                          border: `2px solid ${isSelected ? 'var(--color-petrol)' : 'var(--color-border)'}`,
                          backgroundColor: isSelected ? 'var(--color-sage-soft)' : 'var(--color-white)',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '1rem',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                          <img
                            src={doctor.avatarUrl}
                            alt={doctor.name}
                            style={{
                              width: '56px',
                              height: '56px',
                              borderRadius: '50%',
                              objectFit: 'cover',
                              border: '2px solid var(--color-white)',
                              boxShadow: 'var(--shadow-subtle)',
                            }}
                          />
                          <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                              <h4 style={{ fontSize: 'var(--text-base)', color: 'var(--color-petrol-deep)', margin: 0 }}>
                                {doctor.name}
                              </h4>
                              <span style={{ fontSize: '0.6875rem', backgroundColor: 'var(--color-surface-subtle)', padding: '0.15rem 0.45rem', borderRadius: '4px', color: 'var(--color-slate-grey)' }}>
                                Ficticio
                              </span>
                            </div>
                            <p style={{ fontSize: 'var(--text-xs)', margin: '2px 0 0', color: 'var(--color-text-muted)' }}>
                              {doctor.role} • {doctor.scheduleSummary}
                            </p>
                          </div>
                        </div>

                        <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--color-petrol)' }}>
                          {isSelected ? '✓ Seleccionado' : 'Elegir'}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 3: FECHA */}
            {currentStep === 3 && (
              <div>
                <h3 style={{ fontSize: 'var(--text-xl)', marginBottom: '0.35rem' }}>
                  Selecciona la fecha para la consulta
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', marginBottom: '1.5rem' }}>
                  Los días habilitados se calculan según la disponibilidad demostrativa del especialista.
                </p>

                <div
                  style={{
                    maxWidth: '440px',
                    margin: '0 auto',
                    backgroundColor: 'var(--color-surface-subtle)',
                    padding: '1.5rem',
                    borderRadius: 'var(--radius-xl)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  {/* Month navigation */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <button
                      type="button"
                      onClick={() => setCurrentMonthDate(new Date(year, month - 1, 1))}
                      disabled={month === today.getMonth() && year === today.getFullYear()}
                      aria-label="Mes anterior"
                      style={{
                        background: 'var(--color-white)',
                        border: '1px solid var(--color-border)',
                        borderRadius: '50%',
                        width: '36px',
                        height: '36px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        color: 'var(--color-petrol)',
                      }}
                    >
                      <ChevronLeft size={20} />
                    </button>

                    <h4 style={{ fontSize: 'var(--text-base)', color: 'var(--color-petrol-deep)' }}>
                      {monthNames[month]} {year}
                    </h4>

                    <button
                      type="button"
                      onClick={() => setCurrentMonthDate(new Date(year, month + 1, 1))}
                      aria-label="Mes siguiente"
                      style={{
                        background: 'var(--color-white)',
                        border: '1px solid var(--color-border)',
                        borderRadius: '50%',
                        width: '36px',
                        height: '36px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        color: 'var(--color-petrol)',
                      }}
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>

                  {/* Days header */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center', marginBottom: '0.5rem', fontWeight: 600, fontSize: 'var(--text-xs)', color: 'var(--color-slate-grey)' }}>
                    {daysOfWeek.map((day) => (
                      <div key={day}>{day}</div>
                    ))}
                  </div>

                  {/* Calendar Grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.35rem' }}>
                    {calendarCells.map((date, idx) => {
                      if (!date) {
                        return <div key={`empty-${idx}`} />;
                      }

                      const formatted = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(
                        date.getDate()
                      ).padStart(2, '0')}`;
                      const selectable = isDaySelectable(date);
                      const isSelected = bookingData.date === formatted;

                      return (
                        <button
                          key={formatted}
                          type="button"
                          onClick={() => selectable && handleDateSelect(date)}
                          disabled={!selectable}
                          aria-label={`${date.getDate()} de ${monthNames[date.getMonth()]}`}
                          aria-pressed={isSelected}
                          style={{
                            aspectRatio: '1',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 'var(--radius-sm)',
                            border: isSelected ? '2px solid var(--color-petrol)' : '1px solid transparent',
                            backgroundColor: isSelected
                              ? 'var(--color-petrol)'
                              : selectable
                              ? 'var(--color-white)'
                              : 'transparent',
                            color: isSelected
                              ? '#FFFFFF'
                              : selectable
                              ? 'var(--color-petrol-deep)'
                              : '#BDC9C3',
                            fontWeight: isSelected ? 700 : selectable ? 600 : 400,
                            cursor: selectable ? 'pointer' : 'not-allowed',
                            fontSize: 'var(--text-sm)',
                            transition: 'all 0.15s ease',
                          }}
                        >
                          {date.getDate()}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {bookingData.date && (
                  <div style={{ textAlign: 'center', marginTop: '1.25rem', color: 'var(--color-petrol)', fontWeight: 600, fontSize: 'var(--text-sm)' }}>
                    ✓ Fecha elegida: {bookingData.date}
                  </div>
                )}
              </div>
            )}

            {/* STEP 4: HORARIO */}
            {currentStep === 4 && (
              <div>
                <h3 style={{ fontSize: 'var(--text-xl)', marginBottom: '0.35rem' }}>
                  Elige un bloque horario simulado
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', marginBottom: '1.5rem' }}>
                  Fecha seleccionada: <strong>{bookingData.date}</strong>.
                </p>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
                    gap: '0.85rem',
                    maxWidth: '560px',
                    margin: '0 auto',
                  }}
                >
                  {getAvailableSlots().map((slot) => {
                    const isSelected = bookingData.timeSlot === slot;

                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setBookingData((prev) => ({ ...prev, timeSlot: slot }))}
                        aria-pressed={isSelected}
                        style={{
                          padding: '1rem',
                          borderRadius: 'var(--radius-md)',
                          border: `2px solid ${isSelected ? 'var(--color-petrol)' : 'var(--color-border)'}`,
                          backgroundColor: isSelected ? 'var(--color-petrol)' : 'var(--color-white)',
                          color: isSelected ? '#FFFFFF' : 'var(--color-petrol-deep)',
                          fontWeight: 700,
                          fontSize: 'var(--text-base)',
                          cursor: 'pointer',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '0.25rem',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        <Clock size={16} style={{ color: isSelected ? '#FFFFFF' : 'var(--color-sage)' }} />
                        <span>{slot} hrs</span>
                        <span style={{ fontSize: '0.6875rem', fontWeight: 500, opacity: isSelected ? 0.9 : 0.6 }}>
                          Disponible
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 5: RESUMEN Y FINALIZACIÓN */}
            {currentStep === 5 && (
              <div>
                <h3 style={{ fontSize: 'var(--text-xl)', marginBottom: '0.35rem' }}>
                  Resumen de la simulación
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', marginBottom: '1.5rem' }}>
                  Verifica los detalles antes de completar esta demostración interactiva.
                </p>

                {/* Summary Table */}
                <div
                  style={{
                    backgroundColor: 'var(--color-surface-subtle)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '1.5rem',
                    marginBottom: '1.5rem',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                    <div>
                      <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-slate-grey)' }}>Especialidad</span>
                      <div style={{ fontSize: 'var(--text-base)', fontWeight: 600, color: 'var(--color-petrol-deep)' }}>
                        {selectedSpecialty?.name}
                      </div>
                    </div>

                    <div>
                      <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-slate-grey)' }}>Profesional</span>
                      <div style={{ fontSize: 'var(--text-base)', fontWeight: 600, color: 'var(--color-petrol-deep)' }}>
                        {selectedProfessional ? selectedProfessional.name : 'Cualquier profesional disponible'}
                      </div>
                    </div>

                    <div>
                      <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-slate-grey)' }}>Fecha y Horario</span>
                      <div style={{ fontSize: 'var(--text-base)', fontWeight: 600, color: 'var(--color-petrol-deep)' }}>
                        {bookingData.date} a las {bookingData.timeSlot} hrs
                      </div>
                    </div>

                    <div>
                      <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-slate-grey)' }}>Duración y Arancel</span>
                      <div style={{ fontSize: 'var(--text-base)', fontWeight: 600, color: 'var(--color-petrol-deep)' }}>
                        {selectedSpecialty?.sampleDuration} • {selectedSpecialty?.referenceFee}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Optional test alias input */}
                <div style={{ maxWidth: '480px', margin: '0 auto 1.5rem' }}>
                  <label htmlFor="test-alias" style={{ display: 'block', fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-petrol-deep)', marginBottom: '0.4rem' }}>
                    Nombre o alias ficticio para el comprobante (Opcional):
                  </label>
                  <input
                    id="test-alias"
                    type="text"
                    value={bookingData.patientAlias}
                    onChange={(e) => setBookingData((prev) => ({ ...prev, patientAlias: e.target.value }))}
                    placeholder="Ej. Paciente Demostrativo"
                    className="form-input"
                  />
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginTop: '0.35rem' }}>
                    No se requiere RUT ni correo real. No se almacenará en ninguna base de datos.
                  </div>
                </div>

                {/* Safety box */}
                <div
                  style={{
                    backgroundColor: 'var(--color-sage-soft)',
                    border: '1px solid rgba(145, 173, 160, 0.4)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.85rem 1rem',
                    fontSize: 'var(--text-xs)',
                    color: 'var(--color-petrol-deep)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    marginBottom: '1rem',
                  }}
                >
                  <Info size={18} style={{ color: 'var(--color-petrol)', flexShrink: 0 }} />
                  <div>
                    Al hacer clic en «Completar simulación», se generará un comprobante visual interactivo en pantalla sin realizar ninguna acción externa.
                  </div>
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--color-border)',
                marginTop: '1.5rem',
              }}
            >
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="btn btn-outline"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                >
                  <ChevronLeft size={16} />
                  <span>Paso anterior</span>
                </button>
              ) : (
                <div />
              )}

              {currentStep < 5 ? (
                <button
                  type="button"
                  onClick={() => setCurrentStep(currentStep + 1)}
                  disabled={
                    (currentStep === 1 && !bookingData.specialtyId) ||
                    (currentStep === 2 && !bookingData.professionalId) ||
                    (currentStep === 3 && !bookingData.date) ||
                    (currentStep === 4 && !bookingData.timeSlot)
                  }
                  className="btn btn-primary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                >
                  <span>Continuar</span>
                  <ArrowRight size={16} />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleFinishSimulation}
                  className="btn btn-primary btn-lg"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <CheckCircle2 size={18} />
                  <span>Completar simulación</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
