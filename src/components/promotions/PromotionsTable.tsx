"use client";
import { useEffect, useRef, useState } from "react";
import PromoCodeForm from "./PromoCodeForm";
import EditPromoCodeForm from "./EditPromoCodeForm";

export interface Promo {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  status: "Active" | "Inactive";
  percentage?: number;
  users?: number;
  maxUsage?: number;
  type?: "Registration" | "Referral";
  details?: string;
}

const initialPromotions: Promo[] = [
  { id: 1, name: "Register Promo", startDate: "2024-12-18", endDate: "2024-12-18", status: "Active" },
  { id: 2, name: "Register Promo", startDate: "2024-12-18", endDate: "2024-12-18", status: "Active" },
  { id: 3, name: "Register Promo", startDate: "2024-12-18", endDate: "2024-12-18", status: "Inactive" },
  { id: 4, name: "Register Promo", startDate: "2024-12-18", endDate: "2024-12-18", status: "Active" },
  { id: 5, name: "Register Promo", startDate: "2024-12-18", endDate: "2024-12-18", status: "Inactive" },
];

const PromotionsTable = () => {
  const [promotions, setPromotions] = useState<Promo[]>(initialPromotions);
  const [search, setSearch] = useState<string>("");
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [sortOption, setSortOption] = useState<string>("sort");
  const [showPromoForm, setShowPromoForm] = useState<boolean>(false);
  const [showEditPromoForm, setShowEditPromoForm] = useState<boolean>(false);
  const [editPromoData, setEditPromoData] = useState<Promo | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleEdit = (promo: Promo) => {
    setEditPromoData(promo);
    setShowEditPromoForm(true);
    setOpenDropdown(null);
  };

  const handleDelete = (id: number) => {
    setPromotions(promotions.filter((promo) => promo.id !== id));
    setOpenDropdown(null);
  };

  const filteredPromotions = promotions.filter((promo) =>
    promo.name.toLowerCase().includes(search.toLowerCase())
  );

  const sortedPromotions = [...filteredPromotions].sort((a, b) => {
    if (sortOption === "name") return a.name.localeCompare(b.name);
    if (sortOption === "date") return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
    return 0;
  });

  const tdRef = useRef<HTMLTableCellElement>(null);


  return (
    <div className="w-full p-6 bg-white shadow rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">PROMOTIONS</h2>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => setShowPromoForm(true)}
        >
          Create New Promo Code
        </button>
      </div>

      {showPromoForm && <PromoCodeForm onClose={() => setShowPromoForm(false)} />}
      {showEditPromoForm && editPromoData && (
        <EditPromoCodeForm promo={editPromoData} onClose={() => {
          setShowEditPromoForm(false);
          setEditPromoData(null);
        }} />
      )}

      <div className="flex justify-between items-center mb-4">
        <select
          className="border rounded px-3 py-2"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="sort">Sort</option>
          <option value="name">Name</option>
          <option value="date">Date</option>
        </select>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-400 rounded px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />

      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">#</th>
              <th className="p-3">Name</th>
              <th className="p-3">Start Date</th>
              <th className="p-3">End Date</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedPromotions.map((promo) => (
              <tr key={promo.id} className="border-b even:bg-blue-50">
                <td className="p-3 font-semibold">{promo.id}</td>
                <td className="p-3 font-semibold">{promo.name}</td>
                <td className="p-3">{promo.startDate}</td>
                <td className="p-3">{promo.endDate}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded text-white text-sm ${
                      promo.status === "Active" ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {promo.status}
                  </span>
                </td>
                <td className="p-3 relative" ref={tdRef}>
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    onClick={() =>
                      setOpenDropdown(openDropdown === promo.id ? null : promo.id)
                    }
                  >
                    Actions ▼
                  </button>
                  {openDropdown === promo.id && (
                    <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg z-50">
                      <button
                        className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                        onClick={() => handleEdit(promo)}
                      >
                        Edit
                      </button>
                      <button
                        className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-red-500"
                        onClick={() => handleDelete(promo.id)}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PromotionsTable;
