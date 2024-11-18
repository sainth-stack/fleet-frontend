import React, { useState } from "react";

// Reusable Month Picker Component
const MonthPicker = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const handleMonthClick = (monthIndex) => {
    setSelectedMonth(monthIndex);
    console.log(`Selected month: ${months[monthIndex]}`); // Debug or callback for selected month
  };

  return (
    <div className="max-w-md mx-auto p-2 border py-3 rounded-lg shadow-md bg-white">
      <h2 className="text-lg font-semibold text-center mb-4">Select a Month</h2>
      <div className="grid grid-cols-3 gap-1">
        {months.map((month, index) => (
          <button
            key={month}
            onClick={() => handleMonthClick(  )}
            className={`p-1 rounded-md  my-1 text-left  shadow-sm font-small ${
              selectedMonth === index
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {month}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MonthPicker;
