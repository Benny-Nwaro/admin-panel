"use client"
import Image from "next/image";
import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import ArticlePreview from "./ArticlePreview";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

// Dynamically import ReactQuill with SSR disabled
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface Paragraph {
  id: number;
  text: string;
  images: File[];
}

interface Article {
  id: number;
  title: string;
  description: string;
  status: "Active" | "Inactive";
  dateCreated: string;
}

interface EditArticleProps {
  article: Article;
  onClose: () => void;
}

const EditArticle: React.FC<EditArticleProps> = ({ article }) => {
  const [title, setTitle] = useState(article.title);
  const [headerImage, setHeaderImage] = useState<File | null>(null);
  const [showPreview, setShowPreview] = useState(false); // Preview toggle state

  const [paragraphs, setParagraphs] = useState<Paragraph[]>([
    { id: 1, text: "", images: [] },
  ]);

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    setImage: (file: File | null) => void
  ) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleParagraphChange = (id: number, value: string) => {
    setParagraphs((prev) =>
      prev.map((p) => (p.id === id ? { ...p, text: value } : p))
    );
  };

  const handleImageUploadForParagraph = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    if (e.target.files) {
      const newImages = Array.from(e.target.files);
      setParagraphs((prev) =>
        prev.map((p) =>
          p.id === id ? { ...p, images: [...p.images, ...newImages] } : p
        )
      );
    }
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

  const addParagraph = () => {
    setParagraphs((prev) => [
      ...prev,
      { id: prev.length + 1, text: "", images: [] },
    ]);
  };

  if (showPreview) {
    return (
      <div className="w-full bg-white p-6 rounded-2xl">
        <ArticlePreview
          title={title}
          headerImage={headerImage ? URL.createObjectURL(headerImage) : ""}
          paragraphs={paragraphs}
        />
        <div className="mt-6 text-center">
          <button
            onClick={() => setShowPreview(false)}
            className="mt-4 bg-gray-200 text-gray-800 px-6 py-2 rounded-full hover:bg-gray-300"
          >
            ← Back to Edit
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto bg-white rounded-2xl  p-8 space-y-8">
      <h2 className="text-2xl font-semibold text-gray-900">Edit Article</h2>

      {/* Header Section */}
      <div className="space-y-4">
        <h3 className="font-semibold text-gray-700">Header</h3>

        <div>
          <label className="text-gray-600 mb-1 block">Blog Title</label>
          <input
            type="text"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label className="text-gray-600 mb-1 block">Image</label>
          <p className="text-sm text-gray-400 mb-2">
            Supported formats: JPG, JPEG, WEBP, PNG
          </p>
          {headerImage ? (
            <div className="relative w-32 h-20">
              <Image
                src={URL.createObjectURL(headerImage)}
                alt="Header"
                fill
                className="object-cover rounded-md"
              />
              <button
                className="absolute top-0 right-0 bg-white text-red-600 rounded-full p-1"
                onClick={() => setHeaderImage(null)}
              >
                🗑️
              </button>
            </div>
          ) : (
            <label className="cursor-pointer text-blue-500 font-medium">
              <input
                type="file"
                accept="image/png, image/jpeg, image/webp"
                className="hidden"
                onChange={(e) => handleImageUpload(e, setHeaderImage)}
              />
              Add +
            </label>
          )}
        </div>
      </div>

      {/* Body Section */}
      <div className="space-y-6">
        <h3 className="font-semibold text-gray-700">Body</h3>

        {paragraphs.map((para) => (
          <div key={para.id} className="space-y-3">
            <h4 className="text-gray-600 font-medium">
              Paragraph {para.id}
            </h4>

            <ReactQuill
              theme="snow"
              value={para.text}
              onChange={(value) => handleParagraphChange(para.id, value)}
            />

            {/* Image Previews */}
            <div className="flex flex-wrap gap-3">
              {para.images.map((img, i) => (
                <div key={i} className="relative w-28 h-20">
                  <Image
                    src={URL.createObjectURL(img)}
                    alt={`Image ${i + 1}`}
                    fill
                    className="object-cover rounded-md"
                  />
                  <button
                    className="absolute top-0 right-0 bg-white text-red-600 rounded-full p-1"
                    onClick={() => removeImage(para.id, i)}
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>

            {/* Add Image Button */}
            <div>
              <label className="cursor-pointer text-blue-500 font-medium">
                <input
                  type="file"
                  multiple
                  accept="image/png, image/jpeg, image/webp"
                  className="hidden"
                  onChange={(e) => handleImageUploadForParagraph(e, para.id)}
                />
                Add +
              </label>
            </div>
          </div>
        ))}

        <button
          onClick={addParagraph}
          className="text-blue-600 font-semibold mt-4"
        >
          + Add Paragraph
        </button>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-center space-x-5 pt-6 border-t mt-6">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full shadow hover:bg-blue-700">
          Save Changes
        </button>
        <button 
        onClick={() => setShowPreview(true)}
        className="border border-blue-500 text-blue-700 px-6 py-2 rounded-full hover:bg-gray-50">
          Preview
        </button>
      </div>
    </div>
  );
};

export default EditArticle;
