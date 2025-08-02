import React from 'react';
import { Star, MapPin, Clock, Calendar } from 'lucide-react';
import { Doctor } from '../types';

interface DoctorCardProps {
  doctor: Doctor;
  onSelectDoctor: (doctor: Doctor) => void;
}

export function DoctorCard({ doctor, onSelectDoctor }: DoctorCardProps) {
  const nextAvailableSlot = doctor.availability[0];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
      <div onClick={() => onSelectDoctor(doctor)} className="p-6">
        <div className="flex items-start space-x-4">
          <div className="relative">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-20 h-20 rounded-full object-cover border-4 border-gray-100"
            />
            <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-white ${
              doctor.isAvailable ? 'bg-green-500' : 'bg-gray-400'
            }`} />
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900 truncate">{doctor.name}</h3>
            <p className="text-blue-600 font-medium text-sm">{doctor.specialization}</p>
            
            <div className="flex items-center mt-2 space-x-4">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="ml-1 text-sm text-gray-600">{doctor.rating}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="w-4 h-4 mr-1" />
                <span>{doctor.experience} years</span>
              </div>
            </div>
            
            <div className="flex items-center mt-2 text-sm text-gray-600">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="truncate">{doctor.location}</span>
            </div>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="w-4 h-4 mr-1" />
              <span>
                {doctor.isAvailable && nextAvailableSlot
                  ? `Next: ${new Date(nextAvailableSlot.date).toLocaleDateString()}`
                  : 'Not available'
                }
              </span>
            </div>
            
            <div className={`px-3 py-1 rounded-full text-xs font-medium ${
              doctor.isAvailable 
                ? 'bg-green-100 text-green-800' 
                : 'bg-gray-100 text-gray-600'
            }`}>
              {doctor.isAvailable ? 'Available' : 'Busy'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}