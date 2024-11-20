import React from "react";
import Topmenu from "../Menus/Topmenu";
import Sidemenu from "../Menus/Sidemenu";

const Header = ({user}) => {
  return (
    <>
      <div className=" fixed top-0 z-30 bg-gray-900 h-50 ">
        <div className="flex">
          <Topmenu />
        </div>
        <div className="top-20">
          <Sidemenu user={{ user }} />
        </div>
      </div>
    </>
  );
};

export default Header;
