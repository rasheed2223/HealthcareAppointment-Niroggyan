import React, { useState } from 'react';
import { AppointmentProvider } from './contexts/AppointmentContext';
import { Header } from './components/Header';
import { LandingPage } from './pages/LandingPage';
import { DoctorProfile } from './components/DoctorProfile';
import { BookingForm } from './components/BookingForm';
import { BookingConfirmation } from './components/BookingConfirmation';
import { Doctor } from './types';

type AppPage = 'home' | 'doctor' | 'booking' | 'confirmation';

function App() {
  const [currentPage, setCurrentPage] = useState<AppPage>('home');
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [bookingDetails, setBookingDetails] = useState<{
    date: string;
    time: string;
  } | null>(null);

  const handleSelectDoctor = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setCurrentPage('doctor');
  };

  const handleBookAppointment = (doctor: Doctor, date: string, time: string) => {
    setSelectedDoctor(doctor);
    setBookingDetails({ date, time });
    setCurrentPage('booking');
  };

  const handleConfirmBooking = () => {
    setCurrentPage('confirmation');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setSelectedDoctor(null);
    setBookingDetails(null);
  };

  const handleBackToDoctor = () => {
    setCurrentPage('doctor');
    setBookingDetails(null);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <LandingPage onSelectDoctor={handleSelectDoctor} />;
      
      case 'doctor':
        return selectedDoctor ? (
          <DoctorProfile
            doctor={selectedDoctor}
            onBack={handleBackToHome}
            onBookAppointment={handleBookAppointment}
          />
        ) : null;
      
      case 'booking':
        return selectedDoctor && bookingDetails ? (
          <BookingForm
            doctor={selectedDoctor}
            selectedDate={bookingDetails.date}
            selectedTime={bookingDetails.time}
            onBack={handleBackToDoctor}
            onConfirm={handleConfirmBooking}
          />
        ) : null;
      
      case 'confirmation':
        return <BookingConfirmation onBackToHome={handleBackToHome} />;
      
      default:
        return <LandingPage onSelectDoctor={handleSelectDoctor} />;
    }
  };

  return (
    <AppointmentProvider>
      <div className="min-h-screen bg-gray-50">
        <Header currentPage={currentPage} onNavigateHome={handleBackToHome} />
        {renderCurrentPage()}
      </div>
    </AppointmentProvider>
  );
}

export default App;