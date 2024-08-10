"use client";

import StepBar from "@/app/(components)/stepBar";
import ThreeStepBar from "@/app/(components)/threeStepBar";
import { Combobox } from "@/components/ui/combobox";
import React from "react";

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
}

export interface page1Props {
  formState: formState;
  handleChange: (key: string, value: any) => void;
  handleNestedChange: (key: string, nestedKey: string, value: any) => void;
  navigateToPage: (page: number) => void;
}

const page1: React.FC<page1Props> = ({
  formState,
  handleChange,
  handleNestedChange,
}) => {
  return (<>
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
            Please provide the details of the rental service offered by your company.
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
      <div className="flex w-full flex-col items-center justify-center bg-[#F7F6F9] p-2 md:p-[1rem]">
        <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <span className="text-2xl font-semibold">Basic Information</span>

          <div className="flex">
            <div className="flex w-1/2 flex-col items-center justify-between gap-5 md:flex-row">
              <div className="flex w-full flex-col gap-4 md:w-[60%]">
                <label className="font-medium" htmlFor="vendorName">
                  Contact Person Name
                </label>
                <input
                  id="vendorName"
                  type="text"
                  value={formState.contactName}
                  onChange={(e) => handleChange("contactName", e.target.value)}
                  className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                  placeholder="Enter the full name"
                />
              </div>
            </div>

            <div className="flex w-1/2 flex-col items-center justify-between gap-5 md:flex-row">
              <div className="flex w-full flex-col gap-4 md:w-[60%]">
                <label className="font-medium" htmlFor="contactNumber">
                  Conact Phone Number
                </label>
                <input
                  id="contactNumber"
                  type="text"
                  value={formState.phoneNumber}
                  onChange={(e) =>
                    handleChange("phoneNumber", e.target.value)
                  }
                  className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                  placeholder="Enter your contact Number"
                />
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="flex w-1/2 flex-col items-center justify-between gap-5 md:flex-row">
              <div className="flex w-full flex-col gap-4 md:w-[60%]">
                <label className="font-medium" htmlFor="contactNumber">
                  What work do you do?
                </label>
                <input
                  id="contactNumber"
                  type="text"
                  value={formState.workDescription}
                  onChange={(e) =>
                    handleChange("workDescription", e.target.value)
                  }
                  className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                  placeholder="Enter the work you do"
                />
              </div>
            </div>
            <div className="flex w-full flex-col gap-4 md:w-[48%]">
              <label htmlFor="workers">Number of workers</label>
              <Combobox
                options={yearsOptions}
                placeholder={
                  `${formState.yearsOfExperience}` || "Select your years of experience "
                }
                setFunction={(value) =>
                  handleChange("yearsOfExperience", value)
                }
                className="flex items-center justify-between rounded-xl border-2 py-6 text-gray-500 hover:text-[#2E3192]"
              />
            </div>
          </div>

          <div className="flex w-full flex-col gap-4 md:w-[48%]">
              <label htmlFor="workers">Number of workers</label>
              <Combobox
                options={workerOptions}
                placeholder={
                  `${formState.numberOfWorkers}` || "Select your number of workers"
                }
                setFunction={(value) =>
                  handleChange("numberOfWorkers", value)
                }
                className="flex items-center justify-between rounded-xl border-2 py-6 text-gray-500 hover:text-[#2E3192]"
              />
            </div>
           



        </div>
      </div>



    </div>
  </>
  );
}

export default page1;