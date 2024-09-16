"use client";

import React from "react";
import Appetizers from "../../(components)/Appetizers";

const _makeupTypes = [
  "Bridal Makeup",
  "Daily Makeup",
  "Editorial Makeup",
  "Film and TV Makeup",
  "Runway Makeup",
  "Special Effects (SFX) Makeup",
  "Special Occasion Makeup",
  "Traditional Bridal Makeup",
  "Others",
];

interface Page4Props {
  handleContinue:()=>void;
  makeupTypes: string[];
  setMakeupTypes: React.Dispatch<React.SetStateAction<string[]>>;
  onsiteMakeup: boolean;
  setOnsiteMakeup: React.Dispatch<React.SetStateAction<boolean>>;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const Page: React.FC<Page4Props> = ({
  makeupTypes,
  setMakeupTypes,
  onsiteMakeup,
  setOnsiteMakeup,handleContinue,currentPage,setCurrentPage
}) => {
  const handleCategoryChange = (newCategory: "Yes" | "No") => {
    if (newCategory === "Yes") {
      setOnsiteMakeup(true);
    } else {
      setOnsiteMakeup(false);
    }
  };

  return (

    <div className="flex h-full flex-col items-start justify-start gap-5 overflow-y-scroll scrollbar-hide xs:w-[95%] xs:min-w-[90%]">
      <div className="flex min-w-full flex-col items-start justify-around gap-10">
        <div className="flex min-w-full flex-col items-start justify-around gap-10 rounded-xl bg-white p-3 md:p-6">
            <div className="flex gap-9">
            <h1 className="text-3xl font-semibold">Services Details</h1>
          </div>
          <div className="flex gap-9">
            <p className="">On-site Service availability ?</p>
          </div>
          <div className="flex flex-row gap-2">
            <div className="flex items-center gap-2">
              <input
                type="radio"
                checked={onsiteMakeup === true}
                onChange={() => handleCategoryChange("Yes")}
              />
              <p className="text-gray-500">Yes</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                checked={onsiteMakeup === false}
                onChange={() => handleCategoryChange("No")}
              />
              <p className="text-gray-500">No</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <h1 className="text-3xl font-semibold">Specialization makeups</h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <Appetizers
                field={"_makeupTypes"}
                appetizers={_makeupTypes}
                selectedAppetizers={makeupTypes}
                setSelectedAppetizers={setMakeupTypes}
              />
            </div>
            <div className="items-strech mt-9 flex flex-row gap-7 self-end">
              <button
                className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Previous
              </button>
              <button
                className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
                onClick={()=>setCurrentPage(currentPage + 1)}
              >
                Continue
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Page;
