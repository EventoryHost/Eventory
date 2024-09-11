import Link from 'next/link';
import React from 'react';

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
  setView
}) => {
  const handleSelect = (item: string) => {
    setSelected(item);
  };

  const handleViewSelect = (viewType: string) => {
    setView(viewType);
  };
  const eventTabsMap: { [key: string]: string[] } = {
    birthday: ["Venues", "Caterer", "Decorator", "Invitation", "Gifts"],
    marriage: ["Cakes", "Entertainment", "Photography", "Decor", "Gifts"],
    anniversary: ["Venues", "Caterer", "AV Equipment", "Transport", "Gifts"],
    "special guest": ["Venues", "Caterer", "Decorator", "Invitation", "Gifts"],
    tradional : ["Venues", "Caterer", "Decorator", "Invitation", "Gifts"],
  };

  const tabs = eventTabsMap[event.toLowerCase()] || [];

  return (
    <div className='border-b-2 border-[#DFDFDF] rounded-2xl '>
      <div className=''>
        {event && <h1 className='text-base py-6 px-16 bg-gray-100'> <Link href={"/"}>Home</Link> /{event}/SearchResult</h1>}
        <div className="flex items-center justify-between  px-[72px] py-[24px] ">
          {/* Left section - Venues list */}
          <ul className="flex items-center gap-10 text-xl font-medium">
            {tabs.map(
              (venue, index) => (
                <li
                  key={index}
                  className={`cursor-pointer text-center pb-2 ${
                    selected === venue
                      ? "border-b-4  border-[#2E3192] text-[#2E3192]"
                      : ""
                  }`}
                  onClick={() => handleSelect(venue)}
                >
                  {venue}
                </li>
              )
            )}
          </ul>

          {/* Right section - View options and sort */}
          <div className="flex items-center gap-[21px] text-sm font-normal">
            <div className="flex items-center gap-[24px]">
              <div
                className={`p-2 cursor-pointer flex items-center gap-2 ${
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
                  <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 5 4.5)" stroke={selected === "Grid" ? "#2E3192" : "#B4B4B4"} />
                  <path d="M21 6.5H8" stroke={view === "List" ? "#2E3192" : "#B4B4B4"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 5 10.5)" stroke={selected === "Grid" ? "#2E3192" : "#B4B4B4"} />
                  <path d="M18.5 12.5L8 12.5" stroke={view === "List" ? "#2E3192" : "#B4B4B4"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 5 16.5)" stroke={selected === "Grid" ? "#2E3192" : "#B4B4B4"} />
                  <path d="M16 18.5H8" stroke={view === "List" ? "#2E3192" : "#B4B4B4"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                List
              </div>
              <div
                className={`p-2 cursor-pointer flex items-center gap-2 ${
                  view === "Grid" ? "text-[#2E3192]" : ""
                }`}
                onClick={() => handleViewSelect("Grid")}
              >
                <svg width="19" height="19" viewBox="0 0 19 19" fill={view === "Grid" ? "#2E3192" : "#B4B4B4"} xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="1" width="7" height="7" rx="2.5" stroke={view === "Grid" ? "#2E3192" : "#B4B4B4"} strokeWidth="1.5" />
                  <rect x="1" y="11" width="7" height="7" rx="2.5" stroke={view === "Grid" ? "#2E3192" : "#B4B4B4"} strokeWidth="1.5" />
                  <rect x="11" y="1" width="7" height="7" rx="2.5" stroke={view === "Grid" ? "#2E3192" : "#B4B4B4"} strokeWidth="1.5" />
                  <rect x="11" y="11" width="7" height="7" rx="2.5" stroke={view === "Grid" ? "#2E3192" : "#B4B4B4"} strokeWidth="1.5" />
                </svg>
                Grid
              </div>
            </div>
            <div
              className="cursor-pointer border border-[#DFDFDF] px-8 py-2 rounded-lg flex items-center gap-2"
            >
              <img src='./Filter.png' alt="Sort" />
              Sort
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryBar;