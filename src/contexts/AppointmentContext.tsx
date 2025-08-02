import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Appointment, Doctor } from '../types';
import { doctorsData } from '../data/doctors';

interface AppointmentState {
  appointments: Appointment[];
  doctors: Doctor[];
  searchQuery: string;
  selectedSpecialization: string;
}

type AppointmentAction =
  | { type: 'ADD_APPOINTMENT'; payload: Appointment }
  | { type: 'SET_SEARCH_QUERY'; payload: string }
  | { type: 'SET_SPECIALIZATION'; payload: string }
  | { type: 'CANCEL_APPOINTMENT'; payload: string };

const initialState: AppointmentState = {
  appointments: [],
  doctors: doctorsData,
  searchQuery: '',
  selectedSpecialization: 'All'
};

function appointmentReducer(state: AppointmentState, action: AppointmentAction): AppointmentState {
  switch (action.type) {
    case 'ADD_APPOINTMENT':
      return {
        ...state,
        appointments: [...state.appointments, action.payload]
      };
    case 'SET_SEARCH_QUERY':
      return {
        ...state,
        searchQuery: action.payload
      };
    case 'SET_SPECIALIZATION':
      return {
        ...state,
        selectedSpecialization: action.payload
      };
    case 'CANCEL_APPOINTMENT':
      return {
        ...state,
        appointments: state.appointments.map(apt =>
          apt.id === action.payload ? { ...apt, status: 'cancelled' as const } : apt
        )
      };
    default:
      return state;
  }
}

interface AppointmentContextType {
  state: AppointmentState;
  addAppointment: (appointment: Omit<Appointment, 'id' | 'createdAt'>) => void;
  setSearchQuery: (query: string) => void;
  setSpecialization: (specialization: string) => void;
  cancelAppointment: (id: string) => void;
  getDoctorById: (id: string) => Doctor | undefined;
  getFilteredDoctors: () => Doctor[];
}

const AppointmentContext = createContext<AppointmentContextType | undefined>(undefined);

export function AppointmentProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appointmentReducer, initialState);

  const addAppointment = (appointmentData: Omit<Appointment, 'id' | 'createdAt'>) => {
    const newAppointment: Appointment = {
      ...appointmentData,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString(),
      status: 'confirmed'
    };
    dispatch({ type: 'ADD_APPOINTMENT', payload: newAppointment });
  };

  const setSearchQuery = (query: string) => {
    dispatch({ type: 'SET_SEARCH_QUERY', payload: query });
  };

  const setSpecialization = (specialization: string) => {
    dispatch({ type: 'SET_SPECIALIZATION', payload: specialization });
  };

  const cancelAppointment = (id: string) => {
    dispatch({ type: 'CANCEL_APPOINTMENT', payload: id });
  };

  const getDoctorById = (id: string) => {
    return state.doctors.find(doctor => doctor.id === id);
  };

  const getFilteredDoctors = () => {
    return state.doctors.filter(doctor => {
      const matchesSearch = doctor.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                           doctor.specialization.toLowerCase().includes(state.searchQuery.toLowerCase());
      const matchesSpecialization = state.selectedSpecialization === 'All' ||
                                   doctor.specialization === state.selectedSpecialization;
      return matchesSearch && matchesSpecialization;
    });
  };

  const value: AppointmentContextType = {
    state,
    addAppointment,
    setSearchQuery,
    setSpecialization,
    cancelAppointment,
    getDoctorById,
    getFilteredDoctors
  };

  return (
    <AppointmentContext.Provider value={value}>
      {children}
    </AppointmentContext.Provider>
  );
}

export function useAppointment() {
  const context = useContext(AppointmentContext);
  if (context === undefined) {
    throw new Error('useAppointment must be used within an AppointmentProvider');
  }
  return context;
}