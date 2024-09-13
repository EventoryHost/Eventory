"use client";

import StepBar from "@/app/(components)/stepBar";
import { Combobox } from "@/components/ui/combobox";
import React, { SetStateAction } from "react";

const workerOptions = [
  { value: "0-2 Members", label: "0-2 Members" },
  { value: "2-4 Members", label: "2-4 Members" },
  { value: "4-7 Members", label: "4-7 Members" },
  { value: "More than 10 Members", label: "More than 10 Members" },
];
const yearsOptions = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "other", label: "other" },
];

interface formState {
  contactName: string;
  phoneNumber: string;
  workDescription: string;
  yearsOfExperience: string;
  numberOfWorkers: string;
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
  selectedCategory: string;
  setSelectedCategory: (value: any) => void;
  selectedAppetizers: string[];
  setselectedAppetizers: (value: SetStateAction<string[]>) => void;
  selectedDecor: string[];
  setSelectedDecor: (value: any) => void;
  selectedTentOptions: string[];
  setSelectedTentOptions: (value: any) => void;
  selectedAudioOptions: string[];
  setSelectedAudioOptions: (value: any) => void;
  selectedvisualOptions: string[];
  setSelectedVisualOptions: (value: any) => void;
  selectedLightOptions: string[];
  setSelectedLightOptions: (value: any) => void;
  percentageValuePage3: number;
  furnitureHourlyPricingEntries: any;
  tentHourlyPricingEntries: any;
  furnitureDealPricingEntries: any;
  furnitureWorkerPricingEntries: any;
  handleAddPricingEntry: (entry: PricingEntry) => void;
  handleAddTentHourlyPricingEntries: (entry: PricingEntry) => void;
  handleAddTentPricingEntry: (entry: PricingEntry) => void;
  handleAddAudioPricingEntry: (entry: PricingEntry) => void;
}

const Page1: React.FC<page1Props> = ({
  formState,
  handleChange,
  handleNestedChange,
}) => {
  return (
    <>
      <div className="flex h-full min-h-[calc(100vh-5.2rem)] w-full flex-col overflow-hidden lg:flex-row">
        <div className="flex flex-col items-start justify-between bg-[#FFFFFF] xs:gap-7 xs:pt-4 md:min-w-[30%] lg:max-w-[30%]">
          <div className="flex items-center justify-start gap-1 xs:self-start xs:pl-5 lg:mt-[2rem]">
            <StepBar currentStep={1} />
          </div>
          <div className="ml-8 flex h-[50%] flex-col items-start justify-center gap-9 px-9 xs:pl-5 md:px-11 lg:p-8">
            <h1 className="text-2xl font-semibold md:text-4xl lg:text-5xl">
              Fill out your Basic details
            </h1>
            <p className="text-gray-600 xs:text-sm md:w-[90%] lg:text-lg">
              Please provide the details of the rental service offered by your
              company.
            </p>
          </div>
          <div className="relative h-[10rem] lg:w-full">
            <img
              src={"/tajmahal.png"}
              alt="Taj Mahal"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center bg-[#F7F6F9] p-4 md:p-6">
          <div className="flex flex-col gap-6 rounded-xl bg-white p-4 xs:min-w-[90%] md:p-6">
            <span className="text-xl font-semibold md:text-2xl">
              Basic Information
            </span>

            <div className="flex flex-col gap-6 md:flex-row md:gap-8">
              <div className="flex w-full flex-col gap-4 md:w-1/2">
                <label className="font-medium" htmlFor="vendorName">
                  Contact Person Name
                </label>
                <input
                  id="vendorName"
                  type="text"
                  value={formState.contactName || ""}
                  onChange={(e) => handleChange("contactName", e.target.value)}
                  className="w-full rounded-xl border-2 bg-white p-4 outline-none"
                  placeholder="Enter the full name"
                />
              </div>

              <div className="flex w-full flex-col gap-4 md:w-1/2">
                <label className="font-medium" htmlFor="contactNumber">
                  Contact Phone Number
                </label>
                <input
                  id="contactNumber"
                  type="text"
                  value={formState.phoneNumber || ""}
                  onChange={(e) => handleChange("phoneNumber", e.target.value)}
                  className="w-full rounded-xl border-2 bg-white p-4 outline-none"
                  placeholder="Enter your contact number"
                />
              </div>
            </div>

            <div className="flex flex-col gap-6 md:flex-row md:gap-8">
              <div className="flex h-full w-full flex-col gap-4 md:w-1/2">
                <label className="font-medium" htmlFor="workDescription">
                  What work do you do?
                </label>
                <input
                  id="workDescription"
                  type="text"
                  value={formState.workDescription || ""}
                  onChange={(e) =>
                    handleChange("workDescription", e.target.value)
                  }
                  className="h-full w-full rounded-xl border-2 bg-white p-4 outline-none"
                  placeholder="Enter the work you do"
                />
              </div>

              <div className="flex h-full w-full flex-col gap-4 md:w-1/2">
                <label htmlFor="yearsOfExperience">Years of Experience</label>
                <Combobox
                  options={yearsOptions}
                  placeholder={
                    formState.yearsOfExperience ||
                    "Select your years of experience"
                  }
                  setFunction={(value) =>
                    handleChange("yearsOfExperience", value)
                  }
                  className="flex h-full items-center justify-between rounded-xl border-2 py-3 text-gray-500 hover:text-[#2E3192]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-6 md:flex-row md:gap-8">
              <div className="flex h-full w-full flex-col gap-4 md:w-1/2">
                <label htmlFor="numberOfWorkers">Number of Workers</label>
                <Combobox
                  options={workerOptions}
                  placeholder={
                    formState.numberOfWorkers || "Select your number of workers"
                  }
                  setFunction={(value) =>
                    handleChange("numberOfWorkers", value)
                  }
                  className="flex h-full items-center justify-between rounded-xl border-2 py-3 text-gray-500 hover:text-[#2E3192]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page1;