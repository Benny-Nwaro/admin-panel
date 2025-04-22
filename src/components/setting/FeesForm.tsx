// components/FeesForm.tsx
'use client';

import { useState } from 'react';

export default function FeesForm() {
  const [formData, setFormData] = useState({
    teacherFees: '60',
    studentAdditionalFees: '20',
    adminFees: '60',
    courseDiscount: '5',
    lessonDiscount: '0',
    commissionOnTravel: '10',
    hourlyLessonLimit: '50',
    travelChargeLimit: '2',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Submit logic here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full mb-8 mx-auto p-6 bg-white rounded-md border border-gray-200 shadow-sm"
    >
      <h2 className="text-xl font-semibold mb-6">Fees</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Teacher Fees (%)</label>
          <input
            name="teacherFees"
            value={formData.teacherFees}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Student Additional Fees (%)</label>
          <input
            name="studentAdditionalFees"
            value={formData.studentAdditionalFees}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Admin Fees (%)</label>
          <input
            name="adminFees"
            value={formData.adminFees}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Course Discount (%)</label>
          <input
            name="courseDiscount"
            value={formData.courseDiscount}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Lesson Discount (%)</label>
          <input
            name="lessonDiscount"
            value={formData.lessonDiscount}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Commission on teacher travel fees (%)</label>
          <input
            name="commissionOnTravel"
            value={formData.commissionOnTravel}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Hourly Lesson Price Limit (USD)</label>
          <input
            name="hourlyLessonLimit"
            value={formData.hourlyLessonLimit}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Travel Charge Limit (USD per KM)</label>
          <input
            name="travelChargeLimit"
            value={formData.travelChargeLimit}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
        </div>
      </div>

      <div className="mt-8 text-center">
        <button
          type="submit"
          className="bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-all duration-200"
        >
          ✓ Save Changes
        </button>
      </div>
    </form>
  );
}
