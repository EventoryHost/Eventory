"use client";

import { Upload } from "lucide-react";
import React from "react";
import Appetizers from "../../(components)/Appetizers";
import { BasicDetails } from "@/types/types";

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

const events = [
  "Wedding",
  "Birthday",
  "Corporate",
  "Baby Shower",
  "Anniversary",
  "House Warming",
  "Farewell",
  "Others",
];

type Page1Props = {
  basicDetail: BasicDetails;
  setBasicDetail: (basicDetail: BasicDetails) => void;
  Selectedstyles: string[];
  setStyles: React.Dispatch<React.SetStateAction<string[]>>;
  Selectedevents: string[];
  setEvents: React.Dispatch<React.SetStateAction<string[]>>;
  customozablePackage: boolean;
  setCustomozablePackage: (customozablePackage: boolean) => void;
  handleContinue: () => void;
};

const Page1 = ({
  basicDetail,
  setBasicDetail,
  Selectedstyles,
  setStyles,
  Selectedevents,
  setEvents,
  customozablePackage,
  setCustomozablePackage,
  handleContinue,
}: Page1Props) => {
  return (
    <div
      className="flex h-[100%] flex-col items-start gap-7 overflow-y-scroll rounded-xl p-3 xs:w-[100%] xs:min-w-[90%] xs:justify-start md:p-6"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="flex w-[100%] flex-col justify-start gap-9 rounded-xl bg-white p-5 md:flex-row">
        <h1 className="text-3xl font-semibold">Basic Details</h1>
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="detail"
              value="Both"
              checked={basicDetail === "both"}
              onChange={(e) => setBasicDetail("both")}
            />
            <label htmlFor="radio">Both</label>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="detail"
              value="photo"
              checked={basicDetail === "photo"}
              onChange={(e) => setBasicDetail("photo")}
            />
            <label htmlFor="radio">Photographer</label>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="detail"
              value="Videographer"
              checked={basicDetail === "video"}
              onChange={(e) => setBasicDetail("video")}
            />
            <label htmlFor="radio">Videographer</label>
          </div>
        </div>
      </div>
      <div className="flex min-w-[100%] flex-col items-center justify-between gap-9">
        <div className="flex min-h-full min-w-full flex-col items-start justify-around gap-5">
          <div className="flex min-w-full flex-col items-start justify-between gap-5 rounded-xl bg-white p-5 md:flex-row">
            <div className="flex min-w-[100%] flex-col gap-7">
              <label className="text-xl font-semibold" htmlFor="appetizers">
                Types Of Styles
              </label>
              <Appetizers
              field={'_styles'}
                appetizers={styles}
                selectedAppetizers={Selectedstyles}
                setSelectedAppetizers={setStyles}
              />
            </div>
          </div>
          <div className="flex min-w-full flex-col items-start justify-between gap-5 rounded-xl bg-white p-5 md:flex-row">
            <div className="flex min-w-[100%] flex-col gap-7">
              <label className="text-xl font-semibold" htmlFor="beverages">
                Types Of Events
              </label>
              <Appetizers
               field={'_events'}
                appetizers={events}
                selectedAppetizers={Selectedevents}
                setSelectedAppetizers={setEvents}
              />
            </div>
          </div>
          <div className="flex min-w-full flex-col items-start justify-between gap-5 rounded-xl bg-white p-5 md:flex-row">
            <div className="flex min-w-[100%] flex-col gap-7">
              <label className="text-lg" htmlFor="beverages">
                Customizable photography & videography package?
              </label>
              <div className="flex gap-5">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="customPackage"
                    value="Yes"
                    checked={customozablePackage === true}
                    onChange={() => setCustomozablePackage(true)}
                  />
                  <label htmlFor="radio">Yes</label>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="customPackage"
                    value="No"
                    checked={customozablePackage === false}
                    onChange={() => setCustomozablePackage(false)}
                  />
                  <label htmlFor="radio">No</label>
                </div>
              </div>
              <div className="mt-9 flex flex-row items-stretch gap-7 self-end">
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
    </div>
  );
};

export default Page1;
