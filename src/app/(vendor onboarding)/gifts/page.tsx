"use client";

import React, { useState, useEffect } from "react";
import jwt from "jsonwebtoken";
import Page1 from "./page1/page1";
import Page2 from "./page2/page2";
import Preview from "./preview/page3";
import { addGift } from "@/services/vendors/gift";
import Agreement from "../Agreement/Agreement";
import Plans from "../Plans/Plans";
import Registration_Completed from "../Registration-Completed/page";

const Pages = [Page1, Page2, Preview]; // List of pages

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
  const [listOfGifts, setlistOfGifts] = useState<string[]>([]);

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

  // Handle form field change
  const handleChange = (key: keyof FormState, value: any) => {
    setFormState((prevState) => ({ ...prevState, [key]: value }));
  };

  // Handle nested form field change
  const handleNestedChange = (key: keyof FormState, nestedKey: string, value: any) => {
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

  // Handle changes to gift types
  const handleGiftTypesChange = (selectedTypes: string[]) => {
    setFormState((prevState) => ({
      ...prevState,
      typesOfGifts: selectedTypes,
    }));
  };

  // Update form state when necessary
  const updateFormState = (newState: Partial<FormState>) => {
    setFormState((prev) => ({ ...prev, ...newState }));
  };

  useEffect(() => {
    setFormState((prevState) => ({
      ...prevState,
      listOfGifts: listOfGifts,
    }));
  }, [listOfGifts]);

  // Decode JWT to extract vendor ID
  const getVendorId = (): string | null => {
    const token = localStorage.getItem("token");

    if (!token) {
      return null;
    }
    try {
      const decodedToken = jwt.decode(token) as { userId?: string; email?: string };
      return decodedToken?.userId || null;
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  };

  // Handle form submission
  const handleSubmit = async () => {
    const venId = getVendorId();

    if (!venId) {
      console.error("Vendor ID not found");
      return;
    }

    const formData = new FormData();
    formData.append("venId", venId);

    // Append formState data to FormData
    Object.entries(formState).forEach(([key, value]) => {
      if (typeof value === "object" && value !== null) {
        if (Array.isArray(value)) {
          value.forEach((v) => formData.append(`${key}[]`, v));
        } else {
          Object.entries(value).forEach(([nestedKey, nestedValue]) =>
            formData.append(`${key}[${nestedKey}]`, nestedValue),
          );
        }
      } else {
        formData.append(key, value as string);
      }
    });

    try {
      await addGift(formData);
      console.log("addGift Form submitted successfully");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // Render the current page
  const renderPage = () => {
    switch (currentPage) {
      case 0:
        return (
          <Page1
            key={currentPage}
            setCurrentPage={setCurrentPage}
            formState={formState}
            handleChange={handleChange}
            handleNestedChange={handleNestedChange}
            navigateToPage={setCurrentPage}
            currentPage={currentPage}
          />
        );
      case 1:
        return (
          <Page2
            key={currentPage}
            formState={formState}
            handleChange={handleChange}
            handleNestedChange={handleNestedChange}
            listOfGifts={listOfGifts}
            setlistOfGifts={setlistOfGifts}
            updateFormState={updateFormState}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        );
      case 2:
        return (
          <Preview
          navigateToPage={setCurrentPage}
            key={currentPage}
            formState={formState}
            handleChange={handleChange}
            handleNestedChange={handleNestedChange}
            listOfGifts={listOfGifts}
            setlistOfGifts={setlistOfGifts}
            handleSubmit={handleSubmit}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        );
      case 3:
        return <Agreement setCurrentPage={setCurrentPage} />;
      case 4:
        return <Plans handleformSubmit={handleSubmit} setCurrentPage={setCurrentPage} />;
      case 5:
        return <Registration_Completed />;
      default:
        return <h2>Loading...</h2>;
    }
  };

  return (
    <div className="flex flex-col w-full">
      {renderPage()}
    </div>
  );
};

export default RootPage;
