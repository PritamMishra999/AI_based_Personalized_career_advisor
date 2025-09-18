import React from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { 
  TrendingUp, 
  Users, 
  BookOpen, 
  Award,
  Activity,
  Clock,
  ArrowUp,
  ArrowDown,
  Briefcase,
  Star
} from 'lucide-react';

const stats = [
  {
    label: 'Career Matches',
    value: '15',
    change: '+3 new',
    changeType: 'positive' as const,
    icon: Briefcase,
  },
  {
    label: 'Active Users',
    value: '2,350',
    change: '+120',
    changeType: 'positive' as const,
    icon: Users,
  },
  {
    label: 'Skills Learned',
    value: '48',
    change: '+6 this week',
    changeType: 'positive' as const,
    icon: BookOpen,
  },
  {
    label: 'Success Rate',
    value: '87%',
    change: '+2.5%',
    changeType: 'positive' as const,
    icon: TrendingUp,
  },
];

const recentActivity = [
  {
    user: 'John Smith',
    action: 'completed "Advanced Java"',
    time: '2 minutes ago',
    amount: null,
  },
  {
    user: 'Sarah Johnson',
    action: 'got recommended for "Full Stack Developer"',
    time: '5 minutes ago',
    amount: null,
  },
  {
    user: 'Mike Wilson',
    action: 'updated career preferences',
    time: '10 minutes ago',
    amount: null,
  },
  {
    user: 'Emily Davis',
    action: 'earned a certificate in "Data Analytics"',
    time: '15 minutes ago',
    amount: null,
  },
];

export const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <Sidebar />
        
        <div className="flex-1">
          <Header />
          
          <main className="p-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                      <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center">
                    {stat.changeType === 'positive' ? (
                      <ArrowUp className="w-4 h-4 text-green-500" />
                    ) : (
                      <ArrowDown className="w-4 h-4 text-red-500" />
                    )}
                    <span
                      className={`text-sm font-medium ml-1 ${
                        stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {stat.change}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">compared to last week</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Skill Progress Placeholder */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Skill Progress Overview</h3>
                <div className="h-64 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Activity className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                    <p className="text-gray-600">Skill progress chart will go here</p>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-medium text-gray-600">
                            {activity.user.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            <span className="font-normal">{activity.user}</span> {activity.action}
                          </p>
                          <div className="flex items-center text-xs text-gray-500 mt-1">
                            <Clock className="w-3 h-3 mr-1" />
                            {activity.time}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Widgets */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full text-left p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                    <span className="text-sm font-medium text-blue-700">View Career Recommendations</span>
                  </button>
                  <button className="w-full text-left p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                    <span className="text-sm font-medium text-green-700">Check Skill Gap</span>
                  </button>
                  <button className="w-full text-left p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
                    <span className="text-sm font-medium text-purple-700">Book Mentorship Session</span>
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Skills</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">JavaScript</span>
                    <Star className="w-4 h-4 text-yellow-400" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">React</span>
                    <Star className="w-4 h-4 text-yellow-400" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">SQL</span>
                    <Star className="w-4 h-4 text-yellow-400" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Mentors</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-xs font-medium text-blue-600">AK</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Anil Kumar</p>
                      <p className="text-xs text-gray-500">Career Coach</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-xs font-medium text-green-600">RS</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Ritu Sharma</p>
                      <p className="text-xs text-gray-500">Skill Mentor</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
