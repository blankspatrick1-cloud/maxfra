import React from 'react';
import { TrendingUp, Users, Calendar, DollarSign, Award, Target } from 'lucide-react';
import { KPIData } from '../types';

interface KPISectionProps {
  data: KPIData;
}

const KPISection: React.FC<KPISectionProps> = ({ data }) => {
  const kpis = [
    {
      label: 'Attendance Rate',
      value: `${data.attendanceRate}%`,
      icon: Target,
      color: 'from-green-400 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      change: '+5%',
      trend: 'up'
    },
    {
      label: 'Total Revenue',
      value: `$${data.revenue.toLocaleString()}`,
      icon: DollarSign,
      color: 'from-blue-400 to-indigo-500',
      bgColor: 'from-blue-50 to-indigo-50',
      change: '+12%',
      trend: 'up'
    },
    {
      label: 'Active Students',
      value: data.totalStudents.toString(),
      icon: Users,
      color: 'from-purple-400 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
      change: '+8%',
      trend: 'up'
    },
    {
      label: 'Appointments Today',
      value: data.totalAppointments.toString(),
      icon: Calendar,
      color: 'from-orange-400 to-red-500',
      bgColor: 'from-orange-50 to-red-50',
      change: '+3%',
      trend: 'up'
    },
    {
      label: 'Completion Rate',
      value: `${data.completionRate}%`,
      icon: Award,
      color: 'from-teal-400 to-cyan-500',
      bgColor: 'from-teal-50 to-cyan-50',
      change: '+2%',
      trend: 'up'
    },
    {
      label: 'Popular Course',
      value: data.popularCourse,
      icon: TrendingUp,
      color: 'from-amber-400 to-yellow-500',
      bgColor: 'from-amber-50 to-yellow-50',
      change: 'Trending',
      trend: 'up'
    }
  ];

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-800 flex items-center">
          <div className="w-1 h-8 bg-gradient-to-b from-teal-500 to-blue-600 rounded-full mr-4"></div>
          At a Glance
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {kpis.map((kpi, index) => (
          <div
            key={kpi.label}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 hover:border-teal-200 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-500 animate-slideInUp"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className={`w-12 h-12 bg-gradient-to-br ${kpi.bgColor} rounded-xl flex items-center justify-center mb-4`}>
              <kpi.icon className={`w-6 h-6 bg-gradient-to-br ${kpi.color} bg-clip-text text-transparent`} />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-slate-600">{kpi.label}</h3>
              <div className="flex items-end justify-between">
                <p className="text-2xl font-bold text-slate-800">{kpi.value}</p>
                <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
                  {kpi.change}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KPISection;