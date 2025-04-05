import React from "react";

interface ButtonProps {
  onClick?: () => void;
}

const NextButton: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
    >
      Next
    </button>
  );
};

export default NextButton;
