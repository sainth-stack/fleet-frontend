import React from "react";

const CustomTable = ({ headers, data }) => {
  return (
    <div className="overflow-x-auto scrollbar-thin">
      <table className="min-w-full table-auto border border-gray-300 text-xs text-left">
        {/* Table Header */}
        <thead className="bg-gray-100">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-3 py-1 border border-gray-300 text-left"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-t">
              {Object.values(row).map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-3 py-1 border border-gray-300 truncate"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
