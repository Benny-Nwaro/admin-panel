"use client"
import React, { useState } from "react";
import AddArticleForm from "./AddArticleForm"; // Adjust path if needed
import EditArticle from "./EditArticle"; // Adjust path if needed

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
    title: "Article Title 1",
    description:
      "Solutionize pretend gmail loop please club respectively focus happenings out.",
    status: "Active",
    dateCreated: "12/03/2024",
  },
  {
    id: 2,
    title: "Article Title 2",
    description:
      "Solutionize pretend gmail loop please club respectively focus happenings out.",
    status: "Active",
    dateCreated: "12/03/2024",
  },
  {
    id: 3,
    title: "Article Title 3",
    description:
      "Solutionize pretend gmail loop please club respectively focus happenings out.",
    status: "Inactive",
    dateCreated: "12/03/2024",
  },
];

const ArticleList: React.FC = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null); // State for active dropdown
  const [editingArticle, setEditingArticle] = useState<Article | null>(null); // State for editing article

  const handleCreateNewClick = () => {
    setShowAddForm(true);
  };

  const handleCloseForm = () => {
    setShowAddForm(false);
  };

  const toggleDropdown = (id: number) => {
    setActiveDropdown(activeDropdown === id ? null : id); // Toggle dropdown visibility
  };

  const handleEdit = (article: Article) => {
    setEditingArticle(article); // Set the article being edited
  };

  const handleDelete = (id: number) => {
    console.log("Deleting article", id);
  };

  if (editingArticle) {
    return (
      <div className="w-full p-6">
        <button
          onClick={() => setEditingArticle(null)}
          className="mb-4 inline-flex items-center text-blue-600 hover:underline"
        >
          ← Back to Articles
        </button>
        <EditArticle article={editingArticle} onClose={() => setEditingArticle(null)} />
      </div>
    );
  }
  

  return (
    <div className="w-full mx-auto p-6 relative">
      {/* Modal for AddArticleForm */}
      {showAddForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-2xl shadow-lg p-6 w-full max-w-xl mx-auto">
            <AddArticleForm onClose={handleCloseForm} />
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl"
              onClick={handleCloseForm}
              aria-label="Close modal"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">ARTICLES</h2>
        <button
          onClick={handleCreateNewClick}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
        >
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
            <tr className="text-left text-gray-700">
              <th className="p-3">#</th> {/* Serial Number Column */}
              <th className="p-3">Title</th>
              <th className="p-3">Status</th>
              <th className="p-3">Date Created</th>
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article, index) => (
              <tr
                key={article.id}
                className={`border-t hover:bg-blue-100 transition ${
                  article.id % 2 !== 0 ? "bg-blue-50" : "bg-white"
                }`}
              >
                <td className="p-3">{index + 1}</td> {/* Display serial number */}
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
                  <button
                    onClick={() => toggleDropdown(article.id)}
                    className="bg-blue-500 text-white px-4 py-1 rounded-lg shadow hover:bg-blue-600 transition"
                  >
                    Actions ▼
                  </button>
                  {activeDropdown === article.id && (
                    <div className="absolute bg-white shadow-lg rounded-lg mt-2 w-32">
                      <button
                        onClick={() => handleEdit(article)}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(article.id)}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        Delete
                      </button>
                    </div>
                  )}
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
