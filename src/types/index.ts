export interface AppointmentType {
  id: number;
  student: string;
  teacher: string;
  course: string;
  branch: string;
  slot: string;
  status: 'Scheduled' | 'Completed' | 'Cancelled' | 'In Progress';
  date: string;
  duration: number;
  notes?: string;
}

export interface StudentType {
  id: number;
  name: string;
  email: string;
  phone: string;
  history: number[];
  notes: string;
  enrollmentDate: string;
  completedCourses: string[];
  currentCourse?: string;
  progress: number;
  avatar?: string;
}

export interface DocumentType {
  id: number;
  name: string;
  type: string;
  size: string;
  uploadDate: string;
  category: 'aftercare' | 'certificate' | 'manual' | 'other';
  url?: string;
}

export interface KPIData {
  attendanceRate: number;
  totalAppointments: number;
  totalStudents: number;
  completionRate: number;
  revenue: number;
  popularCourse: string;
}