"use client";

import React from "react";
import Appetizers from "../../(components)/Appetizers";

const _typesOfEvent = [
  "Anniversary Celebration",
  "Birthday Party",
  "Corporate Event",
  "Cultural Events",
  "Others",
  "Seasonal Parties",
  "Wedding Events",
];

const _weddingEvents = [
  "After-Party",
  "Bachelorette Party",
  "Bridal Luncheon",
  "Engagement Party",
  "Haldi",
  "Mandap decor",
  "Mehndi",
  "Others",
  "Post-Wedding Reception",
  "Ring Ceremony",
  "Sangeet",
  "Stage decor",
  "Wedding Shower",
  "Welcome Party",
];

const _corporateEvents = [
  "Art Exhibitions",
  "Award Ceremonies",
  "Club Meetings",
  "Launch Party",
  "Networking Events",
  "Others",
  "Product Launch Webinars",
  "Trade Shows and Expos",
];

const _seasonalEvents = [
  "Anniversary",
  "Annual Function",
  "Birthday Party",
  "Convocation",
  "Farewell",
  "Freshers",
  "Halloween",
  "New Year",
  "Others",
  "Valentine",
];

const _culturalEvents = [
  "Christmas",
  "Diwali",
  "Durga Puja",
  "Eid-ul-Fitr",
  "Ganesh Chaturthi",
  "Holi",
  "Kala ghoda",
  "Lohri",
  "Navratri",
  "Onam",
  "Others",
  "Pongal",
];

interface FormState {
  businessName: string;
  references: boolean;
  portfolio: string;
  experience: string;
}

interface Page1Props {
  formState: {
    businessName: string;
    references: boolean;
    portfolio: string | File;
    experience: string;
  };
  updateFormState: (newState: Partial<FormState>) => void;
  typeOfevents: string[];
  setTypesOfEvents: React.Dispatch<React.SetStateAction<string[]>>;
  weddingEvents: string[];
  setWeddingEvents: React.Dispatch<React.SetStateAction<string[]>>;
  corporateEvents: string[];
  setCorporateEvents: React.Dispatch<React.SetStateAction<string[]>>;
  seasonalEvents: string[];
  setSeasonalEvents: React.Dispatch<React.SetStateAction<string[]>>;
  culturalEvents: string[];
  setCulturalEvents: React.Dispatch<React.SetStateAction<string[]>>;
  handleContinue: () => void;
}

const Page1: React.FC<Page1Props> = ({
  formState,
  typeOfevents,
  setTypesOfEvents,
  weddingEvents,
  setWeddingEvents,
  corporateEvents,
  setCorporateEvents,
  seasonalEvents,
  setSeasonalEvents,
  culturalEvents,
  setCulturalEvents,
  updateFormState,
  handleContinue,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateFormState({ [name]: value });
    console.log(formState.businessName);
  };
  const onContinue = () => {
    // if (validateForm()) {
    //   handleContinue();
    // }
    handleContinue();
  };

  return (
    <div className="flex h-full flex-col items-start justify-start gap-5 overflow-y-scroll scrollbar-hide xs:w-[95%] xs:min-w-[90%]">
      <div className="flex min-w-full flex-col items-start justify-around gap-10">
        <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[100%] md:p-6">
          <div className="flex flex-col items-start justify-center gap-9 px-9 xs:pl-5 md:px-11 lg:p-8">
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              Your business Name
            </h1>
            <input
              className="h-12 w-full rounded-xl border border-gray-300 p-4"
              type="text"
              id="businessName"
              name="businessName"
              value={formState.businessName}
              placeholder="Enter your business name"
              onChange={handleInputChange}
            />
          </div>

          <h1 className="text-3xl font-semibold">Types of Event</h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <Appetizers
                field={"_typesOfEvent"}
                appetizers={_typesOfEvent}
                selectedAppetizers={typeOfevents}
                setSelectedAppetizers={setTypesOfEvents}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[100%] md:p-6">
          <h1 className="text-3xl font-semibold">Wedding Events</h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <Appetizers
                field={"_weddingEvents"}
                appetizers={_weddingEvents}
                selectedAppetizers={weddingEvents}
                setSelectedAppetizers={setWeddingEvents}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[100%] md:p-6">
          <h1 className="text-3xl font-semibold">Corporate Events</h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <Appetizers
                field={"_corporateEvents"}
                appetizers={_corporateEvents}
                selectedAppetizers={corporateEvents}
                setSelectedAppetizers={setCorporateEvents}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[100%] md:p-6">
          <h1 className="text-3xl font-semibold">Seasonal Events</h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <Appetizers
                field={"_seasonalEvents"}
                appetizers={_seasonalEvents}
                selectedAppetizers={seasonalEvents}
                setSelectedAppetizers={setSeasonalEvents}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[100%] md:p-6">
          <h1 className="text-3xl font-semibold">Cultural Events</h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <Appetizers
                field={"_culturalEvents"}
                appetizers={_culturalEvents}
                selectedAppetizers={culturalEvents}
                setSelectedAppetizers={setCulturalEvents}
              />
            </div>
            <div className="items-strech mt-9 flex flex-row gap-7 self-end">
              <button
                className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
                onClick={handleContinue}
              >
                Skip
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
      </div>
    </div>
  );
};

export default Page1;
