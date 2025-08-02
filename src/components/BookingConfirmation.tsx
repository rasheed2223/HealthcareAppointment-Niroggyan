import React from 'react';
import { CheckCircle, Calendar, Clock, User, Mail, MapPin, ArrowLeft } from 'lucide-react';
import { useAppointment } from '../contexts/AppointmentContext';

interface BookingConfirmationProps {
  onBackToHome: () => void;
}

export function BookingConfirmation({ onBackToHome }: BookingConfirmationProps) {
  const { state } = useAppointment();
  const latestAppointment = state.appointments[state.appointments.length - 1];

  if (!latestAppointment) {
    return null;
  }

  const doctor = state.doctors.find(d => d.id === latestAppointment.doctorId);

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-8 py-6 bg-green-50 border-b border-green-200">
          <div className="flex items-center">
            <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Appointment Confirmed!</h2>
              <p className="text-green-700">Your appointment has been successfully booked</p>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-4">Appointment Details</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <User className="w-5 h-5 text-gray-400 mr-3" />
                  <div>
                    <span className="text-sm text-gray-600">Doctor:</span>
                    <p className="font-medium">{latestAppointment.doctorName}</p>
                    <p className="text-sm text-blue-600">{latestAppointment.specialization}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-gray-400 mr-3" />
                  <div>
                    <span className="text-sm text-gray-600">Date & Time:</span>
                    <p className="font-medium">
                      {new Date(latestAppointment.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })} at {latestAppointment.time}
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-gray-400 mr-3" />
                  <div>
                    <span className="text-sm text-gray-600">Patient:</span>
                    <p className="font-medium">{latestAppointment.patientName}</p>
                    <p className="text-sm text-gray-600">{latestAppointment.email}</p>
                  </div>
                </div>

                {doctor && (
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                    <div>
                      <span className="text-sm text-gray-600">Location:</span>
                      <p className="font-medium">{doctor.location}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">Important Information</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Please arrive 15 minutes before your appointment</li>
                <li>• Bring a valid ID and insurance card</li>
                <li>• A confirmation email has been sent to {latestAppointment.email}</li>
                <li>• If you need to reschedule, please call at least 24 hours in advance</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="text-sm text-yellow-800">
                <strong>Appointment ID:</strong> {latestAppointment.id.toUpperCase()}
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              onClick={onBackToHome}
              className="flex-1 flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Doctors
            </button>
            <button
              onClick={() => window.print()}
              className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Print Confirmation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}