"use client";

import StepBar from "@/app/(components)/stepBar";
import { Upload } from "lucide-react";
import React, { useState, useEffect } from "react";
import Appetizers from "../../caterer/(components)/Appetizers";

const vehicleTypes = [
  "Sedan",
  "Hatchback",
  "Coupe",
  "Convertible",
  "SUV",
  "Bus",
  "Van",
  "Crossover",
  "Minivan",
  "Wagon",
  "Sports Cars",
  "Luxury Cars",
  "Minibus",
  "Hybrid",
  "Limousine",
  "Others",
];
const brands = [
  "Maruti Suzuki",
  "Hyundai",
  "Tata Motors",
  "Mahindra",
  "Honda",
  "Skoda",
  "Volkswagen AG",
  "Renault",
  "Nissan",
  "Mg Motors",
  "BYD",
  "Toyota",
  "Kia",
  "Audi",
  "BMW",
  "Mercedes",
  "Others",
];
const models = [
  "Swift",
  "Scorpio",
  "Tata Punch",
  "Mahindra Thar",
  "Ciaz",
  "Nexon",
  "Creta",
  "Brezza",
  "Sonet",
  "Innova Crysta",
  "Innova",
  "Kia Carens",
  "Xuv300",
  "Baleno",
  "Ertiga",
  "Others",
];

interface FormState {
  contactName: string;
  numberOfWorkers: string;
  descriptionOfPastWork: string;
  portfolioUrl: string;
  vehicleType: string;
  selectedVehicleTypes: string[];
  selectedBrands: string[];
  selectedModels: string[];
  file: File | null;
  isHeavyVehicles: boolean;
  vehicleName1: string;
  vehicleName2: string;
}

type HandleChange = (field: keyof FormState, value: any) => void;

type Page2Props = {
  formState: FormState;
  handleChange: HandleChange;
  navigateToPage: (pageIndex: number) => void;
  selectedVehicleTypes: string[];
  selectedBrands: string[];
  setSelectedBrands: React.Dispatch<React.SetStateAction<string[]>>;
  selectedModels: string[];
  setSelectedModels: React.Dispatch<React.SetStateAction<string[]>>;
  setSelectedVehicleTypes: React.Dispatch<React.SetStateAction<string[]>>;
};

const Page2: React.FC<Page2Props> = ({ formState, handleChange }) => {
  const [isHeavyVehicles, setIsHeavyVehicles] = useState(
    formState.isHeavyVehicles,
  );
  const [vehicleName1, setVehicleName1] = useState(formState.vehicleName1);
  const [vehicleName2, setVehicleName2] = useState(formState.vehicleName2);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsHeavyVehicles(e.target.checked);
    handleChange("isHeavyVehicles", e.target.checked);
  };

  const handleVehicleName1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVehicleName1(e.target.value);
    handleChange("vehicleName1", e.target.value);
  };

  const handleVehicleName2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVehicleName2(e.target.value);
    handleChange("vehicleName2", e.target.value);
  };

  return (
    <div className="flex h-full box-border w-full flex-col overflow-hidden lg:flex-row">
      <div className="flex flex-col items-start justify-between bg-[#FFFFFF] xs:gap-7 xs:pt-4 md:min-w-[30%] lg:max-w-[30%]">
        <div className="flex items-center justify-start gap-1 xs:self-start xs:pl-5 lg:mt-[2rem]">
          <StepBar currentStep={2} />
        </div>
        <div className="flex h-[80%] flex-col items-start gap-9 px-9 xs:pl-5 md:px-11 lg:p-8">
          <h1 className="text-3xl font-semibold md:text-4xl lg:text-5xl">
            Fill out your Vehicle details
          </h1>
          <p className="text-gray-600 xs:text-sm md:w-[90%] lg:text-xl">
            Please provide the details of the Vehicles offered by your company.
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
      <div className="flex w-full flex-col items-center justify-center bg-[#F7F6F9] p-2 md:p-[1rem]">
        <div className="w-full">
          <div className="flex flex-col gap-7  rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6 lg:text-2xl">
            <span className="font-semibold">Equipment Details</span>
            <div className="flex gap-2">
              <input
                type="checkbox"
                checked={isHeavyVehicles}
                onChange={handleCheckboxChange}
                className="h-6 w-6 appearance-none rounded-lg border-2 border-[#2E3192] bg-white checked:bg-[#2E3192] focus:outline-none"
              />
              <span className="font-semibold">Heavy Vehicles</span>
            </div>
            <div className="flex flex-row gap-2">
              <input
                value={vehicleName1}
                onChange={handleVehicleName1Change}
                type="text"
                className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                placeholder="Name of vehicles"
              />
              <input
                value={vehicleName2}
                onChange={handleVehicleName2Change}
                type="text"
                className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                placeholder="Name of vehicles"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex min-w-[40%] flex-col gap-2">
                <label htmlFor="url">or provide via</label>
                <button className="flex max-w-52 items-center justify-center gap-5 rounded-xl border-2 bg-gray-200 px-9 py-3 text-[#2E3192] hover:bg-[#2E3192] hover:text-white">
                  <Upload />
                  Upload
                </button>
              </div>
            </div>
          </div>
          {/* Vehicle types */}
          <div className="my-6"></div>
          <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:w-full md:p-6">
            <span className="font-semibold">Vehicle types</span>
            <Appetizers
              appetizers={vehicleTypes}
              selectedAppetizers={formState.selectedVehicleTypes}
              setSelectedAppetizers={(selectedappetizers) =>
                handleChange("selectedVehicleTypes", selectedappetizers)
              }
            />
          </div>

          {/* Brands */}
          <div className="my-6"></div>
          <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:w-full md:p-6">
            <span className="font-semibold">Brands</span>
            <Appetizers
              appetizers={brands}
              selectedAppetizers={formState.selectedBrands}
              setSelectedAppetizers={(selectedBrands) =>
                handleChange("selectedBrands", selectedBrands)
              }
            />
          </div>

          {/* Models */}
          <div className="my-6"></div>
          <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:w-full md:p-6">
            <span className="font-semibold">Models</span>
            <Appetizers
              appetizers={models}
              selectedAppetizers={formState.selectedModels}
              setSelectedAppetizers={(selectedModels) =>
                handleChange("selectedModels", selectedModels)
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;