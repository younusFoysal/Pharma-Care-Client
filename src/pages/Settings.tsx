import  { useState } from 'react';
import { Settings as SettingsIcon, User, Users, Sliders } from 'lucide-react';
import ProfileSettings from '../components/settings/ProfileSettings';
import UserManagement from '../components/settings/UserManagement';
import SystemSettings from '../components/settings/SystemSettings';
import { useAuth } from '../context/AuthContext';
import { ROLES } from '../utils/roles';

function Settings() {
  const [activeTab, setActiveTab] = useState('profile');
  const { user } = useAuth();

  const tabs = [
    { id: 'profile', name: 'Profile Settings', icon: User },
    ...(user?.role === ROLES.ADMIN ? [
      { id: 'users', name: 'User Management', icon: Users },
      { id: 'system', name: 'System Settings', icon: Sliders }
    ] : [])
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
        <SettingsIcon className="h-6 w-6 text-gray-400" />
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group inline-flex items-center px-6 py-4 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className={`-ml-1 mr-2 h-5 w-5 ${
                    activeTab === tab.id ? 'text-indigo-500' : 'text-gray-400 group-hover:text-gray-500'
                  }`} />
                  {tab.name}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      <div className="space-y-6">
        {activeTab === 'profile' && <ProfileSettings />}
        {activeTab === 'users' && user?.role === ROLES.ADMIN && <UserManagement />}
        {activeTab === 'system' && user?.role === ROLES.ADMIN && <SystemSettings />}
      </div>
    </div>
  );
}

export default Settings;