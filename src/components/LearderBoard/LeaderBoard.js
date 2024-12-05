import React, { useState } from "react";
import { FaUserGraduate } from "react-icons/fa";
import { GiLaurelsTrophy } from "react-icons/gi";
import UserCard from "../UserCard/UserCard";
const Leaderboard = ({ data }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  // Sort data by fuel consumption in ascending order
  const sortedData = [...data].sort(
    (a, b) => a.fuelConsumption - b.fuelConsumption
  );

  // Get top 5 data
  const top5Data = sortedData.slice(0, 5);

  // Function to determine background color based on position
  const getBackgroundColor = (index) => {
    switch (index) {
      case 0:
        return "bg-gradient-to-r from-yellow-500 to-yellow-300"; // Gold for 1st place
      case 1:
        return "bg-gradient-to-r from-gray-500 to-gray-300"; // Silver for 2nd place
      case 2:
        return "bg-gradient-to-r from-orange-500 to-orange-300"; // Bronze for 3rd place
      case 3:
        return "bg-gradient-to-r from-gray-200 to-orange-100"; // Bronze for 3rd place
      default:
        return "bg-white"; // Default background for others
    }
  };

  const handleItemClick = (event, trip) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPopupPosition({
      top: rect.top + window.scrollY,
      left: rect.left + -300,
    });
    setSelectedUser(trip);
  };

  return (
    <div className="p-6 max-w-xl mb-6 mx-auto bg-gray-50 rounded-lg shadow-lg">
      <div className="flex items-center justify-center space-x-4 mb-6">
        {/* Title Section */}
        <h2 className="text-center text-xl font-extrabold text--600 mb-0">
          Top Fuel Savers of this month
        </h2>

        {/* Image Section */}
        <div className="flex justify-center items-center">
          <img
            src="https://talentspotifyapp.com/static/media/bronzeCup.f7dfe031.svg"
            alt="Bronze Cup"
            className="w-16 h-16 md:w-20 md:h-20 rounded-full transform hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>

      <div className="space-y-3">
        {top5Data.length > 0 ? (
          top5Data.map((trip, index) => (
            <div
              key={trip.id}
              className={`flex p-1 rounded-lg shadow-md ${getBackgroundColor(
                index
              )}`}
              onClick={(event) => handleItemClick(event, trip)}
            >
              {/* Left section for the user image */}
              <div className="w-12 h-12 bg-gray-200 rounded-full  mr-4">
                <GiLaurelsTrophy className="shadow-md rounded-full hover:scale-125" />
                <h6 className="text-3xl  text-center -my-2 font-bold text-blue-600">
                  {index + 1}
                </h6>
              </div>

              {/* Rank, Driver name, and Fuel Consumption */}
              <div className="flex-1 flex  justify-between items-center">
                <div className="text-lg capitalize font-semibold text-gray-700 flex-1">
                  {trip.driver}
                </div>
                <div className="text-lg font-semibold mx-3 text-green-600 text-left">
                  {trip.fuelConsumption} L
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No data available</p>
        )}
      </div>

      {selectedUser && (
        <UserCard
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
          position={popupPosition}
        />
      )}
    </div>
  );
};

export default Leaderboard;
