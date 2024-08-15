"use client";

import React, { useState } from "react";
import { Upload } from "lucide-react";
import { Combobox } from "@/components/ui/combobox";

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

const op = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
];

export type businessDetails = {
  businessName: string;
  category: string;
  gstin: string;
  years: string;
  businessAddress: string;
  landmark: string;
  pinCode: number;
  cities: string[];
};

const Organization = ({
  businessName,
  setBusinessName,
  handleContinue,
}: Page1Props) => {
  const [businessDetails, setBusinessDetails] = useState<businessDetails>(
    {} as businessDetails,
  );
  return (
    <>
      <div className="flex min-w-[100%] items-center justify-between gap-9">
        <div className="flex h-[100%] w-[50%] flex-col items-start justify-between gap-9">
          <div className="flex w-[100%] flex-col gap-4">
            <label htmlFor="businessName">Full Name</label>
            <input
              id="businessName"
              type="text"
              className="w-fit rounded-xl border-2 bg-white p-5 py-3 outline-none"
              placeholder="Enter your full name"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
            />
          </div>
          <div className="flex w-[100%] flex-col gap-1">
            <label htmlFor="businessName">Portfolio of Past Work</label>
            <button className="mt-5 flex w-fit items-center justify-center gap-5 rounded-xl border-2 border-dashed border-gray-400 bg-gray-200 px-9 py-3 text-[#2E3192] hover:bg-[#2E3192] hover:text-white">
              <Upload />
              Upload
            </button>
            <p className="text-md mt-5">or Provide Via</p>
            <textarea
              cols={40}
              rows={5}
              placeholder="enter url"
              className="mt-5 w-fit resize-none rounded-xl border-2 border-gray-300 p-3"
            ></textarea>
          </div>
        </div>
        <div className="flex h-[100%] w-[50%] flex-col items-start justify-between gap-9">
          <div className="flex w-[100%] flex-col gap-1">
            <label htmlFor="businessName">Client Testimonials</label>
            <Combobox
              options={op}
              placeholder="Select Operational Cities"
              setFunction={(val) => {
                setBusinessDetails({ ...businessDetails, cities: [val] });
              }}
              className="flex items-center justify-between rounded-xl border-2 mt-3 py-6 hover:text-[#2E3192]"
            />
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
              rows={5}
              placeholder="enter url"
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
    </>
  );
};

export default Organization;
