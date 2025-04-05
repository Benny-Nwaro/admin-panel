import React, { useState } from "react";
import CategoryPreview from "./CategoryPreview";
import Image from "next/image";

interface AddCategoryFormProps {
  onClose: () => void;
}

const AddCategoryForm: React.FC<AddCategoryFormProps> = ({ onClose }) => {
  const [isActive, setIsActive] = useState(true);
  const [categoryName, setCategoryName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [ctaHeader, setCtaHeader] = useState("");
  const [ctaDescription, setCtaDescription] = useState("");
  const [ctaImage, setCtaImage] = useState<File | null>(null);
  const [showPreview, setShowPreview] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, setter: (file: File | null) => void) => {
    if (e.target.files && e.target.files[0]) {
      setter(e.target.files[0]);
    } else {
      setter(null);
    }
  };

  const handleSubmit = () => {
    // Implement your submit logic here
    console.log({
      categoryName,
      description,
      image,
      isActive,
      ctaHeader,
      ctaDescription,
      ctaImage,
    });
    onClose();
  };

  const handlePreview = () => {
    setShowPreview(true);
  };

  const handleClosePreview = () => {
    setShowPreview(false);
  };

  return (
    <>
      {showPreview ? (
        <div className="fixed inset-0 bg-white z-50">
          <div className="h-full">
            <CategoryPreview
              categoryName={categoryName}
              description={description}
              image={image}
              ctaHeader={ctaHeader}
              ctaDescription={ctaDescription}
              ctaImage={ctaImage}
              onClose={handleClosePreview}
            />
          </div>
        </div>
      ) : (
        <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-lg font-bold mb-4">ADD NEW CATEGORIES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Hero Section */}
            <div>
              <h3 className="font-bold text-lg mb-2">Hero Section</h3>
              <label className="block text-gray-600">Name</label>
              <input
                type="text"
                placeholder="Enter Category Name"
                className="w-full p-2 border rounded-md mb-3"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
              />

              <label className="block text-gray-600">Description</label>
              <textarea
                placeholder="Enter a description of this subject"
                className="w-full p-2 border rounded-md mb-3"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>

              <label className="block text-gray-600">Image</label>
              <div className="w-full h-32 border flex flex-col items-center justify-center rounded-md mb-3">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, setImage)}
                  className="hidden"
                  id="heroImageInput"
                />
                <label htmlFor="heroImageInput" className="cursor-pointer">
                  {image ? (
                    <Image
                      src={URL.createObjectURL(image)}
                      alt="Hero Preview"
                      className="max-h-28 max-w-full"
                    />
                  ) : (
                    <>
                      <span className="text-blue-500 font-semibold">Select image</span>
                      <p className="text-sm text-gray-500">Drag and drop image here</p>
                      <p className="text-xs text-gray-400">Supported formats: JPG, JPEG, WEBP, PNG</p>
                    </>
                  )}
                </label>
              </div>

              <label className="block text-gray-600">Active</label>
              <div className="flex items-center">
                <button
                  onClick={() => setIsActive(!isActive)}
                  className={`w-10 h-5 flex items-center rounded-full p-1 ${isActive ? "bg-green-500" : "bg-gray-300"}`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full transition-transform ${isActive ? "translate-x-5" : "translate-x-0"}`}
                  ></div>
                </button>
              </div>
            </div>

            {/* CTA Section */}
            <div>
              <h3 className="font-bold text-lg mb-2">CTA Section</h3>
              <label className="block text-gray-600">Header</label>
              <input
                type="text"
                placeholder="Enter a header for the CTA section"
                className="w-full p-2 border rounded-md mb-3"
                value={ctaHeader}
                onChange={(e) => setCtaHeader(e.target.value)}
              />

              <label className="block text-gray-600">CTA Description</label>
              <textarea
                placeholder="Enter a description for the CTA section"
                className="w-full p-2 border rounded-md mb-3"
                value={ctaDescription}
                onChange={(e) => setCtaDescription(e.target.value)}
              ></textarea>

              <label className="block text-gray-600">CTA Image</label>
              <div className="w-full h-32 border flex flex-col items-center justify-center rounded-md mb-3">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, setCtaImage)}
                  className="hidden"
                  id="ctaImageInput"
                />
                <label htmlFor="ctaImageInput" className="cursor-pointer">
                  {ctaImage ? (
                    <Image
                      src={URL.createObjectURL(ctaImage)}
                      alt="CTA Preview"
                      className="max-h-28 max-w-full"
                    />
                  ) : (
                    <>
                      <span className="text-blue-500 font-semibold">Select image</span>
                      <p className="text-sm text-gray-500">Drag and drop image here</p>
                      <p className="text-xs text-gray-400">Supported formats: JPG, JPEG, WEBP, PNG</p>
                    </>
                  )}
                </label>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 flex items-center gap-2"
              onClick={handleSubmit}
            >
              ✅ Submit
            </button>
            <button
              className="border border-blue-500 text-blue-500 px-6 py-2 rounded-md hover:bg-blue-100"
              onClick={handlePreview}
            >
              Preview
            </button>
            <button
              className="border border-red-500 text-red-500 px-6 py-2 rounded-md hover:bg-red-100"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AddCategoryForm;