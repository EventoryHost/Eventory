"use client";

import React from "react";
import Appetizers from "./Appetizers";

const regional = [
  "Gujrati",
  "Rajasthani",
  "Bengali",
  "Other",
  "Rajasthani",
  "Bengali",
  "Rajasthani",
  "Bengali",
];
const service = ["Buffet", "Plated Meals", "Family Style", "Food Stations"];
const cuisine = ["North Indian", "South Indian", "Chinese", "Italian"];

type Page1Props = {
  businessName: string;
  setBusinessName: React.Dispatch<React.SetStateAction<string>>;
  cuisineSpecialties: string[];
  setCuisineSpecialties: React.Dispatch<React.SetStateAction<string[]>>;
  regionalSpecialties: string[];
  setRegionalSpecialties: React.Dispatch<React.SetStateAction<string[]>>;
  serviceStyles: string[];
  setServiceStyles: React.Dispatch<React.SetStateAction<string[]>>;
  handleContinue: () => void;
};

const Page1 = ({
  businessName,
  setBusinessName,
  cuisineSpecialties,
  setCuisineSpecialties,
  regionalSpecialties,
  setRegionalSpecialties,
  serviceStyles,
  setServiceStyles,
  handleContinue,
}: Page1Props) => {
  return (
    <form className="flex flex-col gap-7 overflow-y-scroll xs:justify-start items-start rounded-xl bg-white p-3 xs:w-[100%] xs:min-w-[90%] md:p-6">
      <h1 className="text-3xl font-semibold">Basic Details</h1>
      <div className="flex min-w-full flex-col gap-9 items-center">
        <div className="flex flex-col w-[100%] items-start justify-between gap-2 md:flex-row">
          <div className="flex flex-col gap-4 w-fit">
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
        </div>
        <div className="flex flex-col gap-5 rounded-xl bg-white w-[100%]">
          <label htmlFor="years">Cuisine Specialties</label>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <Appetizers
                appetizers={cuisine}
                selectedAppetizers={cuisineSpecialties}
                setSelectedAppetizers={setCuisineSpecialties}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 rounded-xl bg-white min-w-[100%]">
          <label htmlFor="years">Service Styles Offered</label>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <Appetizers
                appetizers={service}
                selectedAppetizers={serviceStyles}
                setSelectedAppetizers={setServiceStyles}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 rounded-xl bg-white min-w-[100%]">
          <label htmlFor="category">Regional Specialties</label>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <Appetizers
                appetizers={regional}
                selectedAppetizers={regionalSpecialties}
                setSelectedAppetizers={setRegionalSpecialties}
              />
            </div>
          </div>
        </div>
      </div>
      <button
        className="lg:w-[10vw] w-fit xs:text-[4vw] md:text-[2vw] lg:text-[1vw] flex items-center justify-center rounded-xl self-end bg-[#2E3192] p-5 text-white"
        onClick={handleContinue}
      >
        Continue
      </button>
    </form>
  );
};

export default Page1;
