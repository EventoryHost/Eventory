"use client";

import React, { useState } from "react";
import { ComboboxDemo } from "@/components/dropdown";
import { Dropdown } from "react-day-picker";
import { Combobox } from "@/components/ui/combobox";

const regional = [
  { value: "gujrati", label: "Gujrati" },
  { value: "rajasthani", label: "Rajasthani" },
  { value: "bengali", label: "Bengali" },
  { value: "other", label: "Other" },
];

const venueType = [
  { value: "indoor", label: "Indoor" },
  { value: "outdoor", label: "Outdoor" },
  { value: "both", label: "Both" },
];

const seatingOptions = [
  { value: "", label: "Seated" },
  { value: "lessThan100", label: "<100 persons" },
  { value: "100to300", label: "100-300 persons" },
  { value: "300to400", label: "300-400 persons" },
  { value: "moreThan500", label: "> 500 persons" },
];

const standingOptions = [
  { value: "", label: "Standing" },
  { value: "lessThan100", label: "<100 persons" },
  { value: "100to300", label: "100-300 persons" },
  { value: "300to400", label: "300-400 persons" },
  { value: "moreThan500", label: "> 500 persons" },
];

const timeOptions = [
  { value: "07:00", label: "07:00 hours" },
  { value: "08:00", label: "08:00 hours" },
  { value: "09:00", label: "09:00 hours" },
  { value: "10:00", label: "10:00 hours" },
  { value: "11:00", label: "11:00 hours" },
  { value: "12:00", label: "12:00 hours" },
  { value: "13:00", label: "13:00 hours" },
  { value: "14:00", label: "14:00 hours" },
  { value: "15:00", label: "15:00 hours" },
  { value: "16:00", label: "16:00 hours" },
  { value: "17:00", label: "17:00 hours" },
  { value: "18:00", label: "18:00 hours" },
  { value: "19:00", label: "19:00 hours" },
  { value: "20:00", label: "20:00 hours" },
  { value: "21:00", label: "21:00 hours" },
  { value: "22:00", label: "22:00 hours" },
  { value: "23:00", label: "23:00 hours" },
];

const Page = () => {
  const [venuetype, setVenueType] = useState("");
  const [seatingCapacity, setSeatingCapacity] = useState("");
  const [standingCapacity, setStandingOptions] = useState("");
  const [operatingHours, setOperatingHours] = useState("");
  const [venueDescription, setVenueDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Venue Type:", venuetype);
    console.log("Seating Capacity:", seatingCapacity);
    console.log("Standing Capacity:", standingCapacity);
    console.log("Operating Hours:", operatingHours);
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
          <img
            src={"/tajmahal.png"}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="flex min-w-[70%] flex-col items-center justify-center bg-[#F7F6F9] p-2 md:p-[1rem]">
        <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <h1 className="text-3xl font-semibold">Basic Details</h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="category">Venue Type</label>
                <Combobox
                  options={venueType}
                  placeholder="Select your category"
                  setFunction={setVenueType}
                  className="flex items-center justify-between rounded-xl border-2 py-6 hover:text-[#2E3192]"
                />
              </div>
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="category">Seating Capacity</label>
                <Combobox
                  options={seatingOptions}
                  placeholder="Select your category"
                  setFunction={setSeatingCapacity}
                  className="flex items-center justify-between rounded-xl border-2 py-6 hover:text-[#2E3192]"
                />
              </div>
            </div>
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="category">Operating hours</label>
                <Combobox
                  options={timeOptions}
                  placeholder="Select your category"
                  setFunction={setOperatingHours}
                  className="flex items-center justify-between rounded-xl border-2 py-6 hover:text-[#2E3192]"
                />
              </div>
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="category">Standing Capacity</label>
                <Combobox
                  options={standingOptions}
                  placeholder="Select your category"
                  setFunction={setStandingOptions}
                  className="flex items-center justify-between rounded-xl border-2 py-6 hover:text-[#2E3192]"
                />
              </div>
              {/* <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="businessName">Venue Description</label>
                <input
                  id="businessName"
                  type="text"
                  className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 outline-none"
                  placeholder="Enter your business name"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                />
              </div> */}
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
                  onChange={(e) => setVenueDescription(e.target.value)}
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

export default Page;
