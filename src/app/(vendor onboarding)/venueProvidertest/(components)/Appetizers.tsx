"use client";

import React from "react";

type AppetizersProps = {
  appetizers: string[];
  selectedAppetizers: string[];
  setSelectedAppetizers: React.Dispatch<React.SetStateAction<string[]>>;
};

const Appetizers = ({
  appetizers,
  selectedAppetizers,
  setSelectedAppetizers,
}: AppetizersProps) => {
  const handleButtonClick = (appetizer: string) => {
    if (selectedAppetizers.includes(appetizer)) {
      setSelectedAppetizers(
        selectedAppetizers.filter((item) => item !== appetizer),
      );
    } else {
      setSelectedAppetizers([...selectedAppetizers, appetizer]);
    }
  };

  return (
    <div className="grid min-h-[100%] min-w-[100%] grid-cols-4 grid-rows-5 gap-3">
      {appetizers.map((appetizer, index) => (
        <button
          key={index}
          onClick={() => handleButtonClick(appetizer)}
          className={`text col-span-1 row-span-1 flex items-center justify-center rounded-2xl border border-none px-2 py-3 text-[2.5vw] font-medium outline-none md:text-[1vw] ${
            selectedAppetizers.includes(appetizer)
              ? "bg-[#2E3192] text-white"
              : "bg-[rgba(242,242,242,1)] text-gray-600"
          }`}
        >
          {appetizer}
        </button>
      ))}
    </div>
  );
};

export default Appetizers;