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
}) => {
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
            Fill out your venue details
          </h1>
          <p className="text-black xs:text-sm md:w-[90%]">
            Please provide the details of the venue offered by your company.
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
      <div className="scroll-touch flex max-h-[calc(100vh-5.2rem)] min-w-[70%] flex-col items-center gap-9 overflow-y-scroll bg-[#F7F6F9] p-2 md:p-[1rem]">
        <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <h1 className="text-3xl font-semibold">
            {formState.artistName} / Make-up Artist
          </h1>

          <div className="flex items-center justify-between rounded-xl bg-gray-200 p-2 text-xl font-medium">
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

          <div className="mx-8 mt-6 flex gap-16">
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

            <div className="flex items-center justify-between rounded-xl bg-gray-200 p-2 text-xl font-medium">
              <span className="ml-4">2. Policies</span>
              <button
                onClick={() => setCurrentPage(2)}
                className="flex items-center justify-center p-1"
              >
                <EditIcon size={28} />
              </button>
            </div>

            <div className="mx-8 mt-2 flex gap-16">
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

            <div className="flex items-center justify-between rounded-xl bg-gray-200 p-2 text-xl font-medium">
              <span className="ml-4">3. Pricing </span>
              <button
                onClick={() => setCurrentPage(3)}
                className="flex items-center justify-center p-1"
              >
                <EditIcon size={28} />
              </button>
            </div>

            <div className="mx-8 mt-2 flex flex-wrap gap-16">
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

            <div className="flex items-center justify-between rounded-xl bg-gray-200 p-2 text-xl font-medium">
              <span className="ml-4">4. Services Details </span>
              <button
                onClick={() => setCurrentPage(4)}
                className="flex items-center justify-center p-1"
              >
                <EditIcon size={28} />
              </button>
            </div>

            <div className="mx-8 mt-2 flex gap-16">
              <div className="flex w-1/2 flex-col">
                <span className="text-xl">Onsite Service Availability</span>
                <span className="mt-2 font-semibold">
                  {onsiteMakeup ? "Available" : "Unavailable"}
                </span>
              </div>
            </div>

            <div className="mx-8 mt-2 flex flex-wrap gap-4">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
