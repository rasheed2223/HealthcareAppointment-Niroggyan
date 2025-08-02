import { Doctor } from '../types';

export const doctorsData: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Chen',
    specialization: 'Cardiologist',
    image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.9,
    experience: 12,
    location: 'Downtown Medical Center',
    bio: 'Dr. Chen is a board-certified cardiologist with over 12 years of experience in treating heart conditions. She specializes in preventive cardiology and minimally invasive procedures.',
    education: ['MD - Harvard Medical School', 'Residency - Johns Hopkins Hospital', 'Fellowship - Mayo Clinic'],
    availability: [
      {
        date: '2024-01-15',
        times: ['09:00', '10:30', '14:00', '15:30']
      },
      {
        date: '2024-01-16',
        times: ['08:30', '11:00', '13:30', '16:00']
      },
      {
        date: '2024-01-17',
        times: ['09:30', '11:30', '14:30']
      }
    ],
    isAvailable: true
  },
  {
    id: '2',
    name: 'Dr. Michael Rodriguez',
    specialization: 'Orthopedic Surgeon',
    image: 'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    experience: 15,
    location: 'Sports Medicine Institute',
    bio: 'Dr. Rodriguez is a renowned orthopedic surgeon specializing in sports medicine and joint replacement. He has helped numerous athletes return to peak performance.',
    education: ['MD - Stanford University', 'Residency - UCLA Medical Center', 'Fellowship - Hospital for Special Surgery'],
    availability: [
      {
        date: '2024-01-15',
        times: ['08:00', '09:30', '13:00', '15:00']
      },
      {
        date: '2024-01-18',
        times: ['09:00', '10:30', '14:00', '16:30']
      }
    ],
    isAvailable: true
  },
  {
    id: '3',
    name: 'Dr. Emily Thompson',
    specialization: 'Dermatologist',
    image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.7,
    experience: 8,
    location: 'Skin Health Clinic',
    bio: 'Dr. Thompson is a skilled dermatologist focusing on both medical and cosmetic dermatology. She is known for her gentle approach and attention to detail.',
    education: ['MD - University of Pennsylvania', 'Residency - Mount Sinai Hospital', 'Fellowship - NYU Langone Health'],
    availability: [
      {
        date: '2024-01-16',
        times: ['09:00', '11:00', '14:30', '16:00']
      },
      {
        date: '2024-01-17',
        times: ['08:30', '10:00', '13:00', '15:30']
      }
    ],
    isAvailable: true
  },
  {
    id: '4',
    name: 'Dr. James Wilson',
    specialization: 'Neurologist',
    image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.9,
    experience: 20,
    location: 'Neurological Sciences Center',
    bio: 'Dr. Wilson is a leading neurologist with extensive experience in treating neurological disorders. He specializes in epilepsy and movement disorders.',
    education: ['MD - Yale School of Medicine', 'Residency - Massachusetts General Hospital', 'Fellowship - Cleveland Clinic'],
    availability: [
      {
        date: '2024-01-19',
        times: ['10:00', '11:30', '14:00']
      }
    ],
    isAvailable: false
  },
  {
    id: '5',
    name: 'Dr. Lisa Park',
    specialization: 'Pediatrician',
    image: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    experience: 10,
    location: 'Children\'s Health Center',
    bio: 'Dr. Park is a compassionate pediatrician dedicated to providing comprehensive care for children from infancy through adolescence.',
    education: ['MD - University of California San Francisco', 'Residency - Children\'s Hospital of Philadelphia'],
    availability: [
      {
        date: '2024-01-15',
        times: ['08:00', '09:30', '11:00', '14:00', '15:30']
      },
      {
        date: '2024-01-16',
        times: ['08:30', '10:00', '13:30', '15:00']
      }
    ],
    isAvailable: true
  },
  {
    id: '6',
    name: 'Dr. Robert Kim',
    specialization: 'Psychiatrist',
    image: 'https://images.pexels.com/photos/5452274/pexels-photo-5452274.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.6,
    experience: 14,
    location: 'Mental Health Associates',
    bio: 'Dr. Kim is a board-certified psychiatrist specializing in anxiety, depression, and cognitive behavioral therapy. He takes a holistic approach to mental health.',
    education: ['MD - Columbia University', 'Residency - New York Presbyterian Hospital'],
    availability: [
      {
        date: '2024-01-17',
        times: ['09:00', '10:30', '13:00', '14:30', '16:00']
      },
      {
        date: '2024-01-18',
        times: ['08:30', '11:00', '15:00']
      }
    ],
    isAvailable: true
  }
];