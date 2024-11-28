import React from "react";

interface Certification {
  title: string;
  issuer: string;
  issueDate: string;
  image: string;
}

interface CertificationsProps {
  certifications: Certification[];
}

const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
  return (
    <div className="max-w-5xl  bg-white rounded-2xl shadow-lg  mt-5 p-6 font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Certifications</h2>
        <button className="text-gray-600 hover:text-blue-500 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 3.75h4.5m-4.5 0v4.5m0-4.5L12 12m0 0l-4.5 4.5m4.5-4.5h9M12 12l-4.5-4.5m4.5 4.5H3.75"
            />
          </svg>
        </button>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-blue-50 rounded-lg p-4 shadow-md flex flex-col"
          >
            {/* Title */}
            <p className="text-sm font-semibold text-gray-800 mb-2">
              {cert.title}
            </p>

            {/* Issuer */}
            <p className="text-sm text-gray-600">{cert.issuer}</p>

            {/* Issue Date */}
            <p className="text-sm text-gray-600 mb-4">Issued {cert.issueDate}</p>

            {/* Certificate Image */}
            <div className="w-full">
              <img
                src={cert.image}
                alt="Certificate"
                className="w-full h-40 object-cover rounded-lg border border-gray-200"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
