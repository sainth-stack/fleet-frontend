import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import driver1 from "../../assests/images/image.png"
import { FaBuilding, FaTasks, FaBell, FaUserFriends } from "react-icons/fa";
import { MdDashboard, MdOutlineCalendarToday } from "react-icons/md";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import MonthPicker from "../MonthPicker/MonthPicker";

const Sidemenu = ({ user }) => {
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const storedUserRole = localStorage.getItem("user");
    if (storedUserRole) {
      const user = JSON.parse(storedUserRole);
      setUserRole(user.role);
    } else {
      console.log("No user role found in localStorage");
    }
  }, []);

  const location = useLocation();
  const [activeItem, setActiveItem] = useState("");
  const [isOpen, setIsOpen] = useState(true);


  // Sidebar menu configuration based on role
  const sidebarConfig = {
    // Default routes
    default: [
      { name: "dashboard", icon: <MdDashboard />, path: "/dashboard" },
      { name: "table", icon: <FaBuilding />, path: "/table" },
      { name: "schedule", icon: <FaBuilding />, path: "/schedule" },
      // { name: "drivers", icon: <FaBuilding />, path: "/drivers" },

      /*  { name: "Manual Tasks", icon: <FaTasks />, path: "/tasks" },
      { name: "Auto Tasks", icon: <FaTasks />, path: "/tasks/auto" },
      { name: "Users", icon: <FaUserFriends />, path: "/users" },
      {
        name: "Notification Settings",
        icon: <FaBell />,
        path: "/notification-settings",
      }, */
    ],
    // Super Admin routes
    /*  S: [
      { name: "Agency", icon: <HiOutlineOfficeBuilding />, path: "/agency" },
    ],
    // Admin routes
    A: [
      { name: "Dashboard", icon: <MdDashboard />, path: "/dashboard" },
      { name: "Company", icon: <FaBuilding />, path: "/company" },
      { name: "Manual Tasks", icon: <FaTasks />, path: "/tasks" },
      { name: "Auto Tasks", icon: <FaTasks />, path: "/tasks/auto" },
      { name: "Users", icon: <FaUserFriends />, path: "/users" },
      {
        name: "Service Calendar",
        icon: <MdOutlineCalendarToday />,
        path: "/service-calendar",
      },
      {
        name: "Notification Settings",
        icon: <FaBell />,
        path: "/notification-settings",
      },
    ], */
  };

  const getUserSidebarItems = () => {
    let items = sidebarConfig[user?.role] || sidebarConfig.default;
    if (user?.role === "U") {
      items = items.filter((item) => item.name !== "Users");
    }
    return items;
  };

  useEffect(() => {
    setActiveItem(location.pathname || "/dashboard");
  }, [location]);

  const handleMenuClick = (item) => {
    setActiveItem(item);
  };

  const sidebarItems = getUserSidebarItems();

  return (
    <div
      className={`fixed overflow-auto inset-y-0 left-0 shadow-lg transition-all duration-300 bg-white border-r border-gray-200 z-30 ${
        isOpen ? "w-40" : "w-16"
      }`}
    >
      <div className="mt-16">
        <ul>
          {sidebarItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                onClick={() => handleMenuClick(item.path)}
                className={`flex items-center gap-2 px-4 py-3 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ${
                  activeItem === item.path
                    ? "border-l-4 border-blue-500 bg-blue-50 text-blue-700"
                    : "border-transparent"
                } transition-all duration-200`}
              >
                <span className="text-lg">{item.icon}</span>
                {isOpen && (
                  <span className="text-sm font-medium">{item.name}</span>
                )}
              </Link>
            </li>
          ))}

          {activeItem === "/dashboard" && (
            <>
              <ProfileCard name="Antony" imageSrc={driver1} />
              <ProfileCard name="Antony" imageSrc={driver1} />
            </>
          )}
          <MonthPicker />
        </ul>
      </div>
    </div>
  );
};

export default Sidemenu;




const ProfileCard = ({ name, imageSrc }) => {
  return (
    <div className="flex mt-2 w-full justify-center container gap-2">
      <img
        src={imageSrc}
        alt={name}
        className="w-8 h-8 shadow-sm justify-center rounded-full"
      />
      <span className="bg-gray-50 shadow-sm p-1">{name}</span>
    </div>
  );
};