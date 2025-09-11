import React, { useState } from 'react';
import { CheckCircle, FileText, Award, QrCode } from 'lucide-react';

interface CheckInSectionProps {
  checkins: number;
  onCheckIn: (count: number) => void;
}

const CheckInSection: React.FC<CheckInSectionProps> = ({ checkins, onCheckIn }) => {
  const [checkinName, setCheckinName] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleCheckIn = () => {
    if (checkinName.trim()) {
      onCheckIn(checkins + 1);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setCheckinName('');
      }, 2000);
    }
  };

  const utilities = [
    { icon: FileText, label: 'Generate Receipt', color: 'from-green-400 to-emerald-500' },
    { icon: Award, label: 'Generate Diploma', color: 'from-amber-400 to-yellow-500' },
    { icon: QrCode, label: 'QR Code Scanner', color: 'from-indigo-400 to-purple-500' },
  ];

  return (
    <section className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 shadow-lg">
      <div id="checkin-section"></div>
      <h2 className="text-2xl font-bold text-slate-800 flex items-center mb-6">
        <CheckCircle className="w-7 h-7 text-green-600 mr-3" />
        Check-In & Utilities
      </h2>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Check-in Section */}
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Student Check-In</h3>
            
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  id="checkin-input"
                  placeholder="Enter student name or scan barcode..."
                  value={checkinName}
                  onChange={(e) => setCheckinName(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  onKeyPress={(e) => e.key === 'Enter' && handleCheckIn()}
                />
                <QrCode size={20} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-400" />
              </div>
              
              <button
                onClick={handleCheckIn}
                disabled={!checkinName.trim()}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                Check In Student
              </button>
            </div>

            {showSuccess && (
              <div className="mt-4 p-3 bg-green-100 border border-green-200 rounded-lg animate-fadeIn">
                <div className="flex items-center">
                  <CheckCircle size={16} className="text-green-600 mr-2" />
                  <span className="text-sm text-green-800 font-medium">
                    {checkinName} checked in successfully!
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-slate-100 px-4 py-2 rounded-full">
              <CheckCircle size={16} className="text-green-600" />
              <span className="text-sm font-medium text-slate-700">
                Total Check-ins Today: {checkins}
              </span>
            </div>
          </div>
        </div>

        {/* Utilities Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Quick Utilities</h3>
          <div className="space-y-3">
            {utilities.map((utility, index) => (
              <button
                key={utility.label}
                className={`w-full p-4 bg-gradient-to-r ${utility.color} text-white rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center space-x-3 animate-slideInRight`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => alert(`${utility.label} feature activated!`)}
              >
                <utility.icon size={20} />
                <span className="font-medium">{utility.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckInSection;