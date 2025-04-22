// components/PromotionForm.tsx
'use client';

import { useState } from 'react';

type PromotionFormProps = {
  title: string;
  defaultValues: {
    discount: string;
    promoTitle: string;
    maxUsagePerStudent: string;
    maxDurationDays: string;
    details: string;
    maxStudentsPerCode: string;
    terms: string;
  };
};

export default function PromotionForm({ title, defaultValues }: PromotionFormProps) {
  const [formData, setFormData] = useState(defaultValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`${title} Form Submitted:`, formData);
    // Add form submission logic here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full mb-8 mx-auto p-6 bg-white rounded-md border border-gray-200 shadow-sm"
    >
      <h2 className="text-xl font-semibold mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Discount (%)</label>
          <input
            name="discount"
            value={formData.discount}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            name="promoTitle"
            value={formData.promoTitle}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Max number of usage for each student</label>
          <input
            name="maxUsagePerStudent"
            value={formData.maxUsagePerStudent}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Max duration in days</label>
          <input
            name="maxDurationDays"
            value={formData.maxDurationDays}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Details</label>
          <input
            name="details"
            value={formData.details}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Max number of students for each referral code</label>
          <input
            name="maxStudentsPerCode"
            value={formData.maxStudentsPerCode}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Terms of usage</label>
          <input
            name="terms"
            value={formData.terms}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
        </div>
      </div>

      <div className="mt-8 text-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-all duration-200"
        >
          ✓ Save Changes
        </button>
      </div>
    </form>
  );
}
