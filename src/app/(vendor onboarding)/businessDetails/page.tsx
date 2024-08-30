"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import jwt from "jsonwebtoken";

import { addBusinessDetails } from "@/services/auth";
import tajmahal from "/public/tajmahal.png";
import { Combobox } from "@/components/ui/combobox";
import Router from "next/router";

const frameworks = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
];

const categories = [
  { value: "pav", label: "PaV" },
  { value: "caterer", label: "Caterers" },
  { value: "decorators", label: "Decorator" },
  { value: "propRentals", label: "Prop Rentals" },
  { value: "makeupArtist", label: "Makeup Artist" },
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

const BusinessDetails = () => {
  const [businessDetails, setBusinessDetails] = useState<businessDetails>(
    {} as businessDetails,
  );
  const refs = useRef(
    {} as Record<
      keyof businessDetails,
      HTMLInputElement | HTMLButtonElement | null
    >,
  );

  useEffect(() => {
    if (localStorage.getItem("token")) return;
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("session_token");
    if (token) {
      localStorage.setItem("token", token);
      const { userId, email } = jwt.decode(token) as {
        userId: string;
        email: string;
      };
      console.log("User ID:", userId);
      console.log("Email:", email);
    }
  }, []);

  const handleBizSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if any required field is empty
    for (const key in refs.current) {
      const refElement = refs.current[key as keyof businessDetails];
      if (!refElement || !refElement.value.trim()) {
        return;
      }
    }

    if (!businessDetails.category) {
      return;
    }

    const newDetails: businessDetails = {
      businessName: refs.current.businessName!.value,
      category: businessDetails.category,
      gstin: refs.current.gstin!.value,
      years: businessDetails.years,
      businessAddress: refs.current.businessAddress!.value,
      landmark: refs.current.landmark!.value,
      pinCode: Number(refs.current.pinCode!.value),
      cities: businessDetails.cities,
    };

    setBusinessDetails(newDetails);
    console.log("Business Details:", newDetails);

    const token = localStorage.getItem("token")!;
    const { userId, email } = jwt.decode(token) as {
      userId: string;
      email: string;
    };

    addBusinessDetails(userId, newDetails);

    // Redirect to the selected category's page
    Router.push(`/${businessDetails.category}`);
  };

  return (
    <div className="flex h-full min-h-screen w-full flex-col overflow-hidden lg:flex-row">
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
          <Image
            src={tajmahal}
            alt="Image of Indian monuments"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="flex min-w-[70%] flex-col items-center justify-center bg-[#F7F6F9] p-2 md:p-[1rem]">
        <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <h1 className="text-3xl font-semibold">Business Details</h1>
          <form onSubmit={handleBizSubmit}>
            <div className="flex min-h-full min-w-full flex-col items-center gap-5">
              <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
                <div className="flex min-w-[40%] flex-col gap-4">
                  <label htmlFor="businessName">Business Name</label>
                  <input
                    id="businessName"
                    type="text"
                    className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                    placeholder="Enter your business name"
                    ref={(el) => {
                      refs.current.businessName = el;
                    }}
                    required
                  />
                </div>
                <div className="flex min-w-[40%] flex-col gap-4">
                  <label htmlFor="category">Category</label>
                  <Combobox
                    options={categories}
                    placeholder="Select Category"
                    setFunction={(val) => {
                      setBusinessDetails({ ...businessDetails, category: val });
                    }}
                    className="flex items-center justify-between rounded-xl border-2 py-6 hover:text-[#2E3192]"
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
                    ref={(el) => {
                      refs.current.gstin = el;
                    }}
                    required
                  />
                </div>
                <div className="flex flex-col gap-4 xs:min-w-[40%]">
                  <label htmlFor="years">Years in Operation</label>
                  <Combobox
                    options={yearsInOperation}
                    placeholder="Select Years"
                    setFunction={(val) => {
                      setBusinessDetails({ ...businessDetails, years: val });
                    }}
                    className="flex items-center justify-between rounded-xl border-2 py-6 hover:text-[#2E3192]"
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
                    ref={(el) => {
                      refs.current.businessAddress = el;
                    }}
                    required
                  />
                </div>
                <div className="flex min-w-[40%] flex-col gap-4">
                  <label htmlFor="landmark">Landmark</label>
                  <input
                    id="landmark"
                    type="text"
                    className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                    placeholder="Enter landmark"
                    ref={(el) => {
                      refs.current.landmark = el;
                    }}
                    required
                  />
                </div>
              </div>
              <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
                <div className="flex min-w-[40%] flex-col gap-4">
                  <label htmlFor="pinCode">Pin Code</label>
                  <input
                    id="pinCode"
                    type="number"
                    className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                    placeholder="Enter pin code"
                    ref={(el) => {
                      refs.current.pinCode = el;
                    }}
                    required
                  />
                </div>
                <div className="flex min-w-[40%] flex-col gap-4">
                  <label htmlFor="cities">Operational Cities</label>
                  <Combobox
                    options={operationalCities}
                    placeholder="Select Operational Cities"
                    setFunction={(val) => {
                      setBusinessDetails({ ...businessDetails, cities: [val] });
                    }}
                    className="flex items-center justify-between rounded-xl border-2 py-6 hover:text-[#2E3192]"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start self-start">
                <button
                  type="submit"
                  className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
                >
                  Continue
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BusinessDetails;
