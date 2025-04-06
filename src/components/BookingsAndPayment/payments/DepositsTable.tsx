import React from "react";

type Deposit = {
  id: number;
  sender: string;
  receiver: string;
  method: string;
  amount: number;
  date: string; // Format as ISO string or any preferred date format
  status: "Pending" | "Completed" | "Failed"; // Or any other statuses
};

const DepositsTable: React.FC = () => {
  const deposits: Deposit[] = []; // Empty array to simulate no deposits

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-5xl mx-auto">
      {/* Table */}
      <div className="border rounded-lg overflow-hidden">
        <table className="w-full border-collapse">
          {/* Table Header */}
          <thead>
            <tr className="text-left text-gray-500 text-sm border-b">
              <th className="px-4 py-2">Sender</th>
              <th className="px-4 py-2">Receiver</th>
              <th className="px-4 py-2">Method</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Date Created</th>
              <th className="px-4 py-2">Amount</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {deposits.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-4 py-3 text-center bg-blue-100 rounded-lg">
                  <span className="font-semibold text-gray-700">No Current Deposits</span>
                </td>
              </tr>
            ) : (
              deposits.map((deposit) => (
                <tr key={deposit.id} className="border-b">
                  <td className="px-4 py-3">{deposit.sender}</td>
                  <td className="px-4 py-3">{deposit.receiver}</td>
                  <td className="px-4 py-3">{deposit.method}</td>
                  <td className="px-4 py-3">{deposit.status}</td>
                  <td className="px-4 py-3">{deposit.date}</td>
                  <td className="px-4 py-3">{deposit.amount}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DepositsTable;
