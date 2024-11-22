import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./css/Layout.css"; // Import the CSS file
import Sidemenu from "../Menus/Sidemenu";
import Topmenu from "../Menus/Topmenu";

const Layout = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="sticky top-0 z-40">
        <div className="shadow-md bg-white">
          <Topmenu />
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-grow overflow-auto">
        {/* Left Menu (3 parts) */}
        <aside className="flex-[1.5] bg-gray-100 shadow-md sticky left-0 pt-16 z-50 overflow-auto">          <Sidemenu {...{ user }} />
        </aside>

        {/* Main Content (6 parts) */}
        <div className="flex-[10.5] py-4 px-4 overflow-auto">{children}</div>

        {/* Right Menu (3 parts) */}
        
      </div>
    </div>
  );
};

export default Layout;
