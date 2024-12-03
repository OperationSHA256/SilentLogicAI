import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { useNavigate } from 'react-router-dom';
import { LogOut, User, Settings, Bell } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success('Logged out successfully');
      navigate('/');
    } catch (error) {
      toast.error('Failed to log out');
    }
  };

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-[#008080] flex items-center justify-center">
                  <User className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <h2 className="text-2xl font-bold text-gray-900">Welcome, {user?.displayName}</h2>
                  <p className="text-sm text-gray-500">{user?.email}</p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#008080] hover:bg-[#006666]"
              >
                <LogOut className="h-5 w-5 mr-2" />
                Sign Out
              </button>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center">
                  <Bell className="h-6 w-6 text-[#008080]" />
                  <h3 className="ml-3 text-lg font-medium text-gray-900">Notifications</h3>
                </div>
                <p className="mt-2 text-sm text-gray-500">You have no new notifications</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center">
                  <Settings className="h-6 w-6 text-[#008080]" />
                  <h3 className="ml-3 text-lg font-medium text-gray-900">Account Settings</h3>
                </div>
                <p className="mt-2 text-sm text-gray-500">Manage your account preferences</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}