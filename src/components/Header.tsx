import React from 'react';
import { Bell, User, Menu } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useSidebar } from '../context/SidebarContext';


function Header() {
  const { user, logout } = useAuth();
  const { toggle } = useSidebar();

  return (
      <header className="bg-white shadow">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <button
                  onClick={toggle}
                  className="p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
              >
                <Menu className="h-6 w-6"/>
              </button>
            </div>
            <div className="flex items-center">
              <button className="p-2 rounded-full text-gray-400 hover:text-gray-500">
                <Bell className="h-6 w-6"/>
              </button>
              <div className="ml-3 relative">
                <div className="flex items-center">
                  <button
                      className="flex items-center max-w-xs rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <User className="h-8 w-8 rounded-full"/>
                    <span className="ml-2 text-gray-700 hidden sm:block">{user?.name}</span>
                  </button>
                  <button
                      onClick={logout}
                      className="ml-4 text-sm text-gray-500 hover:text-gray-700"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
  );
}

export default Header;