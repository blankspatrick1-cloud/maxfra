import React from 'react';
import { Calendar } from 'lucide-react';
import { AppointmentType } from '../types';

interface CalendarSectionProps {
  appointments: AppointmentType[];
}

const CalendarSection: React.FC<CalendarSectionProps> = ({ appointments }) => {
  const slots = ['10:00–13:00', '13:00–16:00', '17:00–20:00'];
  const branches = ['Polanco', 'Perisur', 'Ciudad Brisas'];

  return (
    <section className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 shadow-lg">
      <h2 className="text-2xl font-bold text-slate-800 flex items-center mb-6">
        <Calendar className="w-7 h-7 text-blue-600 mr-3" />
        Weekly Schedule
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="text-left p-4 font-semibold text-slate-700 bg-slate-50 rounded-tl-lg">Time Slot</th>
              {branches.map((branch, index) => (
                <th
                  key={branch}
                  className={`text-center p-4 font-semibold text-slate-700 bg-slate-50 ${
                    index === branches.length - 1 ? 'rounded-tr-lg' : ''
                  }`}
                >
                  {branch}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {slots.map((slot, slotIndex) => (
              <tr key={slot} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                <td className="p-4 font-medium text-slate-700 bg-gradient-to-r from-teal-50 to-blue-50">
                  {slot}
                </td>
                {branches.map((branch) => {
                  const branchAppointments = appointments.filter(
                    (appt) => appt.slot === slot && appt.branch === branch
                  );
                  const maxCapacity = 4;
                  const occupancy = branchAppointments.length;
                  const occupancyPercentage = (occupancy / maxCapacity) * 100;

                  return (
                    <td key={`${slot}-${branch}`} className="p-4 text-center">
                      <div className="space-y-2">
                        <div className="flex items-center justify-center space-x-2">
                          <span className={`text-sm font-medium ${
                            occupancy === 0 ? 'text-slate-400' : 
                            occupancy <= 2 ? 'text-green-600' :
                            occupancy === 3 ? 'text-yellow-600' : 'text-red-600'
                          }`}>
                            {occupancy}/{maxCapacity}
                          </span>
                          <div className="w-12 h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div
                              className={`h-full transition-all duration-500 ${
                                occupancy === 0 ? 'bg-slate-300' : 
                                occupancy <= 2 ? 'bg-green-400' :
                                occupancy === 3 ? 'bg-yellow-400' : 'bg-red-400'
                              }`}
                              style={{ width: `${occupancyPercentage}%` }}
                            ></div>
                          </div>
                        </div>
                        {branchAppointments.length > 0 && (
                          <div className="text-xs text-slate-600 space-y-1">
                            {branchAppointments.slice(0, 2).map((appt) => (
                              <div key={appt.id} className="truncate">
                                {appt.student}
                              </div>
                            ))}
                            {branchAppointments.length > 2 && (
                              <div className="text-slate-400">
                                +{branchAppointments.length - 2} more
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default CalendarSection;