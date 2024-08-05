"use client";

import React, { useState } from "react";
import Page1 from "./(components)/page1";
import Page3 from "./(components)/page3";
import Page2 from "./(components)/page2";
import Page4 from "./(components)/page4";
import Page5 from "./(components)/page5";
import Page6 from "./(components)/page6";
import Image from "next/image";

const Page = () => {
  // States for Page1
  const [businessName, setBusinessName] = useState("");
  const [cuisineSpecialties, setCuisineSpecialties] = useState<string[]>([]);
  const [regionalSpecialties, setRegionalSpecialties] = useState<string[]>([]);
  const [serviceStyles, setServiceStyles] = useState<string[]>([]);

  //states for page2
  const [selectedAppetizers, setSelectedAppetizers] = useState<string[]>([]);
  const [selectedBeverages, setSelectedBeverages] = useState<string[]>([]);
  const [selectedMainCourses, setSelectedMainCourses] = useState<string[]>([]);
  const [selectedDietaryOptions, setSelectedDietaryOptions] = useState<
    string[]
  >([]);

  //states for page3
  const [eventTypes, setEventTypes] = useState<string[]>([]);
  const [additionalServices, setAdditionalServices] = useState<string[]>([]);

  //states forpage4
  const [staffProvides, setStaffProvides] = useState<string[]>([]);
  const [equipmentsProvided, setEquipmentsProvided] = useState<string[]>([]);

  // states for page6
  const [tastingSessions, setTastingSessions] = useState<boolean>(false);
  const [businessLicenses, setBusinessLicenses] = useState<boolean>(false);
  const [foodSafety, setFoodSafety] = useState<boolean>(false);

  const [currentPage, setCurrentPage] = useState(5);

  // states for page5
  interface Package {
    type: string;
    priceRange: [number, number];
  }

  // State for packages
  const [hourlyPackages, setHourlyPackages] = useState<Package[]>([]);
  const [dailyPackages, setDailyPackages] = useState<Package[]>([]);
  const [seasonalPackages, setSeasonalPackages] = useState<Package[]>([]);

  // Function to handle package change
  const handlePackageChange = (
    setPackages: React.Dispatch<React.SetStateAction<Package[]>>,
    index: number,
    field: "type" | "priceRange",
    value: string | [number, number],
  ) => {
    setPackages((prevPackages) => {
      const newPackages = [...prevPackages];
      if (field === "type") {
        newPackages[index] = { ...newPackages[index], type: value as string };
      } else {
        newPackages[index] = {
          ...newPackages[index],
          priceRange: value as [number, number],
        };
      }
      return newPackages;
    });
  };

  // Function to add a new package
  const addPackage = (
    setPackages: React.Dispatch<React.SetStateAction<Package[]>>,
  ) => {
    setPackages((prevPackages) => [
      ...prevPackages,
      { type: "", priceRange: [0, 0] },
    ]);
  };

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
            handleSubmit={() => setCurrentPage(3)}
          />
        );
      case 3:
        return (
          <Page3
            selectedAppetizers={eventTypes}
            setSelectedAppetizers={setEventTypes}
            selectedBeverages={additionalServices}
            setSelectedBeverages={setAdditionalServices}
            handleContinue={() => setCurrentPage(4)}
          />
        );
      case 4:
        return (
          <Page4
            selectedAppetizers={staffProvides}
            setSelectedAppetizers={setStaffProvides}
            selectedBeverages={equipmentsProvided}
            setSelectedBeverages={setEquipmentsProvided}
            handleContinue={() => setCurrentPage(5)}
          />
        );
      case 5:
        return (
          <Page5
            hourlyPackages={hourlyPackages}
            setHourlyPackages={setHourlyPackages}
            dailyPackages={dailyPackages}
            setDailyPackages={setDailyPackages}
            seasonalPackages={seasonalPackages}
            setSeasonalPackages={setSeasonalPackages}
            handlePackageChange={handlePackageChange}
            addPackage={addPackage}
            handleContinue={() => setCurrentPage(6)}
          />
        );
      case 6:
        return (
          <Page6
            tastingSessions={tastingSessions}
            setTastingSessions={setTastingSessions}
            businessLicenses={businessLicenses}
            setBusinessLicenses={setBusinessLicenses}
            foodSafety={foodSafety}
            setFoodSafety={setFoodSafety}
            handleContinue={handleContinue}
          />
        );
      default:
        return <div>Completed</div>;
    }
  };

  return (
    <div className="m-0 flex w-full flex-col overflow-x-hidden lg:h-[calc(100vh-4.2rem)] lg:flex-row">
      <div className="flex flex-col items-start justify-between bg-[#FFFFFF] xs:gap-7 xs:pt-4 md:min-w-[30%] lg:max-w-[30%]">
        <div className="flex w-[100%] flex-col gap-5 lg:gap-3">
          <div className="flex items-center justify-start gap-1 px-3 lg:mt-[2rem]">
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
          <div className="flex items-center justify-start gap-1 px-3 lg:mt-[1rem]">
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
        </div>
        <div className="flex h-[50%] flex-col items-start justify-center gap-9 px-3 md:px-3">
          <h1 className="text-[8vw] font-bold md:text-[3vw]">
            Tell us about your business
          </h1>
          <p className="text-black xs:text-sm md:w-[90%]">
            Fill out your Business details to get verified and proceed to
            registration process.
          </p>
        </div>
        <div className="relative h-[10rem] lg:w-full">
          <Image
            src={"/tajmahal.png"}
            alt=""
            width={400}
            height={200}
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
