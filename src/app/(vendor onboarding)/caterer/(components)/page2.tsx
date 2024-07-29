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
    <form className="flex flex-col gap-5 justify-start items-start overflow-y-scroll h-full rounded-xl bg-white p-3 xs:w-[100%] xs:min-w-[90%] md:p-6">
      <h1 className="text-3xl font-semibold my-5">Menu Details</h1>
      <div className="flex min-h-full min-w-full items-start justify-around flex-col gap-5">
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
      <button
        className="lg:w-[10vw] w-fit xs:text-[4vw] md:text-[2vw] lg:text-[1vw] flex items-center justify-center rounded-xl self-end bg-[#2E3192] p-5 text-white"
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
    </form>
  );
};

export default Page2;
