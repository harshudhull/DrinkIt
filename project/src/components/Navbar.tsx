import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Droplet, Award, User } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

export const Navbar = () => {
  const [showUserMenu, setShowUserMenu] = React.useState(false);
  const { setUser } = useAuthStore();

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <nav className="bg-white shadow-sm fixed bottom-0 w-full">
      <div className="max-w-4xl mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <Link to="/home" className="text-blue-600">
            <Home className="h-6 w-6" />
          </Link>
          <Link to="/log" className="text-blue-600">
            <Droplet className="h-6 w-6" />
          </Link>
          <Link to="/rewards" className="text-blue-600">
            <Award className="h-6 w-6" />
          </Link>
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="text-blue-600"
            >
              <User className="h-6 w-6" />
            </button>
            {showUserMenu && (
              <div className="absolute bottom-full right-0 mb-2 w-48 bg-white rounded-lg shadow-lg">
                <Link
                  to="/profile"
                  className="block px-4 py-2 hover:bg-blue-50"
                >
                  Edit Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 hover:bg-blue-50"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};