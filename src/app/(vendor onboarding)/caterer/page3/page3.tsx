"use client";

import { ArrowLeft } from "lucide-react";
import Appetizers from "../../(components)/Appetizers";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { FormState } from "../page";
import { fetchCateringData, updateFormData , saveCateringDetails } from "@/redux/cateringSlice";
import jwt from "jsonwebtoken";

const _EventTypes = [
  "Corporate",
  "Birthdays",
  "Anniversary",
  "Others",
  "Weddings",
];

const _additionalServices = [
  "Table Setting and Decoration",
  "Live Cooking Stations",
  "Bartending",
  "Food Packing for Guests",
  "Cleanup Services",
  "Others",
];

interface page3Props {
  selectedEventTypes: string[];
  setSelectedEventTypes: React.Dispatch<React.SetStateAction<string[]>>;
  selectedAdditionalServices: string[];
  setSelectedAdditionalServices: React.Dispatch<React.SetStateAction<string[]>>;
  handleContinue: () => void;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  formState: FormState;
  updateFormState: (newState: Partial<FormState>) => void;  
}
const Page3: React.FC<page3Props> = ({
  selectedEventTypes,
  setSelectedEventTypes,
  selectedAdditionalServices,
  setSelectedAdditionalServices,
  handleContinue,
  setCurrentPage,
  currentPage,
  formState,
  updateFormState
}) => {

  const dispatch = useDispatch();
  const { formData } = useSelector((state: RootState) => state.catering);
  function getVendorId2(): string | null {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Token not found");
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
  const userId = getVendorId2() || "";

useEffect(() => {

    // Fetch data when Page 3 mounts
    if (userId) {
      dispatch(fetchCateringData(userId) as any);
    }
  }, [dispatch]);

  useEffect(() => {
    if (formData) {
      // Update local state based on fetched formData
      if (!selectedEventTypes.length) {
        setSelectedEventTypes(formData.eventTypes || []);
      }
      if (!selectedAdditionalServices.length) {
        setSelectedAdditionalServices(formData.additionalServices || []);
      }
    }
  }, [formData, selectedEventTypes, selectedAdditionalServices, setSelectedEventTypes, setSelectedAdditionalServices]);

  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const dataToSave = {
      ...formData,
      eventTypes: selectedEventTypes,
      additionalServices: selectedAdditionalServices,
    };
    dispatch(saveCateringDetails({ userId, data: dataToSave }) as any);
    handleContinue();
  };

  return (
    <div className="scroll-touch items-strech flex w-[100%] flex-col gap-9 overflow-y-scroll bg-[#F7F6F9] scrollbar-hide">
      <div className="flex flex-col gap-6 rounded-xl bg-white p-3 md:p-6">
        <div className="flex items-center gap-4">
          <ArrowLeft
            className="ml-2 mr-1 h-6 w-6 cursor-pointer text-[#2E3192]"
            aria-hidden="true"
            onClick={() => setCurrentPage(currentPage - 1)}
          />
          <h1 className="text-2xl font-semibold">Event Details</h1>
        </div>
        <label htmlFor="category" className="text-xl font-medium">
          Event Types Catered:<span className="text-red-500">*</span>
        </label>

        <div className="flex min-h-full min-w-full flex-col items-center gap-5">
          <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
            <Appetizers
              field={"EventTypes"}
              appetizers={_EventTypes}
              selectedAppetizers={selectedEventTypes}
              setSelectedAppetizers={setSelectedEventTypes}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
        <label htmlFor="category" className="text-xl font-medium">
          Additional Services
        </label>

        <div className="flex min-h-full min-w-full flex-col items-center">
          <div className="my-4 flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
            <Appetizers
              field={"additionalServices"}
              appetizers={_additionalServices}
              selectedAppetizers={selectedAdditionalServices}
              setSelectedAppetizers={setSelectedAdditionalServices}
            />
          </div>
          <div className="items-strech flex flex-row gap-7 self-end">
            <button
              className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
              onClick={handleSubmit}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
