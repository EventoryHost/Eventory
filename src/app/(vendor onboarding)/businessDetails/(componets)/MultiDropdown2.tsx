import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Option {
  value: string;
  label: string;
}

interface MultipleDropdownProps {
  options: Option[];
  onSelect: (values: string[]) => void; // Return array of values
  isOpen: boolean; // Control the dropdown's open/close state
  onToggle: () => void; // Function to toggle open/close state
  placeholder?: string;
}

const MultipleDropdown: React.FC<MultipleDropdownProps> = ({
  options,
  onSelect,
  isOpen,
  onToggle,
  placeholder = "Select options",
}) => {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]); // Track multiple selections

  const handleSelect = (option: Option) => {
    const isSelected = selectedOptions.some(
      (selected) => selected.value === option.value
    );

    let updatedSelectedOptions;
    if (isSelected) {
      // Remove the option if it's already selected
      updatedSelectedOptions = selectedOptions.filter(
        (selected) => selected.value !== option.value
      );
    } else {
      // Add the option if it's not selected
      updatedSelectedOptions = [...selectedOptions, option];
    }

    setSelectedOptions(updatedSelectedOptions);
    onSelect(updatedSelectedOptions.map((option) => option.value)); // Pass array of values to parent
  };

  const renderSelectedText = () => {
    if (selectedOptions.length === 0) {
      return <span className="text-gray-400">{placeholder}</span>;
    } else {
      return (
        <div className="flex flex-wrap gap-2">
          {selectedOptions.map((option) => (
            <span
              key={option.value}
              onClick={() => handleSelect(option)}
              className="flex h-10 items-center justify-around gap-2 rounded-lg bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700"
            >
              {option.label}
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-center">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 2L14 14M2 14L14 2"
                    stroke="#2B3F6C"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </span>
          ))}
        </div>
      );
    }
  };

  return (
    <div className="relative w-full">
      <button
        type="button"
        className="flex w-full items-center justify-between rounded-xl border-2 bg-white p-5 py-3 text-left shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={onToggle} // Use onToggle to handle the click
      >
        <span className={`${selectedOptions.length ? "text-black" : "text-gray-400"}`}>
          {renderSelectedText()}
        </span>
        <ChevronDown className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg">
          <ul className="max-h-60 overflow-auto rounded-md py-1 text-base focus:outline-none sm:text-sm">
            {options.map((option) => (
              <li
                key={option.value}
                className={`relative flex cursor-pointer select-none items-center gap-1 py-2 pl-3 pr-9 ${
                  selectedOptions.some(
                    (selected) => selected.value === option.value
                  )
                    ? "text-black"
                    : "text-gray-900"
                }`}
                onClick={() => handleSelect(option)}
              >
                {selectedOptions.some(
                  (selected) => selected.value === option.value
                ) ? (
                  <img src={"/selection/Choice_2.svg"} className="h-5 w-5" />
                ) : (
                  <img src={"/selection/Choice.svg"} className="h-5 w-5" />
                )}
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MultipleDropdown;

