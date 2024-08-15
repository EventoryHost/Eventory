"use client";

import React, { useState } from "react";
import Image from "next/image";

import tajmahal from "/public/tajmahal.png";
import { ComboboxDemo } from "@/components/dropdown";
import { Dropdown } from "react-day-picker";
import { Combobox } from "@/components/ui/combobox";

const venueTypes = [
  { value: "indoor", label: "Indoor" },
  { value: "outdoor", label: "Outdoor" },
  { value: "both", label: "Both" },
];

const seatingOptions = [
  { value: "", label: "Seated" },
  { value: "less than 100", label: "<100 persons" },
  { value: "300", label: "100-300 persons" },
  { value: "400", label: "300-400 persons" },
  { value: "500", label: "> 500 persons" },
];

const standingOptions = [
  { value: "", label: "Seated" },
  { value: "less than 100", label: "<100 persons" },
  { value: "300", label: "100-300 persons" },
  { value: "400", label: "300-400 persons" },
  { value: "500", label: "> 500 persons" },
];

const timeOptions = [
  { value: "00:00", label: "00:01 AM" },
  { value: "01:00", label: "01:00 AM" },
  { value: "02:00", label: "02:00 AM" },
  { value: "03:00", label: "03:00 AM" },
  { value: "04:00", label: "04:00 AM" },
  { value: "05:00", label: "05:00 AM" },
  { value: "06:00", label: "06:00 AM" },
  { value: "07:00", label: "07:00 AM" },
  { value: "08:00", label: "08:00 AM" },
  { value: "09:00", label: "09:00 AM" },
  { value: "10:00", label: "10:00 AM" },
  { value: "11:00", label: "11:00 AM" },
  { value: "12:00", label: "12:00 PM" },
  { value: "13:00", label: "1:00 PM" },
  { value: "14:00", label: "2:00 PM" },
  { value: "15:00", label: "3:00 PM" },
  { value: "16:00", label: "4:00 PM" },
  { value: "17:00", label: "5:00 PM" },
  { value: "18:00", label: "6:00 PM" },
  { value: "19:00", label: "7:00 PM" },
  { value: "20:00", label: "8:00 PM" },
  { value: "21:00", label: "9:00 PM" },
  { value: "22:00", label: "10:00 PM" },
  { value: "23:00", label: "11:00 PM" },
  { value: "24:00", label: "11:59 PM" },
];

interface FormState {
  venueName: string;
  VenueAddress: string;
  venueType: string;
  seatingCapacity: string;
  standingCapacity: string;
  startOperatingHours: string;
  endOperatingHours: string;
  venueDescription: string;
}

interface Page1Props {
  formState: FormState;
  updateFormState: (newState: Partial<FormState>) => void;
}

const Page1: React.FC<Page1Props> = ({ formState, updateFormState }) => {
  const {
    venueName,
    VenueAddress,
    venueType,
    seatingCapacity,
    standingCapacity,
    startOperatingHours,
    endOperatingHours,
    venueDescription,
  } = formState;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Venue Type:", venueType);
    console.log("Seating Capacity:", seatingCapacity);
    console.log("Standing Capacity:", standingCapacity);
    console.log("Starting Operating Time:", startOperatingHours);
    console.log("Ending Operating Time:", endOperatingHours);
    console.log("Venue Description:", venueDescription);
  };

  return (
    <div className="flex h-full min-h-[calc(100vh-5.2rem)] w-full flex-col overflow-hidden lg:flex-row">
      <div className="flex flex-col items-start justify-between bg-[#FFFFFF] xs:gap-7 xs:pt-4 md:min-w-[30%] lg:max-w-[30%]">
        <div className="flex items-center justify-start gap-1 xs:self-start xs:pl-5 md:px-11 lg:mt-[2rem]">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2E3192] p-5 text-white">
            1
          </button>
          <div className="h-[0.3rem] w-[4rem] rounded-xl bg-gray-300"></div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 p-5">
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
            Fill out your venue details
          </h1>
          <p className="text-black xs:text-sm md:w-[90%]">
            Please provide the details of the venue offered by your company.
          </p>
        </div>
        <div className="relative h-[10rem] lg:w-full">
          <Image
            src={tajmahal}
            alt="Image of Indian monuments"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="flex min-w-[70%] flex-col items-center justify-center bg-[#F7F6F9] p-2 md:p-[1rem]">
        <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <h1 className="text-3xl font-semibold">Basic Details</h1>
          <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
            <div className="flex min-w-[40%] flex-col gap-4">
              <label htmlFor="businessName">Venue Name</label>
              <input
                id="businessName"
                type="text"
                className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                placeholder="Enter your Venue Name"
                value={venueName}
                onChange={(e) => updateFormState({ venueName: e.target.value })}
              />
            </div>
            <div className="flex min-w-[40%] flex-col gap-4">
              <label htmlFor="businessName">Venue Address</label>
              <input
                id="businessName"
                type="text"
                className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                placeholder="Enter your Venue address"
                value={VenueAddress}
                onChange={(e) =>
                  updateFormState({ VenueAddress: e.target.value })
                }
              />
            </div>
          </div>

          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="category">Venue Type</label>
                <Combobox
                  options={venueTypes}
                  placeholder="Select your category"
                  setFunction={(value) => updateFormState({ venueType: value })}
                  className="flex items-center justify-between rounded-xl border-2 py-6 hover:text-[#2E3192]"
                />
              </div>
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="category">Seating Capacity</label>
                <Combobox
                  options={seatingOptions}
                  placeholder="Select your category"
                  setFunction={(value) =>
                    updateFormState({ seatingCapacity: value })
                  }
                  className="flex items-center justify-between rounded-xl border-2 py-6 hover:text-[#2E3192]"
                />
              </div>
            </div>
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="category">Operating hours</label>
                <Combobox
                  options={timeOptions}
                  placeholder="start timings..."
                  setFunction={(value) =>
                    updateFormState({ startOperatingHours: value })
                  }
                  className="flex items-center justify-between rounded-xl border-2 py-6 hover:text-[#2E3192]"
                />
                <Combobox
                  options={timeOptions}
                  placeholder="ending timings..."
                  setFunction={(value) =>
                    updateFormState({ endOperatingHours: value })
                  }
                  className="flex items-center justify-between rounded-xl border-2 py-6 hover:text-[#2E3192]"
                />
              </div>
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="category">Standing Capacity</label>
                <Combobox
                  options={standingOptions}
                  placeholder="Select your category"
                  setFunction={(value) =>
                    updateFormState({ standingCapacity: value })
                  }
                  className="flex items-center justify-between rounded-xl border-2 py-6 hover:text-[#2E3192]"
                />
              </div>
            </div>
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="businessName">Venue Description</label>
                <input
                  id="businessName"
                  type="text"
                  className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                  placeholder="Enter your Venue Description"
                  value={venueDescription}
                  onChange={(e) =>
                    updateFormState({ venueDescription: e.target.value })
                  }
                />
              </div>
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

export default Page1;
