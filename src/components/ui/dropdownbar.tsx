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
]


  export function DropdownBar(){
  const [event, setEvent] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  return (
    <div className="flex lpt:flex-row flex-col lpt:gap-0 max-w-full rounded-xl justify-center items-center">
      <ComboboxDemo options={frameworks} placeholder="Select Event" setFunction={setEvent}  className="lpt:rounded-l-xl lpt:rounded-t-none lpt:rounded-tl-xl hover:text-[#2E3192] rounded-t-xl py-7 rounded-b-none"/>
      <ComboboxDemo options={frameworks} placeholder="Select Location" setFunction={setLocation} className="rounded-none py-7 flex items-center justify-between hover:text-[#2E3192]"/>
      <DatePickerWithRange className="max-w-fit rounded-none py-7 "/>
      <button className="lpt:rounded-r-xl md:h-[65px] group lpt:rounded-br-xl lpt:rounded-b-none rounded-b-xl flex justify-center items-center bg-[#2E3192] hover:bg-indigo-400 hover:text-[#2E3192] lpt:w-fit md:w-[500px] w-[300px] py-4 px-3 text-white"><WandSparkles className="h-6 w-6 group-hover:animate-pulse"/></button>
    </div>
  );
}
