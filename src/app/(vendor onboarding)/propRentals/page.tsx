"use client";
// RootPage.tsx
import React, { useState } from "react";
import page1, { page1Props } from "./page1/page1";
import page2, { page2Props } from "./page2/page2";
import page3 from "./page3/page3";
import page4 from "./page4/page4";
import page5 from "./page5/page5";
import preview from "./preview/preview";

const Pages = [page1, page2, page3, page4, page5, preview];

type FormState = {
  // Page1
  contactName: string;
  phoneNumber: string;
  workDescription: string;
  yearsOfExperience: string;
  numberOfWorkers: string;
  handleChange: (key: keyof FormState, value: any) => void;
  [key: string]: any;

  // Page2
  insurancePolicy: string;
  cancellationPolicy: string;
  termsAndConditions: string;
  privacyPolicy: string;

  // Page3
  selectedAppetizers: string[];
  selectedDecor: string[];
  pricingEntries: PricingEntry[];
  hourlyCheckbox: boolean;
  packageTypePage3: string;
  packageMinRate: string;
  packageMaxRate: string;
  dealCheckbox: boolean;
  dealType: string;
  dealMinRate: string;
  dealMaxRate: string;
  workerCheckbox: boolean;
  workerType: string;
  workerMinRate: string;
  workerMaxRate: string;
  


};

type PricingEntry = {
  name: string;
  min: number;
  max: number;
};

const RootPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [formState, setFormState] = useState<FormState>({
    contactName: "",
    phoneNumber: "",
    workDescription: "",
    yearsOfExperience: "",
    numberOfWorkers: "",
    handleChange: (key: keyof FormState, value: any) => {},
    insurancePolicy: "",
    cancellationPolicy: "",
    termsAndConditions: "",
    privacyPolicy: "",
    selectedAppetizers: [],
    selectedDecor: [],
    pricingEntries: [],

    hourlyCheckbox: false,
    packageTypePage3: "",
    packageMinRate: "",
    packageMaxRate: "",
    dealCheckbox: false,
    dealType: "",
    dealMinRate: "",
    dealMaxRate: "",
    workerCheckbox: false,
    workerType: "",
    workerMinRate: "",
    workerMaxRate: "",
  });

  const handleChange = (key: keyof FormState, value: any) => {
    setFormState((prevState) => ({ ...prevState, [key]: value }));
  };

  const addPricingEntry = () => {
    setFormState((prevState) => ({
      ...prevState,
      pricingEntries: [...prevState.pricingEntries, { name: "", min: 0, max: 0 }],
    }));
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

  

  const navigateToPage = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  const CurrentPageComponent: React.FC<page1Props | page2Props | {}> = Pages[currentPage] as React.FC<page1Props | page2Props | {}>;

  const [selectedCategory, setSelectedCategory] = useState("Furniture & Decor");
  const [selectedAppetizers, setselectedAppetizers] = useState<string[]>([]);
  const [selectedDecor, setSelectedDecor] = useState<string[]>([]);

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
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedAppetizers={selectedAppetizers}
        setselectedAppetizers={setselectedAppetizers}
        selectedDecor={selectedDecor}
        setSelectedDecor={setSelectedDecor}
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
