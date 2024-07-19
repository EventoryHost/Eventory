"use client";

import React, { useState } from "react";
import { Combobox } from "@/components/ui/combobox";
import Appetizers from "../(components)/Appetizers";

const _decorTypes = [
  { value: "indoor", label: "Inhouse Decor" },
  { value: "external_allowed", label: "External Decor Allowed" },
  { value: "external_not  ", label: "External Decor Not Allowed" },
];

const _audioEquipment = [
  "Amplifiers",
  "Audio Mixers",
  "Camcorders",
  "Dlp Projectors",
  "Led Screens",
  "Lcd Projectors",
  "Microphones",
  "Monitors",
  "Others",
  "Ptz Cameras", // PTZ (Pan-Tilt-Zoom) Cameras
  "Projection Screens",
  "Speakers",
];

const _accessibilityFeatures = [
  "Audio Descriptions",
  "Braille Screens",
  "Clear Pathways",
  "Emergency Procedures",
  "Hearing Loops",
  "Interpreters",
  "Others",
  "Parkings",
  "Restrooms",
  "Screen Readers",
  "Sensory Rooms",
  "Visual Sign Support",
  "Wheelchair Access",
];

const _facilities = [
  "Av Equipments",
  "Banquet Hall",
  "Bridal Room",
  "Charging Stations",
  "Fill Hvac Control", // Assuming 'fill_hug_te_control' is a typo
  "First Aid Equipments",
  "Garden Area",
  "High Speed Internet",
  "Others",
  "Storage Area",
];
interface FormState {
  venueType: string;
  venueDescription: string;
  decorType: string;
  // audioVisualEquipment: string[];
  // accessibilityFeatures: string[];
  //facilities: string[];
}

interface Page2Props {
  audioVisualEquipment: string[];
  setAudioVisualEquipment: React.Dispatch<React.SetStateAction<string[]>>;
  accessibilityFeatures: string[];
  setAccessibilityFeatures: React.Dispatch<React.SetStateAction<string[]>>;
  facilities: string[];
  setFacilities: React.Dispatch<React.SetStateAction<string[]>>;

  formState: FormState;
  updateFormState: (newState: Partial<FormState>) => void;
}

const Page: React.FC<Page2Props> = ({
  formState,
  updateFormState,
  audioVisualEquipment,
  setAudioVisualEquipment,
  accessibilityFeatures,
  setAccessibilityFeatures,
  facilities,
  setFacilities,
}) => {
  const { decorType } = formState;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("DecorType:", formState.decorType);
  };

  return (
    <div className="flex h-full min-h-[calc(100vh-5.2rem)] w-full flex-col overflow-hidden lg:flex-row">
      <div className="flex flex-col items-start justify-between bg-[#FFFFFF] xs:gap-7 xs:pt-4 md:min-w-[30%] lg:max-w-[30%]">
        <div className="flex items-center justify-start gap-1 xs:self-start xs:pl-5 md:px-11 lg:mt-[2rem]">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2E3192] p-5 text-white">
            1
          </button>
          <div className="h-[0.3rem] w-[4rem] rounded-xl bg-[#2E3192]"></div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2E3192] p-5 text-white">
            2
          </button>
          <div className="h-[0.3rem] w-[4rem] rounded-xl bg-gray-300"></div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 p-5">
            3
          </button>
          <div className="h-[0.3rem] w-[4rem] rounded-xl bg-gray-300"></div>
        </div>
        <div className="flex items-center justify-start gap-1 xs:self-start xs:pl-5 md:px-11 lg:mt-[1rem]">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 p-5">
            4
          </button>
          <div className="h-[0.3rem] w-[4rem] rounded-xl bg-gray-300"></div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 p-5">
            5
          </button>
          <div className="h-[0.3rem] w-[4rem] rounded-xl bg-gray-300"></div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 p-5">
            6
          </button>
        </div>
        <div className="flex h-[50%] flex-col items-start justify-center gap-9 px-9 xs:pl-5 md:px-11 lg:p-8">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Tell us about your business
          </h1>
          <p className="text-black xs:text-sm md:w-[90%]">
            Fill out your Business details to get verified and proceed to
            registration process.
          </p>
        </div>
        <div className="relative h-[10rem] lg:w-full">
          <img
            src={"/tajmahal.png"}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="scroll-touch flex max-h-[calc(100vh-5.2rem)] min-w-[70%] flex-col items-center gap-9 overflow-y-scroll bg-[#F7F6F9] p-2 md:p-[1rem]">
        <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <div className="flex gap-9">
            <h1 className="text-3xl font-semibold">Venue Feature details</h1>
          </div>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-start justify-between gap-2">
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="category">Decor Services</label>
                <Combobox
                  options={_decorTypes}
                  placeholder="Select Decor Type"
                  setFunction={(value) => updateFormState({ decorType: value })}
                  className="flex items-center justify-between rounded-xl border-2 py-6 hover:text-[#2E3192]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <h1 className="text-3xl font-semibold">
            Audio and visual Equipment you provide{" "}
          </h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <Appetizers
                appetizers={_audioEquipment}
                selectedAppetizers={audioVisualEquipment}
                setSelectedAppetizers={setAudioVisualEquipment}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <h1 className="text-3xl font-semibold">
            Accessibility Features at your Venue{" "}
          </h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <Appetizers
                appetizers={_accessibilityFeatures}
                selectedAppetizers={accessibilityFeatures}
                setSelectedAppetizers={setAccessibilityFeatures}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <h1 className="text-3xl font-semibold">Facilities at your Venue</h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <Appetizers
                appetizers={_facilities}
                selectedAppetizers={facilities}
                setSelectedAppetizers={setFacilities}
              />
            </div>
            <div className="items-strech mt-9 flex flex-row gap-7 self-end">
              <button
                className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:w-fit xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
                onClick={handleSubmit}
              >
                Skip
              </button>
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
    </div>
  );
};

export default Page;
