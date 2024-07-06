import React from 'react';

type Props = {
  appetizers: string[];
};

const Appetizers = ({ appetizers }: Props) => {
  return (
    <div className='min-w-[100%] min-h-[100%] grid gap-3 grid-cols-4 grid-rows-5  '>
      {appetizers.map((appetizer, index) => (
        <button key={index} className='border flex outline-none border-none hover:bg-[#2E3192] text-gray-600 hover:text-white font-medium items-center justify-center bg-gray-200  rounded-2xl px-2 py-3 row-span-1 col-span-1'>
        {appetizer}
      </button>
      ))}
    </div>
  );
};

export default Appetizers;
