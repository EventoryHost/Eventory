"use client";

import { Upload } from "lucide-react";
import React from "react";

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
    <form className="flex flex-col items-start gap-7 overflow-y-scroll rounded-xl bg-white p-3 xs:w-[100%] xs:min-w-[90%] xs:justify-start md:p-6">
      <h1 className="text-3xl font-semibold">Basic Details</h1>
      <div className="flex md:flex-row flex-col min-w-[100%] items-start justify-between gap-9">
        <div className="flex h-[100%] md:w-[50%] flex-col items-start justify-between gap-9">
          <div className="flex flex-col gap-5">
            <p className="text-md font-md">
              do you provide design proposals to clients ?
            </p>
            <div className="flex gap-7">
              <div className="flex items-center gap-3">
                <input type="radio" />
                <label className="text-sm" htmlFor="radio">
                  Yes
                </label>
              </div>
              <div className="flex items-center gap-3">
                <input type="radio" />
                <label className="text-sm" htmlFor="radio">
                  No
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-md font-md">
              do you provide free initial consultation ?
            </p>
            <div className="flex gap-7">
              <div className="flex items-center gap-3">
                <input type="radio" />
                <label className="text-sm" htmlFor="radio">
                  Yes
                </label>
              </div>
              <div className="flex items-center gap-3">
                <input type="radio" />
                <label className="text-sm" htmlFor="radio">
                  No
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-md font-md">
              do you provide advance set-up ?
            </p>
            <div className="flex gap-7">
              <div className="flex items-center gap-3">
                <input type="radio" />
                <label className="text-sm" htmlFor="radio">
                  Yes
                </label>
              </div>
              <div className="flex items-center gap-3">
                <input type="radio" />
                <label className="text-sm" htmlFor="radio">
                  No
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-md font-md">
              do you collaborate with other vendors ?
            </p>
            <div className="flex gap-7">
              <div className="flex items-center gap-3">
                <input type="radio" />
                <label className="text-sm" htmlFor="radio">
                  Yes
                </label>
              </div>
              <div className="flex items-center gap-3">
                <input type="radio" />
                <label className="text-sm" htmlFor="radio">
                  No
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-md font-md">
              do you provide set-up & installation ?
            </p>
            <div className="flex gap-7">
              <div className="flex items-center gap-3">
                <input type="radio" />
                <label className="text-sm" htmlFor="radio">
                  Yes
                </label>
              </div>
              <div className="flex items-center gap-3">
                <input type="radio" />
                <label className="text-sm" htmlFor="radio">
                  No
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-md font-md">
              do you require any booking Deposit for your services ?
            </p>
            <div className="flex gap-7">
              <div className="flex items-center gap-3">
                <input type="radio" />
                <label className="text-sm" htmlFor="radio">
                  Yes
                </label>
              </div>
              <div className="flex items-center gap-3">
                <input type="radio" />
                <label className="text-sm" htmlFor="radio">
                  No
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[100%] md:w-[50%] flex-col items-start justify-start gap-9">
          <div className="flex w-[100%] flex-col gap-1">
            <label htmlFor="businessName">Client Testimonials</label>
            <button className="mt-5 flex w-fit items-center justify-center gap-5 rounded-xl border-2 border-dashed border-gray-400 bg-gray-200 px-9 py-3 text-[#2E3192] hover:bg-[#2E3192] hover:text-white">
              <Upload />
              Upload
            </button>
            <p className="text-md mt-5">or Provide Via</p>
            <textarea
              cols={30}
              rows={1}
              placeholder="enter client testimonials"
              className="mt-5 resize-none rounded-xl border-2 border-gray-300 p-3"
            ></textarea>
          </div>
          <div className="flex w-[100%] flex-col gap-1">
            <label htmlFor="businessName">Client Testimonials</label>
            <button className="mt-5 flex w-fit items-center justify-center gap-5 rounded-xl border-2 border-dashed border-gray-400 bg-gray-200 px-9 py-3 text-[#2E3192] hover:bg-[#2E3192] hover:text-white">
              <Upload />
              Upload
            </button>
            <p className="text-md mt-5">or Provide Via</p>
            <textarea
              cols={30}
              rows={1}
              placeholder="enter client testimonials"
              className="mt-5 resize-none rounded-xl border-2 border-gray-300 p-3"
            ></textarea>
          </div>
        </div>
      </div>
      <button
        className="flex w-fit items-center justify-center self-end rounded-xl bg-[#2E3192] p-5 text-white xs:text-[4vw] md:text-[2vw] lg:w-[10vw] lg:text-[1vw]"
        onClick={handleContinue}
      >
        Continue
      </button>
    </form>
  );
};

export default Page1;
