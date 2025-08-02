import React, { useState } from 'react';
import { Star, MapPin, Clock, GraduationCap, ArrowLeft, Calendar } from 'lucide-react';
import { Doctor } from '../types';

interface DoctorProfileProps {
  doctor: Doctor;
  onBack: () => void;
  onBookAppointment: (doctor: Doctor, date: string, time: string) => void;
}

export function DoctorProfile({ doctor, onBack, onBookAppointment }: DoctorProfileProps) {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      onBookAppointment(doctor, selectedDate, selectedTime);
    }
  };

  const availableTimes = selectedDate 
    ? doctor.availability.find(slot => slot.date === selectedDate)?.times || []
    : [];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={onBack}
        className="flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-6"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to doctors
      </button>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-8">
          <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
            <div className="relative">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-gray-100"
              />
              <div className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full border-4 border-white ${
                doctor.isAvailable ? 'bg-green-500' : 'bg-gray-400'
              }`} />
            </div>
            
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{doctor.name}</h1>
              <p className="text-xl text-blue-600 font-semibold mb-4">{doctor.specialization}</p>
              
              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-2 text-lg font-medium text-gray-700">{doctor.rating}</span>
                  <span className="ml-1 text-gray-500">/5</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{doctor.experience} years experience</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{doctor.location}</span>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed">{doctor.bio}</p>
            </div>
          </div>
        </div>

        <div className="px-8 py-6 bg-gray-50 border-t border-gray-200">
          <div className="flex items-center mb-4">
            <GraduationCap className="w-5 h-5 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Education & Training</h3>
          </div>
          <ul className="space-y-2">
            {doctor.education.map((edu, index) => (
              <li key={index} className="text-gray-700 flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                {edu}
              </li>
            ))}
          </ul>
        </div>

        {doctor.isAvailable && (
          <div className="px-8 py-6 border-t border-gray-200">
            <div className="flex items-center mb-6">
              <Calendar className="w-5 h-5 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Available Appointments</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Date
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {doctor.availability.map(slot => (
                    <button
                      key={slot.date}
                      onClick={() => {
                        setSelectedDate(slot.date);
                        setSelectedTime('');
                      }}
                      className={`p-3 text-sm rounded-lg border transition-all ${
                        selectedDate === slot.date
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-300 hover:border-blue-300 hover:bg-blue-50'
                      }`}
                    >
                      {new Date(slot.date).toLocaleDateString('en-US', {
                        weekday: 'short',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </button>
                  ))}
                </div>
              </div>

              {selectedDate && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Time
                  </label>
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                    {availableTimes.map(time => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-3 text-sm rounded-lg border transition-all ${
                          selectedTime === time
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-300 hover:border-blue-300 hover:bg-blue-50'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {selectedDate && selectedTime && (
                <div className="pt-4">
                  <button
                    onClick={handleBooking}
                    className="w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Book Appointment
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {!doctor.isAvailable && (
          <div className="px-8 py-6 border-t border-gray-200">
            <div className="text-center py-8">
              <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Currently Unavailable</h3>
              <p className="text-gray-600">Dr. {doctor.name.split(' ')[1]} is not accepting new appointments at this time.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}