import React, { useState } from "react";

const EditCategory = () => {
  const [active, setActive] = useState(true);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">EDIT CATEGORY</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Hero Section */}
        <div>
          <h3 className="text-lg font-bold">Hero Section</h3>
          <label className="block text-sm mt-2">Name</label>
          <input
            type="text"
            placeholder="Enter Category Name"
            className="w-full border p-2 rounded mt-1"
          />
          
          <label className="block text-sm mt-2">Description</label>
          <textarea
            placeholder="Enter a description of this subject"
            className="w-full border p-2 rounded mt-1 h-24"
          ></textarea>
          
          <label className="block text-sm mt-2">Image</label>
          <div className="w-full h-40 bg-gray-200 rounded mt-2 flex items-center justify-center">
            <span className="text-gray-500">Image Placeholder</span>
          </div>
          
          <div className="flex items-center mt-4">
            <span className="mr-2">Active</span>
            <button
              onClick={() => setActive(!active)}
              className={`w-10 h-5 flex items-center rounded-full p-1 transition-all ${active ? "bg-green-500" : "bg-gray-300"}`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full shadow-md transform ${active ? "translate-x-5" : "translate-x-0"}`}
              ></div>
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div>
          <h3 className="text-lg font-bold">CTA Section</h3>
          <label className="block text-sm mt-2">Header</label>
          <input
            type="text"
            placeholder="Enter a header for the CTA section"
            className="w-full border p-2 rounded mt-1"
          />
          
          <label className="block text-sm mt-2">CTA Description</label>
          <textarea
            placeholder="Enter a description for the CTA section"
            className="w-full border p-2 rounded mt-1 h-24"
          ></textarea>
          
          <label className="block text-sm mt-2">CTA Image</label>
          <div className="w-full h-40 bg-gray-200 rounded mt-2 flex items-center justify-center">
            <span className="text-gray-500">Image Placeholder</span>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-6 space-x-4">
        <button className="bg-blue-500 text-white px-6 py-2 rounded shadow">Submit</button>
        <button className="border px-6 py-2 rounded shadow">Preview</button>
      </div>
    </div>
  );
};

export default EditCategory;
