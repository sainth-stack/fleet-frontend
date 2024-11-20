import React from "react";
import Topmenu from "../Menus/Topmenu";
import Sidemenu from "../Menus/Sidemenu";

const Header = ({user}) => {
  return (
    <>
      <div className=" fixed min-w-full top-0 z-30 bg-gray-900 h-50 ">
        <div className="flex min-w-screen " style={{minWidth:"100%"}}>
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
