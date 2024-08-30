import React, { useState, useEffect } from 'react';
import CustomAppetizerInput from '../../(components)/CustomAppetizerInput';

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
  }, []);

  const handleButtonClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    appetizer: string,
  ) => {
    e.preventDefault();
    if (selectedAppetizers.includes(appetizer)) {
      setSelectedAppetizers(selectedAppetizers.filter((item) => item !== appetizer));

      if (customAppetizers.includes(appetizer)) {
        const updatedCustomAppetizers = customAppetizers.filter((item) => item !== appetizer);
        setCustomAppetizers(updatedCustomAppetizers);
        localStorage.setItem(`${field}`, JSON.stringify(updatedCustomAppetizers));
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

  const toggleCustomInput = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowCustomInput((prev) => !prev);
  };

  return (
    <div className="space-y-4">
      <div className="grid min-h-[100%] min-w-[100%] grid-cols-2 gap-3 md:grid-cols-4">
        {appetizers.map((appetizer, index) => (
          appetizer.toLowerCase() === "others" ? (
            <button
              key={index}
              onClick={toggleCustomInput}
              className={`text col-span-1 row-span-1 flex min-w-[7rem] items-center justify-center rounded-2xl border border-none px-2 py-3 text-[3.5vw] font-medium outline-none md:text-[2vw] lg:text-[1vw] ${showCustomInput ? "bg-[#2E3192] text-white" : "bg-[rgba(242,242,242,1)] text-gray-600"}`}
            >
              Others
            </button>
          ) : (
            <button
              key={index}
              onClick={(e) => handleButtonClick(e, appetizer)}
              className={`text col-span-1 row-span-1 flex min-w-[7rem] items-center justify-center rounded-2xl border border-none px-2 py-3 text-[3.5vw] font-medium outline-none md:text-[2vw] lg:text-[1vw] ${selectedAppetizers.includes(appetizer) ? "bg-[#2E3192] text-white" : "bg-[rgba(242,242,242,1)] text-gray-600"}`}
            >
              {appetizer}
            </button>
          )
        ))}
        {customAppetizers.map((customApp, index) => (
          <button
            key={`custom-${index}`}
            onClick={(e) => handleButtonClick(e, customApp)}
            className={`text col-span-1 row-span-1 flex min-w-[7rem] items-center justify-center rounded-2xl border border-none px-2 py-3 text-[3.5vw] font-medium outline-none md:text-[2vw] lg:text-[1vw] ${selectedAppetizers.includes(customApp) ? "bg-[#2E3192] text-white" : "bg-[rgba(242,242,242,1)] text-gray-600"}`}
          >
            {customApp}
          </button>
        ))}
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