import React from "react";

type Props = {
  appetizers: string[];
};

const Appetizers = ({ appetizers }: Props) => {
  return (
    <div className="grid min-h-[100%] min-w-[100%] grid-cols-4 grid-rows-5 gap-3">
      {appetizers.map((appetizer, index) => (
        <button
          key={index}
          className="text col-span-1 row-span-1 flex items-center justify-center rounded-2xl border border-none bg-[rgba(242,242,242,1)] px-2 py-3 text-[2.5vw] font-medium text-gray-600 outline-none hover:bg-[#2E3192] hover:text-white md:text-[1vw]"
        >
          {appetizer}
        </button>
      ))}
    </div>
  );
};

export default Appetizers;
