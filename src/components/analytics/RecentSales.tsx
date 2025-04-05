import React from "react";

const salesData = [
  {
    id: 1,
    billFrom: "Ahmed Musa",
    billTo: "Olumide Adebayo",
    date: "14/05/2020",
    details: "Handwriting",
    amount: "₦150,000",
    status: "Failed",
    fromAvatar: "https://i.pravatar.cc/40?u=1",
    avatarTo: "https://i.pravatar.cc/40?u=2"
  },
  {
    id: 2,
    billFrom: "Chinyere Adaobi",
    billTo: "Ifeanyichukwu Okonkwo",
    date: "16/03/2020",
    details: "Life Lab or gardening",
    amount: "₦70,000",
    status: "Pending",
    fromAvatar: "https://i.pravatar.cc/40?u=1",
    avatarTo: "https://i.pravatar.cc/40?u=2"

  },
  {
    id: 3,
    billFrom: "Ayebatari Temitope",
    billTo: "Chizoba Isaac",
    date: "06/03/2020",
    details: "Dramatics",
    amount: "₦150,000",
    status: "Paid",
    fromAvatar: "https://i.pravatar.cc/40?u=1",
    avatarTo: "https://i.pravatar.cc/40?u=2"

  },
  {
    id: 4,
    billFrom: "Ahmed Musa",
    billTo: "Olumide Adebayo",
    date: "14/05/2020",
    details: "Handwriting",
    amount: "₦150,000",
    status: "Failed",
    fromAvatar: "https://i.pravatar.cc/40?u=1",
    avatarTo: "https://i.pravatar.cc/40?u=2"

  },
  {
    id: 5,
    billFrom: "Chinyere Adaobi",
    billTo: "Ifeanyichukwu Okonkwo",
    date: "16/03/2020",
    details: "Life Lab or gardening",
    amount: "₦70,000",
    status: "Pending",
    fromAvatar: "https://i.pravatar.cc/40?u=1",
    avatarTo: "https://i.pravatar.cc/40?u=2"

  },
  {
    id: 6,
    billFrom: "Ayebatari Temitope",
    billTo: "Chizoba Isaac",
    date: "06/03/2020",
    details: "Dramatics",
    amount: "₦150,000",
    status: "Paid",
    fromAvatar: "https://i.pravatar.cc/40?u=1",
    avatarTo: "https://i.pravatar.cc/40?u=2"

  },
  {
    id: 7,
    billFrom: "Ahmed Musa",
    billTo: "Olumide Adebayo",
    date: "14/05/2020",
    details: "Handwriting",
    amount: "₦150,000",
    status: "Failed",
    fromAvatar: "https://i.pravatar.cc/40?u=1",
    avatarTo: "https://i.pravatar.cc/40?u=2"

  },
  {
    id: 8,
    billFrom: "Chinyere Adaobi",
    billTo: "Ifeanyichukwu Okonkwo",
    date: "16/03/2020",
    details: "Life Lab or gardening",
    amount: "₦70,000",
    status: "Pending",
    fromAvatar: "https://i.pravatar.cc/40?u=1",
    avatarTo: "https://i.pravatar.cc/40?u=2"

  },
  {
    id: 9,
    billFrom: "Ayebatari Temitope",
    billTo: "Chizoba Isaac",
    date: "06/03/2020",
    details: "Dramatics",
    amount: "₦150,000",
    status: "Paid",
    fromAvatar: "https://i.pravatar.cc/40?u=1",
    avatarTo: "https://i.pravatar.cc/40?u=2"

  },
];

const statusColors: Record<string, string> = {
  Paid: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Failed: "bg-red-100 text-red-700",
};

const RecentSales: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Recent Sales</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 text-left text-sm font-semibold">SN</th>
              <th className="p-3 text-left text-sm font-semibold">Bill From</th>
              <th className="p-3 text-left text-sm font-semibold">Bill To</th>
              <th className="p-3 text-left text-sm font-semibold">Date</th>
              <th className="p-3 text-left text-sm font-semibold">Details</th>
              <th className="p-3 text-left text-sm font-semibold">Amount</th>
              <th className="p-3 text-left text-sm font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {salesData.map((sale) => (
              <tr key={sale.id} className="border-b">
                <td className="p-3 text-sm">{sale.id}</td>
                <td className="p-3 text-sm flex flex-row "><img src={sale.fromAvatar} className="rounded-full w-8 mr-3"/> {sale.billFrom}</td>
                <td className="p-3 text-sm"><img src={sale.avatarTo} className="rounded-full w-8 mr-3 float-start"/>{sale.billTo}</td>
                <td className="p-3 text-sm">{sale.date}</td>
                <td className="p-3 text-sm">{sale.details}</td>
                <td className="p-3 text-sm font-semibold">{sale.amount}</td>
                <td className="p-3 text-sm">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[sale.status]}`}>
                    {sale.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-between items-center text-sm">
        <span>Showing page 1 of 5</span>
        <div className="space-x-2">
          <button className="px-2 py-1 border rounded">◀</button>
          {[1, 2, 3, 4, 5].map((num) => (
            <button key={num} className={`px-3 py-1 border rounded ${num === 1 ? "bg-blue-500 text-white" : ""}`}>{num}</button>
          ))}
          <button className="px-2 py-1 border rounded">▶</button>
        </div>
      </div>
    </div>
  );
};

export default RecentSales;
