"use client";
// RootPage.tsx
import React, { useState } from "react";
import Page1 from "./page1/page1";
import Page2 from "./page2/page2";
import Preview from "./preview/page3";

const Pages = [Page1, Page2, Preview];

type FormState = {
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
};

const RootPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  // Initialize form state with default values
  const [formState, setFormState] = useState<FormState>({
    vendorName: "",
    contactNumber: "",
    venueDescription: "",
    minimumQuantity: "",
    bulkQuantity: "",
    customizableGifts: "",
    typesOfGifts: [],
    priceRange: { min: "", max: "" },
    appetizers: [],
    deliveryCharges: { min: "", max: "" },
    termsAndConditions: "",
    category: "",
  });

  // Function to handle changes for form fields
  const handleChange = (key: keyof FormState, value: any) => {
    setFormState((prevState) => ({ ...prevState, [key]: value }));
  };

  // Function to handle changes for nested fields
  const handleNestedChange = (
    key: keyof FormState,
    nestedKey: string,
    value: any,
  ) => {
    setFormState((prevState) => ({
      ...prevState,
      [key]:
        typeof prevState[key] === "object"
          ? { ...prevState[key], [nestedKey]: value }
          : { [nestedKey]: value },
    }));
  };

  // Function to navigate between pages
  const navigateToPage = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  // Function to handle changes for gift types
  const handleGiftTypesChange = (selectedTypes: string[]) => {
    setFormState((prevState) => ({
      ...prevState,
      typesOfGifts: selectedTypes,
    }));
  };

  const CurrentPageComponent = Pages[currentPage];
  const [selectedGiftTypes, setSelectedGiftTypes] = useState<string[]>([]);

  function handleSubmit() {
    console.log(formState);
  }

  return (
    <div>
      <CurrentPageComponent
        key={currentPage}
        formState={formState}
        handleChange={handleChange}
        handleNestedChange={handleNestedChange}
        navigateToPage={navigateToPage}
        selectedGiftTypes={selectedGiftTypes}
        setSelectedGiftTypes={setSelectedGiftTypes}
      />
      <div className="my-9 mr-[5%] flex flex-row justify-end gap-7">
        {currentPage > 0 && (
          <button
            className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:w-fit xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>
        )}
        {currentPage < Pages.length - 1 && (
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
          >
            Next
          </button>
        )}
        {currentPage === Pages.length - 1 && (
          <button
            onClick={handleSubmit}
            className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default RootPage;
