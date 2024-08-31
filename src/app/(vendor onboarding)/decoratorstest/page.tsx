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

interface Package {
  type: string;
  priceRange: [number, number];
}

interface FormState {
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
  portfolio: string;
  ratings_reviews: string;
  clientTestimonials: string;
  certificates_awards: string;

  //page 7
  insurancePolicy: string;
  cancellationPolicy: string;
  termsAndConditions: string;
  privacyPolicy: string;

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
      alert("Tried adding decorator");
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
          />
        );
      case 2:
        return (
          <Page2
            formState={formState}
            updateFormState={updateFormState}
            themesOffered={themesOffered}
            setThemesOffered={setThemesOffered}
          />
        );

      case 3:
        return (
          <Page3
            formState={formState}
            updateFormState={updateFormState}
            themesElements={themesElements}
            setThemesElements={setThemesElements}
          />
        );

      case 4:
        return (
          <Page4 formState={formState} updateFormState={updateFormState} />
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
          />
        );

      case 6:
        return (
          <Page6 formState={formState} updateFormState={updateFormState} />
        );

      case 7:
        return (
          <Page7 formState={formState} updateFormState={updateFormState} />
        );

      default:
        return (
          <Page8
          
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
          />
        );
    }
  };

  return (
    <div>
      {renderPage()}
      <div className="my-9 mr-[5%] flex flex-row justify-end gap-7">
        {currentPage > 1 && currentPage!== 8&&(
          <button
            className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:w-fit xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>
        )}
        {currentPage < 8 && (
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
          >
            Next
          </button>
        )}
        {currentPage === 8 && (
          
          <button
          className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:w-fit xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          View T/C
        </button>
        )}
        {currentPage === 8 && (

          <button
            onClick={handleSubmit}
            className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
          >
            Pay
          </button>
        )}
      </div>
    </div>
  );
};

export default Decorators;
