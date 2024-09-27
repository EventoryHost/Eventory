"use client";

import { FormState } from "../page";
import Appetizers from "../../(components)/Appetizers";
import { useState } from "react";
import { Combobox } from "@/components/ui/combobox";
import { ComboboxDemo } from "@/components/dropdown";
import Dropdown from "../../(components)/Dropdown";

const _regional = ["Gujrati", "Rajasthani", "Bengali", "Others"];
const _service = [
  "Buffet",
  "Plated Meals",
  "Family Style",
  "Others",
  "Food Stations",
];
const _cuisine = [
  "North Indian",
  "South Indian",
  "Chinese",
  "Italian",

  "Others",
];

type Page1Props = {
  formState: FormState;
  updateFormState: (newState: Partial<FormState>) => void;
  servingCapacity: string[];
  setServingCapacity: React.Dispatch<React.SetStateAction<string[]>>;
  cuisineSpecialties: string[];
  setCuisineSpecialties: React.Dispatch<React.SetStateAction<string[]>>;
  regionalSpecialties: string[];
  setRegionalSpecialties: React.Dispatch<React.SetStateAction<string[]>>;
  serviceStyles: string[];
  setServiceStyles: React.Dispatch<React.SetStateAction<string[]>>;
  handleContinue: () => void;
};

const Page1 = ({
  formState,
  updateFormState,
  servingCapacity,
  setServingCapacity,
  cuisineSpecialties,
  setCuisineSpecialties,
  regionalSpecialties,
  setRegionalSpecialties,
  serviceStyles,
  setServiceStyles,
  handleContinue,
}: Page1Props) => {
  const [isFormValid, setIsFormValid] = useState(true);

  const validateForm = () => {
    const isValid =
      formState.businessName.trim() !== "" &&
      cuisineSpecialties.length > 0 &&
      serviceStyles.length > 0 &&
      regionalSpecialties.length > 0;

    setIsFormValid(isValid);
    return isValid;
  };

  const onContinue = () => {
    // if (validateForm()) {
    //   handleContinue();
    // }
    handleContinue();
  };

  const getInputClassName = (value: string | string[]) => {
    const baseClasses =
      "w-full rounded-xl border-2 bg-white p-3 py-5 outline-none text-sm";
    return `${baseClasses} ${!isFormValid && (typeof value === "string" ? value.trim() === "" : value.length === 0) ? "border-red-500" : ""}`;
  };

  const capacities = [
    "Less than 50",
    "50-100 persons",
    "100-300 persons",
    "More than 300 ",
  ];
  const handleSelect = (option: string) => {
    // Handle the selected option, e.g., update form state
    setServingCapacity([option]);
  };
  return (
    <div className="scroll-touch flex w-full flex-col items-start gap-5 overflow-y-scroll rounded-xl bg-white p-3 scrollbar-hide xs:justify-start md:p-6">
      <h1 className="text-2xl font-semibold">Basic Details</h1>
      <div className="flex min-w-full flex-col items-center gap-9 p-2">
        <div className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row">
          <div className="flex min-w-[50%] flex-col gap-2">
            <label htmlFor="businessName" className="text-base font-medium">
              Catering Service Name<span className="text-red-500">*</span>
            </label>
            <input
              id="cateringName"
              type="text"
              className={getInputClassName(formState.cateringName)}
              placeholder="Enter your catering name"
              value={formState.cateringName}
              onChange={(e) =>
                updateFormState({ cateringName: e.target.value })
              }
              required
            />
          </div>

          <div className="flex min-w-[50%] flex-col gap-2">
            <label htmlFor="businessName" className="text-base font-medium">
              Manager Name (POC)<span className="text-red-500">*</span>
            </label>
            <input
              id="businessName"
              type="text"
              className={getInputClassName(formState.businessName)}
              placeholder="Enter your business name"
              value={formState.businessName}
              onChange={(e) =>
                updateFormState({ businessName: e.target.value })
              }
              required
            />
          </div>
        </div>

        <div className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row">
          <div className="flex min-w-[50%] flex-col gap-2">
            <label htmlFor="businessName" className="text-base font-medium">
              Serving Capacity<span className="text-red-500">*</span>
            </label>
            <Dropdown
              options={capacities}
              onSelect={handleSelect}
              placeholder="Enter max. no. of people you serve"
            />
          </div>
        </div>
        <div className="flex min-w-[100%] flex-col gap-6 rounded-xl bg-white">
          <label htmlFor="category" className="text-base font-medium">
            Regional Specialties<span className="text-red-500">*</span>
          </label>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <Appetizers
                appetizers={_regional}
                selectedAppetizers={regionalSpecialties}
                setSelectedAppetizers={setRegionalSpecialties}
                field={"_regional"}
              />
            </div>
          </div>
        </div>
        <div className="flex w-[100%] flex-col gap-6 rounded-xl bg-white">
          <label htmlFor="years" className="text-base font-medium">
            Cuisine Specialties<span className="text-red-500">*</span>
          </label>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <Appetizers
                appetizers={_cuisine}
                selectedAppetizers={cuisineSpecialties}
                setSelectedAppetizers={setCuisineSpecialties}
                field={"_cuisine"}
              />
            </div>
          </div>
        </div>
        <div className="flex min-w-[100%] flex-col gap-6 rounded-xl bg-white">
          <label htmlFor="years" className="text-base font-medium">
            Service Styles Offered<span className="text-red-500">*</span>
          </label>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <Appetizers
                appetizers={_service}
                selectedAppetizers={serviceStyles}
                setSelectedAppetizers={setServiceStyles}
                field={"_service"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="items-strech flex flex-row gap-7 self-end">
        <button
          className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Page1;
