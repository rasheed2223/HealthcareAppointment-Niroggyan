import React from 'react';
import { Heart, Shield, Clock } from 'lucide-react';
import { SearchBar } from '../components/SearchBar';
import { DoctorGrid } from '../components/DoctorGrid';
import { Doctor } from '../types';

interface LandingPageProps {
  onSelectDoctor: (doctor: Doctor) => void;
}

export function LandingPage({ onSelectDoctor }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Book Your Healthcare Appointment
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Connect with qualified doctors, check their availability, and book appointments seamlessly
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Expert Care</h3>
                <p className="text-blue-100">Board-certified doctors with years of experience</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Easy Scheduling</h3>
                <p className="text-blue-100">Book appointments at your convenience</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Secure Platform</h3>
                <p className="text-blue-100">Your health information is protected</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SearchBar />
        <DoctorGrid onSelectDoctor={onSelectDoctor} />
      </div>
    </div>
  );
}