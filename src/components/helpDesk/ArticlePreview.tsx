import React from "react";

const ArticlePreview: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header Section */}
      <h1 className="text-3xl font-semibold mb-4">
        Metal model cloud playing ask on nobody so. Individual watches.
      </h1>
      <img
        src="/cover-image.jpg"
        alt="Cover"
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      
      {/* Paragraph 1 */}
      <p className="text-gray-700 mb-4">
        Move company version best talk closest productive then weaponize. Shoot low-hanging cross-pollination place olio latest out rhugot...
      </p>
      
      {/* Section with heading */}
      <h2 className="text-xl font-bold mb-2">Intro to Educify</h2>
      <p className="text-gray-700 mb-4">
        We quick world harvest reference lift us supervisor. Incentivize club needed strategies...
      </p>
      
      {/* Image Row */}
      <div className="grid grid-cols-2 gap-4 my-4">
        <img src="/image1.jpg" alt="" className="w-full h-40 object-cover rounded-lg" />
        <img src="/image2.jpg" alt="" className="w-full h-40 object-cover rounded-lg" />
      </div>
      
      {/* Section with heading */}
      <h2 className="text-xl font-bold mb-2">Ensure we into</h2>
      <p className="text-gray-700 mb-4">
        Know ditching commitment just crystallize disband in conversation previous. Team who's see minimize technologically...
      </p>
      
      {/* Section with heading */}
      <h2 className="text-xl font-bold mb-2">Got it but seat</h2>
      <p className="text-gray-700 mb-4">
        Staircase giant businesses lunch eager. Dunder pivot solutionize driving innovation next open developing...
      </p>
      
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
