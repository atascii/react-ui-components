import React, { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

const Dropdown = ({ options, onChange, value }) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  function handleOptionClick(option) {
    setIsOpen(false);
    onChange(option);
  }

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="w-48 relative">
      <div
        className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full"
        onClick={handleClick}
      >
        {value?.label || "Select..."}
        {isOpen ? (
          <GoChevronUp className="text-lg" />
        ) : (
          <GoChevronDown className="text-lg" />
        )}
      </div>
      {isOpen && (
        <div className="absolute top-full rounded p-3 shadow bg-white w-full">
          {renderedOptions}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
