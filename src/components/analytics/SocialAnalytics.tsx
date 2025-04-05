import React from "react";
import SocialAnalyticsChart from "./SocialAnalyticsChart";
import SocialEngagementSummary from "./SocialEngagementSummary";
import SocialTrafficTable from "./SocialTrafficTable";

const SocialAnalytics: React.FC = () => {


  return (
    <div className="flex flex-col lg:px-12 max-md:mt-10">
        <div>
        <SocialEngagementSummary/>
        </div>
      <div className="flex flex-row lg:w-full max-md:flex-col">
      <SocialAnalyticsChart/>
        <SocialTrafficTable/>
      </div>
     
    </div>
  );
};

export default SocialAnalytics;
