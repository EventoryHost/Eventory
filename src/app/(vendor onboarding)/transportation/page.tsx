"use client";

import React, { useState } from "react";
import Page1 from "./page1/page1";
import Page2 from "./page2/page2";
import Page3 from "./page3/page3";
import Page4 from "./page4/page4";
import Preview from "./preview/page5";
import Agreement from "../(Agreement)/Agreement";
import Plans from "../(Plans)/Plans";
import Registration_Completed from "../(Registration-Completed)/thankupage";
import { addTransport } from "@/services/vendors/transport";

// Define the pages in sequence
const Pages = [Page1, Page2, Page3, Page4, Preview];

export type FormState = {
  // Page1
  contactName: string;
  numberOfWorkers: string;
  descriptionOfPastWork: string;
  portfolioUrl: string;

  // Page2
  isHeavyVehicles: boolean;
  vehicleName1: string;
  vehicleName2: string;
  vehicleType: string;
  selectedVehicleTypes: string[];
  selectedBrands: string[];
  selectedModels: string[];
  file: File | null;

  // Page3
  vehicleCheckbox: boolean;
  vehicleTypePage3: string;
  vehicleMinRate: string;
  vehicleMaxRate: string;
  serviceCheckbox: boolean;
  serviceType: string;
  serviceMinRate: string;
  serviceMaxRate: string;
  cargoCheckbox: boolean;
  cargoType: string;
  cargoMinRate: string;
  cargoMaxRate: string;
  advancedPaymentCheckbox: boolean;
  percentageValue: number;

  // Page4
  termsProvideVia: string;
  policyProvideVia: string;
};

type HandleChange = (
  key: keyof FormState | "navigateToPage",
  value: any,
) => void;
type HandleNestedChange = (
  key: keyof FormState,
  nestedKey: string,
  value: any,
) => void;

type Package = {
  type: string;
  priceRange: [number, number];
};

const RootPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [formState, setFormState] = useState<FormState>({
    contactName: "",
    numberOfWorkers: "",
    descriptionOfPastWork: "",
    portfolioUrl: "",
    isHeavyVehicles: false,
    vehicleName1: "",
    vehicleName2: "",
    vehicleType: "",
    selectedVehicleTypes: [],
    selectedBrands: [],
    selectedModels: [],
    file: null,
    vehicleCheckbox: false,
    vehicleTypePage3: "",
    vehicleMinRate: "",
    vehicleMaxRate: "",
    serviceCheckbox: false,
    serviceType: "",
    serviceMinRate: "",
    serviceMaxRate: "",
    cargoCheckbox: false,
    cargoType: "",
    cargoMinRate: "",
    cargoMaxRate: "",
    advancedPaymentCheckbox: false,
    percentageValue: 0,
    termsProvideVia: "",
    policyProvideVia: "",
  });

  const [selectedVehicleTypes, setSelectedVehicleTypes] = useState<string[]>(
    [],
  );
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedModels, setSelectedModels] = useState<string[]>([]);

  const [packages, setPackages] = useState<Package[]>([
    { type: "", priceRange: [0, 100000] },
  ]);

  const addPackage = () => {
    setPackages((prevPackages) => [
      ...prevPackages,
      { type: "", priceRange: [0, 100000] },
    ]);
  };

  const handleChange: HandleChange = (key, value) => {
    setFormState((prevState) => ({ ...prevState, [key]: value }));
    // console.log(formState);
  };

  const handleNestedChange: HandleNestedChange = (key, nestedKey, value) => {
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

  const navigateToPage = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  // Switch-case based page rendering
  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <Page1
            formState={formState}
            navigateToPage={navigateToPage}
            handleChange={handleChange}
            handleNestedChange={handleNestedChange}
          />
        );
      case 2:
        return (
          <Page2
            formState={formState}
            handleChange={handleChange}
            navigateToPage={navigateToPage}
            selectedVehicleTypes={selectedVehicleTypes}
            setSelectedVehicleTypes={setSelectedVehicleTypes}
            selectedBrands={selectedBrands}
            setSelectedBrands={setSelectedBrands}
            selectedModels={selectedModels}
            setSelectedModels={setSelectedModels}
          />
        );
      case 3:
        return (
          <Page3
            formState={formState}
            navigateToPage={navigateToPage}
            handleChange={handleChange}
            packages={packages}
            addPackage={addPackage}
          />
        );
      case 4:
        return (
          <Page4
            formState={formState}
            handleChange={handleChange}
            navigateToPage={navigateToPage}
          />
        );
      case 5:
        return (
          <Preview
            formState={formState}
            handleChange={handleChange}
            navigateToPage={navigateToPage}
          />
        );
      case 6:
        return (
          <>
            <Agreement setCurrentPage={setCurrentPage} />
          </>
        );
      case 7:
        return (
          <>
            <Plans
              handleformSubmit={handleSubmit}
              setCurrentPage={setCurrentPage}
            />
          </>
        );
      case 8:
        return (
          <>
            <Registration_Completed />
          </>
        );
      default:
        return (
          <>
            <center>
              <h2>Loading....</h2>
            </center>
          </>
        );
    }
  };

  const handleSubmit = async () => {
    console.log(formState);
    // Add form submission logic here
    try {
      await addTransport(formState);
    } catch (error) {
      console.error("Error adding prop rentals: ", error);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#F7F6F9]">
      {renderPage()}

      <div className="my-9 mr-[5%] flex w-full flex-row justify-end gap-7">
        {currentPage <= Pages.length && (
          <button
            className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:w-fit xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>
        )}
        {currentPage <= Pages.length && (
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default RootPage;
