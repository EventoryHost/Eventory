"use client";

import { Upload } from "lucide-react";
import React from "react";
import Appetizers from "../../caterer/(components)/Appetizers";

const equipments=[
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
"Others"
]


type Page1Props = {
  handleContinue: () => void;
  selectedAppetizers: string[];
  setSelectedAppetizers: React.Dispatch<React.SetStateAction<string[]>>;
};

const Page3 = ({
  handleContinue,
  selectedAppetizers,
  setSelectedAppetizers,
}: Page1Props) => {
  return (
    <form className="flex h-[100%] flex-col items-start gap-7 overflow-y-scroll rounded-xl p-3 xs:w-[100%] xs:min-w-[90%] xs:justify-start md:p-6">
      <div className="flex w-[100%] flex-col justify-start gap-9 rounded-xl bg-white p-5">
        <h1 className="text-3xl font-semibold">Basic Details</h1>
        <div className="flex flex-col gap-5">
          <p className="text-md font-semibold">
            do you provide Customizable Sound and lighting rates ?{" "}
          </p>
          <div className="flex gap-7">
            <div className="flex items-center gap-3">
              <input type="radio" />
              <label className="text-sm" htmlFor="radio">
                Yes
              </label>
            </div>
            <div className="flex items-center gap-3">
              <input type="radio" />
              <label className="text-sm" htmlFor="radio">
                No
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex min-w-[100%] flex-col items-center justify-between gap-9">
        <div className="flex min-h-full min-w-full flex-col items-start justify-around gap-5">
          <div className="flex min-w-full flex-col items-start justify-between gap-5 rounded-xl bg-white p-5 md:flex-row">
            <div className="flex min-w-[100%] flex-col gap-7">
              <label className="text-xl font-semibold" htmlFor="appetizers">
                Types Of Equipments Available
              </label>
              <Appetizers
                appetizers={equipments}
                selectedAppetizers={selectedAppetizers}
                setSelectedAppetizers={setSelectedAppetizers}
              />
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
    </form>
  );
};

export default Page3;
