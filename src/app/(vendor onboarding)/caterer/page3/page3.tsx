"use client";

import React, { useState } from "react";
import Appetizers from "../../(components)/Appetizers";
import Image from "next/image";

const _EventTypes = [
  "Corporate",
  "Birthdays",
  "Anniversary",
  "Others",
  "Weddings",
];

const _additionalServices = ["Setup Services", "Cleanup Services", "Others"];

interface page3Props {
  selectedEventTypes: string[];
  setSelectedEventTypes: React.Dispatch<React.SetStateAction<string[]>>;
  selectedAdditionalServices: string[];
  setSelectedAdditionalServices: React.Dispatch<React.SetStateAction<string[]>>;
  handleContinue: () => void;
}
const Page3: React.FC<page3Props> = ({
  selectedEventTypes,
  setSelectedEventTypes,
  selectedAdditionalServices,
  setSelectedAdditionalServices,
  handleContinue,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleContinue();
  };

  return (
    <div className="flex h-full min-h-[calc(100vh-5.2rem)] w-full flex-col overflow-hidden lg:flex-row">
      <div className="scroll-touch items-strech flex max-h-[calc(100vh-5.2rem)] w-[100%] flex-col gap-9 overflow-y-scroll bg-[#F7F6F9] p-2 md:p-[3rem]">
        <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <h1 className="text-2xl font-semibold md:text-3xl">Event Details</h1>
          <h1 className="self-start text-lg font-normal md:text-2xl">
            Event Types Catered:
          </h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <Appetizers
                field={"EventTypes"}
                appetizers={_EventTypes}
                selectedAppetizers={selectedEventTypes}
                setSelectedAppetizers={setSelectedEventTypes}
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
                field={"additionalServices"}
                appetizers={_additionalServices}
                selectedAppetizers={selectedAdditionalServices}
                setSelectedAppetizers={setSelectedAdditionalServices}
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
    </div>
  );
};

export default Page3;
