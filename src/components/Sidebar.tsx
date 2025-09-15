import React, { useState } from 'react';
import { MessageCircle, Calculator, FileText, Upload, Share2, Folder } from 'lucide-react';
import { DocumentType } from '../types';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  documents: DocumentType[];
  onDocumentUpload: (docs: DocumentType[]) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ documents, onDocumentUpload }) => {
  const [uploadingDoc, setUploadingDoc] = useState(false);

  const quickActions = [
    { icon: MessageCircle, label: 'Send Reminder', action: 'reminder', color: 'from-green-500 to-emerald-600' },
    { icon: Calculator, label: 'Color Calculator', action: 'calculator', color: 'from-purple-500 to-indigo-600' },
    { icon: FileText, label: 'Generate Aftercare', action: 'aftercare', color: 'from-orange-500 to-red-600' },
    { icon: Calendar, label: 'Add Appointment', action: 'appointment', color: 'from-blue-500 to-cyan-600' },
    { icon: CheckCircle, label: 'Check In', action: 'checkin', color: 'from-teal-500 to-green-600' },
    { icon: UserPlus, label: 'New Student', action: 'student', color: 'from-pink-500 to-rose-600' },
    { icon: Award, label: 'Generate Diploma', action: 'diploma', color: 'from-amber-500 to-yellow-600' },
    { icon: Receipt, label: 'Generate Receipt', action: 'receipt', color: 'from-slate-500 to-gray-600' },
  ];

  const handleQuickAction = (action: string) => {
    switch (action) {
      case 'reminder':
        window.open('https://web.whatsapp.com/send?phone=525577516913&text=Reminder:%20Your%20Maxfra%20Academy%20appointment%20is%20today!', '_blank');
        break;
      case 'calculator':
        alert('Color Calculator: Based on medium skin tone, recommend warm brown pigment with golden undertones.');
        break;
      case 'aftercare':
        alert('Aftercare PDF generated successfully!');
        break;
      case 'appointment':
        // Scroll to appointments section and show form
        document.getElementById('appointments-section')?.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          const addButton = document.querySelector('[data-action="add-appointment"]') as HTMLButtonElement;
          addButton?.click();
        }, 500);
        break;
      case 'checkin':
        // Scroll to check-in section and focus input
        document.getElementById('checkin-section')?.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          const checkinInput = document.querySelector('#checkin-input') as HTMLInputElement;
          checkinInput?.focus();
        }, 500);
        break;
      case 'student':
        // Scroll to students section and show form
        document.getElementById('students-section')?.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          const addButton = document.querySelector('[data-action="add-student"]') as HTMLButtonElement;
          addButton?.click();
        }, 500);
        break;
      case 'diploma': {
        const studentName = prompt('Enter student name for diploma:');
        const courseName = prompt('Enter course name:');
        if (studentName && courseName) {
          alert(`Diploma generated for ${studentName} - ${courseName} course completion!`);
        }
        break;
      }
      case 'receipt': {
        const receiptStudent = prompt('Enter student name for receipt:');
        const amount = prompt('Enter payment amount:');
        if (receiptStudent && amount) {
          alert(`Receipt generated for ${receiptStudent} - Payment: $${amount}`);
        }
        break;
      }
    }
  };

  const handleDocumentUpload = () => {
    setUploadingDoc(true);
    // Simulate file upload
    setTimeout(() => {
      const newDoc: DocumentType = {
        id: documents.length + 1,
        name: `Document_${Date.now()}.pdf`,
        type: 'PDF',
        size: '2.3 MB',
        uploadDate: new Date().toISOString(),
        category: 'manual'
      };
      onDocumentUpload([...documents, newDoc]);
      setUploadingDoc(false);
    }, 1500);
  };

  return (
    <aside className="w-80 bg-white/70 backdrop-blur-lg border-r border-slate-200 p-6 space-y-8 max-h-screen overflow-y-auto">
      {/* Quick Actions */}
      <div>
        <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
          <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
          Quick Actions
        </h3>
        <div className="space-y-3">
          {quickActions.map((action, index) => (
            <button
              key={action.action}
              onClick={() => handleQuickAction(action.action)}
              className={`w-full p-4 bg-gradient-to-r ${action.color} text-white rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-3 animate-slideInRight`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <action.icon size={20} />
              <span className="font-medium">{action.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Document Library */}
      <div>
        <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
          Document Library
        </h3>
        
        <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
          {documents.map((doc, index) => (
            <div
              key={doc.id}
              className="p-3 bg-slate-50 rounded-lg border border-slate-200 hover:border-teal-300 hover:bg-teal-50/50 transition-all duration-300 animate-slideInLeft"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <Folder size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-800 truncate max-w-[8rem]">{doc.name}</p>
                    <p className="text-xs text-slate-500">{doc.size}</p>
                  </div>
                </div>
                <button className="p-2 hover:bg-white rounded-lg transition-colors">
                  <Share2 size={14} className="text-slate-400 hover:text-teal-600" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleDocumentUpload}
          disabled={uploadingDoc}
          className="w-full p-3 border-2 border-dashed border-slate-300 rounded-lg hover:border-teal-400 hover:bg-teal-50/30 transition-all duration-300 flex items-center justify-center space-x-2 text-slate-600 hover:text-teal-600"
        >
          {uploadingDoc ? (
            <>
              <div className="w-4 h-4 border-2 border-teal-400 border-t-transparent rounded-full animate-spin"></div>
              <span className="text-sm">Uploading...</span>
            </>
          ) : (
            <>
              <Upload size={18} />
              <span className="text-sm font-medium">Upload Document</span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;