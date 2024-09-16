import React, { useState, useEffect } from "react";
import CustomAppetizerInput from "./CustomAppetizerInput";

type AppetizersProps = {
  field?: string;
  appetizers: string[];
  selectedAppetizers: string[];
  setSelectedAppetizers: React.Dispatch<React.SetStateAction<string[]>>;
};

const Appetizers: React.FC<AppetizersProps> = ({
  field,
  appetizers,
  selectedAppetizers,
  setSelectedAppetizers,
}) => {
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [customAppetizers, setCustomAppetizers] = useState<string[]>([]);

  useEffect(() => {
    // Using local storage:
    const storedAppetizers = localStorage.getItem(`${field}`);
    if (storedAppetizers) {
      setCustomAppetizers(JSON.parse(storedAppetizers));
    }
  }, [field, selectedAppetizers]);

  const handleButtonClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    appetizer: string,
  ) => {
    e.preventDefault();
    if (selectedAppetizers.includes(appetizer)) {
      setSelectedAppetizers(
        selectedAppetizers.filter((item) => item !== appetizer),
      );

      if (customAppetizers.includes(appetizer)) {
        const updatedCustomAppetizers = customAppetizers.filter(
          (item) => item !== appetizer,
        );
        setCustomAppetizers(updatedCustomAppetizers);
        // localStorage.setItem(`${field}`, JSON.stringify(updatedCustomAppetizers));
      }
    } else {
      setSelectedAppetizers([...selectedAppetizers, appetizer]);
    }
  };

  const handleAddCustomAppetizer = (appetizer: string) => {
    const updatedCustomAppetizers = [...customAppetizers, appetizer];
    setCustomAppetizers(updatedCustomAppetizers);
    setSelectedAppetizers([...selectedAppetizers, appetizer]);

    localStorage.setItem(`${field}`, JSON.stringify(updatedCustomAppetizers));
  };

  const b = (e: React.MouseEvent<HTMLButtonElement>, appetizer: string) => {
    e.preventDefault();
    if (customAppetizers.includes(appetizer)) {
      const updatedCustomAppetizers = customAppetizers.filter(
        (item) => item !== appetizer,
      );
      setCustomAppetizers(updatedCustomAppetizers);
      setSelectedAppetizers(
        selectedAppetizers.filter((item) => item !== appetizer),
      );
      localStorage.setItem(`${field}`, JSON.stringify(updatedCustomAppetizers));
    }
  };

  const toggleCustomInput = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowCustomInput((prev) => !prev);
  };

  return (
    <div className="w-[100%] space-y-4">
      <div className="grid min-h-[100%] min-w-[100%] grid-cols-2 gap-3 md:grid-cols-4">
        {appetizers.map((appetizer, index) =>
          appetizer.toLowerCase() !== "others" ? (
            <button
              key={index}
              onClick={(e) => handleButtonClick(e, appetizer)}
              className={`text col-span-1 row-span-1 flex min-w-[7rem] items-center justify-center rounded-2xl border px-2 py-3 text-[3.5vw] font-medium outline-none md:text-[2vw] lg:text-[1vw] ${selectedAppetizers.includes(appetizer) ? "border-2 border-[#2E3192] bg-white text-[#2E3192]" : "bg-[rgba(242,242,242,1)] text-gray-600"}`}
            >
              {appetizer}
            </button>
          ) : null,
        )}

        {/* Render custom appetizers before the "Others" button */}
        {customAppetizers.map((customApp, index) => (
          <div
            key={index}
            className={`col-span-1 row-span-1 flex min-w-[7rem] items-center justify-between rounded-2xl border px-4 py-3 text-[3.5vw] font-medium outline-none md:text-[2vw] lg:text-[1vw] ${selectedAppetizers.includes(customApp) ? "border-2 border-[#2E3192] bg-white text-[#2E3192]" : "bg-[rgba(242,242,242,1)] text-gray-600"}`}
          >
            <button
              className="flex-1 text-center"
              onClick={(e) => handleButtonClick(e, customApp)}
            >
              {customApp}
            </button>

            <button
              key={`custom-${index}`}
              className="flex items-center justify-center"
              onClick={(e) => b(e, customApp)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        ))}

        {/* Render the "Others" button */}
        {appetizers.includes("Others") && (
          <button
            onClick={toggleCustomInput}
            className={`text col-span-1 row-span-1 flex min-w-[7rem] items-center justify-center rounded-2xl border px-2 py-3 text-[3.5vw] font-medium outline-none md:text-[2vw] lg:text-[1vw] ${showCustomInput ? "border-2 border-[#2E3192] bg-white text-[#2E3192]" : "bg-[rgba(242,242,242,1)] text-gray-600"}`}
          >
            Others
          </button>
        )}
      </div>
      {showCustomInput && (
        <CustomAppetizerInput
          onAddCustom={handleAddCustomAppetizer}
          onDelete={() => setShowCustomInput(false)}
        />
      )}
    </div>
  );
};

export default Appetizers;
