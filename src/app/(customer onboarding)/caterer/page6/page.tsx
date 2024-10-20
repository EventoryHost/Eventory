"use client";

import React, { useState } from "react";
import { Upload } from "lucide-react";
import { ComboboxDemo } from "@/components/dropdown";
import { Dropdown } from "react-day-picker";
import { Combobox } from "@/components/ui/combobox";

const regional = [
  { value: "gujrati", label: "Gujrati" },
  { value: "rajasthani", label: "Rajasthani" },
  { value: "bengali", label: "Bengali" },
  { value: "other", label: "Other" },
];

const service = [
  { value: "buffet", label: "Buffet" },
  { value: "plated", label: "Plated Meals" },
  { value: "family", label: "Family Style" },
  { value: "station", label: "Food Stations" },
];

const cuisine = [
  { value: "north", label: "North Indian" },
  { value: "south", label: "South Indian" },
  { value: "chinese", label: "Chinese" },
  { value: "italian", label: "Italian" },
];

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
          <div className="h-[0.3rem] w-[4rem] rounded-xl bg-gray-300"></div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 p-5">
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
      <div className="flex min-w-[70%] flex-col items-center justify-center overflow-y-scroll bg-[#F7F6F9] p-2 md:p-[1rem]">
        <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <h1 className="text-3xl font-semibold">Additional Details</h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row">
              <div className="flex flex-col gap-7">
                <p className="text-lg">Tasting Sessions</p>
                <div className="flex gap-9">
                  <div className="flex min-w-[40%] gap-4">
                    <input
                      id="businessName"
                      type="radio"
                      className=""
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                    />
                    <label htmlFor="businessName">Yes</label>
                  </div>
                  <div className="flex min-w-[40%] gap-4">
                    <input
                      id="businessName"
                      type="radio"
                      className=""
                      placeholder="Enter your business name"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                    />
                    <label htmlFor="businessName">No</label>
                  </div>
                </div>
              </div>
              <div className="flex min-w-[40%] flex-col items-start justify-center">
                <label htmlFor="category">Catering Service Images</label>
                <button className="mt-5 flex items-center justify-center gap-5 rounded-xl border-2 border-dashed border-gray-400 bg-gray-200 px-9 py-3 text-[#2E3192] hover:bg-[#2E3192] hover:text-white">
                  {" "}
                  <Upload />
                  Upload
                </button>
              </div>
            </div>
            <div className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row">
              <div className="flex flex-col gap-7">
                <p className="text-lg">Business Licenses</p>
                <div className="flex gap-9">
                  <div className="flex min-w-[40%] gap-4">
                    <input
                      id="businessName"
                      type="radio"
                      className=""
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                    />
                    <label htmlFor="businessName">Yes</label>
                  </div>
                  <div className="flex min-w-[40%] gap-4">
                    <input
                      id="businessName"
                      type="radio"
                      className=""
                      placeholder="Enter your business name"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                    />
                    <label htmlFor="businessName">No</label>
                  </div>
                </div>
              </div>
              <div className="flex min-w-[40%] flex-col items-start justify-center">
                <label htmlFor="category">Videos of Event Setups</label>
                <button className="mt-5 flex items-center justify-center gap-5 rounded-xl border-2 border-dashed border-gray-400 bg-gray-200 px-9 py-3 text-[#2E3192] hover:bg-[#2E3192] hover:text-white">
                  {" "}
                  <Upload />
                  Upload
                </button>
              </div>
            </div>
            <div className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row">
              <div className="flex flex-col gap-7">
                <p className="text-lg">Food Safety Certificates</p>
                <div className="flex">
                  <div className="flex min-w-[40%] gap-4">
                    <input
                      id="businessName"
                      type="radio"
                      className=""
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                    />
                    <label htmlFor="businessName">Yes</label>
                  </div>
                  <div className="flex min-w-[40%] gap-4">
                    <input
                      id="businessName"
                      type="radio"
                      className=""
                      placeholder="Enter your business name"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                    />
                    <label htmlFor="businessName">No</label>
                  </div>
                </div>
                <div className="flex min-w-[40%] flex-col items-start justify-center">
                  <label htmlFor="category">Terms & Conditions</label>
                  <button className="mt-5 flex items-center justify-center gap-5 rounded-xl border-2 border-dashed border-gray-400 bg-gray-200 px-9 py-3 text-[#2E3192] hover:bg-[#2E3192] hover:text-white">
                    {" "}
                    <Upload />
                    Upload
                  </button>
                  <p className="mt-5 text-lg">or Provide Via</p>
                  <textarea
                    name=""
                    id=""
                    cols={30}
                    rows={7}
                    placeholder="Enter your venue details"
                    className="mt-5 resize-none rounded-xl border-2 border-gray-300 p-3"
                  ></textarea>
                </div>
              </div>
              <div className="flex min-w-[40%] flex-col items-start justify-center">
                <label htmlFor="category">Cancellation Policies</label>
                <button className="mt-5 flex items-center justify-center gap-5 rounded-xl border-2 border-dashed border-gray-400 bg-gray-200 px-9 py-3 text-[#2E3192] hover:bg-[#2E3192] hover:text-white">
                  {" "}
                  <Upload />
                  Upload
                </button>
                <p className="mt-5 text-lg">or Provide Via</p>
                <textarea
                  name=""
                  id=""
                  cols={30}
                  rows={7}
                  placeholder="Enter your venue details"
                  className="mt-5 resize-none rounded-xl border-2 border-gray-300 p-3"
                ></textarea>
              </div>
            </div>
            <div className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row"></div>
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <div className="flex min-w-[40%] flex-col gap-4"></div>
              <div className="flex flex-col gap-4 xs:min-w-[40%]"></div>
            </div>
            <div className="items-strech mt-9 flex flex-row gap-7 self-end">
              <button
                className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:w-fit xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
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
