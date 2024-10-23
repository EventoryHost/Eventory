"use client";
import React, { useState } from "react";
import Appetizers from "../../(components)/Appetizers";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { fetchPavData, savePavDetails } from "@/redux/pavSlice";
import jwt from "jsonwebtoken";

const styles = [
  "Aerial",
  "Black and White",
  "Candid",
  "Conceptual",
  "Contemporary",
  "Documentary",
  "Fashion",
  "Fine Art",
  "Lifestyle",
  "Portrait",
  "Street",
  "Traditional",
  "Vintage",
];

const Addonslist = [
  "Photo Albums",
  "Highlight Videos",
  "Teasers",
  "Extra Hours Of Coverage",
  "Others",
];

const FinalDeliveryMethodslist = [
  "Google Drive Link",
  "Physical Prints",
  "Hardware",
  "Others",
];

const equipments = [
  "Audio Recording",
  "Ambient Lighting",
  "Colour Washes",
  "Custom Soundtracks",
  "Custom Lighting Design",
  "Dj Services",
  "Led Screens",
  "Lenses",
  "Lighting Equipments",
  "Lighting Services",
  "Microphones",
  "Sound Services",
  "Speakers",
  "Spotlighting",
  "Special Effects",
  "Tripods",
  "Others",
];

type Page1Props = {
  photoSelectedstyles: string[];
  setphotoSelectedstyles: React.Dispatch<React.SetStateAction<string[]>>;
  photoequipments: string[];
  setphotoEquipments: React.Dispatch<React.SetStateAction<string[]>>;
  photoAddons: string[];
  setphotoAddons: React.Dispatch<React.SetStateAction<string[]>>;
  photofinaldeliverymethods: string[];
  setphotoFinaldeliverymethods: React.Dispatch<React.SetStateAction<string[]>>;
  videoSelectedstyles: string[];
  setvideoStyles: React.Dispatch<React.SetStateAction<string[]>>;
  Selectedvideoequipments: string[];
  setvideoSelectedEquipments: React.Dispatch<React.SetStateAction<string[]>>;
  videoAddons: string[];
  setvideoAddons: React.Dispatch<React.SetStateAction<string[]>>;
  videofinaldeliverymethods: string[];
  setvideoFinaldeliverymethods: React.Dispatch<React.SetStateAction<string[]>>;
  handleContinue: () => void;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  togglesection: boolean;
  settogglesection: (togglesection: boolean) => void;
};

const Page1 = ({
  photoSelectedstyles,
  setphotoSelectedstyles,
  photoequipments,
  setphotoEquipments,
  photoAddons,
  setphotoAddons,
  photofinaldeliverymethods,
  setphotoFinaldeliverymethods,
  videoSelectedstyles,
  setvideoStyles,
  Selectedvideoequipments,
  setvideoSelectedEquipments,
  videoAddons,
  setvideoAddons,
  videofinaldeliverymethods,
  setvideoFinaldeliverymethods,
  togglesection,
  settogglesection,
  setCurrentPage,
  handleContinue,
}: Page1Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { formData, loading, error } = useSelector(
    (state: RootState) => state["pav"],
  );

  // Fetch rental data on mount
  useEffect(() => {
    const userId = getVendorId();
    if (userId) {
      dispatch(fetchPavData(userId));
    }
  }, [dispatch]);

  // Update form state with fetched data for Page 2
  useEffect(() => {
    if (formData) {
      // for (const [key, value] of Object.entries(formData)) {
      //   console.log(`${key}: ${value}`);
      // }

      if (formData.photoSelectedstyles !== undefined) {
        setphotoSelectedstyles(formData.photoSelectedstyles);
      }
      if (formData.photoequipments !== undefined) {
        setphotoEquipments(formData.photoequipments);
      }
      if (formData.photoAddons !== undefined) {
        setphotoAddons(formData.photoAddons);
      }
      if (formData.photoFinalDeliveryMethods !== undefined) {
        setphotoFinaldeliverymethods(formData.photoFinalDeliveryMethods);
      }
      if (formData.videoSelectedstyles !== undefined) {
        setvideoStyles(formData.videoSelectedstyles);
      }
      if (formData.videoEquipments !== undefined) {
        setvideoSelectedEquipments(formData.videoEquipments);
      }
      if (formData.videoAddons !== undefined) {
        setvideoAddons(formData.videoAddons);
      }
      if (formData.videoFinalDeliveryMethods !== undefined) {
        setvideoFinaldeliverymethods(formData.videoFinalDeliveryMethods);
      }
      if (formData.Selectedvideoequipments !== undefined) {
        setvideoSelectedEquipments(formData.Selectedvideoequipments);
      }
      if (formData.photofinaldeliverymethods !== undefined) {
        setphotoFinaldeliverymethods(formData.photofinaldeliverymethods);
      }
      if (formData.videofinaldeliverymethods !== undefined) {
        setvideoFinaldeliverymethods(formData.videofinaldeliverymethods);
      }
    }
  }, [formData]);

  const handleSave = () => {
    const userId = getVendorId();
    if (!userId) {
      console.error("User ID is missing");
      return;
    }

    const updatedFormState = {
      photoSelectedstyles,
      photoequipments,
      photoAddons,
      photofinaldeliverymethods,
      videoSelectedstyles,
      equipments,
      videoAddons,
      videofinaldeliverymethods,
      Selectedvideoequipments,
    };

    // Dispatch an action to save the updated form data for page 2
    dispatch(savePavDetails({ userId, data: updatedFormState }) as any);
  };

  const onContinue = async () => {
    await handleSave();
    handleContinue();
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
    <div
      className="scroll-touch flex flex-col items-start gap-7 overflow-y-scroll rounded-xl p-3 scrollbar-hide xs:justify-start md:p-6"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="flex w-[100%] flex-col justify-start rounded-xl bg-white p-5">
        <div className="flex items-center justify-start gap-5">
          <ArrowLeft
            className="ml-2 mr-1 h-6 w-6 cursor-pointer text-[#2E3192]"
            aria-hidden="true"
            onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
          />

          <h1 className="text-3xl font-semibold">Fill Out Following Details</h1>
        </div>
        <div className="mt-6 flex h-[60px] w-max space-x-2 rounded-full border-[1px] border-[hsl(0,0%,25%)] p-2">
          <div
            className={`font-helvetica cursor-pointer rounded-full px-8 py-2 font-normal transition-all duration-300 ${togglesection ? "bg-[#2E3192] text-white" : "bg-white text-[#2E3192]"} `}
            onClick={() => settogglesection(true)}
          >
            Photography
          </div>
          <div
            className={`font-helvetica cursor-pointer rounded-full px-8 py-2 font-normal duration-300 ${!togglesection ? "bg-[#2E3192] text-white" : "bg-white"} transition-all`}
            onClick={() => settogglesection(false)}
          >
            Videography
          </div>
        </div>
      </div>
      <div className="flex min-w-[100%] flex-col items-center justify-between gap-9">
        {togglesection ? (
          <div className="flex min-h-full min-w-full flex-col items-start justify-around gap-5">
            <div className="flex min-w-full flex-col items-start justify-between gap-5 rounded-xl bg-white p-5 md:flex-row">
              <div className="flex min-w-[100%] flex-col gap-7">
                <label className="text-xl font-semibold" htmlFor="appetizers">
                  Types Of Styles<span className="text-red-500">*</span>
                </label>
                <Appetizers
                  field={"_styles"}
                  appetizers={styles}
                  selectedAppetizers={photoSelectedstyles}
                  setSelectedAppetizers={setphotoSelectedstyles}
                />
              </div>
            </div>
            <div className="flex min-w-full flex-col items-start justify-between gap-5 rounded-xl bg-white p-5 md:flex-row">
              <div className="flex min-w-[100%] flex-col gap-7">
                <label className="text-xl font-semibold" htmlFor="beverages">
                  Equipments Available<span className="text-red-500">*</span>
                </label>
                <Appetizers
                  field={"_equipments"}
                  appetizers={equipments}
                  selectedAppetizers={photoequipments}
                  setSelectedAppetizers={setphotoEquipments}
                />
              </div>
            </div>
            <div className="flex min-w-full flex-col items-start justify-between gap-5 rounded-xl bg-white p-5 md:flex-row">
              <div className="flex min-w-[100%] flex-col gap-7">
                <label className="text-xl font-semibold" htmlFor="appetizers">
                  Add-ons or upgrades available
                  <span className="text-red-500">*</span>
                </label>
                <Appetizers
                  field={"_addons"}
                  appetizers={Addonslist}
                  selectedAppetizers={photoAddons}
                  setSelectedAppetizers={setphotoAddons}
                />
              </div>
            </div>
            <div className="flex min-w-full flex-col items-start justify-between gap-5 rounded-xl bg-white p-5">
              <div className="flex min-w-[100%] flex-col gap-7">
                <label className="text-xl font-semibold" htmlFor="appetizers">
                  Final Delivery Methods<span className="text-red-500">*</span>
                </label>
                <Appetizers
                  field={"FinalDeliveryMethodslist"}
                  appetizers={FinalDeliveryMethodslist}
                  selectedAppetizers={photofinaldeliverymethods}
                  setSelectedAppetizers={setphotoFinaldeliverymethods}
                />
              </div>
              <div className="mt-9 flex flex-row items-stretch gap-7 self-end bg-white">
                <button
                  className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
                  onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
                >
                  Back
                </button>
                <button
                  className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
                  onClick={onContinue}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex min-h-full min-w-full flex-col items-start justify-around gap-5">
            <div className="flex min-w-full flex-col items-start justify-between gap-5 rounded-xl bg-white p-5 md:flex-row">
              <div className="flex min-w-[100%] flex-col gap-7">
                <label className="text-xl font-semibold" htmlFor="appetizers">
                  Types Of Styles<span className="text-red-500">*</span>
                </label>
                <Appetizers
                  field={"_styles"}
                  appetizers={styles}
                  selectedAppetizers={videoSelectedstyles}
                  setSelectedAppetizers={setvideoStyles}
                />
              </div>
            </div>
            <div className="flex min-w-full flex-col items-start justify-between gap-5 rounded-xl bg-white p-5 md:flex-row">
              <div className="flex min-w-[100%] flex-col gap-7">
                <label className="text-xl font-semibold" htmlFor="beverages">
                  Equipments Available<span className="text-red-500">*</span>
                </label>
                <Appetizers
                  field={"_equipments"}
                  appetizers={equipments}
                  selectedAppetizers={Selectedvideoequipments}
                  setSelectedAppetizers={setvideoSelectedEquipments}
                />
              </div>
            </div>
            <div className="flex min-w-full flex-col items-start justify-between gap-5 rounded-xl bg-white p-5 md:flex-row">
              <div className="flex min-w-[100%] flex-col gap-7">
                <label className="text-xl font-semibold" htmlFor="appetizers">
                  Add-ons or upgrades available
                  <span className="text-red-500">*</span>
                </label>
                <Appetizers
                  field={"_addons"}
                  appetizers={Addonslist}
                  selectedAppetizers={videoAddons}
                  setSelectedAppetizers={setvideoAddons}
                />
              </div>
            </div>
            <div className="flex min-w-full flex-col items-start justify-between gap-5 rounded-xl bg-white p-5">
              <div className="flex min-w-[100%] flex-col gap-7">
                <label className="text-xl font-semibold" htmlFor="appetizers">
                  Final Delivery Methods<span className="text-red-500">*</span>
                </label>
                <Appetizers
                  field={"FinalDeliveryMethodslist"}
                  appetizers={FinalDeliveryMethodslist}
                  selectedAppetizers={videofinaldeliverymethods}
                  setSelectedAppetizers={setvideoFinaldeliverymethods}
                />
              </div>
              <div className="mt-9 flex flex-row items-stretch gap-7 self-end bg-white">
                <button
                  className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
                  onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
                >
                  Back
                </button>
                <button
                  className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
                  onClick={onContinue}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page1;
