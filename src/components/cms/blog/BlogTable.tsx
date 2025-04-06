import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import AddBlogPost from "./AddBlogPost";

interface Blog {
  id: number;
  title: string;
  description: string;
  status: "Pending" | "Approved" | "Declined";
  dateCreated: string;
  image: string | null;
}

const blogsData: Blog[] = [
  { id: 1, title: "Blog Title", description: "Solutionize pretend gmail loop please club respectively focus happenings out. Out options don’t loss individual diarize donuts power.", status: "Pending", dateCreated: "12/03/2024", image: null },
  { id: 2, title: "Blog Title", description: "Solutionize pretend gmail loop please club respectively focus happenings out. Out options don’t loss individual diarize donuts power.", status: "Approved", dateCreated: "12/03/2024", image: null },
  { id: 3, title: "Blog Title", description: "Solutionize pretend gmail loop please club respectively focus happenings out. Out options don’t loss individual diarize donuts power.", status: "Declined", dateCreated: "12/03/2024", image: null }
];

const BlogTable: React.FC = () => {
  const [blogs, setBlogs] = useState(blogsData);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-400 text-white";
      case "Approved":
        return "bg-green-500 text-white";
      case "Declined":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-300";
    }
  };

  const handleAddBlog = (newBlog: Blog) => {
    setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
  };

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">ALL BLOGS</h2>
        <button
          className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg shadow"
          onClick={() => setIsModalOpen(true)}
        >
          <FaPlus className="mr-2" /> Add Blog
        </button>
      </div>

      <div className="bg-white rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-md font-semibold">All Blog Posts</h3>
          <div className="flex space-x-3">
            <select className="border px-3 py-2 rounded-lg shadow">
              <option>Sort</option>
            </select>
            <input
              type="text"
              placeholder="Search"
              className="border px-3 py-2 rounded-lg shadow"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="overflow-hidden rounded-lg">
          <table className="w-full">
            <thead>
              <tr>
                <th className="p-3 text-left">Title</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Date Created</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBlogs.map((blog) => (
                <tr key={blog.id} className={`border-b ${blog.id % 2 === 0 ? "bg-white" : "bg-blue-100"}`}>
                  <td className="p-3">
                    <div className="font-bold">{blog.title}</div>
                    <p className="text-sm text-gray-600">{blog.description}</p>
                  </td>
                  <td className="p-3">
                    <span className={`px-3 py-1 rounded-lg text-sm ${getStatusColor(blog.status)}`}>
                      {blog.status}
                    </span>
                  </td>
                  <td className="p-3">{blog.dateCreated}</td>
                  <td className="p-3">
                    <button className="text-blue-500 hover:text-blue-700">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
            <AddBlogPost onAddBlog={handleAddBlog} />
            <button
              className="absolute top-0 right-0 p-4"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogTable;
