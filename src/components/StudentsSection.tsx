import React, { useState } from 'react';
import { Users, Plus, GraduationCap, BookOpen, Calendar } from 'lucide-react';
import { StudentType } from '../types';

interface StudentsSectionProps {
  students: StudentType[];
  onStudentsUpdate: (students: StudentType[]) => void;
}

const StudentsSection: React.FC<StudentsSectionProps> = ({ students, onStudentsUpdate }) => {
  const [showNewForm, setShowNewForm] = useState(false);
  const [newStudent, setNewStudent] = useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

  const handleAddStudent = () => {
    if (newStudent.name && newStudent.email) {
      const student: StudentType = {
        id: students.length + 1,
        name: newStudent.name,
        email: newStudent.email,
        phone: newStudent.phone,
        notes: newStudent.notes,
        history: [],
        enrollmentDate: new Date().toISOString(),
        completedCourses: [],
        progress: 0
      };
      onStudentsUpdate([...students, student]);
      setNewStudent({ name: '', email: '', phone: '', notes: '' });
      setShowNewForm(false);
    }
  };

  return (
    <section className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 shadow-lg">
      <div id="students-section"></div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-800 flex items-center">
          <Users className="w-7 h-7 text-purple-600 mr-3" />
          Student Profiles
        </h2>
        <button
          onClick={() => setShowNewForm(!showNewForm)}
          data-action="add-student"
          className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center space-x-2"
        >
          <Plus size={20} />
          <span className="font-medium">Add Student</span>
        </button>
      </div>

      {showNewForm && (
        <div className="mb-6 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200 animate-slideInDown">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Add New Student</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              value={newStudent.name}
              onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
              className="px-4 py-3 bg-white border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={newStudent.email}
              onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
              className="px-4 py-3 bg-white border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={newStudent.phone}
              onChange={(e) => setNewStudent({ ...newStudent, phone: e.target.value })}
              className="px-4 py-3 bg-white border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
            />
            <textarea
              placeholder="Initial Notes"
              value={newStudent.notes}
              onChange={(e) => setNewStudent({ ...newStudent, notes: e.target.value })}
              className="px-4 py-3 bg-white border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 md:col-span-2"
              rows={3}
            />
          </div>
          <div className="flex space-x-3 mt-4">
            <button
              onClick={handleAddStudent}
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:shadow-md transition-all duration-300"
            >
              Save Student
            </button>
            <button
              onClick={() => setShowNewForm(false)}
              className="px-6 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-all duration-300"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="space-y-4 max-h-96 overflow-y-auto">
        {students.map((student, index) => (
          <div
            key={student.id}
            className="bg-gradient-to-r from-white to-purple-50 rounded-xl p-6 border border-slate-200 hover:border-purple-200 hover:shadow-md transition-all duration-300 animate-slideInLeft"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                    <GraduationCap size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">{student.name}</h3>
                    <p className="text-sm text-slate-600">{student.email}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600 mb-3">
                  <div className="flex items-center">
                    <BookOpen size={16} className="mr-2 text-purple-500" />
                    <span>{student.completedCourses.length} courses completed</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2 text-purple-500" />
                    <span>Enrolled: {new Date(student.enrollmentDate).toLocaleDateString()}</span>
                  </div>
                </div>

                {student.notes && (
                  <p className="text-sm text-slate-600 italic bg-slate-50 p-3 rounded-lg">
                    "{student.notes}"
                  </p>
                )}
              </div>
              
              <div className="text-right">
                <div className="w-16 h-16 relative">
                  <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-slate-200"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="transparent"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-purple-500"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeDasharray={`${student.progress}, 100`}
                      strokeLinecap="round"
                      fill="transparent"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-medium text-slate-700">{student.progress}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {students.length === 0 && (
        <div className="text-center py-12">
          <Users size={48} className="mx-auto text-slate-300 mb-4" />
          <p className="text-slate-500">No students enrolled yet</p>
        </div>
      )}
    </section>
  );
};

export default StudentsSection;