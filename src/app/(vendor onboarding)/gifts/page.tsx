"use client";
// RootPage.tsx
import React, { useState, useEffect } from "react";
import jwt from "jsonwebtoken";
import Page1 from "./page1/page1";
import Page2 from "./page2/page2";
import Preview from "./preview/page3";
import { addGift } from "@/services/vendors/gift";

const Pages = [Page1, Page2, Preview];

type FormState = {
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
  listOfGifts: string[];
};

const RootPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  // Initialize form state with default values
  const [formState, setFormState] = useState<FormState>({
    vendorName: "",
    contactNumber: "",
    venueDescription: "",
    minimumQuantity: "",
    bulkQuantityAvailable: "",
    customizableGifts: "",
    typesOfGifts: [],
    priceRange: { min: "", max: "" },
    appetizers: [],
    deliveryCharges: { min: "", max: "" },
    termsAndConditions: "",
    category: "",
    listOfGifts: [],
  });

  // Function to handle changes for form fields
  const handleChange = (key: keyof FormState, value: any) => {
    console.log(`Updating ${key} with value:`, value);
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
        typeof prevState[key] === "object" &&
        prevState[key] !== null &&
        !Array.isArray(prevState[key])
          ? { ...(prevState[key] as Record<string, any>), [nestedKey]: value }
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

  function updateFormState(newState: Partial<FormState>) {
    setFormState((prev) => ({ ...prev, ...newState }));
  }

  const CurrentPageComponent = Pages[currentPage];
  const [listOfGifts, setlistOfGifts] = useState<string[]>([]);

  useEffect(() => {
    console.log("The updated listOfGifts is:", listOfGifts);
    setFormState((prevState) => ({
      ...prevState,
      listOfGifts: listOfGifts,
    }));
  }, [listOfGifts]);

  function getVendorId(): string | null {
    const token = localStorage.getItem("token");

    if (!token) {
      console.log("No token found!");
      return null;
    }
    try {
      const decodedToken = jwt.decode(token) as {
        userId?: string;
        email?: string;
      };
      if (!decodedToken || !decodedToken.userId) {
        console.error("Invalid token or token does not contain userId.");
        return null;
      }
      return decodedToken.userId;
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  }

  const handleSubmit = async () => {
    console.log("Form State before submission:", formState);

    const venId = getVendorId()!;
    const formData = new FormData();
    formData.append("venId", venId);

    formData.append("vendorName", formState.vendorName);
    formData.append("contactNumber", formState.contactNumber);
    formData.append("venueDescription", formState.venueDescription);
    formData.append("minimumQuantity", formState.minimumQuantity);
    formData.append("bulkQuantityAvailable", formState.bulkQuantityAvailable);
    formData.append("customizableGifts", formState.customizableGifts);

    formData.append("priceRange[min]", formState.priceRange.min);
    formData.append("priceRange[max]", formState.priceRange.max);

    formState.appetizers.forEach((appetizer) =>
      formData.append("appetizers[]", appetizer),
    );

    formData.append("deliveryCharges[min]", formState.deliveryCharges.min);
    formData.append("deliveryCharges[max]", formState.deliveryCharges.max);

    if (formState.termsAndConditions instanceof File) {
      formData.append("termsAndConditions", formState.termsAndConditions);
    } else {
      formData.append("termsAndConditions", formState.termsAndConditions);
    }

    formData.append("category", formState.category);

    formState.listOfGifts.forEach((gift) =>
      formData.append("listOfGifts[]", gift),
    );

    try {
      await addGift(formData);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <CurrentPageComponent
        key={currentPage}
        formState={formState}
        handleChange={handleChange}
        handleNestedChange={handleNestedChange}
        navigateToPage={navigateToPage}
        listOfGifts={listOfGifts}
        setlistOfGifts={setlistOfGifts}
        updateFormState={updateFormState}
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
