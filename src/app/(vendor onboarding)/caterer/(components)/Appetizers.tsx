"use client";

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
  const handleButtonClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    appetizer: string,
  ) => {
    e.preventDefault();
    if (selectedAppetizers.includes(appetizer)) {
      setSelectedAppetizers(
        selectedAppetizers.filter((item) => item !== appetizer),
      );
    } else {
      setSelectedAppetizers([...selectedAppetizers, appetizer]);
    }
  };

  return (
    <div className="grid min-h-[100%] min-w-[100%] grid-cols-2 gap-3 md:grid-cols-4">
      {appetizers.map((appetizer, index) => (
        <button
          key={index}
          onClick={(e) => handleButtonClick(e, appetizer)}
          className={`text col-span-1 row-span-1 flex min-w-[7rem] items-center justify-center rounded-2xl border border-none px-2 py-3 text-[3.5vw] font-medium outline-none md:text-[2vw] lg:text-[1vw] ${
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
