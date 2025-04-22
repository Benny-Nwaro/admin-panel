"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
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

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDetailsChange = (value: string) => {
    setFormData({ ...formData, details: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data:", formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Setup Your Promo Code</h2>
          <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
            ✖
          </button>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <FormInput label="Promo Title" name="title" value={formData.title} onChange={handleChange} />
          <FormInput
            label="Promo Percentage"
            name="percentage"
            type="number"
            value={formData.percentage}
            onChange={handleChange}
          />
          <FormInput
            label="Number of Users"
            name="users"
            type="number"
            value={formData.users}
            onChange={handleChange}
          />
          <FormInput
            label="Max Usage"
            name="maxUsage"
            type="number"
            value={formData.maxUsage}
            onChange={handleChange}
          />
          <FormInput
            label="Start Date"
            name="startDate"
            type="date"
            value={formData.startDate}
            onChange={handleChange}
          />
          <FormInput
            label="End Date"
            name="endDate"
            type="date"
            value={formData.endDate}
            onChange={handleChange}
          />

          <FormSelect
            label="Promotion Type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            options={["Registration", "Referral"]}
          />
          <FormSelect
            label="Status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            options={["Active", "Inactive"]}
          />

          <div className="mt-4 col-span-2">
            <label className="block text-sm font-medium text-gray-700">Promo Terms and Details</label>
            <ReactQuill
              value={formData.details}
              onChange={handleDetailsChange}
              className="mt-1 block w-full h-48 outline outline-2 outline-gray-300 focus:outline-blue-500"
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

// Reusable Input Component
const FormInput = ({
  label,
  name,
  type = "text",
  value,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      type={type}
      name={name}
      id={name}
      placeholder={`Enter ${label}`}
      value={value}
      onChange={onChange}
      className="mt-1 block w-full border rounded px-3 py-2 outline outline-2 outline-gray-300 focus:outline-blue-500"
    />
  </div>
);

// Reusable Select Component
const FormSelect = ({
  label,
  name,
  value,
  onChange,
  options,
}: {
  label: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  options: string[];
}) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <select
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      className="mt-1 block w-full border rounded px-3 py-2 outline outline-2 outline-gray-300 focus:outline-blue-500"
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

export default PromoCodeForm;
export type { PromoCodeFormProps };
