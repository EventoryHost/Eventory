"use client";

import React from "react";
import { Combobox } from "@/components/ui/combobox";

const cuisineOptions = [
  { value: "north", label: "North Indian" },
  { value: "south", label: "South Indian" },
  { value: "chinese", label: "Chinese" },
  { value: "italian", label: "Italian" },
];

interface Page5Props {
  businessName: string;
  setBusinessName: (name: string) => void;
  category: string;
  setCategory: (category: string) => void;
  gstin: string;
  setGstin: (gstin: string) => void;
  years: string;
  setYears: (years: string) => void;
  businessAddress: string;
  setBusinessAddress: (address: string) => void;
  landmark: string;
  setLandmark: (landmark: string) => void;
  pinCode: string;
  setPinCode: (pinCode: string) => void;
  cities: string;
  setCities: (cities: string) => void;
  handleContinue: () => void;
}

const Page5 = ({
  businessName,
  setBusinessName,
  category,
  setCategory,
  gstin,
  setGstin,
  years,
  setYears,
  businessAddress,
  setBusinessAddress,
  landmark,
  setLandmark,
  pinCode,
  setPinCode,
  cities,
  setCities,
  handleContinue,
}: Page5Props) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleContinue();
  };

  return (
    <div className="flex h-full min-h-[calc(100vh-5.2rem)] w-full flex-col overflow-hidden lg:flex-row">
      <div className="flex min-w-[100%] flex-col items-center justify-center bg-[#F7F6F9] p-2 md:p-[1rem]">
        <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <h1 className="text-3xl font-semibold">Basic Details</h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="businessName">Caterer Name (Manager)</label>
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
                <label htmlFor="category">Cuisine Specialties</label>
                <Combobox
                  options={cuisineOptions}
                  className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                  placeholder="Select your cuisine specialties"
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
                  placeholder="Enter GSTIN"
                  value={gstin}
                  onChange={(e) => setGstin(e.target.value)}
                />
              </div>
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="years">Years in Operation</label>
                <input
                  id="years"
                  type="text"
                  className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                  placeholder="Enter years in operation"
                  value={years}
                  onChange={(e) => setYears(e.target.value)}
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
                  placeholder="Enter business address"
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
                <input
                  id="cities"
                  type="text"
                  className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                  placeholder="Enter operational cities"
                  value={cities}
                  onChange={(e) => setCities(e.target.value)}
                />
              </div>
            </div>
            <div className="items-strech mt-9 flex flex-row gap-7 self-end">
              <button
                className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:w-fit xs:px-3 xs:py-2 md:w-fit md:min-w-[6rem] md:px-3 md:py-3"
                type="button"
              >
                Back
              </button>
              <button
                className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-3 xs:py-2 md:w-fit md:min-w-[6rem] md:px-3 md:py-3"
                type="button"
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

export default Page5;
