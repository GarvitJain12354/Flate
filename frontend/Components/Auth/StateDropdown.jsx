import React, { useState } from "react";

const StateDropdown = ({
  options,
  setSelectedOption,
  selectedOption,
  border,
  width,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    setSearchTerm(""); // Reset search after selection
  };

  // Filter options based on search input
  const filteredOptions = options.filter((option) =>
    option.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative w-full">
      {/* Dropdown button */}
      <div
        className={`min-w-full p-2 pl-2 flex items-center justify-between text-base max-md:pl-0 ${
          !border && "border-2"
        } border-gray-300 bg-white rounded-lg cursor-pointer`}
        onClick={toggleDropdown}
      >
        {selectedOption || "Select an option"}
        <svg
          className={`w-5 h-5 text-primary transition-all duration-200 ease-linear ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          className={`${
            width === "100%" ? "w-full" : "min-w-28"
          } max-md:w-full bg-white absolute rounded-b-2xl left-1/2 -translate-x-1/2 mx-auto border-2 border-gray-300 rounded-none z-10 max-h-60 overflow-hidden`}
        >
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border-b border-gray-300 focus:outline-none"
          />

          {/* Filtered Options */}
          <ul className="max-h-52 overflow-y-auto">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <li
                  key={index}
                  className="p-2 px-4 hover:bg-gray-200 cursor-pointer text-sm flex"
                  onClick={() => selectOption(option.name)}
                >
                  {option.name}
                </li>
              ))
            ) : (
              <li className="p-2 px-4 text-gray-500 text-sm">No results found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default StateDropdown;
