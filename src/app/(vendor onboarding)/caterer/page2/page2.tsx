"use client";

import FileInput from "@/components/fileInput";
import Appetizers from "../../(components)/Appetizers";
import { FormState } from "../page";
import { useState } from "react";
import { ArrowLeft, ChevronLeft } from "lucide-react";

const _dietaryOptions = [
  "Others",
  "Vegetarian",
  "Vegan",
  "Gluten-Free",
  "Nut-Free",
];
const _mainCourses = ["Biryani", "Others", "Tandoori", "Pasta", "Pizza"];
const _beverages = ["Tea", "Others", "Coffee", "Juice", "Soda", "Coffee", "Juice", "Soda", "Soda", "Coffee", "Juice",];
const _appetizers = [
  "Samosa",
  "Others",
  "Spring Roll",
  "Chicken Wings",
  "Bruschetta",
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
  currentPage:number
};

const Page2 = ({
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
  const [addManually, setAddManually] = useState(false)

  return (
    <div className="flex h-full w-full flex-col items-start justify-start gap-5 overflow-y-scroll scrollbar-hide ">
      <div className="flex min-w-full flex-col items-start justify-around gap-10">
        <div className="flex min-w-full flex-col items-start justify-around gap-6 rounded-xl bg-white p-3 md:p-6">
          <div className="flex gap-4 items-center">
            <ArrowLeft className="mr-1 ml-2 h-6 w-6 text-[#2E3192] cursor-pointer" aria-hidden="true" onClick={()=>setCurrentPage(currentPage-1)}/>
            <h1 className=" text-2xl font-semibold">Menu Details</h1>
          </div>

          <div className="flex items-start gap-6">
            {_veg.map((option) => (
              <li
                key={option}
                className={`relative flex cursor-pointer select-none items-center gap-1 py-2 pl-3 pr-9 ${veg.includes(option) ? "text-black" : "text-gray-900"
                  }`}
                onClick={() => setVeg([option])}
              >
                {veg.includes(option) ? (
                  <img src={"/selection/Choice_2.svg"} className="h-5 w-5" />
                ) : (
                  <img src={"/selection/Choice.svg"} className="h-5 w-5" />
                )}
                {option}
              </li>
            ))}
          </div>
          <div className="flex min-w-[40%] flex-col gap-2 items-start justify-center">
            <label htmlFor="category" className="text-base font-medium">Upload Menu<span className="text-red-500">*</span></label>
            <span className="text-small font-light">PNG,JPG,PDF</span>
            <FileInput
              label="menu"
              onFileSelect={(file) => {
                updateFormState({ menu: file });
              }}
              acceptedFileTypes="image/png, .pdf, image/jpg"
            />
          </div>
          <div className="font-semibold text-base">
            Dont have a handy menu? no worries, you can add your items here
          </div>
          <div onClick={() => setAddManually(!addManually)} className="cursor-pointer rounded-xl border-2 border-[#2E3192] text-center text-[#2E3192] xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3">
            Add Manually
          </div>
          {!addManually &&
            <div className="items-strech mt-9 flex flex-row gap-7 self-end">

              <button
                className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
                onClick={handleContinue}
              >
                Continue
              </button>
            </div>}
        </div>
        {addManually &&
          <>

            <div className="flex min-w-full flex-col items-start justify-around gap-10 rounded-xl bg-white p-3 md:p-6">
              <div className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row">
                <div className="flex w-full flex-col gap-4">
                  <label htmlFor="appetizers" className="font-semibold text-xl">Appetizers<span className="text-red-500">*</span></label>
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
                <div className="flex w-full flex-col gap-4">
                  <label htmlFor="beverages" className="font-semibold text-xl">Beverages<span className="text-red-500">*</span></label>
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
                <div className="flex w-full flex-col gap-4">
                  <label htmlFor="mainCourses" className="font-semibold text-xl">Main Courses<span className="text-red-500">*</span></label>
                  <Appetizers
                    field={"_mainCourses"}
                    appetizers={_mainCourses}
                    selectedAppetizers={selectedMainCourses}
                    setSelectedAppetizers={setSelectedMainCourses}
                  />
                </div>
              </div>
            </div>
            <div className="flex min-w-full flex-col items-start justify-around gap-10 rounded-xl bg-white p-3 md:p-6">
              <div className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row">
                <div className="flex w-full flex-col gap-4">
                  <span className="font-semibold text-xl">Other Details<span className="text-red-500">*</span></span>
                  <label htmlFor="dietaryOptions" className="text-base font-medium">Dietary Options</label>
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
                    rows={7}
                    placeholder="Enter your Pre-set Menu Description"
                    onChange={(e) =>
                      updateFormState({ preSetMenu: e.target.value })
                    }
                    className="mt-4 rounded-xl border-2 border-gray-300 p-3"
                  ></textarea>
                </div>
                <div className="flex min-w-[50%] flex-col gap-4">
                  <p className="text-base font-medium">Customizable<span className="text-red-500">*</span></p>
                  <div className="flex gap-4">
                    <div className="flex  items-center gap-2">
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
                    <div className="flex  items-center gap-2">
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
              <div className="items-strech  flex flex-row gap-7 self-end">

                <button
                  className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
                  onClick={handleContinue}
                >
                  Continue
                </button>
              </div>
            </div>
          </>
        }
      </div>
    </div>
  );
};

export default Page2;
