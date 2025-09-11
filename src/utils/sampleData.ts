import { AppointmentType, StudentType, DocumentType } from '../types';

export const generateSampleData = () => {
  const appointments: AppointmentType[] = [
    {
      id: 1,
      student: 'Sofia Martinez',
      teacher: 'Fernando Antonio Ruiz Acosta',
      course: 'Microblading',
      branch: 'Polanco',
      slot: '10:00–13:00',
      status: 'Scheduled',
      date: new Date().toISOString(),
      duration: 180,
      notes: 'First session - basic introduction'
    },
    {
      id: 2,
      student: 'Isabella Rodriguez',
      teacher: 'Maggie Acosta-Venegas',
      course: 'Eyelash Extensions',
      branch: 'Ciudad Brisas',
      slot: '13:00–16:00',
      status: 'In Progress',
      date: new Date().toISOString(),
      duration: 180,
      notes: 'Advanced techniques session'
    },
    {
      id: 3,
      student: 'Camila Torres',
      teacher: 'Fernando Antonio Ruiz Acosta',
      course: 'Henna Brows',
      branch: 'Perisur',
      slot: '17:00–20:00',
      status: 'Completed',
      date: new Date().toISOString(),
      duration: 180,
      notes: 'Excellent progress'
    },
    {
      id: 4,
      student: 'Valentina Lopez',
      teacher: 'External Instructor',
      course: 'Lash Lifting',
      branch: 'Polanco',
      slot: '10:00–13:00',
      status: 'Scheduled',
      date: new Date().toISOString(),
      duration: 180
    },
    {
      id: 5,
      student: 'Lucia Hernandez',
      teacher: 'Maggie Acosta-Venegas',
      course: 'Microblading',
      branch: 'Ciudad Brisas',
      slot: '13:00–16:00',
      status: 'Scheduled',
      date: new Date().toISOString(),
      duration: 180,
      notes: 'Second session - shading techniques'
    },
    {
      id: 6,
      student: 'Emma Garcia',
      teacher: 'Fernando Antonio Ruiz Acosta',
      course: 'Eyelash Extensions',
      branch: 'Perisur',
      slot: '17:00–20:00',
      status: 'Completed',
      date: new Date().toISOString(),
      duration: 180
    }
  ];

  const students: StudentType[] = [
    {
      id: 1,
      name: 'Sofia Martinez',
      email: 'sofia.martinez@email.com',
      phone: '+52 55 1234 5678',
      history: [1],
      notes: 'Very dedicated student with excellent attention to detail',
      enrollmentDate: '2024-01-15',
      completedCourses: [],
      currentCourse: 'Microblading',
      progress: 25
    },
    {
      id: 2,
      name: 'Isabella Rodriguez',
      email: 'isabella.rodriguez@email.com',
      phone: '+52 55 2345 6789',
      history: [2],
      notes: 'Fast learner, great with advanced techniques',
      enrollmentDate: '2024-02-01',
      completedCourses: ['Basic Beauty Therapy'],
      currentCourse: 'Eyelash Extensions',
      progress: 65
    },
    {
      id: 3,
      name: 'Camila Torres',
      email: 'camila.torres@email.com',
      phone: '+52 55 3456 7890',
      history: [3],
      notes: 'Completed Henna Brows with outstanding results',
      enrollmentDate: '2024-01-20',
      completedCourses: ['Henna Brows', 'Basic Color Theory'],
      progress: 100
    },
    {
      id: 4,
      name: 'Valentina Lopez',
      email: 'valentina.lopez@email.com',
      phone: '+52 55 4567 8901',
      history: [4],
      notes: 'New student, very enthusiastic about lash lifting',
      enrollmentDate: '2024-03-01',
      completedCourses: [],
      currentCourse: 'Lash Lifting',
      progress: 15
    },
    {
      id: 5,
      name: 'Lucia Hernandez',
      email: 'lucia.hernandez@email.com',
      phone: '+52 55 5678 9012',
      history: [5],
      notes: 'Intermediate level, working on advanced microblading',
      enrollmentDate: '2024-02-15',
      completedCourses: ['Basic Microblading'],
      currentCourse: 'Advanced Microblading',
      progress: 45
    },
    {
      id: 6,
      name: 'Emma Garcia',
      email: 'emma.garcia@email.com',
      phone: '+52 55 6789 0123',
      history: [6],
      notes: 'Graduate student, perfect technique execution',
      enrollmentDate: '2023-11-10',
      completedCourses: ['Eyelash Extensions', 'Lash Lifting', 'Beauty Consultation'],
      progress: 100
    }
  ];

  const documents: DocumentType[] = [
    {
      id: 1,
      name: 'Microblading Aftercare Guide.pdf',
      type: 'PDF',
      size: '1.2 MB',
      uploadDate: '2024-01-10',
      category: 'aftercare'
    },
    {
      id: 2,
      name: 'Eyelash Extensions Manual.pdf',
      type: 'PDF',
      size: '3.5 MB',
      uploadDate: '2024-01-15',
      category: 'manual'
    },
    {
      id: 3,
      name: 'Safety Protocols.pdf',
      type: 'PDF',
      size: '800 KB',
      uploadDate: '2024-02-01',
      category: 'other'
    },
    {
      id: 4,
      name: 'Certificate Template.pdf',
      type: 'PDF',
      size: '500 KB',
      uploadDate: '2024-02-10',
      category: 'certificate'
    },
    {
      id: 5,
      name: 'Henna Brows Aftercare.pdf',
      type: 'PDF',
      size: '950 KB',
      uploadDate: '2024-02-20',
      category: 'aftercare'
    }
  ];

  return {
    appointments,
    students,
    documents,
    checkins: 28
  };
};