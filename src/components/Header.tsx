import React from 'react';
import { Calendar, Stethoscope } from 'lucide-react';

interface HeaderProps {
  currentPage: 'home' | 'doctor' | 'booking' | 'confirmation';
  onNavigateHome: () => void;
}

export function Header({ currentPage, onNavigateHome }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex items-center space-x-3 cursor-pointer transition-colors hover:text-blue-600"
            onClick={onNavigateHome}
          >
            <div className="bg-blue-600 p-2 rounded-lg">
              <Stethoscope className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">HealthCare</h1>
              <p className="text-xs text-gray-500">Book your appointment</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={onNavigateHome}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'home' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Find Doctors
            </button>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Calendar className="w-4 h-4" />
              <span>24/7 Available</span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}