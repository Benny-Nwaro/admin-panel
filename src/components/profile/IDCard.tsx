import React from "react";

interface IDCardProps {
  idType: string;
  cardImage: string;
  licenseNumber: string;
  issueDate: string;
  expDate: string;
}

const IDCard: React.FC<IDCardProps> = ({
  idType,
  cardImage,
  licenseNumber,
  issueDate,
  expDate,
}) => {
  return (
    <div className="max-w-md bg-white rounded-2xl shadow-lg p-6 mt-5 font-sans">
      {/* Header */}
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Identification</h3>

      {/* ID Type */}
      <div className="mb-4">
        <span className="text-sm font-medium text-gray-500">ID Type</span>
        <p className="text-base font-semibold text-gray-800 mt-1">{idType}</p>
      </div>

      {/* Card Image */}
      <div className="mb-6">
        <img
          src={cardImage}
          alt={`${idType} preview`}
          className="w-full rounded-md border border-gray-300 shadow-sm"
        />
      </div>

      {/* License Details (Responsive) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-gray-700">
        <div>
          <span className="block text-sm font-medium text-gray-500">
            Driver’s License
          </span>
          <p className="text-sm font-semibold mt-1">{licenseNumber}</p>
        </div>
        <div>
          <span className="block text-sm font-medium text-gray-500">Issue Date</span>
          <p className="text-sm font-semibold mt-1">{issueDate}</p>
        </div>
        <div>
          <span className="block text-sm font-medium text-gray-500">Exp Date</span>
          <p className="text-sm font-semibold mt-1">{expDate}</p>
        </div>
      </div>
    </div>
  );
};

export default IDCard;
