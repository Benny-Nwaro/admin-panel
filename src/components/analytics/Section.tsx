import React from "react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-white rounded-lg">
    <h2 className="text-lg sm:text-xl font-semibold text-gray-600 mb-4">{title.toUpperCase()}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-2">{children}</div>
  </div>
);

export default Section;