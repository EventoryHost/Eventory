"use client";
import ThreeStepBar from "@/app/(components)/threeStepBar";
import React from "react";

// Define types for form state
interface FormState {
  vendorName: string;
  contactNumber: string;
  venueDescription: string;
  minimumQuantity: string;
  bulkQuantity: string;
  customizableGifts: string;
  typesOfGifts: string[];
  priceRange: { min: string; max: string };
  appetizers: string[];
  deliveryCharges: { min: string; max: string };
  termsAndConditions: string;
  category: string;
}

// Define types for props
interface PageProps {
  formState: FormState;
  handleChange: (key: keyof FormState, value: any) => void;
  handleNestedChange: (
    key: keyof FormState,
    nestedKey: string,
    value: any,
  ) => void;
}

const Page1: React.FC<PageProps> = ({
  formState,
  handleChange,
  handleNestedChange,
}) => {
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

          <div className="flex flex-col md:flex-row md:gap-5">
            {/* <!-- Vendor Name Section --> */}
            <div className="flex w-full flex-col gap-5 md:w-1/2">
              <div className="flex flex-col gap-4">
                <label className="font-medium" htmlFor="vendorName">
                  Vendor Name (Manager)
                </label>
                <input
                  id="vendorName"
                  type="text"
                  value={formState.vendorName}
                  onChange={(e) => handleChange("vendorName", e.target.value)}
                  className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            {/* <!-- Contact Number Section --> */}
            <div className="flex w-full flex-col gap-5 md:w-1/2">
              <div className="flex flex-col gap-4">
                <label className="font-medium" htmlFor="contactNumber">
                  Contact Number (POC)
                </label>
                <input
                  id="contactNumber"
                  type="text"
                  value={formState.contactNumber}
                  onChange={(e) =>
                    handleChange("contactNumber", e.target.value)
                  }
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
                    value={formState.venueDescription}
                    onChange={(e) =>
                      handleChange("venueDescription", e.target.value)
                    }
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
                    value={formState.minimumQuantity}
                    onChange={(e) =>
                      handleChange("minimumQuantity", e.target.value)
                    }
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
                      id="bulkQuantityYes"
                      type="radio"
                      name="bulkQuantity"
                      checked={formState.bulkQuantity === "yes"}
                      onChange={() => handleChange("bulkQuantity", "yes")}
                      className="form-radio h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                      htmlFor="bulkQuantityYes"
                      className="ml-2 block text-sm font-medium text-gray-900"
                    >
                      Yes
                    </label>
                    <input
                      id="bulkQuantityNo"
                      type="radio"
                      name="bulkQuantity"
                      checked={formState.bulkQuantity === "no"}
                      onChange={() => handleChange("bulkQuantity", "no")}
                      className="form-radio ml-4 h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                      htmlFor="bulkQuantityNo"
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
                      id="customizableGiftsYes"
                      type="radio"
                      name="customizableGifts"
                      checked={formState.customizableGifts === "yes"}
                      onChange={() => handleChange("customizableGifts", "yes")}
                      className="form-radio h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                      htmlFor="customizableGiftsYes"
                      className="ml-2 block text-sm font-medium text-gray-900"
                    >
                      Yes
                    </label>
                    <input
                      id="customizableGiftsNo"
                      type="radio"
                      name="customizableGifts"
                      checked={formState.customizableGifts === "no"}
                      onChange={() => handleChange("customizableGifts", "no")}
                      className="form-radio ml-4 h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                      htmlFor="customizableGiftsNo"
                      className="ml-2 block text-sm font-medium text-gray-900"
                    >
                      No
                    </label>
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

export default Page1;
