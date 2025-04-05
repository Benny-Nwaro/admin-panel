import React from 'react';

interface SubjectPreviewProps {
  formData: {
    subjectName: string;
    category: string;
    header: string;
    description: string;
    images: File[];
    ctaHeader: string;
    ctaDescription: string;
    ctaImage: File | null;
  };
  onSave: () => void;
}

const SubjectPreview: React.FC<SubjectPreviewProps> = ({ formData, onSave }) => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <button className="text-blue-500">
          &lt; SUBJECT PREVIEW
        </button>
        <button
          onClick={onSave}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Save Changes
        </button>
      </div>

      {/* Hero Section */}
      <div className="mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-gray-500">
                {formData.category} {/* Category */}
              </p>
              <h2 className="text-2xl font-semibold mb-2">
                {formData.header} {/* Header */}
              </h2>
              <p className="text-gray-700">
                {formData.description} {/* Description */}
              </p>
              <div className="mt-4 flex space-x-2">
                <button className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                  See all course terms
                </button>
                <button className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                  Classroom
                </button>
                <button className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                  Game
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {formData.images.map((image, index) => (
                <div
                  key={index}
                  className="w-32 h-32 bg-gray-300 rounded-lg"
                  style={{
                    backgroundImage: image
                      ? `url(${URL.createObjectURL(image)})`
                      : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Placeholder Section (Four Boxes) */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="bg-gray-200 h-48 rounded-lg" />
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">
          {formData.ctaHeader} {/* CTA Header */}
        </h2>
        <ul className="list-disc list-inside mb-4">
          {formData.ctaDescription.split('.').map((item, index) => (
            <li key={index} className="mb-2">
              {item.trim()}
            </li>
          ))}
        </ul>
        <button className="bg-white text-blue-600 px-4 py-2 rounded">
          Get an Algebra Tutor
        </button>
      </div>
    </div>
  );
};

export default SubjectPreview;