import Image from "next/image";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface Paragraph {
  id: number;
  text: string;
  images: File[];
}

const EditArticle: React.FC = () => {
  const [title, setTitle] = useState("Lorem ipsum dolor sit amet");
  const [headerImage, setHeaderImage] = useState<File | null>(null);
  const [paragraphs, setParagraphs] = useState<Paragraph[]>([
    { id: 1, text: "", images: [] },
  ]);

  const handleImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    setImage: (file: File | null) => void
  ) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleParagraphChange = (id: number, value: string) => {
    setParagraphs((prev) =>
      prev.map((p) => (p.id === id ? { ...p, text: value } : p))
    );
  };

  const handleImageUploadForParagraph = (
    event: React.ChangeEvent<HTMLInputElement>,
    paragraphId: number
  ) => {
    if (event.target.files) {
      const newImages = Array.from(event.target.files);
      setParagraphs((prev) =>
        prev.map((p) =>
          p.id === paragraphId ? { ...p, images: [...p.images, ...newImages] } : p
        )
      );
    }
  };

  const addParagraph = () => {
    setParagraphs((prev) => [
      ...prev,
      { id: prev.length + 1, text: "", images: [] },
    ]);
  };

  const removeImage = (paragraphId: number, index: number) => {
    setParagraphs((prev) =>
      prev.map((p) =>
        p.id === paragraphId
          ? { ...p, images: p.images.filter((_, i) => i !== index) }
          : p
      )
    );
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Edit Article</h2>

      {/* Header Section */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-800 mb-2">Header</h3>
        <label className="block text-gray-600 mb-1">Blog Title</label>
        <input
          type="text"
          className="w-full p-3 border rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-blue-400"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {/* Header Image Upload */}
      <div className="mb-6">
        <label className="block text-gray-600 mb-1">Image</label>
        <p className="text-gray-400 text-sm mb-2">
          Supported formats: JPG, JPEG, WEBP, PNG
        </p>
        {headerImage ? (
          <div className="relative inline-block">
            <Image
              src={URL.createObjectURL(headerImage)}
              alt="Header"
              className="w-32 h-20 object-cover rounded-lg shadow-md"
            />
            <button
              className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 text-xs"
              onClick={() => setHeaderImage(null)}
            >
              ✕
            </button>
          </div>
        ) : (
          <label className="cursor-pointer text-blue-500 font-semibold">
            <input
              type="file"
              className="hidden"
              accept="image/png, image/jpeg, image/webp"
              onChange={(e) => handleImageUpload(e, setHeaderImage)}
            />
            Add +
          </label>
        )}
      </div>

      {/* Body Section */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Body</h3>
        {paragraphs.map((paragraph) => (
          <div key={paragraph.id} className="mb-6">
            <h4 className="text-gray-700 font-medium mb-2">
              Paragraph {paragraph.id}
            </h4>
            <ReactQuill
              theme="snow"
              value={paragraph.text}
              onChange={(value) => handleParagraphChange(paragraph.id, value)}
              className="mb-3"
            />

            {/* Uploaded Images Preview */}
            <div className="flex gap-2 flex-wrap">
              {paragraph.images.map((image, index) => (
                <div key={index} className="relative inline-block">
                  <Image
                    src={URL.createObjectURL(image)}
                    alt={`Image ${index + 1}`}
                    className="w-24 h-16 object-cover rounded-lg shadow-md"
                  />
                  <button
                    className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 text-xs"
                    onClick={() => removeImage(paragraph.id, index)}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            {/* Image Upload for Paragraph */}
            <div className="mt-2">
              <label className="cursor-pointer text-blue-500 font-semibold">
                <input
                  type="file"
                  className="hidden"
                  accept="image/png, image/jpeg, image/webp"
                  multiple
                  onChange={(e) => handleImageUploadForParagraph(e, paragraph.id)}
                />
                Add +
              </label>
            </div>
          </div>
        ))}

        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
          onClick={addParagraph}
        >
          Add Paragraph
        </button>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-between mt-6">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition">
          Save Changes
        </button>
        <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg shadow-md hover:bg-gray-300 transition">
          Preview
        </button>
      </div>
    </div>
  );
};

export default EditArticle;
