"use client";

import React, { useState } from "react";
import Appetizers from "./Appetizers";
import Image from "next/image";

const appetizers = [
  "Weddings",
  "Corporate",
  "Birthdays",
  "Anniversary",
  "Others",
];

const beverages = ["Setup Services", "Cleanup Services", "Others"];

const Page3 = ({
  selectedAppetizers,
  setSelectedAppetizers,
  selectedBeverages,
  setSelectedBeverages,
  handleContinue,
}: {
  selectedAppetizers: string[];
  setSelectedAppetizers: React.Dispatch<React.SetStateAction<string[]>>;
  selectedBeverages: string[];
  setSelectedBeverages: React.Dispatch<React.SetStateAction<string[]>>;
  handleContinue: () => void;
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleContinue();
  };

  return (
    <form className="flex h-full min-h-[calc(100vh-5.2rem)] w-full flex-col overflow-hidden lg:flex-row">
      <div className="scroll-touch items-strech flex max-h-[calc(100vh-5.2rem)] w-[100%] flex-col gap-9 overflow-y-scroll bg-[#F7F6F9] p-2 md:p-[3rem]">
        <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <h1 className="text-2xl font-semibold md:text-3xl">Event Details</h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <h1 className="self-start text-lg font-normal md:text-2xl">
              Event Types Catered:
            </h1>
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <Appetizers
                appetizers={appetizers}
                selectedAppetizers={selectedAppetizers}
                setSelectedAppetizers={setSelectedAppetizers}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <h1 className="self-start text-lg font-normal md:text-2xl">
            Additional Services:
          </h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <Appetizers
                appetizers={beverages}
                selectedAppetizers={selectedBeverages}
                setSelectedAppetizers={setSelectedBeverages}
              />
            </div>
            <div className="items-strech mt-9 flex flex-row gap-7 self-end">
              <button
                className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
                onClick={handleSubmit}
              >
                Skip
              </button>
              <button
                className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
                onClick={handleSubmit}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Page3;