"use client";
import React, { useState } from "react";
import Appetizers from "../../(components)/Appetizers";

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
  return (
    <div
      className="scroll-touch flex flex-col items-start gap-7 overflow-y-scroll rounded-xl p-3 scrollbar-hide xs:w-[95%] xs:min-w-[90%] xs:justify-start md:p-6"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="flex w-[100%] flex-col justify-start rounded-xl bg-white p-5">
        <div className="flex items-center justify-start gap-5">
          <svg
            onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.3233 10L6.35314 13.9702C5.88229 14.441 5.88229 15.2044 6.35314 15.6753L10.3233 19.6455M6.70627 14.8227L23.5858 14.8227"
              stroke="#2B3F6C"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
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
                  onClick={handleContinue}
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
                  onClick={handleContinue}
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
