import React from 'react';
import { 
  Home, 
  BarChart3, 
  Users, 
  Settings, 
  FileText, 
  Calendar,
  Mail,
  Shield
} from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Overview', active: true },
  { icon: BarChart3, label: 'Analytics' },
  { icon: Users, label: 'Users' },
  { icon: FileText, label: 'Reports' },
  { icon: Calendar, label: 'Calendar' },
  { icon: Mail, label: 'Messages' },
  { icon: Shield, label: 'Security' },
  { icon: Settings, label: 'Settings' },
];

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white shadow-sm border-r border-gray-200">
      <div className="p-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">D</span>
          </div>
          <span className="text-xl font-bold text-gray-900">DashApp</span>
        </div>
      </div>

      <nav className="mt-6">
        <ul className="space-y-1 px-3">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={`
                  flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors
                  ${item.active 
                    ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }
                `}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="absolute bottom-6 left-6 right-6">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg p-4 text-white">
          <h3 className="font-medium mb-1">Upgrade to Pro</h3>
          <p className="text-xs text-blue-100 mb-3">
            Get access to premium features
          </p>
          <button className="w-full bg-white text-blue-600 py-2 px-3 rounded-md text-sm font-medium hover:bg-blue-50 transition-colors">
            Upgrade Now
          </button>
        </div>
      </div>
    </aside>
  );
};