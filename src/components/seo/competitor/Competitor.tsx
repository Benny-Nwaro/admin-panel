import React from "react";
import MonthlyTrafficChart from "./MonthlyTrafficChart";
import CompetitorTable from "./CompetitorTable";
import CompetitorAnalysis from "./CompetitorAnalysis";



const Competitor: React.FC = () => {
  return (
    <div>
        <CompetitorAnalysis/>
        <MonthlyTrafficChart/>
        <CompetitorTable/>
    </div>

  );
};

export default Competitor;
