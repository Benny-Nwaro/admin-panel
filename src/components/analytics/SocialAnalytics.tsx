import React from "react";
import SocialAnalyticsChart from "./SocialAnalyticsChart";
import SocialEngagementSummary from "./SocialEngagementSummary";
import SocialTrafficTable from "./SocialTrafficTable";

const SocialAnalytics: React.FC = () => {


  return (
    <div className="flex flex-col max-md:mt-10">
        <SocialEngagementSummary/>
      <SocialAnalyticsChart/>
        <SocialTrafficTable/>
     
    </div>
  );
};

export default SocialAnalytics;
