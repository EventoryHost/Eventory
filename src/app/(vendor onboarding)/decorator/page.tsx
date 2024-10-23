"use client";

import React, { useState } from "react";
import jwt from "jsonwebtoken"; // Import the 'jsonwebtoken' module
import Page1 from "./page1/page1";
import Page2 from "./page2/page2";
import Page3 from "./page3/page3";
import Page4 from "./page4/page4";
import Page5 from "./page5/page5";
import Page6 from "./preview/page5";
import { addDecorator } from "@/services/vendors/decorator";
import Image from "next/image";
import Agreement from "../(Agreement)/Agreement";
import Plans from "../(Plans)/Plans";
import Registration_Completed from "../(Registration-Completed)/thankupage";

interface Package {
  type: string;
  priceRange: [number, number];
}

export interface FormState {
  // Page-specific states
  // Page 1
  businessName: string;
  duration: string;
  eventsize: string;

  // Page 2
  propthemesOffered: boolean | null;
  adobtThemes: boolean | null;
  colorschmes: boolean | null;
  customizationsThemes: boolean | null;
  customDesignProcess: string;

  // Page 3
  themephotos: string | File | File[];
  themevideos: string | File | File[];
  // Page 4
  photos: string | File | File[];
  videos: string | File | File[];
  websiteurl: string;
  intstagramurl: string;
  clientTestimonials: string;
  Recongnition_awards: string;
  advbookingperiod: string;
  writtenthemeproposalafterconsultaion: boolean | null;
  revisionforinitialthemeproposal: boolean | null;

  //page 7
  cancellationPolicy: string | File | File[];
  termsAndConditions: string | File | File[];

  //page 5
}

const Decorators: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // global variables
  const [formState, setFormState] = useState<FormState>({
    //page1
    businessName: "",
    duration: "",
    eventsize: "",

    // Page 2
    propthemesOffered: null,
    adobtThemes: null,
    colorschmes: null,
    customizationsThemes: null,
    customDesignProcess: "",

    //page 3
    themephotos: "",
    themevideos: "",

    //page4
    photos: "",
    videos: "",
    websiteurl: "",
    intstagramurl: "",
    clientTestimonials: "",
    Recongnition_awards: "",
    advbookingperiod: "",
    writtenthemeproposalafterconsultaion: null,
    revisionforinitialthemeproposal: null,
    //page5
    cancellationPolicy: "",
    termsAndConditions: "",
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

  function getVendorId(): string | null {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Token not found");
      return null;
    }
    try {
      const decodedToken = jwt.decode(token) as {
        id: string;
        email: string;
        name: string;
        mobile: string;
      };
      if (!decodedToken || !decodedToken.id) {
        console.error("Invalid token or token does not contain userId.");
        return null;
      }
      return decodedToken.id;
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  }

  const handleContinue = () => {
    setCurrentPage(currentPage + 1);
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

    //page 1
    formData.append("name", formState.businessName);
    formData.append("duration", formState.duration);
    formData.append("eventSize", formState.eventsize);

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
    themesOffered.forEach((event) => {
      formData.append("themesOffered", event);
    });

    formData.append(
      "propthemesOffered",
      formState.propthemesOffered
        ? formState.propthemesOffered.toString()
        : "null",
    );

    formData.append(
      "adobtThemes",
      formState.adobtThemes ? formState.adobtThemes.toString() : "null",
    );

    formData.append(
      "colorschmes",
      formState.colorschmes ? formState.colorschmes.toString() : "null",
    );

    formData.append(
      "customizationsThemes",
      formState.customizationsThemes
        ? formState.customizationsThemes.toString()
        : "null",
    );

    formData.append("customDesignProcess", formState.customDesignProcess);

    // 3
    themesElements.forEach((event) => {
      formData.append("themesElements", event);
    });

    if (Array.isArray(formState.themevideos)) {
      formState.themevideos.forEach((file) => {
        if (file instanceof File) {
          formData.append("themevideos", file); // Append as 'photos' without the array index
        }
      });
    } else if (typeof formState.themevideos === "string") {
      formData.append("themevideos", formState.themevideos); // Append the string (URL)
    }

    if (Array.isArray(formState.themephotos)) {
      formState.themephotos.forEach((file) => {
        if (file instanceof File) {
          formData.append("themephotos", file); // Append as 'photos' without the array index
        }
      });
    } else if (typeof formState.themephotos === "string") {
      formData.append("photos", formState.themephotos); // Append the string (URL)
    }

    //4

    if (Array.isArray(formState.photos)) {
      formState.photos.forEach((file) => {
        if (file instanceof File) {
          formData.append("photos", file); // Append as 'photos' without the array index
        }
      });
    } else if (typeof formState.photos === "string") {
      formData.append("photos", formState.photos); // Append the string (URL)
    }

    if (Array.isArray(formState.videos)) {
      formState.videos.forEach((file) => {
        if (file instanceof File) {
          formData.append("photos", file); // Append as 'photos' without the array index
        }
      });
    } else if (typeof formState.videos === "string") {
      formData.append("photos", formState.videos); // Append the string (URL)
    }
    formData.append("websiteurl", formState.websiteurl);
    formData.append("intstagramurl", formState.intstagramurl);
    formData.append("clientTestimonials", formState.clientTestimonials);
    //page 7

    if (Array.isArray(formState.cancellationPolicy)) {
      formState.cancellationPolicy.forEach((file) => {
        formData.append("cancellationPolicy", file); // No index here
      });
    } else {
      formData.append("cancellationPolicy", formState.cancellationPolicy);
    }
    if (Array.isArray(formState.termsAndConditions)) {
      formState.termsAndConditions.forEach((file) => {
        formData.append("termsAndConditions", file); // No index here
      });
    } else {
      formData.append("termsAndConditions", formState.termsAndConditions);
    }
    formData.append("advanceBookingPeriod", formState.advbookingperiod);
    // Append form data for debugging
    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });

    try {
      await addDecorator(formData);
      // alert("Tried adding decorator");
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
            handleContinue={handleContinue}
          />
        );
      case 2:
        return (
          <Page2
            formState={formState}
            updateFormState={updateFormState}
            themesOffered={themesOffered}
            setCurrentPage={setCurrentPage}
            setThemesOffered={setThemesOffered}
            handleContinue={handleContinue}
          />
        );

      case 3:
        return (
          <Page3
            setCurrentPage={setCurrentPage}
            formState={formState}
            updateFormState={updateFormState}
            themesElements={themesElements}
            setThemesElements={setThemesElements}
            handleContinue={handleContinue}
          />
        );

      case 4:
        return (
          <Page4
            setCurrentPage={setCurrentPage}
            formState={formState}
            updateFormState={updateFormState}
            handleContinue={handleContinue}
          />
        );
      case 5:
        return (
          <Page5
            setCurrentPage={setCurrentPage}
            formState={formState}
            updateFormState={updateFormState}
            themesElements={themesElements}
            setThemesElements={setThemesElements}
            handleContinue={handleContinue}
          />
        );

      case 6:
        return (
          <Page6
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
            handleContinue={handleContinue}
          />
        );
      case 7:
        return (
          <>
            <Agreement setCurrentPage={setCurrentPage} />
          </>
        );
      case 8:
        return (
          <>
            <Plans
              handleformSubmit={handleSubmit}
              setCurrentPage={setCurrentPage}
            />
          </>
        );
      case 9:
        return (
          <>
            <Registration_Completed />
          </>
        );
      default:
        return (
          <>
            <center>
              <h2>Loading....</h2>
            </center>
          </>
        );
    }
  };

  return (
    <div
      className={`m-0 flex w-full flex-col overflow-x-hidden ${currentPage <= 6 ? "lg:h-[calc(100vh-4.2rem)]" : ""} lg:flex-row`}
    >
      {currentPage <= 6 && (
        <div className="flex flex-col items-start justify-between bg-[#FFFFFF] pt-4 xs:gap-7 md:min-w-[30%] lg:max-w-[30%]">
          <div className="m-auto flex w-[90%] flex-col justify-center">
            <div className="flex flex-col gap-1 px-3 lg:mt-[2rem]">
              <span className="text-lg font-semibold">
                Step {currentPage} of 6
              </span>
              <div className="flex gap-2">
                <button
                  className={`flex h-2 w-10 items-center justify-center rounded-full ${currentPage >= 1 ? "bg-[#2E3192] text-white" : "bg-gray-300"}`}
                ></button>

                <button
                  className={`flex h-2 w-10 items-center justify-center rounded-full ${currentPage >= 2 ? "bg-[#2E3192] text-white" : "bg-gray-300"}`}
                ></button>

                <button
                  className={`flex h-2 w-10 items-center justify-center rounded-full ${currentPage >= 3 ? "bg-[#2E3192] text-white" : "bg-gray-300"}`}
                ></button>

                <button
                  className={`flex h-2 w-10 items-center justify-center rounded-full ${currentPage >= 4 ? "bg-[#2E3192] text-white" : "bg-gray-300"}`}
                ></button>

                {/* <button
                className={`flex h-2 w-10 items-center justify-center rounded-full ${currentPage >= 5 ? "bg-[#2E3192] text-white" : "bg-gray-300"}`}
                onClick={() => setCurrentPage(5)}
              ></button> */}

                <button
                  className={`flex h-2 w-10 items-center justify-center rounded-full ${currentPage >= 5 ? "bg-[#2E3192] text-white" : "bg-gray-300"}`}
                ></button>
                <button
                  className={`flex h-2 w-10 items-center justify-center rounded-full ${currentPage >= 6 ? "bg-[#2E3192] text-white" : "bg-gray-300"}`}
                ></button>
              </div>
            </div>
          </div>
          <div className="m-auto flex h-[50%] w-[90%] flex-col items-start justify-center gap-9 px-3 md:px-6">
            <h1 className="text-2xl font-bold md:text-4xl">
              {currentPage === 1 && "Fill out event details"}
              {currentPage === 2 && "Fill out themes related details "}
              {currentPage === 3 && "Fill out theme elements details"}
              {currentPage === 4 && "Fill out your ratings and reviews"}
              {currentPage === 5 && "Fill out Some Mandatory details"}
              {currentPage === 6 && "Preview details"}
            </h1>
            <p className="text-xl text-black">
              {currentPage === 1 && "Select the types of events you cover "}
              {currentPage === 2 &&
                "Provide the details of the themes you offer and related details."}
              {currentPage === 3 &&
                "Provide the details of the themes elements you provide and describe it in detail."}
              {currentPage === 4 &&
                "Fill out the details or upload the links/pdf if available."}
              {currentPage === 5 &&
                "Fill out the details or upload the links/pdf if available."}
              {currentPage === 6 &&
                "Please recheck the information provided by you. "}
            </p>
          </div>
          <div className="relative h-[10rem] lg:w-full">
            <Image
              src={
                "https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/vendor_onboarding/tajmahal.png"
              }
              alt=""
              width={400}
              height={200}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      )}
      <div className="flex min-w-[70%] flex-col items-center justify-center bg-[#F7F6F9] p-6 md:p-12">
        {renderPage()}
      </div>
    </div>
  );
};

export default Decorators;
