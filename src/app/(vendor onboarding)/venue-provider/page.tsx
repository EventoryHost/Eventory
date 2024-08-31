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

interface FormState {
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
            handleSubmit={handleSubmit}
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
    <div>
      {renderPage()}
      <div className="my-9 mr-[5%] flex flex-row justify-end gap-7">
        {currentPage > 1 && (
          <button
            className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:w-fit xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>
        )}
        {currentPage < 6 && (
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
          >
            Next
          </button>
        )}
        {currentPage === 6 && (
          <button
            onClick={handleSubmit}
            className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default VenueForm;
