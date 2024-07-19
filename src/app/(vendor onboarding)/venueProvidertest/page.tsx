"use client";
// venueProvider/VenueForm.tsx
import React, { useState } from "react";
import Page1 from "./page1/page";
import Page2 from "./page2/page";
import Page3 from "./page3/page";
import Page4 from "./page4/page";
import Page5 from "./page5/page";
import { addVenue } from "../../../services/vendors/venue";
import PriceSlider from "./(components)/priceSlider";

interface Package {
  type: string;
  priceRange: [number, number];
}

interface FormState {
  venueType: string;
  seatingCapacity: string;
  standingCapacity: string;
  startOperatingHours: string;
  endOperatingHours: string;
  venueDescription: string;
  decorType: string;
  termsAndConditions: string;
  cancellationPolicy: string;
  instaURL: string;
  websiteURL: string;
}

const VenueForm: React.FC = () => {

  const [currentPage, setCurrentPage] = useState(1);

  // global varibales
  const [formState, setFormState] = useState<FormState>({
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
  });

  const updateFormState = (newState: Partial<FormState>) => {
    setFormState((prev) => ({ ...prev, ...newState }));
  };



  const [hourlyPackages, setHourlyPackages] = useState<Package[]>([
    { type: "", priceRange: [10000, 1000000] },
  ]);

  const [dailyPackages, setDailyPackages] = useState<Package[]>([
    { type: "", priceRange: [20000, 100000] },
  ]);

  const [seasonalPackages, setSeasonalPackages] = useState<Package[]>([
    { type: "", priceRange: [50000, 600000] },
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


  

  const handleSubmit = async () => {
    const formData = new FormData();

    formData.append("id", "321"); // Ensure this ID is unique and valid
  formData.append("name", formState.venueType);
  formData.append("operatingHours[openingTime]", formState.startOperatingHours);
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
    await addVenue(formData);
    console.log("Venue added successfully");
  } catch (error) {
    console.error("Error adding venue:", error);
  }

  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <Page1 formState={formState} updateFormState={updateFormState} />
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
          />
        );
      case 3:
        return (
          <Page3 formState={formState} updateFormState={updateFormState} />
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
      default:
        return (
          <Page1 formState={formState} updateFormState={updateFormState} />
        );
    }
  };

  return (
    <div>
      {renderPage()}
      <div className="ml-10 mt-9 flex flex-row items-center justify-center gap-7">
        {currentPage > 1 && (
          <button
            className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:w-fit xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>
        )}
        {currentPage < 5 && (
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
          >
            Next
          </button>
        )}
        {currentPage === 5 && (
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
