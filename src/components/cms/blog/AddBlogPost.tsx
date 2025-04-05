import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { FaPlus, FaUpload } from "react-icons/fa";

const AddBlogPost: React.FC = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [".jpg", ".jpeg", ".png", ".webp"] },
    onDrop: (acceptedFiles) => {
      setImage(acceptedFiles[0]);
    },
  });

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-3xl">
      <h2 className="text-xl font-bold mb-4">Add a Blog Post</h2>

      {/* Blog Title Input */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">Blog Title</label>
        <input
          type="text"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {/* Image Upload */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">Image</label>
        <div
          {...getRootProps()}
          className="w-full p-6 border-2 border-dashed rounded-lg flex flex-col items-center justify-center cursor-pointer"
        >
          <input {...getInputProps()} />
          {image ? (
            <p className="text-sm text-gray-600">{image.name}</p>
          ) : (
            <>
              <FaUpload className="text-gray-400 text-2xl mb-2" />
              <p className="text-blue-500 font-medium">Select image</p>
              <p className="text-sm text-gray-500">Drag and drop image here</p>
              <p className="text-xs text-gray-400">Supported formats: JPG, JPEG, WEBP, PNG</p>
            </>
          )}
        </div>
      </div>

      <button className="text-blue-500 flex items-center font-medium mb-4">
        <FaPlus className="mr-2" /> Add +
      </button>

      {/* Blog Body */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">Body</label>
        <ReactQuill
          className="bg-white"
          theme="snow"
          value={body}
          onChange={setBody}
          placeholder="Input text here"
        />
      </div>

      <button className="text-blue-500 flex items-center font-medium mb-4">
        <FaPlus className="mr-2" /> Add +
      </button>

      {/* Submit Button */}
      <button className="w-2/6 bg-blue-500 text-white p-3 rounded-full mx-auto font-semibold flex justify-center items-center hover:bg-blue-600 transition">
        Submit
      </button>
    </div>
  );
};

export default AddBlogPost;
