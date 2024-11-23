import React from 'react'
import Card from '../Card/Card';
import DoughnutChartPage from "../../pages/Charts/DoughnutChartPage";
import MultiBarChartPage from '../../pages/Charts/MultiBarChartPage';
import VerticalMultiGraph from '../../pages/Charts/VerticalMultiGraphPage';
import { tableData } from '../../data/TableData';
import Leaderboard from '../LearderBoard/LeaderBoard';

const RightSidebar = () => {
  return (
    <>
      <div className="shadow-md  mr-3 mt-3  " style={{ minHeight: "100%" }}>
        <div className="">
          <Leaderboard data={tableData} />
        </div>
        <div className="min-h-40 overflow-auto">
          {/* <MultiBarChartPage /> */}
          <DoughnutChartPage />
          {/* <VerticalMultiGraph /> */}
        </div>
      </div>
    </>
  );
}

export default RightSidebar