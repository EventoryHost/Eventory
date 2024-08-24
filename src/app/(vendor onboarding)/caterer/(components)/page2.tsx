"use client";

import React from "react";
import Appetizers from "./Appetizers";

const dietaryOptions = ["Vegetarian", "Vegan", "Gluten-Free", "Nut-Free"];
const mainCourses = ["Biryani", "Tandoori", "Pasta", "Pizza"];
const beverages = ["Tea", "Coffee", "Juice", "Soda"];
const appetizers = ["Samosa", "Spring Roll", "Chicken Wings", "Bruschetta"];

type Page2Props = {
  selectedAppetizers: string[];
  setSelectedAppetizers: React.Dispatch<React.SetStateAction<string[]>>;
  selectedBeverages: string[];
  setSelectedBeverages: React.Dispatch<React.SetStateAction<string[]>>;
  selectedMainCourses: string[];
  setSelectedMainCourses: React.Dispatch<React.SetStateAction<string[]>>;
  selectedDietaryOptions: string[];
  setSelectedDietaryOptions: React.Dispatch<React.SetStateAction<string[]>>;
  handleContinue: () => void;
};

const Page2 = ({
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
  return (
    <form className="flex h-full flex-col items-start justify-start gap-5 overflow-y-scroll rounded-xl bg-white p-3 xs:w-[100%] xs:min-w-[90%] md:p-6">
      <h1 className="my-5 text-3xl font-semibold">Menu Details</h1>
      <div className="flex min-h-full min-w-full flex-col items-start justify-around gap-5">
        <div className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row">
          <div className="flex min-w-fit flex-col gap-4">
            <label htmlFor="appetizers">Appetizers</label>
            <Appetizers
              appetizers={appetizers}
              selectedAppetizers={selectedAppetizers}
              setSelectedAppetizers={setSelectedAppetizers}
            />
          </div>
        </div>

        <div className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row">
          <div className="flex min-w-[40%] flex-col gap-4">
            <label htmlFor="beverages">Beverages</label>
            <Appetizers
              appetizers={beverages}
              selectedAppetizers={selectedBeverages}
              setSelectedAppetizers={setSelectedBeverages}
            />
          </div>
        </div>
        <div className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row">
          <div className="flex min-w-[40%] flex-col gap-4">
            <label htmlFor="mainCourses">Main Courses</label>
            <Appetizers
              appetizers={mainCourses}
              selectedAppetizers={selectedMainCourses}
              setSelectedAppetizers={setSelectedMainCourses}
            />
          </div>
        </div>
        <div className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row">
          <div className="flex min-w-[40%] flex-col gap-4">
            <label htmlFor="dietaryOptions">Dietary Options</label>
            <Appetizers
              appetizers={dietaryOptions}
              selectedAppetizers={selectedDietaryOptions}
              setSelectedAppetizers={setSelectedDietaryOptions}
            />
          </div>
        </div>
      </div>
      <div className="items-strech mt-9 flex flex-row gap-7 self-end">
        <button
          className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
          onClick={handleContinue}
        >
          Skip
        </button>
        <button
          className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </form>
  );
};

export default Page2;
