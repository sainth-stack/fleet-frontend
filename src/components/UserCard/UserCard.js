import React from "react";

const UserCard = ({ user, onClose, position }) => {
  const { top, left } = position;

  console.log(user)
  return (
    <div
      className="absolute bg-white rounded-lg shadow-lg p-3 w-72 z-50"
      style={{ top: `${top}px`, left: `${left}px` }}
    >
      {/* Close Button */}
      <button
        className="absolute -top-0 z-10  bg-slate-50 rounded-full w-6  right-0.5 text-gray-600 hover:text-red-600 scale-110  "
        onClick={onClose}
      >
        ✖
      </button>

      {/* Header with Background and Image */}
      <div className="bg-[#298a80] rounded-t-lg p-2 flex items-center justify-center relative h-14">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3LjqHL-0QNJ-gDpr2GbE1bEe6ZuSMb-ITeA&s"
          alt="Driver"
          className="w-16 object-cover h-16 rounded-full  absolute top-full transform -translate-y-1/2 border-4 border-white shadow-md "
        />
      </div>

      {/* User Details */}
      <div className="p-4 bg-[#edf7f7] ">
        <h3 className="text-lg mt-5 uppercase font-bold text-gray-700 mb-4 text-center">
          {user.driver}
        </h3>
        <p className="text-gray-600  font-semibold mb-1 text-balance">
          {" "}
          Driver Salary: {user.driverSalary}
        </p>
        <p className="text-gray-600  font-semibold mb-1 text-balance">
          Fuel Consumption: {user.fuelConsumption} L
        </p>
        <p className="text-gray-600 font-semibold mb-1 text-balance">
          No Of Accidents : {user.noOfAccidentsByDriver}
        </p>
        
        <p className="text-gray-600 font-semibold mb-1 text-balance">
          Millage : {user.millageInKM}{" "}
        </p>
      </div>

      {/* Connect Button */}
    </div>
  );
};

export default UserCard;
