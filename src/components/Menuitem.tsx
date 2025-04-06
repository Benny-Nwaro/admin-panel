import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  link?: string;
  active: boolean;
  subMenu?: { label: string; link: string }[];
}

const Menuitem: React.FC<MenuItemProps> = ({ icon, label,  active, subMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Main Menu Item */}
      <div
        className={`flex items-center justify-between p-3 cursor-pointer 
          ${active ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-gray-200"}
        `}
        onClick={() => subMenu && setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          {icon}
          <span>{label}</span>
        </div>
        {subMenu && (
          <FaChevronDown
            size={14}
            className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        )}
      </div>

      {/* Dropdown Menu */}
      {isOpen && subMenu && (
        <div className="ml-6 mt-2 space-y-1">
          {subMenu.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menuitem
