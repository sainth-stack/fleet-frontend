import React from "react";

const CustomTable = ({ headers, data }) => {
  return (
    <div className="overflow-auto  ml-3 max-w-full max-h-[80vh] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
      <table className="table-auto w-full  text-xs text-left">
        {/* Table Header */}
        <thead className="bg-gray-100  sticky top-0" >
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-3 py-2 border border-gray-300 text-left"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-t hover:bg-gray-50">
              {Object.values(row).map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-3 py-2 border border-gray-300 truncate"
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
