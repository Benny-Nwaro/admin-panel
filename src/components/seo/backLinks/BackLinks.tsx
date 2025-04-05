import React from "react";
import StatsSection from "./StatsSection";
import TableComponent from "./TableComponent";
import BacklinksChart from "./BacklinksChart";


const BackLinks: React.FC = () => {
  return (
   <div>
    <StatsSection/>
    <BacklinksChart/>
    <TableComponent/>

   </div>
  );
};

export default BackLinks;
