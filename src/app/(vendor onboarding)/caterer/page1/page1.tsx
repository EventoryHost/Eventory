"use client";

import { FormState } from "../page";
import Appetizers from "../../(components)/Appetizers";
import { useState, useEffect } from "react";
import Dropdown from "../../(components)/Dropdown";
import jwt from "jsonwebtoken";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchCateringData,
  saveCateringDetails,
} from "../../../../redux/cateringSlice";
import { AppDispatch, RootState } from "../../../../redux/store";
import { get } from "http";

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
  formState: FormState & {
    servingCapacity: string;
    cuisineSpecialties: string[];
    serviceStyles: string[];
  };
  updateFormState: (
    newState: Partial<FormState> & {
      servingCapacity?: string;
      regionalSpecialties?: string[];
      cuisineSpecialties?: string[];
      serviceStyles?: string[];
    },
  ) => void;
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
  const dispatch = useDispatch<AppDispatch>();
  const { formData, loading, error } = useSelector(
    (state: RootState) => state.catering,
  );

  useEffect(() => {
    const userId = getVendorId2();
    if (userId) {
      // Dispatch fetchCateringData action
      dispatch(fetchCateringData(userId));
    }
  }, [dispatch]);

  useEffect(() => {
    if (formData && !formState.cateringName && !formState.businessName) {
      // Only update the state if formState is empty
      if (
        formData.cateringName !== formState.cateringName ||
        formData.businessName !== formState.businessName ||
        formData.servingCapacity !== servingCapacity[0] // Add more checks if needed
      ) {
        updateFormState({
          cateringName: formData.cateringName || "",
          businessName: formData.businessName || "",
          servingCapacity: formData.servingCapacity || "",
        });
        setRegionalSpecialties(formData.regionalSpecialties || []);
        setCuisineSpecialties(formData.cuisineSpecialties || []);
        setServiceStyles(formData.serviceStyles || []);
        setServingCapacity([formData.servingCapacity || ""]);
      }
    }
  }, [formData, formState, updateFormState]);

  const handleSave = () => {
    // Define the userId based on your schema
    const userId = getVendorId2() || "";

    // Define the cateringDetails based on your schema
    const cateringDetails = {
      userId: userId,
      cateringName: formState.cateringName || "", // Initialize with an empty string if not available
      businessName: formState.businessName || "", // Initialize with an empty string if not available
      servingCapacity: servingCapacity[0] || "", // Initialize with an empty string if not available
      regionalSpecialties:
        regionalSpecialties.length > 0 ? regionalSpecialties : [], // Use an empty array if no specialties
      cuisineSpecialties:
        cuisineSpecialties.length > 0 ? cuisineSpecialties : [], // Use an empty array if no specialties
      serviceStyles: serviceStyles.length > 0 ? serviceStyles : [], // Use an empty array if no styles

      // Optional fields initialized
      selectedAppetizers: [], // You can set this based on user input later
      selectedBeverages: [],
      selectedMainCourses: [],
      selectedDietaryOptions: [],
      preSetMenu: formState.preSetMenu || "", // Initialize if needed
      customizableMenu: formState.customizableMenu || false, // Initialize with a sensible default
    };

    // Dispatch action to save catering details to Redux
    dispatch(saveCateringDetails({ userId, data: cateringDetails }) as any);
  };

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
    handleContinue();
    handleSave();
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

  function getVendorId2(): string | null {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Token not found");
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
              selectedOption={servingCapacity[0]}
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
          onClick={onContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Page1;
