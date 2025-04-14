import React from "react";

const competitorsData = [
  {
    domain: "wordstream.com",
    commonKeywords: "52,116",
    keywordsGap: "109,175",
    estimatedTraffic: "110,801",
    backlinks: "125,743",
  },
  {
    domain: "hootsuite.com",
    commonKeywords: "33,216",
    keywordsGap: "52,116",
    estimatedTraffic: "70,101",
    backlinks: "81,472",
  },
  {
    domain: "neilpatel.com",
    commonKeywords: "60,939",
    keywordsGap: "81,472",
    estimatedTraffic: "69,538",
    backlinks: "91,501",
  },
  {
    domain: "searchenginejournal.com",
    commonKeywords: "49,211",
    keywordsGap: "74,469",
    estimatedTraffic: "43,554",
    backlinks: "52,116",
  },
  {
    domain: "sproutsocial.com",
    commonKeywords: "43,554",
    keywordsGap: "35,298",
    estimatedTraffic: "39,036",
    backlinks: "119,768",
  },
  {
    domain: "hubspot.com",
    commonKeywords: "97,242",
    keywordsGap: "119,922",
    estimatedTraffic: "119,768",
    backlinks: "33,216",
  },
];

const CompetitorTable: React.FC = () => {
  return (
    <div className="w-full bg-white rounded-lg shadow-md p-4 overflow-x-scroll text-nowrap max-md:mt-4">
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-gray-500 text-left text-sm">
            <th className="p-3">Competitor Domain</th>
            <th className="p-3">Common Keywords</th>
            <th className="p-3">Keywords Gap</th>
            <th className="p-3">Estimated Traffic</th>
            <th className="p-3">Backlinks</th>
          </tr>
        </thead>
        <tbody>
          {competitorsData.map((competitor, index) => (
            <tr
              key={competitor.domain}
              className={index % 2 === 0 ? "bg-blue-100" : "bg-white"}
            >
              <td className="p-3 font-semibold text-gray-800">{competitor.domain}</td>
              <td className="p-3 text-gray-700">{competitor.commonKeywords}</td>
              <td className="p-3 font-semibold text-gray-900">{competitor.keywordsGap}</td>
              <td className="p-3 font-semibold text-gray-900">{competitor.estimatedTraffic}</td>
              <td className="p-3 font-semibold text-gray-900">{competitor.backlinks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompetitorTable;
