"use client";

import React, { useState } from "react";
import { ComboboxDemo } from "@/components/dropdown";
import { Dropdown } from "react-day-picker";
import { Combobox } from "@/components/ui/combobox";
import { ArrowUpSquare, Upload } from "lucide-react";
import Appetizers from "../(components)/Appetizers";

const appetizers = [
  "Weddings",
  "Corporate",
  "Birthdays",
  "Anniversary",
  "Others",
];

const cuisine = [
  { value: "north", label: "North Indian" },
  { value: "south", label: "South Indian" },
  { value: "chinese", label: "Chinese" },
  { value: "italian", label: "Italian" },
];

const beverages = ["Setup Services", "Cleanup Services", "Others"];

const Page = () => {
  const [businessName, setBusinessName] = useState("");
  const [category, setCategory] = useState("");
  const [gstin, setGstin] = useState("");
  const [years, setYears] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");
  const [landmark, setLandmark] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [cities, setCities] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Business Name:", businessName);
    console.log("Category:", category);
    console.log("GSTIN:", gstin);
    console.log("Years in Operation:", years);
    console.log("Business Address:", businessAddress);
    console.log("Landmark:", landmark);
    console.log("Pin Code:", pinCode);
    console.log("Operational Cities:", cities);
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
            src={
              "https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/customer_onboarding/tajmahal.png"
            }
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="scroll-touch items-strech flex max-h-[calc(100vh-5.2rem)] min-w-[70%] flex-col gap-9 overflow-y-scroll bg-[#F7F6F9] p-2 md:p-[3rem]">
        <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <h1 className="text-2xl font-semibold md:text-3xl">Event Details</h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <h1 className="self-start text-lg font-normal md:text-2xl">
              Event Types Catered:
            </h1>
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <Appetizers appetizers={appetizers} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <h1 className="self-start text-lg font-normal md:text-2xl">
            Additional Services:
          </h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <Appetizers appetizers={beverages} />
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

export default Page;
