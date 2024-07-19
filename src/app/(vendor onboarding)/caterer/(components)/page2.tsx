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
  handleSubmit: () => void;
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
  handleSubmit,
}: Page2Props) => {
  return (
    <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:w-[100%] xs:min-w-[90%] md:p-6">
      <h1 className="text-3xl font-semibold">Menu Details</h1>
      <div className="flex min-h-full min-w-full flex-col items-center gap-5">
        <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
          <div className="flex min-w-[40%] flex-col gap-4">
            <label htmlFor="appetizers">Appetizers</label>
            <Appetizers
              appetizers={appetizers}
              selectedAppetizers={selectedAppetizers}
              setSelectedAppetizers={setSelectedAppetizers}
            />
          </div>
        </div>
        
        <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
          <div className="flex min-w-[40%] flex-col gap-4">
            <label htmlFor="beverages">Beverages</label>
            <Appetizers
              appetizers={beverages}
              selectedAppetizers={selectedBeverages}
              setSelectedAppetizers={setSelectedBeverages}
            />
          </div>
        </div>
        <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
          <div className="flex min-w-[40%] flex-col gap-4">
            <label htmlFor="mainCourses">Main Courses</label>
            <Appetizers
              appetizers={mainCourses}
              selectedAppetizers={selectedMainCourses}
              setSelectedAppetizers={setSelectedMainCourses}
            />
          </div>
        </div>
        <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
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
      <button
        className="w-full rounded-xl bg-[#2E3192] p-5 text-white"
        onClick={() => {
          console.log({
            selectedAppetizers,
            selectedBeverages,
            selectedMainCourses,
            selectedDietaryOptions,
          });
          handleSubmit();
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Page2;
