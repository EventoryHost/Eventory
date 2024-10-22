"use client";

import React, { useState } from "react";
import Image from "next/image";
import jwt from "jsonwebtoken";

import Page1 from "./page1/page1";
import Page2 from "./page2/page2";
import Page3 from "./page3/page3";
import Page4 from "./page4/page4";
import Page6 from "./page6/page6";
import { addVenue } from "../../../services/vendors/venue";
import Agreement from "../(Agreement)/Agreement";
import Plans from "../(Plans)/Plans";
import Registration_Completed from "../(Registration-Completed)/thankupage";

interface Package {
  type: string;
  priceRange: [number, number];
}

export interface FormState {
  name: string;
  managerName: string;
  capacity: string;
  operatingHours: {
    openingTime?: string;
    closingTime?: string;
  };
  address: string;
  venueDescription: string;
  catererServices: boolean | null;
  decorServices: boolean | null;
  termsConditions: string | File | File[];
  cancellationPolicy: string | File | File[];
  insurancePolicy: string | File | File[];
  photos: string | File | File[];
  videos: string | File | File[];
  instagramURL: string;
  websiteURL: string;
  awards: string;
  clientTestimonials: string;
  advanceBookingPeriod: string;
}

const VenueForm: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // global varibales
  const [formState, setFormState] = useState<FormState>({
    name: "",
    managerName: "",
    capacity: "",
    catererServices: null,
    decorServices: null,
    insurancePolicy: "",
    photos: [],
    videos: [],
    awards: "",
    clientTestimonials: "",
    advanceBookingPeriod: "",

    address: "",
    operatingHours: {
      openingTime: "",
      closingTime: "",
    },
    venueDescription: "",

    termsConditions: "",
    cancellationPolicy: "",

    instagramURL: "",
    websiteURL: "",
  });

  const updateFormState = (newState: Partial<FormState>) => {
    setFormState((prev) => ({ ...prev, ...newState }));
  };

  const [audioVisualEquipment, setAudioVisualEquipment] = useState<string[]>(
    [],
  );
  const [accessibilityFeatures, setAccessibilityFeatures] = useState<string[]>(
    [],
  );
  const [facilities, setFacilities] = useState<string[]>([]);
  const [restrictionsPolicies, setRestrictionsPolicies] = useState<string[]>(
    [],
  );
  const [specialFeatures, setSpecialFeatures] = useState<string[]>([]);

  const [venueTypes, setVenueTypes] = useState<string[]>([]);

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

  const handleSubmit = async () => {
    if (!formState.managerName) {
      console.error("Manager Name is required");
      return;
    }
    const formData = new FormData();

    formData.append("venId", getVendorId()!);
    formData.append("name", formState.name);
    formData.append("managerName", formState.managerName);
    formData.append("capacity", formState.capacity);

    formData.append(
      "operatingHours[openingTime]",
      formState.operatingHours.openingTime ?? "",
    );
    formData.append(
      "operatingHours[closingTime]",
      formState.operatingHours.closingTime ?? "",
    );
    formData.append("address", formState.address);
    formData.append("venueDescription", formState.venueDescription);
    formData.append(
      "catererServices",
      formState.catererServices !== null
        ? String(formState.catererServices)
        : "",
    );

    formData.append(
      "decorServices",
      formState.decorServices !== null ? String(formState.decorServices) : "",
    );

    // Venue Types (Array)
    venueTypes.forEach((item, index) => {
      formData.append(`venueTypes[${index}]`, item);
    });

    // Audio Visual Equipment (Array)
    audioVisualEquipment.forEach((item, index) => {
      formData.append(`audioVisualEquipment[${index}]`, item);
    });

    // Accessibility Features (Array)
    accessibilityFeatures.forEach((item, index) => {
      formData.append(`accessibilityFeatures[${index}]`, item);
    });

    // Restrictions Policies (Array)
    restrictionsPolicies.forEach((item, index) => {
      formData.append(`restrictionsPolicies[${index}]`, item);
    });

    // Special Features (Array)
    specialFeatures.forEach((item, index) => {
      formData.append(`specialFeatures[${index}]`, item);
    });

    // Facilities (Array)
    facilities.forEach((item, index) => {
      formData.append(`facilities[${index}]`, item);
    });

    if (Array.isArray(formState.termsConditions)) {
      formState.termsConditions.forEach((file) => {
        formData.append("termsConditions", file); // No index here
      });
    } else {
      formData.append("termsConditions", formState.termsConditions);
    }

    if (Array.isArray(formState.cancellationPolicy)) {
      formState.cancellationPolicy.forEach((file) => {
        formData.append("cancellationPolicy", file);
      });
    } else {
      formData.append("cancellationPolicy", formState.cancellationPolicy);
    }

    if (Array.isArray(formState.insurancePolicy)) {
      formState.insurancePolicy.forEach((file) => {
        formData.append("insurancePolicy", file); // No index here
      });
    } else {
      formData.append("insurancePolicy", formState.insurancePolicy);
    }

    // Handle photos field
    if (Array.isArray(formState.photos)) {
      formState.photos.forEach((file) => {
        if (file instanceof File) {
          formData.append("photos", file); // Append as 'photos' without the array index
        }
      });
    } else if (typeof formState.photos === "string") {
      formData.append("photos", formState.photos); // Append the string (URL)
    }

    // Handle videos field
    if (Array.isArray(formState.videos)) {
      formState.videos.forEach((file) => {
        if (file instanceof File) {
          formData.append("videos", file); // Append as 'videos' without the array index
        }
      });
    } else if (typeof formState.videos === "string") {
      formData.append("videos", formState.videos); // Append the string (URL)
    }

    // Social Links
    formData.append("socialLinks[instagramURL]", formState.instagramURL);
    formData.append("socialLinks[websiteURL]", formState.websiteURL);

    // Awards and Client Testimonials
    formData.append("awards", formState.awards);
    formData.append("clientTestimonials", formState.clientTestimonials);

    // Advanced Booking Period
    formData.append("advanceBookingPeriod", formState.advanceBookingPeriod);

    // For debugging
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
          <Page1
            formState={formState}
            updateFormState={updateFormState}
            handleContinue={() => {
              setCurrentPage(2);
            }}
            address={formState.address}
            operatingHours={formState.operatingHours}
          />
        );
      case 2:
        return (
          <Page2
            formState={formState}
            updateFormState={updateFormState}
            catererServices={formState.catererServices}
            decorServices={formState.decorServices}
            venueTypes={venueTypes}
            setVenueTypes={setVenueTypes}
            audioVisualEquipment={audioVisualEquipment}
            setAudioVisualEquipment={setAudioVisualEquipment}
            accessibilityFeatures={accessibilityFeatures}
            setAccessibilityFeatures={setAccessibilityFeatures}
            restrictionsPolicies={restrictionsPolicies}
            setRestrictionsPolicies={setRestrictionsPolicies}
            facilities={facilities}
            setFacilities={setFacilities}
            specialFeatures={specialFeatures}
            setSpecialFeatures={setSpecialFeatures}
            handleContinue={() => {
              setCurrentPage(3);
            }}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        );
      case 3:
        return (
          <Page3
            formState={formState}
            updateFormState={updateFormState}
            handleContinue={() => {
              setCurrentPage(4);
            }}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            photos={formState.photos}
            videos={formState.videos}
            awards={formState.awards}
            clientTestimonials={formState.clientTestimonials}
            instagramURL={formState.instagramURL}
            websiteURL={formState.websiteURL}
            advanceBookingPeriod={formState.advanceBookingPeriod}
          />
        );
      case 4:
        return (
          <Page4
            formState={formState}
            updateFormState={updateFormState}
            handleContinue={() => {
              setCurrentPage(5);
            }}
            termsConditions={formState.termsConditions}
            cancellationPolicy={formState.cancellationPolicy}
            insurancePolicy={formState.insurancePolicy}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        );

      case 5:
        return (
          <Page6
            handleContinue={() => {
              setCurrentPage(6);
            }}
            formState={formState}
            updateFormState={updateFormState}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            address={formState.address}
            operatingHours={formState.operatingHours}
            catererServices={formState.catererServices}
            decorServices={formState.decorServices}
            venueTypes={venueTypes}
            audioVisualEquipment={audioVisualEquipment}
            accessibilityFeatures={accessibilityFeatures}
            restrictionsPolicies={restrictionsPolicies}
            facilities={facilities}
            specialFeatures={specialFeatures}
            photos={formState.photos}
            videos={formState.videos}
            awards={formState.awards}
            clientTestimonials={formState.clientTestimonials}
            instagramURL={formState.instagramURL}
            websiteURL={formState.websiteURL}
            advanceBookingPeriod={formState.advanceBookingPeriod}
            termsConditions={formState.termsConditions}
            cancellationPolicy={formState.cancellationPolicy}
            insurancePolicy={formState.insurancePolicy}
          />
        );
      case 6:
        return (
          <>
            <Agreement
              // currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </>
        );
      case 7:
        return (
          <>
            <Plans
              setCurrentPage={setCurrentPage}
              handleformSubmit={handleSubmit}
            />
          </>
        );
      case 8:
        return (
          <>
            <Registration_Completed />
          </>
        );
      default:
        return (
          <Page1
            formState={formState}
            updateFormState={updateFormState}
            handleContinue={() => {
              setCurrentPage(2);
            }}
            address={formState.address}
            operatingHours={formState.operatingHours}
          />
        );
    }
  };

  return (
    <div
      className={`m-0 flex w-full flex-col overflow-x-hidden ${currentPage <= 7 ? "lg:h-[calc(100vh-4.2rem)]" : ""} lg:flex-row`}
    >
      {currentPage <= 5 && (
        <div className="flex flex-col items-start justify-between bg-[#FFFFFF] pt-4 xs:gap-7 md:min-w-[30%] lg:max-w-[30%]">
          <div className="m-auto flex w-[90%] flex-col justify-center">
            <div className="flex flex-col gap-1 px-3 lg:mt-[2rem]">
              <span className="text-lg font-semibold">
                Step {currentPage} of 5
              </span>
              <div className="flex gap-2">
                <button
                  className={`flex h-2 w-10 items-center justify-center rounded-full ${
                    currentPage >= 1 ? "bg-[#2E3192] text-white" : "bg-gray-300"
                  }`}
                ></button>

                <button
                  className={`flex h-2 w-10 items-center justify-center rounded-full ${
                    currentPage >= 2 ? "bg-[#2E3192] text-white" : "bg-gray-300"
                  }`}
                ></button>

                <button
                  className={`flex h-2 w-10 items-center justify-center rounded-full ${
                    currentPage >= 3 ? "bg-[#2E3192] text-white" : "bg-gray-300"
                  }`}
                ></button>

                <button
                  className={`flex h-2 w-10 items-center justify-center rounded-full ${
                    currentPage >= 4 ? "bg-[#2E3192] text-white" : "bg-gray-300"
                  }`}
                ></button>

                <button
                  className={`flex h-2 w-10 items-center justify-center rounded-full ${
                    currentPage >= 5 ? "bg-[#2E3192] text-white" : "bg-gray-300"
                  }`}
                ></button>
              </div>
            </div>
          </div>
          <div className="m-auto flex h-[50%] w-[90%] flex-col items-start justify-center gap-9 px-3 md:px-6">
            <h1 className="text-2xl font-bold md:text-4xl">
              Fill out your Venue details
            </h1>
            <p className="text-xl text-black">
              Please Provide details of the venue provided by your company.
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

      <div className="flex min-w-[70%] flex-col items-center justify-center bg-[#F7F6F9] p-2 md:p-12">
        {renderPage()}
      </div>
    </div>
  );
};

export default VenueForm;
