import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./css/Layout.css"; // Import the CSS file
import Sidemenu from "../Menus/Sidemenu";
import Topmenu from "../Menus/Topmenu";

const Layout = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user'))
  //console.log(user)
  return (
    <>
      <div className="flex flex-col h-screen">
        <header className=" sticky top-0 z-30 ">
          <div
            className="shadow-md  "
            style={{ background: "white" }}
          >
            <Topmenu />
          </div>
        </header>
        <div className="flex relative z-20 flex-grow" style={{}}>
          <aside className="w-25 bg-gray-100 shadow-md sticky  left-0 pt-16">
            <Sidemenu {...{ user }} />
          </aside>
          <div
            className="flex flex-col flex-grow"
            style={{ marginLeft: "200px" }}
          >
            <main className="flex-1 py-4 container ">{children}</main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
