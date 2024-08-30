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
  bulkQuantityAvailable: string;
  customizableGifts: string;
  typesOfGifts: string[];
  priceRange: { min: string; max: string };
  appetizers: string[];
  deliveryCharges: { min: string; max: string };
  termsAndConditions: string | File;
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
  listOfGifts: string[];
  setlistOfGifts: React.Dispatch<React.SetStateAction<string[]>>;
}

const Preview: React.FC<PreviewProps> = ({
  formState,
  handleChange,
  handleNestedChange,
  navigateToPage,
  listOfGifts,
  setlistOfGifts,
}) => {
  function handleSubmit() {
    // Submission logic goes here
  }

  return (
    <div className="flex h-full min-h-[calc(100vh-5.2rem)] w-full flex-col overflow-hidden lg:flex-row">
      {/* Sidebar */}
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
            src={"/tajmahal.png"}
            alt="Taj Mahal"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex w-full flex-col bg-[#F7F6F9] p-4 md:p-6 lg:ml-[30%]">
        <div className="flex flex-col gap-6 rounded-xl bg-white p-4 md:p-6">
          <div className="mb-4 text-2xl font-bold text-gray-800">
            {formState.vendorName} / Gifts
          </div>
          <div className="space-y-4">
            {/* Basic Details */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between rounded-xl bg-gray-200 p-2 text-xl font-medium">
                <span>1. Basic Details</span>
                <button
                  onClick={() => navigateToPage(0)}
                  className="flex items-center justify-center p-1"
                >
                  <EditIcon size={28} />
                </button>
              </div>

              <div className="flex flex-col gap-4 md:flex-row">
                <div className="flex flex-grow flex-col">
                  <label
                    className="mb-2 text-lg font-medium text-gray-700"
                    htmlFor="description"
                  >
                    Your Description
                  </label>
                  <textarea
                    id="description"
                    rows={4}
                    disabled
                    className="w-full resize-none rounded-lg border bg-white p-2 text-gray-700"
                  >
                    {formState.venueDescription}
                  </textarea>
                </div>

                <div className="flex flex-grow flex-col">
                  <h2 className="mb-2 text-lg font-medium text-gray-700">
                    Do You Provide Customizable Gifts?
                  </h2>
                  <span className="font-semibold">
                    {formState.customizableGifts}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-4 md:flex-row">
                <div className="flex flex-grow flex-col">
                  <h2 className="mb-2 text-lg font-medium text-gray-700">
                    Do You Provide Delivery Service?
                  </h2>
                  <span className="font-semibold">
                    {formState.deliveryCharges.min}
                  </span>
                </div>
                <div className="flex flex-grow flex-col">
                  <h2 className="mb-2 text-lg font-medium text-gray-700">
                    Do You Offer products in bulk quantity?
                  </h2>
                  <span className="font-semibold">
                    {formState.bulkQuantityAvailable}
                  </span>
                </div>
              </div>

              <div className="flex flex-col">
                <h2 className="mb-2 text-lg font-medium text-gray-700">
                  What is the minimum quantity of orders?
                </h2>
                <span className="font-semibold">
                  {formState.minimumQuantity}
                </span>
              </div>
            </div>

            {/* Catalog Details */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between rounded-xl bg-gray-200 p-2 text-xl font-medium">
                <span>2. Catalog Details</span>
                <button
                  onClick={() => navigateToPage(1)}
                  className="flex items-center justify-center p-1"
                >
                  <EditIcon size={28} />
                </button>
              </div>

              <div className="flex flex-col">
                <label className="mb-2 text-lg font-medium text-gray-700">
                  List Of Gifts
                </label>
                <div className="flex flex-col gap-5 md:flex-row">
                  <Appetizers
                    appetizers={giftTypes}
                    selectedAppetizers={listOfGifts}
                    setSelectedAppetizers={setlistOfGifts}
                  />
                </div>
              </div>
            </div>

            {/* Pricing and Policies */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between rounded-xl bg-gray-200 p-2 text-xl font-medium">
                <span>3. Pricing and Policies</span>
                <button
                  onClick={() => navigateToPage(2)}
                  className="flex items-center justify-center p-1"
                >
                  <EditIcon size={28} />
                </button>
              </div>

              <div className="flex flex-col">
                <h2 className="mb-2 text-lg font-medium text-gray-700">
                  Terms And Conditions
                </h2>
                <span className="font-semibold">
                  {typeof formState.termsAndConditions === 'string' ? formState.termsAndConditions : formState.termsAndConditions.name}
                </span>
              </div>
            </div>

            {/* Price Range */}
            <div className="flex flex-col">
              <h2 className="mb-2 text-lg font-medium text-gray-700">
                Price Range
              </h2>
              <span className="font-semibold">
                ₹{formState.priceRange.min} - ₹{formState.priceRange.max}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
