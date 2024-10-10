import Dropdown from "@/app/(vendor onboarding)/(components)/Dropdown";
import Link from "next/link";
import React, { useState } from "react";

type CategoryBarProps = {
  event?: string;
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
  const [sort, setSort] = useState<String>(""); // Initial value can be false

  const handleViewSelect = (viewType: string) => {
    setView(viewType);
  };
  const eventTabsMap: { [key: string]: string[] } = {
    birthday: ["Venues", "Caterer", "Decorator", "Invitation", "Gifts"],
    marriage: ["Cakes", "Entertainment", "Photography", "Decor", "Gifts"],
    anniversary: ["Venues", "Caterer", "AV Equipment", "Transport", "Gifts"],
    "special guest": ["Venues", "Caterer", "Decorator", "Invitation", "Gifts"],
    tradional: ["Venues", "Caterer", "Decorator", "Invitation", "Gifts"],
  };
  const _sort = [
    "What's New",
    "Price: Low to High",
    "Price: High to Low",
    "Most Popular",
    "Costumer Rating",
  ];
  const tabs = event ? eventTabsMap[event.toLowerCase()] || [] : [];

  return (
    <div
      className={`rounded-2xl ${event ? "border-b-2 border-[#DFDFDF]" : "border-0"}`}
    >
      <div className=" ">
        {event && (
          <h1 className="bg-gray-100 px-16 py-6 text-base">
            {" "}
            <Link href={"/"}>Home</Link> /{event}/SearchResult
          </h1>
        )}
        <div className="md:px-14 px-4">
          <div
            className={`flex items-center justify-between gap-20 md:py-6 py-3 ${!event && "bg-gray-100"} overflow-x-auto scrollbar-hide`}
          >
            {/* Left section - Venues list */}
            <ul className="flex items-center gap-10 md:text-xl text-sm font-medium">
              {tabs.map((venue, index) => (
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
              ))}
            </ul>

            {/* Right section - View options and sort */}
            <div className="flex items-center justify-end gap-[21px] text-sm font-normal">
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
                  <span className="hidden md:block">List</span>
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
                  <span className="hidden md:block">Grid</span>
                </div>
              </div>
              <div className="flex cursor-pointer items-center">
                <Dropdown
                  options={_sort}
                  onSelect={(option: string) => {
                    setSort(option);
                  }}
                  placeholder=""
                  sort={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryBar;
