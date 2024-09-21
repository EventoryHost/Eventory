"use client";

import React, { useState } from "react";
import jwt from "jsonwebtoken";
import Image from "next/image";

import Page1 from "./page1/page1";
import Page2 from "./page2/page2";
import Page3 from "./page3/page3";
import Page4 from "./page4/page4";
import Page6 from "./page6/page6";
import Page7 from "./page7/page7"

import Page8 from "./preview/preview";

import { addCaterer } from "@/services/vendors/caterer";

interface Package {
  type: string;
  priceRange: [number, number];
}

export interface FormState {
  // Page-specific states
  // Page 1
  cateringName: string;
  businessName: string;

  preSetMenu: string;
  customizableMenu: boolean;

  // Page 6
  portfolio: string | File;
  clientTestimonials: string | File;
  tastingSessions: boolean;
  businessLicenses: boolean;
  foodSafety: boolean | File;
  cateringServiceImages: string | File;
  videoEvent: string | File;
  termsAndConditions: string | File;
  cancellationPolicy: string | File;
  minOrderReq: string;
  AdvBooking: string;
  photos: File[] | string;
  videos: File[] | string;
}

const Caterer = () => {
  // State for current page
  const [currentPage, setCurrentPage] = useState(1);
  const [formState, setFormState] = useState<FormState>({
    cateringName: "",
    businessName: "",
    preSetMenu: "",
    customizableMenu: false,
    tastingSessions: false,
    businessLicenses: false,
    foodSafety: false,
    cateringServiceImages: "",
    videoEvent: "",
    termsAndConditions: "",
    cancellationPolicy: "",
    clientTestimonials: "",
    portfolio: "",
    minOrderReq: "",
    AdvBooking: "",
    photos: [],
    videos: [],
  });

  function updateFormState(newState: Partial<FormState>) {
    setFormState((prev) => ({ ...prev, ...newState }));
  }

  // States for Page1
  const [servingCapacity, setServingCapacity] = useState<string[]>([]);

  const [cuisineSpecialties, setCuisineSpecialties] = useState<string[]>([]);
  const [regionalSpecialties, setRegionalSpecialties] = useState<string[]>([]);
  const [serviceStyles, setServiceStyles] = useState<string[]>([]);

  //states for page2
  const [veg, setVeg] = useState<string[]>([]);

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

  const [advancePayment, setAdvancePayment] = useState(25);
  const [menu, setMenu] = useState<File[]>([]);



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
    console.log({
      veg,
      cateringName: formState.cateringName,
      BusinessName: formState.businessName,
      preSetMenu: formState.preSetMenu,
      customizableMenu: formState.customizableMenu,
      servingCapacity,
      cuisineSpecialties,
      regionalSpecialties,
      serviceStyles,
      selectedAppetizers,
      selectedBeverages,
      selectedMainCourses,
      selectedDietaryOptions,
      eventTypes,
      additionalServices,
      staffProvides,
      equipmentsProvided,
      dailyPackages,
      seasonalPackages,
      TastingSessions: formState.tastingSessions,
      BusinessLicenses: formState.businessLicenses,
      FoodSafety: formState.foodSafety,
      CateringServiceImages: formState.cateringServiceImages,
      VideoEvent: formState.videoEvent,
      TermsAndConditions: formState.termsAndConditions,
      CancellationPolicy: formState.cancellationPolicy,
      advancePayment,
      portfolio: formState.portfolio,
      clientTestimonials: formState.clientTestimonials,
    });
  };

  async function handleSubmit() {
    // collect all responses in formdata and send to backend
    const formData = new FormData();
    formData.append("venId", getVendorId()!);
    formData.append("name", formState.cateringName);
    formData.append("managerName", formState.businessName);
    servingCapacity.forEach((item, index) => {
      formData.append("capacity", item);
    });
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

    formData.append('vegOrNonVeg', veg[0]);


    eventTypes.forEach((item, index) => {
      formData.append(`pre_set_menus[${index}]`, item);
    });
    additionalServices.forEach((item, index) => {
      formData.append(`additional_services[${index}]`, item);
    });
    eventTypes.forEach((item, index) => {
      formData.append(`event_types_catered[${index}]`, item);
    });
    equipmentsProvided.forEach((item, index) => {
      formData.append(`equipment_provided[${index}]`, item);
    });
    staffProvides.forEach((item, index) => {
      formData.append(`staff_provided[${index}]`, item);
    });
    menu.forEach((item, index) => {
      formData.append(`menu`, item);
    });

    formData.append("deposit_required", advancePayment.toString());
    formData.append("customizable", formState.customizableMenu.toString());

    // Handle photos field
    if (Array.isArray(formState.photos)) {
      formState.photos.forEach((file) => {
        if (file instanceof File) {
          formData.append('photos', file); // Append as 'photos' without the array index
        }
      });
    } else if (typeof formState.photos === 'string') {
      formData.append('photos', formState.photos); // Append the string (URL)
    }

    // Handle videos field
    if (Array.isArray(formState.videos)) {
      formState.videos.forEach((file) => {
        if (file instanceof File) {
          formData.append('videos', file); // Append as 'videos' without the array index
        }
      });
    } else if (typeof formState.videos === 'string') {
      formData.append('videos', formState.videos); // Append the string (URL)
    }

    formData.append("tasting_sessions", formState.tastingSessions.toString());
    formData.append("business_licenses", formState.businessLicenses.toString());
    formData.append("food_safety_certificates", formState.foodSafety.toString());
    formData.append("terms_and_conditions", formState.termsAndConditions);
    formData.append("cancellation_policy", formState.cancellationPolicy);
    formData.append("pre_set_menu", formState.preSetMenu);

    formData.append("client_testimonials", formState.clientTestimonials);

    formData.append("minimum_order_requirements", formState.minOrderReq);
    formData.append("advance_booking_period", formState.AdvBooking);

    try {
      formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
      });
      await addCaterer(formData);
      localStorage.clear();
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
            servingCapacity={servingCapacity}
            setServingCapacity={setServingCapacity}
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
            setMenu={setMenu}
            menu={menu}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            formState={formState}
            updateFormState={updateFormState}
            veg={veg}
            setVeg={setVeg}
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
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            selectedEventTypes={eventTypes}
            setSelectedEventTypes={setEventTypes}
            selectedAdditionalServices={additionalServices}
            setSelectedAdditionalServices={setAdditionalServices}
            handleContinue={() => {
              setCurrentPage(4);
              handleContinue();
            }}
          />
        );
      case 4:
        return (
          <Page4
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            selectedStaffProvider={staffProvides}
            setSelectedStaffProvider={setStaffProvides}
            selectedEquipmentsProvided={equipmentsProvided}
            setSelectedEquipmentsProvided={setEquipmentsProvided}
            handleContinue={() => {
              setCurrentPage(5);
              handleContinue();
            }}
          />
        );
      // case 5:
      //   return (
      //     <Page5
      //       setCurrentPage={setCurrentPage}
      //       currentPage={currentPage}
      //       formState={formState}
      //       updateFormState={updateFormState}
      //       advancePayment={advancePayment}
      //       setAdvancePayment={setAdvancePayment}
      //       // hourlyPackages={hourlyPackages}
      //       // setHourlyPackages={setHourlyPackages}
      //       dailyPackages={dailyPackages}
      //       setDailyPackages={setDailyPackages}
      //       seasonalPackages={seasonalPackages}
      //       setSeasonalPackages={setSeasonalPackages}
      //       handlePackageChange={handlePackageChange}
      //       addPackage={addPackage}
      //       handleContinue={() => {
      //         setCurrentPage(6);
      //         handleContinue();
      //       }}
      //     />
      //   );
      case 5:
        return (
          <Page6

            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            formState={formState}
            updateFormState={updateFormState}
            handleContinue={() => {
              setCurrentPage(6);
              handleContinue();
              // handleSubmit();
            }}
          />
        );

      case 6:
        return (
          <Page7
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            formState={formState}
            updateFormState={updateFormState}
            handleContinue={() => {
              setCurrentPage(7);
              handleContinue();
              // handleSubmit();
            }}
          />
        );

      case 7:
        return (
          <Page8
            setMenu={setMenu}
            menu={menu}
            veg={veg}
            setVeg={setVeg}
            setCurrentPage={setCurrentPage}
            formState={formState}
            servingCapacity={servingCapacity}
            setServingCapacity={setServingCapacity}
            updateFormState={updateFormState}
            cuisineSpecialties={cuisineSpecialties}
            setCuisineSpecialties={setCuisineSpecialties}
            regionalSpecialties={regionalSpecialties}
            setRegionalSpecialties={setRegionalSpecialties}
            serviceStyles={serviceStyles}
            setServiceStyles={setServiceStyles}
            selectedAppetizers={selectedAppetizers}
            setSelectedAppetizers={setSelectedAppetizers}
            selectedBeverages={selectedBeverages}
            setSelectedBeverages={setSelectedBeverages}
            selectedMainCourses={selectedMainCourses}
            setSelectedMainCourses={setSelectedMainCourses}
            selectedDietaryOptions={selectedDietaryOptions}
            setSelectedDietaryOptions={setSelectedDietaryOptions}
            selectedEventTypes={eventTypes}
            setSelectedEventTypes={setEventTypes}
            selectedAdditionalServices={additionalServices}
            setSelectedAdditionalServices={setAdditionalServices}
            selectedStaffProvider={staffProvides}
            setSelectedStaffProvider={setStaffProvides}
            selectedEquipmentsProvided={equipmentsProvided}
            setSelectedEquipmentsProvided={setEquipmentsProvided}
            dailyPackages={dailyPackages}
            setDailyPackages={setDailyPackages}
            seasonalPackages={seasonalPackages}
            setSeasonalPackages={setSeasonalPackages}
            handlePackageChange={handlePackageChange}
            addPackage={addPackage}
            advancePayment={advancePayment}
            handleContinue={() => {
              // setCurrentPage(8);
              handleSubmit();
            }}
          />
        );
      default:
        return <div>thankyou</div>;
    }
  };

  return (
    <div className="m-0 flex w-full flex-col overflow-x-hidden lg:h-[calc(100vh-4.2rem)] lg:flex-row">
      <div className="flex flex-col items-start justify-between bg-[#FFFFFF] xs:gap-7 pt-4 md:min-w-[30%] lg:max-w-[30%]">
        <div className="flex w-[90%] m-auto flex-col justify-center">
          <div className="flex flex-col gap-1 px-3 lg:mt-[2rem]">
            <span className="text-lg font-semibold">
              Step {currentPage} of 7
            </span>
            <div className="flex gap-2">
              <button
                className={`flex h-2 w-10 items-center justify-center rounded-full ${currentPage >= 1 ? "bg-[#2E3192] text-white" : "bg-gray-300"}`}
                onClick={() => setCurrentPage(1)}
              ></button>

              <button
                className={`flex h-2 w-10 items-center justify-center rounded-full ${currentPage >= 2 ? "bg-[#2E3192] text-white" : "bg-gray-300"}`}
                onClick={() => setCurrentPage(2)}
              ></button>

              <button
                className={`flex h-2 w-10 items-center justify-center rounded-full ${currentPage >= 3 ? "bg-[#2E3192] text-white" : "bg-gray-300"}`}
                onClick={() => setCurrentPage(3)}
              ></button>

              <button
                className={`flex h-2 w-10 items-center justify-center rounded-full ${currentPage >= 4 ? "bg-[#2E3192] text-white" : "bg-gray-300"}`}
                onClick={() => setCurrentPage(4)}
              ></button>

              <button
                className={`flex h-2 w-10 items-center justify-center rounded-full ${currentPage >= 5 ? "bg-[#2E3192] text-white" : "bg-gray-300"}`}
                onClick={() => setCurrentPage(5)}
              ></button>

              <button
                className={`flex h-2 w-10 items-center justify-center rounded-full ${currentPage >= 6 ? "bg-[#2E3192] text-white" : "bg-gray-300"}`}
                onClick={() => setCurrentPage(6)}
              ></button>
              <button
                className={`flex h-2 w-10 items-center justify-center rounded-full ${currentPage >= 7 ? "bg-[#2E3192] text-white" : "bg-gray-300"}`}
                onClick={() => setCurrentPage(7)}
              ></button>
              {/* <button
                className={`flex h-2 w-10 items-center justify-center rounded-full ${currentPage >= 8 ? "bg-[#2E3192] text-white" : "bg-gray-300"}`}
                onClick={() => setCurrentPage(8)}
              ></button> */}
            </div>
          </div>
        </div>
        <div className="flex h-[50%] flex-col items-start justify-center gap-9 px-3 md:px-6  w-[90%] m-auto">
          <h1 className="md:text-5xl text-3xl font-bold  ">
            {currentPage === 1 && "Tell us about you"}
            {currentPage === 2 && "Fill the menu details"}
            {currentPage === 3 && "Fill the Event details"}
            {currentPage === 4 && "Fill the Staffing and Equipment details"}
            {/* {currentPage === 5 && "Fill the Booking and pricing details"} */}
            {currentPage === 5 && "Fill the Additional details"}
            {currentPage === 6 && "Fill the Additional details"}

            {currentPage === 7 && "Preview details"}
          </h1>
          <p className="text-black text-xl ">
            {currentPage === 1 &&
              "Please provide the basic details of the catering service offered by your company."}
            {currentPage === 2 &&
              "Please provide the menu details of the catering service offered by your company."}
            {currentPage === 3 &&
              "Please provide the event details of the catering service offered by your company."}
            {currentPage === 4 &&
              "Please provide the staffing and equipment details of the catering service offered by your company."}
            {/* {currentPage === 5 &&
              "Please provide the booking and pricing details of the catering service offered by your company."} */}
            {currentPage === 5 &&
              "Please provide the additional details of the catering service offered by your company."}
            {currentPage === 6 && "Please provide the booking and pricing details of the catering service offered by your company."}

            {currentPage === 7 &&
              "Please recheck the information provided by you. "}
          </p>
        </div>
        <div className="relative h-[10rem] w-full">
          <Image
            src={"/tajmahal.png"}
            alt=""
            width={400}
            height={200}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="flex min-w-[70%] flex-col items-center justify-center bg-[#F7F6F9] p-4 md:p-12">
        {renderPage()}
      </div>
    </div>
  );
};

export default Caterer;
