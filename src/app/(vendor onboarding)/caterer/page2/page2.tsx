"use client";

import FileInput from "@/components/fileInput";
import Appetizers from "../../(components)/Appetizers";
import { FormState } from "../page";
import { useEffect, useState } from "react";
import { ArrowLeft, ChevronLeft } from "lucide-react";

const _dietaryOptions = [
  "Others",
  "Vegetarian",
  "Vegan",
  "Gluten-Free",
  "Nut-Free",
];
const _mainCourses = [
  "Biryani",
  "Others",
  "Tandoori",
  "Pasta",
  "Pizza",
  "Palak Paneer",
  "Pakora",
];
const _beverages = [
  "Tea",
  "Others",
  "Coffee",
  "Juice",
  "Milk",
  "Coconut",
  "Rooh Afza Sharbat",
  "Filter Coffee",
];
const _appetizers = [
  "Samosa",
  "Others",
  "Spring Roll",
  "Chicken Wings",
  "Bruschetta",
  "Aloo Tikki",
  "Paneer Tikka",
  "Pakoras",
  "Fish Amritsari",
  "Chole Bhature",
  "Prawn Koliwada",
  "Mini Dosas",
];
const _veg = ["Both", "Veg", "Non Veg"];
type Page2Props = {
  formState: FormState;
  updateFormState: (newState: Partial<FormState>) => void;
  veg: string[];
  setVeg: React.Dispatch<React.SetStateAction<string[]>>;
  selectedAppetizers: string[];
  setSelectedAppetizers: React.Dispatch<React.SetStateAction<string[]>>;
  selectedBeverages: string[];
  setSelectedBeverages: React.Dispatch<React.SetStateAction<string[]>>;
  selectedMainCourses: string[];
  setSelectedMainCourses: React.Dispatch<React.SetStateAction<string[]>>;
  selectedDietaryOptions: string[];
  setSelectedDietaryOptions: React.Dispatch<React.SetStateAction<string[]>>;
  handleContinue: () => void;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  setMenu: React.Dispatch<React.SetStateAction<File[]>>;
  menu: File[];
};

const Page2 = ({
  setMenu,
  menu,
  currentPage,
  setCurrentPage,
  formState,
  updateFormState,
  veg,
  setVeg,
  selectedAppetizers,
  setSelectedAppetizers,
  selectedBeverages,
  setSelectedBeverages,
  selectedMainCourses,
  setSelectedMainCourses,
  selectedDietaryOptions,
  setSelectedDietaryOptions,
  handleContinue,
}: Page2Props) => {
  const { customizableMenu } = formState;
  const [addManually, setAddManually] = useState(false);

  return (
    <div className="flex h-full w-full flex-col items-start justify-start gap-5 overflow-y-scroll scrollbar-hide">
      <div className="flex min-w-full flex-col items-start justify-around gap-10">
        <div className="flex min-w-full flex-col items-start justify-around gap-6 rounded-xl bg-white p-3 md:p-6">
          <div className="flex items-center gap-4">
            <ArrowLeft
              className="ml-2 mr-1 h-6 w-6 cursor-pointer text-[#2E3192]"
              aria-hidden="true"
              onClick={() => setCurrentPage(currentPage - 1)}
            />
            <h1 className="text-2xl font-semibold">Menu Details</h1>
          </div>

          <div className="flex items-start gap-6">
            {_veg.map((option) => (
              <li
                key={option}
                className={`relative flex cursor-pointer select-none items-center gap-1 py-2 pl-3 pr-9 ${
                  veg.includes(option) ? "text-black" : "text-gray-900"
                }`}
                onClick={() => setVeg([option])}
              >
                {veg.includes(option) ? (
                  <svg
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="7.5" cy="8" r="7" stroke="#2E3192" />
                    <circle cx="7.5" cy="8" r="3.5" fill="#2E3192" />
                  </svg>
                ) : (
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="7.5" cy="7.5" r="7" stroke="#2E3192" />
                  </svg>
                )}
                {option}
              </li>
            ))}
          </div>
          {!addManually && (
            <div className="flex min-w-[40%] flex-col items-start justify-center gap-2">
              <label htmlFor="category" className="text-base font-medium">
                Upload Menu<span className="text-red-500">*</span>
              </label>
              <span className="text-small font-light">PNG,JPG,PDF</span>
              <FileInput
                label="menu"
                onFileSelect={(file) => {
                  setMenu((prevMenu) => {
                    // If file is an array (multiple files selected), spread it
                    // If it's a single file, create a new array with that file
                    const newFiles = Array.isArray(file) ? file : [file];
                    return [...prevMenu, ...newFiles];
                  });
                  setSelectedAppetizers([]);
                  setSelectedBeverages([]);
                  setSelectedDietaryOptions([]);
                  setSelectedMainCourses([]);
                }}
                acceptedFileTypes="image/png, .pdf, image/jpg"
              />
            </div>
          )}
          <div className="text-base font-semibold">
            Dont have a handy menu? no worries, you can add your items here
          </div>
          <div
            onClick={() => {
              setAddManually(!addManually);
              setMenu([]);
            }}
            className={`cursor-pointer rounded-xl border-2  text-center  xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3 ${addManually?"border-2 border-[#2E3192] bg-white text-[#2E3192]" : "bg-[#2E3192] text-white"}`}
          >
            Add Manually
          </div>
        </div>
        {addManually && (
          <>
            <div className="flex min-w-full flex-col items-start justify-around gap-10 rounded-xl bg-white p-3 md:p-6">
              <div className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row">
                <div className="flex w-full flex-col gap-6">
                  <label htmlFor="appetizers" className="text-xl font-semibold">
                    Appetizers<span className="text-red-500">*</span>
                  </label>
                  <Appetizers
                    field={"_appetizers"}
                    appetizers={_appetizers}
                    selectedAppetizers={selectedAppetizers}
                    setSelectedAppetizers={setSelectedAppetizers}
                  />
                </div>
              </div>
            </div>

            <div className="flex min-w-full flex-col items-start justify-around gap-10 rounded-xl bg-white p-3 md:p-6">
              <div className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row">
                <div className="flex w-full flex-col gap-6">
                  <label htmlFor="beverages" className="text-xl font-semibold">
                    Beverages<span className="text-red-500">*</span>
                  </label>
                  <Appetizers
                    field={"_beverages"}
                    appetizers={_beverages}
                    selectedAppetizers={selectedBeverages}
                    setSelectedAppetizers={setSelectedBeverages}
                  />
                </div>
              </div>
            </div>
            <div className="flex min-w-full flex-col items-start justify-around gap-10 rounded-xl bg-white p-3 md:p-6">
              <div className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row">
                <div className="flex w-full flex-col gap-6">
                  <label
                    htmlFor="mainCourses"
                    className="text-xl font-semibold"
                  >
                    Main Courses<span className="text-red-500">*</span>
                  </label>
                  <Appetizers
                    field={"_mainCourses"}
                    appetizers={_mainCourses}
                    selectedAppetizers={selectedMainCourses}
                    setSelectedAppetizers={setSelectedMainCourses}
                  />
                </div>
              </div>
            </div>
          </>
        )}
        <div className="flex min-w-full flex-col items-start justify-around gap-10 rounded-xl bg-white p-3 md:p-6">
          <div className="flex min-w-full flex-col items-start justify-between gap-6 md:flex-row">
            <div className="flex w-full flex-col gap-6">
              <span className="text-xl font-semibold">
                Other Details<span className="text-red-500">*</span>
              </span>
              <label htmlFor="dietaryOptions" className="text-base font-medium">
                Dietary Options
              </label>
              <Appetizers
                field={"_dietaryOptions"}
                appetizers={_dietaryOptions}
                selectedAppetizers={selectedDietaryOptions}
                setSelectedAppetizers={setSelectedDietaryOptions}
              />
            </div>
          </div>

          <div className="flex min-w-full flex-col items-start justify-between gap-6 md:flex-row">
            <div className="flex min-w-[50%] flex-col">
              <p className="text-base font-medium">Pre-Set Menu</p>
              <textarea
                rows={5}
                placeholder="Enter your Pre-set Menu Description"
                onChange={(e) =>
                  updateFormState({ preSetMenu: e.target.value })
                }
                className="mt-4 rounded-xl border-2 border-gray-300 p-3"
              ></textarea>
            </div>
            <div className="flex min-w-[50%] flex-col gap-4">
              <p className="text-base font-medium">
                Customizable<span className="text-red-500">*</span>
              </p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <input
                    id="customizableMenuYes"
                    type="radio"
                    name="customizableMenu"
                    value="true"
                    checked={customizableMenu}
                    onChange={() => updateFormState({ customizableMenu: true })}
                    className="h-4 w-4 accent-[#2E3192]"
                  />
                  <label htmlFor="customizableMenuYes">Yes</label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    id="customizableMenuNo"
                    type="radio"
                    name="customizableMenu"
                    value="false"
                    checked={!customizableMenu}
                    onChange={() =>
                      updateFormState({ customizableMenu: false })
                    }
                    className="h-4 w-4 accent-[#2E3192]"
                  />
                  <label htmlFor="customizableMenuNo">No</label>
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
      </div>
    </div>
  );
};

export default Page2;
