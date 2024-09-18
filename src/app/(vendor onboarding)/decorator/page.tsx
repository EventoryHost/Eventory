"use client";

import React, { useState } from "react";
import jwt from "jsonwebtoken"; // Import the 'jsonwebtoken' module
import Page1 from "./page1/page1";
import Page2 from "./page2/page2";
import Page3 from "./page3/page3";
import Page4 from "./page4/page4";
import Page5 from "./page5/page5";
import Page6 from "./page6/page6";
import Page7 from "./page7/page7";
import Page8 from "./preview/page8";

import { addDecorator } from "@/services/vendors/decorator";
import Image from "next/image";
import Agreement from "../Agreement/page";
import Plans from "../Plans/page";
import Registration_Completed from "../Registration-Completed/page";

interface Package {
  type: string;
  priceRange: [number, number];
}

export interface FormState {
  // Page-specific states
  // Page 1
  businessName: string;

  // Page 2
  propthemesOffered: boolean;
  adobtThemes: boolean;
  colorschmes: boolean;
  customizationsThemes: boolean;
  customDesignProcess: string;

  // Page 3
  backDropoptions: string;
  decorationoptions: string;
  prop_accessory: string;

  // Page 4
  freeInitialConsultation: boolean;
  revisionPolicy: boolean;
  writtenthemeProposal: boolean;
  setup_installation: boolean;
  consulationProcess: string;

  //page 6
  portfolio: string | File;
  ratings_reviews: string | File;
  clientTestimonials: string | File;
  certificates_awards: string | File;

  //page 7
  insurancePolicy: string | File;
  cancellationPolicy: string | File;
  termsAndConditions: string | File;
  privacyPolicy: string | File;

  references: boolean;
  experience: string;
}

const Decorators: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // global variables
  const [formState, setFormState] = useState<FormState>({
    //page1
    businessName: "",

    // Page 2
    propthemesOffered: false,
    adobtThemes: false,
    colorschmes: false,
    customizationsThemes: false,
    customDesignProcess: "",

    //page 3
    backDropoptions: "",
    decorationoptions: "",
    prop_accessory: "",
    // Page 4
    freeInitialConsultation: true,
    revisionPolicy: true,
    writtenthemeProposal: true,
    setup_installation: true,
    consulationProcess: "",

    //page6
    portfolio: "",
    ratings_reviews: "",
    clientTestimonials: "",
    certificates_awards: "",
    //page7
    insurancePolicy: "",
    cancellationPolicy: "",
    termsAndConditions: "",
    privacyPolicy: "",

    references: false,
    experience: "",
  });

  const updateFormState = (newState: Partial<FormState>) => {
    setFormState((prev) => ({ ...prev, ...newState }));
  };

  //page 1
  // const [businessName, setbusinessName] = useState("");
  const [typesOfEvents, setTypesOfEvents] = useState<string[]>([]);
  const [weddingEvents, setWeddingEvents] = useState<string[]>([]);
  const [corporateEvents, setCorporateEvents] = useState<string[]>([]);
  const [seasonalEvents, setSeasonalEvents] = useState<string[]>([]);
  const [culturalEvents, setCulturalEvents] = useState<string[]>([]);

  //page 2
  const [themesOffered, setThemesOffered] = useState<string[]>([]);

  //page 3
  const [themesElements, setThemesElements] = useState<string[]>([]);

  //page 4

  //page 5
  const [hourlyPackages, setHourlyPackages] = useState<Package[]>([
    { type: "", priceRange: [0, 0] },
  ]);

  const [dailyPackages, setDailyPackages] = useState<Package[]>([
    { type: "", priceRange: [0, 0] },
  ]);

  const [additionalCharges, setAdditionalCharges] = useState<Package[]>([
    { type: "", priceRange: [0, 0] },
  ]);
  const [advancePayment, setAdvancePayment] = useState(25);

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
      console.log("No token found!");
      return null;
    }
    try {
      const decodedToken = jwt.decode(token) as {
        userId?: string;
        email?: string;
      };
      if (!decodedToken || !decodedToken.userId) {
        console.error("Invalid token or token does not contain userId.");
        return null;
      }
      return decodedToken.userId;
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  }

  const handleContinue = () => {
    console.log("continue");
  };

  // Submit form data

  const handleSubmit = async () => {
    const venId = getVendorId();

    if (!venId) {
      console.error("No vendorId found!");
      return;
    }

    const token = localStorage.getItem("token");

    if (!token) {
      console.error("No token found!");
      return;
    }

    const formData = new FormData();

    formData.append("venId", venId);
    formData.append("name", formState.businessName);

    //page 1
    typesOfEvents.forEach((type) => {
      formData.append("typesOfEvents", type);
    });
    weddingEvents.forEach((event) => {
      formData.append("weddingEvents", event);
    });
    corporateEvents.forEach((event) => {
      formData.append("corporateEvents", event);
    });
    seasonalEvents.forEach((event) => {
      formData.append("seasonalEvents", event);
    });
    culturalEvents.forEach((event) => {
      formData.append("culturalEvents", event);
    });
    //page 2
    formData.append(
      "propthemesOffered",
      formState.propthemesOffered.toString(),
    );
    formData.append("adobtThemes", formState.adobtThemes.toString());
    formData.append("colorschmes", formState.colorschmes.toString());
    formData.append(
      "customizationsThemes",
      formState.customizationsThemes.toString(),
    );
    formData.append("customDesignProcess", formState.customDesignProcess);
    //page 3
    formData.append("backDropoptions", formState.backDropoptions);
    formData.append("decorationoptions", formState.decorationoptions);
    formData.append("prop_accessory", formState.prop_accessory);
    //page 4
    formData.append(
      "freeInitialConsultation",
      formState.freeInitialConsultation.toString(),
    );
    formData.append("revisionPolicy", formState.revisionPolicy.toString());
    formData.append(
      "writtenthemeProposal",
      formState.writtenthemeProposal.toString(),
    );
    formData.append(
      "setup_installation",
      formState.setup_installation.toString(),
    );
    formData.append("consulationProcess", formState.consulationProcess);
    //page 5
    hourlyPackages.forEach((packageData, index) => {
      formData.append(`hourlyPackages[${index}][type]`, packageData.type);
      formData.append(
        `hourlyPackages[${index}][priceRange][0]`,
        packageData.priceRange[0].toString(),
      );
      formData.append(
        `hourlyPackages[${index}][priceRange][1]`,
        packageData.priceRange[1].toString(),
      );
    });
    dailyPackages.forEach((packageData, index) => {
      formData.append(`dailyPackages[${index}][type]`, packageData.type);
      formData.append(
        `dailyPackages[${index}][priceRange][0]`,
        packageData.priceRange[0].toString(),
      );
      formData.append(
        `dailyPackages[${index}][priceRange][1]`,
        packageData.priceRange[1].toString(),
      );
    });
    additionalCharges.forEach((packageData, index) => {
      formData.append(`additionalCharges[${index}][type]`, packageData.type);
      formData.append(
        `additionalCharges[${index}][priceRange][0]`,
        packageData.priceRange[0].toString(),
      );
      formData.append(
        `additionalCharges[${index}][priceRange][1]`,
        packageData.priceRange[1].toString(),
      );
    });
    formData.append("advancePayment", advancePayment.toString());
    //page 6
    formData.append("portfolio", formState.portfolio);
    formData.append("ratings_reviews", formState.ratings_reviews);
    formData.append("clientTestimonials", formState.clientTestimonials);
    formData.append("certificates_awards", formState.certificates_awards);
    //page 7
    formData.append("insurancePolicy", formState.insurancePolicy);
    formData.append("cancellationPolicy", formState.cancellationPolicy);
    formData.append("termsAndConditions", formState.termsAndConditions);
    formData.append("privacyPolicy", formState.privacyPolicy);

    // Append form data for debugging
    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });

    try {
      await addDecorator(formData);
      alert("added decorator");
    } catch (error) {
      console.error("Error adding venue:", error);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <Page1
            formState={formState}
            updateFormState={updateFormState}
            typeOfevents={typesOfEvents}
            setTypesOfEvents={setTypesOfEvents}
            weddingEvents={weddingEvents}
            setWeddingEvents={setWeddingEvents}
            corporateEvents={corporateEvents}
            setCorporateEvents={setCorporateEvents}
            seasonalEvents={seasonalEvents}
            setSeasonalEvents={setSeasonalEvents}
            culturalEvents={culturalEvents}
            setCulturalEvents={setCulturalEvents}
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
            themesOffered={themesOffered}
            setThemesOffered={setThemesOffered}
            handleContinue={() => {
              setCurrentPage(3);
              handleContinue();
            }}
          />
        );

      case 3:
        return (
          <Page3
            formState={formState}
            updateFormState={updateFormState}
            themesElements={themesElements}
            setThemesElements={setThemesElements}
            handleContinue={() => {
              setCurrentPage(4);
              handleContinue();
            }}
          />
        );

      case 4:
        return (
          <Page4
            formState={formState}
            updateFormState={updateFormState}
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
            additionalCharges={additionalCharges}
            setAdditionalCharges={setAdditionalCharges}
            handlePackageChange={handlePackageChange}
            addPackage={addPackage}
            advancePayment={advancePayment}
            setAdvancePayment={setAdvancePayment}
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
            }}
          />
        );

      case 7:
        return (
          <Page7
            formState={formState}
            updateFormState={updateFormState}
            handleContinue={() => {
              setCurrentPage(8);
              handleContinue();
            }}
          />
        );

      case 8:
        return (
          <Page8
            setCurrentPage={setCurrentPage}
            typeOfevents={typesOfEvents}
            setTypesOfEvents={setTypesOfEvents}
            weddingEvents={weddingEvents}
            setWeddingEvents={setWeddingEvents}
            corporateEvents={corporateEvents}
            setCorporateEvents={setCorporateEvents}
            seasonalEvents={seasonalEvents}
            setSeasonalEvents={setSeasonalEvents}
            culturalEvents={culturalEvents}
            setCulturalEvents={setCulturalEvents}
            formState={formState}
            updateFormState={updateFormState}
            themesOffered={themesOffered}
            setThemesOffered={setThemesOffered}
            themesElements={themesElements}
            setThemesElements={setThemesElements}
            hourlyPackages={hourlyPackages}
            setHourlyPackages={setHourlyPackages}
            dailyPackages={dailyPackages}
            setDailyPackages={setDailyPackages}
            additionalCharges={additionalCharges}
            setAdditionalCharges={setAdditionalCharges}
            handlePackageChange={handlePackageChange}
            addPackage={addPackage}
            advancePayment={advancePayment}
            setAdvancePayment={setAdvancePayment}
            handleContinue={() => {
              setCurrentPage(9);
              //handleContinue();
            }}
          />
        )
      case 9:
        return (
          <>
            <Agreement setCurrentPage={setCurrentPage} />
          </>
        )
      case 10:
        return (
          <>
            <Plans handleformSubmit={handleSubmit} setCurrentPage={setCurrentPage} />
          </>
        )
      case 11:
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
    <div className={`m-0 flex w-full flex-col overflow-x-hidden ${currentPage <= 8 ? 'lg:h-[calc(100vh-4.2rem)]' : ''} lg:flex-row `}>
      {
        currentPage <= 8 &&
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
                {currentPage === 1 && "Fill out event details"}
                {currentPage === 2 && "Fill out themes related details "}
                {currentPage === 3 && "Fill out theme elements details"}
                {currentPage === 4 && "Fill out consultaion details"}
                {currentPage === 5 && "Fill out the pricing details"}
                {currentPage === 6 && "Fill out your ratings and reviews"}
                {currentPage === 7 && "Fill out some mandatory details"}
                {currentPage === 8 && "Preview details"}

              </h1>
              <p className="text-black xs:text-sm md:w-[90%]">
                {currentPage === 1 &&
                  "Select the types of events you cover "}
                {currentPage === 2 &&
                  "Provide the details of the themes you offer and related details."}
                {currentPage === 3 &&
                  "Provide the details of the themes elements you provide and describe it in detail."}
                {currentPage === 4 &&
                  "Provide your consultaion process in detail"}
                {currentPage === 5 &&
                  "Provide the pricing detaials or uplaod pdf (if available)"}
                {currentPage === 6 &&
                  "Fill out the details or upload the links/pdf if available."}
                {currentPage === 7 &&
                  "Provide the deatils by providing url or uploading pdf. "}
                {currentPage === 8 && "Please recheck the information provided by you. "}

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
    </div >
  );
};

export default Decorators;
