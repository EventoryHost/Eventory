"use client";

import { FormState } from "../page";
import Appetizers from "../../(components)/Appetizers";
import { useState } from "react";
import { Combobox } from "@/components/ui/combobox";
import { ComboboxDemo } from "@/components/dropdown";
import Dropdown from "../../(components)/Dropdown";

const _regional = [
  "Gujrati",
  "Rajasthani",
  "Bengali",
  "Others",

];
const _service = ["Buffet", "Plated Meals", "Family Style", "Others", "Food Stations"];
const _cuisine = ["North Indian", "South Indian", "Chinese", "Italian", "Others",];



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
      formState.businessName.trim() !== '' &&
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
    handleContinue()
  };


  const getInputClassName = (value: string | string[]) => {
    const baseClasses = "w-full rounded-xl border-2 bg-white p-5 py-3 outline-none";
    return `${baseClasses} ${!isFormValid && (typeof value === 'string' ? value.trim() === '' : value.length === 0) ? 'border-red-500' : ''}`;
  };

  const capacities = ['Less than 50', '50-100 persons', '100-300 persons', 'More than 300 '];
  const handleSelect = (option: string) => {
    // Handle the selected option, e.g., update form state
    setServingCapacity([option])
  };
  return (
    <div className="flex flex-col  items-start gap-7 overflow-y-scroll rounded-xl bg-white p-3 xs:w-[95%] xs:min-w-[90%] xs:justify-start md:p-6 scroll-touch">
      <h1 className="text-3xl font-semibold">Basic Details</h1>
      <div className="flex w-[100%] items-start gap-9"></div>
      <div className="flex min-w-full flex-col items-center gap-9">
        <div className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row">
          <div className="flex min-w-[40%] flex-col gap-4">
            <label htmlFor="businessName">Catering Service Name<span className="text-red-500">*</span></label>
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

          <div className="flex min-w-[40%] flex-col gap-4">
            <label htmlFor="businessName">Manager Name (POC)<span className="text-red-500">*</span></label>
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
          <div className="flex min-w-[40%] flex-col gap-4">
            <label htmlFor="businessName">Serving Capacity<span className="text-red-500">*</span></label>
            <Dropdown options={capacities} onSelect={handleSelect} placeholder='Enter max. no. of people you serve' />
          </div>
        </div>

        <div className="flex w-[100%] flex-col gap-5 rounded-xl bg-white">
          <label htmlFor="years">Cuisine Specialties<span className="text-red-500">*</span></label>
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
        <div className="flex min-w-[100%] flex-col gap-5 rounded-xl bg-white">
          <label htmlFor="years">Service Styles Offered<span className="text-red-500">*</span></label>
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

        <div className="flex min-w-[100%] flex-col gap-5 rounded-xl bg-white">
          <label htmlFor="category">Regional Specialties<span className="text-red-500">*</span></label>
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
      </div>
      <button
        className="flex w-fit items-center justify-center self-end rounded-xl bg-[#2E3192] p-5 text-white xs:text-[4vw] md:text-[2vw] lg:w-[10vw] lg:text-[1vw]"
        onClick={onContinue}
      >
        Continue
      </button>
    </div>
  );
};

export default Page1;
