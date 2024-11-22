import React from "react";
import Layout from "../components/Layout/Layout";
import Banner from "../components/Banner/Banner";
import Card from "../components/Card/Card";
import RightSidebar from "../components/RightSidebar/RightSidebar";
import BarChartPage from "./Charts/BarChartPage";
import WaveGraphPage from "./Charts/WaveGraphPage ";
import DoughnutChartPage from "./Charts/DoughnutChartPage";

const Dashboard = () => {
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
                price={"27,200"}
              />
              <Card
                title="Total Salaries"
                subtitle="Thai baht"
                price={"12,100"}
                progress={44}
              />
              <Card
                title="Total Wage's"
                subtitle="Thai baht"
                price={"15,100"}
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
