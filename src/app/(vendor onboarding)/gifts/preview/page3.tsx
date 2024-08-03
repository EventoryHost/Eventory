// Preview.tsx
import React from "react";
import ThreeStepBar from "@/app/(components)/threeStepBar";
import { EditIcon } from "lucide-react";
import Appetizers from "../../decorators/(components)/Appetizers";

const giftTypes = [
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

interface PreviewProps {
  formState: FormState;
  handleChange: (key: keyof FormState, value: any) => void;
  handleNestedChange: (
    key: keyof FormState,
    nestedKey: string,
    value: any,
  ) => void;
  navigateToPage: (pageIndex: number) => void;
  selectedGiftTypes: string[];
  setSelectedGiftTypes: React.Dispatch<React.SetStateAction<string[]>>;
}

const Preview: React.FC<PreviewProps> = ({
  formState,
  handleChange,
  handleNestedChange,
  navigateToPage,
  selectedGiftTypes,
  setSelectedGiftTypes,
}) => {

  function handleSubmit() {
    // Submission logic goes here
  }

  return (
    <div className="flex h-full min-h-[calc(100vh-5.2rem)] w-full overflow-hidden lg:flex-row">
      <div className="fixed left-0 top-[5.2rem] z-10 h-[calc(100vh-5.2rem)] w-[30%] overflow-hidden bg-[#FFFFFF]">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-start gap-1 xs:self-start xs:pl-5 lg:mt-[2rem]">
            <ThreeStepBar currentStep={3} />
          </div>
          <div className="ml-8 flex flex-grow flex-col items-start justify-center gap-9 px-9 xs:pl-5 md:px-11 lg:p-8">
            <h1 className="text-2xl font-semibold md:text-4xl lg:text-5xl">
              Fill out your Basic details
            </h1>
            <p className="text-gray-600 xs:text-sm md:w-[90%] lg:text-lg">
              Please provide the details of the business offered by your
              company.
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
      </div>

      <div className="ml-[30%] flex w-full flex-col items-center justify-center bg-[#F7F6F9] p-2 md:p-[1rem]">
        <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <div className="mb-4 text-2xl font-bold text-gray-800">
            {formState.vendorName} / Gifts
          </div>
          <div className="">
            <div className="mr-4 mt-4 flex justify-between rounded-xl bg-gray-200 p-2 pl-4 text-2xl font-medium">
              1. Basic Details
              <div
                onClick={() => navigateToPage(0)}
                className="align-center flex justify-center p-1"
              >
                <EditIcon size={28} />
              </div>
            </div>

            <div className="mb-2 flex flex-row">
              <div>
                <label
                  className="mb-2 mt-4 block text-xl font-medium text-gray-700"
                  htmlFor="description"
                >
                  Your Description
                </label>
                <textarea
                  className="focus:shadow-outline mr-8 h-28 w-96 resize-none appearance-none py-2 font-semibold leading-tight text-gray-700 focus:outline-none"
                  id="description"
                  rows={4}
                  disabled
                >
                  {formState.venueDescription}
                </textarea>
              </div>

              <div>
                <h2 className="mb-2 mt-4 block text-xl font-medium text-gray-700">
                  Do You Provide Customizable Gifts?
                </h2>
                <span className="font-semibold">
                  {formState.customizableGifts}
                </span>
              </div>
            </div>

            <div className="flex">
              <div>
                <h2 className="mb-2 mr-24 mt-4 block text-xl font-medium text-gray-700">
                  Do You Provide Delivery Service?
                </h2>
                <span className="font-semibold">
                  {formState.deliveryCharges.min}
                </span>
              </div>
              <div>
                <h2 className="mb-2 mt-4 block text-xl font-medium text-gray-700">
                  Do You Offer products in bulk quantity?
                </h2>
                <span className="font-semibold">{formState.bulkQuantity}</span>
              </div>
            </div>
            <div className="mt-16">
              <h2 className="mb-2 mt-4 block text-xl font-medium text-gray-700">
                What is the minimum quantity of orders?
              </h2>
              <span className="font-semibold">{formState.minimumQuantity}</span>
            </div>

            <div className="mr-4 mt-4 flex justify-between rounded-xl bg-gray-200 p-2 pl-4 text-2xl font-medium">
              2. Catalog Details
              <div
                onClick={() => navigateToPage(1)}
                className="align-center flex justify-center p-1"
              >
                <EditIcon size={28} />
              </div>
            </div>

            <div className="mb-2">
              <label className="mb-2 mt-4 block text-lg font-medium text-gray-700">
                List Of Gifts
              </label>
              <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
                <Appetizers
                  appetizers={giftTypes}
                  selectedAppetizers={selectedGiftTypes}
                  setSelectedAppetizers={setSelectedGiftTypes}
                />
              </div>
            </div>
            <div className="mr-4 mt-4 flex justify-between rounded-xl bg-gray-200 p-2 pl-4 text-2xl font-medium">
              3. Pricing and Policies
              <div
                onClick={() => navigateToPage(1)}
                className="align-center flex justify-center p-1"
              >
                <EditIcon size={28} />
              </div>
            </div>
            <div className="mt-4">
              <h2 className="mb-2 mt-4 block text-xl font-medium text-gray-700">
                Terms And Conditions
              </h2>
              <span className="font-semibold">
                {formState.termsAndConditions}
              </span>
            </div>
          </div>
          <div className="mt-4">
            <h2 className="mb-2 mt-4 block text-xl font-medium text-gray-700">
              Price Range
            </h2>
            <span className="font-semibold">
              ₹{formState.priceRange.min} - ₹{formState.priceRange.max}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
