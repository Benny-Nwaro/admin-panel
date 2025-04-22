import { useState } from "react";

export default function AddAdminModal() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    role: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting:", formData);
    // Add your API call here
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-2xl w-full max-w-3xl p-6 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Add New Admin</h2>
          <button className="text-gray-400 hover:text-gray-600 text-xl">&times;</button>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Admin Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
              required
            >
              <option value="">Select Admin Role</option>
              <option value="super">Super Admin</option>
              <option value="moderator">Moderator</option>
              <option value="editor">Editor</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
              required
            />
          </div>

          <div className="col-span-1 md:col-span-2 mt-4 text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
