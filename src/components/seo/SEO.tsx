import React, { useState } from "react";
import SeoMetaTags from "./SeoMetaTags";
import Competitor from "./competitor/Competitor";
import BackLinks from "./backLinks/BackLinks";
import Keyword from "./KeywordAnalysis/Keyword";

const SEO: React.FC = () => {
  const [activeTab, setActiveTab] = useState("SEO METATAGS");

  const tabs = [
    "SEO METATAGS",
    "Competitor analysis",
    "Backlinks",
    "Keyword analysis",
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "SEO METATAGS":
        return <SeoMetaTags />;
      case "Competitor analysis":
        return <Competitor />;
      case "Backlinks":
        return <BackLinks />;
      case "Keyword analysis":
        return <Keyword />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full mx-auto mt-10 p-6 bg-white rounded-lg ">
      {/* Tabs Section */}
      <div className="flex border-b mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-semibold transition-colors ${
              activeTab === tab
                ? "border-b-2 border-black text-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Dynamic Content */}
      <div className="p-4 bg-white w-full">{renderContent()}</div>
    </div>
  );
};

export default SEO;
