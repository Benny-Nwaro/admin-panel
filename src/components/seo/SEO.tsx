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
    <div className="max-md:sticky max-md:top-0">
       <div className="w-full mx-auto mt-6 sm:mt-10 p-4 sm:p-6 bg-white rounded-lg">
        {/* Tabs Section */}
        <div className="border-b mb-4  text-nowrap overflow-x-scroll ">
          <div className="flex w-max sm:w-full">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 sm:px-4 py-2 font-semibold transition-colors whitespace-nowrap text-sm sm:text-base  ${
                  activeTab === tab
                    ? "border-b-2 border-black text-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>
       {/* Dynamic Content */}
       <div className="p-3 sm:p-4 bg-white w-full overflow-x-scroll h-screen">{renderContent()}</div>
    </div>
   
  );
};

export default SEO;