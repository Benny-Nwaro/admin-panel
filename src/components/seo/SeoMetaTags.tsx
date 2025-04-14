import React, { useState } from "react";
import CreateSeoMetaTagForm from "./CreateSeoMetaTagForm";

interface MetaTag {
  id: number;
  pageName: string;
  descriptions: string;
  keywords: string;
}

const metaTags: MetaTag[] = [
  { id: 1, pageName: "HOMEPAGE", descriptions: "1 Descriptions", keywords: "07/05/2016" },
  { id: 2, pageName: "COURSESPAGE", descriptions: "1 Descriptions", keywords: "28/10/2012" },
  { id: 3, pageName: "GROUPLESSONPAGE", descriptions: "1 Descriptions", keywords: "12/06/2020" },
  { id: 4, pageName: "GROUPLESSONPAGE", descriptions: "1 Descriptions", keywords: "15/08/2017" },
];

const SeoMetaTags: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full mx-auto lg:p-6 bg-white rounded-lg overflow-x-scroll">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4 overflow-x-scroll text-nowrap max-md:text-sm">
        <h2 className="text-lg font-bold max-md:text-sm">SEO METATAGS</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold"
        >
          Add new MetaTag
        </button>
      </div>

      {/* Table Section */}
      <div className="border rounded-lg overflow-scroll max-md:text-sm text-nowrap">
        <table className="w-full text-left border-collapse">
          <thead className="bg-white">
            <tr>
              <th className="px-4 py-2">Page Name</th>
              <th className="px-4 py-2">Descriptions</th>
              <th className="px-4 py-2">Keywords</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {metaTags.map((meta, index) => (
              <tr key={meta.id} className={index % 2 === 0 ? "bg-blue-50" : "bg-white"}>
                <td className="px-4 py-2 font-semibold">{meta.pageName}</td>
                <td className="px-4 py-2">{meta.descriptions}</td>
                <td className="px-4 py-2 font-semibold">{meta.keywords}</td>
                <td className="px-4 py-2">
                  <button className="bg-blue-500 text-white px-4 py-1 rounded-lg">Actions ⌄</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Section */}
      <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
        <span>Showing 1 to 4 of 4 entries</span>
        <div className="flex items-center space-x-2">
          <button className="px-2 py-1 border rounded">&lt;</button>
          <button className="px-2 py-1 border rounded bg-blue-500 text-white">1</button>
          <button className="px-2 py-1 border rounded">2</button>
          <button className="px-2 py-1 border rounded">3</button>
          <button className="px-2 py-1 border rounded">&gt;</button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center lg:pt-20 items-center">
          <div className="p-6 rounded-lg lg:w-2/5">
            <CreateSeoMetaTagForm />
            {/* <div className="flex justify-end mt-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Close
              </button>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default SeoMetaTags;
