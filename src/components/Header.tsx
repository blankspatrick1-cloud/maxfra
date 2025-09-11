import React from 'react';
import { Bell, Settings, User } from 'lucide-react';

const Header: React.FC = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <header className="bg-white/80 backdrop-blur-lg border-b border-slate-200 px-6 py-4 sticky top-0 z-50">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
            MAXFRA Dashboard
          </h1>
          <p className="text-slate-600 text-sm">{currentDate}</p>
        </div>

        <div className="flex items-center space-x-4">
          <button className="relative p-2 text-slate-600 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all duration-300 hover:scale-105">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
          </button>
          
          <button className="p-2 text-slate-600 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all duration-300 hover:scale-105">
            <Settings size={20} />
          </button>
          
          <div className="flex items-center space-x-3 bg-gradient-to-r from-teal-50 to-blue-50 rounded-full px-4 py-2">
            <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center">
              <User size={16} className="text-white" />
            </div>
            <span className="text-sm font-medium text-slate-700">Director</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;