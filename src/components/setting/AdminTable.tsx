'use client';

import { useState } from 'react';
import AddAdminModal from './AddAdminModal';
import BasicSettings from './BasicSettings';
import SettingsMenu from './SettingsMenu';

const mockAdmins = [
  {
    name: 'Idowu Matthew',
    email: 'idowumatthewbakare@gmail.com',
    role: 'Blog Admin',
    number: '+2348082154285',
  },
  {
    name: 'Idowu Matthew',
    email: 'idowumatthewbakare@gmail.com',
    role: 'Admin',
    number: '+2348082154285',
  },
  {
    name: 'Idowu Matthew',
    email: 'idowumatthewbakare@gmail.com',
    role: 'Super Admin',
    number: '+2348082154285',
  },
  {
    name: 'Idowu Matthew',
    email: 'idowumatthewbakare@gmail.com',
    role: 'Blog Admin',
    number: '+2348082154285',
  },
  {
    name: 'Idowu Matthew',
    email: 'idowumatthewbakare@gmail.com',
    role: 'Admin',
    number: '+2348082154285',
  },
  {
    name: 'Idowu Matthew',
    email: 'idowumatthewbakare@gmail.com',
    role: 'Super Admin',
    number: '+2348082154285',
  },
  {
    name: 'Idowu Matthew',
    email: 'idowumatthewbakare@gmail.com',
    role: 'Blog Admin',
    number: '+2348082154285',
  },
  {
    name: 'Idowu Matthew',
    email: 'idowumatthewbakare@gmail.com',
    role: 'Admin',
    number: '+2348082154285',
  },
  {
    name: 'Idowu Matthew',
    email: 'idowumatthewbakare@gmail.com',
    role: 'Super Admin',
    number: '+2348082154285',
  }
  // Add more as needed
];

const tabs = ['Admin List', 'Basic Settings', 'Account Settings'];

export default function AdminTable() {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('Admin List');
  const [sortAsc, setSortAsc] = useState(true);
  const [dropdownIndex, setDropdownIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const filteredAdmins = mockAdmins
    .filter((admin) =>
      admin.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) =>
      sortAsc
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

  return (
    <div className="p-6 bg-white rounded-xl shadow-md w-full mx-auto mt-10">
      {/* Tabs */}
      <div className="flex space-x-6 border-b pb-3 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-sm font-medium ${
              activeTab === tab
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-blue-600'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'Admin List' && (
        <>
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setSortAsc((prev) => !prev)}
                className="border rounded-md px-3 py-2 text-sm text-gray-600"
              >
                Sort {sortAsc ? '▲' : '▼'}
              </button>
              <input
                type="text"
                placeholder="Search"
                className="px-3 py-2 border rounded-md text-sm w-60"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600">
              Add New Admin
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="text-gray-500 border-b">
                  <th className="py-2 px-4">#</th>
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Email</th>
                  <th className="py-2 px-4">Role</th>
                  <th className="py-2 px-4">Number</th>
                  <th className="py-2 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredAdmins.map((admin, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? 'bg-blue-50' : 'bg-white'}
                  >
                    <td className="py-3 px-4">{index + 1}</td>
                    <td className="py-3 px-4 font-semibold">{admin.name}</td>
                    <td className="py-3 px-4">{admin.email}</td>
                    <td className="py-3 px-4">{admin.role}</td>
                    <td className="py-3 px-4">{admin.number}</td>
                    <td className="py-3 px-4 text-right relative">
                      <button
                        onClick={() =>
                          setDropdownIndex((prev) =>
                            prev === index ? null : index
                          )
                        }
                        className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-600"
                      >
                        Actions ▼
                      </button>
                      {dropdownIndex === index && (
                        <div className="absolute right-0 mt-2 w-36 bg-white shadow-lg rounded-md text-sm z-10">
                          <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                            Edit
                          </button>
                          <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
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
        </>
      )}

      {activeTab === 'Basic Settings' && (
        <BasicSettings/>
      )}

      {activeTab === 'Account Settings' && (
        <SettingsMenu/>
      )}


    {isModalOpen && (
        <AddAdminModal/>
      )}
    </div>
  );
}
