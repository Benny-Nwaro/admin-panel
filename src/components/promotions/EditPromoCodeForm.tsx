import { useState, useEffect } from "react";

interface Promo {
  name: string;
  percentage?: number;
  users?: number;
  maxUsage?: number;
  startDate: string;
  endDate: string;
  type?: "Registration" | "Referral";
  status: "Active" | "Inactive";
  details?: string;
}

interface EditPromoCodeFormProps {
  promo: Promo;
  onClose: () => void;
}

const EditPromoCodeForm: React.FC<EditPromoCodeFormProps> = ({ promo, onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    percentage: 0,
    users: 0,
    maxUsage: 0,
    startDate: "",
    endDate: "",
    type: "Registration" as "Registration" | "Referral",
    status: "Active" as "Active" | "Inactive",
    details: "",
  });

  useEffect(() => {
    if (promo) {
      setFormData({
        title: promo.name || "",
        percentage: promo.percentage ?? 0,
        users: promo.users ?? 0,
        maxUsage: promo.maxUsage ?? 0,
        startDate: promo.startDate || "",
        endDate: promo.endDate || "",
        type: promo.type || "Registration",
        status: promo.status,
        details: promo.details || "",
      });
    }
  }, [promo]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: ["percentage", "users", "maxUsage"].includes(name)
        ? Number(value)
        : value,
    }));
  };

  const handleSaveChanges = () => {
    console.log("Saving changes:", formData);
    // Save logic here
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-xl font-semibold mb-4">Edit Promo Code</h2>

        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter Promo Title"
            className="border rounded px-3 py-2 w-full"
          />
          <input
            type="number"
            name="percentage"
            value={formData.percentage}
            onChange={handleChange}
            placeholder="Enter Promo Percentage"
            className="border rounded px-3 py-2 w-full"
          />

          <input
            type="number"
            name="users"
            value={formData.users}
            onChange={handleChange}
            placeholder="Enter Number of Users"
            className="border rounded px-3 py-2 w-full"
          />
          <input
            type="number"
            name="maxUsage"
            value={formData.maxUsage}
            onChange={handleChange}
            placeholder="Enter Max Usage"
            className="border rounded px-3 py-2 w-full"
          />

          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
          />
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
          />

          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
          >
            <option value="Registration">Registration</option>
            <option value="Referral">Referral</option>
          </select>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <div className="mt-4">
          <textarea
            name="details"
            value={formData.details}
            onChange={handleChange}
            className="border rounded w-full px-3 py-2 h-24"
          />
        </div>

        <div className="mt-4 flex justify-between">
          <button
            className="border border-gray-400 text-gray-700 px-6 py-2 rounded"
            onClick={onClose}
          >
            Discard
          </button>
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
            onClick={handleSaveChanges}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPromoCodeForm;
