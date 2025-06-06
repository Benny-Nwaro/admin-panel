import React, { useState } from "react";
import Refunds from "./Refunds";
import TransactionsTable from "./TransactionsTable";
import Deposits from "./Deposits";
import WithDrawals from "./WithDrawals";

const RefundsTable: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Refunds");

  return (
    <div className="p-6 bg-white rounded-lg w-full mx-auto">
      {/* Tabs */}
      <div className="flex border-b mb-4">
        {["Payments", "Withdrawals", "Refunds", "Deposits"].map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 text-black transition-all ${
              activeTab === tab
                ? "border-b-2 border-black rounded-none text-blue-600 font-semibold"
                : "hover:text-blue-600"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Conditional Rendering Based on Active Tab */}
      {activeTab === "Refunds" && <Refunds/>}
      {activeTab === "Payments" && <TransactionsTable/>}
      {activeTab === "Withdrawals" && <WithDrawals/>}
      {activeTab === "Deposits" && <Deposits/>}
    </div>
  );
};

export default RefundsTable;
