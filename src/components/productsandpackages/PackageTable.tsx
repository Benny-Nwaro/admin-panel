import React from "react";

const packages = [
  { id: 1, name: "Adenekan Aleem", percentage: "50%", duration: "60 Mins", status: "Inactive", date: "18 / 12 / 2024", offers: 10 },
  { id: 2, name: "Bekwa Undie", percentage: "5%", duration: "90 Mins", status: "Active", date: "18 / 12 / 2024", offers: 10 },
  { id: 3, name: "Apantaku Olamide", percentage: "35%", duration: "20 Mins", status: "Inactive", date: "18 / 12 / 2024", offers: 10 },
  { id: 4, name: "Ayomide Blacko", percentage: "100%", duration: "15 Mins", status: "Active", date: "18 / 12 / 2024", offers: 10 },
  { id: 5, name: "John Doe", percentage: "10%", duration: "30 Mins", status: "Active", date: "18 / 12 / 2024", offers: 10 },
  { id: 6, name: "James Brown", percentage: "75%", duration: "6 Mins", status: "Inactive", date: "18 / 12 / 2024", offers: 10 }
];

const PackageTable: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Manage Packages</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Create New Package</button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="py-2 px-4 text-left">Names</th>
              <th className="py-2 px-4">Percentage</th>
              <th className="py-2 px-4">Duration</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Date Created</th>
              <th className="py-2 px-4">Offers</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {packages.map((pkg, index) => (
              <tr
                key={pkg.id}
                className={`border-b ${index % 2 === 0 ? "bg-blue-50" : ""}`}
              >
                <td className="py-2 px-4 font-medium">{pkg.name}</td>
                <td className="py-2 px-4 text-center">{pkg.percentage}</td>
                <td className="py-2 px-4 text-center">{pkg.duration}</td>
                <td className="py-2 px-4 text-center">
                  <span
                    className={`px-3 py-1 rounded-full text-white text-sm font-semibold ${pkg.status === "Active" ? "bg-green-500" : "bg-red-500"}`}
                  >
                    {pkg.status}
                  </span>
                </td>
                <td className="py-2 px-4 text-center">{pkg.date}</td>
                <td className="py-2 px-4 text-center">{pkg.offers}</td>
                <td className="py-2 px-4 text-center">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded-md">Actions</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PackageTable;
