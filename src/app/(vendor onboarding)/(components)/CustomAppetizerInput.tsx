"use client";

import React, { useState, KeyboardEvent } from "react";

interface CustomAppetizerInputProps {
  onAddCustom: (appetizer: string) => void;
  onDelete: () => void;
}

const CustomAppetizerInput: React.FC<CustomAppetizerInputProps> = ({
  onAddCustom,
  onDelete,
}) => {
  const [customAppetizer, setCustomAppetizer] = useState("");

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && customAppetizer.trim() !== "") {
      onAddCustom(customAppetizer.trim());
      setCustomAppetizer("");
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <div className="flex flex-grow items-center rounded-lg border border-gray-700 p-2 py-3 text-[3.5vw] font-medium md:text-[2vw] lg:text-[1vw]">
        <button className="text-gray-700">
          <img src="./Search.png" />
        </button>
        <input
          type="text"
          value={customAppetizer}
          onChange={(e) => setCustomAppetizer(e.target.value)}
          onKeyDown={handleKeyDown}
          className="mx-2 flex-grow bg-transparent outline-none"
          autoFocus
        />
      </div>
      <button onClick={onDelete} className="text-gray-700">
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
  );
};

export default CustomAppetizerInput;
