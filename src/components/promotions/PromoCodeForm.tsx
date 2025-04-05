import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface PromoCodeFormProps {
  onClose: () => void;
}

interface FormData {
  title: string;
  percentage: string;
  users: string;
  maxUsage: string;
  startDate: string;
  endDate: string;
  type: "Registration" | "Referral";
  status: "Active" | "Inactive";
  details: string;
}

const PromoCodeForm: React.FC<PromoCodeFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    percentage: "",
    users: "",
    maxUsage: "",
    startDate: "",
    endDate: "",
    type: "Registration",
    status: "Active",
    details: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDetailsChange = (value: string) => {
    setFormData({ ...formData, details: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data:", formData);
    // Add your form submission logic here
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Setup Your Promo Code</h2>
          <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
            ✖
          </button>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Promo Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Enter Promo Title"
              value={formData.title}
              onChange={handleChange}
              className="mt-1 block w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="percentage" className="block text-sm font-medium text-gray-700">
              Promo Percentage
            </label>
            <input
              type="number"
              name="percentage"
              id="percentage"
              placeholder="Enter Promo Percentage"
              value={formData.percentage}
              onChange={handleChange}
              className="mt-1 block w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label htmlFor="users" className="block text-sm font-medium text-gray-700">
              Number of Users
            </label>
            <input
              type="number"
              name="users"
              id="users"
              placeholder="Enter Number of Users"
              value={formData.users}
              onChange={handleChange}
              className="mt-1 block w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="maxUsage" className="block text-sm font-medium text-gray-700">
              Max Usage
            </label>
            <input
              type="number"
              name="maxUsage"
              id="maxUsage"
              placeholder="Enter Max Usage"
              value={formData.maxUsage}
              onChange={handleChange}
              className="mt-1 block w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
              Start Date
            </label>
            <input
              type="date"
              name="startDate"
              id="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="mt-1 block w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
              End Date
            </label>
            <input
              type="date"
              name="endDate"
              id="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="mt-1 block w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700">
              Promotion Type
            </label>
            <select
              name="type"
              id="type"
              value={formData.type}
              onChange={handleChange}
              className="mt-1 block w-full border rounded px-3 py-2"
            >
              <option value="Registration">Registration</option>
              <option value="Referral">Referral</option>
            </select>
          </div>
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <select
              name="status"
              id="status"
              value={formData.status}
              onChange={handleChange}
              className="mt-1 block w-full border rounded px-3 py-2"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div className="mt-4 col-span-2">
            <label htmlFor="details" className="block text-sm font-medium text-gray-700">
              Promo Terms and Details
            </label>
            <ReactQuill
              value={formData.details}
              onChange={handleDetailsChange}
              className="mt-1 block w-full h-48"
            />
          </div>

          <div className="mt-4 text-center col-span-2">
            <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PromoCodeForm;
export type { PromoCodeFormProps };