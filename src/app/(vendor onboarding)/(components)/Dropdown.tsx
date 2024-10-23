import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface DropdownProps {
  sort?: boolean;
  options: string[];
  onSelect: (option: string) => void;
  selectedOption?: string | null; // New prop for controlled component
  placeholder?: string; // New placeholder prop
}

const Dropdown: React.FC<DropdownProps> = ({
  sort,
  options,
  onSelect,
  selectedOption = null, // Default to null if not provided
  placeholder = "Select an option",
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentSelectedOption, setCurrentSelectedOption] = useState<
    string | null
  >(selectedOption); // Use selectedOption for initial state

  useEffect(() => {
    // Update local state when selectedOption changes from parent
    setCurrentSelectedOption(selectedOption);
  }, [selectedOption]);

  const handleSelect = (option: string) => {
    setCurrentSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className="relative w-full min-w-[10rem]">
      <button
        type="button"
        className="flex w-full items-center justify-between rounded-xl border-2 bg-white p-3 py-5 text-left text-sm shadow-sm hover:bg-gray-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {sort && <span className={`px-2 text-gray-400`}>Sort:</span>}
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
        <div className="absolute z-10 mt-2 w-full rounded-xl bg-white shadow-xl">
          <ul className="max-h-60 overflow-auto rounded-md py-1 text-base focus:outline-none sm:text-sm">
            {options.map((option) => (
              <li
                key={option}
                className={`relative flex cursor-pointer select-none items-center gap-1 py-2 pl-3 pr-9 ${
                  currentSelectedOption === option
                    ? "text-black"
                    : "text-gray-900"
                }`}
                onClick={() => handleSelect(option)}
              >
                {currentSelectedOption === option ? (
                  <img
                    src={
                      "https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/components/selection/Choice_2.svg"
                    }
                    className="h-5 w-5"
                    alt=""
                  />
                ) : (
                  <img
                    src={
                      "https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/components/selection/Choice.svg"
                    }
                    className="h-5 w-5"
                    alt=""
                  />
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
