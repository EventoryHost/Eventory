import React from "react";

type CategoryBarProps = {
  event: string;
  selected: string;
  setSelected: (item: string) => void;
  view: string;
  setView: (viewType: string) => void;
};

const CategoryBar: React.FC<CategoryBarProps> = ({
  event,
  selected,
  setSelected,
  view,
  setView,
}) => {
  const handleSelect = (item: string) => {
    setSelected(item);
  };

  const handleViewSelect = (viewType: string) => {
    setView(viewType);
  };

  return (
    <div className="rounded-lg border-b-2 border-[#DFDFDF]">
      <div className="p-6">
        {event && <h1 className="p-2 text-sm">Home/{event}/SearchResult</h1>}
        <div className="mt-3 flex items-center justify-between px-6 pt-4">
          {/* Left section - Venues list */}
          <ul className="mt-2 flex items-center gap-10 font-semibold">
            {["Venues 1", "Venues 2", "Venues 3", "Venues 4", "Venues 5"].map(
              (venue, index) => (
                <li
                  key={index}
                  className={`cursor-pointer pb-2 text-center ${
                    selected === venue
                      ? "border-b-4 border-[#2E3192] text-[#2E3192]"
                      : ""
                  }`}
                  onClick={() => handleSelect(venue)}
                >
                  {venue}
                </li>
              ),
            )}
          </ul>

          {/* Right section - View options and sort */}
          <div className="flex items-center gap-[21px] text-sm">
            <div className="flex items-center gap-[24px]">
              <div
                className={`flex cursor-pointer items-center gap-2 p-2 ${
                  view === "List" ? "text-[#2E3192]" : ""
                }`}
                onClick={() => handleViewSelect("List")}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill={view === "List" ? "#2E3192" : "#B4B4B4"}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="2"
                    cy="2"
                    r="2"
                    transform="matrix(-1 0 0 1 5 4.5)"
                    stroke={selected === "Grid" ? "#2E3192" : "#B4B4B4"}
                  />
                  <path
                    d="M21 6.5H8"
                    stroke={view === "List" ? "#2E3192" : "#B4B4B4"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="2"
                    cy="2"
                    r="2"
                    transform="matrix(-1 0 0 1 5 10.5)"
                    stroke={selected === "Grid" ? "#2E3192" : "#B4B4B4"}
                  />
                  <path
                    d="M18.5 12.5L8 12.5"
                    stroke={view === "List" ? "#2E3192" : "#B4B4B4"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="2"
                    cy="2"
                    r="2"
                    transform="matrix(-1 0 0 1 5 16.5)"
                    stroke={selected === "Grid" ? "#2E3192" : "#B4B4B4"}
                  />
                  <path
                    d="M16 18.5H8"
                    stroke={view === "List" ? "#2E3192" : "#B4B4B4"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                List
              </div>
              <div
                className={`flex cursor-pointer items-center gap-2 p-2 ${
                  view === "Grid" ? "text-[#2E3192]" : ""
                }`}
                onClick={() => handleViewSelect("Grid")}
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill={view === "Grid" ? "#2E3192" : "#B4B4B4"}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1"
                    y="1"
                    width="7"
                    height="7"
                    rx="2.5"
                    stroke={view === "Grid" ? "#2E3192" : "#B4B4B4"}
                    strokeWidth="1.5"
                  />
                  <rect
                    x="1"
                    y="11"
                    width="7"
                    height="7"
                    rx="2.5"
                    stroke={view === "Grid" ? "#2E3192" : "#B4B4B4"}
                    strokeWidth="1.5"
                  />
                  <rect
                    x="11"
                    y="1"
                    width="7"
                    height="7"
                    rx="2.5"
                    stroke={view === "Grid" ? "#2E3192" : "#B4B4B4"}
                    strokeWidth="1.5"
                  />
                  <rect
                    x="11"
                    y="11"
                    width="7"
                    height="7"
                    rx="2.5"
                    stroke={view === "Grid" ? "#2E3192" : "#B4B4B4"}
                    strokeWidth="1.5"
                  />
                </svg>
                Grid
              </div>
            </div>
            <div className="flex cursor-pointer items-center gap-2 rounded-lg border border-[#DFDFDF] px-8 py-2">
              <img src="./Filter.png" alt="Sort" />
              Sort
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryBar;
