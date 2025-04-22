import Image from "next/image";
import React from "react";

interface Paragraph {
  id: number;
  text: string;
  images: File[]; // Can be File objects or already URLs if you adapt later
}

interface ArticlePreviewProps {
  title: string;
  headerImage: string;
  paragraphs: Paragraph[];
}

const ArticlePreview: React.FC<ArticlePreviewProps> = ({
  title,
  headerImage,
  paragraphs,
}) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header Section */}
      <h1 className="text-3xl font-semibold mb-4">{title}</h1>

      {headerImage && (
        <div className="relative w-full h-64 mb-6">
          <Image
            src={headerImage}
            alt="Header"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      )}

      {/* Paragraphs */}
      {paragraphs.map((para) => (
        <div key={para.id} className="mb-8">
          <div
            className="text-gray-700 mb-4 prose max-w-none"
            dangerouslySetInnerHTML={{ __html: para.text }}
          />
          {para.images.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              {para.images.map((img, i) => {
                const src =
                  typeof img === "string" ? img : URL.createObjectURL(img);
                return (
                  <div key={i} className="relative w-full h-40">
                    <Image
                      src={src}
                      alt={`Image ${i + 1}`}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ))}

      {/* Save Button */}
      <div className="flex justify-end mt-6">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ArticlePreview;
