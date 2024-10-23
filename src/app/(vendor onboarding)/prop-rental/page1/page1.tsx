"use client";

import React, { SetStateAction } from "react";
import Dropdown from "../../(components)/Dropdown";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/store";
import { fetchRentalData, saveRentalDetails } from "@/redux/prop-rentalSlice";
import jwt from "jsonwebtoken";

const workerOptions = [
  { value: "0-2 Members", label: "0-2 Members" },
  { value: "2-4 Members", label: "2-4 Members" },
  { value: "4-7 Members", label: "4-7 Members" },
  { value: "More than 10 Members", label: "More than 10 Members" },
];
const eventOptions = [
  "Less than 50",
  "50-100 persons",
  "100-300 persons",
  "More than 300 ",
];

interface FormState {
  managerName: string;
  workDescription: string;
  eventSize: string;
  handleChange: (key: string, value: any) => void;
  itemCatalogue: boolean | File;
  customization: boolean;
  maintenance: string;
  services: string;
  furnitureAndDecorListUrl: string | File;
  tentAndCanopyListUrl: string | File;
  audioVisualListUrl: string | File;
  photos: string | File | File[];
  videos: string | File | File[];
  awardsAndRecognize: string;
  clientTestimonial: string;
  instaUrl: string;
  websiteUrl: string;
  termsAndConditions: string | File | File[];
  cancellationPolicy: string | File | File[];
}

type PricingEntry = {
  name: string;
  min: number;
  max: number;
};

type page1Props = {
  formState: FormState;
  handleChange: (key: string, value: any) => void;
  handleNestedChange: (key: string, nestedKey: string, value: any) => void;
  navigateToPage: (page: number) => void;

  currentPage: number;
  setCurrentPage: (value: any) => void;
  handleSubmit: () => void;
};

const Page1: React.FC<page1Props> = ({
  formState,
  handleChange,
  currentPage,
  setCurrentPage,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { formData, loading, error } = useSelector(
    (state: RootState) => state["prop-rental"],
  );

  // Fetch rental data on mount
  useEffect(() => {
    const userId = getVendorId();
    if (userId) {
      dispatch(fetchRentalData(userId));
    }
  }, [dispatch]);

  // Update form state with fetched data
  useEffect(() => {
    if (formData) {
      if (formData.managerName) {
        handleChange("managerName", formData.managerName);
      }
      if (formData.eventSize) {
        handleChange("eventSize", formData.eventSize);
      }
      if (formData.workDescription) {
        handleChange("workDescription", formData.workDescription);
      }
    }
  }, [formData]);

  const handleSave = () => {
    const userId = getVendorId() || "";
    const venueDetails = {
      userId: userId,
      managerName: formState.managerName || "",
      eventSize: formState.eventSize || "",
      workDescription: formState.workDescription || "",
    };

    dispatch(saveRentalDetails({ userId, data: venueDetails }) as any);
  };

  const onContinue = () => {
    handleSave(); // Save the rental details before continuing
    setCurrentPage(currentPage + 1); // Move to the next page
  };

  function getVendorId(): string | null {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Token not found");
      return null;
    }
    try {
      const decodedToken = jwt.decode(token) as {
        userId?: string;
      };
      return decodedToken?.userId || null;
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  }

  return (
    <>
      <div className="scroll-touch flex w-full flex-col items-start gap-5 overflow-y-scroll rounded-xl bg-white p-3 scrollbar-hide xs:justify-start md:p-6">
        <h1 className="text-2xl font-semibold">Basic Details</h1>

        <div className="flex min-w-full flex-col items-center gap-9 p-2">
          <div className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row">
            <div className="flex min-w-[50%] flex-col gap-2">
              <label className="text-base font-medium" htmlFor="vendorName">
                Manager Name (POC)<span className="text-red-500">*</span>
              </label>
              <input
                id="vendorName"
                type="text"
                value={formState.managerName || ""}
                onChange={(e) => handleChange("managerName", e.target.value)}
                className="w-full rounded-xl border-2 bg-white p-4 outline-none"
                placeholder="Enter the full name"
              />
            </div>
            <div className="flex min-w-[50%] flex-col gap-2">
              <label htmlFor="eventSize">Event Size</label>
              <Dropdown
                options={eventOptions}
                onSelect={(option: string) => {
                  handleChange("eventSize", option);
                }}
                placeholder="Select event size you cover"
                selectedOption={formState.eventSize}
              />
            </div>
          </div>
        </div>
        <div className="flex min-w-[50%] flex-col gap-9 p-2">
          <div className="flex min-w-[50%] flex-col gap-2">
            <label className="text-base font-medium" htmlFor="workDescription">
              Description about you
            </label>
            <textarea
              cols={30}
              rows={5}
              value={formState.workDescription || ""}
              onChange={(e) => handleChange("workDescription", e.target.value)}
              className="h-full w-full rounded-xl border-2 bg-white p-4 outline-none"
              placeholder="Enter your Description"
            />
          </div>
        </div>

        {/* Next Button */}
        <div className="items-strech flex flex-row gap-7 self-end">
          <button
            onClick={() => {
              setCurrentPage(currentPage + 1);
              onContinue();
            }}
            className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Page1;
