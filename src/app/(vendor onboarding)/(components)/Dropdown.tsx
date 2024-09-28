import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface DropdownProps {
  options: string[];
  onSelect: (option: string) => void;
  placeholder?: string; // New placeholder prop
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onSelect,
  placeholder = "Select an option",
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null); // Allow null for initial state

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className="relative w-full">
      <button
        type="button"
        className="flex w-full items-center justify-between rounded-xl border-2 bg-white p-3 py-5 text-left text-sm shadow-sm hover:bg-gray-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`${selectedOption ? "text-black" : "text-gray-400"}`}>
          {selectedOption || placeholder}
        </span>

        {isOpen ? (
          <ChevronUp className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        ) : (
          <ChevronDown
            className="-mr-1 ml-2 h-5 w-5 text-gray-300"
            aria-hidden="true"
          />
        )}
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full rounded-xl bg-white shadow-xl">
          <ul className="max-h-60 overflow-auto rounded-md py-1 text-base focus:outline-none sm:text-sm">
            {options.map((option) => (
              <li
                key={option}
                className={`relative flex cursor-pointer select-none items-center gap-1 py-2 pl-3 pr-9 ${
                  selectedOption === option ? "text-black" : "text-gray-900"
                }`}
                onClick={() => handleSelect(option)}
              >
                {selectedOption === option ? (
                  <img src={"/selection/Choice_2.svg"} className="h-5 w-5" />
                ) : (
                  <img src={"/selection/Choice.svg"} className="h-5 w-5" />
                )}

                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
