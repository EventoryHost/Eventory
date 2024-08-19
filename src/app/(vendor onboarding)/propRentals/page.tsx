"use client";
import jwt from "jsonwebtoken";
// RootPage.tsx
import React, { useEffect, useState } from "react";
import page1, { page1Props } from "./page1/page1";
import page2, { page2Props } from "./page2/page2";
import page3 from "./page3/page3";
import preview from "./preview/preview";
import { addPropRental } from "@/services/vendors/propRental";

const Pages = [page1, page2, page3, preview];

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
  furnitureHourlyPricingEntries: PricingEntry[];
  tentHourlyPricingEntries: PricingEntry[];
  furnitureDealPricingEntries: PricingEntry[];
  furnitureWorkerPricingEntries: PricingEntry[];
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

  advancedPaymentCheckboxPage3: false;
  percentageValuePage3: number;
  percentageValuePage4: number;
  percentageValuePage5: number;

  // Page4
  hourlyCheckboxPage4: boolean;
  dealCheckboxPage4: boolean;
  workerCheckboxPage4: boolean;
  advancedPaymentCheckboxPage4: false;

  // Page5
  hourlyCheckboxPage5: boolean;
  dealCheckboxPage5: boolean;
  workerCheckboxPage5: boolean;
  advancedPaymentCheckboxPage5: false;
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
    handleChange: (key: keyof FormState, value: any) => { },
    insurancePolicy: "",
    cancellationPolicy: "",
    termsAndConditions: "",
    privacyPolicy: "",
    selectedAppetizers: [],
    selectedDecor: [],
    furnitureHourlyPricingEntries: [],
    tentHourlyPricingEntries: [],
    furnitureDealPricingEntries: [],
    furnitureWorkerPricingEntries: [],

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

    // page3
    advancedPaymentCheckboxPage3: false,
    percentageValuePage3: 50,
    percentageValuePage4: 50,
    percentageValuePage5: 50,

    // Page4
    hourlyCheckboxPage4: false,
    dealCheckboxPage4: false,
    workerCheckboxPage4: false,
    advancedPaymentCheckboxPage4: false,

    // Page5
    hourlyCheckboxPage5: false,
    dealCheckboxPage5: false,
    workerCheckboxPage5: false,
    advancedPaymentCheckboxPage5: false,
  });

  const handleChange = (key: keyof FormState, value: any) => {
    setFormState((prevState) => ({ ...prevState, [key]: value }));
  };


  const handleAddPricingEntry = (entry: PricingEntry) => {
    setFormState((prevState) => ({
      ...prevState,
      furnitureHourlyPricingEntries: [
        ...prevState.furnitureHourlyPricingEntries,
        entry,
      ],
    }));
    console.log(formState.furnitureHourlyPricingEntries);
  };

  const handleAddTentHourlyPricingEntries = (entry: { name: string; min: number; max: number; }) => {
    console.log('Adding entry:', entry); // Log the new entry
    setFormState((prevState) => {
      console.log('Previous state:', prevState);
      return {
        ...prevState,
        tentHourlyPricingEntries: [
          ...prevState.tentHourlyPricingEntries,
          entry,
        ],
      };
    });
  };



  useEffect(() => {
    console.log('Tent hourly pricing entries:', formState.tentHourlyPricingEntries);
  }, [formState.tentHourlyPricingEntries]);





  const handleAddTentPricingEntry = (entry: PricingEntry) => {
    setFormState((prevState) => ({
      ...prevState,
      furnitureDealPricingEntries: [
        ...prevState.furnitureDealPricingEntries,
        entry,
      ],
    }));
    console.log(formState.furnitureDealPricingEntries);
  };
  const handleAddAudioPricingEntry = (entry: PricingEntry) => {
    setFormState((prevState) => ({
      ...prevState,
      furnitureWorkerPricingEntries: [
        ...prevState.furnitureWorkerPricingEntries,
        entry,
      ],
    }));
    console.log(formState.furnitureWorkerPricingEntries);
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

  const CurrentPageComponent: React.FC<page1Props | page2Props | {}> = Pages[
    currentPage
  ] as React.FC<page1Props | page2Props | {}>;

  const [selectedCategory, setSelectedCategory] = useState("Furniture & Decor");
  const [selectedAppetizers, setselectedAppetizers] = useState<string[]>([]);
  const [selectedDecor, setSelectedDecor] = useState<string[]>([]);
  const [selectedTentOptions, setSelectedTentOptions] = useState<string[]>([]);
  const [selectedAudioOptions, setSelectedAudioOptions] = useState<string[]>(
    [],
  );
  const [selectedvisualOptions, setSelectedVisualOptions] = useState<string[]>(
    [],
  );
  const [selectedLightOptions, setSelectedLightOptions] = useState<string[]>(
    [],
  );
  const [percentageValuePage3, setPercentageValuePage3] = useState(0);
  const [percentageValuePage4, setPercentageValuePage4] = useState(0);
  const [percentageValuePage5, setPercentageValuePage5] = useState(0);

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

  function handleSubmit() {
    console.log("Form State before submission:", formState);
  
    const venId = getVendorId();
    if (!venId) {
      console.error("No vendorId found!");
      return;
    }
  
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found!");
      return;
    }
  
    const formData = new FormData();
    formData.append("venId", venId);
    formData.append("contactPersonName", formState.contactName || "");
    formData.append("contactPhoneNumber", formState.phoneNumber || "");
    formData.append("descriptionOfWork", formState.workDescription || "");
    formData.append("yearsOfExperience", formState.yearsOfExperience || "");
    formData.append("numberOfWorkers", formState.numberOfWorkers || "");
  
    formData.append("furnitureAndDecor[listUrl]", "");
    formData.append("furnitureAndDecor[furniture]", JSON.stringify(formState.selectedDecor || []));
    formData.append("furnitureAndDecor[decor]", JSON.stringify(formState.selectedDecor || []));
    formData.append("furnitureAndDecor[packageRates][hourly]", JSON.stringify(formState.furnitureHourlyPricingEntries || []));
    formData.append("furnitureAndDecor[packageRates][deal]", JSON.stringify(formState.furnitureDealPricingEntries || []));
    formData.append("furnitureAndDecor[packageRates][worker]", JSON.stringify(formState.furnitureWorkerPricingEntries || []));
  
    formData.append("tentAndCanopy[listUrl]", "");
    formData.append("tentAndCanopy[items]", JSON.stringify(formState.selectedDecor || []));
    formData.append("tentAndCanopy[packageRates][hourly]", JSON.stringify(formState.tentHourlyPricingEntries || []));
    formData.append("tentAndCanopy[packageRates][deal]", JSON.stringify(formState.furnitureDealPricingEntries || []));
    formData.append("tentAndCanopy[packageRates][worker]", JSON.stringify(formState.furnitureWorkerPricingEntries || []));
  
    formData.append("insurancePolicy", formState.insurancePolicy || "");
    formData.append("cancellationPolicy", formState.cancellationPolicy || "");
    formData.append("termsAndConditions", formState.termsAndConditions || "");
    formData.append("privacyPolicy", formState.privacyPolicy || "");
  // @ts-ignore
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
  
    console.log("This is the formdata in root page:", formData);
  
    addPropRental(formData);
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
        selectedTentOptions={selectedTentOptions}
        setSelectedTentOptions={setSelectedTentOptions}
        selectedAudioOptions={selectedAudioOptions}
        setSelectedAudioOptions={setSelectedAudioOptions}
        selectedvisualOptions={selectedvisualOptions}
        setSelectedVisualOptions={setSelectedVisualOptions}
        selectedLightOptions={selectedLightOptions}
        setSelectedLightOptions={setSelectedLightOptions}
        percentageValuePage3={percentageValuePage3}
        percentageValuePage4={percentageValuePage4}
        percentageValuePage5={percentageValuePage5}
        furnitureHourlyPricingEntries={formState.furnitureHourlyPricingEntries}
        tentHourlyPricingEntries={formState.tentHourlyPricingEntries}
        furnitureDealPricingEntries={formState.furnitureDealPricingEntries}
        furnitureWorkerPricingEntries={formState.furnitureWorkerPricingEntries}
        handleAddPricingEntry={handleAddPricingEntry}
        handleAddTentHourlyPricingEntries={handleAddTentHourlyPricingEntries}
        handleAddTentPricingEntry={handleAddTentPricingEntry}
        handleAddAudioPricingEntry={handleAddAudioPricingEntry}
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
        {currentPage < 3 && (
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
          >
            Next
          </button>
        )}
        {currentPage === 3 && (
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
