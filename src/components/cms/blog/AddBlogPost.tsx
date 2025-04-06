import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
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
  const [image, setImage] = useState<File | null>(null);
  const [titleError, setTitleError] = useState<string | null>(null);
  const [bodyError, setBodyError] = useState<string | null>(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [".jpg", ".jpeg", ".png", ".webp"] },
    onDrop: (acceptedFiles) => {
      setImage(acceptedFiles[0]);
    },
  });

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
      image: image ? URL.createObjectURL(image) : null,
    };

    onAddBlog(newBlog);
    setTitle("");
    setBody("");
    setImage(null);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-3xl">
      <h2 className="text-xl font-bold mb-4">Add a Blog Post</h2>

      {/* Blog Title Input */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">Blog Title</label>
        <input
          type="text"
          className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none ${titleError ? 'border-red-500' : ''}`}
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {titleError && <p className="text-red-500 text-sm">{titleError}</p>}
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
        {bodyError && <p className="text-red-500 text-sm">{bodyError}</p>}
      </div>

      <button type="submit" className="w-2/6 bg-blue-500 text-white p-3 rounded-full mx-auto font-semibold flex justify-center items-center hover:bg-blue-600 transition">
        Submit
      </button>
    </form>
  );
};

export default AddBlogPost;
