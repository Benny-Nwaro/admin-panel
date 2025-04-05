import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { FaTrash } from "react-icons/fa";

const EditBlogPost: React.FC = () => {
  const [title, setTitle] = useState("Lorem ipsum dolor sit amet");
  const [description, setDescription] = useState(
    "Lorem ipsum dolor sit amet consectetur. Ridiculus mi id pulvinar maecenas arcu. Arcu ornare nisl porta facilisi."
  );
  const [images, setImages] = useState([
    { id: 1, name: "Image1.png", url: "https://via.placeholder.com/100" },
    { id: 2, name: "Image2.png", url: "https://via.placeholder.com/100" },
    { id: 3, name: "Image3.png", url: "https://via.placeholder.com/100" },
    { id: 4, name: "Image4.png", url: "https://via.placeholder.com/100" },
  ]);

  // Remove an image from the list
  const removeImage = (id: number) => {
    setImages(images.filter((img) => img.id !== id));
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Edit Blog Post</h2>

      {/* Blog Title Input */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">Blog Title</label>
        <input
          type="text"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {/* Image Upload Section */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">Image</label>
        <p className="text-sm text-gray-500 mb-2">
          Supported formats: JPG, JPEG, WEBP, PNG
        </p>
        <div className="flex gap-4">
          {images.map((img) => (
            <div key={img.id} className="relative group">
              <img
                src={img.url}
                alt={img.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <button
                onClick={() => removeImage(img.id)}
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition rounded-lg"
              >
                <FaTrash className="text-white text-xl" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">Description</label>
        <ReactQuill
          className="bg-white"
          theme="snow"
          value={description}
          onChange={setDescription}
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-4">
        <button className="border border-gray-400 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-100">
          Discard
        </button>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
          Submit
        </button>
      </div>
    </div>
  );
};

export default EditBlogPost;
