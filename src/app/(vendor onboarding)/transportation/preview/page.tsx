"use client";
// Make a preview page for the transportation form

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Check, EditIcon } from "lucide-react";
import Appetizers from "../../caterer/(components)/Appetizers";


const vehicleTypes = ["Sedan", "Hatchback", "Coupe", "Convertible", "SUV", "Bus", "Van", "Crossover", "Minivan", "Wagon", "Sports Cars", "Luxury Cars", "Minibus", "Hybrid", "Limousine", "Others"];
const brands = ["Maruti Suzuki", "Hyundai", "Tata Motors", "Mahindra", "Honda", "Skoda", "Volkswagen AG", "Renault", "Nissan", "Mg Motors", "BYD", "Toyota", "Kia", "Audi", "BMW", "Mercedes", "Others"];
const models = ["Swift", "Scorpio", "Tata Punch", "Mahindra Thar", "Ciaz", "Nexon", "Creta", "Brezza", "Sonet", "Innova Crysta", "Innova", "Kia Carens", "Xuv300", "Baleno", "Ertiga", "Others"];


interface FormState {
  contactName: string;
  numberOfWorkers: string;
  descriptionOfPastWork: string;
  portfolioUrl: string;

  // Page2
  isHeavyVehicles: boolean;
  vehicleName1: string;
  vehicleName2: string;
  vehicleType: string;
  selectedVehicleTypes: string[],
  selectedBrands: string[],
  selectedModels: string[],
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
}

type HandleChange = (field: keyof FormState, value: any) => void;


type PreviewProps = {

  formState: FormState;
  navigateToPage: (pageIndex: number) => void;
  handleChange: HandleChange;


};

const Preview = ({ formState, navigateToPage, handleChange }: PreviewProps) => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="flex flex-col gap-2 w-screen p-2">
        <span className="align-center flex justify-start p-4 text-3xl font-semibold">
          {formState.contactName} / Transportation
        </span>

        <div className="ml-8 mr-4 flex justify-between rounded-xl bg-gray-200 p-2 pl-4 text-3xl font-semibold">
          1. Basic Venue Details
          <div className="align-center flex justify-center p-1">
            <button onClick={() => navigateToPage(0)}>
              <EditIcon size={32} />
            </button>
          </div>
        </div>

        <div className="mx-8 mt-6 flex gap-16">
          <div className="flex w-1/2 flex-col">
            <span className="text-xl">Contact Person Name</span>
            <span className="mt-4 font-semibold">{formState.contactName}</span>
          </div>
          <div className="flex w-1/2 flex-col">
            <span className="text-xl">Total Workers</span>
            <span className="font-semibold">{formState.numberOfWorkers}</span>
          </div>
        </div>

        <div className="mx-8 mt-6 flex gap-16">
          <div className="flex w-1/2 flex-col">
            <span className="text-xl">Description of your past work</span>
            <span className="mt-4 font-semibold">
              {formState.descriptionOfPastWork}
            </span>
          </div>
          <div className="flex w-1/2 flex-col">
            <span className="text-xl">Portfolio of past work</span>
            <span className="mt-4 font-semibold">
              {formState.portfolioUrl}
            </span>

          </div>
        </div>

        <div className="ml-8 mr-4 mt-4 flex justify-between rounded-xl bg-gray-200 p-2 pl-4 text-3xl font-semibold">
          2. Equipment Details
          <div className="align-center flex justify-center p-1">
            <button onClick={() => navigateToPage(1)}>
              <EditIcon size={32} />
            </button>
          </div>
        </div>

        <div className="mx-8 mt-6 flex gap-16">
          <div className="flex w-1/2 flex-col">
            <span className="text-lg">Do You have any heavy vehicles?</span>
            <span className="mt-4 font-semibold">{formState.isHeavyVehicles ? "Yes" : "No"}</span>
          </div>
        </div>
        <div className="flex w-1/2 flex-col">
          <div className="p-4 pl-8">
            <span className="text-xl">Heavy Vehicles Details</span>
          </div>
          <div className="ml-8 flex flex-wrap gap-2">
            <div className="flex w-1/2 flex-col">
              <span>{formState.vehicleName1}</span>
              <span>{formState.vehicleName2}</span>
            </div>
          </div>
        </div>

        <div>
          <div className="p-4 pl-8">
            <span className="text-xl">Vehicle Types</span>
            <span className="mt-4 font-semibold">{formState.vehicleType}</span>
          </div>

          <div className="ml-8 flex flex-wrap gap-2">
            <Appetizers
              appetizers={vehicleTypes}
              selectedAppetizers={formState.selectedVehicleTypes}
              setSelectedAppetizers={(selectedappetizers) =>
                handleChange("selectedVehicleTypes", selectedappetizers)
              }
            />
          </div>
        </div>

        <div>
          <div className="p-4 pl-8">
            <span className="text-xl">Brands</span>
          </div>

          <div className="ml-8 flex flex-wrap gap-2">
            <Appetizers
              appetizers={brands}
              selectedAppetizers={formState.selectedBrands}
              setSelectedAppetizers={(selectedBrands) =>
                handleChange("selectedBrands", selectedBrands)
              }
            />
          </div>
        </div>

        <div>
          <div className="p-4 pl-8">
            <span className="text-xl">Models</span>
          </div>

          <div className="ml-8 flex flex-wrap gap-2">
            <Appetizers
              appetizers={models}
              selectedAppetizers={formState.selectedModels}
              setSelectedAppetizers={(selectedModels) =>
                handleChange("selectedModels", selectedModels)
              }
            />
          </div>
        </div>

        <div className="mb-4 ml-8 mr-4 mt-4 flex justify-between rounded-xl bg-gray-200 p-2 pl-4 text-3xl font-semibold">
          3. Package Rates
          <div className="align-center flex justify-center p-1">
            <button onClick={() => navigateToPage(2)}>
              <EditIcon size={32} />
            </button>
          </div>
        </div>

        <div className="ml-8 flex flex-col">
          <div className="text-xl font-semibold">Types of Vehicles</div>
          <div className="mt-4 flex">
            <div className="flex w-1/2 flex-col">
              <span> {formState.vehicleTypePage3}</span>
              <span className="font-semibold">₹ {formState.vehicleMinRate} - ₹{formState.vehicleMaxRate}</span>
            </div>
          </div>
        </div>

        <div className="ml-8 mt-4 flex flex-col">
          <div className="text-xl font-semibold">Types of Service</div>
          <div className="mt-4 flex flex-row">
            <div className="flex w-1/2 flex-col">
              <span>{formState.serviceType}</span>
              <span className="font-semibold">₹ {formState.serviceMinRate} - ₹{formState.serviceMaxRate}</span>
            </div>

          </div>
        </div>

        <div className="ml-8 mt-4 flex flex-col">
          <div className="text-xl font-semibold">Type of Cargo</div>
          <div className="mt-4 flex">
            <div className="flex w-1/2 flex-col">
              <span>{formState.cargoType}</span>
              <span className="font-semibold">₹ {formState.cargoMinRate} - ₹{formState.cargoMaxRate}</span>
            </div>

          </div>
        </div>

        <div className="ml-8 mr-4 mt-4 flex flex-col rounded-xl bg-gray-200 p-2 pl-4 text-3xl font-semibold lg:flex-row lg:justify-between">
          <div className="flex items-center">4. Policy</div>
          <div className="flex items-center justify-center p-1">
            <button onClick={() => navigateToPage(3)}>
              <EditIcon size={32} />
            </button>
          </div>
        </div>

        <div className="mx-8 mt-6 flex gap-16">
          <div className="flex w-1/2 flex-col">
            <span className="text-xl">Do you take advance payment</span>
            <span className="mt-4 font-semibold">{formState.advancedPaymentCheckbox ? "Yes" : "No"}</span>
          </div>
          <div className="flex w-1/2 flex-col">
            <span className="text-xl">Percentage Value</span>
            <span className="mt-4 font-semibold">{formState.percentageValue}</span>
          </div>
        </div>

        <div className="mt-4 flex w-full flex-col lg:flex-row lg:gap-4">
          <div className="w-full p-4 lg:w-1/2 lg:p-0">
            <div className="flex flex-col">
              <div className="p-4 pl-8">
                <span className="text-xl">Terms and Conditions</span>
              </div>
              <div className="ml-8">
                {formState.termsProvideVia ? (
                  <a href={formState.termsProvideVia}>{formState.termsProvideVia}</a>) : (
                  <span className="ml-8 mt-2 flex items-center font-semibold">
                    <span>Doc1.pdf</span>
                    <Check size={24} />
                  </span>
                )
                }
              </div>
            </div>
          </div>
          <div className="w-full p-4 lg:w-1/2 lg:p-0">
            <div className="flex flex-col">
              <div className="p-4 pl-8">
                <span className="text-xl">Cancellation Policy</span>
              </div>
              <div className="ml-8">
                {formState.policyProvideVia ? (
                  <a href={formState.policyProvideVia}>{formState.policyProvideVia}</a>
                ) : (
                  <span className="ml-8 mt-2 flex items-center font-semibold">
                    <span>Doc1.pdf</span>
                    <Check size={24} />
                  </span>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preview;
