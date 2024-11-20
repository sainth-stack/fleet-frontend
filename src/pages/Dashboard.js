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
      <div className="flex h-screen">
        {/* Left Sidebar (Fixed Width) */}

        {/* Main Content + Right Sidebar */}
        <div className="flex-grow flex">
          {/* Main Content */}
          <div className="flex-grow w-auto py-3 px-4">
            <Banner
              title="Fleet Management Transportation & Logistics to My App"
              subheading="Dashboard 2024"
              backgroundColor="darkblue"
            />

            <div className="flex justify-start  gap-3 my-3">
              <Card
                title="Pro Plan"
                subtitle="Most popular choice"
                price={29.99}
              />
              <Card
                title="Starter Plan"
                subtitle="Great for beginners"
                price={19.99}
                progress={50}
              />
              <Card
                title="Enterprise"
                subtitle="Advanced features"
                price={99.99}
                progress={90}
              />
            </div>
            <div className="flex  gap-6  justify-around">
              <div className="w-full md:w-1/2 lg:w-1/2">
                <BarChartPage />
              </div>
              <div className="w-full md:w-1/2 lg:w-1/2">
                <WaveGraphPage />
              </div>
            </div>
          </div>

          <div className="" style={{ minHeight: "100%" }}>
            {/* Right Sidebar */}
            <RightSidebar />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
