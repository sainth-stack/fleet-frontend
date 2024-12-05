import React from "react";
import * as XLSX from "xlsx";
import { tableData } from "../../data/TableData";

const ExportToExcel = () => {
  const exportToExcel = () => {
    // Prepare data for Excel
    const formattedData = tableData.map((row) => {
      return {
        N: row.id,
        Date: row.date,
        Year: row.year,
        Month: row.month,
        Day: row.day,
        Driver: row.driver,
        Conductor: row.Conductor,
        Vehicle: row.vehicle,
        "Distance (km)": row.distance,
        "Trip Classify": row.tripClassify,
        "Distance Traveled": row.distanceTraveled,
        From: row.from,
        To: row.to,
        "Type of Bus": row.busType,
        "Driver wage/trip": row.driverWage,
        "Conductor wage/trip": row.buddyWage,
        "Driver Salary": row.driverSalary,
        "Conductor Salary": row.buddySalary,
        "Weight (Tons)": row.weight,
        "Hired Transportation": row.hiredTransportation,
        "Fuel Consumption (Lit)": row.fuelConsumption,
        "Fuel Cost": row.fuelCost,
        "Bus Capacity": row.busCapacity,
        "Bus Occupancy": row.busOccupancy,
      };
    });

    // Create a worksheet
    const worksheet = XLSX.utils.json_to_sheet(formattedData);

    // Create a workbook
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Table Data");

    // Export to Excel
    XLSX.writeFile(workbook, "TableData.xlsx");
  };

  return (
    <div className="hover:shadow-lg rounded-full ">
      <button
        onClick={exportToExcel}
        className="p-3 text-white bg-slate-500 rounded-full  shadow-md"
      >
        Export to Excel
      </button>
    </div>
  );
};

export default ExportToExcel;
