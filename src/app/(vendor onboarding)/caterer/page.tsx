"use client";
import React, { useState } from "react";
import jwt from "jsonwebtoken";
import Image from "next/image";
import Page1 from "./page1/page1";
import Page2 from "./page2/page2";
import Page3 from "./page3/page3";
import Page4 from "./page4/page4";
import Page5 from "./page5/page5";
import Page6 from "./page6/page6";
import Page7 from "./preview/page7";
import { addCaterer } from "@/services/vendors/caterer";
import Agreement from "../Agreement/page";
import Plans from "../Plans/page";
import Registration_Completed from "../Registration-Completed/page";

interface Package {
  package_name: string;
  priceRange: [number, number];
}

export interface FormState {
  // Page-specific states
  // Page 1
  cateringName: string;
  businessName: string;

  menu: string | File;
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
}

const Caterer = () => {
  // State for current page
  const [currentPage, setCurrentPage] = useState<number>(1);
  // state are 7 for the form then 8 for the t&c then payment
  const [formState, setFormState] = useState<FormState>({
    cateringName: "",
    businessName: "",
    menu: "",
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

  // State for packages
  const [hourlyPackages, setHourlyPackages] = useState<Package[]>([
    { package_name: "", priceRange: [0, 0] },
  ]);
  const [dailyPackages, setDailyPackages] = useState<Package[]>([
    { package_name: "", priceRange: [0, 0] },
  ]);
  const [seasonalPackages, setSeasonalPackages] = useState<Package[]>([
    { package_name: "", priceRange: [0, 0] },
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
        newPackages[index].package_name = value as string;
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
      { package_name: "", priceRange: [0, 100000] },
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
      menu: formState.menu,
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
    cuisineSpecialties.forEach((item, index) => {
      formData.append(`cuisine_specialities[${index}]`, item);
    });
    regionalSpecialties.forEach((item, index) => {
      formData.append(`regional_specialities[${index}]`, item);
    });

    serviceStyles.forEach((item, index) => {
      formData.append(`service_style_offered[${index}]`, item);
    });
    formData.append("menu", formState.menu);

    veg.forEach((item, index) => {
      formData.append(`menuType`, item);
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
    eventTypes.forEach((item, index) => {
      formData.append(`event_types_catered[${index}]`, item);
    });
    staffProvides.forEach((item, index) => {
      formData.append(`staff_provided[${index}]`, item);
    });
    equipmentsProvided.forEach((item, index) => {
      formData.append(`equipment_provided[${index}]`, item);
    });
    // hourlyPackages.forEach((item, index) => {
    //   formData.append(`rates[hourly][${index}]`, JSON.stringify(item));
    // });
    dailyPackages.forEach((item, index) => {
      formData.append(
        `rates[per_plate_rates][${index}][package_name]`,
        JSON.stringify(item),
      );
      formData.append(
        `rates[per_plate_rates][${index}][min]`,
        JSON.stringify(item.priceRange[0]),
      );
      formData.append(
        `rates[per_plate_rates][${index}][max]`,
        JSON.stringify(item.priceRange[1]),
      );
    });
    seasonalPackages.forEach((item, index) => {
      formData.append(
        `rates[deal_package_rates][${index}][package_name]`,
        JSON.stringify(item.package_name),
      );
      formData.append(
        `rates[deal_package_rates][${index}][min]`,
        JSON.stringify(item.priceRange[0]),
      );
      formData.append(
        `rates[deal_package_rates][${index}][max]`,
        JSON.stringify(item.priceRange[1]),
      );
    });

    formData.append("deposit_required", advancePayment.toString());
    formData.append("portfolio", formState.portfolio);
    formData.append("tastingSessions", formState.tastingSessions.toString());
    formData.append("businessLicenses", formState.businessLicenses.toString());
    formData.append("foodSafety", formState.foodSafety.toString());
    formData.append("cateringServiceImages", formState.cateringServiceImages);
    formData.append("terms_and_conditions", formState.termsAndConditions);
    formData.append("cancellation_policy", formState.cancellationPolicy);
    formData.append("pre_set_menu", formState.preSetMenu);

    formData.append("client_testimonials", formState.clientTestimonials);

    formData.append("customizable", formState.customizableMenu.toString());
    formData.append("minimum_order_requirements", formState.minOrderReq);
    formData.append("advance_booking_period", formState.AdvBooking);

    try {
      formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
      });
      await addCaterer(formData);
      // localStorage.clear();
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
      case 5:
        return (
          <Page5
            formState={formState}
            updateFormState={updateFormState}
            advancePayment={advancePayment}
            setAdvancePayment={setAdvancePayment}
            // hourlyPackages={hourlyPackages}
            // setHourlyPackages={setHourlyPackages}
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
            handleContinue={() => {
              setCurrentPage(7);
              handleContinue();
              // handleSubmit();
            }}
          />
        );

      case 7:
        return (
          <Page7
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
              setCurrentPage(8);
              handleSubmit();
            }}
          />
        );
      case 8:
        return (
          <>
            <Agreement setCurrentPage={setCurrentPage} />
          </>
        )
      case 9:
        return (
          <>
            <Plans handleformSubmit={handleSubmit} setCurrentPage={setCurrentPage} />
          </>
        )
      case 10:
        return (
          <>
            <Registration_Completed />
          </>
        )
      default:
        return (
          <>
            <center><h2>Loading....</h2></center>
          </>
        )
    }
  };

  return (
    <div className={`m-0 flex w-full flex-col overflow-x-hidden lg:flex-row ${currentPage <= 7 ? 'lg:h-[calc(100vh-4.2rem)]' : ''}`}>
      {
        currentPage <= 7 &&
        (
          <div className="flex flex-col items-start justify-between bg-[#FFFFFF] xs:gap-7 xs:pt-4 md:min-w-[30%] lg:max-w-[30%]">
            <div className="flex w-[100%] flex-col justify-center">
              <div className="flex flex-col gap-1 px-3 lg:mt-[2rem]">
                <span className="text-lg font-semibold">
                  Step {currentPage} of 8
                </span>
                <div className="flex gap-4">
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
                  <button
                    className={`flex h-2 w-10 items-center justify-center rounded-full ${currentPage >= 8 ? "bg-[#2E3192] text-white" : "bg-gray-300"}`}
                    onClick={() => setCurrentPage(8)}
                  ></button>
                </div>
              </div>
            </div>
            <div className="flex h-[50%] flex-col items-start justify-center gap-9 px-3 md:px-3">
              <h1 className="text-[8vw] font-bold md:text-[3vw]">
                {currentPage === 1 && "Tell us about your business"}
                {currentPage === 2 && "Fill the menu details"}
                {currentPage === 3 && "Fill the Event details"}
                {currentPage === 4 && "Fill the Staffing and Equipment details"}
                {currentPage === 5 && "Fill the Booking and pricing details"}
                {currentPage === 6 && "Fill the Additional details"}
                {currentPage === 7 && "Preview details"}
              </h1>
              <p className="text-black xs:text-sm md:w-[90%]">
                {currentPage === 1 &&
                  "Fill out your Business details to get verified and proceed to the registration process."}
                {currentPage === 2 &&
                  "Please provide the menu details of the catering service offered by your company."}
                {currentPage === 3 &&
                  "Please provide the event details of the catering service offered by your company."}
                {currentPage === 4 &&
                  "Please provide the staffing and equipment details of the catering service offered by your company."}
                {currentPage === 5 &&
                  "Please provide the booking and pricing details of the catering service offered by your company."}
                {currentPage === 6 &&
                  "Please provide the additional details of the catering service offered by your company."}
                {currentPage === 7 &&
                  "Please recheck the information provided by you. "}
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
        )
      }
      <div className="flex min-w-[70%] flex-col items-center justify-center bg-[#F7F6F9] p-6 md:p-[1rem]">
        {renderPage()}
      </div>
    </div>
  );
};

export default Caterer;
