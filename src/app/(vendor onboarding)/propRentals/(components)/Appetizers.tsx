type Props = {
  appetizers: string[];
  selectedAppetizers: string[];
  setselectedAppetizers: (appetizers: string[]) => void;
};

const Appetizers = ({
  appetizers,
  selectedAppetizers = [] as string[],
  setselectedAppetizers,
}: Props) => {
  const toggleAppetizer = (appetizer: string) => {
    if (selectedAppetizers.includes(appetizer)) {
      // If already selected, remove it from the list
      setselectedAppetizers(
        selectedAppetizers.filter((item: string) => item !== appetizer),
      );
    } else {
      // If not selected, add it to the list
      setselectedAppetizers([...selectedAppetizers, appetizer]);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-3 md:grid-cols-4">
      {appetizers.map((appetizer: string) => (
        <button
          key={appetizer}
          onClick={() => toggleAppetizer(appetizer)}
          className={`col-span-1 row-span-1 flex min-h-[5rem] w-full items-center justify-center rounded-2xl px-2 py-3 text-sm font-medium outline-none md:min-h-[4rem] md:text-lg ${selectedAppetizers.includes(appetizer) ? "bg-[#2E3192] text-white" : "bg-gray-200 text-gray-600"}`}
        >
          {appetizer}
        </button>
      ))}
    </div>
  );
};

export default Appetizers;
