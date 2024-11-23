import React from "react";

const CustomTable = ({ headers, data }) => {
  return (
    <div className="overflow-x-auto overflow-y-auto ml-3 max-h-[80vh] w-full scrollbar-thin scrollbar-thumb-gray-400/50 scrollbar-track-gray-100/20 rounded-lg shadow-sm">
      <table className="min-w-full table-auto text-sm text-gray-700">
        {/* Table Header */}
        <thead className="bg-gray-50 sticky top-0 shadow-sm">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-6 py-4 font-semibold text-gray-900 border-b border-gray-200"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="bg-white divide-y divide-gray-300">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className=" transition-colors hover:bg-gray-50 ">
              {Object.values(row).map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-6 py-3 whitespace-nowrap "
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
