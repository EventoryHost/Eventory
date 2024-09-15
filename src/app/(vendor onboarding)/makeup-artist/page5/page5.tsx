"use client";

import { EditIcon } from "lucide-react";
import React, { useEffect } from "react";

interface FormState {
  termsAndConditions: string | File;
  cancellationPolicy: string | File;
  artistName: string;
  category: string;
  makeupArtists_individual: string[];
  makeupArtists_groups: string[];
  makeupArtists_organisation: string[];
  advancePayment: number;
  hourlyPackage: { type: string; priceRange: [number, number] }[];
  dealPackage: { type: string; priceRange: [number, number] }[];
  ratesbyWorker: { type: string; priceRange: [number, number] }[];
  onsiteMakeup: boolean;
  organisationMembers: string;
  artistDescription: string;
  portfolioUrls: string | File;
}

interface Page5Props {
  handleContinue: () => void;
  formState: FormState;
  updateFormState: (newState: Partial<FormState>) => void;
  artistName: string;
  category: string;
  makeupArtists_individual: string[];
  makeupArtists_groups: string[];
  makeupArtists_organisation: string[];
  advancePayment: number;
  hourlyPackage: { type: string; priceRange: [number, number] }[];
  dealPackage: { type: string; priceRange: [number, number] }[];
  ratesbyWorker: { type: string; priceRange: [number, number] }[];
  makeupTypes: string[];
  onsiteMakeup: boolean;
  organisationMembers: string;
  artistDescription: string;
  portfolioUrls: string | File;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Page: React.FC<Page5Props> = ({
  formState,
  makeupTypes,
  category,
  makeupArtists_individual,
  hourlyPackage,
  dealPackage,
  ratesbyWorker,
  setCurrentPage,
  onsiteMakeup,
  handleContinue
}) => {
  return (

    <div className="flex h-full flex-col items-start justify-start gap-8 overflow-y-scroll rounded-xl bg-white p-6 scrollbar-hide xs:w-[95%] xs:min-w-[90%] md:p-6">
      <h1 className="text-3xl font-semibold">
        {formState.artistName} / Make-up Artist
      </h1>

      <div className="flex items-center w-full justify-between rounded-xl bg-gray-200 p-2 text-xl font-medium">
        <span className="ml-4">1. Basic Details</span>
        <button
          onClick={() => setCurrentPage(1)}
          className="flex items-center justify-center p-1"
        >
          <EditIcon size={28} />
        </button>
      </div>

      <div className="mx-8 text-xl font-semibold">
        {category == "Individual"
          ? "Individual"
          : category == "Group"
            ? "Group"
            : "Organisation"}
      </div>

      {formState.category == "Individual" && (
        <div className="mx-8 mt-2 flex gap-16">
          <div className="flex w-1/2 flex-col">
            <span className="text-xl">Total Members</span>
            <span className="mt-4 font-semibold">
              {formState.organisationMembers}
            </span>
          </div>
        </div>
      )}

      <div className="mx-8 mt-6 flex justify-between w-full">
        <div className="flex w-1/2 flex-col">
          <span className="text-xl">Venue Description</span>
          <span className="mt-4 font-semibold">
            {formState.artistDescription}
          </span>
        </div>
        <div className="flex w-1/2 flex-col">
          <span className="text-xl">PortFolio</span>
          <span className="mt-4 font-semibold">
            {(typeof formState.portfolioUrls === "string"
              ? formState.portfolioUrls
              : formState.portfolioUrls.name) || "No File Uploaded"}
          </span>
        </div>
      </div>
      <div className="mx-8 mt-6 flex flex-col gap-10">
        <div className="flex w-1/2 flex-col">
          <span className="text-xl">
            Which Type(s) of Make Up Artist You are?
          </span>
        </div>
        <div className="flex w-full flex-col">
          <div className="flex flex-wrap gap-4">
            {makeupArtists_individual.length > 0 ? (
              makeupArtists_individual.map((entry, index) => (
                <div
                  key={index}
                  className="rounded-full bg-[#e6e6fa] px-4 py-2 text-center"
                >
                  <span>{entry}</span>
                </div>
              ))
            ) : (
              <div className="rounded-full bg-[#e6e6fa] px-4 py-2 text-center">
                No Options Selected
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex w-full  items-center justify-between rounded-xl bg-gray-200 p-2 text-xl font-medium">
        <span className="ml-4">2. Policies</span>
        <button
          onClick={() => setCurrentPage(2)}
          className="flex items-center justify-center p-1"
        >
          <EditIcon size={28} />
        </button>
      </div>

      <div className="mx-8 mt-2 flex justify-between w-full">
        <div className="flex w-1/2 flex-col">
          <span className="text-xl">Cancellation Policy</span>
          <span className="font-semibold">
            {(typeof formState.cancellationPolicy === "string"
              ? formState.cancellationPolicy
              : formState.cancellationPolicy.name) || "No file uploaded"}
          </span>
        </div>
        <div className="flex w-1/2 flex-col">
          <span className="text-xl">Terms and Conditions</span>
          <span className="font-semibold">
            {(typeof formState.termsAndConditions === "string"
              ? formState.termsAndConditions
              : formState.termsAndConditions.name) || "No File Uploaded"}
          </span>
        </div>
      </div>

      <div className="flex items-center w-full justify-between rounded-xl bg-gray-200 p-2 text-xl font-medium">
        <span className="ml-4">3. Pricing </span>
        <button
          onClick={() => setCurrentPage(3)}
          className="flex items-center justify-center p-1"
        >
          <EditIcon size={28} />
        </button>
      </div>

      <div className="mx-8 mt-2 flex justify-between w-full">
        <div className="flex w-1/3 flex-col">
          <span className="text-xl">Hourly Package</span>
          <div className="mt-4 flex flex-col">
            {hourlyPackage.length > 0 ? (
              hourlyPackage.map((entry, index) => (
                <div key={index} className="mb-2 flex flex-col">
                  <span>{entry.type}</span>
                  <span className="font-semibold">
                    ₹ {entry.priceRange[0]} - ₹{entry.priceRange[1]}
                  </span>
                </div>
              ))
            ) : (
              <div>No hourly package rates available</div>
            )}
          </div>
        </div>

        <div className="flex w-1/3 flex-col">
          <span className="text-xl">Deal Package</span>
          <div className="mt-4 flex flex-col">
            {dealPackage.length > 0 ? (
              dealPackage.map((entry, index) => (
                <div key={index} className="mb-2 flex flex-col">
                  <span>{entry.type}</span>
                  <span className="font-semibold">
                    ₹ {entry.priceRange[0]} - ₹{entry.priceRange[1]}
                  </span>
                </div>
              ))
            ) : (
              <div>No deal package rates available</div>
            )}
          </div>
        </div>

        <div className="flex w-1/3 flex-col">
          <span className="text-xl">Rates by Worker</span>
          <div className="mt-4 flex flex-col">
            {ratesbyWorker.length > 0 ? (
              ratesbyWorker.map((entry, index) => (
                <div key={index} className="mb-2 flex flex-col">
                  <span>{entry.type}</span>
                  <span className="font-semibold">
                    ₹ {entry.priceRange[0]} - ₹{entry.priceRange[1]}
                  </span>
                </div>
              ))
            ) : (
              <div>No rates by worker available</div>
            )}
          </div>
        </div>
      </div>

      <div className="flex w-full items-center justify-between rounded-xl bg-gray-200 p-2 text-xl font-medium">
        <span className="ml-4">4. Services Details </span>
        <button
          onClick={() => setCurrentPage(4)}
          className="flex items-center justify-center p-1"
        >
          <EditIcon size={28} />
        </button>
      </div>

      <div className="mx-8 mt-2 flex w-full gap-16">
        <div className="flex w-1/2 flex-col">
          <span className="text-xl">Onsite Service Availability</span>
          <span className="mt-2 font-semibold">
            {onsiteMakeup ? "Available" : "Unavailable"}
          </span>
        </div>
      </div>

      <div className="mx-8 mt-2 flex w-full flex-wrap gap-4">
        <div className="flex w-full flex-col">
          <span className="mb-2 text-xl">Specialization Makeups</span>
          <div className="flex flex-wrap gap-4">
            {makeupTypes.length > 0 ? (
              makeupTypes.map((entry, index) => (
                <div
                  key={index}
                  className="rounded-full bg-[#e6e6fa] px-4 py-2 text-center"
                >
                  <span>{entry}</span>
                </div>
              ))
            ) : (
              <div className="rounded-full bg-[#e6e6fa] px-4 py-2 text-center">
                No Options Selected
              </div>
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
    </div>
  );
};

export default Page;
