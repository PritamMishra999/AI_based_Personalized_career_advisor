import React from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  ShoppingCart,
  Activity,
  Clock,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

const stats = [
  {
    label: 'Total Revenue',
    value: '$45,231.89',
    change: '+20.1%',
    changeType: 'positive' as const,
    icon: DollarSign,
  },
  {
    label: 'Active Users',
    value: '2,350',
    change: '+180',
    changeType: 'positive' as const,
    icon: Users,
  },
  {
    label: 'Orders',
    value: '12,234',
    change: '-19%',
    changeType: 'negative' as const,
    icon: ShoppingCart,
  },
  {
    label: 'Growth Rate',
    value: '23.5%',
    change: '+4.2%',
    changeType: 'positive' as const,
    icon: TrendingUp,
  },
];

const recentActivity = [
  {
    user: 'John Smith',
    action: 'made a purchase',
    time: '2 minutes ago',
    amount: '$299.00',
  },
  {
    user: 'Sarah Johnson',
    action: 'created an account',
    time: '5 minutes ago',
    amount: null,
  },
  {
    user: 'Mike Wilson',
    action: 'updated profile',
    time: '10 minutes ago',
    amount: null,
  },
  {
    user: 'Emily Davis',
    action: 'made a purchase',
    time: '15 minutes ago',
    amount: '$156.50',
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
                    <span className="text-sm text-gray-500 ml-1">from last month</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Chart Placeholder */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Overview</h3>
                <div className="h-64 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Activity className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                    <p className="text-gray-600">Chart visualization would go here</p>
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
                      {activity.amount && (
                        <span className="text-sm font-medium text-green-600">
                          {activity.amount}
                        </span>
                      )}
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
                    <span className="text-sm font-medium text-blue-700">Create New Report</span>
                  </button>
                  <button className="w-full text-left p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                    <span className="text-sm font-medium text-green-700">Export Data</span>
                  </button>
                  <button className="w-full text-left p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
                    <span className="text-sm font-medium text-purple-700">Schedule Meeting</span>
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">System Status</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">API Status</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Active</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Database</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Healthy</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Storage</span>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">75% Full</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Team</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-xs font-medium text-blue-600">JS</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">John Smith</p>
                      <p className="text-xs text-gray-500">Administrator</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-xs font-medium text-green-600">SJ</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Sarah Johnson</p>
                      <p className="text-xs text-gray-500">Editor</p>
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