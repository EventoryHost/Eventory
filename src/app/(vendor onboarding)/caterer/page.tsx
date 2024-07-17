"use client";

import React, { useState } from "react";
import Page1 from "./(components)/page1";
import Page2 from "./(components)/page2";

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [businessName, setBusinessName] = useState("");
  const [cuisineSpecialties, setCuisineSpecialties] = useState<string[]>([]);
  const [regionalSpecialties, setRegionalSpecialties] = useState<string[]>([]);
  const [serviceStyles, setServiceStyles] = useState<string[]>([]);
  const [selectedAppetizers, setSelectedAppetizers] = useState<string[]>([]);
  const [selectedBeverages, setSelectedBeverages] = useState<string[]>([]);
  const [selectedMainCourses, setSelectedMainCourses] = useState<string[]>([]);
  const [selectedDietaryOptions, setSelectedDietaryOptions] = useState<
    string[]
  >([]);

  const handleContinue = () => {
    console.log({
      businessName,
      cuisineSpecialties,
      regionalSpecialties,
      serviceStyles,
      selectedAppetizers,
      selectedBeverages,
      selectedMainCourses,
      selectedDietaryOptions,
    });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <Page1
            businessName={businessName}
            setBusinessName={setBusinessName}
            cuisineSpecialties={cuisineSpecialties}
            setCuisineSpecialties={setCuisineSpecialties}
            regionalSpecialties={regionalSpecialties}
            setRegionalSpecialties={setRegionalSpecialties}
            serviceStyles={serviceStyles}
            setServiceStyles={setServiceStyles}
            handleContinue={() => setCurrentPage(2)}
          />
        );
      case 2:
        return (
          <Page2
            selectedAppetizers={selectedAppetizers}
            setSelectedAppetizers={setSelectedAppetizers}
            selectedBeverages={selectedBeverages}
            setSelectedBeverages={setSelectedBeverages}
            selectedMainCourses={selectedMainCourses}
            setSelectedMainCourses={setSelectedMainCourses}
            selectedDietaryOptions={selectedDietaryOptions}
            setSelectedDietaryOptions={setSelectedDietaryOptions}
            handleSubmit={handleContinue}
          />
        );
      default:
        return <div>Invalid page</div>;
    }
  };

  return (
    <div className="flex h-full min-h-[calc(100vh-5.2rem)] w-full flex-col overflow-hidden lg:flex-row">
      <div className="flex flex-col items-start justify-between bg-[#FFFFFF] xs:gap-7 xs:pt-4 md:min-w-[30%] lg:max-w-[30%]">
        <div className="flex items-center justify-start gap-1 xs:self-start xs:pl-5 md:px-11 lg:mt-[2rem]">
          <button
            className={`flex h-10 w-10 items-center justify-center rounded-full p-5 ${currentPage === 1 ? "bg-[#2E3192] text-white" : "bg-gray-300"}`}
          >
            1
          </button>
          <div
            className={`h-[0.3rem] w-[4rem] rounded-xl ${currentPage > 1 ? "bg-[#2E3192]" : "bg-gray-300"}`}
          ></div>
          <button
            className={`flex h-10 w-10 items-center justify-center rounded-full p-5 ${currentPage === 2 ? "bg-[#2E3192] text-white" : "bg-gray-300"}`}
          >
            2
          </button>
          <div className="h-[0.3rem] w-[4rem] rounded-xl bg-gray-300"></div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 p-5">
            3
          </button>
        </div>
        <div className="flex items-center justify-start gap-1 xs:self-start xs:pl-5 md:px-11 lg:mt-[1rem]">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 p-5">
            4
          </button>
          <div className="h-[0.3rem] w-[4rem] rounded-xl bg-gray-300"></div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 p-5">
            5
          </button>
          <div className="h-[0.3rem] w-[4rem] rounded-xl bg-gray-300"></div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 p-5">
            6
          </button>
        </div>
        <div className="flex h-[50%] flex-col items-start justify-center gap-9 px-9 xs:pl-5 md:px-11 lg:p-8">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Tell us about your business
          </h1>
          <p className="text-black xs:text-sm md:w-[90%]">
            Fill out your Business details to get verified and proceed to
            registration process.
          </p>
        </div>
        <div className="relative h-[10rem] lg:w-full">
          <img
            src={"/tajmahal.png"}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="flex min-w-[70%] flex-col items-center justify-center bg-[#F7F6F9] p-2 md:p-[1rem]">
        {renderPage()}
      </div>
    </div>
  );
};

export default Page;
