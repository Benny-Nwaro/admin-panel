import React, { useState } from "react";

type TableRow = {
  domain: string;
  source: string;
  target: string;
  domainAuthority: number;
  pageAuthority: number;
  spamScore: string;
  anchorText: string;
  firstSeen: string;
  lastSeen: string;
};

const tableData: TableRow[] = [
  {
    domain: "wordstream.com",
    source: "https://www.linkedin.com/company/unico-engineering-inc-",
    target: "https://www.linkedin.com/company/dollarads",
    domainAuthority: 55,
    pageAuthority: 13,
    spamScore: "21%",
    anchorText: "Red-crested rooster crowing",
    firstSeen: "18/09/2016",
    lastSeen: "28/10/2012",
  },
  {
    domain: "wordstream.com",
    source: "https://www.linkedin.com/company/clo-virtual-fashion-inc-",
    target: "https://www.linkedin.com/company/nt-food",
    domainAuthority: 48,
    pageAuthority: 48,
    spamScore: "24%",
    anchorText: "Moz Keyword Explorer tool for SEO keyword research",
    firstSeen: "12/06/2020",
    lastSeen: "07/05/2016",
  },
  {
    domain: "wordstream.com",
    source: "https://www.linkedin.com/company/jyaasa-technologies",
    target: "https://www.linkedin.com/company/corum-group-ltd",
    domainAuthority: 88,
    pageAuthority: 72,
    spamScore: "2%",
    anchorText: "Business school professor pointing to a student's computer screen",
    firstSeen: "15/08/2017",
    lastSeen: "18/09/2016",
  },
];

const TableComponent: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = tableData.filter((row) =>
    row.domain.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Search and Export Section */}
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search"
          className="border rounded-lg px-4 py-2 w-1/3"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Export</button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left text-gray-600 text-sm">
              <th className="p-3">Source Page Title & URL | Target Page</th>
              <th className="p-3">Domain Authority</th>
              <th className="p-3">Page Authority</th>
              <th className="p-3">Spam Score</th>
              <th className="p-3">Anchor Text</th>
              <th className="p-3">First Seen</th>
              <th className="p-3">Last Seen</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr
                key={index}
                className={`border-t ${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                }`}
              >
                <td className="p-3">
                  <div className="font-bold">{row.domain}</div>
                  <div className="text-sm text-blue-600">
                    <a href={row.source} target="_blank" rel="noopener noreferrer">
                      Source
                    </a>{" "}
                    |{" "}
                    <a href={row.target} target="_blank" rel="noopener noreferrer">
                      Target
                    </a>
                  </div>
                </td>
                <td className="p-3">{row.domainAuthority}</td>
                <td className="p-3">{row.pageAuthority}</td>
                <td className="p-3">{row.spamScore}</td>
                <td className="p-3">{row.anchorText}</td>
                <td className="p-3">{row.firstSeen}</td>
                <td className="p-3">{row.lastSeen}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComponent;
