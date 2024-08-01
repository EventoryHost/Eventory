import React from "react";

type Props = {
  appetizers: string[];
};

const Appetizers = ({ appetizers }: Props) => {
  return (
    <div className="grid min-h-[100%] min-w-[100%] grid-cols-3 gap-3 md:grid-cols-4">
      {appetizers.map((appetizer, index) => (
        <button
          key={index}
          className="col-span-1 row-span-1 flex items-center justify-center rounded-2xl border border-none bg-gray-200 px-2 py-3 text-sm font-medium text-gray-600 outline-none hover:bg-[#2E3192] hover:text-white md:text-lg"
        >
          {appetizer}
        </button>
      ))}
    </div>
  );
};

export default Appetizers;
