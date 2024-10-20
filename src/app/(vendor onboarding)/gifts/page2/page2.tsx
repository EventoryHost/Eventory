"use client";
import ThreeStepBar from "@/app/(components)/threeStepBar";
import { Upload } from "lucide-react";
import React, { useState } from "react";
import Appetizers from "../../(components)/Appetizers";

// Define types for the component state and props
type AppetizerType = string;

const _buttonTexts: AppetizerType[] = [
  "Books and Media Gifts",
  "Charitable Gifts",
  "Consumable Gifts",
  "Occasional Gifts",
  "Personalized Gifts",
  "Functional Gifts",
  "Luxury Gifts",
  "Surprise Gifts",
  "Traditional Gifts",
  "Home and Kitchenware Gifts",
  "Experiential Gifts",
  "Tech and Gadgets Gifts",
  "Subscription Services Gifts",
  "Fashion and Apparel Gifts",
  "Sports and Fitness Gifts",
  "Others",
];

// Define types for form state
interface FormState {
  vendorName: string;
  contactNumber: string;
  venueDescription: string;
  minimumQuantity: string;
  bulkQuantityAvailable: string;
  customizableGifts: string;
  typesOfGifts: string[];
  appetizers: string[];
  priceRange: { min: string; max: string };
  deliveryCharges: { min: string; max: string };
  termsAndConditions: string | File;
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
  setlistOfGifts: (value: any) => void;
  listOfGifts: any;
  updateFormState: (value: any) => void;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Page2: React.FC<PageProps> = ({
  formState,
  handleChange,
  handleNestedChange,
  setlistOfGifts,
  listOfGifts,
  updateFormState,
  currentPage,
  setCurrentPage,
}) => {
  const [isDeliveryChargesChecked, setIsDeliveryChargesChecked] =
    useState<boolean>(false);
  const [isPriceRangeChecked, setisPriceRangeChecked] =
    useState<boolean>(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsDeliveryChargesChecked(e.target.checked);
    if (!e.target.checked) {
      handleChange("deliveryCharges", { min: "", max: "" });
    }
  };
  const handleCheckboxChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setisPriceRangeChecked(e.target.checked);
    if (!e.target.checked) {
      handleChange("priceRange", { min: "", max: "" });
    }
  };

  return (
    <div className="flex h-full min-h-[calc(100vh-5.2rem)] w-full flex-col overflow-hidden lg:flex-row">
      <div className="hidden lg:fixed lg:left-0 lg:top-[5.2rem] lg:flex lg:h-[calc(100vh-5.2rem)] lg:w-[30%] lg:flex-col lg:items-start lg:gap-9 lg:overflow-hidden lg:bg-[#FFFFFF] lg:px-8">
        <div className="mt-4 flex items-center justify-start gap-1">
          <ThreeStepBar currentStep={3} />
        </div>
        <div className="flex flex-grow flex-col items-start justify-center gap-9 px-6 py-4">
          <h1 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
            Fill out your Basic details
          </h1>
          <p className="text-sm text-gray-600 md:text-base lg:text-lg">
            Please provide the details of the business offered by your company.
          </p>
        </div>
        <div className="relative h-48">
          <img
            src={
              "https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/vendor_onboarding/tajmahal.png"
            }
            alt="Taj Mahal"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="flex w-full flex-col gap-6 bg-[#F7F6F9] p-4 md:p-6 lg:ml-[30%]">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 rounded-xl bg-white p-6 md:w-[62em] md:p-12">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Catalog Details
          </h2>
          <h3 className="text-lg font-medium md:text-xl">List of Gifts</h3>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <Appetizers
                field={"_buttonTexts"}
                appetizers={_buttonTexts}
                selectedAppetizers={listOfGifts}
                setSelectedAppetizers={setlistOfGifts}
              />
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center bg-[#F7F6F9]">
          <div className="mx-auto flex max-w-7xl flex-col gap-7 rounded-xl bg-white p-6 md:w-[62em] md:p-12">
            <h2 className="text-3xl font-semibold">Pricing and Policies</h2>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={isPriceRangeChecked}
                onChange={handleCheckboxChange1}
                className="h-4 w-4 rounded-lg border-gray-300 bg-gray-100 text-blue-600 focus:ring-blue-500"
              />
              <label className="ml-2 font-semibold text-gray-700">
                Select Price Range
              </label>
            </div>
            {isPriceRangeChecked && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-medium text-gray-700">Min</label>
                  <input
                    type="text"
                    value={formState.priceRange.min}
                    placeholder="Eg: Rs 200"
                    onChange={(e) =>
                      handleChange("priceRange", {
                        ...formState.priceRange,
                        min: e.target.value,
                      })
                    }
                    className="w-full rounded-md border-2 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="font-medium text-gray-700">Max</label>
                  <input
                    type="text"
                    value={formState.priceRange.max}
                    placeholder="Eg: Rs 500"
                    onChange={(e) =>
                      handleChange("priceRange", {
                        ...formState.priceRange,
                        max: e.target.value,
                      })
                    }
                    className="w-full rounded-md border-2 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                  />
                </div>
              </div>
            )}
            <div className="mt-4 flex items-center">
              <input
                type="checkbox"
                checked={isDeliveryChargesChecked}
                onChange={handleCheckboxChange}
                className="h-4 w-4 rounded-xl border-gray-300 bg-gray-100 text-blue-600 focus:ring-blue-500"
              />
              <label className="ml-2 font-semibold text-gray-700">
                Delivery Charges (If available)
              </label>
            </div>
            {isDeliveryChargesChecked && (
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <label className="font-medium text-gray-700">Min</label>
                  <input
                    type="text"
                    value={formState.deliveryCharges.min}
                    placeholder="Per plate rate, Eg: Rs 200"
                    onChange={(e) =>
                      handleChange("deliveryCharges", {
                        ...formState.deliveryCharges,
                        min: e.target.value,
                      })
                    }
                    className="w-full rounded-md border-2 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="font-medium text-gray-700">Max</label>
                  <input
                    type="text"
                    value={formState.deliveryCharges.max}
                    placeholder="Per plate rate, Eg: Rs 500"
                    onChange={(e) =>
                      handleChange("deliveryCharges", {
                        ...formState.deliveryCharges,
                        max: e.target.value,
                      })
                    }
                    className="w-full rounded-md border-2 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                  />
                </div>
              </div>
            )}
            <div className="flex flex-col space-y-2">
              <h2 className="text-xl font-medium">Terms and Conditions</h2>
              <p className="text-sm text-gray-500">PNG, PDF, JPG</p>
              <div className="relative mt-2 w-full max-w-xs">
                <button
                  className="flex w-full items-center justify-center gap-3 rounded-xl border-2 bg-gray-200 px-4 py-3 text-[#2E3192] hover:bg-[#2E3192] hover:text-white"
                  type="button"
                >
                  <Upload size={24} />
                  Upload
                </button>
                <input
                  type="file"
                  id="termsAndConditions"
                  name="termsAndConditions"
                  accept="image/png, .pdf, image/jpg"
                  className="absolute left-0 top-0 h-full w-full cursor-pointer opacity-0"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    updateFormState({
                      termsAndConditions: file,
                    });
                  }}
                />
              </div>
              {formState.termsAndConditions && (
                <span className="mt-2 w-full truncate text-sm text-gray-600">
                  {typeof formState.termsAndConditions === "string"
                    ? formState.termsAndConditions
                    : formState.termsAndConditions?.name}
                </span>
              )}
            </div>

            <h2 className="text-xl font-medium">Or continue via</h2>
            <input
              type="text"
              placeholder="Select your category"
              className="w-1/2 rounded-xl border-2 px-3 py-2 focus:border-[#2E3192] focus:outline-none focus:ring-blue-500 md:w-1/3"
            />
            {/* Button container */}
            <div className="mr-[5%] flex w-full justify-end gap-[32px]">
              {/* Previous Button */}
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
              >
                Previous
              </button>

              {/* Next Button */}
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
