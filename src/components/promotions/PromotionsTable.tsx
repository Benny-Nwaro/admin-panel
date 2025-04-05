import { useState } from "react";
import PromoCodeForm from "./PromoCodeForm";
import EditPromoCodeForm from "./EditPromoCodeForm";

const initialPromotions = [
  { id: 1, name: "Register Promo", startDate: "18/12/2024", endDate: "18/12/2024", status: "Active" },
  { id: 2, name: "Register Promo", startDate: "18/12/2024", endDate: "18/12/2024", status: "Active" },
  { id: 3, name: "Register Promo", startDate: "18/12/2024", endDate: "18/12/2024", status: "Inactive" },
  { id: 4, name: "Register Promo", startDate: "18/12/2024", endDate: "18/12/2024", status: "Active" },
  { id: 5, name: "Register Promo", startDate: "18/12/2024", endDate: "18/12/2024", status: "Inactive" },
];

const PromotionsTable = () => {
  const [promotions, setPromotions] = useState(initialPromotions);
  const [search, setSearch] = useState("");
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [sortOption, setSortOption] = useState("sort");
  const [showPromoForm, setShowPromoForm] = useState(false);
  const [showEditPromoForm, setShowEditPromoForm] = useState(false); // Added state
  const [editPromoData, setEditPromoData] = useState<any>(null); // Added state

  const handleOpenDropdown = (id: number) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const handleCloseDropdown = () => {
    setOpenDropdown(null);
  };

  const handleEdit = (promo: any) => {
    setEditPromoData(promo); // Set the promo data to be edited
    setShowEditPromoForm(true); // Show the edit form
    handleCloseDropdown();
  };

  const handleDelete = (id: number) => {
    const updatedPromotions = promotions.filter((promo) => promo.id !== id);
    setPromotions(updatedPromotions);
    handleCloseDropdown();
  };

  const filteredPromotions = promotions.filter((promo) =>
    promo.name.toLowerCase().includes(search.toLowerCase())
  );

  const sortedPromotions = [...filteredPromotions].sort((a, b) => {
    if (sortOption === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortOption === "date") {
      return a.startDate.localeCompare(b.startDate);
    }
    return 0;
  });

  const handleCreatePromo = () => {
    setShowPromoForm(true);
  };

  const handleClosePromoForm = () => {
    setShowPromoForm(false);
  };

  const handleCloseEditPromoForm = () => {
    setShowEditPromoForm(false);
    setEditPromoData(null); // Clear the edit data
  };

  return (
    <div className="w-full p-6 bg-white shadow rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">PROMOTIONS</h2>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleCreatePromo}
        >
          Create New Promo Code
        </button>
      </div>

      {showPromoForm && <PromoCodeForm onClose={handleClosePromoForm} />}

      {showEditPromoForm && (
        <EditPromoCodeForm promo={editPromoData} onClose={handleCloseEditPromoForm} />
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
          className="border rounded px-3 py-2 w-64"
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
                  <span className={`px-3 py-1 rounded text-white text-sm ${
                    promo.status === "Active" ? "bg-green-500" : "bg-red-500"
                  }`}>
                    {promo.status}
                  </span>
                </td>
                <td className="p-3 relative">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    onClick={() => handleOpenDropdown(promo.id)}
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