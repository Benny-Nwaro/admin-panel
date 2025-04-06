"use client";

import React, { useState } from "react";
import AddCategoryForm from "./AddCategoryForm";

interface TableProps<T extends { [key: string]: unknown }> {
  title: string;
  columns: string[];
  data: T[];
  actionLabel?: string;
  onActionClick?: (item: T) => void;
  addButtonLabel?: string;
  onAddClick?: () => void;
}

const Table = <T extends { [key: string]: unknown }>({
  title,
  columns,
  data,
  actionLabel = "Actions",
  onActionClick,
  addButtonLabel,
  onAddClick,
}: TableProps<T>) => {
  const [showAddCategoryForm, setShowAddCategoryForm] = useState(false);

  const handleAddCategoryClick = () => {
    setShowAddCategoryForm(true);
    onAddClick?.();
  };

  const handleCloseAddCategoryForm = () => {
    setShowAddCategoryForm(false);
  };

  const renderCellValue = (val: unknown): React.ReactNode => {
    if (val == null) {
      return "N/A";
    }

    if (typeof val === "boolean") {
      return val ? "Yes" : "No";
    }

    if (typeof val === "string" && (val.toLowerCase() === "active" || val.toLowerCase() === "inactive")) {
      return (
        <span
          className={`px-2 py-1 text-sm font-semibold rounded-md ${
            val.toLowerCase() === "active" ? "bg-green-500 text-white" : "bg-red-500 text-white"
          }`}
        >
          {val}
        </span>
      );
    }

    if (typeof val === "object" && val && Object.keys(val).length === 0) {
      return "Empty"; // Or "N/A" or JSON.stringify(val)
    }

  };

  return (
    <>
      {showAddCategoryForm ? (
        <div className="fixed inset-0 bg-white z-50">
          <div className="h-full">
            <AddCategoryForm onClose={handleCloseAddCategoryForm} />
          </div>
        </div>
      ) : (
        <div className="p-6 bg-white shadow-md rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">{title}</h2>
            {addButtonLabel && (
              <button
                onClick={handleAddCategoryClick}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                aria-label={`Add ${title}`}
              >
                {addButtonLabel}
              </button>
            )}
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  {columns.map((col, index) => (
                    <th
                      key={index}
                      className="px-4 py-2 text-left border border-gray-300"
                      scope="col"
                    >
                      {col}
                    </th>
                  ))}
                  <th className="px-4 py-2 border border-gray-300" scope="col">
                    {actionLabel}
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={rowIndex % 2 === 0 ? "bg-blue-50" : "bg-white"}
                  >
                    {columns.map((col, colIndex) => {
                      const val = item[col as keyof T];
                      return (
                        <td
                          key={colIndex}
                          className="px-4 py-2 border border-gray-300"
                        >
                          {renderCellValue(val)}
                        </td>
                      );
                    })}
                    <td className="px-4 py-2 border border-gray-300 text-center">
                      <button
                        onClick={() => onActionClick?.(item)}
                        className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
                        aria-label={`Perform action on item ${rowIndex + 1}`}
                      >
                        {actionLabel}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default Table;