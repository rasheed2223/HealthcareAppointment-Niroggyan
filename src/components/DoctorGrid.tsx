import React from 'react';
import { Users, Search } from 'lucide-react';
import { useAppointment } from '../contexts/AppointmentContext';
import { Doctor } from '../types';
import { DoctorCard } from './DoctorCard';

interface DoctorGridProps {
  onSelectDoctor: (doctor: Doctor) => void;
}

export function DoctorGrid({ onSelectDoctor }: DoctorGridProps) {
  const { getFilteredDoctors, state } = useAppointment();
  const filteredDoctors = getFilteredDoctors();

  if (filteredDoctors.length === 0) {
    return (
      <div className="text-center py-12">
        <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-gray-900 mb-2">No doctors found</h3>
        <p className="text-gray-600">
          {state.searchQuery || state.selectedSpecialization !== 'All'
            ? 'Try adjusting your search criteria'
            : 'No doctors available at the moment'
          }
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Users className="w-6 h-6 text-blue-600 mr-3" />
          <h2 className="text-2xl font-bold text-gray-900">
            Available Doctors
          </h2>
        </div>
        <div className="text-sm text-gray-600">
          {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? 's' : ''} found
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.map(doctor => (
          <DoctorCard
            key={doctor.id}
            doctor={doctor}
            onSelectDoctor={onSelectDoctor}
          />
        ))}
      </div>
    </div>
  );
}