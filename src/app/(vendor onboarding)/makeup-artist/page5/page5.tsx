"use client";

import { EditIcon } from "lucide-react";
import React, { useEffect } from "react";
import FileDisplay from "../../caterer/(components)/File";

interface FormState {
  termsAndConditions: string | File|File[];
  cancellationPolicy: string | File|File[];
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
  portfolioUrls: string | File|File[];
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
  currentPage: number;
  portfolioUrls: string | File|File[];
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  handleSubmit: () => void;
}

const Page: React.FC<Page5Props> = ({
  formState,
  makeupTypes,
  category,
  makeupArtists_individual,
  hourlyPackage,
  dealPackage,
  ratesbyWorker,
  currentPage,
  setCurrentPage,
  onsiteMakeup,
  handleContinue,
}) => {
  return (
    <div className="flex h-full flex-col items-start justify-start gap-8 overflow-y-scroll rounded-xl bg-white p-6 scrollbar-hide xs:w-[95%] xs:min-w-[90%] md:p-6">
      <h1 className="text-3xl font-semibold">
        {formState.artistName} / Make-up Artist
      </h1>

      <div className="flex w-full items-center justify-between rounded-xl bg-gray-200 p-2 text-xl font-medium">
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

      <div className="mx-8 mt-6 flex w-full justify-between">
        <div className="flex w-1/2 flex-col">
          <span className="text-xl">Venue Description</span>
          <span className="mt-4 font-semibold">
            {formState.artistDescription}
          </span>
        </div>
        <div className="flex w-1/2 flex-col">
          <span className="text-xl">PortFolio</span>
          <span className="mt-4 font-semibold">
          {typeof formState.portfolioUrls === "string" ? (
                <div>{formState.portfolioUrls}</div> // Handle string case
              ) : Array.isArray(formState.portfolioUrls) ? (
                <FileDisplay files={formState.portfolioUrls} /> // Handle File[] case
              ) : (
                <FileDisplay file={formState.portfolioUrls} /> // Handle single File case
              )}
           
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
      <div className="flex w-full items-center justify-between rounded-xl bg-gray-200 p-2 text-xl font-medium">
        <span className="ml-4">2. Policies</span>
        <button
          onClick={() => setCurrentPage(2)}
          className="flex items-center justify-center p-1"
        >
          <EditIcon size={28} />
        </button>
      </div>

      <div className="mx-8 mt-2 flex w-full justify-between">
        <div className="flex w-1/2 flex-col">
          <span className="text-xl">Cancellation Policy</span>
          <span className="font-semibold">
          {typeof formState.cancellationPolicy === "string" ? (
                <div>{formState.cancellationPolicy}</div> // Handle string case
              ) : Array.isArray(formState.cancellationPolicy) ? (
                <FileDisplay files={formState.cancellationPolicy} /> // Handle File[] case
              ) : (
                <FileDisplay file={formState.cancellationPolicy} /> // Handle single File case
              )}
          </span>
        </div>
        <div className="flex w-1/2 flex-col">
          <span className="text-xl">Terms and Conditions</span>
          <span className="font-semibold">
          {typeof formState.termsAndConditions === "string" ? (
                <div>{formState.termsAndConditions}</div> // Handle string case
              ) : Array.isArray(formState.termsAndConditions) ? (
                <FileDisplay files={formState.termsAndConditions} /> // Handle File[] case
              ) : (
                <FileDisplay file={formState.termsAndConditions} /> // Handle single File case
              )}
          </span>
        </div>
      </div>

      <div className="flex w-full items-center justify-between rounded-xl bg-gray-200 p-2 text-xl font-medium">
        <span className="ml-4">3. Pricing </span>
        <button
          onClick={() => setCurrentPage(3)}
          className="flex items-center justify-center p-1"
        >
          <EditIcon size={28} />
        </button>
      </div>

      <div className="mx-8 mt-2 flex w-full justify-between">
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

      <div className="items-strech mt-9 flex flex-row gap-7 self-end">
        <button
          className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
        <button
          className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
          onClick={handleContinue}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Page;
