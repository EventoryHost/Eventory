"use client";
import ThreeStepBar from "@/app/(components)/threeStepBar";
import React from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  return (
    <div className="flex h-full min-h-[calc(100vh-5.2rem)] w-full flex-col overflow-hidden lg:flex-row">
      <div className="flex flex-col items-start justify-between bg-[#FFFFFF] xs:gap-7 xs:pt-4 md:min-w-[30%] lg:max-w-[30%]">
        <div className="flex items-center justify-start gap-1 xs:self-start xs:pl-5 lg:mt-[2rem]">
          <ThreeStepBar currentStep={1} />
        </div>
        <div className="ml-8 flex h-[50%] flex-col items-start justify-center gap-9 px-9 xs:pl-5 md:px-11 lg:p-8">
          <h1 className="text-2xl font-semibold md:text-4xl lg:text-5xl">
            Fill out your Basic details
          </h1>
          <p className="text-gray-600 xs:text-sm md:w-[90%] lg:text-lg">
            Please provide the details of the business offered by your company.
          </p>
        </div>
        <div className="relative h-[10rem] lg:w-full">
          <img
            src={"/tajmahal.png"}
            alt="Taj Mahal"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center bg-[#F7F6F9] p-2 md:p-[1rem]">
        <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <span className="text-2xl font-semibold">Basic Details</span>

          <div className="flex">
            <div className="flex w-1/2 flex-col items-center justify-between gap-5 md:flex-row">
              <div className="flex w-full flex-col gap-4 md:w-[60%]">
                <label className="font-medium" htmlFor="vendorName">
                  Vendor Name (Manager)
                </label>
                <input
                  id="vendorName"
                  type="text"
                  className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            <div className="flex w-1/2 flex-col items-center justify-between gap-5 md:flex-row">
              <div className="flex w-full flex-col gap-4 md:w-[60%]">
                <label className="font-medium" htmlFor="contactNumber">
                  Contact Number (POC)
                </label>
                <input
                  id="contactNumber"
                  type="text"
                  className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                  placeholder="Enter your contact number"
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="venueDescription"
                    className="mb-2 block font-medium text-gray-900"
                  >
                    Your Description
                  </label>
                  <textarea
                    id="venueDescription"
                    placeholder="Enter your Venue description"
                    className="focus:shadow-outline h-36 w-full resize-none appearance-none rounded-xl border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="minimumQuantity"
                    className="mb-2 block font-medium text-gray-900"
                  >
                    What is the minimum quantity of order?
                  </label>
                  <input
                    type="text"
                    id="minimumQuantity"
                    placeholder="Enter minimum quantity"
                    className="focus:shadow-outline w-full appearance-none rounded-xl border px-3 py-4 leading-tight text-gray-700 shadow focus:outline-none"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="mb-2 block font-medium text-gray-900">
                    Do you offer products in bulk quantity?
                  </label>
                  <div className="flex items-center">
                    <input
                      id="bulkQuantity"
                      type="radio"
                      name="bulkQuantity"
                      className="form-radio h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                      htmlFor="bulkQuantity"
                      className="ml-2 block text-sm font-medium text-gray-900"
                    >
                      Yes
                    </label>
                    <input
                      id="noBulkQuantity"
                      type="radio"
                      name="bulkQuantity"
                      className="form-radio ml-4 h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                      htmlFor="noBulkQuantity"
                      className="ml-2 block text-sm font-medium text-gray-900"
                    >
                      No
                    </label>
                  </div>
                </div>
                <div>
                  <label className="mb-2 block font-medium text-gray-900">
                    Do you provide customizable gifts?
                  </label>
                  <div className="flex items-center">
                    <input
                      id="customizableGifts"
                      type="radio"
                      name="customizableGifts"
                      className="form-radio h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                      htmlFor="customizableGifts"
                      className="ml-2 block text-sm font-medium text-gray-900"
                    >
                      Yes
                    </label>
                    <input
                      id="noCustomizableGifts"
                      type="radio"
                      name="customizableGifts"
                      className="form-radio ml-4 h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                      htmlFor="noCustomizableGifts"
                      className="ml-2 block text-sm font-medium text-gray-900"
                    >
                      No
                    </label>
                  </div>
                  <div className="items-strech ml-20 mt-56 flex flex-row gap-7 self-end">
                    <button
                      className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:w-fit xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
                      // onClick={handleSubmit}
                    >
                      Skip
                    </button>
                    <button
                      className="rounded-xl bg-[rgb(46,49,146)] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
                      // onClick={handleSubmit}
                    >
                      Continue
                    </button>
                  </div>
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
