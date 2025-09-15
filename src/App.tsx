import React, { useState, useEffect } from 'react';
import LoginScreen from './components/LoginScreen';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import KPISection from './components/KPISection';
import AppointmentsSection from './components/AppointmentsSection';
import CalendarSection from './components/CalendarSection';
import StudentsSection from './components/StudentsSection';
import CheckInSection from './components/CheckInSection';
import { AppointmentType, StudentType, DocumentType, KPIData } from './types';
import { generateSampleData } from './utils/sampleData';
import './styles/animations.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [appointments, setAppointments] = useState<AppointmentType[]>([]);
  const [students, setStudents] = useState<StudentType[]>([]);
  const [documents, setDocuments] = useState<DocumentType[]>([]);
  const [checkins, setCheckins] = useState(0);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    if (isAuthenticated) {
      const data = generateSampleData();
      setAppointments(data.appointments);
      setStudents(data.students);
      setDocuments(data.documents);
      setCheckins(data.checkins);
    }
  }, [isAuthenticated]);

  const kpiData: KPIData = {
    attendanceRate: appointments.length > 0 ? Math.round((checkins / appointments.length) * 100) : 0,
    totalAppointments: appointments.length,
    totalStudents: students.length,
    completionRate: 92,
    revenue: 15750,
    popularCourse: 'Microblading'
  };

  if (!isAuthenticated) {
    return <LoginScreen onLogin={setIsAuthenticated} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <div className="flex">
        <Sidebar 
          activeSection={activeSection} 
          onSectionChange={setActiveSection}
          documents={documents}
          onDocumentUpload={setDocuments}
        />
        
        <main className="flex-1 p-6 space-y-6 animate-fadeIn">
          <KPISection data={kpiData} />
          <AppointmentsSection 
            appointments={appointments}
            onAppointmentsUpdate={setAppointments}
          />
          <div className="grid lg:grid-cols-2 gap-6">
            <CalendarSection appointments={appointments} />
            <StudentsSection 
              students={students}
              onStudentsUpdate={setStudents}
            />
          </div>
          <CheckInSection 
            checkins={checkins}
            onCheckIn={(count) => setCheckins(count)}
          />
        </main>
      </div>
    </div>
  );
}

export default App;