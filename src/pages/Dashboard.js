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
  const [totalTips, setTotalTips] = useState(tableData.length);

  const [expenses, setExpenses] = useState("₹0");
  const [salary, setSalary] = useState("₹0");

  const parseCurrency = (value) => {
    return value
      ? parseFloat(value.replace("₹", "").replace(",", "").trim())
      : 0;
  };

 useEffect(() => {
   // Calculate total expenses and total salaries across all trips
   const { totalExpenses, totalSalaries } = tableData.reduce(
     (acc, { driverSalary, fuelCost, buddySalary }) => {
       /* thsis for total expenses */

       acc.totalExpenses +=
         parseCurrency(driverSalary) +
         parseCurrency(fuelCost) +
         parseCurrency(buddySalary);
       /* thsis for salaries */
       acc.totalSalaries += parseCurrency(driverSalary);
       return acc;
     },
     { totalExpenses: 0, totalSalaries: 0 }
   );

   // Set state for total expenses and total salaries
   setExpenses(`₹${totalExpenses.toLocaleString()}`);
   setSalary(`₹${totalSalaries.toLocaleString()}`);
 }, [tableData]);

  return (
    <Layout>
      <div className="flex h-screen ">
        {/* Left Sidebar (Fixed Width) */}

        {/* Main Content + Right Sidebar */}
        <div className="flex-grow flex">
          {/* Main Content */}
          <div className="flex-grow w-auto py-3 px-4">
            <Banner
              title="Fleet Management Transportation & Logistics "
              subheading=" Sample Dashboard 2024"
              backgroundColor="darkblue"
            />

            <div className="flex justify-center  gap-3 my-3">
              <Card
                title="Total Expenses"
                subtitle="Thai baht"
                price={expenses}
                progress={82}
              />
              <Card
                title="Total Salaries"
                subtitle="Thai baht"
                price={salary}
                progress={44}
              />
              <Card
                title="Total Number of Trips"
                subtitle="Thai baht"
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
