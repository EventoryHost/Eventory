"use client";
import "../app/globals.css";

import * as React from "react";
import { useState } from "react";
import { ComboboxDemo } from "./dropdown";
import { DatePickerWithRange } from "./datePicket";
import { WandSparkles } from "lucide-react";

const frameworks = [
  {
    value: "Birthday",
    label: "Birthday",
  },
  {
    value: "Marriage",
    label: "Marriage",
  },
  {
    value: "Anniversary",
    label: "Anniversary",
  },
  {
    value: "Special Guest",
    label: "Special Guest",
  },
  {
    value: "Tradional",
    label: "Tradional",
  },
];

const cities = [
  {
    value: "Delhi",
    label: "Delhi",
  },
  {
    value: "Mumbai",
    label: "Mumbai",
  },
  {
    value: "Kolkata",
    label: "Kolkata",
  },
  {
    value: "Chennai",
    label: "Chennai",
  },
  {
    value: "Bangalore",
    label: "Bangalore",
  },
];

export function DropdownBar() {
  const [event, setEvent] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  return (
    <div className="flex max-w-full flex-col items-center justify-center rounded-xl lpt:flex-row lpt:gap-0">
      <ComboboxDemo
        options={frameworks}
        placeholder="Select Event"
        setFunction={setEvent}
        className="rounded-b-none rounded-t-xl py-7 hover:text-[#2E3192] lpt:rounded-l-xl lpt:rounded-t-none lpt:rounded-tl-xl"
      />
      <ComboboxDemo
        options={cities}
        placeholder="Select Location"
        setFunction={setLocation}
        className="flex items-center justify-between rounded-none py-7 hover:text-[#2E3192]"
      />
      <DatePickerWithRange className="max-w-fit rounded-none py-7" />
      <button className="group flex w-[300px] items-center justify-center rounded-b-xl bg-[#2E3192] px-3 py-4 text-white hover:bg-indigo-400 hover:text-[#2E3192] md:h-[65px] md:w-[500px] lpt:w-[150px] lpt:rounded-b-none lpt:rounded-r-xl lpt:rounded-br-xl">
        <a href={`/SearchPage?event=${encodeURIComponent(event)}`} className="text-lg">
          Explore
        </a>
      </button>

    </div>
  );
}
