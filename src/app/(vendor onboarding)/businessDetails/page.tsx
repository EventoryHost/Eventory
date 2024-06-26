"use client";

import React, { useState } from "react";
import { ComboboxDemo } from "@/components/dropdown";

const frameworks = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
];

const yearsInOperation = [
  { value: "1-2", label: "1-2 years" },
  { value: "3-5", label: "3-5 years" },
  { value: "6-10", label: "6-10 years" },
  { value: "10+", label: "10+ years" },
];

const operationalCities = [
  { value: "ny", label: "New York" },
  { value: "sf", label: "San Francisco" },
  { value: "la", label: "Los Angeles" },
  { value: "chi", label: "Chicago" },
];

const BusinessDetails = () => {
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
    <div className="flex h-full w-full flex-col overflow-hidden lg:flex-row">
      <div className="flex flex-col items-start justify-between bg-[#FFFFFF] xs:gap-7 xs:pt-4 md:min-w-[30%] lg:max-w-[30%]">
        <div className="flex items-center justify-start gap-1 xs:self-start xs:pl-5 md:px-11 lg:mt-[5rem]">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 p-5">
            1
          </button>
          <div className="h-[0.3rem] w-[4rem] rounded-xl bg-[#2E3192]"></div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2E3192] p-5 text-white">
            2
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
      <div className="flex min-w-[70%] flex-col items-center justify-center bg-[#F7F6F9] p-2 md:p-[2.2rem]">
        <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <h1 className="text-3xl font-semibold">Business Details</h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="businessName">Business Name</label>
                <input
                  id="businessName"
                  type="text"
                  className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                  placeholder="Enter your business name"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                />
              </div>
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="category">Category</label>
                <ComboboxDemo
                  options={frameworks}
                  placeholder="Select your category"
                  className="w-full rounded-xl border-2 bg-white p-5 py-6 outline-none"
                  setFunction={setCategory}
                />
              </div>
            </div>
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="gstin">GSTIN</label>
                <input
                  id="gstin"
                  type="text"
                  className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                  placeholder="Enter your GSTIN"
                  value={gstin}
                  onChange={(e) => setGstin(e.target.value)}
                />
              </div>
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="years">Years in Operation</label>
                <ComboboxDemo
                  options={yearsInOperation}
                  placeholder="Select years in operation"
                  className="w-full rounded-xl border-2 bg-white p-5 py-6 outline-none"
                  setFunction={setYears}
                />
              </div>
            </div>
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="businessAddress">Business Address</label>
                <input
                  id="businessAddress"
                  type="text"
                  className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                  placeholder="Enter your business address"
                  value={businessAddress}
                  onChange={(e) => setBusinessAddress(e.target.value)}
                />
              </div>
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="landmark">Landmark</label>
                <input
                  id="landmark"
                  type="text"
                  className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                  placeholder="Enter landmark"
                  value={landmark}
                  onChange={(e) => setLandmark(e.target.value)}
                />
              </div>
            </div>
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="pinCode">Pin Code</label>
                <input
                  id="pinCode"
                  type="text"
                  className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                  placeholder="Enter pin code"
                  value={pinCode}
                  onChange={(e) => setPinCode(e.target.value)}
                />
              </div>
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="cities">Operational Cities</label>
                <ComboboxDemo
                  options={operationalCities}
                  placeholder="Select operational cities"
                  className="w-full rounded-xl border-2 bg-white p-5 py-6 outline-none"
                  setFunction={setCities}
                />
              </div>
            </div>
            <div className="flex flex-col items-start self-start">
              <button
                className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
                onClick={handleSubmit}
              >
                Verify
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDetails;