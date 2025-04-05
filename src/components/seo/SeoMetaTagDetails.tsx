import React from "react";

interface SeoMetaTagDetailsProps {
  pageName: string;
  keywords: string[];
  description: string;
  onEdit: () => void;
}

const SeoMetaTagDetails: React.FC<SeoMetaTagDetailsProps> = ({
  pageName,
  keywords,
  description,
  onEdit,
}) => {
  return (
    <div className="mx-auto bg-white p-6 rounded-2xl max-md:w-full">
      <h2 className="text-xl font-semibold mb-4">SEO Meta Tag Details</h2>
      
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">PAGE NAME</label>
        <input
          type="text"
          value={pageName}
          disabled
          className="w-full p-2 border rounded-lg bg-gray-100 text-gray-700"
        />
      </div>

      <div className="bg-gray-100 p-4 rounded-xl mb-4">
        <h3 className="text-sm font-semibold mb-2">Keywords</h3>
        <p className="text-gray-700 mb-2">{keywords.join(", ") || "N/A"}</p>
        <h3 className="text-sm font-semibold mb-2">Description</h3>
        <p className="text-gray-700">{description || "N/A"}</p>
      </div>

      <button onClick={onEdit} className="w-2/6 bg-blue-500 text-white p-3 rounded-full">Edit</button>
    </div>
  );
};

export default SeoMetaTagDetails;
