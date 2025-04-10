import Image from "next/image";
import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";


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
}

const AddBlogPost: React.FC<AddBlogPostProps> = ({ onAddBlog }) => {
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
    setTitle("");
    setBody("");
    setImagePreview(null);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-3xl">
      <h2 className="text-xl font-bold mb-4">Add a Blog Post</h2>

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
              <Image src={imagePreview} alt="Preview" className="max-w-full max-h-48 rounded-lg" />
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

      <button
        type="submit"
        className="w-2/6 bg-blue-500 text-white p-3 rounded-full mx-auto font-semibold flex justify-center items-center hover:bg-blue-600 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default AddBlogPost;