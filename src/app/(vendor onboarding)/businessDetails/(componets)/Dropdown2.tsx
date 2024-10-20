import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface Option {
  value: string;
  label: string;
}

interface DropdownProps {
  options: Option[];
  onSelect: (value: string) => void;
  isOpen: boolean; // New prop to control open/close state
  onToggle: () => void; // New prop to toggle open/close
  placeholder?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onSelect,
  isOpen,
  onToggle,
  placeholder = "Select an option",
}) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
    onSelect(option.value);
    onToggle(); // Close the dropdown after selection
  };

  return (
    <div className="relative w-full">
      <button
        type="button"
        className="flex w-full items-center justify-between rounded-xl border-2 bg-white p-5 py-3 text-left shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={onToggle}
      >
        <span className={`${selectedOption ? "text-black" : "text-gray-400"}`}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-full rounded-md bg-white shadow-lg">
          <ul className="max-h-60 overflow-auto rounded-md py-1 text-base focus:outline-none sm:text-sm">
            {options.map((option) => (
              <li
                key={option.value}
                className={`relative flex cursor-pointer select-none items-center gap-1 py-2 pl-3 pr-9 ${
                  selectedOption?.value === option.value
                    ? "text-black"
                    : "text-gray-900"
                }`}
                onClick={() => handleSelect(option)}
              >
                {selectedOption?.value === option.value ? (
                  <img
                    src={
                      "https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/components/selection/Choice_2.svg"
                    }
                    alt=""
                    className="h-5 w-5"
                  />
                ) : (
                  <img
                    src={
                      "https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/components/selection/Choice.svg"
                    }
                    alt=""
                    className="h-5 w-5"
                  />
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

export default Dropdown;
