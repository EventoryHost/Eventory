"use client";

import React, { useState } from "react";
import FileInput from "@/components/fileInput"; // Import the reusable FileInput component
import { Combobox } from "@/components/ui/combobox";

type Page1Props = {
  fullName: string;
  setFullName: (fullName: string) => void;
  organizationMembers: string;
  setOrganizationMembers: (organizationMembers: string) => void;
  clientTestimonials: string | File;
  setClientTestimonials: (clientTestimonials: string | File) => void;
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
  fullName,
  setFullName,
  organizationMembers,
  setOrganizationMembers,
  clientTestimonials,
  setClientTestimonials,
  handleContinue,
}: Page1Props) => {
  const [businessDetails, setBusinessDetails] = useState<businessDetails>(
    {} as businessDetails,
  );

  const handleTextChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    setState: (value: string) => void,
  ) => {
    setState(event.target.value);
  };

  return (
    <>
      <div className="flex min-w-[100%] items-center justify-between gap-9">
        <div className="flex h-[100%] w-[50%] flex-col items-start justify-between gap-9">
          <div className="flex w-[100%] flex-col gap-4">
            <label htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              type="text"
              className="w-fit rounded-xl border-2 bg-white p-5 py-3 outline-none"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="flex w-[100%] flex-col gap-1">
            <label htmlFor="organizationMembers">Organization Members</label>
            <textarea
              id="organizationMembers"
              cols={40}
              rows={5}
              placeholder="Enter organization members"
              className="mt-5 w-fit resize-none rounded-xl border-2 border-gray-300 p-3"
              value={organizationMembers}
              onChange={(e) => setOrganizationMembers(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="flex h-[100%] w-[50%] flex-col items-start justify-between gap-9">
          <div className="flex w-[100%] flex-col gap-1">
            <label htmlFor="cities">Operational Cities</label>
            <Combobox
              options={op}
              placeholder="Select Operational Cities"
              setFunction={(val) => {
                setBusinessDetails({ ...businessDetails, cities: [val] });
              }}
              className="mt-3 flex items-center justify-between rounded-xl border-2 py-6 hover:text-[#2E3192]"
            />
          </div>
          <div className="flex w-[100%] flex-col gap-1">
            <label htmlFor="clientTestimonials">Client Testimonials</label>
            <FileInput
              label="Client Testimonials"
              onFileSelect={setClientTestimonials}
              acceptedFileTypes="image/png, .pdf, image/jpg"
            />
            <p className="text-md mt-5">or Provide Via</p>
            <textarea
              cols={30}
              rows={5}
              placeholder="enter url"
              className="mt-5 resize-none rounded-xl border-2 border-gray-300 p-3"
              value={
                typeof clientTestimonials === "string" ? clientTestimonials : ""
              }
              onChange={(e) =>
                handleTextChange(
                  e,
                  setClientTestimonials as (value: string) => void,
                )
              }
            ></textarea>
            {typeof clientTestimonials === "object" && (
              <p className="mt-2 text-gray-500">{clientTestimonials.name}</p>
            )}
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
