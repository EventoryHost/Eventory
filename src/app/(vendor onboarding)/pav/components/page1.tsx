"use client";

import { useState } from "react";
import Individual from "./(page1)/individual";
import Group from "./(page1)/group";
import Organization from "./(page1)/organization";
import { pavtypes } from "@/types/types";
import Appetizers from "../../(components)/Appetizers";

type Page1Props = {
  fullName: string;
  setFullName: (fullName: string) => void;
  description: string;
  setDescription: (description: string) => void;
  eventsize: number;
  events: string[];
  setEventsize: (eventsize: number) => void;
  setEvent: React.Dispatch<React.SetStateAction<string[]>>;
  handleContinue: () => void;
};

const eventslist = [
  "Anniversary Celebration",
  "Birthday Party",
  "Corporate Party",
  "Cultural Events",
  "Wedding Events",
  "Seasonal Parties",
  "Others",
];
const Page1 = ({
  fullName,
  setFullName,
  description,
  setDescription,
  eventsize,
  setEventsize,
  setEvent,
  events,
  handleContinue,
}: Page1Props) => {
  return (
    <div className="scroll-touch flex flex-col items-start gap-7 overflow-y-scroll rounded-xl p-3 scrollbar-hide xs:justify-start md:p-6">
      <div className="flex w-[100%] flex-col items-start justify-start gap-9 rounded-xl bg-white p-5">
        <div className="flex items-center justify-start gap-5">
          <h1 className="text-3xl font-semibold"> Basic Details</h1>
        </div>
        <div className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row">
          <div className="flex min-w-[40%] flex-col gap-4">
            <label htmlFor="businessName">
              Full Name(POC)<span className="text-red-500">*</span>
            </label>
            <input
              id="Full Name"
              type="text"
              className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div className="flex min-w-[40%] flex-col gap-4">
            <label htmlFor="businessName">
              Event size<span className="text-red-500">*</span>
            </label>
            <input
              id="eventsize"
              type="number"
              className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
              placeholder="Select Your Event size"
              value={eventsize}
              onChange={(e) => setEventsize(parseInt(e.target.value))}
              required
            />
          </div>
        </div>

        <div className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row">
          <div className="flex min-w-[40%] flex-col gap-4">
            <label htmlFor="businessName">
              Description about your background
            </label>
            <textarea
              id="eventsize"
              rows={5}
              className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
              placeholder="Enter Description about your background"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="flex min-w-full flex-col items-center gap-9 rounded-xl bg-white p-5">
        <div className="flex min-w-[100%] flex-col gap-5 rounded-xl bg-white">
          <label htmlFor="years">
            Types of Event<span className="text-red-500">*</span>
          </label>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <Appetizers
                appetizers={eventslist}
                selectedAppetizers={events}
                setSelectedAppetizers={setEvent}
                field={"events"}
              />
            </div>
          </div>
        </div>
        <div className="mt-9 flex flex-row items-stretch gap-7 self-end">
          <button
            className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page1;
/*
<div className="flex flex-col gap-5 md:flex-row">
          <div className="flex items-center gap-3">
            <input
              type="radio"
              id="individual"
              name="type"
              value="individual"
              checked={selectedOption === "individual"}
              onChange={() => {
                setSelectedOption("individual");
                setType("individual");
              }}
            />
            <label htmlFor="individual">Individual</label>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="radio"
              id="group"
              name="type"
              value="group"
              checked={selectedOption === "grp"}
              onChange={() => {
                setSelectedOption("grp");
                setType("grp");
              }}
            />
            <label htmlFor="group">Group</label>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="radio"
              id="organization"
              name="type"
              value="organization"
              checked={selectedOption === "org"}
              onChange={() => {
                setSelectedOption("org");
                setType("org");
              }}
            />
            <label htmlFor="organization">Organization</label>
          </div>
        </div>


        <input
              id="cateringName"
              type="text"
              className={getInputClassName(formState.cateringName)}
              placeholder="Enter your catering name"
              value={formState.cateringName}
              onChange={(e) =>
                updateFormState({ cateringName: e.target.value })
              }
              required
            />
            <input
              id="businessName"
              type="text"
              className={getInputClassName(formState.businessName)}
              placeholder="Enter your business name"
              value={formState.businessName}
              onChange={(e) =>
                updateFormState({ businessName: e.target.value })
              }
              required
            />
*/
