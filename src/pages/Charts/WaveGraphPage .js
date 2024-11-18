// src/pages/WaveGraphPage.js

import React from "react";
import WaveGraph from './../../components/graphs/WaveGraph';
const WaveGraphPage = () => {
  return (
    <div className="mt-4">
      <h2 className="text-lg font-bold text-center mb-1">Trips Per Month</h2>
      {/* Render the WaveGraph component */}
      <WaveGraph />
    </div>
  );
};

export default WaveGraphPage;
