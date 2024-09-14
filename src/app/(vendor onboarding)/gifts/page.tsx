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

  const handleChange = (key: keyof FormState, value: any) => {
    setFormState((prevState) => ({ ...prevState, [key]: value }));
  };

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

  const handleGiftTypesChange = (selectedTypes: string[]) => {
    setFormState((prevState) => ({
      ...prevState,
      typesOfGifts: selectedTypes,
    }));
  };

  function updateFormState(newState: Partial<FormState>) {
    setFormState((prev) => ({ ...prev, ...newState }));
  }

  const [listOfGifts, setlistOfGifts] = useState<string[]>([]);

  useEffect(() => {
    setFormState((prevState) => ({
      ...prevState,
      listOfGifts: listOfGifts,
    }));
  }, [listOfGifts]);

  function getVendorId(): string | null {
    const token = localStorage.getItem("token");

    if (!token) {
      return null;
    }
    try {
      const decodedToken = jwt.decode(token) as {
        userId?: string;
        email?: string;
      };
      return decodedToken?.userId || null;
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  }

  const handleSubmit = async () => {
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

    const jsonData: { [key: string]: any } = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });

    console.log(JSON.stringify(jsonData, null, 2));

    try {
      await addGift(formData);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const CurrentPageComponent = Pages[currentPage];

  return (
    <div>
      <CurrentPageComponent
        key={currentPage}
        formState={formState}
        handleChange={handleChange}
        handleNestedChange={handleNestedChange}
        navigateToPage={setCurrentPage}
        currentPage={currentPage}
        listOfGifts={listOfGifts}
        setlistOfGifts={setlistOfGifts}
        updateFormState={updateFormState}
        handleSubmit={handleSubmit}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default RootPage;
