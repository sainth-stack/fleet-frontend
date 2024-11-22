import React, { useState } from "react";
import { FaBell, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Topmenu = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <div className="w-auto">
      <div
        className="flex  items-center justify-between p-3 border-b border-gray-200"
        style={{ height: "4rem " }}
      >
        <h2> </h2>
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md">
            <FaBell className="w-5 h-5 text-gray-500 hover:text-gray-700" />
          </div>

          {/* Profile Dropdown */}
          <div>
            <button
              onClick={toggleProfileDropdown}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md"
            >
              <FaUser className="w-5 h-5 text-gray-500 hover:text-gray-700" />
            </button>
            {isProfileDropdownOpen && (
              <div className="absolute mt-2 w-48 bg-white rounded-md shadow-lg py-2 right-0">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </Link>
                <Link
                  to="/settings"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Settings
                </Link>
                <Link
                  to="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={handleLogout}
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topmenu;
