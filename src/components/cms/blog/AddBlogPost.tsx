import React, { useState } from "react";
import { FaUpload, FaTimes } from "react-icons/fa"; // Import FaTimes for close button
import Image from "next/image";

interface Blog {
  id: number;
  title: string;
  description: string;
  status: "Pending" | "Approved" | "Declined";
  dateCreated: string;
  image: string | null;
}

interface AddBlogPostProps {
  onAddBlog: (newBlog: Blog) => void;
  onClose: () => void; // Add onClose prop
}

const AddBlogPost: React.FC<AddBlogPostProps> = ({ onAddBlog, onClose }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [titleError, setTitleError] = useState<string | null>(null);
  const [bodyError, setBodyError] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedImage = e.target.files[0];
      setImagePreview(URL.createObjectURL(selectedImage));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title) {
      setTitleError("Title is required");
      return;
    } else {
      setTitleError(null);
    }

    if (!body) {
      setBodyError("Body content is required");
      return;
    } else {
      setBodyError(null);
    }

    const newBlog: Blog = {
      id: Date.now(),
      title,
      description: body.substring(0, 100),
      status: "Pending",
      dateCreated: new Date().toLocaleDateString(),
      image: imagePreview,
    };

    onAddBlog(newBlog);
    onClose(); // Close modal after submission
    setTitle("");
    setBody("");
    setImagePreview(null);
  };

  return (
    <div className="lg:max-w-3xl mx-auto lg:p-6 bg-white rounded-3xl relative">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute lg:top-4 lg:right-4 max-md:right-0 text-gray-500 hover:text-gray-700 transition-colors"
        title="Close"
      >
        <FaTimes className="w-6 h-6 max-md:w-3" />
      </button>

      <h2 className="text-xl font-bold mb-4">Add a Blog Post</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Blog Title</label>
          <input
            type="text"
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none ${titleError ? "border-red-500" : ""}`}
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {titleError && <p className="text-red-500 text-sm">{titleError}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Image</label>
          <div className="w-full p-6 border-2 border-dashed rounded-lg flex flex-col items-center justify-center cursor-pointer">
            <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" id="imageUpload" />
            <label htmlFor="imageUpload" className="cursor-pointer">
              {imagePreview ? (
                <Image src={imagePreview} alt="Preview" className="max-w-full max-h-48 rounded-lg rounded-lg" />
              ) : (
                <>
                  <FaUpload className="text-gray-400 text-2xl mb-2" />
                  <p className="text-blue-500 font-medium">Select image</p>
                  <p className="text-sm text-gray-500">Click to upload image</p>
                  <p className="text-xs text-gray-400">Supported formats: JPG, JPEG, WEBP, PNG</p>
                </>
              )}
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Body</label>
          <textarea
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none ${bodyError ? "border-red-500" : ""}`}
            placeholder="Input text here"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows={5}
          />
          {bodyError && <p className="text-red-500 text-sm">{bodyError}</p>}
        </div>

        <div className="flex justify-center">
        <button
          type="submit"
          className=" w-2/6 bg-blue-500 text-white p-3 rounded-full  font-semibold  hover:bg-blue-600 transition"
        >
          Submit
        </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlogPost;
