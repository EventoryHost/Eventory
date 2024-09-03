"use client";

import React, { useEffect } from "react";
import Appetizers from "../(components)/Appetizers";

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
  makeupTypes: string[];
  setMakeupTypes: React.Dispatch<React.SetStateAction<string[]>>;
  onsiteMakeup: boolean;
  setOnsiteMakeup: React.Dispatch<React.SetStateAction<boolean>>;
}




const Page: React.FC<Page4Props> = ({
  makeupTypes,
  setMakeupTypes,
  onsiteMakeup,
  setOnsiteMakeup,
}) => {
  const handleCategoryChange = (newCategory: "Yes" | "No") => {
    if (newCategory === "Yes") {
      setOnsiteMakeup(true);
    } else {
      setOnsiteMakeup(false);
    }
  };

  

  return (
    <div className="flex h-full min-h-[calc(100vh-5.2rem)] w-full flex-col overflow-hidden lg:flex-row">
      <div className="flex flex-col items-start justify-between bg-[#FFFFFF] xs:gap-7 xs:pt-4 md:min-w-[30%] lg:max-w-[30%]">
        <div className="flex items-center justify-start gap-1 xs:self-start xs:pl-5 md:px-11 lg:mt-[2rem]">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2E3192] p-5 text-white">
            1
          </button>
          <div className="h-[0.3rem] w-[4rem] rounded-xl bg-[#2E3192]"></div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2E3192] p-5 text-white">
            2
          </button>
          <div className="h-[0.3rem] w-[4rem] rounded-xl bg-gray-300"></div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 p-5">
            3
          </button>
          <div className="h-[0.3rem] w-[4rem] rounded-xl bg-gray-300"></div>
        </div>
        <div className="flex items-center justify-start gap-1 xs:self-start xs:pl-5 md:px-11 lg:mt-[1rem]">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 p-5">
            4
          </button>
          <div className="h-[0.3rem] w-[4rem] rounded-xl bg-gray-300"></div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 p-5">
            5
          </button>
          <div className="h-[0.3rem] w-[4rem] rounded-xl bg-gray-300"></div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 p-5">
            6
          </button>
        </div>
        <div className="flex h-[50%] flex-col items-start justify-center gap-9 px-9 xs:pl-5 md:px-11 lg:p-8">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Tell us about your business
          </h1>
          <p className="text-black xs:text-sm md:w-[90%]">
            Fill out your Business details to get verified and proceed to
            registration process.
          </p>
        </div>
        <div className="relative h-[10rem] lg:w-full">
          <img
            src={"/tajmahal.png"}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="scroll-touch flex max-h-[calc(100vh-5.2rem)] min-w-[70%] flex-col items-center gap-9 overflow-y-scroll bg-[#F7F6F9] p-2 md:p-[1rem]">
        <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
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
                appetizers={_makeupTypes}
                selectedAppetizers={makeupTypes}
                setSelectedAppetizers={setMakeupTypes}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
