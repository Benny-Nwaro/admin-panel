import React from "react";

interface Article {
  id: number;
  title: string;
  description: string;
  status: "Active" | "Inactive";
  dateCreated: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Article Title",
    description:
      "Solutionize pretend gmail loop please club respectively focus happenings out. Out options don’t loss individual diarize donuts power.",
    status: "Active",
    dateCreated: "12/03/2024",
  },
  {
    id: 2,
    title: "Article Title",
    description:
      "Solutionize pretend gmail loop please club respectively focus happenings out. Out options don’t loss individual diarize donuts power.",
    status: "Active",
    dateCreated: "12/03/2024",
  },
  {
    id: 3,
    title: "Article Title",
    description:
      "Solutionize pretend gmail loop please club respectively focus happenings out. Out options don’t loss individual diarize donuts power.",
    status: "Inactive",
    dateCreated: "12/03/2024",
  },
];

const ArticleList: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">ARTICLES</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition">
          Create New Articles
        </button>
      </div>

      {/* Search */}
      <div className="flex justify-end mb-4">
        <input
          type="text"
          placeholder="Search Articles"
          className="px-4 py-2 border rounded-lg w-72 shadow-sm outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Table */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-700">
              <th className="p-3">Title</th>
              <th className="p-3">Status</th>
              <th className="p-3">Date Created</th>
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article) => (
              <tr
                key={article.id}
                className="border-t bg-blue-50 hover:bg-blue-100 transition"
              >
                <td className="p-3">
                  <div className="font-semibold">{article.title}</div>
                  <div className="text-sm text-gray-600">{article.description}</div>
                </td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 text-sm font-semibold rounded-full ${
                      article.status === "Active"
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    {article.status}
                  </span>
                </td>
                <td className="p-3">{article.dateCreated}</td>
                <td className="p-3">
                  <button className="bg-blue-500 text-white px-4 py-1 rounded-lg shadow hover:bg-blue-600 transition">
                    Actions ▼
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ArticleList;
