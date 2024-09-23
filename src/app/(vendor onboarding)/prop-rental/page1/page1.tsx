"use client";

import StepBar from "@/app/(components)/stepBar";
import { Combobox } from "@/components/ui/combobox";
import React, { SetStateAction } from "react";
import Dropdown from "../../(components)/Dropdown";

const workerOptions = [
  { value: "0-2 Members", label: "0-2 Members" },
  { value: "2-4 Members", label: "2-4 Members" },
  { value: "4-7 Members", label: "4-7 Members" },
  { value: "More than 10 Members", label: "More than 10 Members" },
];
const eventOptions = [
  "Less than 50",
  "50-100 persons",
  "100-300 persons",
  "More than 300 ",
];

interface formState {
  managerName: string;
  workDescription: string;
  eventSize: string;
  handleChange: (key: string, value: any) => void;
  percentageValuePage3: number;
  percentageValuePage4: number;
  percentageValuePage5: number;
}

type PricingEntry = {
  name: string;
  min: number;
  max: number;
};

export interface page1Props {
  formState: formState;
  handleChange: (key: string, value: any) => void;
  handleNestedChange: (key: string, nestedKey: string, value: any) => void;
  navigateToPage: (page: number) => void;


  currentPage: number;
  setCurrentPage: (value: any) => void;
  handleSubmit: () => void;

}

const Page1: React.FC<page1Props> = ({
  formState,
  handleChange,
  handleNestedChange,
  currentPage,
  setCurrentPage,
}) => {
  return (
    <>
      <div className="scroll-touch w-full flex flex-col items-start gap-5 overflow-y-scroll rounded-xl bg-white p-3 scrollbar-hide  xs:justify-start md:p-6">

        <h1 className="text-2xl font-semibold">Basic Details</h1>

        <div className="flex min-w-full flex-col items-center gap-9 p-2">
          <div className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row">
            <div className="flex min-w-[50%] flex-col gap-2">
              <label className="font-medium text-base" htmlFor="vendorName">
                Manager Name (POC)<span className="text-red-500 ">*</span>
              </label>
              <input
                id="vendorName"
                type="text"
                value={formState.managerName || ""}
                onChange={(e) => handleChange("managerName", e.target.value)}
                className="w-full rounded-xl border-2 bg-white p-4 outline-none"
                placeholder="Enter the full name"
              />
            </div>
            <div className="flex min-w-[50%] flex-col gap-2">
              <label htmlFor="eventSize">Event Size</label>
              <Dropdown
                options={eventOptions}
                onSelect={(option: string) => { handleChange('eventSize', option) }}

                placeholder="Select event size you cover"
              />
            </div>
          </div>

        </div>
        <div className="flex min-w-[50%] flex-col  gap-9 p-2">
          <div className="flex min-w-[50%] flex-col gap-2">
            <label className="font-medium text-base" htmlFor="workDescription">
              Description about you
            </label>
            <textarea
              cols={30}
              rows={5}
              value={formState.workDescription || ""}
              onChange={(e) =>
                handleChange("workDescription", e.target.value)
              }
              className="h-full w-full rounded-xl border-2 bg-white p-4 outline-none"
              placeholder="Enter your Description"
            />
          </div>
        </div>




        {/* Next Button */}
        <div className="items-strech  flex flex-row gap-7 self-end">
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
          >
            Next
          </button>
        </div>



      </div >
    </>
  );
};

export default Page1;
