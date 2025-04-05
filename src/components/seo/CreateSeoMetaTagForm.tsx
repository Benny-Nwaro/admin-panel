import React, { useState } from "react";
import SeoMetaTagDetails from "./SeoMetaTagDetails";
import EditSeoMetaTag from "./EditSeoMetaTag";

const CreateSeoMetaTagForm: React.FC = () => {
  const [pageName, setPageName] = useState<string>("Home");
  const [keywords, setKeywords] = useState<string[]>([]);
  const [descriptions, setDescriptions] = useState<string>("");
  const [keywordInput, setKeywordInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const addKeyword = () => {
    if (keywordInput.trim()) {
      setKeywords([...keywords, keywordInput.trim()]);
      setKeywordInput("");
    }
  };

  const addDescription = () => {
    if (descriptionInput.trim()) {
      setDescriptions(descriptionInput.trim());
      setDescriptionInput("");
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleOnEdit = () => {
    setIsEditing(true); 
  };

  return (
    <div className="w-full mx-auto bg-white p-6 rounded-3xl shadow-xl max-md:w-full">
      {!isSubmitted ? (
        <div className="bg-white">
          <h2 className="text-xl font-semibold mb-4">Create SEO Meta Tag</h2>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Page name</label>
            <select className="w-full p-2 border rounded-lg">
              <option>Home Page</option>
              <option>Course Page</option>
              <option>Group Lesson Page</option>
            </select>
          </div>

          <div className="mb-4 bg-gray-100 p-4 rounded-xl">
            <label className="block text-sm font-medium mb-1">Keywords</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={keywordInput}
                onChange={(e) => setKeywordInput(e.target.value)}
                placeholder="Enter a Tag Keyword"
                className="flex-1 p-2 border rounded-lg"
              />
              <button onClick={addKeyword} className="bg-blue-500 text-white px-6 py-2 rounded-full">
                Add
              </button>
            </div>
          </div>

          <div className="mb-4 bg-gray-100 p-4 rounded-xl">
            <label className="block text-sm font-medium mb-1">Descriptions</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={descriptionInput}
                onChange={(e) => setDescriptionInput(e.target.value)}
                placeholder="Enter a Tag Description"
                className="flex-1 p-2 border rounded-lg"
              />
              <button onClick={addDescription} className="bg-blue-500 text-white px-6 py-2 rounded-full">
                Add
              </button>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-xl mb-4">
            <h3 className="text-sm font-semibold mb-2">Preview</h3>
            <p className="text-sm font-medium">Keywords</p>
            <p className="text-gray-700 mb-2">{keywords.join(", ") || "Add a keyword"}</p>
            <p className="text-sm font-medium">Description</p>
            <p className="text-gray-700">{descriptions || "Add a description"}</p>
          </div>

          <button
            onClick={handleSubmit}
            className="w-2/6 bg-blue-500 text-white p-3 rounded-full"
          >
            Create
          </button>
        </div>
      ) : isEditing ? (
        <EditSeoMetaTag
          // pageName="page"
          // keywords={keywords}
          // description={descriptions}
          // setKeywords={setKeywords}
          // setDescription={setDescriptions}
          // onSave={() => setIsEditing(false)} 
        />
      ) : (
        <SeoMetaTagDetails pageName={pageName} keywords={keywords} description={descriptions} onEdit={handleOnEdit} />
      )}
    </div>
  );
};

export default CreateSeoMetaTagForm;
