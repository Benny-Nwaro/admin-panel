import React, { useState } from "react";
import { Trash2 } from "lucide-react";

const EditSeoMetaTag: React.FC = () => {
  const [pageName, setPageName] = useState("Select Page");
  const [keywords, setKeywords] = useState<string[]>(["Tutor Online", "Tutor Near Me"]);
  const [description, setDescription] = useState(
    "At EDUCIFY, explore top-rated online & local tutors, personalised & group learning in any subject. Achieve academic goals as you find your ideal tutor online or near you!"
  );
  const [keywordInput, setKeywordInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");

  const addKeyword = () => {
    if (keywordInput.trim()) {
      setKeywords([...keywords, keywordInput.trim()]);
      setKeywordInput("");
    }
  };

  const addDescription = () => {
    if (descriptionInput.trim()) {
      setDescription(descriptionInput.trim());
      setDescriptionInput("");
    }
  };

  // const removeKeyword = (index: number) => {
  //   setKeywords(keywords.filter((_, i) => i !== index));
  // };

  return (
    <div className="mx-auto bg-white py-6 rounded-2xl max-md:w-full">
      <h2 className="text-xl font-semibold mb-4">Edit SEO Meta Tag</h2>
      
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Page name</label>
        <select
          className="w-full p-2 border rounded-lg bg-gray-100 text-gray-700"
          value={pageName}
          onChange={(e) => setPageName(e.target.value)}
        >
          <option>Select Page</option>
          <option>Home Page</option>
        </select>
      </div>

      <div className="mb-4 bg-gray-50 p-4 rounded-lg">
        <label className="block text-sm font-medium mb-1">Keywords</label>
        <div className="flex gap-2">
          <input
            type="text"
            className="flex-1 p-2 border rounded-lg"
            placeholder="Enter a Tag Keyword"
            value={keywordInput}
            onChange={(e) => setKeywordInput(e.target.value)}
          />
          <button onClick={addKeyword} className="bg-blue-500 text-white px-6 py-2 rounded-full">Add</button>
        </div>
      </div>

      <div className="mb-4 bg-gray-50 p-4 rounded-lg">
        <label className="block text-sm font-medium mb-1">Descriptions</label>
        <div className="flex gap-2">
          <input
            type="text"
            className="flex-1 p-2 border rounded-lg"
            placeholder="Enter a Tag Description"
            value={descriptionInput}
            onChange={(e) => setDescriptionInput(e.target.value)}
          />
          <button onClick={addDescription} className="bg-blue-500 text-white px-6 py-2 rounded-full">Add</button>
        </div>
      </div>

      <div className="mb-4 bg-gray-100 p-4 rounded-lg">
        <h3 className="text-sm font-semibold mb-2">Preview</h3>
        <div className="mb-2">
          <h4 className="font-semibold">Keywords</h4>
          <div className="flex items-center gap-2 bg-white p-2 rounded-lg border">
            <p className="text-gray-700 flex-1">{keywords.join(", ")}</p>
            <button onClick={() => setKeywords([])} className="text-red-500">
              <Trash2 size={16} />
            </button>
          </div>
        </div>
        <div>
          <h4 className="font-semibold">Description</h4>
          <div className="flex items-center gap-2 bg-white p-2 rounded-lg border">
            <p className="text-gray-700 flex-1">{description}</p>
            <button onClick={() => setDescription("")} className="text-red-500">
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      </div>

      <button className="w-2/6 bg-blue-500 text-white p-3 rounded-full">Update</button>
    </div>
  );
};

export default EditSeoMetaTag;
