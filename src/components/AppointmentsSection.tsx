import React, { useState } from 'react';
import { Calendar, MapPin, User, Clock, Plus, Filter, Search } from 'lucide-react';
import { AppointmentType } from '../types';

interface AppointmentsSectionProps {
  appointments: AppointmentType[];
  onAppointmentsUpdate: (appointments: AppointmentType[]) => void;
}

const AppointmentsSection: React.FC<AppointmentsSectionProps> = ({ appointments, onAppointmentsUpdate }) => {
  const [showNewForm, setShowNewForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCourse, setFilterCourse] = useState('');
  const [filterBranch, setFilterBranch] = useState('');

  const filteredAppointments = appointments.filter(appt => {
    return (
      appt.student.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterCourse === '' || appt.course === filterCourse) &&
      (filterBranch === '' || appt.branch === filterBranch)
    );
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Scheduled': return 'from-blue-400 to-blue-600';
      case 'In Progress': return 'from-yellow-400 to-orange-500';
      case 'Completed': return 'from-green-400 to-emerald-600';
      case 'Cancelled': return 'from-red-400 to-pink-600';
      default: return 'from-slate-400 to-slate-600';
    }
  };

  const handleReschedule = (id: number) => {
    const newSlot = prompt('Enter new time slot (e.g., 14:00–17:00):');
    if (newSlot) {
      const updatedAppointments = appointments.map(appt =>
        appt.id === id ? { ...appt, slot: newSlot } : appt
      );
      onAppointmentsUpdate(updatedAppointments);
    }
  };

  const handleCancel = (id: number) => {
    if (confirm('Are you sure you want to cancel this appointment?')) {
      const updatedAppointments = appointments.map(appt =>
        appt.id === id ? { ...appt, status: 'Cancelled' as const } : appt
      );
      onAppointmentsUpdate(updatedAppointments);
    }
  };

  return (
    <section className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 shadow-lg">
      <div id="appointments-section"></div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-800 flex items-center">
          <Calendar className="w-7 h-7 text-teal-600 mr-3" />
          Today's Appointments
        </h2>
        <button
          onClick={() => setShowNewForm(!showNewForm)}
          data-action="add-appointment"
          className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center space-x-2"
        >
          <Plus size={20} />
          <span className="font-medium">New Appointment</span>
        </button>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="relative">
          <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search students..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
          />
        </div>
        <select
          value={filterCourse}
          onChange={(e) => setFilterCourse(e.target.value)}
          className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
        >
          <option value="">All Courses</option>
          <option value="Microblading">Microblading</option>
          <option value="Eyelash Extensions">Eyelash Extensions</option>
          <option value="Henna Brows">Henna Brows</option>
          <option value="Lash Lifting">Lash Lifting</option>
        </select>
        <select
          value={filterBranch}
          onChange={(e) => setFilterBranch(e.target.value)}
          className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
        >
          <option value="">All Branches</option>
          <option value="Polanco">Polanco</option>
          <option value="Perisur">Perisur</option>
          <option value="Ciudad Brisas">Ciudad Brisas</option>
        </select>
        <div className="flex items-center text-slate-600">
          <Filter size={20} className="mr-2" />
          <span className="text-sm">{filteredAppointments.length} appointments</span>
        </div>
      </div>

      {/* Appointments List */}
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {filteredAppointments.map((appointment, index) => (
          <div
            key={appointment.id}
            className="bg-gradient-to-r from-white to-slate-50 rounded-xl p-6 border border-slate-200 hover:border-teal-200 hover:shadow-md transition-all duration-300 animate-slideInUp"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center">
                    <User size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">{appointment.student}</h3>
                    <p className="text-sm text-slate-600">{appointment.course}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-600">
                  <div className="flex items-center">
                    <User size={16} className="mr-2 text-teal-500" />
                    <span>{appointment.teacher}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2 text-teal-500" />
                    <span>{appointment.branch}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2 text-teal-500" />
                    <span>{appointment.slot}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col items-end space-y-3">
                <span className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getStatusColor(appointment.status)}`}>
                  {appointment.status}
                </span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleReschedule(appointment.id)}
                    className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors text-xs font-medium"
                  >
                    Reschedule
                  </button>
                  <button
                    onClick={() => handleCancel(appointment.id)}
                    className="px-3 py-1 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors text-xs font-medium"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredAppointments.length === 0 && (
        <div className="text-center py-12">
          <Calendar size={48} className="mx-auto text-slate-300 mb-4" />
          <p className="text-slate-500">No appointments match your current filters</p>
        </div>
      )}
    </section>
  );
};

export default AppointmentsSection;