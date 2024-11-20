import React from 'react'
import Card from '../Card/Card';
import DoughnutChartPage from "../../pages/Charts/DoughnutChartPage";
import MultiBarChartPage from '../../pages/Charts/MultiBarChartPage';
import VerticalMultiGraph from '../../pages/Charts/VerticalMultiGraphPage';

const RightSidebar = () => {
  return (
    <>
      <div className="shadow-md  mr-3  " style={{minHeight:"100%"}}>
        <div className="">
          <Card
            bgColor="bg-yellow-50"
            styles="text-center"
            title="Total Tips"
            subtitle="Best"
            price={99.99}
            hit="Limited Offer!"
            image="https://via.placeholder.com/150"
          />
        </div>
        <div className="min-h-40 overflow-auto">
          <MultiBarChartPage />
          <DoughnutChartPage />
          <VerticalMultiGraph />
        </div>
      </div>
    </>
  );
}

export default RightSidebar