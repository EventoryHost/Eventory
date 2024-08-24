"use client";
import ThreeStepBar from "@/app/(components)/threeStepBar";
import { Upload } from "lucide-react";
import React, { useState } from "react";
import Appetizers from "../../decorators/(components)/Appetizers";

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
  "Other",
];

// Define types for form state
interface FormState {
  vendorName: string;
  contactNumber: string;
  venueDescription: string;
  minimumQuantity: string;
  bulkQuantity: string;
  customizableGifts: string;
  typesOfGifts: string[];
  appetizers: string[];
  priceRange: { min: string; max: string };
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
  setSelectedGiftTypes: (value: any) => void;
  selectedGiftTypes: any; // Add this line
}

const Page2: React.FC<PageProps> = ({
  formState,
  handleChange,
  handleNestedChange,
  setSelectedGiftTypes,
  selectedGiftTypes,
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
      <div className="flex flex-col items-start justify-between overflow-hidden bg-[#FFFFFF] xs:gap-7 xs:pt-4 md:min-w-[30%] lg:max-w-[30%]">
        <div className="flex items-center justify-start gap-1 xs:self-start xs:pl-5 lg:mt-[2rem]">
          <ThreeStepBar currentStep={2} />
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

      <div className="flex w-full flex-col items-center justify-center bg-[#F7F6F9]">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 rounded-xl bg-white p-6 md:w-[62em] md:p-12">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Catalog Details
          </h2>
          <h3 className="text-lg font-medium md:text-xl">List of Gifts</h3>
          <div className="flex flex-col items-center gap-5">
            <div className="flex w-full flex-col gap-5 md:flex-row md:gap-5">
              <Appetizers
                appetizers={_buttonTexts}
                selectedAppetizers={selectedGiftTypes}
                setSelectedAppetizers={setSelectedGiftTypes}
              />
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center bg-[#F7F6F9] p-2">
          <div className="flex w-[95%] flex-col gap-7 rounded-xl bg-white p-12">
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
            <div className="flex flex-col">
              <h2 className="text-xl font-medium">Terms and Conditions</h2>
              <p className="text-sm text-gray-500">PNG, PDF, JPG</p>
              <button className="mt-2 flex w-48 items-center justify-center gap-5 rounded-xl border-2 bg-gray-200 px-9 py-3 text-[#2E3192] hover:bg-[#2E3192] hover:text-white">
                <Upload size={24} />
                Upload
              </button>
            </div>
            <h2 className="text-xl font-medium">Or continue via</h2>
            <input
              type="text"
              placeholder="Select your category"
              className="w-1/2 rounded-xl border-2 px-3 py-2 focus:border-[#2E3192] focus:outline-none focus:ring-blue-500 md:w-1/3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
