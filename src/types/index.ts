export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  image: string;
  rating: number;
  experience: number;
  location: string;
  bio: string;
  education: string[];
  availability: TimeSlot[];
  isAvailable: boolean;
}

export interface TimeSlot {
  date: string;
  times: string[];
}

export interface Appointment {
  id: string;
  doctorId: string;
  doctorName: string;
  patientName: string;
  email: string;
  date: string;
  time: string;
  specialization: string;
  status: 'confirmed' | 'pending' | 'cancelled';
  createdAt: string;
}

export interface AppointmentForm {
  patientName: string;
  email: string;
  date: string;
  time: string;
  reason: string;
}