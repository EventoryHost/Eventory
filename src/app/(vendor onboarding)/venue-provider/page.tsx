"use client";

import React, { useState } from "react";
import Image from "next/image";
import jwt from "jsonwebtoken";

import Page1 from "./page1/page1";
import Page2 from "./page2/page2";
import Page3 from "./page3/page3";
import Page4 from "./page4/page4";
import Page5 from "./page5/page5";
import Page6 from "./page6/page6";
import { addVenue } from "../../../services/vendors/venue";

interface Package {
  type: string;
  priceRange: [number, number];
}

export interface FormState {
  venueName: string;
  VenueAddress: string;
  venueType: string;
  seatingCapacity: string;
  standingCapacity: string;
  startOperatingHours: string;
  endOperatingHours: string;
  venueDescription: string;
  decorType: string;
  termsAndConditions: string | File;
  cancellationPolicy: string | File;
  instaURL: string;
  websiteURL: string;
  audioVisualEquipment: string[];
  accessibilityFeatures: string[];
  facilities: string[];
  hourlyPackages: Package[];
  dailyPackages: Package[];
  seasonalPackages: Package[];
  _venue_restrictions: string[];
  _venue_special_features: string[];
}

const VenueForm: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // global varibales
  const [formState, setFormState] = useState<FormState>({
    venueName: "",
    VenueAddress: "",
    venueType: "",
    seatingCapacity: "",
    standingCapacity: "",
    startOperatingHours: "",
    endOperatingHours: "",
    venueDescription: "",
    decorType: "",

    termsAndConditions: "",
    cancellationPolicy: "",

    instaURL: "",
    websiteURL: "",
    audioVisualEquipment: [],
    accessibilityFeatures: [],
    facilities: [],
    hourlyPackages: [{ type: "", priceRange: [0, 0] }],
    dailyPackages: [{ type: "", priceRange: [0, 0] }],
    seasonalPackages: [{ type: "", priceRange: [0, 0] }],
    _venue_restrictions: [],
    _venue_special_features: [],
  });

  const updateFormState = (newState: Partial<FormState>) => {
    setFormState((prev) => ({ ...prev, ...newState }));
  };

  const [hourlyPackages, setHourlyPackages] = useState<Package[]>([
    { type: "", priceRange: [0, 0] },
  ]);

  const [dailyPackages, setDailyPackages] = useState<Package[]>([
    { type: "", priceRange: [0, 0] },
  ]);

  const [seasonalPackages, setSeasonalPackages] = useState<Package[]>([
    { type: "", priceRange: [0, 0] },
  ]);

  const [audioVisualEquipment, setAudioVisualEquipment] = useState<string[]>(
    [],
  );
  const [accessibilityFeatures, setAccessibilityFeatures] = useState<string[]>(
    [],
  );
  const [facilities, setFacilities] = useState<string[]>([]);

  const [venue_restrictions, setVenue_restrictions] = useState<string[]>([]);
  const [venue_special_features, setVenue_special_features] = useState<
    string[]
  >([]);

  //global functions
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
      venueName: formState.venueName,
      venueType: formState.venueType,
      startOperatingHours: formState.startOperatingHours,
      endOperatingHours: formState.endOperatingHours,
      venueDescription: formState.venueDescription,
      seatingCapacity: formState.seatingCapacity,
      standingCapacity: formState.standingCapacity,
      decorType: formState.decorType,
    });
  };

  const handleSubmit = async () => {
    const formData = new FormData();

    formData.append("id", getVendorId()!); // Ensure this ID is unique and valid
    formData.append("name", formState.venueName);
    formData.append("venueType", formState.venueType);
    formData.append(
      "operatingHours[openingTime]",
      formState.startOperatingHours,
    );
    formData.append("operatingHours[closingTime]", formState.endOperatingHours);
    formData.append("venueDescription", formState.venueDescription);
    formData.append("seatedCapacity", formState.seatingCapacity); // Ensure this is a string
    formData.append("standingCapacity", formState.standingCapacity); // Ensure this is a string
    formData.append("decorServices", formState.decorType);
    formData.append("termsConditions", formState.termsAndConditions);
    formData.append("cancellationPolicy", formState.cancellationPolicy);
    formData.append("socialLinks[instagramURL]", formState.instaURL);
    formData.append("socialLinks[websiteURL]", formState.websiteURL);

    audioVisualEquipment.forEach((item, index) => {
      formData.append(`audioVisualEquipment[${index}]`, item);
    });

    accessibilityFeatures.forEach((item, index) => {
      formData.append(`accessibilityFeatures[${index}]`, item);
    });

    facilities.forEach((item, index) => {
      formData.append(`facilities[${index}]`, item);
    });

    venue_restrictions.forEach((item, index) => {
      formData.append(`restrictionsPolicies[${index}]`, item);
    });

    venue_special_features.forEach((item, index) => {
      formData.append(`specialFeatures[${index}]`, item);
    });

    hourlyPackages.forEach((pkg, index) => {
      formData.append(`rates[hourly][${index}]`, JSON.stringify(pkg));
    });

    dailyPackages.forEach((pkg, index) => {
      formData.append(`rates[daily][${index}]`, JSON.stringify(pkg));
    });

    seasonalPackages.forEach((pkg, index) => {
      formData.append(`rates[seasonal][${index}]`, JSON.stringify(pkg));
    });

    //for debugging
    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });

    try {
      // await addVenue(formData);
      console.log("Venue added successfully");
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
            audioVisualEquipment={audioVisualEquipment}
            setAudioVisualEquipment={setAudioVisualEquipment}
            accessibilityFeatures={accessibilityFeatures}
            setAccessibilityFeatures={setAccessibilityFeatures}
            facilities={facilities}
            setFacilities={setFacilities}
            handleContinue={() => {
              setCurrentPage(3);
              handleContinue();
            }}
          />
        );
      case 3:
        console.log("Upload termsAndConditions:", formState.termsAndConditions);
        return (
          <Page3
            formState={formState}
            updateFormState={updateFormState}
            handleContinue={() => {
              setCurrentPage(4);
              handleContinue();
            }}
          />
        );
      case 4:
        return (
          <Page4
            hourlyPackages={hourlyPackages}
            setHourlyPackages={setHourlyPackages}
            dailyPackages={dailyPackages}
            setDailyPackages={setDailyPackages}
            seasonalPackages={seasonalPackages}
            setSeasonalPackages={setSeasonalPackages}
            handlePackageChange={handlePackageChange}
            addPackage={addPackage}
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
            venue_restrictions={venue_restrictions}
            setVenue_restrictions={setVenue_restrictions}
            venue_special_features={venue_special_features}
            setVenue_special_features={setVenue_special_features}
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
            handleSubmit={handleSubmit}
            audioVisualEquipment={audioVisualEquipment}
            accessibilityFeatures={accessibilityFeatures}
            facilities={facilities}
            hourlyPackages={hourlyPackages}
            dailyPackages={dailyPackages}
            seasonalPackages={seasonalPackages}
            _venue_restrictions={venue_restrictions}
            _venue_special_features={venue_special_features}
          />
        );
      default:
        return (
          <Page1
            formState={formState}
            updateFormState={updateFormState}
            handleContinue={() => {
              setCurrentPage(2);
              handleContinue();
            }}
          />
        );
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

export default VenueForm;
