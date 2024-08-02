"use client";

import React, { useState } from "react";
import Page1 from "./page1/page";
import Page2 from "./page2/page";
import Page3 from "./page3/page";
import Page4 from "./page4/page";
import Preview from "./preview/page";

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
    vehicleOptions: string[];
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
};
  
type HandleChange = (key: keyof FormState, value: any) => void;
type HandleNestedChange = (key: keyof FormState, nestedKey: string, value: any) => void;

const RootPage = () => {
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [formState, setFormState] = useState<FormState>({
        contactName: '',
        numberOfWorkers: '',
        descriptionOfPastWork: '',
        portfolioUrl: '',
        isHeavyVehicles: false,
        vehicleName1: '',
        vehicleName2: '',
        vehicleType: '',
        vehicleOptions: [],
        file: null,
        vehicleCheckbox: false,
        vehicleTypePage3: '',
        vehicleMinRate: '',
        vehicleMaxRate: '',
        serviceCheckbox: false,
        serviceType: '',
        serviceMinRate: '',
        serviceMaxRate: '',
        cargoCheckbox: false,
        cargoType: '',
        cargoMinRate: '',
        cargoMaxRate: '',
        advancedPaymentCheckbox: false,
        percentageValue: 0,
    });

    const [selectedVehicleTypes, setSelectedVehicleTypes] = useState<string[]>([]);
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [selectedModels, setSelectedModels] = useState<string[]>([]);
  
    const handleChange: HandleChange = (key, value) => {
        setFormState(prevState => ({ ...prevState, [key]: value }));
        console.log(formState);
    };
  
    const handleNestedChange: HandleNestedChange = (key, nestedKey, value) => {
        setFormState(prevState => ({
            ...prevState,
            [key]: typeof prevState[key] === 'object'
                ? { ...prevState[key], [nestedKey]: value }
                : { [nestedKey]: value },
        }));
    };
  
    const navigateToPage = (pageIndex: number) => {
        setCurrentPage(pageIndex);
    };
  
    const CurrentPageComponent = Pages[currentPage];
  
    const handleSubmit = () => {
        console.log(formState);
        // Add form submission logic here
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#F7F6F9]">
            <CurrentPageComponent
                formState={formState}
                handleChange={handleChange}
                handleNestedChange={handleNestedChange}
                navigateToPage={navigateToPage}
                selectedVehicleTypes={selectedVehicleTypes}
                setSelectedVehicleTypes={setSelectedVehicleTypes}
                selectedBrands={selectedBrands}
                setSelectedBrands={setSelectedBrands}
                selectedModels={selectedModels}
                setSelectedModels={setSelectedModels}
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
