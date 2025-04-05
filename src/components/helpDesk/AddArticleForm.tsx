import React, { useState } from "react";

const AddArticleForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        Add New Article
      </h2>

      {/* Header Section */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-800 mb-2">Header</h3>
        <label className="block text-gray-600 mb-1">Blog Title</label>
        <input
          type="text"
          placeholder="Enter title"
          className="w-full p-3 border rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-blue-400"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {/* Image Upload Section */}
      <div className="mb-6">
        <label className="block text-gray-600 mb-1">Image</label>
        <div className="border-2 border-dashed border-gray-300 p-6 rounded-lg text-center">
          {image ? (
            <p className="text-gray-700">{image.name}</p>
          ) : (
            <>
              <label className="cursor-pointer text-blue-500 font-semibold">
                <input
                  type="file"
                  className="hidden"
                  accept="image/png, image/jpeg, image/webp"
                  onChange={handleImageUpload}
                />
                Select image
              </label>
              <p className="text-gray-500 text-sm mt-1">
                or Drag and drop image here
              </p>
              <p className="text-gray-400 text-xs">
                Supported formats: JPG, JPEG, WEBP, PNG
              </p>
            </>
          )}
        </div>
      </div>

      {/* Body Section */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-800 mb-2">Body</h3>
        <label className="block text-gray-600 mb-1">Body text</label>
        <textarea
          placeholder="Input text here"
          className="w-full p-3 border rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-blue-400"
          rows={4}
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-between">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition">
          Submit
        </button>
        <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg shadow-md hover:bg-gray-300 transition">
          Preview
        </button>
      </div>
    </div>
  );
};

export default AddArticleForm;
