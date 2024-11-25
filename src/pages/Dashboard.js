import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import Banner from "../components/Banner/Banner";
import Card from "../components/Card/Card";
import RightSidebar from "../components/RightSidebar/RightSidebar";
import BarChartPage from "./Charts/BarChartPage";
import WaveGraphPage from "./Charts/WaveGraphPage ";
import DoughnutChartPage from "./Charts/DoughnutChartPage";
import { tableData } from "../data/TableData";
const Dashboard = () => {
  const [selectedMonth, setSelectedMonth] = useState('all');
  const [totalTips, setTotalTips] = useState(tableData.length);

  const [expenses, setExpenses] = useState("₹0");
  const [salary, setSalary] = useState("₹0");

  const parseCurrency = (value) => {
    return value
      ? parseFloat(value.replace("₹", "").replace(",", "").trim())
      : 0;
  };

  const months = [
    'all',
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];

  useEffect(() => {
    const filteredData = selectedMonth === 'all'
      ? tableData
      : tableData;

    const { totalExpenses, totalSalaries } = filteredData.reduce(
      (acc, { driverSalary, fuelCost, buddySalary }) => {
        acc.totalExpenses +=
          parseCurrency(driverSalary) +
          parseCurrency(fuelCost) +
          parseCurrency(buddySalary);
        acc.totalSalaries += parseCurrency(driverSalary);
        return acc;
      },
      { totalExpenses: 0, totalSalaries: 0 }
    );

    setExpenses(`₹${totalExpenses.toLocaleString()}`);
    setSalary(`₹${totalSalaries.toLocaleString()}`);
    setTotalTips(filteredData.length);
  }, [selectedMonth, tableData]);

  return (
    <Layout>
      <div className="flex h-screen ">
        {/* Left Sidebar (Fixed Width) */}

        {/* Main Content + Right Sidebar */}
        <div className="flex-grow flex">
          {/* Main Content */}
          <div className="flex-grow w-auto py-3 px-4">
            <div className="mb-4 px-2">
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="p-2 border rounded-md bg-white"
              >
                {months.map((month) => (
                  <option key={month} value={month}>
                    {month.charAt(0).toUpperCase() + month.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            <Banner
              title="Fleet Management Transportation & Logistics "
              subheading=" Sample Dashboard 2024"
              backgroundColor="darkblue"
            />

            <div className="flex justify-center  gap-3 my-3">
              <Card
                title="Total Expenses"
                subtitle=""
                price={expenses}
                progress={82}
              />
              <Card
                title="Total Salaries"
                subtitle=""
                price={salary}
                progress={44}
              />
              <Card
                title="Total Number of Trips"
                subtitle=""
                price={totalTips}
                progress={56}
              />
            </div>
            <div className="flex   gap-6  justify-around">
              <div className="w-full md:w-1/2 lg:w-1/2">
                <BarChartPage />
              </div>
              <div className="w-full md:w-1/2 lg:w-1/2">
                <WaveGraphPage />
              </div>
            </div>
          </div>

          <div className="" style={{ minHeight: "100%", maxWidth: "25%" }}>
            {/* Right Sidebar */}
            <RightSidebar />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
