import React from "react";

const SocialTrafficTable: React.FC = () => {
  const data = [
    { platform: "Facebook", visitors: "500K", clicks: "25K", ctr: "15.0%" },
    { platform: "X", visitors: "2.75M", clicks: "375K", ctr: "65.0%" },
    { platform: "Instagram", visitors: "2.6M", clicks: "1.25M", ctr: "122.5%" },
    { platform: "Youtube", visitors: "800K", clicks: "450K", ctr: "90.0%" },
    { platform: "LinkedIn", visitors: "450K", clicks: "1.75M", ctr: "22.5%" },
    { platform: "Pinterest", visitors: "3.2M", clicks: "112K", ctr: "107.5%" },
    { platform: "Trustpilot", visitors: "1.5M", clicks: "1.2M", ctr: "72.5%" },
    { platform: "Google", visitors: "1.2M", clicks: "750K", ctr: "95.0%" },
  ];

  return (
    <div className="py-4 bg-white shadow-lg mt-4 rounded-lg w-full h-fit max-md:w-full max-md:px-3">
      {/* Header */}
      <div className="flex justify-between items-center bg-gray-200 pb-4 px-4">
        <h2 className="text-lg font-semibold text-gray-700">Social Traffic</h2>
        <button className="bg-blue-500 text-white px-3 py-1.5 rounded-md text-sm flex items-center">
          📅 Jan 2024 - Jun 2024 ▼
        </button>
      </div>

      {/* Data List */}
      <div className="overflow-x-auto">
        <div className="w-full">
          {/* Header Row (for larger screens) */}
          <div className="bg-gray-100 text-gray-600 text-left hidden sm:grid grid-cols-4 p-4">
            <div className="font-semibold">Platform</div>
            <div className="font-semibold">Visitors</div>
            <div className="font-semibold">Clicks</div>
            <div className="font-semibold">Clickthrough Rate</div>
          </div>

          {/* Data Rows */}
          {data.map((row, index) => (
            <div
              key={index}
              className="border-b hover:bg-gray-50 transition-colors p-4 sm:grid grid-cols-4"
            >
              {/* Mobile View (Stacked) */}
              <div className="flex justify-between sm:block">
                <div className="text-gray-600 sm:hidden font-semibold mr-2">Platform:</div>
                <div>{row.platform}</div>
              </div>
              <div className="flex justify-between sm:block">
                <div className="text-gray-600 sm:hidden font-semibold mr-2">Visitors:</div>
                <div>{row.visitors}</div>
              </div>
              <div className="flex justify-between sm:block">
                <div className="text-gray-600 sm:hidden font-semibold mr-2">Clicks:</div>
                <div>{row.clicks}</div>
              </div>
              <div className="flex justify-between sm:block">
                <div className="text-gray-600 sm:hidden font-semibold mr-2">CTR:</div>
                <div>{row.ctr}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialTrafficTable;