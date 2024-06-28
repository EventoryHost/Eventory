"use client";

import * as React from "react";
import { useState } from "react";
import { ComboboxDemo } from "../dropdown";
import { DatePickerWithRange } from "../datePicket";
import { WandSparkles } from "lucide-react";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

export function DropdownBar() {
  const [event, setEvent] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  return (
    <div className="flex max-w-full flex-col items-center justify-center rounded-xl xl:flex-row xl:gap-0">
      <ComboboxDemo
        options={frameworks}
        placeholder="Select Event"
        setFunction={setEvent}
        className="rounded-b-none rounded-t-xl py-7 hover:text-[#2E3192] xl:rounded-l-xl xl:rounded-t-none xl:rounded-tl-xl"
      />
      <ComboboxDemo
        options={frameworks}
        placeholder="Select Location"
        setFunction={setLocation}
        className="flex items-center justify-between rounded-none py-7 hover:text-[#2E3192]"
      />
      <DatePickerWithRange className="max-w-fit rounded-none py-7" />
      <button className="flex w-[300px] items-center justify-center rounded-b-xl bg-[#2E3192] px-3 py-4 text-white hover:bg-indigo-400 hover:text-[#2E3192] xl:w-fit xl:rounded-b-none xl:rounded-r-xl xl:rounded-br-xl">
        <WandSparkles className="h-6 w-6" />
      </button>
    </div>
  );
}
