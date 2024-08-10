"use client";

import React, { useState } from "react";
import jwt from "jsonwebtoken";
import Image from "next/image";

import Page1 from "./(components)/page1";
import Page2 from "./(components)/page2";
import Page3 from "./(components)/page3";
import Page4 from "./(components)/page4";
import Page5 from "./(components)/page5";
import Page6 from "./(components)/page6";
import { addCaterer } from "@/services/vendors/caterer";

interface Package {
  type: string;
  priceRange: [number, number];
}

export interface FormState {
  // Page-specific states
  // Page 1
  businessName: string;
  // Page 6
  tastingSessions: boolean;
  businessLicenses: boolean;
  foodSafety: boolean;
}

const Caterer = () => {
  // State for current page
  const [currentPage, setCurrentPage] = useState(1);
  const [formState, setFormState] = useState<FormState>({} as FormState);

  function updateFormState(newState: Partial<FormState>) {
    setFormState((prev) => ({ ...prev, ...newState }));
  }

  // States for Page1
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

  // State for packages
  const [hourlyPackages, setHourlyPackages] = useState<Package[]>([
    { type: "", priceRange: [0, 0] },
  ]);
  const [dailyPackages, setDailyPackages] = useState<Package[]>([
    { type: "", priceRange: [0, 0] },
  ]);
  const [seasonalPackages, setSeasonalPackages] = useState<Package[]>([
    { type: "", priceRange: [0, 0] },
  ]);

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
        newPackages[index].type = value as string;
      } else {
        newPackages[index].priceRange = value as [number, number];
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
      { type: "", priceRange: [0, 100000] },
    ]);
  };

  function getVendorId(): string | null {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Token not found");
      return null;
    }

    const { userId, email } = jwt.decode(token) as {
      userId: string;
      email: string;
    };
    return userId;
  }

  const handleContinue = () => {
    console.log(formState.businessName, {
      cuisineSpecialties,
      regionalSpecialties,
      serviceStyles,
      selectedAppetizers,
      selectedBeverages,
      selectedMainCourses,
      selectedDietaryOptions,
    });
  };

  async function handleSubmit() {
    // collect all responses in formdata and send to backend
    const formData = new FormData();
    formData.append("venId", getVendorId()!);
    formData.append("name", formState.businessName);
    cuisineSpecialties.forEach((item, index) => {
      formData.append(`cuisine_specialities[${index}]`, item);
    });
    regionalSpecialties.forEach((item, index) => {
      formData.append(`regional_specialities[${index}]`, item);
    });
    serviceStyles.forEach((item, index) => {
      formData.append(`service_style_offered[${index}]`, item);
    });
    selectedAppetizers.forEach((item, index) => {
      formData.append(`appetizers[${index}]`, item);
    });
    selectedBeverages.forEach((item, index) => {
      formData.append(`beverages[${index}]`, item);
    });
    selectedMainCourses.forEach((item, index) => {
      formData.append(`main_course[${index}]`, item);
    });
    selectedDietaryOptions.forEach((item, index) => {
      formData.append(`special_dietary_options[${index}]`, item);
    });
    eventTypes.forEach((item, index) => {
      formData.append(`pre_set_menus[${index}]`, item);
    });
    additionalServices.forEach((item, index) => {
      formData.append(`additional_services[${index}]`, item);
    });
    staffProvides.forEach((item, index) => {
      formData.append(`event_types_catered[${index}]`, item);
    });
    equipmentsProvided.forEach((item, index) => {
      formData.append(`additional_services[${index}]`, item);
    });
    hourlyPackages.forEach((item, index) => {
      formData.append(`rates[hourly][${index}]`, JSON.stringify(item));
    });
    dailyPackages.forEach((item, index) => {
      formData.append(`rates[daily][${index}]`, JSON.stringify(item));
    });
    seasonalPackages.forEach((item, index) => {
      formData.append(`rates[seasonal][${index}]`, JSON.stringify(item));
    });
    formData.append("tastingSessions", formState.tastingSessions.toString());
    formData.append("businessLicenses", formState.businessLicenses.toString());
    formData.append("foodSafety", formState.foodSafety.toString());
    try {
      await addCaterer(formData);
      console.log("Caterer added successfully");
    } catch (error) {
      console.error("Error adding caterer:", error);
    }
  }

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <Page1
            formState={formState}
            updateFormState={updateFormState}
            cuisineSpecialties={cuisineSpecialties}
            setCuisineSpecialties={setCuisineSpecialties}
            regionalSpecialties={regionalSpecialties}
            setRegionalSpecialties={setRegionalSpecialties}
            serviceStyles={serviceStyles}
            setServiceStyles={setServiceStyles}
            handleContinue={() => {
              setCurrentPage(2);
              handleContinue();
            }}
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
            handleContinue={() => {
              setCurrentPage(3);
              handleContinue();
            }}
          />
        );
      case 3:
        return (
          <Page3
            selectedAppetizers={eventTypes}
            setSelectedAppetizers={setEventTypes}
            selectedBeverages={additionalServices}
            setSelectedBeverages={setAdditionalServices}
            handleContinue={() => {
              setCurrentPage(4);
              handleContinue();
            }}
          />
        );
      case 4:
        return (
          <Page4
            selectedAppetizers={staffProvides}
            setSelectedAppetizers={setStaffProvides}
            selectedBeverages={equipmentsProvided}
            setSelectedBeverages={setEquipmentsProvided}
            handleContinue={() => {
              setCurrentPage(5);
              handleContinue();
            }}
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
            handleContinue={() => {
              setCurrentPage(6);
              handleContinue();
            }}
          />
        );
      case 6:
        return (
          <Page6
            formState={formState}
            updateFormState={updateFormState}
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
              className={`flex h-10 w-10 items-center justify-center rounded-full p-5 ${currentPage >= 1 ? "bg-[#2E3192] text-white" : "bg-gray-300"}`}
              onClick={() => setCurrentPage(1)}
            >
              1
            </button>
            <div
              className={`h-[0.3rem] w-[4rem] rounded-xl ${currentPage > 1 ? "bg-[#2E3192]" : "bg-gray-300"}`}
            />
            <button
              className={`flex h-10 w-10 items-center justify-center rounded-full p-5 ${currentPage >= 2 ? "bg-[#2E3192] text-white" : "bg-gray-300"}`}
              onClick={() => setCurrentPage(2)}
            >
              2
            </button>
            <div
              className={`h-[0.3rem] w-[4rem] rounded-xl ${currentPage > 2 ? "bg-[#2E3192]" : "bg-gray-300"}`}
            />
            <button
              className={`flex h-10 w-10 items-center justify-center rounded-full p-5 ${currentPage >= 3 ? "bg-[#2E3192] text-white" : "bg-gray-300"}`}
              onClick={() => setCurrentPage(3)}
            >
              3
            </button>
          </div>
          <div className="flex items-center justify-start gap-1 px-3 lg:mt-[1rem]">
            <button
              className={`flex h-10 w-10 items-center justify-center rounded-full p-5 ${currentPage >= 4 ? "bg-[#2E3192] text-white" : "bg-gray-300"}`}
              onClick={() => setCurrentPage(4)}
            >
              4
            </button>
            <div
              className={`h-[0.3rem] w-[4rem] rounded-xl ${currentPage > 4 ? "bg-[#2E3192]" : "bg-gray-300"}`}
            />
            <button
              className={`flex h-10 w-10 items-center justify-center rounded-full p-5 ${currentPage >= 5 ? "bg-[#2E3192] text-white" : "bg-gray-300"}`}
              onClick={() => setCurrentPage(5)}
            >
              5
            </button>
            <div
              className={`h-[0.3rem] w-[4rem] rounded-xl ${currentPage > 5 ? "bg-[#2E3192]" : "bg-gray-300"}`}
            />
            <button
              className={`flex h-10 w-10 items-center justify-center rounded-full p-5 ${currentPage >= 6 ? "bg-[#2E3192] text-white" : "bg-gray-300"}`}
              onClick={() => setCurrentPage(6)}
            >
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

export default Caterer;
