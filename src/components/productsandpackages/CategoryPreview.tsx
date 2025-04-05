import Image from "next/image";
import React from "react";
interface CategoryPreviewProps {
  categoryName: string;
  description: string;
  image: File | null;
  ctaHeader: string;
  ctaDescription: string;
  ctaImage: File | null;
  onClose: () => void;
}

const CategoryPreview: React.FC<CategoryPreviewProps> = ({
  categoryName,
  description,
  image,
  ctaHeader,
  ctaDescription,
  ctaImage,
  onClose,
}) => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <button className="text-sm text-gray-600 flex items-center mb-4" onClick={onClose}>
        &larr; CATEGORY PREVIEW
      </button>

      {/* Hero Section */}
      <div className="relative w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
        {image && (
          <Image
            src={URL.createObjectURL(image)}
            alt={categoryName}
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center p-6 text-white">
          <p className="text-sm">Educify &gt; Categories &gt; {categoryName}</p>
          <h1 className="text-3xl font-bold">{categoryName}</h1>
          <p className="mt-2 max-w-lg">{description}</p>
        </div>
      </div>

      {/* Placeholder for Categories */}
      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="h-40 bg-gray-100 rounded-lg"></div>
        <div className="h-40 bg-gray-100 rounded-lg"></div>
        <div className="h-40 bg-gray-100 rounded-lg"></div>
      </div>

      {/* CTA Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 bg-blue-900 text-white rounded-lg overflow-hidden">
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-4">{ctaHeader}</h2>
          <ul className="list-disc list-inside space-y-2 text-sm">
            {ctaDescription.split('.').map((item, index) => (
              <li key={index}>{item.trim()}</li>
            ))}
          </ul>
          <button className="mt-6 bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-2 rounded-full shadow">
            Select a category
          </button>
        </div>
        <div className="relative h-64 md:h-auto">
          {ctaImage && (
            <Image
              src={URL.createObjectURL(ctaImage)}
              alt="CTA Image"
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <button className="bg-blue-500 text-white px-6 py-2 rounded shadow">Save Changes</button>
      </div>
    </div>
  );
};

export default CategoryPreview;