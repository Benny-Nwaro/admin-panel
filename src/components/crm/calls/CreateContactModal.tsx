"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";

export default function CreateContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [form, setForm] = useState({
    phone: "",
    firstName: "",
    lastName: "",
    contactType: "",
    email: "",
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <Dialog.Panel className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-xl z-50">
        <div className="flex justify-between items-center mb-4">
          <Dialog.Title className="text-xl font-semibold">Create new contact</Dialog.Title>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-500 hover:text-black" />
          </button>
        </div>

        <form className="space-y-4">
          <input
            type="tel"
            name="phone"
            placeholder="+234 484 062 2055"
            value={form.phone}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg font-semibold text-gray-900"
          />

          <div className="flex gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="Enter first name"
              value={form.firstName}
              onChange={handleChange}
              className="w-1/2 p-3 border rounded-lg"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Enter last name"
              value={form.lastName}
              onChange={handleChange}
              className="w-1/2 p-3 border rounded-lg"
            />
          </div>

          <div className="flex gap-4">
            <select
              name="contactType"
              value={form.contactType}
              onChange={handleChange}
              className="w-1/2 p-3 border rounded-lg text-gray-500"
            >
              <option value="">Select a contact type</option>
              <option value="personal">Personal</option>
              <option value="business">Business</option>
            </select>

            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              value={form.email}
              onChange={handleChange}
              className="w-1/2 p-3 border rounded-lg"
            />
          </div>

          <input
            type="text"
            name="address"
            placeholder="Enter contact address"
            value={form.address}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />

          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
            >
              Discard
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded-full bg-blue-500 text-white font-medium hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </form>
      </Dialog.Panel>
    </Dialog>
  );
}
